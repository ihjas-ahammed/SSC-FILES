import { Unit } from '../types';

export const UNIT_2_1_6: Unit = {
  id: "unit-2-1-6",
  title: "Finding the Vector from Coordinates",
  description: "Exercises 1-4: Reconstructing a vector from its B-coordinate vector.",
  color: "duo-blue",
  lessons: [
    {
      id: "les-2-1-6-ex1", title: "Exercise 1", description: "R2 Basis", icon: "MapPin",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 1", content: "**Problem:** Find the vector $\\mathbf{x}$ determined by the given coordinate vector $[\\mathbf{x}]_\\mathcal{B}$ and the given basis $\\mathcal{B}$.\n\n$\\mathcal{B} = \\left\\{ \\begin{bmatrix} 3 \\\\ -5 \\end{bmatrix}, \\begin{bmatrix} -4 \\\\ 6 \\end{bmatrix} \\right\\}, \\quad [\\mathbf{x}]_\\mathcal{B} = \\begin{bmatrix} 5 \\\\ 3 \\end{bmatrix}$" },
        { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Compute the linear combination.**", interactiveSteps: [
           { stepText: "The coordinate vector provides the weights: $c_1 = 5$ and $c_2 = 3$." },
           { prompt: "Set up the linear combination.", options: [{id:"A", text:"$\\mathbf{x} = 5 \\begin{bmatrix} 3 \\\\ -5 \\end{bmatrix} + 3 \\begin{bmatrix} -4 \\\\ 6 \\end{bmatrix}$", isCorrect:true, explanation:""}, {id:"B", text:"$\\mathbf{x} = 3 \\begin{bmatrix} 3 \\\\ -5 \\end{bmatrix} + 5 \\begin{bmatrix} -4 \\\\ 6 \\end{bmatrix}$", isCorrect:false, explanation:"Weights must match the order of basis vectors."}], stepText: "$\\mathbf{x} = 5\\mathbf{b}_1 + 3\\mathbf{b}_2$." },
           { stepText: "Compute the vectors: $5\\mathbf{b}_1 = \\begin{bmatrix} 15 \\\\ -25 \\end{bmatrix}$ and $3\\mathbf{b}_2 = \\begin{bmatrix} -12 \\\\ 18 \\end{bmatrix}$." },
           { stepText: "Add them: $\\mathbf{x} = \\begin{bmatrix} 15 - 12 \\\\ -25 + 18 \\end{bmatrix} = \\begin{bmatrix} 3 \\\\ -7 \\end{bmatrix}$." }
        ]}
      ]
    },
    {
      id: "les-2-1-6-ex2", title: "Exercise 2", description: "R2 Basis 2", icon: "MapPin",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 2", content: "**Problem:** Find the vector $\\mathbf{x}$ determined by:\n\n$\\mathcal{B} = \\left\\{ \\begin{bmatrix} 3 \\\\ 2 \\end{bmatrix}, \\begin{bmatrix} -4 \\\\ 1 \\end{bmatrix} \\right\\}, \\quad [\\mathbf{x}]_\\mathcal{B} = \\begin{bmatrix} -2 \\\\ 5 \\end{bmatrix}$" },
        { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Compute $-2\\mathbf{b}_1 + 5\\mathbf{b}_2$.**", interactiveSteps: [
           { stepText: "Multiply the first basis vector by $-2$: $\\begin{bmatrix} -6 \\\\ -4 \\end{bmatrix}$." },
           { prompt: "Multiply the second basis vector by $5$. What do you get?", options: [{id:"A", text:"$\\begin{bmatrix} -20 \\\\ 5 \\end{bmatrix}$", isCorrect:true, explanation:""}, {id:"B", text:"$\\begin{bmatrix} -20 \\\\ 1 \\end{bmatrix}$", isCorrect:false, explanation:""}], stepText: "Second term is $\\begin{bmatrix} -20 \\\\ 5 \\end{bmatrix}$." },
           { stepText: "Add them together: $\\mathbf{x} = \\begin{bmatrix} -6 - 20 \\\\ -4 + 5 \\end{bmatrix} = \\begin{bmatrix} -26 \\\\ 1 \\end{bmatrix}$." }
        ]}
      ]
    },
    {
      id: "les-2-1-6-ex3", title: "Exercise 3", description: "R3 Basis", icon: "Grid",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 3", content: "**Problem:** Find $\\mathbf{x}$ given:\n\n$\\mathcal{B} = \\left\\{ \\begin{bmatrix} 1 \\\\ -2 \\\\ 3 \\end{bmatrix}, \\begin{bmatrix} 5 \\\\ 0 \\\\ -2 \\end{bmatrix}, \\begin{bmatrix} 4 \\\\ -3 \\\\ 0 \\end{bmatrix} \\right\\}, \\quad [\\mathbf{x}]_\\mathcal{B} = \\begin{bmatrix} 1 \\\\ 0 \\\\ -2 \\end{bmatrix}$" },
        { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Compute $1\\mathbf{b}_1 + 0\\mathbf{b}_2 - 2\\mathbf{b}_3$.**", interactiveSteps: [
           { stepText: "Since the second coordinate is 0, we can ignore $\\mathbf{b}_2$ entirely!" },
           { prompt: "What is $-2\\mathbf{b}_3$?", options: [{id:"A", text:"$\\begin{bmatrix} -8 \\\\ 6 \\\\ 0 \\end{bmatrix}$", isCorrect:true, explanation:""}, {id:"B", text:"$\\begin{bmatrix} -8 \\\\ -6 \\\\ 0 \\end{bmatrix}$", isCorrect:false, explanation:""}], stepText: "$-2\\mathbf{b}_3 = \\begin{bmatrix} -8 \\\\ 6 \\\\ 0 \\end{bmatrix}$." },
           { stepText: "$\\mathbf{x} = \\mathbf{b}_1 - 2\\mathbf{b}_3 = \\begin{bmatrix} 1 \\\\ -2 \\\\ 3 \\end{bmatrix} + \\begin{bmatrix} -8 \\\\ 6 \\\\ 0 \\end{bmatrix} = \\begin{bmatrix} -7 \\\\ 4 \\\\ 3 \\end{bmatrix}$." }
        ]}
      ]
    },
    {
      id: "les-2-1-6-ex4", title: "Exercise 4", description: "R3 Basis 2", icon: "Grid",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 4", content: "**Problem:** Find $\\mathbf{x}$ given:\n\n$\\mathcal{B} = \\left\\{ \\begin{bmatrix} -2 \\\\ 2 \\\\ 0 \\end{bmatrix}, \\begin{bmatrix} 3 \\\\ 0 \\\\ 2 \\end{bmatrix}, \\begin{bmatrix} 4 \\\\ -1 \\\\ 3 \\end{bmatrix} \\right\\}, \\quad [\\mathbf{x}]_\\mathcal{B} = \\begin{bmatrix} -3 \\\\ 2 \\\\ -1 \\end{bmatrix}$" },
        { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Compute $-3\\mathbf{b}_1 + 2\\mathbf{b}_2 - 1\\mathbf{b}_3$.**", interactiveSteps: [
           { stepText: "$-3\\mathbf{b}_1 = \\begin{bmatrix} 6 \\\\ -6 \\\\ 0 \\end{bmatrix}$." },
           { stepText: "$2\\mathbf{b}_2 = \\begin{bmatrix} 6 \\\\ 0 \\\\ 4 \\end{bmatrix}$." },
           { stepText: "$-1\\mathbf{b}_3 = \\begin{bmatrix} -4 \\\\ 1 \\\\ -3 \\end{bmatrix}$." },
           { prompt: "Sum these three vectors. What is the first component?", options: [{id:"A", text:"$8$", isCorrect:true, explanation:"$6 + 6 - 4 = 8$."}, {id:"B", text:"$-8$", isCorrect:false, explanation:""}], stepText: "$\\mathbf{x} = \\begin{bmatrix} 8 \\\\ -5 \\\\ 1 \\end{bmatrix}$." }
        ]}
      ]
    }
  ]
};
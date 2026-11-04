import { Unit } from '../types';

export const UNIT_3_1_8: Unit = {
  id: "unit-3-1-8",
  title: "Inner Product Computations 1",
  description: "Exercises 1-8: Calculating dot products and ratios for given vectors.",
  color: "duo-blue",
  lessons: [
    {
      id: "les-3-1-8-ex1", title: "Exercise 1", description: "Dot Product Basics", icon: "Calculator",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 1", content: "**Problem:** Let $\\mathbf{u} = \\begin{bmatrix} -1 \\\\ 2 \\end{bmatrix}$ and $\\mathbf{v} = \\begin{bmatrix} 4 \\\\ 6 \\end{bmatrix}$.\n\nCompute $\\mathbf{u} \\cdot \\mathbf{u}$, $\\mathbf{v} \\cdot \\mathbf{u}$, and $\\frac{\\mathbf{v} \\cdot \\mathbf{u}}{\\mathbf{u} \\cdot \\mathbf{u}}$." },
        { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Compute each piece.**", interactiveSteps: [
           { prompt: "Compute $\\mathbf{u} \\cdot \\mathbf{u}$.", options: [{id:"A", text:"5", isCorrect:true, explanation:"$(-1)^2 + 2^2 = 1 + 4 = 5$."}, {id:"B", text:"3", isCorrect:false, explanation:""}], stepText: "$\\mathbf{u} \\cdot \\mathbf{u} = 5$." },
           { prompt: "Compute $\\mathbf{v} \\cdot \\mathbf{u}$.", options: [{id:"A", text:"8", isCorrect:true, explanation:"$4(-1) + 6(2) = -4 + 12 = 8$."}, {id:"B", text:"16", isCorrect:false, explanation:""}], stepText: "$\\mathbf{v} \\cdot \\mathbf{u} = 8$." },
           { stepText: "The ratio is $\\frac{\\mathbf{v} \\cdot \\mathbf{u}}{\\mathbf{u} \\cdot \\mathbf{u}} = \\frac{8}{5}$." }
        ]},
        { id: "s2", type: "numerical", title: "Final Value", content: "What is the ratio as a decimal?", numericAnswer: 1.6, numericTolerance: 0 }
      ]
    },
    {
      id: "les-3-1-8-ex2", title: "Exercise 2", description: "R3 Computations", icon: "Calculator",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 2", content: "**Problem:** Let $\\mathbf{w} = \\begin{bmatrix} 3 \\\\ -1 \\\\ -5 \\end{bmatrix}$ and $\\mathbf{x} = \\begin{bmatrix} 6 \\\\ -2 \\\\ 3 \\end{bmatrix}$.\n\nCompute $\\mathbf{w} \\cdot \\mathbf{w}$, $\\mathbf{x} \\cdot \\mathbf{w}$, and $\\frac{\\mathbf{x} \\cdot \\mathbf{w}}{\\mathbf{w} \\cdot \\mathbf{w}}$." },
        { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Compute for R3.**", interactiveSteps: [
           { stepText: "$\\mathbf{w} \\cdot \\mathbf{w} = 3^2 + (-1)^2 + (-5)^2 = 9 + 1 + 25 = 35$." },
           { prompt: "Compute $\\mathbf{x} \\cdot \\mathbf{w}$.", options: [{id:"A", text:"5", isCorrect:true, explanation:"$6(3) + (-2)(-1) + 3(-5) = 18 + 2 - 15 = 5$."}, {id:"B", text:"-5", isCorrect:false, explanation:""}], stepText: "$\\mathbf{x} \\cdot \\mathbf{w} = 5$." },
           { stepText: "Ratio: $\\frac{5}{35} = \\frac{1}{7}$." }
        ]}
      ]
    },
    {
      id: "les-3-1-8-ex3", title: "Exercise 3", description: "Scalar Vector Multiplication", icon: "FunctionSquare",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 3", content: "**Problem:** Using $\\mathbf{w} = \\begin{bmatrix} 3 \\\\ -1 \\\\ -5 \\end{bmatrix}$, evaluate the vector expression $\\frac{1}{\\mathbf{w} \\cdot \\mathbf{w}} \\mathbf{w}$." },
        { id: "s1", type: "solution", title: "Solution", content: "From Exercise 2, $\\mathbf{w} \\cdot \\mathbf{w} = 35$.\n\nThus, $\\frac{1}{\\mathbf{w} \\cdot \\mathbf{w}} \\mathbf{w} = \\frac{1}{35} \\begin{bmatrix} 3 \\\\ -1 \\\\ -5 \\end{bmatrix} = \\begin{bmatrix} 3/35 \\\\ -1/35 \\\\ -5/35 \\end{bmatrix} = \\begin{bmatrix} 3/35 \\\\ -1/35 \\\\ -1/7 \\end{bmatrix}$." }
      ]
    },
    {
      id: "les-3-1-8-ex4", title: "Exercise 4", description: "Scaling u", icon: "FunctionSquare",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 4", content: "**Problem:** Using $\\mathbf{u} = \\begin{bmatrix} -1 \\\\ 2 \\end{bmatrix}$, evaluate $\\frac{1}{\\mathbf{u} \\cdot \\mathbf{u}} \\mathbf{u}$." },
        { id: "s1", type: "solution", title: "Solution", content: "From Exercise 1, $\\mathbf{u} \\cdot \\mathbf{u} = 5$.\n\nThus, $\\frac{1}{5} \\begin{bmatrix} -1 \\\\ 2 \\end{bmatrix} = \\begin{bmatrix} -1/5 \\\\ 2/5 \\end{bmatrix}$." }
      ]
    },
    {
      id: "les-3-1-8-ex5", title: "Exercise 5", description: "Projection Preview", icon: "ArrowRight",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 5", content: "**Problem:** Using $\\mathbf{u} = \\begin{bmatrix} -1 \\\\ 2 \\end{bmatrix}$ and $\\mathbf{v} = \\begin{bmatrix} 4 \\\\ 6 \\end{bmatrix}$, evaluate $\\left( \\frac{\\mathbf{u} \\cdot \\mathbf{v}}{\\mathbf{v} \\cdot \\mathbf{v}} \\right) \\mathbf{v}$." },
        { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Compute the scalar, then scale.**", interactiveSteps: [
           { stepText: "$\\mathbf{u} \\cdot \\mathbf{v} = 8$ (from Ex 1)." },
           { prompt: "What is $\\mathbf{v} \\cdot \\mathbf{v}$?", options: [{id:"A", text:"52", isCorrect:true, explanation:"$4^2 + 6^2 = 16 + 36 = 52$."}, {id:"B", text:"100", isCorrect:false, explanation:""}], stepText: "$\\mathbf{v} \\cdot \\mathbf{v} = 52$." },
           { stepText: "The scalar is $\\frac{8}{52} = \\frac{2}{13}$." },
           { stepText: "Result: $\\frac{2}{13} \\begin{bmatrix} 4 \\\\ 6 \\end{bmatrix} = \\begin{bmatrix} 8/13 \\\\ 12/13 \\end{bmatrix}$." }
        ]}
      ]
    },
    {
      id: "les-3-1-8-ex6", title: "Exercise 6", description: "Projection Preview 2", icon: "ArrowRight",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 6", content: "**Problem:** Using $\\mathbf{w} = \\begin{bmatrix} 3 \\\\ -1 \\\\ -5 \\end{bmatrix}$ and $\\mathbf{x} = \\begin{bmatrix} 6 \\\\ -2 \\\\ 3 \\end{bmatrix}$, evaluate $\\left( \\frac{\\mathbf{x} \\cdot \\mathbf{w}}{\\mathbf{x} \\cdot \\mathbf{x}} \\right) \\mathbf{x}$." },
        { id: "s1", type: "solution", title: "Solution", content: "$\\mathbf{x} \\cdot \\mathbf{w} = 5$ (from Ex 2).\n\n$\\mathbf{x} \\cdot \\mathbf{x} = 6^2 + (-2)^2 + 3^2 = 36 + 4 + 9 = 49$.\n\nScalar = $5/49$.\n\nResult = $\\frac{5}{49} \\begin{bmatrix} 6 \\\\ -2 \\\\ 3 \\end{bmatrix} = \\begin{bmatrix} 30/49 \\\\ -10/49 \\\\ 15/49 \\end{bmatrix}$." }
      ]
    },
    {
      id: "les-3-1-8-ex7", title: "Exercise 7", description: "Length of w", icon: "Maximize",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 7", content: "**Problem:** Find $\\|\\mathbf{w}\\|$, where $\\mathbf{w} = \\begin{bmatrix} 3 \\\\ -1 \\\\ -5 \\end{bmatrix}$." },
        { id: "s1", type: "solution", title: "Solution", content: "$\\mathbf{w} \\cdot \\mathbf{w} = 35$.\n\n$\\|\\mathbf{w}\\| = \\sqrt{\\mathbf{w} \\cdot \\mathbf{w}} = \\sqrt{35}$." }
      ]
    },
    {
      id: "les-3-1-8-ex8", title: "Exercise 8", description: "Length of x", icon: "Maximize",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 8", content: "**Problem:** Find $\\|\\mathbf{x}\\|$, where $\\mathbf{x} = \\begin{bmatrix} 6 \\\\ -2 \\\\ 3 \\end{bmatrix}$." },
        { id: "s1", type: "solution", title: "Solution", content: "$\\mathbf{x} \\cdot \\mathbf{x} = 49$.\n\n$\\|\\mathbf{x}\\| = \\sqrt{49} = 7$." },
        { id: "s2", type: "numerical", title: "Norm", content: "What is $\\|\\mathbf{x}\\|$?", numericAnswer: 7, numericTolerance: 0 }
      ]
    }
  ]
};
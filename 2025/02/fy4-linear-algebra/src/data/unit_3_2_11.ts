import { Unit } from '../types';

export const UNIT_3_2_11: Unit = {
  id: "unit-3-2-11",
  title: "Orthonormal Sets",
  description: "Exercises 17-22: Checking orthonormality and normalizing sets.",
  color: "duo-blue",
  lessons: [
    {
      id: "les-3-2-11-ex17", title: "Exercise 17", description: "Checking properties", icon: "Crosshair",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 17", content: "**Problem:** Determine if the set of vectors is orthonormal. If it is only orthogonal, normalize the vectors to produce an orthonormal set.\n\n$\\mathbf{u}_1 = \\begin{bmatrix} 1/3 \\\\ 1/3 \\\\ 1/3 \\end{bmatrix}, \\mathbf{u}_2 = \\begin{bmatrix} -1/2 \\\\ 0 \\\\ 1/2 \\end{bmatrix}$" },
        { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Check dot product and norms.**", interactiveSteps: [
           { stepText: "Orthogonality: $\\mathbf{u}_1 \\cdot \\mathbf{u}_2 = (1/3)(-1/2) + 0 + (1/3)(1/2) = -1/6 + 1/6 = 0$. Yes, they are orthogonal." },
           { prompt: "Is $\\mathbf{u}_1$ a unit vector? Compute $\\|\\mathbf{u}_1\\|^2$.", options: [{id:"A", text:"1/3", isCorrect:true, explanation:"$(1/3)^2 + (1/3)^2 + (1/3)^2 = 3/9 = 1/3$."}, {id:"B", text:"1", isCorrect:false, explanation:""}], stepText: "$\\mathbf{u}_1$ is NOT a unit vector. Thus the set is only orthogonal." },
           { stepText: "$\\mathbf{u}_2 \\cdot \\mathbf{u}_2 = 1/4 + 0 + 1/4 = 1/2$. Also not a unit vector." },
           { stepText: "Normalize $\\mathbf{u}_1$: Divide by $\\sqrt{1/3}$, which is multiplying by $\\sqrt{3}$. $\\mathbf{v}_1 = \\begin{bmatrix} 1/\\sqrt{3} \\\\ 1/\\sqrt{3} \\\\ 1/\\sqrt{3} \\end{bmatrix}$." },
           { stepText: "Normalize $\\mathbf{u}_2$: Multiply by $\\sqrt{2}$. $\\mathbf{v}_2 = \\begin{bmatrix} -1/\\sqrt{2} \\\\ 0 \\\\ 1/\\sqrt{2} \\end{bmatrix}$." }
        ]}
      ]
    },
    {
      id: "les-3-2-11-ex18", title: "Exercise 18", description: "Quick check", icon: "Crosshair",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 18", content: "**Problem:** Determine if the set is orthonormal.\n$\\mathbf{u}_1 = \\begin{bmatrix} 0 \\\\ 1 \\\\ 0 \\end{bmatrix}, \\mathbf{u}_2 = \\begin{bmatrix} 0 \\\\ -1 \\\\ 0 \\end{bmatrix}$" },
        { id: "s1", type: "solution", title: "Solution", content: "Check orthogonality: $\\mathbf{u}_1 \\cdot \\mathbf{u}_2 = 0(0) + 1(-1) + 0(0) = -1$.\n\nSince the dot product is not 0, the set is **not even orthogonal** (thus, definitely not orthonormal)." }
      ]
    },
    {
      id: "les-3-2-11-ex19", title: "Exercise 19", description: "Decimals", icon: "Crosshair",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 19", content: "**Problem:** Determine if the set is orthonormal.\n$\\mathbf{u}_1 = \\begin{bmatrix} -0.6 \\\\ 0.8 \\end{bmatrix}, \\mathbf{u}_2 = \\begin{bmatrix} 0.8 \\\\ 0.6 \\end{bmatrix}$" },
        { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Test definitions.**", interactiveSteps: [
           { stepText: "Orthogonality: $(-0.6)(0.8) + (0.8)(0.6) = -0.48 + 0.48 = 0$. Yes." },
           { prompt: "What is $\\|\\mathbf{u}_1\\|^2$?", options: [{id:"A", text:"1", isCorrect:true, explanation:"$(-0.6)^2 + 0.8^2 = 0.36 + 0.64 = 1.00$."}, {id:"B", text:"0.8", isCorrect:false, explanation:""}], stepText: "$\\mathbf{u}_1$ is a unit vector." },
           { stepText: "$\\mathbf{u}_2 \\cdot \\mathbf{u}_2 = 0.8^2 + 0.6^2 = 0.64 + 0.36 = 1$. $\\mathbf{u}_2$ is a unit vector." },
           { stepText: "Since they are orthogonal unit vectors, the set is **orthonormal**." }
        ]}
      ]
    },
    {
      id: "les-3-2-11-ex20", title: "Exercise 20", description: "Fractions in R3", icon: "Crosshair",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 20", content: "**Problem:** Determine if the set is orthonormal.\n$\\mathbf{u}_1 = \\begin{bmatrix} -2/3 \\\\ 1/3 \\\\ 2/3 \\end{bmatrix}, \\mathbf{u}_2 = \\begin{bmatrix} 1/3 \\\\ 2/3 \\\\ 0 \\end{bmatrix}$" },
        { id: "s1", type: "solution", title: "Solution", content: "Orthogonality: $(-2/3)(1/3) + (1/3)(2/3) + 0 = -2/9 + 2/9 = 0$. Yes.\n\nNorms:\n$\\|\\mathbf{u}_1\\|^2 = 4/9 + 1/9 + 4/9 = 9/9 = 1$. Unit vector.\n$\\|\\mathbf{u}_2\\|^2 = 1/9 + 4/9 + 0 = 5/9 \\neq 1$. Not a unit vector.\n\nIt is only orthogonal. Normalize $\\mathbf{u}_2$ by dividing by $\\sqrt{5}/3$, which yields $\\mathbf{v}_2 = \\begin{bmatrix} 1/\\sqrt{5} \\\\ 2/\\sqrt{5} \\\\ 0 \\end{bmatrix}$." }
      ]
    },
    {
      id: "les-3-2-11-ex21-22", title: "Exercises 21 & 22", description: "Identifying orthonormal matrices", icon: "Grid",
      slides: [
        { id: "s0", type: "theory", title: "Observation", content: "If you have a set of vectors with coefficients like $1/\\sqrt{10}$, $3/\\sqrt{20}$, etc., checking orthonormality is just a matter of squaring the numerators and verifying they sum to the denominator.\n\nFor example, $\\begin{bmatrix} 1/\\sqrt{18} \\\\ 4/\\sqrt{18} \\\\ 1/\\sqrt{18} \\end{bmatrix}$ has length squared $\\frac{1 + 16 + 1}{18} = \\frac{18}{18} = 1$." }
      ]
    }
  ]
};
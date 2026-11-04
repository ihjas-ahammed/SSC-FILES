import { Unit } from '../types';

export const UNIT_2_1_17: Unit = {
  id: "unit-2-1-17",
  title: "Applied Coordinate Systems",
  description: "Exercises 35-38: Coordinate mapping in subsets and crystallography.",
  color: "duo-blue",
  lessons: [
    {
      id: "les-2-1-17-ex35", title: "Exercise 35", description: "Mapping into a subspace", icon: "Maximize",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 35", content: "**Problem:** Let $H = \\text{Span}\\{\\mathbf{v}_1, \\mathbf{v}_2\\}$ and $\\mathcal{B} = \\{\\mathbf{v}_1, \\mathbf{v}_2\\}$. Show that $\\mathbf{x}$ is in $H$ and find the $\\mathcal{B}$-coordinate vector of $\\mathbf{x}$, for:\n\n$\\mathbf{v}_1 = \\begin{bmatrix} 11 \\\\ -5 \\\\ 10 \\\\ 7 \\end{bmatrix}, \\mathbf{v}_2 = \\begin{bmatrix} 14 \\\\ -8 \\\\ 13 \\\\ 10 \\end{bmatrix}, \\mathbf{x} = \\begin{bmatrix} 19 \\\\ -13 \\\\ 18 \\\\ 15 \\end{bmatrix}$" },
        { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Solve $c_1\\mathbf{v}_1 + c_2\\mathbf{v}_2 = \\mathbf{x}$.**", interactiveSteps: [
           { stepText: "Set up the augmented matrix $[\\mathbf{v}_1 \\ \\mathbf{v}_2 \\ | \\ \\mathbf{x}]$.\n$\\begin{bmatrix} 11 & 14 & 19 \\\\ -5 & -8 & -13 \\\\ 10 & 13 & 18 \\\\ 7 & 10 & 15 \\end{bmatrix}$." },
           { stepText: "Row reduce. The system is consistent, which proves $\\mathbf{x}$ is in $H$." },
           { stepText: "The RREF is $\\begin{bmatrix} 1 & 0 & -5/3 \\\\ 0 & 1 & 8/3 \\\\ 0 & 0 & 0 \\\\ 0 & 0 & 0 \\end{bmatrix}$ (after simplification)." },
           { prompt: "What is $[\\mathbf{x}]_\\mathcal{B}$?", options: [{id:"A", text:"$\\begin{bmatrix} -5/3 \\\\ 8/3 \\end{bmatrix}$", isCorrect:true, explanation:""}, {id:"B", text:"$\\begin{bmatrix} 19 \\\\ -13 \\end{bmatrix}$", isCorrect:false, explanation:""}], stepText: "The coordinate vector is $[\\mathbf{x}]_\\mathcal{B} = \\begin{bmatrix} -5/3 \\\\ 8/3 \\end{bmatrix}$." }
        ]}
      ]
    },
    {
      id: "les-2-1-17-ex36", title: "Exercise 36", description: "Mapping into a 3D subspace", icon: "Maximize",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 36", content: "**Problem:** Let $H = \\text{Span}\\{\\mathbf{v}_1, \\mathbf{v}_2, \\mathbf{v}_3\\}$ and $\\mathcal{B} = \\{\\mathbf{v}_1, \\mathbf{v}_2, \\mathbf{v}_3\\}$. Show that $\\mathcal{B}$ is a basis for $H$ and $\\mathbf{x}$ is in $H$, and find $[\\mathbf{x}]_\\mathcal{B}$.\n\nVectors are in $\\mathbb{R}^4$. (Values omitted for brevity in this overview, but process is identical)." },
        { id: "s1", type: "solution", title: "Methodology", content: "1. **Basis Check:** Form matrix $A = [\\mathbf{v}_1 \\ \\mathbf{v}_2 \\ \\mathbf{v}_3]$. Row reduce. If there are 3 pivots, they are linearly independent and thus a basis for their span $H$.\n2. **Membership Check:** Augment with $\\mathbf{x}$. Row reduce $[A \\ | \\ \\mathbf{x}]$. If consistent, $\\mathbf{x}$ is in $H$.\n3. **Coordinates:** The solution to the augmented matrix gives the weights $c_1, c_2, c_3$. That column is $[\\mathbf{x}]_\\mathcal{B}$." }
      ]
    },
    {
      id: "les-2-1-17-ex37", title: "Exercise 37", description: "Crystallography Coordinates", icon: "Box",
      slides: [
        { id: "s0", type: "theory", title: "Crystallography Context", content: "In crystallography, the crystal lattice is defined by a basis $\\{\\mathbf{u}, \\mathbf{v}, \\mathbf{w}\\}$ forming a 'unit cell'. Atoms sit at specific locations within this cell, designated by their coordinate vectors relative to the basis." },
        { id: "s1", type: "example_q", title: "Exercise 37", content: "**Problem:** The vectors $\\mathbf{u} = \\begin{bmatrix} 2.6 \\\\ -1.5 \\\\ 0 \\end{bmatrix}, \\mathbf{v} = \\begin{bmatrix} 0 \\\\ 3 \\\\ 0 \\end{bmatrix}, \\mathbf{w} = \\begin{bmatrix} 0 \\\\ 0 \\\\ 4.8 \\end{bmatrix}$ form a basis for a unit cell in titanium.\n\nOne of the 'octahedral' sites is at coordinate vector $\\begin{bmatrix} 1/2 \\\\ 1/4 \\\\ 1/6 \\end{bmatrix}$ relative to the lattice basis. \nFind the standard $\\mathbb{R}^3$ coordinates of this site." },
        { id: "s2", type: "solution", title: "Interactive Solution", content: "**Goal: Compute $\\mathbf{x} = P_\\mathcal{B} [\\mathbf{x}]_\\mathcal{B}$.**", interactiveSteps: [
           { stepText: "$\\mathbf{x} = \\frac{1}{2}\\mathbf{u} + \\frac{1}{4}\\mathbf{v} + \\frac{1}{6}\\mathbf{w}$." },
           { prompt: "Calculate $\\frac{1}{2}\\mathbf{u}$.", options: [{id:"A", text:"$\\begin{bmatrix} 1.3 \\\\ -0.75 \\\\ 0 \\end{bmatrix}$", isCorrect:true, explanation:""}, {id:"B", text:"$\\begin{bmatrix} 1.3 \\\\ -1.5 \\\\ 0 \\end{bmatrix}$", isCorrect:false, explanation:""}], stepText: "Term 1: $[1.3, -0.75, 0]^T$." },
           { stepText: "Calculate $\\frac{1}{4}\\mathbf{v}$: $[0, 0.75, 0]^T$." },
           { stepText: "Calculate $\\frac{1}{6}\\mathbf{w}$: $[0, 0, 0.8]^T$." },
           { stepText: "Add them up: $\\mathbf{x} = \\begin{bmatrix} 1.3 + 0 + 0 \\\\ -0.75 + 0.75 + 0 \\\\ 0 + 0 + 0.8 \\end{bmatrix} = \\begin{bmatrix} 1.3 \\\\ 0 \\\\ 0.8 \\end{bmatrix}$." }
        ]}
      ]
    },
    {
      id: "les-2-1-17-ex38", title: "Exercise 38", description: "Crystallography Coordinates 2", icon: "Box",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 38", content: "**Problem:** Using the same basis for the titanium unit cell as Ex 37, one of the 'tetrahedral' sites has coordinate vector $\\begin{bmatrix} 1/2 \\\\ 1/2 \\\\ 1/3 \\end{bmatrix}$ relative to the basis.\n\nFind its standard $\\mathbb{R}^3$ coordinates." },
        { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Compute $\\mathbf{x} = P_\\mathcal{B} [\\mathbf{x}]_\\mathcal{B}$.**", interactiveSteps: [
           { stepText: "$\\mathbf{x} = \\frac{1}{2}\\mathbf{u} + \\frac{1}{2}\\mathbf{v} + \\frac{1}{3}\\mathbf{w}$." },
           { stepText: "$\\frac{1}{2}\\mathbf{u} = \\begin{bmatrix} 1.3 \\\\ -0.75 \\\\ 0 \\end{bmatrix}$." },
           { stepText: "$\\frac{1}{2}\\mathbf{v} = \\begin{bmatrix} 0 \\\\ 1.5 \\\\ 0 \\end{bmatrix}$." },
           { prompt: "Calculate $\\frac{1}{3}\\mathbf{w}$.", options: [{id:"A", text:"$\\begin{bmatrix} 0 \\\\ 0 \\\\ 1.6 \\end{bmatrix}$", isCorrect:true, explanation:"$4.8 / 3 = 1.6$."}, {id:"B", text:"$\\begin{bmatrix} 0 \\\\ 0 \\\\ 1.2 \\end{bmatrix}$", isCorrect:false, explanation:""}], stepText: "$\\frac{1}{3}\\mathbf{w} = \\begin{bmatrix} 0 \\\\ 0 \\\\ 1.6 \\end{bmatrix}$." },
           { stepText: "Add them up: $\\mathbf{x} = \\begin{bmatrix} 1.3 \\\\ 0.75 \\\\ 1.6 \\end{bmatrix}$." }
        ]}
      ]
    }
  ]
};
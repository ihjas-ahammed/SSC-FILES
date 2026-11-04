import { Unit } from '../types';

export const UNIT_3_1_7: Unit = {
  id: "unit-3-1-7",
  title: "Practice Problems",
  description: "Drills on Dot Product, Length, and Orthogonality.",
  color: "duo-blue",
  lessons: [
    {
      id: "les-3-1-7-p1", title: "Problem 1", description: "Computing dot products", icon: "Calculator",
      slides: [
        { id: "s0", type: "example_q", title: "Calculate", content: "Let $\\mathbf{a} = \\begin{bmatrix} -2 \\\\ 1 \\end{bmatrix}$ and $\\mathbf{b} = \\begin{bmatrix} -3 \\\\ 1 \\end{bmatrix}$. Compute $\\frac{\\mathbf{a} \\cdot \\mathbf{b}}{\\mathbf{a} \\cdot \\mathbf{a}}$." },
        { id: "s1", type: "solution", title: "Solution", content: "$\\mathbf{a} \\cdot \\mathbf{b} = (-2)(-3) + (1)(1) = 6 + 1 = 7$.\n$\\mathbf{a} \\cdot \\mathbf{a} = (-2)^2 + 1^2 = 4 + 1 = 5$.\nResult: $7/5$." },
        { id: "s2", type: "numerical", title: "Result", content: "Enter the result as a decimal.", numericAnswer: 1.4, numericTolerance: 0 }
      ]
    },
    {
      id: "les-3-1-7-p2", title: "Problem 2", description: "Normalization", icon: "ArrowUp",
      slides: [
        { id: "s0", type: "example_q", title: "Problem", content: "Find a unit vector in the direction of $\\mathbf{y} = \\begin{bmatrix} 4 \\\\ -3 \\\\ 2 \\end{bmatrix}$." },
        { id: "s1", type: "solution", title: "Solution", content: "$\\|\\mathbf{y}\\|^2 = 16 + 9 + 4 = 29$. $\\|\\mathbf{y}\\| = \\sqrt{29}$.\nUnit vector $\\mathbf{u} = \\frac{1}{\\sqrt{29}} \\begin{bmatrix} 4 \\\\ -3 \\\\ 2 \\end{bmatrix}$." }
      ]
    },
    {
      id: "les-3-1-7-p3", title: "Problem 3", description: "Orthogonality", icon: "X",
      slides: [
        { id: "s0", type: "example_q", title: "Problem", content: "Is $\\mathbf{d} = \\begin{bmatrix} 5 \\\\ 6 \\\\ -1 \\end{bmatrix}$ orthogonal to $\\mathbf{c} = \\begin{bmatrix} 4/3 \\\\ -1 \\\\ 2/3 \\end{bmatrix}$?" },
        { id: "s1", type: "solution", title: "Check", content: "$\\mathbf{d} \\cdot \\mathbf{c} = 5(4/3) + 6(-1) + (-1)(2/3) = 20/3 - 6 - 2/3 = 18/3 - 6 = 6 - 6 = 0$.\nYes, they are orthogonal." }
      ]
    },
    {
      id: "les-3-1-7-p4", title: "Problem 4", description: "Distance", icon: "Ruler",
      slides: [
        { id: "s0", type: "example_q", title: "Problem", content: "Find the distance between $\\mathbf{u} = (0, -5, 2)$ and $\\mathbf{z} = (-4, -1, 8)$." },
        { id: "s1", type: "solution", title: "Solution", content: "Diff = $(4, -4, -6)$.\nLength squared = $16 + 16 + 36 = 68$.\nDistance = $\\sqrt{68} \\approx 8.246$." },
        { id: "s2", type: "numerical", title: "Distance", content: "Enter approximate distance.", numericAnswer: 8.25, numericTolerance: 0.1 }
      ]
    }
  ]
};
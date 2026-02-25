import { Unit } from '../types';

export const UNIT_2_1_15: Unit = {
  id: "unit-2-1-15",
  title: "Testing Spanning Sets via Coordinates",
  description: "Exercises 31-32: Checking if polynomials span the space or form a basis.",
  color: "duo-blue",
  lessons: [
    {
      id: "les-2-1-15-ex31", title: "Exercise 31", description: "Spanning P2", icon: "TrendingUp",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 31", content: "**Problem:** Use coordinate vectors to test whether the following sets of polynomials span $\\mathbb{P}_2$:\n\na. $1 - 3t + 5t^2, \\ -3 + 5t - 7t^2, \\ -4 + 5t - 6t^2, \\ 1 - t^2$\nb. $5t + t^2, \\ 1 - 8t - 2t^2, \\ -3 + 4t + 2t^2, \\ 2 - 3t$" },
        { id: "s1", type: "solution", title: "Part A Solution", content: "Extract coordinates for Part A into a matrix $A$:\n$$ \\begin{bmatrix} 1 & -3 & -4 & 1 \\\\ -3 & 5 & 5 & 0 \\\\ 5 & -7 & -6 & -1 \\end{bmatrix} $$\nRow reducing this $3 \\times 4$ matrix yields 2 pivot columns. Since there are not 3 pivot columns (one in every row), the columns do not span $\\mathbb{R}^3$. \nThus, the polynomials do **not** span $\\mathbb{R}_2$." },
        { id: "s2", type: "solution", title: "Part B Solution", content: "Extract coordinates for Part B:\n$$ \\begin{bmatrix} 0 & 1 & -3 & 2 \\\\ 5 & -8 & 4 & -3 \\\\ 1 & -2 & 2 & 0 \\end{bmatrix} $$\nRow reduction of this matrix reveals 3 pivot positions (one in every row). \nTherefore, the coordinate vectors span $\\mathbb{R}^3$, and by isomorphism, the polynomials **span** $\\mathbb{P}_2$." }
      ]
    },
    {
      id: "les-2-1-15-ex32", title: "Exercise 32", description: "Verifying a Basis for P2", icon: "Flag",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 32", content: "**Problem:** Let $\\mathbf{p}_1(t) = 1 + t^2$, $\\mathbf{p}_2(t) = t - 3t^2$, $\\mathbf{p}_3(t) = 1 + t - 3t^2$.\n\na. Use coordinate vectors to show these form a basis for $\\mathbb{P}_2$.\nb. Consider the basis $\\mathcal{B} = \\{\\mathbf{p}_1, \\mathbf{p}_2, \\mathbf{p}_3\\}$. Find $\\mathbf{q}$ in $\\mathbb{P}_2$, given that $[\\mathbf{q}]_\\mathcal{B} = \\begin{bmatrix} -1 \\\\ 1 \\\\ 2 \\end{bmatrix}$." },
        { id: "s1", type: "solution", title: "Part A: Checking Basis", content: "Coordinate vectors are:\n$\\mathbf{v}_1 = \\begin{bmatrix} 1 \\\\ 0 \\\\ 1 \\end{bmatrix}, \\mathbf{v}_2 = \\begin{bmatrix} 0 \\\\ 1 \\\\ -3 \\end{bmatrix}, \\mathbf{v}_3 = \\begin{bmatrix} 1 \\\\ 1 \\\\ -3 \\end{bmatrix}$.\n\nForm matrix $A = [\\mathbf{v}_1 \\ \\mathbf{v}_2 \\ \\mathbf{v}_3]$. Row reducing $A$ reveals 3 pivots. Since $A$ is $3 \\times 3$ and has 3 pivots, it is invertible. Its columns are independent and span $\\mathbb{R}^3$.\nThus, the polynomials form a basis for $\\mathbb{P}_2$." },
        { id: "s2", type: "solution", title: "Part B: Reconstructing q", content: "The coordinate vector $[\\mathbf{q}]_\\mathcal{B}$ gives the weights for the linear combination:\n$$ \\mathbf{q}(t) = -1\\mathbf{p}_1(t) + 1\\mathbf{p}_2(t) + 2\\mathbf{p}_3(t) $$\n\n$\\mathbf{q}(t) = -1(1 + t^2) + 1(t - 3t^2) + 2(1 + t - 3t^2)$\n$= -1 - t^2 + t - 3t^2 + 2 + 2t - 6t^2$\n$= (-1 + 2) + (1 + 2)t + (-1 - 3 - 6)t^2$\n$= 1 + 3t - 10t^2$." }
      ]
    }
  ]
};
import { Unit } from '../types';

export const UNIT_2_3_3: Unit = {
  id: "unit-2-3-3",
  title: "Applications to Systems",
  description: "Example 5: Digital control systems and engineering applications.",
  color: "duo-blue",
  lessons: [
    {
      id: "les-2-3-3-ex5", title: "Example 5: Scientists Problem", description: "Non-homogeneous solutions", icon: "Cpu",
      slides: [
        { id: "s0", type: "example_q", title: "Example 5", content: "**Problem:** A scientist has found two solutions to a homogeneous system of 40 equations in 42 variables. The two solutions are not multiples, and all other solutions can be constructed by adding together appropriate multiples of these two solutions.\n\nCan the scientist be *certain* that an associated nonhomogeneous system (with the same coefficients) has a solution?" },
        { id: "s1", type: "solution", title: "Solution Step 1", content: "The system is $A\\mathbf{x} = \\mathbf{0}$ with $A$ being $40 \\times 42$. The problem states that the two found solutions span the null space, so $\\dim \\text{Nul } A = 2$." },
        { id: "s2", type: "solution", title: "Solution Step 2", content: "By the Rank Theorem: $\\text{rank } A = n - \\dim \\text{Nul } A = 42 - 2 = 40$." },
        { id: "s3", type: "solution", title: "Conclusion", content: "Since $\\text{rank } A = 40$ and the matrix has 40 rows, the column space spans all of $\\mathbb{R}^{40}$.\n\nThus, for any vector $\\mathbf{b}$ in $\\mathbb{R}^{40}$, the system $A\\mathbf{x} = \\mathbf{b}$ is consistent. Yes, the scientist can be certain." }
      ]
    }
  ]
};
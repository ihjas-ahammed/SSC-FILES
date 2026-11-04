import { Unit } from '../types';

export const UNIT_2_3_8: Unit = {
  id: "unit-2-3-8",
  title: "Logical Implications of Rank",
  description: "Exercises 19-26: Connecting solutions, systems, and dimensions.",
  color: "duo-blue",
  lessons: [
    {
      id: "les-2-3-8-ex19", title: "Exercise 19", description: "Homogeneous System", icon: "HelpCircle",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 19", content: "**Problem:** Suppose the solutions of a homogeneous system of five linear equations in six unknowns are all multiples of one nonzero solution. Will the system necessarily have a solution for every possible constant vector on the right side?" },
        { id: "s1", type: "solution", title: "Solution", content: "Equations: 5 (rows). Unknowns: 6 (cols). $A$ is $5 \\times 6$.\nNul A is spanned by one vector, so $\\dim \\text{Nul } A = 1$.\n\n$\\text{Rank } A = 6 - 1 = 5$.\n\nSince the rank is 5 and there are 5 rows, the columns span $\\mathbb{R}^5$. Yes, the system is consistent for all $\\mathbf{b}$." }
      ]
    },
    {
      id: "les-2-3-8-ex20", title: "Exercise 20", description: "Non-homogeneous System", icon: "HelpCircle",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 20", content: "**Problem:** Suppose a nonhomogeneous system of six linear equations in eight unknowns has a solution, with two free variables. Is it possible to change some constants on the equations' right sides to make the new system inconsistent?" },
        { id: "s1", type: "solution", title: "Solution", content: "Rows: 6. Cols: 8.\nFree variables: 2 $\\implies \\dim \\text{Nul } A = 2$.\n$\\text{Rank } A = 8 - 2 = 6$.\n\nSince Rank = 6 (equal to rows), the columns span $\\mathbb{R}^6$. Every $\\mathbf{b}$ is in Col A. No, it is impossible to make it inconsistent." }
      ]
    },
    {
      id: "les-2-3-8-ex21", title: "Exercise 21", description: "9x10 System", icon: "HelpCircle",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 21", content: "**Problem:** A homogeneous system of 9 equations in 10 unknowns. Can it have a unique solution?" },
        { id: "s1", type: "solution", title: "Solution", content: "$A$ is $9 \\times 10$.\nMax Rank = 9.\nMin $\\dim \\text{Nul } A = 10 - 9 = 1$.\n\nSince there is always at least 1 free variable, there are infinite solutions (non-trivial solutions). No unique solution." }
      ]
    },
    {
      id: "les-2-3-8-ex22", title: "Exercise 22", description: "10x12 System", icon: "HelpCircle",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 22", content: "**Problem:** A homogeneous system of 10 equations in 12 unknowns. Are all solutions multiples of one fixed nonzero solution?" },
        { id: "s1", type: "solution", title: "Solution", content: "$A$ is $10 \\times 12$.\nMax Rank = 10.\nMin $\\dim \\text{Nul } A = 12 - 10 = 2$.\n\nThe null space has dimension at least 2, so solutions are combinations of at least 2 linearly independent vectors. No, they are not all multiples of one vector." }
      ]
    },
    {
      id: "les-2-3-8-ex23", title: "Exercise 23", description: "12x8 System", icon: "HelpCircle",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 23", content: "**Problem:** 12 equations, 8 unknowns. Can it have a unique solution?" },
        { id: "s1", type: "solution", title: "Solution", content: "$A$ is $12 \\times 8$.\nIf Rank = 8 (full column rank), then $\\dim \\text{Nul } A = 0$. In this case, the homogeneous system has only the trivial solution, and if a nonhomogeneous solution exists, it is unique.\n\nYes, it is possible." }
      ]
    },
    {
      id: "les-2-3-8-ex24", title: "Exercise 24", description: "7x6 System", icon: "HelpCircle",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 24", content: "**Problem:** 7 equations, 6 unknowns. Is it possible for a unique solution to exist for every RHS?" },
        { id: "s1", type: "solution", title: "Solution", content: "$A$ is $7 \\times 6$.\nMax Rank = 6.\nSince Rank < Rows (6 < 7), the columns cannot span $\\mathbb{R}^7$. There will be some $\\mathbf{b}$ for which no solution exists.\n\nNo." }
      ]
    },
    {
      id: "les-2-3-8-ex25", title: "Exercise 25", description: "Scientist Problem Variation", icon: "Cpu",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 25", content: "**Problem:** A system has 10 equations in 12 unknowns. The scientist finds 3 independent free variables. Can they be certain a solution exists for any RHS?" },
        { id: "s1", type: "solution", title: "Solution", content: "$n=12, \\dim \\text{Nul } A = 3 \\implies \\text{Rank } = 9$.\nRows = 10.\nRank < Rows. Columns do not span $\\mathbb{R}^{10}$. No." }
      ]
    },
    {
      id: "les-2-3-8-ex26", title: "Exercise 26", description: "Full Rank", icon: "Database",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 26", content: "**Problem:** If an $m \\times n$ matrix has rank $m$, what can you say about $m$ and $n$?" },
        { id: "s1", type: "solution", title: "Solution", content: "Since Rank $\\le n$, we must have $m \\le n$." }
      ]
    }
  ]
};
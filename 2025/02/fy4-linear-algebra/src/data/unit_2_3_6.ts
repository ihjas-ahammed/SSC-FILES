import { Unit } from '../types';

export const UNIT_2_3_6: Unit = {
  id: "unit-2-3-6",
  title: "Dimension Calculations",
  description: "Exercises 5-16: Finding dimensions without full bases.",
  color: "duo-blue",
  lessons: [
    {
      id: "les-2-3-6-ex5", title: "Exercise 5", description: "4x7 Matrix", icon: "Calculator",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 5", content: "**Problem:** If a $4 \\times 7$ matrix $A$ has rank 3, find $\\dim \\text{Nul } A$, $\\dim \\text{Row } A$, and $\\text{rank } A^T$." },
        { id: "s1", type: "solution", title: "Solution", content: "$\dim \\text{Row } A = \\text{rank } A = 3$.\n$\text{rank } A^T = \\text{rank } A = 3$.\n$\dim \\text{Nul } A = 7 - 3 = 4$." }
      ]
    },
    {
      id: "les-2-3-6-ex6", title: "Exercise 6", description: "7x5 Matrix", icon: "Calculator",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 6", content: "**Problem:** If a $7 \\times 5$ matrix $A$ has rank 2, find $\\dim \\text{Nul } A$, $\\dim \\text{Row } A$, and $\\text{rank } A^T$." },
        { id: "s1", type: "solution", title: "Solution", content: "$\dim \\text{Row } A = 2$.\n$\text{rank } A^T = 2$.\n$\dim \\text{Nul } A = 5 - 2 = 3$." }
      ]
    },
    {
      id: "les-2-3-6-ex7", title: "Exercise 7", description: "4 Pivots in 4x7", icon: "HelpCircle",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 7", content: "**Problem:** Suppose a $4 \\times 7$ matrix $A$ has 4 pivot columns. Is $\\text{Col } A = \\mathbb{R}^4$? Is $\\text{Nul } A = \\mathbb{R}^3$? Explain." },
        { id: "s1", type: "solution", title: "Solution", content: "Yes, $\\text{Col } A = \\mathbb{R}^4$ because there are 4 pivots in 4 rows, so the columns span $\\mathbb{R}^4$.\n\nNo, $\\text{Nul } A \\neq \\mathbb{R}^3$. $\\text{Nul } A$ is a 3-dimensional subspace of $\\mathbb{R}^7$, not $\\mathbb{R}^3$ itself (the vectors have 7 entries)." }
      ]
    },
    {
      id: "les-2-3-6-ex8", title: "Exercise 8", description: "4 Pivots in 6x8", icon: "HelpCircle",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 8", content: "**Problem:** Suppose a $6 \\times 8$ matrix $A$ has 4 pivot columns. What is $\\dim \\text{Nul } A$? Is $\\text{Col } A = \\mathbb{R}^4$?" },
        { id: "s1", type: "solution", title: "Solution", content: "$\dim \\text{Nul } A = 8 - 4 = 4$.\n\nNo, $\\text{Col } A$ is a 4-dimensional subspace of $\\mathbb{R}^6$. It is isomorphic to $\\mathbb{R}^4$, but not equal to it (wrong number of rows)." }
      ]
    },
    {
      id: "les-2-3-6-ex9", title: "Exercise 9", description: "Null Space 3-dim", icon: "Minimize",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 9", content: "**Problem:** If the null space of a $4 \\times 6$ matrix is 3-dimensional, what is the dimension of the column space? Is $\\text{Col } A = \\mathbb{R}^3$?" },
        { id: "s1", type: "solution", title: "Solution", content: "$\dim \\text{Col } A = 6 - 3 = 3$.\n\nNo, $\\text{Col } A$ is a 3-dimensional subspace of $\\mathbb{R}^4$. It is not $\\mathbb{R}^3$." }
      ]
    },
    {
      id: "les-2-3-6-ex10", title: "Exercise 10", description: "Null Space 5-dim", icon: "Minimize",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 10", content: "**Problem:** If the null space of an $8 \\times 7$ matrix is 5-dimensional, what is the dimension of the column space?" },
        { id: "s1", type: "solution", title: "Solution", content: "$\dim \\text{Col } A = 7 - 5 = 2$." }
      ]
    },
    {
      id: "les-2-3-6-ex11", title: "Exercise 11", description: "8x5 Matrix", icon: "Grid",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 11", content: "**Problem:** If the null space of an $8 \\times 5$ matrix is 3-dimensional, what is the dimension of the row space?" },
        { id: "s1", type: "solution", title: "Solution", content: "Rank = $5 - 3 = 2$.\nDim Row A = Rank = 2." }
      ]
    },
    {
      id: "les-2-3-6-ex12", title: "Exercise 12", description: "5x4 Matrix", icon: "Grid",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 12", content: "**Problem:** If the null space of a $5 \\times 4$ matrix is 2-dimensional, what is the dimension of the row space?" },
        { id: "s1", type: "solution", title: "Solution", content: "Rank = $4 - 2 = 2$.\nDim Row A = 2." }
      ]
    },
    {
      id: "les-2-3-6-ex13", title: "Exercise 13", description: "Rank of 7x5", icon: "Maximize",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 13", content: "**Problem:** If $A$ is a $7 \\times 5$ matrix, what is the largest possible rank of $A$? If $A$ is $5 \\times 7$, what is the largest rank?" },
        { id: "s1", type: "solution", title: "Solution", content: "For $7 \\times 5$, max rank is 5 (limited by columns).\nFor $5 \\times 7$, max rank is 5 (limited by rows)." }
      ]
    },
    {
      id: "les-2-3-6-ex14", title: "Exercise 14", description: "5x4 Row Space", icon: "Maximize",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 14", content: "**Problem:** If $A$ is a $5 \\times 4$ matrix, what is the largest possible dimension of the row space? If $A$ is $4 \\times 5$, what is the largest dimension?" },
        { id: "s1", type: "solution", title: "Solution", content: "For $5 \\times 4$, max dimension is 4.\nFor $4 \\times 5$, max dimension is 4." }
      ]
    },
    {
      id: "les-2-3-6-ex15", title: "Exercise 15", description: "Smallest Null Space 3x7", icon: "Minimize",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 15", content: "**Problem:** If $A$ is a $3 \\times 7$ matrix, what is the smallest possible dimension of $\\text{Nul } A$?" },
        { id: "s1", type: "solution", title: "Solution", content: "To minimize Nul A, we maximize Rank A.\nMax Rank = 3.\nMin Dim Nul A = $7 - 3 = 4$." }
      ]
    },
    {
      id: "les-2-3-6-ex16", title: "Exercise 16", description: "Smallest Null Space 7x5", icon: "Minimize",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 16", content: "**Problem:** If $A$ is a $7 \\times 5$ matrix, what is the smallest possible dimension of $\\text{Nul } A$?" },
        { id: "s1", type: "solution", title: "Solution", content: "Max Rank = 5.\nMin Dim Nul A = $5 - 5 = 0$." }
      ]
    }
  ]
};
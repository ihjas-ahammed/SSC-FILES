import { Unit } from '../types';

export const UNIT_2_2_8: Unit = {
  id: "unit-2-2-8",
  title: "Dimensions of Matrix Spaces",
  description: "Exercises 13-18: Analyzing dimensions based on matrix size and properties.",
  color: "duo-blue",
  lessons: [
    {
      id: "les-2-2-8-ex13", title: "Exercise 13", description: "3x5 Matrix", icon: "Maximize",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 13", content: "**Problem:** If $A$ is a $3 \\times 5$ matrix, what is the largest possible dimension of the row space of $A$?" },
        { id: "s1", type: "solution", title: "Solution", content: "The row space dimension (Rank) cannot exceed the number of rows (3) or the number of columns (5).\n\nMax Dim Row A = $\\min(3, 5) = 3$." },
        { id: "s2", type: "numerical", title: "Check", content: "Max dimension?", numericAnswer: 3, numericTolerance: 0 }
      ]
    },
    {
      id: "les-2-2-8-ex14", title: "Exercise 14", description: "3x5 Matrix Null Space", icon: "Minimize",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 14", content: "**Problem:** If $A$ is a $3 \\times 5$ matrix, what is the largest possible dimension of the null space of $A$?" },
        { id: "s1", type: "solution", title: "Solution", content: "$\dim \\text{Nul } A + \dim \\text{Col } A = n = 5$.\n\nTo maximize Nul A, we minimize Col A.\nThe minimum rank is 0 (zero matrix).\n\nMax Dim Nul A = $5 - 0 = 5$." },
        { id: "s2", type: "numerical", title: "Check", content: "Max dimension?", numericAnswer: 5, numericTolerance: 0 }
      ]
    },
    {
      id: "les-2-2-8-ex15", title: "Exercise 15", description: "3x4 Matrix", icon: "Grid",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 15", content: "**Problem:** If $A$ is a $3 \\times 4$ matrix, what is the largest possible dimension of the row space?" },
        { id: "s1", type: "solution", title: "Solution", content: "Rank $\\le \\min(3, 4) = 3$.\nMax dimension = 3." }
      ]
    },
    {
      id: "les-2-2-8-ex16", title: "Exercise 16", description: "4x3 Matrix", icon: "Grid",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 16", content: "**Problem:** If $A$ is a $4 \\times 3$ matrix, what is the largest possible dimension of the column space?" },
        { id: "s1", type: "solution", title: "Solution", content: "Rank $\\le \\min(4, 3) = 3$.\nMax dimension = 3." }
      ]
    },
    {
      id: "les-2-2-8-ex17", title: "Exercise 17", description: "Null Space Constraints", icon: "Filter",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 17", content: "**Problem:** If $A$ is a $4 \\times 6$ matrix, what is the smallest possible dimension of $\\text{Nul } A$?" },
        { id: "s1", type: "solution", title: "Solution", content: "$\dim \\text{Nul } A = 6 - \\text{Rank } A$.\nTo minimize Nul A, we maximize Rank A.\nMax Rank = $\\min(4, 6) = 4$.\n\nMin Dim Nul A = $6 - 4 = 2$." },
        { id: "s2", type: "numerical", title: "Result", content: "Min Dimension?", numericAnswer: 2, numericTolerance: 0 }
      ]
    },
    {
      id: "les-2-2-8-ex18", title: "Exercise 18", description: "Row Space Constraints", icon: "Filter",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 18", content: "**Problem:** If $A$ is a $6 \\times 4$ matrix, what is the smallest possible dimension of $\\text{Nul } A$?" },
        { id: "s1", type: "solution", title: "Solution", content: "$\dim \\text{Nul } A = 4 - \\text{Rank } A$.\nMax Rank = $\\min(6, 4) = 4$.\n\nMin Dim Nul A = $4 - 4 = 0$." },
        { id: "s2", type: "numerical", title: "Result", content: "Min Dimension?", numericAnswer: 0, numericTolerance: 0 }
      ]
    }
  ]
};
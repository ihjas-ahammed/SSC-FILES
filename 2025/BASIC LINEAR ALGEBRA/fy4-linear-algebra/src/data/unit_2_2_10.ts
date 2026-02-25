import { Unit } from '../types';

export const UNIT_2_2_10: Unit = {
  id: "unit-2-2-10",
  title: "Infinite Dimensional Spaces",
  description: "Exercises 29-30: Concepts of infinite basis.",
  color: "duo-blue",
  lessons: [
    {
      id: "les-2-2-10-ex29", title: "Exercise 29: Sequence Space", description: "Is it infinite?", icon: "Infinity",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 29", content: "**Problem:** Let $V$ be the vector space of infinite sequences. Is $V$ finite dimensional?" },
        { id: "s1", type: "solution", title: "Solution", content: "Consider the sequences $\\mathbf{e}_1 = (1, 0, \\dots), \\mathbf{e}_2 = (0, 1, 0, \\dots), \\dots$\n\nFor any $k$, the set $\\{\\mathbf{e}_1, \\dots, \\mathbf{e}_k\\}$ is linearly independent.\nSince we can find arbitrarily large independent sets, $V$ is infinite-dimensional." }
      ]
    },
    {
      id: "les-2-2-10-ex30", title: "Exercise 30: Vector Space V", description: "General proof", icon: "Shield",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 30", content: "**Problem:** If $V$ is a vector space such that for every $p$, there exists a linearly independent set of size $p$, show that $V$ is infinite dimensional." },
        { id: "s1", type: "solution", title: "Solution", content: "If $V$ were finite dimensional with dimension $n$, then any set of size $n+1$ would be dependent.\n\nBut the hypothesis says there exists an independent set of size $n+1$. Contradiction.\nThus $V$ is infinite dimensional." }
      ]
    }
  ]
};
import { Unit } from '../types';

export const UNIT_1_3_13: Unit = {
  id: "unit-1-3-13",
  title: "Expanding on Basis Concepts",
  description: "Exercises 23-27: Deepening understanding of bases.",
  color: "duo-blue",
  lessons: [
    {
      id: "les-1-3-13-ex23", title: "Exercise 23", description: "Why do 4 vectors spanning R4 form a basis?", icon: "HelpCircle",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 23", content: "**Problem:** Suppose $\\mathbb{R}^4 = \\text{Span}\\{\\mathbf{v}_1, \\dots, \\mathbf{v}_4\\}$. Explain why $\\{\\mathbf{v}_1, \\dots, \\mathbf{v}_4\\}$ is a basis for $\\mathbb{R}^4$." },
        { id: "s1", type: "solution", title: "Solution", content: "Let $A = [\\mathbf{v}_1 \\ \\mathbf{v}_2 \\ \\mathbf{v}_3 \\ \\mathbf{v}_4]$. \nSince the columns span $\\mathbb{R}^4$, the equation $A\\mathbf{x} = \\mathbf{b}$ has a solution for all $\\mathbf{b}$ in $\\mathbb{R}^4$. \nBy the Invertible Matrix Theorem, since $A$ is $4 \\times 4$ and its columns span $\\mathbb{R}^4$, $A$ is invertible.\nTherefore, the columns are linearly independent. Since they span $\\mathbb{R}^4$ and are independent, they form a basis." }
      ]
    },
    {
      id: "les-1-3-13-ex24", title: "Exercise 24", description: "Why do n independent vectors form a basis?", icon: "HelpCircle",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 24", content: "**Problem:** Let $B = \\{\\mathbf{v}_1, \\dots, \\mathbf{v}_n\\}$ be a linearly independent set in $\\mathbb{R}^n$. Explain why $B$ must be a basis for $\\mathbb{R}^n$." },
        { id: "s1", type: "solution", title: "Solution", content: "Let $A = [\\mathbf{v}_1 \\ \\dots \\ \\mathbf{v}_n]$. \nSince the columns are linearly independent, the equation $A\\mathbf{x} = \\mathbf{0}$ has only the trivial solution. \nBy the Invertible Matrix Theorem, since $A$ is $n \\times n$ and has independent columns, it is invertible. \nTherefore, the columns span $\\mathbb{R}^n$. Since they span $\\mathbb{R}^n$ and are independent, they form a basis." }
      ]
    },
    {
      id: "les-1-3-13-ex25", title: "Exercise 25", description: "A tricky subspace question", icon: "AlertTriangle",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 25", content: "**Problem:** Let $\\mathbf{v}_1 = \\begin{bmatrix} 1 \\\\ 0 \\\\ 1 \\end{bmatrix}, \\mathbf{v}_2 = \\begin{bmatrix} 0 \\\\ 1 \\\\ 1 \\end{bmatrix}, \\mathbf{v}_3 = \\begin{bmatrix} 0 \\\\ 1 \\\\ 0 \\end{bmatrix}$, and let $H$ be the set of vectors in $\\mathbb{R}^3$ whose second and third entries are equal. \n\nEvery vector in $H$ has a unique expansion as $s\\mathbf{v}_1 + (t-s)\\mathbf{v}_2 + s\\mathbf{v}_3 = \\begin{bmatrix} s \\\\ t \\\\ t \\end{bmatrix}$. \n\nIs $\\{\\mathbf{v}_1, \\mathbf{v}_2, \\mathbf{v}_3\\}$ a basis for $H$? Why or why not?" },
        { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Check the definition of a basis for $H$.**", interactiveSteps: [
           { prompt: "To be a basis for $H$, all vectors in the set must belong to $H$. Is $\\mathbf{v}_3$ in $H$?", options: [{id:"A", text:"Yes", isCorrect:false, explanation:"Check the second and third entries of v3."}, {id:"B", text:"No", isCorrect:true, explanation:"$\\mathbf{v}_3 = [0, 1, 0]^T$. The second entry is 1, third is 0. They are not equal."}], stepText: "$\\mathbf{v}_3$ is not in $H$!" },
           { stepText: "Therefore, $\\{\\mathbf{v}_1, \\mathbf{v}_2, \\mathbf{v}_3\\}$ cannot be a basis for $H$, because a basis for a subspace must consist of vectors *from* that subspace." }
        ]},
        { id: "s2", type: "quiz", title: "What is it a basis for?", content: "Since $\\mathbf{v}_1, \\mathbf{v}_2, \\mathbf{v}_3$ are linearly independent in $\\mathbb{R}^3$, what do they actually form a basis for?", options: [{id:"A", text:"$H$", isCorrect:false, explanation:""}, {id:"B", text:"$\\mathbb{R}^3$", isCorrect:true, explanation:"3 independent vectors in 3D space form a basis for the entire space."}] }
      ]
    },
    {
      id: "les-1-3-13-ex26", title: "Exercise 26", description: "Trig Basis", icon: "Waves",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 26", content: "**Problem:** In the vector space of all real-valued functions, find a basis for the subspace spanned by $\\{\\sin t, \\sin 2t, \\sin t \\cos t\\}$." },
        { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Look for a linear dependence relation.**", interactiveSteps: [
           { prompt: "Recall a trigonometric identity involving $\\sin 2t$.", options: [{id:"A", text:"$\\sin 2t = 2\\sin t \\cos t$", isCorrect:true, explanation:"Double angle formula."}, {id:"B", text:"$\\sin 2t = \\sin^2 t + \\cos^2 t$", isCorrect:false, explanation:"That is 1."}], stepText: "We have $\\sin 2t = 2(\\sin t \\cos t)$." },
           { stepText: "This means the vector $\\sin 2t$ is a scalar multiple of the vector $\\sin t \\cos t$." },
           { stepText: "By the Spanning Set Theorem, we can discard $\\sin 2t$ (or $\\sin t \\cos t$) without changing the span." },
           { stepText: "The remaining set $\\{\\sin t, \\sin 2t\\}$ is linearly independent (not multiples of each other). Thus it is a basis." }
        ]}
      ]
    },
    {
      id: "les-1-3-13-ex27", title: "Exercise 27", description: "Mass-Spring Basis", icon: "Activity",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 27", content: "**Problem:** Let $V$ be the vector space of functions that describe the vibration of a mass-spring system, where solutions are of the form $y(t) = c_1 \\cos \\omega t + c_2 \\sin \\omega t$. \n\nFind a basis for $V$." },
        { id: "s1", type: "solution", title: "Solution", content: "The space $V$ is defined as $V = \\text{Span}\\{\\cos \\omega t, \\sin \\omega t\\}$.\n\nSince $\\cos \\omega t$ and $\\sin \\omega t$ are not scalar multiples of each other (they are linearly independent functions), the set $\\{\\cos \\omega t, \\sin \\omega t\\}$ forms a basis for $V$." }
      ]
    }
  ]
};
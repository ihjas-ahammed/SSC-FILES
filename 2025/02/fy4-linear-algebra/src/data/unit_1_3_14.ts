import { Unit } from '../types';

export const UNIT_1_3_14: Unit = {
  id: "unit-1-3-14",
  title: "Size Constraints on Bases",
  description: "Exercises 29-30: Why the number of vectors matters for a basis in R^n.",
  color: "duo-blue",
  lessons: [
    {
      id: "les-1-3-14-ex29", title: "Exercise 29: Too Few Vectors", description: "Why k < n fails", icon: "Minimize",
      slides: [
        { id: "s0", type: "quiz", title: "Conceptual Warm-up 1", content: "To span all of $\\mathbb{R}^n$, how many pivot columns must a matrix have?", options: [{id:"A", text:"Exactly n", isCorrect:true, explanation:"There must be a pivot in every row, so n pivots are needed."}, {id:"B", text:"Fewer than n", isCorrect:false, explanation:"If there are fewer than n pivots, some rows lack pivots, so it doesn't span $\\mathbb{R}^n$."}] },
        { id: "s1", type: "quiz", title: "Conceptual Warm-up 2", content: "If you have $k$ vectors in $\\mathbb{R}^n$ and $k < n$, what is the maximum number of pivots their matrix can have?", options: [{id:"A", text:"n", isCorrect:false, explanation:"You can't have more pivots than columns."}, {id:"B", text:"k", isCorrect:true, explanation:"Since there are only $k$ columns, the max number of pivots is $k$."}] },
        { id: "s2", type: "example_q", title: "Exercise 29", content: "**Problem:** Let $S = \\{\\mathbf{v}_1, \\dots, \\mathbf{v}_k\\}$ be a set of $k$ vectors in $\\mathbb{R}^n$, with $k < n$. \n\nExplain why $S$ cannot be a basis for $\\mathbb{R}^n$." },
        { id: "s3", type: "solution", title: "Interactive Solution", content: "**Goal: Show that $S$ cannot span $\\mathbb{R}^n$.**", interactiveSteps: [
           { stepText: "Form a matrix $A$ with the vectors in $S$ as columns. $A$ is an $n \\times k$ matrix." },
           { prompt: "Since $k < n$, can $A$ have a pivot position in every row?", options: [{id:"A", text:"Yes", isCorrect:false, explanation:"There are $n$ rows but only $k$ columns. Max pivots = $k$."}, {id:"B", text:"No", isCorrect:true, explanation:"Since $k < n$, the maximum number of pivots is $k$, leaving some rows without a pivot."}], stepText: "Since $A$ has at most $k$ pivots, it cannot have a pivot in all $n$ rows." },
           { stepText: "By Theorem 4 in Section 1.4, if $A$ does not have a pivot in every row, its columns do not span $\\mathbb{R}^n$." },
           { stepText: "Because a basis must span the space, $S$ cannot be a basis." }
        ]},
        { id: "s4", type: "fill_in_blank", title: "Summary", content: "A set with fewer vectors than the dimension of the space can never ___ the space.", blankAnswer: "span" }
      ]
    },
    {
      id: "les-1-3-14-ex30", title: "Exercise 30: Too Many Vectors", description: "Why k > n fails", icon: "Maximize",
      slides: [
        { id: "s0", type: "quiz", title: "Conceptual Warm-up 1", content: "If you have $k$ vectors in $\\mathbb{R}^n$ and $k > n$, can they be linearly independent?", options: [{id:"A", text:"Yes", isCorrect:false, explanation:"Think about the number of free variables in the matrix."}, {id:"B", text:"No", isCorrect:true, explanation:"Any set of more than $n$ vectors in $\\mathbb{R}^n$ is linearly dependent."}] },
        { id: "s1", type: "example_q", title: "Exercise 30", content: "**Problem:** Let $S = \\{\\mathbf{v}_1, \\dots, \\mathbf{v}_k\\}$ be a set of $k$ vectors in $\\mathbb{R}^n$, with $k > n$. \n\nExplain why $S$ cannot be a basis for $\\mathbb{R}^n$." },
        { id: "s2", type: "solution", title: "Interactive Solution", content: "**Goal: Show that $S$ cannot be linearly independent.**", interactiveSteps: [
           { stepText: "Form a matrix $A$ with the vectors in $S$ as columns. $A$ is an $n \\times k$ matrix." },
           { prompt: "Since $k > n$, how many pivot columns can $A$ have at most?", options: [{id:"A", text:"n", isCorrect:true, explanation:"There are only $n$ rows, so at most $n$ pivots."}, {id:"B", text:"k", isCorrect:false, explanation:"Pivots are bounded by rows and columns."}], stepText: "The maximum number of pivots is $n$." },
           { stepText: "Since there are $k$ columns and at most $n$ pivots (with $k > n$), there must be at least one free variable when solving $A\\mathbf{x} = \\mathbf{0}$." },
           { stepText: "A free variable implies $A\\mathbf{x} = \\mathbf{0}$ has non-trivial solutions, meaning the columns are linearly dependent." },
           { stepText: "Since a basis must be linearly independent, $S$ cannot be a basis." }
        ]},
        { id: "s3", type: "numerical", title: "Max Independent Vectors", content: "What is the absolute maximum number of linearly independent vectors you can have in $\\mathbb{R}^5$?", numericAnswer: 5, numericTolerance: 0 }
      ]
    }
  ]
};
import { Unit } from '../types';

export const UNIT_1_2_9: Unit = {
  id: "unit-1-2-9",
  title: "Subspaces & Counterexamples",
  description: "Exercises 7-13: Verifying subspace properties.",
  color: "duo-blue",
  lessons: [
    {
      id: "les-1-2-9-ex7", title: "Exercise 7: Non-homogeneous", description: "Plane not through origin", icon: "XCircle",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 7", content: "**Problem:** Let $W = \\{ \\begin{bmatrix} a \\\\ b \\\\ c \\end{bmatrix} : a + b + c = 2 \\}$. \n\nIs $W$ a subspace of $\\mathbb{R}^3$?" },
        { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Check the zero vector.**", interactiveSteps: [
           { stepText: "The zero vector is $\\mathbf{0} = [0, 0, 0]^T$." },
           { prompt: "Plug $\\mathbf{0}$ into the condition $a+b+c=2$.", options: [{id:"A", text:"$0+0+0 = 0 \\neq 2$", isCorrect:true, explanation:"The condition fails."}, {id:"B", text:"$0+0+0 = 2$", isCorrect:false, explanation:"Arithmetic error."}], stepText: "Since $0 \\neq 2$, $\\mathbf{0}$ is not in $W$." },
           { stepText: "Therefore, $W$ is **not** a subspace." }
        ]}
      ]
    },
    {
      id: "les-1-2-9-ex8", title: "Exercise 8: Affine Line", description: "Shifted line", icon: "XCircle",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 8", content: "**Problem:** Let $W$ be the set of all vectors of the form $\\begin{bmatrix} r \\\\ s \\\\ t \\end{bmatrix}$ such that $3r - 2 = 3s + t$. Is $W$ a subspace?" },
        { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Check if $\\mathbf{0}$ is in $W$.**", interactiveSteps: [
           { stepText: "The condition is $3r - 3s - t = 2$. This is a non-homogeneous equation." },
           { prompt: "Does the zero vector $(r=0, s=0, t=0)$ satisfy this?", options: [{id:"A", text:"No, $0 - 0 - 0 = 0 \\neq 2$.", isCorrect:true, explanation:"The equation is not satisfied by 0."}, {id:"B", text:"Yes.", isCorrect:false, explanation:""}], stepText: "Since $\\mathbf{0} \\notin W$, it is not a subspace." }
        ]}
      ]
    },
    {
      id: "les-1-2-9-ex9", title: "Exercise 9: Homogeneous System", description: "Valid subspace", icon: "CheckCircle",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 9", content: "**Problem:** Let $W = \\{ \\begin{bmatrix} p \\\\ q \\\\ r \\\\ s \\end{bmatrix} : p - 3q = 4s, \\ 2p = s + 5r \\}$. Is $W$ a subspace?" },
        { id: "s1", type: "solution", title: "Solution", content: "Rewrite the conditions:\n1. $p - 3q - 4s = 0$\n2. $2p - 5r - s = 0$\n\nThese are **homogeneous** linear equations. Thus, $W$ is the set of solutions to a homogeneous system $A\\mathbf{x} = \\mathbf{0}$ (specifically, the Null Space of some matrix $A$).\n\nTherefore, $W$ **is** a subspace." }
      ]
    },
    {
      id: "les-1-2-9-ex10-13", title: "Exercises 10-13", description: "Rapid fire checks", icon: "Zap",
      slides: [
        { id: "s0", type: "quiz", title: "Exercise 10", content: "$W = \\{ \\begin{bmatrix} a \\\\ b \\\\ c \\\\ d \\end{bmatrix} : 3a + b = c, a + b + 2c = 2d \\}$. Subspace?", options: [{id:"A", text:"Yes", isCorrect:true, explanation:"Both equations can be written as homogenous equations ($=0$). It is Nul A."}, {id:"B", text:"No", isCorrect:false, explanation:""}] },
        { id: "s1", type: "quiz", title: "Exercise 11", content: "Vectors of form $\\begin{bmatrix} s - 2t \\\\ 3 + 3s \\\\ 3s + t \\\\ 2s \\end{bmatrix}$. Subspace?", options: [{id:"A", text:"Yes", isCorrect:false, explanation:"Look at the second entry: $3+3s$."}, {id:"B", text:"No", isCorrect:true, explanation:"The constant term 3 in the second component shifts the set away from the origin. If $s=t=0$, vector is $[0, 3, 0, 0]^T \\neq \\mathbf{0}$."}] },
        { id: "s2", type: "quiz", title: "Exercise 12", content: "Vectors of form $\\begin{bmatrix} 3p - 5q \\\\ 4q \\\\ p \\\\ q + 1 \\end{bmatrix}$. Subspace?", options: [{id:"A", text:"Yes", isCorrect:false, explanation:""}, {id:"B", text:"No", isCorrect:true, explanation:"Last component is $q+1$. Zero vector is impossible."}] },
        { id: "s3", type: "quiz", title: "Exercise 13", content: "Vectors of form $\\begin{bmatrix} c - 6d \\\\ d \\\\ c \\end{bmatrix}$. Subspace?", options: [{id:"A", text:"Yes", isCorrect:true, explanation:"This is a linear combination: $c[1,0,1]^T + d[-6,1,0]^T$. It is a Span."}, {id:"B", text:"No", isCorrect:false, explanation:""}] }
      ]
    }
  ]
};
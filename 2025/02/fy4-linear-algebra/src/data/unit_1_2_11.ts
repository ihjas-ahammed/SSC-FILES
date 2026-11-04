import { Unit } from '../types';

export const UNIT_1_2_11: Unit = {
  id: "unit-1-2-11",
  title: "Subspace Properties Review",
  description: "Exercises 17-24: More dimensions and True/False questions.",
  color: "duo-blue",
  lessons: [
    {
      id: "les-1-2-11-ex17-20", title: "Exercises 17-20", description: "Mixed Matrix Dimensions", icon: "Layers",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 17", content: "**Problem:** $A = \\begin{bmatrix} 6 & -4 \\\\ -3 & 2 \\\\ -9 & 6 \\\\ 9 & -6 \\end{bmatrix}$.\n\nFind $k$ for $\\text{Nul } A$ and $\\text{Col } A$." },
        { id: "s1", type: "solution", title: "Solution Ex 17", content: "**Matrix Size:** $4 \\times 2$ (4 rows, 2 columns).\n\n**Nul A:** $\\mathbf{x}$ matches columns. $k = 2$.\n**Col A:** Columns match rows. $k = 4$.\n\n$\\text{Nul } A \\subseteq \\mathbb{R}^2$, $\\text{Col } A \\subseteq \\mathbb{R}^4$." },
        { id: "s2", type: "example_q", title: "Exercise 19", content: "**Problem:** $A = \\begin{bmatrix} 4 & 5 & -2 & 6 & 0 \\\\ 1 & 1 & 0 & 1 & 0 \\end{bmatrix}$." },
        { id: "s3", type: "solution", title: "Solution Ex 19", content: "**Matrix Size:** $2 \\times 5$.\n\n**Nul A:** 5 columns $\\implies \\text{Nul } A \\subseteq \\mathbb{R}^5$.\n**Col A:** 2 rows $\\implies \\text{Col } A \\subseteq \\mathbb{R}^2$." }
      ]
    },
    {
      id: "les-1-2-11-ex23", title: "Exercise 23: True/False", description: "Conceptual Checks 1", icon: "CheckCircle",
      slides: [
        { id: "s0", type: "quiz", title: "Question A", content: "The null space of $A$ is the solution set of the equation $A\\mathbf{x} = \\mathbf{0}$.", options: [{id:"A", text:"True", isCorrect:true, explanation:"This is the definition of the null space."}, {id:"B", text:"False", isCorrect:false, explanation:""}] },
        { id: "s1", type: "quiz", title: "Question B", content: "The null space of an $m \\times n$ matrix is in $\\mathbb{R}^m$.", options: [{id:"A", text:"True", isCorrect:false, explanation:"The solution vector $\\mathbf{x}$ must multiply $A$ from the right, so it must have $n$ entries matching the columns."}, {id:"B", text:"False", isCorrect:true, explanation:"It is in $\\mathbb{R}^n$, not $\\mathbb{R}^m$."}] },
        { id: "s2", type: "quiz", title: "Question C", content: "The column space of $A$ is the range of the mapping $\\mathbf{x} \\mapsto A\\mathbf{x}$.", options: [{id:"A", text:"True", isCorrect:true, explanation:"The range is the set of all possible outputs $A\\mathbf{x}$, which corresponds to all linear combinations of the columns."}, {id:"B", text:"False", isCorrect:false, explanation:""}] },
        { id: "s3", type: "quiz", title: "Question D", content: "If the equation $A\\mathbf{x} = \\mathbf{b}$ is consistent, then $\\text{Col } A$ is $\\mathbb{R}^m$.", options: [{id:"A", text:"True", isCorrect:false, explanation:"Consistency for *one* specific $\\mathbf{b}$ doesn't mean it spans the *entire* space."}, {id:"B", text:"False", isCorrect:true, explanation:"It only means that specific $\\mathbf{b}$ is in Col A. To be $\\mathbb{R}^m$, it must be consistent for ALL $\\mathbf{b}$."}] },
        { id: "s4", type: "quiz", title: "Question E", content: "The kernel of a linear transformation is a vector space.", options: [{id:"A", text:"True", isCorrect:true, explanation:"The kernel corresponds to the null space, which is a subspace."}, {id:"B", text:"False", isCorrect:false, explanation:""}] },
        { id: "s5", type: "quiz", title: "Question F", content: "Col A is the set of all vectors that can be written as $A\\mathbf{x}$ for some $\\mathbf{x}$.", options: [{id:"A", text:"True", isCorrect:true, explanation:"This is the definition of the range/column space."}, {id:"B", text:"False", isCorrect:false, explanation:""}] }
      ]
    },
    {
      id: "les-1-2-11-ex24", title: "Exercise 24: True/False", description: "Conceptual Checks 2", icon: "CheckCircle",
      slides: [
        { id: "s0", type: "quiz", title: "Question A", content: "A null space is a vector space.", options: [{id:"A", text:"True", isCorrect:true, explanation:"It is a subspace of $\\mathbb{R}^n$, so it is a vector space."}, {id:"B", text:"False", isCorrect:false, explanation:""}] },
        { id: "s1", type: "quiz", title: "Question B", content: "The column space of an $m \\times n$ matrix is in $\\mathbb{R}^m$.", options: [{id:"A", text:"True", isCorrect:true, explanation:"Columns have $m$ entries (height), so they live in $\\mathbb{R}^m$."}, {id:"B", text:"False", isCorrect:false, explanation:""}] },
        { id: "s2", type: "quiz", title: "Question C", content: "Col A is the set of all solutions of $A\\mathbf{x} = \\mathbf{b}$.", options: [{id:"A", text:"True", isCorrect:false, explanation:"The solution set is for $\\mathbf{x}$. Col A contains the vectors $\\mathbf{b}$ that make it consistent."}, {id:"B", text:"False", isCorrect:true, explanation:"Col A consists of the possible values of $\\mathbf{b}$, not the solutions $\\mathbf{x}$."}] },
        { id: "s3", type: "quiz", title: "Question D", content: "Nul A is the kernel of the mapping $\\mathbf{x} \\mapsto A\\mathbf{x}$.", options: [{id:"A", text:"True", isCorrect:true, explanation:"Kernel and Null Space are synonymous in this context."}, {id:"B", text:"False", isCorrect:false, explanation:""}] },
        { id: "s4", type: "quiz", title: "Question E", content: "The range of a linear transformation is a vector space.", options: [{id:"A", text:"True", isCorrect:true, explanation:"The range is a subspace of the codomain."}, {id:"B", text:"False", isCorrect:false, explanation:""}] },
        { id: "s5", type: "quiz", title: "Question F", content: "The set of all solutions of a homogeneous linear differential equation is the kernel of a linear transformation.", options: [{id:"A", text:"True", isCorrect:true, explanation:"Differential operators are linear transformations. Their solutions form the kernel."}, {id:"B", text:"False", isCorrect:false, explanation:""}] }
      ]
    }
  ]
};
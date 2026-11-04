import { Unit } from '../types';

export const UNIT_2_1_14: Unit = {
  id: "unit-2-1-14",
  title: "Polynomial Independence via Coordinates",
  description: "Exercises 27-30: Using coordinate vectors to test linear independence of polynomials.",
  color: "duo-blue",
  lessons: [
    {
      id: "les-2-1-14-ex27", title: "Exercise 27", description: "3 Polynomials in P3", icon: "TrendingUp",
      slides: [
        { id: "s0", type: "quiz", title: "Conceptual Warm-up", content: "By Exercise 25, a set of polynomials is linearly independent if and only if their coordinate vectors in $\\mathbb{R}^n$ are linearly independent. Which basis should we use to find their coordinate vectors?", options: [{id:"A", text:"The standard basis $\\{1, t, t^2, t^3\\}$", isCorrect:true, explanation:"This is the easiest basis to use, directly extracting the coefficients."}, {id:"B", text:"Any random basis", isCorrect:false, explanation:"While technically true, the standard basis makes computation trivial."}] },
        { id: "s1", type: "example_q", title: "Exercise 27", content: "**Problem:** Use coordinate vectors to test the linear independence of the set of polynomials:\n$$ 1 + 2t^3, \\quad 2 + t - 3t^2, \\quad -t + 2t^2 - t^3 $$" },
        { id: "s2", type: "solution", title: "Interactive Solution", content: "**Goal: Map to $\\mathbb{R}^4$ and check columns.**", interactiveSteps: [
           { stepText: "Extract coordinates using standard basis $\\mathcal{B} = \\{1, t, t^2, t^3\\}$." },
           { stepText: "$\\mathbf{v}_1 = [1, 0, 0, 2]^T$." },
           { stepText: "$\\mathbf{v}_2 = [2, 1, -3, 0]^T$." },
           { prompt: "What is $\\mathbf{v}_3$?", options: [{id:"A", text:"$[0, -1, 2, -1]^T$", isCorrect:true, explanation:"Constant is 0, t is -1, t^2 is 2, t^3 is -1."}, {id:"B", text:"$[-1, 2, -1, 0]^T$", isCorrect:false, explanation:"Match terms to powers of t."}], stepText: "$\\mathbf{v}_3 = [0, -1, 2, -1]^T$." },
           { stepText: "Form matrix $A = [\\mathbf{v}_1 \\ \\mathbf{v}_2 \\ \\mathbf{v}_3]$ and row reduce:\n$\\begin{bmatrix} 1 & 2 & 0 \\\\ 0 & 1 & -1 \\\\ 0 & -3 & 2 \\\\ 2 & 0 & -1 \\end{bmatrix} \\sim \\dots \\sim \\begin{bmatrix} 1 & 0 & 0 \\\\ 0 & 1 & 0 \\\\ 0 & 0 & 1 \\\\ 0 & 0 & 0 \\end{bmatrix}$." },
           { stepText: "Since every column has a pivot, the columns are linearly independent. Thus, the polynomials are **linearly independent**." }
        ]}
      ]
    },
    {
      id: "les-2-1-14-ex28", title: "Exercise 28", description: "Checking dependence in P3", icon: "TrendingUp",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 28", content: "**Problem:** Test the linear independence of:\n$$ 1 - 2t^2 - t^3, \\quad t + 2t^3, \\quad 1 + t - 2t^2 $$" },
        { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Form the matrix of coordinate vectors.**", interactiveSteps: [
           { stepText: "$\\mathbf{v}_1 = [1, 0, -2, -1]^T$" },
           { stepText: "$\\mathbf{v}_2 = [0, 1, 0, 2]^T$" },
           { stepText: "$\\mathbf{v}_3 = [1, 1, -2, 0]^T$" },
           { prompt: "Look at the columns closely. Can you spot a relationship?", options: [{id:"A", text:"$\\mathbf{v}_3 = \\mathbf{v}_1 + \\mathbf{v}_2$", isCorrect:true, explanation:"$[1, 0, -2, -1] + [0, 1, 0, 2] = [1, 1, -2, 1]...$ wait, is it?"}, {id:"B", text:"No obvious relationship.", isCorrect:false, explanation:""}], stepText: "Let's check: $[1, 0, -2, -1]^T + [0, 1, 0, 2]^T = [1, 1, -2, 1]^T$. But $\\mathbf{v}_3$ ends in 0, not 1! So $\\mathbf{v}_3 \\neq \\mathbf{v}_1 + \\mathbf{v}_2$." },
           { stepText: "We must row reduce. Matrix $A = \\begin{bmatrix} 1 & 0 & 1 \\\\ 0 & 1 & 1 \\\\ -2 & 0 & -2 \\\\ -1 & 2 & 0 \\end{bmatrix}$." },
           { stepText: "Row reduction shows $R_3 + 2R_1 \\implies 0=0$. So row 3 drops out. But $R_4 + R_1 \\implies [0, 2, 1]$. \nFull RREF gives 3 pivots." },
           { stepText: "The vectors are **linearly independent**." }
        ]}
      ]
    },
    {
      id: "les-2-1-14-ex29", title: "Exercise 29", description: "Polynomials with roots", icon: "TrendingUp",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 29", content: "**Problem:** Test the linear independence of:\n$$ (1-t)^2, \\quad t - 2t^2 + t^3, \\quad (1-t)^3 $$" },
        { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Expand polynomials first.**", interactiveSteps: [
           { stepText: "Expand $\\mathbf{p}_1$: $(1-t)^2 = 1 - 2t + t^2 \\implies [1, -2, 1, 0]^T$." },
           { stepText: "$\\mathbf{p}_2 = t - 2t^2 + t^3 \\implies [0, 1, -2, 1]^T$." },
           { prompt: "Expand $\\mathbf{p}_3$: $(1-t)^3$.", options: [{id:"A", text:"$1 - 3t + 3t^2 - t^3 \\implies [1, -3, 3, -1]^T$", isCorrect:true, explanation:"Binomial expansion."}, {id:"B", text:"$1 - t^3 \\implies [1, 0, 0, -1]^T$", isCorrect:false, explanation:"$(a-b)^3 \\neq a^3 - b^3$."}], stepText: "$\\mathbf{p}_3 \\implies [1, -3, 3, -1]^T$." },
           { stepText: "Matrix $A = \\begin{bmatrix} 1 & 0 & 1 \\\\ -2 & 1 & -3 \\\\ 1 & -2 & 3 \\\\ 0 & 1 & -1 \\end{bmatrix}$." },
           { stepText: "Notice that $\\mathbf{v}_1 - \\mathbf{v}_2 = \\begin{bmatrix} 1 \\\\ -2 \\\\ 1 \\\\ 0 \\end{bmatrix} - \\begin{bmatrix} 0 \\\\ 1 \\\\ -2 \\\\ 1 \\end{bmatrix} = \\begin{bmatrix} 1 \\\\ -3 \\\\ 3 \\\\ -1 \\end{bmatrix} = \\mathbf{v}_3$." },
           { stepText: "Since $\\mathbf{p}_3 = \\mathbf{p}_1 - \\mathbf{p}_2$, the set is **linearly dependent**." }
        ]}
      ]
    },
    {
      id: "les-2-1-14-ex30", title: "Exercise 30", description: "Polynomial dependence", icon: "TrendingUp",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 30", content: "**Problem:** Test the linear independence of:\n$$ (2-t)^3, \\quad (3-t)^2, \\quad 1 + 6t - 5t^2 + t^3 $$" },
        { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Extract coordinates.**", interactiveSteps: [
           { stepText: "Expand $\\mathbf{p}_1$: $8 - 12t + 6t^2 - t^3 \\implies [8, -12, 6, -1]^T$." },
           { stepText: "Expand $\\mathbf{p}_2$: $9 - 6t + t^2 \\implies [9, -6, 1, 0]^T$." },
           { stepText: "$\\mathbf{p}_3$: $1 + 6t - 5t^2 + t^3 \\implies [1, 6, -5, 1]^T$." },
           { prompt: "Look at the $t^3$ (last) coordinate. $\\mathbf{v}_1$ has $-1$, $\\mathbf{v}_2$ has $0$, $\\mathbf{v}_3$ has $1$. If they are dependent, what must the relationship be?", options: [{id:"A", text:"$\\mathbf{v}_1 = -\\mathbf{v}_3$ (ignoring v2)", isCorrect:false, explanation:"That only matches the last coordinate."}, {id:"B", text:"$\\mathbf{v}_1 + \\mathbf{v}_3$ must involve $\\mathbf{v}_2$", isCorrect:true, explanation:"Since adding v1 and v3 zeros out the last coordinate, it can match v2."}], stepText: "Let's compute $\\mathbf{v}_1 + \\mathbf{v}_3 = [8+1, -12+6, 6-5, -1+1]^T = [9, -6, 1, 0]^T$." },
           { stepText: "Wow! $\\mathbf{v}_1 + \\mathbf{v}_3 = \\mathbf{v}_2$." },
           { stepText: "Therefore, the polynomials are **linearly dependent**." }
        ]}
      ]
    }
  ]
};
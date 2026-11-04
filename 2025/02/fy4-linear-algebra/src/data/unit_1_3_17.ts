import { Unit } from '../types';

export const UNIT_1_3_17: Unit = {
  id: "unit-1-3-17",
  title: "Advanced Basis Construction",
  description: "Exercises 35-38: Building bases and function spaces.",
  color: "duo-blue",
  lessons: [
    {
      id: "les-1-3-17-ex35", title: "Exercise 35", description: "Designing a specific span", icon: "PenTool",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 35", content: "**Problem:** Let $V$ be a vector space that contains a linearly independent set $\\{\\mathbf{u}_1, \\mathbf{u}_2, \\mathbf{u}_3, \\mathbf{u}_4\\}$. \n\nDescribe how to construct a set of vectors $\\{\\mathbf{v}_1, \\mathbf{v}_2, \\mathbf{v}_3, \\mathbf{v}_4\\}$ in $V$ such that $\\{\\mathbf{v}_1, \\mathbf{v}_3\\}$ is a basis for $\\text{Span}\\{\\mathbf{v}_1, \\mathbf{v}_2, \\mathbf{v}_3, \\mathbf{v}_4\\}$." },
        { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Make v1, v3 independent, and make v2, v4 redundant.**", interactiveSteps: [
           { stepText: "We need $\\mathbf{v}_1$ and $\\mathbf{v}_3$ to be linearly independent. Since $\\mathbf{u}_1$ and $\\mathbf{u}_2$ are independent, let's simply define $\\mathbf{v}_1 = \\mathbf{u}_1$ and $\\mathbf{v}_3 = \\mathbf{u}_2$." },
           { stepText: "Now we need $\\mathbf{v}_2$ and $\\mathbf{v}_4$ to be in $\\text{Span}\\{\\mathbf{v}_1, \\mathbf{v}_3\\}$, so they don't add any new dimensions." },
           { prompt: "What is an easy choice for $\\mathbf{v}_2$ and $\\mathbf{v}_4$?", options: [{id:"A", text:"Make them equal to v1 or v3", isCorrect:true, explanation:"If $\\mathbf{v}_2 = \\mathbf{v}_1$, then it's automatically in the span."}, {id:"B", text:"Make them u3 and u4", isCorrect:false, explanation:"If we use u3 and u4, the span will be 4-dimensional, so {v1, v3} wouldn't be a basis for it."}], stepText: "We can set $\\mathbf{v}_2 = \\mathbf{v}_1$ and $\\mathbf{v}_4 = \\mathbf{v}_3$." },
           { stepText: "With $\\{\\mathbf{u}_1, \\mathbf{u}_1, \\mathbf{u}_2, \\mathbf{u}_2\\}$, the span is just $\\text{Span}\\{\\mathbf{u}_1, \\mathbf{u}_2\\}$. And the basis is clearly the independent vectors $\\{\\mathbf{u}_1, \\mathbf{u}_2\\}$, which are $\\mathbf{v}_1$ and $\\mathbf{v}_3$." }
        ]}
      ]
    },
    {
      id: "les-1-3-17-ex36", title: "Exercise 36", description: "Bases for H, K, H+K", icon: "Layers",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 36 (Methodology)", content: "**Problem Overview:** You are given $H = \\text{Span}\\{\\mathbf{u}_1, \\mathbf{u}_2, \\mathbf{u}_3\\}$ and $K = \\text{Span}\\{\\mathbf{v}_1, \\mathbf{v}_2, \\mathbf{v}_3\\}$ with specific numerical vectors. \n\nHow do you find bases for $H$, $K$, and $H+K$?" },
        { id: "s1", type: "solution", title: "Methodology", content: "1. **Basis for H:** Create a matrix with columns $\\mathbf{u}_1, \\mathbf{u}_2, \\mathbf{u}_3$. Row reduce to find pivot columns. Use those original columns.\n2. **Basis for K:** Same process, but with a matrix of $\\mathbf{v}_1, \\mathbf{v}_2, \\mathbf{v}_3$.\n3. **Basis for H+K:** The subspace $H+K$ is the span of all 6 vectors combined! Create a large matrix $A = [\\mathbf{u}_1 \\ \\mathbf{u}_2 \\ \\mathbf{u}_3 \\ \\mathbf{v}_1 \\ \\mathbf{v}_2 \\ \\mathbf{v}_3]$. Row reduce to find the pivot columns, and use those original vectors." }
      ]
    },
    {
      id: "les-1-3-17-ex37-38", title: "Exercises 37 & 38", description: "Trig Function Independence", icon: "Waves",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 37", content: "**Problem:** Show that $\\{t, \\sin t, \\cos 2t, \\sin t \\cos t\\}$ is a linearly independent set of functions defined on $\\mathbb{R}$." },
        { id: "s1", type: "solution", title: "Approach", content: "Assume $c_1 t + c_2 \\sin t + c_3 \\cos 2t + c_4 \\sin t \\cos t = 0$ for all $t$.\n\nTo prove independence, we choose clever values of $t$ to create a system of equations where the only solution is $c_i = 0$.\n\n- If $t=0$: $c_1(0) + c_2(0) + c_3(1) + c_4(0) = 0 \\implies c_3 = 0$.\n- The equation becomes $c_1 t + c_2 \\sin t + c_4 \\sin t \\cos t = 0$.\n- If $t=\\pi$: $c_1(\\pi) + c_2(0) + c_4(0) = 0 \\implies c_1 = 0$.\n- The equation becomes $c_2 \\sin t + c_4 \\sin t \\cos t = 0$.\n- If $t=\\pi/2$: $c_2(1) + c_4(0) = 0 \\implies c_2 = 0$.\n- If $t=\\pi/4$: $c_4 (\\dots) = 0 \\implies c_4 = 0$.\n\nSince all $c_i = 0$, they are independent." },
        { id: "s2", type: "example_q", title: "Exercise 38", content: "**Problem:** Show that $\\{1, \\cos t, \\cos^2 t, \\dots, \\cos^6 t\\}$ is a linearly independent set of functions." },
        { id: "s3", type: "solution", title: "Approach", content: "Assume $c_0 + c_1 \\cos t + c_2 \\cos^2 t + \\dots + c_6 \\cos^6 t = 0$ for all $t$.\n\nLet $x = \\cos t$. As $t$ varies, $x$ varies over $[-1, 1]$. \nThe equation becomes $c_0 + c_1 x + c_2 x^2 + \\dots + c_6 x^6 = 0$ for all $x \\in [-1, 1]$.\n\nThis is a polynomial of degree 6 that has infinitely many roots (every number in $[-1, 1]$). A non-zero polynomial of degree 6 can have at most 6 roots. Therefore, it must be the zero polynomial, meaning all coefficients $c_i = 0$." }
      ]
    }
  ]
};
import { Unit } from '../types';

export const UNIT_1_1_5: Unit = {
  id: "unit-1-1-5",
  title: "Polynomial Subspaces",
  description: "Exercises 5-8: Subspaces of P_n",
  color: "duo-blue",
  lessons: [
    {
      id: "les-1-1-5-ex5-6", title: "Polynomial Forms", description: "Exercises 5 & 6", icon: "FunctionSquare",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 5", content: "**Problem:** Let $H$ be the set of all polynomials of the form $\\mathbf{p}(t) = at^2$, where $a$ is in $\\mathbb{R}$. Is $H$ a subspace of $\\mathbb{P}_2$?" },
        { id: "s1", type: "solution", title: "Interactive Solution (Ex 5)", content: "**Goal: Check subspace properties.**", interactiveSteps: [
           { stepText: "Zero vector: Let $a=0$, then $\\mathbf{p}(t) = 0$. $\\mathbf{0} \\in H$." },
           { stepText: "Addition: $at^2 + bt^2 = (a+b)t^2$. This is still of the form (scalar)$t^2$. Closed." },
           { stepText: "Scalar mult: $c(at^2) = (ca)t^2$. Closed." },
           { stepText: "Yes, $H$ is a subspace. It is $\\text{Span}\\{t^2\\}$." }
        ]},
        { id: "s2", type: "example_q", title: "Exercise 6", content: "**Problem:** Let $K$ be the set of all polynomials of the form $\\mathbf{p}(t) = a + t^2$, where $a$ is in $\\mathbb{R}$. Is $K$ a subspace?" },
        { id: "s3", type: "solution", title: "Interactive Solution (Ex 6)", content: "**Goal: Check for zero vector.**", interactiveSteps: [
           { prompt: "Can $\\mathbf{p}(t) = 0$ for all $t$?", options: [{id:"A", text:"Yes, if $a=0$.", isCorrect:false, explanation:"If $a=0$, $p(t) = t^2$, which is not the zero polynomial."}, {id:"B", text:"No, the $t^2$ term is fixed.", isCorrect:true, explanation:"The coefficient of $t^2$ is fixed at 1. It can never be 0."}], stepText: "The zero polynomial requires all coefficients to be 0. Here, the $t^2$ term is always $1t^2$." },
           { stepText: "Since $\\mathbf{0} \\notin K$, $K$ is **not** a subspace." }
        ]}
      ]
    },
    {
      id: "les-1-1-5-ex7", title: "Integer Coefficients", description: "Exercise 7", icon: "Hash",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 7", content: "**Problem:** Let $H$ be the set of polynomials of degree at most 3, with **integers** as coefficients. Is $H$ a subspace of $\\mathbb{P}_3$?" },
        { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Check scalar multiplication.**", interactiveSteps: [
           { stepText: "Let $\\mathbf{p}(t) = 1$ (integer coeff). This is in $H$." },
           { prompt: "Let scalar $c = 0.5$. Is $c\\mathbf{p}(t)$ in $H$?", options: [{id:"A", text:"Yes", isCorrect:false, explanation:"0.5 is not an integer."}, {id:"B", text:"No", isCorrect:true, explanation:"The coefficient becomes 0.5, which is not an integer."}], stepText: "$c\\mathbf{p}(t) = 0.5$. Since the coefficient is not an integer, it is not in $H$." },
           { stepText: "Not closed under scalar multiplication (by real scalars). **Not** a subspace." }
        ]}
      ]
    },
    {
      id: "les-1-1-5-ex8", title: "Value Constraints", description: "Exercise 8", icon: "Target",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 8", content: "**Problem:** Let $H$ be the set of all polynomials in $\\mathbb{P}_n$ such that $\\mathbf{p}(0) = 0$. Is $H$ a subspace?" },
        { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Verify properties.**", interactiveSteps: [
           { stepText: "Zero vector: The zero polynomial is $\\mathbf{0}(t) = 0$ for all $t$. Thus $\\mathbf{0}(0) = 0$. In $H$." },
           { prompt: "Addition: If $\\mathbf{p}(0)=0$ and $\\mathbf{q}(0)=0$, what is $(\\mathbf{p}+\\mathbf{q})(0)$?", options: [{id:"A", text:"0", isCorrect:true, explanation:"$p(0)+q(0) = 0+0 = 0$."}, {id:"B", text:"Undefined", isCorrect:false, explanation:""}], stepText: "Closed under addition." },
           { stepText: "Scalar mult: $(c\\mathbf{p})(0) = c(\\mathbf{p}(0)) = c(0) = 0$. Closed." },
           { stepText: "Yes, $H$ is a subspace." }
        ]},
        { id: "s2", type: "quiz", title: "Alternative View", content: "Geometrically, for polynomials $a_0 + a_1t + \\dots$, the condition $p(0)=0$ means:", options: [{id:"A", text:"The constant term $a_0$ is 0.", isCorrect:true, explanation:"$p(0) = a_0$. So $H$ is the set of polynomials with no constant term."}, {id:"B", text:"The highest power coefficient is 0.", isCorrect:false, explanation:""}] }
      ]
    }
  ]
};
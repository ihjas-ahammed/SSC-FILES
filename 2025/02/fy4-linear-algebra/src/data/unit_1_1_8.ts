import { Unit } from '../types';

export const UNIT_1_1_8: Unit = {
  id: "unit-1-1-8",
  title: "Functions and Physics",
  description: "Exercises 19-20: Vector spaces in analysis and physics.",
  color: "duo-green",
  lessons: [
    {
      id: "les-1-1-8-ex19", title: "Exercise 19: Harmonic Motion", description: "Mass-spring systems", icon: "Activity",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 19", content: "**Problem:** A mass-spring system behaves according to the differential equation $y'' + \\omega^2 y = 0$. The set of solutions is given by functions of the form:\n$$ y(t) = c_1 \\cos(\\omega t) + c_2 \\sin(\\omega t) $$\nShow that the set of all such solutions is a vector space." },
        { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Relate to Spanning Sets.**", interactiveSteps: [
           { stepText: "Let $f_1(t) = \\cos(\\omega t)$ and $f_2(t) = \\sin(\\omega t)$." },
           { prompt: "How can we describe the set of solutions $y(t)$ using $f_1$ and $f_2$?", options: [{id:"A", text:"It is the Span of $\\{f_1, f_2\\}$.", isCorrect:true, explanation:"Every solution is a linear combination $c_1 f_1 + c_2 f_2$."}, {id:"B", text:"It is the product of $f_1$ and $f_2$.", isCorrect:false, explanation:""}], stepText: "The set of solutions is exactly $\\text{Span}\\{ \\cos(\\omega t), \\sin(\\omega t) \\}$." },
           { stepText: "Since $\\cos(\\omega t)$ and $\\sin(\\omega t)$ are functions in the vector space of all real-valued functions, their Span is automatically a subspace (Theorem 1)." }
        ]},
        { id: "s2", type: "quiz", title: "Physics Context", content: "In this vector space, what does the zero vector represent?", options: [{id:"A", text:"The mass at rest at the equilibrium position ($y(t)=0$).", isCorrect:true, explanation:"The function that is zero for all time."}, {id:"B", text:"The mass at maximum amplitude.", isCorrect:false, explanation:""}] }
      ]
    },
    {
      id: "les-1-1-8-ex20", title: "Exercise 20: Continuous Functions", description: "The space C[a,b]", icon: "Waves",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 20", content: "**Problem:** Let $C[a, b]$ be the set of all continuous real-valued functions defined on a closed interval $[a, b]$. Show that $C[a, b]$ is a subspace of the space of all functions defined on $[a, b]$." },
        { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Check 3 Properties using Calculus theorems.**", interactiveSteps: [
           { stepText: "1. Zero vector: Is the constant function $\\mathbf{0}(t) = 0$ continuous?" },
           { prompt: "Yes/No?", options: [{id:"A", text:"Yes", isCorrect:true, explanation:"Constant functions are continuous everywhere."}, {id:"B", text:"No", isCorrect:false, explanation:""}], stepText: "The zero vector is in $C[a, b]$." },
           { stepText: "2. Closure under addition: If $f$ and $g$ are continuous on $[a, b]$, is $f+g$ continuous?" },
           { prompt: "Recall Calculus rules.", options: [{id:"A", text:"Yes, sum of continuous functions is continuous.", isCorrect:true, explanation:"Standard theorem from calculus."}, {id:"B", text:"No", isCorrect:false, explanation:""}], stepText: "Closed under addition." },
           { stepText: "3. Closure under scalar multiplication: If $f$ is continuous, is $cf$ continuous?" },
           { stepText: "Yes, a constant multiple of a continuous function is continuous. Thus, $C[a, b]$ is a subspace." }
        ]}
      ]
    }
  ]
};
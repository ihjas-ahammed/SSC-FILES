import { Unit } from '../types';

export const UNIT_1_1_11: Unit = {
  id: "unit-1-1-11",
  title: "Axiomatic Proofs Workshop",
  description: "Exercises 25-29: Rigorous proofs using only the 10 axioms.",
  color: "duo-blue",
  lessons: [
    {
      id: "les-1-1-11-ex25-26", title: "Uniqueness Theorems", description: "Proving uniqueness of 0 and -u", icon: "ShieldCheck",
      slides: [
        { id: "s0", type: "theory", title: "Exercise 25: Uniqueness of Zero", content: "We previously showed the zero vector is unique. Let's formalize it strictly using axioms.\n\n**Claim:** Suppose $\\mathbf{u} + \\mathbf{w} = \\mathbf{u}$ for all $\\mathbf{u}$. Then $\\mathbf{w} = \\mathbf{0}$." },
        { id: "s1", type: "proof", title: "Proof Construction", content: "Complete the proof:", interactiveSteps: [
           { stepText: "By hypothesis, the equation holds for *all* $\\mathbf{u}$. We need to pick a clever choice for $\\mathbf{u}$." },
           { prompt: "Which vector should we substitute for $\\mathbf{u}$ to isolate $\\mathbf{w}$?", options: [{id:"A", text:"Let $\\mathbf{u} = \\mathbf{0}$", isCorrect:true, explanation:"If it works for everything, it works for the zero vector."}, {id:"B", text:"Let $\\mathbf{u} = -\\mathbf{w}$", isCorrect:false, explanation:"That assumes -w exists, which relies on w being a vector."}], stepText: "Let $\\mathbf{u} = \\mathbf{0}$. Then the equation becomes $\\mathbf{0} + \\mathbf{w} = \\mathbf{0}$." },
           { prompt: "By Axiom 2 (commutativity), $\\mathbf{0} + \\mathbf{w} = \\mathbf{w} + \\mathbf{0}$. By Axiom 4, what is $\\mathbf{w} + \\mathbf{0}$?", options: [{id:"A", text:"$\\mathbf{0}$", isCorrect:false, explanation:""}, {id:"B", text:"$\\mathbf{w}$", isCorrect:true, explanation:"Adding zero to a vector does not change it."}], stepText: "So $\\mathbf{w} = \\mathbf{0}$. The zero vector is unique." }
        ]},
        { id: "s2", type: "proof", title: "Exercise 26: Uniqueness of Inverse", content: "Show that for a given $\\mathbf{u}$, the negative $-\\mathbf{u}$ is unique. Suppose $\\mathbf{v}$ satisfies $\\mathbf{u} + \\mathbf{v} = \\mathbf{0}$.", interactiveSteps: [
           { stepText: "Add $-\\mathbf{u}$ to both sides of $\\mathbf{u} + \\mathbf{v} = \\mathbf{0}$." },
           { stepText: "$(-\\mathbf{u}) + (\\mathbf{u} + \\mathbf{v}) = (-\\mathbf{u}) + \\mathbf{0}$" },
           { prompt: "Use Associativity (Axiom 3) on the left side.", options: [{id:"A", text:"$(-\\mathbf{u} + \\mathbf{u}) + \\mathbf{v}$", isCorrect:true, explanation:"Regrouping the terms."}, {id:"B", text:"$\\mathbf{u} + (-\\mathbf{u} + \\mathbf{v})$", isCorrect:false, explanation:""}], stepText: "We get $\\mathbf{0} + \\mathbf{v}$ on the left." },
           { stepText: "Thus $\\mathbf{v} = -\\mathbf{u}$. The additive inverse is unique." }
        ]}
      ]
    },
    {
      id: "les-1-1-11-ex27-29", title: "Scalar Arithmetic Proofs", description: "Zeros and Negatives", icon: "Calculator",
      slides: [
        { id: "s0", type: "proof", title: "Exercise 27: Zero Scalar", content: "**Claim:** For any $\\mathbf{u}$, $0\\mathbf{u} = \\mathbf{0}$.", interactiveSteps: [
           { stepText: "Write $0\\mathbf{u} = (0+0)\\mathbf{u}$." },
           { prompt: "Apply Distributive Law (Axiom 8).", options: [{id:"A", text:"$0\\mathbf{u} + 0\\mathbf{u}$", isCorrect:true, explanation:""}, {id:"B", text:"$0$", isCorrect:false, explanation:""}], stepText: "$0\\mathbf{u} = 0\\mathbf{u} + 0\\mathbf{u}$." },
           { stepText: "Add $-(0\\mathbf{u})$ to both sides. $0\\mathbf{u} + (-(0\\mathbf{u})) = 0\\mathbf{u} + 0\\mathbf{u} + (-(0\\mathbf{u}))$" },
           { stepText: "$\\mathbf{0} = 0\\mathbf{u} + \\mathbf{0} = 0\\mathbf{u}$. Q.E.D." }
        ]},
        { id: "s1", type: "example_q", title: "Exercise 29: Negative One", content: "Prove that $(-1)\\mathbf{u} = -\\mathbf{u}$." },
        { id: "s2", type: "solution", title: "Interactive Proof", content: "**Goal: Show $(-1)\\mathbf{u}$ acts as the additive inverse.**", interactiveSteps: [
           { stepText: "Consider the sum $\\mathbf{u} + (-1)\\mathbf{u}$." },
           { stepText: "Rewrite $\\mathbf{u}$ as $1\\mathbf{u}$ (Axiom 10)." },
           { prompt: "Factor out $\\mathbf{u}$ using Axiom 8.", options: [{id:"A", text:"$(1 + (-1))\\mathbf{u}$", isCorrect:true, explanation:"$1\\mathbf{u} + (-1)\\mathbf{u} = (1-1)\\mathbf{u}$."}, {id:"B", text:"$0\\mathbf{u}$", isCorrect:false, explanation:"Skipped a step, but yes, that's the result."}], stepText: "$(1 + (-1))\\mathbf{u} = 0\\mathbf{u}$." },
           { stepText: "From Exercise 27, $0\\mathbf{u} = \\mathbf{0}$. Since $\\mathbf{u} + (-1)\\mathbf{u} = \\mathbf{0}$, by uniqueness of the inverse, $(-1)\\mathbf{u} = -\\mathbf{u}$." }
        ]}
      ]
    }
  ]
};
import { Unit } from '../types';

export const UNIT_1_2_12: Unit = {
  id: "unit-1-2-12",
  title: "Proof Workshop: Nul & Col",
  description: "Exercises 25-26: Rigorous proofs of subspace properties.",
  color: "duo-blue",
  lessons: [
    {
      id: "les-1-2-12-ex25", title: "Exercise 25: Nul A Proof", description: "Proving closure properties", icon: "Shield",
      slides: [
        { id: "s0", type: "theory", title: "Exercise 25 Context", content: "We previously stated that $\\text{Nul } A$ is a subspace. Now, we will rigorously prove the two main closure properties required by the definition of a subspace, using the definition of $\\text{Nul } A$.\n\nRecall: $\\mathbf{x} \\in \\text{Nul } A \\iff A\\mathbf{x} = \\mathbf{0}$." },
        { id: "s1", type: "proof", title: "Proof: Closure under Addition", content: "**Claim:** If $\\mathbf{u}$ and $\\mathbf{v}$ are in $\\text{Nul } A$, then $\\mathbf{u} + \\mathbf{v}$ is in $\\text{Nul } A$.", interactiveSteps: [
           { stepText: "Let $\\mathbf{u}$ and $\\mathbf{v}$ be in $\\text{Nul } A$. This means $A\\mathbf{u} = \\mathbf{0}$ and $A\\mathbf{v} = \\mathbf{0}$." },
           { prompt: "To check if $\\mathbf{u} + \\mathbf{v}$ is in $\\text{Nul } A$, what must we compute?", options: [{id:"A", text:"$A(\\mathbf{u} + \\mathbf{v})$", isCorrect:true, explanation:"We must check if A times the sum results in the zero vector."}, {id:"B", text:"$\\mathbf{u} + \\mathbf{v}$", isCorrect:false, explanation:"We need to apply the matrix A to the vector."}], stepText: "We compute $A(\\mathbf{u} + \\mathbf{v})$." },
           { prompt: "By the distributive property of matrix multiplication, $A(\\mathbf{u} + \\mathbf{v}) = $ ...?", options: [{id:"A", text:"$A\\mathbf{u} + A\\mathbf{v}$", isCorrect:true, explanation:""}, {id:"B", text:"$A\\mathbf{u} + \\mathbf{v}$", isCorrect:false, explanation:""}], stepText: "$A(\\mathbf{u} + \\mathbf{v}) = A\\mathbf{u} + A\\mathbf{v} = \\mathbf{0} + \\mathbf{0} = \\mathbf{0}$." },
           { stepText: "Since $A(\\mathbf{u} + \\mathbf{v}) = \\mathbf{0}$, $\\mathbf{u} + \\mathbf{v}$ is in $\\text{Nul } A$." }
        ]},
        { id: "s2", type: "proof", title: "Proof: Closure under Scalar Mult.", content: "**Claim:** If $\\mathbf{u}$ is in $\\text{Nul } A$ and $c$ is a scalar, then $c\\mathbf{u}$ is in $\\text{Nul } A$.", interactiveSteps: [
           { stepText: "Assume $A\\mathbf{u} = \\mathbf{0}$." },
           { prompt: "Compute $A(c\\mathbf{u})$. How do scalars interact with matrix multiplication?", options: [{id:"A", text:"$c(A\\mathbf{u})$", isCorrect:true, explanation:"Scalars factor out: $A(c\\mathbf{x}) = c(A\\mathbf{x})$."}, {id:"B", text:"$A\\mathbf{u} + c$", isCorrect:false, explanation:""}], stepText: "$A(c\\mathbf{u}) = c(A\\mathbf{u})$." },
           { stepText: "Substitute $A\\mathbf{u} = \\mathbf{0}$: $c(\\mathbf{0}) = \\mathbf{0}$." },
           { stepText: "Since $A(c\\mathbf{u}) = \\mathbf{0}$, the vector $c\\mathbf{u}$ is in $\\text{Nul } A$." }
        ]}
      ]
    },
    {
      id: "les-1-2-12-ex26", title: "Exercise 26: Col A Proof", description: "Explicit description proof", icon: "Shield",
      slides: [
        { id: "s0", type: "theory", title: "Exercise 26 Context", content: "Rather than using the Spanning Set Theorem, let's prove $\\text{Col } A$ is a subspace using the explicit description:\n\n$\\text{Col } A = \\{ \\mathbf{b} : \\mathbf{b} = A\\mathbf{x} \\text{ for some } \\mathbf{x} \\}$." },
        { id: "s1", type: "proof", title: "Proof: Closure under Addition", content: "**Claim:** If $\\mathbf{u}$ and $\\mathbf{v}$ are in $\\text{Col } A$, then $\\mathbf{u} + \\mathbf{v}$ is in $\\text{Col } A$.", interactiveSteps: [
           { stepText: "If $\\mathbf{u}$ is in $\\text{Col } A$, then $\\mathbf{u} = A\\mathbf{x}$ for some vector $\\mathbf{x}$." },
           { stepText: "If $\\mathbf{v}$ is in $\\text{Col } A$, then $\\mathbf{v} = A\\mathbf{y}$ for some vector $\\mathbf{y}$." },
           { prompt: "What is $\\mathbf{u} + \\mathbf{v}$ in terms of $A$?", options: [{id:"A", text:"$A\\mathbf{x} + A\\mathbf{y}$", isCorrect:true, explanation:""}, {id:"B", text:"$A(\\mathbf{x}\\mathbf{y})$", isCorrect:false, explanation:""}], stepText: "$\\mathbf{u} + \\mathbf{v} = A\\mathbf{x} + A\\mathbf{y} = A(\\mathbf{x} + \\mathbf{y})$." },
           { prompt: "Is this result in $\\text{Col } A$?", options: [{id:"A", text:"Yes", isCorrect:true, explanation:"It is of the form $A(\\text{some vector})$, specifically vector $(\\mathbf{x}+\\mathbf{y})$."}, {id:"B", text:"No", isCorrect:false, explanation:""}], stepText: "Thus, $\\mathbf{u} + \\mathbf{v}$ is in $\\text{Col } A$." }
        ]},
        { id: "s2", type: "proof", title: "Proof: Closure under Scalar Mult.", content: "**Claim:** If $\\mathbf{u}$ is in $\\text{Col } A$, then $c\\mathbf{u}$ is in $\\text{Col } A$.", interactiveSteps: [
           { stepText: "Let $\\mathbf{u} = A\\mathbf{x}$." },
           { prompt: "Calculate $c\\mathbf{u}$.", options: [{id:"A", text:"$c(A\\mathbf{x}) = A(c\\mathbf{x})$", isCorrect:true, explanation:"This shows $c\\mathbf{u}$ is A times the vector $c\\mathbf{x}$."}, {id:"B", text:"$A(\\mathbf{u} + c)$", isCorrect:false, explanation:""}], stepText: "$c\\mathbf{u} = A(c\\mathbf{x})$." },
           { stepText: "Since $c\\mathbf{u}$ can be written as $A$ times a vector, it belongs to $\\text{Col } A$." }
        ]}
      ]
    }
  ]
};
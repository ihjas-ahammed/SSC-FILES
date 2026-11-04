import { Unit } from '../types';

export const UNIT_2_2_11: Unit = {
  id: "unit-2-2-11",
  title: "Linear Transformations & Dimension",
  description: "Exercises 31-32: Rank-Nullity intuition.",
  color: "duo-blue",
  lessons: [
    {
      id: "les-2-2-11-ex31", title: "Exercise 31: Image of Subspace", description: "Dim T(H)", icon: "Share2",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 31", content: "**Problem:** Let $H$ be a nonzero subspace of $V$, and let $T: V \\to W$ be a linear transformation. Show that $\\dim T(H) \\le \\dim H$." },
        { id: "s1", type: "proof", title: "Interactive Proof", content: "**Goal: Map a basis.**", interactiveSteps: [
           { stepText: "Let $\\{\\mathbf{u}_1, \\dots, \\mathbf{u}_p\\}$ be a basis for $H$. So $\\dim H = p$." },
           { stepText: "The set $\\{T(\\mathbf{u}_1), \\dots, T(\\mathbf{u}_p)\\}$ spans $T(H)$." },
           { prompt: "Is a spanning set always a basis?", options: [{id:"A", text:"Yes", isCorrect:false, explanation:""}, {id:"B", text:"No", isCorrect:true, explanation:"It might be dependent."}], stepText: "If it is dependent, we remove vectors to get a basis." },
           { stepText: "The basis for $T(H)$ will have size $\\le p$. Thus $\\dim T(H) \\le \\dim H$." }
        ]}
      ]
    },
    {
      id: "les-2-2-11-ex32", title: "Exercise 32: Isomorphism", description: "Preserving dimension", icon: "Maximize",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 32", content: "**Problem:** Let $T: V \\to W$ be a one-to-one linear transformation. Show that $\\dim T(H) = \\dim H$." },
        { id: "s1", type: "proof", title: "Interactive Proof", content: "**Goal: Show independence is preserved.**", interactiveSteps: [
           { stepText: "Let $\\{\\mathbf{u}_1, \\dots, \\mathbf{u}_p\\}$ be a basis for $H$." },
           { prompt: "Since T is one-to-one, is $\\{T(\\mathbf{u}_1), \\dots, T(\\mathbf{u}_p)\\}$ independent?", options: [{id:"A", text:"Yes", isCorrect:true, explanation:"One-to-one maps preserve independence (Ex 32 in Sec 4.4)."}, {id:"B", text:"No", isCorrect:false, explanation:""}], stepText: "The image set is independent and spans $T(H)$." },
           { stepText: "Thus it is a basis of size $p$. So $\\dim T(H) = p = \\dim H$." }
        ]}
      ]
    }
  ]
};
import { Unit } from '../types';

export const UNIT_1_3_SUMMARY: Unit = {
  id: "unit-1-3-summary",
  title: "Section 3 Summary",
  description: "Recap of Linearly Independent Sets and Bases.",
  color: "duo-green",
  lessons: [
    {
      id: "les-1-3-sum-1", title: "Linear Independence", description: "Summary", icon: "GitCommit",
      slides: [
        { id: "s0", type: "theory", title: "Linear Independence", content: "A set of vectors $\\{\\mathbf{v}_1, \\dots, \\mathbf{v}_p\\}$ is **linearly independent** if the vector equation $c_1\\mathbf{v}_1 + \\dots + c_p\\mathbf{v}_p = \\mathbf{0}$ has *only* the trivial solution $c_1 = \\dots = c_p = 0$.\n\n**Theorem 4:** An indexed set is linearly dependent if and only if some vector is a linear combination of the preceding vectors." }
      ]
    },
    {
      id: "les-1-3-sum-2", title: "Bases & Spanning Set Theorem", description: "Summary", icon: "Flag",
      slides: [
        { id: "s0", type: "theory", title: "Basis", content: "A **basis** for a subspace $H$ is a linearly independent set that spans $H$.\n\n- It is the *largest* possible independent set in $H$.\n- It is the *smallest* possible spanning set for $H$." },
        { id: "s1", type: "theory", title: "The Spanning Set Theorem", content: "If a set spans $H$, we can remove any vector that is a linear combination of the others, and the remaining set will still span $H$. Continuing this process yields a basis." }
      ]
    },
    {
      id: "les-1-3-sum-3", title: "Bases for Nul A and Col A", description: "Summary", icon: "Columns",
      slides: [
        { id: "s0", type: "theory", title: "Finding the Bases", content: "**Nul A:** Row reduce $[A \\ \\mathbf{0}]$ to RREF. Write the solution in parametric vector form. The vectors attached to the free variables form a basis for Nul A.\n\n**Col A:** Row reduce $A$ to identify the pivot columns. The **original** columns of $A$ that correspond to the pivot columns form a basis for Col A." },
        { id: "s1", type: "quiz", title: "Final Check", content: "Can we use the columns of the reduced echelon form $B$ to form the basis for $\\text{Col } A$?", options: [{id:"A", text:"Yes", isCorrect:false, explanation:"Row operations change the column space."}, {id:"B", text:"No", isCorrect:true, explanation:"We must use the columns of the original matrix $A$."}] }
      ]
    },
    {
      id: "les-1-3-sum-4", title: "Conceptual Review", description: "Summary", icon: "CheckCircle",
      slides: [
        { id: "s0", type: "theory", title: "Key Properties", content: "1. A basis must contain vectors that actually belong to the subspace.\n2. The standard basis for $\\mathbb{R}^n$ consists of the columns of the $n \\times n$ identity matrix.\n3. The columns of an invertible $n \\times n$ matrix always form a basis for $\\mathbb{R}^n$." }
      ]
    }
  ]
};
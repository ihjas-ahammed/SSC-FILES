import { Unit } from '../types';

export const UNIT_1_3_4: Unit = {
  id: "unit-1-3-4",
  title: "Two Views of a Basis",
  description: "Example 10: Maximally Independent vs. Minimally Spanning.",
  color: "duo-blue",
  lessons: [
    {
      id: "les-1-3-4-ex10", title: "Example 10: Two Views", description: "Spanning Sets vs Independence", icon: "Eye",
      slides: [
        { id: "s0", type: "theory", title: "Two Views of a Basis", content: "A basis can be viewed in two ways:\n1. A basis is a **linearly independent set** that is as large as possible.\n2. A basis is a **spanning set** that is as small as possible." },
        { id: "s1", type: "example_q", title: "Example 10", content: "Consider the following sets in $\\mathbb{R}^3$:\n\n1. $\\{\\mathbf{v}_1, \\mathbf{v}_2\\}$ (Linearly Independent)\n2. $\\{\\mathbf{v}_1, \\mathbf{v}_2, \\mathbf{v}_3\\}$ (Basis)\n3. $\\{\\mathbf{v}_1, \\mathbf{v}_2, \\mathbf{v}_3, \\mathbf{v}_4\\}$ (Spans $\\mathbb{R}^3$)\n\nExplain how these relate to the definition of a basis." },
        { id: "s2", type: "solution", title: "View 1: Expanding Independent Sets", content: "Start with the independent set $\\{\\mathbf{v}_1, \\mathbf{v}_2\\}$ (a plane). If you add $\\mathbf{v}_3$ not in that plane, the set remains independent. If you try to add *another* vector $\\mathbf{v}_4$, it must be in the span of the first three (since $\\mathbb{R}^3$ is 3D). Thus, the Basis $\\{\\mathbf{v}_1, \\mathbf{v}_2, \\mathbf{v}_3\\}$ is the **largest possible independent set**." },
        { id: "s3", type: "solution", title: "View 2: Shrinking Spanning Sets", content: "Start with the spanning set $\\{\\mathbf{v}_1, \\mathbf{v}_2, \\mathbf{v}_3, \\mathbf{v}_4\\}$. $\\mathbf{v}_4$ is redundant. Removing it leaves $\\{\\mathbf{v}_1, \\mathbf{v}_2, \\mathbf{v}_3\\}$, which still spans $\\mathbb{R}^3$. Removing any more would break the span. Thus, the Basis is the **smallest possible spanning set**." },
        { id: "s4", type: "quiz", title: "Check", content: "If a set spans $V$ but is linearly dependent, is it a basis?", options: [{id:"A", text:"Yes", isCorrect:false, explanation:"A basis must be independent."}, {id:"B", text:"No, it contains 'extra' vectors.", isCorrect:true, explanation:"You can remove some vectors without shrinking the span."}] }
      ]
    }
  ]
};
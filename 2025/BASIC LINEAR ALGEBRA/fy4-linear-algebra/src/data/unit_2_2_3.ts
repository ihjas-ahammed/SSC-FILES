import { Unit } from '../types';

export const UNIT_2_2_3: Unit = {
  id: "unit-2-2-3",
  title: "Dimensions of Nul A and Col A",
  description: "Calculating dimensions from pivot columns.",
  color: "duo-blue",
  lessons: [
    {
      id: "les-2-2-3-dims", title: "Dimension Formulas", description: "Pivots vs Free Variables", icon: "Columns",
      slides: [
        { id: "s0", type: "theory", title: "Dimension of Nul A", content: "Recall that $\\text{Nul } A$ basis vectors correspond to free variables in $A\\mathbf{x}=\\mathbf{0}$.\n\nThus, $\\dim \\text{Nul } A$ = the number of **free variables** in the equation $A\\mathbf{x}=\\mathbf{0}$." },
        { id: "s1", type: "theory", title: "Dimension of Col A", content: "Recall that $\\text{Col } A$ basis vectors correspond to pivot columns.\n\nThus, $\\dim \\text{Col } A$ = the number of **pivot columns** in $A$." },
        { id: "s2", type: "interactive_canvas", title: "Visualizing", content: "Pivots determine the column space dimension. Non-pivots (free vars) determine the null space dimension.", interactiveCanvasId: "null-space-mapping-interactive" }
      ]
    },
    {
      id: "les-2-2-3-ex5", title: "Example 5", description: "Calculating Dimensions", icon: "Calculator",
      slides: [
        { id: "s0", type: "example_q", title: "Example 5", content: "**Problem:** Find the dimensions of the null space and column space of:\n$$ A = \\begin{bmatrix} -3 & 6 & -1 & 1 & -7 \\\\ 1 & -2 & 2 & 3 & -1 \\\\ 2 & -4 & 5 & 8 & -4 \\end{bmatrix} $$" },
        { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Row reduce to finding pivots.**", interactiveSteps: [
           { stepText: "Row reduce $A$." },
           { stepText: "RREF: $\\begin{bmatrix} 1 & -2 & 2 & 3 & -1 \\\\ 0 & 0 & 5 & 10 & -10 \\\\ 0 & 0 & 0 & 0 & 0 \\end{bmatrix}$ (intermediate step)." },
           { prompt: "Identify pivot columns.", options: [{id:"A", text:"Columns 1 and 2", isCorrect:false, explanation:"Col 2 has no pivot."}, {id:"B", text:"Columns 1 and 3", isCorrect:true, explanation:"Leading entries."}], stepText: "Pivots are in columns 1 and 3. There are 2 pivot columns." },
           { stepText: "Therefore, $\\dim \\text{Col } A = 2$." },
           { prompt: "Identify free variables. How many columns have NO pivots?", options: [{id:"A", text:"2", isCorrect:false, explanation:""}, {id:"B", text:"3", isCorrect:true, explanation:"Cols 2, 4, 5 are free."}], stepText: "There are 3 free variables ($x_2, x_4, x_5$)." },
           { stepText: "Therefore, $\\dim \\text{Nul } A = 3$." }
        ]},
        { id: "s2", type: "numerical", title: "Rank check", content: "Sum of dim Col A and dim Nul A is 5. How many columns did A have?", numericAnswer: 5, numericTolerance: 0 }
      ]
    }
  ]
};
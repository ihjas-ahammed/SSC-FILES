import { Section } from '../types';

export const SECTION_4_7: Section = {
  id: "section-4-7",
  title: "Section 4.7: Maxwell's Loop Current Method",
  description: "Simplifying network analysis using continuous mesh currents instead of branch currents.",
  color: "duo-orange",
  units:[
    {
      id: "unit-471-mesh-analysis",
      title: "Maxwell's Loop Current Method",
      description: "Mesh currents and forming equations.",
      color: "duo-orange",
      lessons:[
        {
          id: "les-471-1",
          title: "Introduction to Mesh Analysis",
          description: "Branch currents vs Mesh currents.",
          icon: "RotateCw",
          slides:[
             { id: "s0", type: "quiz", title: "Conceptual Objective", content: "In a network with many intersecting branches, applying Kirchhoff's laws directly results in many equations. What method reduces the number of equations by automatically satisfying KCL?", options:[{id:"A", text:"Maxwell's Loop Current Method", isCorrect:true, explanation:"Also known as mesh analysis."}, {id:"B", text:"Ohm's Law alone", isCorrect:false, explanation:""}] },
             { id: "s1", type: "quiz", title: "Conceptual Objective", content: "A 'mesh current' is assumed to flow:", options:[{id:"A", text:"Continuously around a closed loop without splitting at junctions.", isCorrect:true, explanation:"It is a fictitious continuous current."}, {id:"B", text:"From one node to another and stopping.", isCorrect:false, explanation:""}] },
             { id: "s2", type: "theory", title: "Maxwell's Loop Current Method", content: "This method employs a system of **loop** or **mesh currents** instead of branch currents. \n\nHere, the currents in different meshes are assigned continuous paths so that they do not split at a junction. The actual physical current flowing in any shared branch is the **algebraic sum** of the cyclic currents flowing in the meshes which the branch separates." },
             { id: "s3", type: "interactive_canvas", title: "Mesh Currents", content: "Observe the circular mesh currents. In shared branches, the actual current is the difference between adjacent mesh currents.", interactiveCanvasId: "mesh-analysis-interactive" },
             { id: "s4", type: "proof", title: "Why it works", content: "**Result: Automatic KCL satisfaction.**\n\n1. Standard Kirchhoff's analysis requires both KCL (node) and KVL (loop) equations.\n2. By assigning a continuous loop current, whatever current enters a node inherently leaves it.\n3. Therefore, Kirchhoff's First Law (KCL) is automatically satisfied at every junction!\n4. We only need to write Kirchhoff's Second Law (KVL) equations for each mesh, significantly reducing the total number of simultaneous equations." },
             { id: "s5", type: "quiz", title: "Equation Count", content: "If a circuit has 3 meshes, how many simultaneous equations do you need to solve using Maxwell's method?", options:[{id:"A", text:"3", isCorrect:true, explanation:"One KVL equation per mesh."}, {id:"B", text:"6", isCorrect:false, explanation:""}] },
             { id: "s6", type: "fill_in_blank", title: "Fill in the blank", content: "In Maxwell's method, the actual current in a shared branch is the algebraic ___ of the mesh currents.", blankAnswer: "sum" }
          ]
        },
        {
          id: "les-471-2",
          title: "Formulating Mesh Equations",
          description: "Applying KVL to meshes.",
          icon: "Activity",
          slides:[
             { id: "s0", type: "quiz", title: "Conceptual Objective", content: "When writing the KVL equation for Mesh 1, a resistor $R$ shared with Mesh 2 will have a voltage drop of:", options:[{id:"A", text:"$R(I_1 - I_2)$", isCorrect:true, explanation:"Assuming both loop currents are defined in the same clockwise direction."}, {id:"B", text:"$R(I_1 + I_2)$", isCorrect:false, explanation:""}] },
             { id: "s1", type: "theory", title: "Writing Equations", content: "To apply this method:\n1. Assign a cyclic current ($I_1, I_2, \\dots$) to each mesh, all in the same direction (usually clockwise).\n2. Write a KVL equation for each mesh.\n3. For a resistor $R$ entirely within mesh 1, the voltage drop is $I_1 R$.\n4. For a resistor $R$ shared between mesh 1 and mesh 2, the current through it (from the perspective of mesh 1) is $(I_1 - I_2)$, so the drop is $(I_1 - I_2)R$.\n5. Solve the resulting system of linear equations." },
             { id: "s2", type: "fill_in_blank", title: "Fill in the blank", content: "For consistency, mesh currents are usually all assigned in the ___ direction.", blankAnswer: "clockwise" }
          ]
        },
        {
          id: "les-471-3",
          title: "Example Calculation",
          description: "Solving a 3-mesh circuit.",
          icon: "Target",
          slides:[
             { id: "s0", type: "example_q", title: "Example Problem", content: "**Problem:** A 3-mesh circuit has a 50V source in Mesh 1. Mesh 1 has a $6\\Omega$ top resistor and shares a $5\\Omega$ resistor with Mesh 2. Mesh 2 has an $18\\Omega$ top resistor and shares a $4\\Omega$ resistor with Mesh 3. Mesh 3 has a $4\\Omega$ right resistor and shares the $4\\Omega$ resistor with Mesh 2. Find the mesh currents." },
             { id: "s1", type: "solution", title: "Step 1: Mesh Equations", content: "**Goal: Write KVL for each mesh.**\n\n**Mesh 1:** $50 - 6 I_1 - 5(I_1 - I_2) = 0 \\implies 11 I_1 - 5 I_2 = 50$\n**Mesh 2:** $-5(I_2 - I_1) - 18 I_2 - 4(I_2 - I_3) = 0 \\implies -5 I_1 + 27 I_2 - 4 I_3 = 0$\n**Mesh 3:** $-4(I_3 - I_2) - 4 I_3 = 0 \\implies -4 I_2 + 8 I_3 = 0$" },
             { id: "s2", type: "solution", title: "Step 2: Solving", content: "**Goal: Solve the linear system.**\n\nFrom Mesh 3: $8 I_3 = 4 I_2 \\implies I_3 = 0.5 I_2$.\nSubstitute into Mesh 2: $-5 I_1 + 27 I_2 - 4(0.5 I_2) = 0 \\implies -5 I_1 + 25 I_2 = 0 \\implies I_1 = 5 I_2$.\nSubstitute into Mesh 1: $11(5 I_2) - 5 I_2 = 50 \\implies 50 I_2 = 50 \\implies I_2 = 1$ A.\n\nThen: $I_1 = 5(1) = 5$ A, and $I_3 = 0.5(1) = 0.5$ A. Goal reached!" },
             { id: "s3", type: "numerical", title: "Branch Current", content: "What is the actual physical current flowing downwards through the $5\\Omega$ resistor shared between Mesh 1 and Mesh 2?", numericAnswer: 4, numericTolerance: 0.1, notes: "I1 - I2 = 5 - 1 = 4A" },
             { id: "s4", type: "quiz", title: "Matrix Method", content: "These equations are often solved using determinants or matrix inversion. What is the standard algebraic rule used for this?", options:[{id:"A", text:"Cramer's Rule", isCorrect:true, explanation:""}, {id:"B", text:"Lenz's Law", isCorrect:false, explanation:""}] }
          ]
        }
      ]
    },
    {
      id: "unit-472-summary",
      title: "Section Summary",
      description: "Recap of Maxwell's Loop Current Method.",
      color: "duo-orange",
      lessons:[
        {
          id: "les-sum-mesh",
          title: "Mesh Analysis Recap",
          description: "Review of the method.",
          icon: "CheckSquare",
          slides:[
            { id: "s0", type: "quiz", title: "Knowledge Check", content: "Maxwell's Loop Current Method inherently satisfies which of Kirchhoff's Laws by design?", options:[{id:"A", text:"Kirchhoff's Voltage Law (KVL)", isCorrect:false, explanation:"We have to write equations for KVL."}, {id:"B", text:"Kirchhoff's Current Law (KCL)", isCorrect:true, explanation:"Loop currents don't accumulate at nodes."}] },
            { id: "s1", type: "theory", title: "Summary: Mesh Analysis", content: "**Maxwell's Loop Current Method** (Mesh Analysis) replaces individual branch currents with continuous loop currents. This automatically satisfies KCL at all junctions.\n\nBy writing KVL equations for each mesh (where the voltage drop across a shared resistor $R$ is $R(I_a - I_b)$), the number of simultaneous equations required to solve a complex circuit is drastically reduced to exactly the number of meshes." }
          ]
        }
      ]
    }
  ]
};
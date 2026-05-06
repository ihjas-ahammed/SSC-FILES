import { Section } from '../types';

export const SECTION_4_1: Section = {
  id: "section-4-1",
  title: "Section 4.1: Kirchhoff's Laws and Wheatstone's Bridge",
  description: "Network analysis using current and voltage laws, and the principle of the balanced bridge.",
  color: "duo-orange",
  units:[
    {
      id: "unit-411-kirchhoff",
      title: "Kirchhoff's Laws",
      description: "Current and Voltage laws for network analysis.",
      color: "duo-orange",
      lessons:[
        {
          id: "les-411-1",
          title: "Kirchhoff's First Law (KCL)",
          description: "Junction rule and conservation of charge.",
          icon: "Maximize",
          slides:[
             { id: "s0", type: "quiz", title: "Conceptual Objective", content: "If a steady current flows through a junction in an electrical circuit, can charge accumulate at that junction?", options:[{id:"A", text:"Yes, if multiple wires converge.", isCorrect:false, explanation:"Charge would build up infinitely."}, {id:"B", text:"No, it cannot.", isCorrect:true, explanation:"Steady state means no accumulation of charge."}] },
             { id: "s1", type: "quiz", title: "Conceptual Objective", content: "When applying Kirchhoff's First Law, what is the standard sign convention for currents?", options:[{id:"A", text:"Entering is positive, leaving is negative.", isCorrect:true, explanation:"This ensures the sum balances correctly."}, {id:"B", text:"Entering is negative, leaving is negative.", isCorrect:false, explanation:""}] },
             { id: "s2", type: "theory", title: "Kirchhoff's First Law (KCL)", content: "In any network of conductors, the algebraic sum of the currents meeting at any point (or junction) is zero.\n\n$$ \\sum I = 0 $$\n\nBy convention, current flowing **into** a junction is regarded as positive, while current flowing **out** of the junction is regarded as negative." },
             { id: "s3", type: "interactive_canvas", title: "Junction Visualizer", content: "Adjust the currents entering and leaving the node. Notice how the fourth wire automatically balances the sum to zero.", interactiveCanvasId: "kcl-interactive" },
             { id: "s4", type: "proof", title: "Proof: Kirchhoff's First Law", content: "**Result: $\\sum I = 0$**\n\n1. Consider a junction in an electrical circuit where multiple wires meet.\n2. By the fundamental principle of **conservation of charge**, charge cannot be created or destroyed.\n3. For steady currents, charge cannot accumulate at the junction either ($dq/dt = 0$).\n4. Therefore, the total charge entering the junction per unit time must exactly equal the total charge leaving per unit time.\n5. Assigning positive signs to entering currents and negative to leaving currents, the algebraic sum must be zero: $\\sum I = 0$." },
             { id: "s5", type: "numerical", title: "Junction Calculation", content: "At a node, $I_1 = 5$ A enters, $I_2 = 3$ A enters, and $I_3 = 6$ A leaves. What is the value of the fourth current $I_4$ leaving the node?", numericAnswer: 2, numericTolerance: 0 },
             { id: "s6", type: "quiz", title: "Physical Basis", content: "Kirchhoff's First Law is a direct consequence of the conservation of:", options:[{id:"A", text:"Energy", isCorrect:false, explanation:"That is KVL."}, {id:"B", text:"Charge", isCorrect:true, explanation:"Current is the flow of charge."}] },
             { id: "s7", type: "fill_in_blank", title: "Fill in the blank", content: "When steady current flows in an electric circuit, there is no ___ of charge at any junction.", blankAnswer: "accumulation" }
          ]
        },
        {
          id: "les-411-2",
          title: "Kirchhoff's Second Law (KVL)",
          description: "Loop rule and conservation of energy.",
          icon: "RotateCw",
          slides:[
             { id: "s0", type: "quiz", title: "Conceptual Objective", content: "If you walk around a completely closed loop in an electrical circuit and return to your starting point, what is the net change in your electrical potential?", options:[{id:"A", text:"Depends on the batteries.", isCorrect:false, explanation:""}, {id:"B", text:"Exactly zero.", isCorrect:true, explanation:"Potential is a state function."}] },
             { id: "s1", type: "quiz", title: "Conceptual Objective", content: "When traversing a resistor in the same direction as the current, the potential difference is considered:", options:[{id:"A", text:"A voltage rise (Positive)", isCorrect:false, explanation:""}, {id:"B", text:"A voltage drop (Positive conventionally in KVL equations)", isCorrect:true, explanation:"Often written as +IR in the sum of drops."}] },
             { id: "s2", type: "theory", title: "Kirchhoff's Second Law (KVL)", content: "The algebraic sum of the products of the current and resistance in any closed loop of a circuit is equal to the algebraic sum of electromotive forces (EMFs) acting in that loop.\n\n$$ \\sum IR = \\sum E $$\n\nAlternatively written as the sum of all voltage changes is zero: $\\sum \\Delta V = 0$." },
             { id: "s3", type: "interactive_canvas", title: "Loop Visualizer", content: "Observe how the voltage provided by the source is completely consumed by the voltage drops across the resistors.", interactiveCanvasId: "kvl-interactive" },
             { id: "s4", type: "proof", title: "Proof: Kirchhoff's Second Law", content: "**Result: $\\sum \\Delta V = 0$**\n\n1. In a static electrical circuit, the electric field is a conservative field.\n2. For any conservative field, the line integral around any closed path is exactly zero: $\\oint \\mathbf{E} \\cdot d\\mathbf{l} = 0$.\n3. The potential difference (voltage drop or EMF) across any component is defined by the work done per unit charge, $\\Delta V = - \\int \\mathbf{E} \\cdot d\\mathbf{l}$.\n4. Summing these discrete potential differences around the entire closed circuit loop must therefore equal the closed line integral.\n5. Thus, $\\sum \\Delta V = 0$." },
             { id: "s5", type: "numerical", title: "Loop Calculation", content: "A loop has a 12V battery and two resistors, $R_1 = 4\\Omega$ and $R_2 = 2\\Omega$. What is the current $I$ flowing through the loop?", numericAnswer: 2, numericTolerance: 0.1 },
             { id: "s6", type: "quiz", title: "Physical Basis", content: "Kirchhoff's Second Law is a direct consequence of the conservation of:", options:[{id:"A", text:"Charge", isCorrect:false, explanation:"That is KCL."}, {id:"B", text:"Energy", isCorrect:true, explanation:"Voltage represents potential energy per unit charge."}] },
             { id: "s7", type: "fill_in_blank", title: "Fill in the blank", content: "A product of current and resistance is taken as positive when we traverse in the ___ of the current.", blankAnswer: "direction" }
          ]
        },
        {
          id: "les-411-3",
          title: "Example 1: Parallel Batteries",
          description: "Solving a two-mesh circuit.",
          icon: "Target",
          slides:[
             { id: "s0", type: "example_q", title: "Example 1", content: "**Problem:** A battery of EMF 6V and internal resistance $5\\Omega$ is joined in parallel with another of EMF 10V and internal resistance $1\\Omega$. The combination sends a current through an external resistance of $12\\Omega$. Calculate the current through each battery." },
             { id: "s1", type: "solution", title: "Solution", content: "**Step 1: Set up loops.** Let $I_1$ flow from 6V battery, $I_2$ from 10V battery.\nExternal current is $(I_1 + I_2)$.\n\n**Step 2: Apply KVL.**\nMesh 1: $5 I_1 + 12 (I_1 + I_2) = 6 \\implies 17 I_1 + 12 I_2 = 6$\nMesh 2: $1 I_2 + 12 (I_1 + I_2) = 10 \\implies 12 I_1 + 13 I_2 = 10$\n\n**Step 3: Solve.**\nMultiply Mesh 1 by 13 and Mesh 2 by 12, then subtract to find $I_1 = -6/11$ A. \nSubstitute back to find $I_2 = 14/11$ A." },
             { id: "s2", type: "quiz", title: "Significance of Negative Sign", content: "What does the negative sign for $I_1$ indicate?", options:[{id:"A", text:"The 6V battery is being charged.", isCorrect:true, explanation:"Current is flowing backwards into its positive terminal."}, {id:"B", text:"The math is wrong.", isCorrect:false, explanation:""}] },
             { id: "s3", type: "quiz", title: "Total Current", content: "What is the total current flowing through the $12\\Omega$ resistor?", options:[{id:"A", text:"8/11 A", isCorrect:true, explanation:"14/11 + (-6/11) = 8/11."}, {id:"B", text:"20/11 A", isCorrect:false, explanation:""}] }
          ]
        },
        {
          id: "les-411-4",
          title: "Example 2: Skeleton Cube",
          description: "Symmetry in complex networks.",
          icon: "Box",
          slides:[
             { id: "s0", type: "example_q", title: "Example 2", content: "**Problem:** Twelve conductors each of resistance $3\\Omega$ are connected to form a skeleton cube. A battery of EMF 6V and internal resistance $0.5\\Omega$ is connected between two diagonally opposite corners of the cube. Find the equivalent resistance of the cube, and the current supplied by the battery." },
             { id: "s1", type: "solution", title: "Solution", content: "**Step 1: Distribute Current.** Let total current be $I$. Due to perfect symmetry, it splits into $I/3$ along the three edges from the start node.\n**Step 2: Next Nodes.** Each $I/3$ splits into two equal parts: $I/6$.\n**Step 3: Apply KVL.** Follow one path from start to end: $\\Delta V = (I/3 \\times 3) + (I/6 \\times 3) + (I/3 \\times 3) = I + 0.5I + I = 2.5I$.\n**Step 4: Equivalent Resistance.** $V = I R_{eq} \\implies R_{eq} = 2.5\\Omega$.\n**Step 5: Total Current.** $I = E / (R_{eq} + r) = 6 / (2.5 + 0.5) = 2$ A." },
             { id: "s2", type: "quiz", title: "Symmetry Usage", content: "Why could we safely assume the current splits exactly into $I/3$?", options:[{id:"A", text:"Because 3 is a prime number.", isCorrect:false, explanation:""}, {id:"B", text:"Because all 3 paths look structurally identical from the diagonally opposite corners.", isCorrect:true, explanation:"Symmetry simplifies the problem immensely."}] },
             { id: "s3", type: "quiz", title: "Current Magnitude", content: "What is the actual current flowing in one of the edges connected directly to the battery?", options:[{id:"A", text:"2/3 A", isCorrect:true, explanation:"Total is 2A, so I/3 = 2/3 A."}, {id:"B", text:"1/6 A", isCorrect:false, explanation:""}] }
          ]
        }
      ]
    },
    {
      id: "unit-412-wheatstone",
      title: "Wheatstone's Bridge",
      description: "Principle, Balance Condition, and Sensitivity.",
      color: "duo-orange",
      lessons:[
        {
          id: "les-412-1",
          title: "Wheatstone's Bridge Principle",
          description: "The balance condition for unknown resistance.",
          icon: "Activity",
          slides:[
             { id: "s0", type: "quiz", title: "Conceptual Objective", content: "What is the primary purpose of a Wheatstone Bridge circuit?", options:[{id:"A", text:"To measure current.", isCorrect:false, explanation:""}, {id:"B", text:"To accurately measure an unknown resistance.", isCorrect:true, explanation:"By comparing it to known resistances."}] },
             { id: "s1", type: "quiz", title: "Conceptual Objective", content: "When a Wheatstone bridge is 'balanced', what is the reading on the galvanometer placed across the middle?", options:[{id:"A", text:"Zero", isCorrect:true, explanation:"No current flows through the middle branch."}, {id:"B", text:"Maximum", isCorrect:false, explanation:""}] },
             { id: "s2", type: "theory", title: "Wheatstone's Bridge", content: "Four resistances $P, Q, S$, and $R$ form a closed network $ABCD$. A cell is connected between $A$ and $C$, and a galvanometer $G$ between $B$ and $D$.\n\nThe bridge is said to be **balanced** when no current flows through the galvanometer ($I_g = 0$). At this point, the potentials at $B$ and $D$ are equal.\n\nThe condition for balance is:\n$$ \\frac{P}{Q} = \\frac{R}{S} $$" },
             { id: "s3", type: "interactive_canvas", title: "Bridge Visualizer", content: "Adjust the resistance $S$ to balance the bridge and achieve zero voltage difference across the galvanometer.", interactiveCanvasId: "wheatstone-interactive" },
             { id: "s4", type: "proof", title: "Proof: Balance Condition", content: "**Result: $P/Q = R/S$**\n\n1. For a balanced bridge, the galvanometer current is zero ($I_g = 0$).\n2. This means the potential at junction B equals the potential at junction D: $V_B = V_D$.\n3. Let $I_1$ flow through branches P and Q, and $I_2$ flow through branches R and S.\n4. The voltage drop across P equals the voltage drop across R: $I_1 P = I_2 R$.\n5. The voltage drop across Q equals the voltage drop across S: $I_1 Q = I_2 S$.\n6. Dividing the first equation by the second gives $\\frac{I_1 P}{I_1 Q} = \\frac{I_2 R}{I_2 S}$, which simplifies to $\\frac{P}{Q} = \\frac{R}{S}$." },
             { id: "s5", type: "numerical", title: "Find Unknown", content: "In a balanced bridge, $P = 10\\Omega$, $Q = 100\\Omega$, and the standard arm $S = 50\\Omega$. What is the unknown resistance $R$?", numericAnswer: 5, numericTolerance: 0.1 },
             { id: "s6", type: "quiz", title: "Null Deflection", content: "The method of using a galvanometer to read exactly zero is called a:", options:[{id:"A", text:"Null deflection method", isCorrect:true, explanation:"Highly accurate because it doesn't depend on the galvanometer's calibration."}, {id:"B", text:"Full scale deflection method", isCorrect:false, explanation:""}] },
             { id: "s7", type: "fill_in_blank", title: "Fill in the blank", content: "The condition for balance is $I_g =$ ___.", blankAnswer: "0" }
          ]
        },
        {
          id: "les-412-2",
          title: "Sensitivity of the Bridge",
          description: "Maximizing the deflection for an unbalanced bridge.",
          icon: "Eye",
          slides:[
             { id: "s0", type: "quiz", title: "Conceptual Objective", content: "A bridge is highly sensitive if:", options:[{id:"A", text:"A small imbalance produces a large galvanometer current.", isCorrect:true, explanation:"Making it easy to detect the imbalance."}, {id:"B", text:"A large imbalance produces no current.", isCorrect:false, explanation:""}] },
             { id: "s1", type: "quiz", title: "Conceptual Objective", content: "Does the arrangement of the battery and galvanometer matter for sensitivity?", options:[{id:"A", text:"Yes", isCorrect:true, explanation:"Maxwell provided a rule for the best arrangement."}, {id:"B", text:"No", isCorrect:false, explanation:""}] },
             { id: "s2", type: "theory", title: "Sensitivity Conditions", content: "Let $R$ and $S$ be equal to $r_1$, and the bridge is perfectly balanced. If $R$ changes to $r$, the difference $(r - r_1)$ is a measure of the *want of balance*.\n\nThe bridge is most sensitive when $I_g$ is large for a given small $(r - r_1)$.\nCalculations show sensitivity is maximized when all four arms are roughly equal.\n\n**Maxwell's Rule:** Out of the battery and the galvanometer, the one having the higher resistance should be connected between the junction of the two highest resistances and the junction of the two lowest resistances." },
             { id: "s3", type: "interactive_canvas", title: "Sensitivity Explorer", content: "Notice how extreme ratios of P/Q make it harder to detect small changes in R.", interactiveCanvasId: "wheatstone-interactive" },
             { id: "s4", type: "proof", title: "Proof: Ideal Sensitivity", content: "**Result: Max sensitivity requires equal arms.**\n\n1. Let $P = n m r_1$, $Q = m r_1$, $S = r_1$.\n2. Deriving the KVL mesh equations yields $I_g \\propto \\frac{r - r_1}{(1+1/n)G + r_1(1+m)}$.\n3. To maximize $I_g$, we need the denominator to be as small as possible.\n4. This requires $n \\to \\infty$ and $m \\to 0$.\n5. However, setting $m=0$ shorts the circuit. In practical constrained scenarios, maximum power transfer and sensitivity occur when all resistances are of the same order of magnitude ($m=n=1$)." },
             { id: "s5", type: "numerical", title: "Callendar Rule", content: "If $P=1000\\Omega$ and $Q=10\\Omega$, which is $n$? ($n = P/Q$)", numericAnswer: 100, numericTolerance: 0 },
             { id: "s6", type: "quiz", title: "Callendar Rule", content: "The sensitivity of the bridge will be higher if the resistance in series with the unknown resistance is:", options:[{id:"A", text:"Greater than the resistance in parallel to it.", isCorrect:true, explanation:"Callendar's rule."}, {id:"B", text:"Less than the resistance in parallel to it.", isCorrect:false, explanation:""}] },
             { id: "s7", type: "fill_in_blank", title: "Fill in the blank", content: "The bridge is most sensitive when the four arm resistances are of the same ___ of magnitude.", blankAnswer: "order" }
          ]
        },
        {
          id: "les-412-3",
          title: "Example 3: Unbalanced Bridge",
          description: "Calculating the galvanometer current.",
          icon: "Target",
          slides:[
             { id: "s0", type: "example_q", title: "Example 3", content: "**Problem:** The resistances of the four arms of a Wheatstone net are 5, 5, 5 and $5.2\\Omega$. The resistance of the galvanometer is $40\\Omega$ and the battery supplies a current of 0.2 Amp. Calculate the current through the galvanometer." },
             { id: "s1", type: "solution", title: "Solution", content: "**Step 1: Assign Currents.** Total current $I = 0.2$ A. Let $I_g$ be galv current. Left branch takes $I_1$ and $(I - I_1)$.\n**Step 2: Apply KVL to mesh ABDA.**\n$5 I_1 + 40 I_g - 5(0.2 - I_1) = 0 \\implies 10 I_1 + 40 I_g = 1$\n**Step 3: Apply KVL to mesh BDCB.**\n$5.2(I_1 - I_g) - 40 I_g - 5(0.2 - I_1 + I_g) = 0$\n$10.2 I_1 - 50.2 I_g = 1.04$\n**Step 4: Solve.** Subtract equations to eliminate $I_1$.\n$I_g = -0.2 / 910 \\approx -0.0002198$ A." },
             { id: "s2", type: "quiz", title: "Sign Meaning", content: "The negative sign of $I_g$ means:", options:[{id:"A", text:"Current flows opposite to the assumed direction.", isCorrect:true, explanation:"Assumed B to D, actually D to B."}, {id:"B", text:"The bridge is balanced.", isCorrect:false, explanation:""}] },
             { id: "s3", type: "quiz", title: "Imbalance", content: "If the 5.2 ohm resistor was 5 ohms, what would $I_g$ be?", options:[{id:"A", text:"0 A", isCorrect:true, explanation:"The bridge would be perfectly balanced."}, {id:"B", text:"0.2 A", isCorrect:false, explanation:""}] }
          ]
        }
      ]
    }
  ]
};
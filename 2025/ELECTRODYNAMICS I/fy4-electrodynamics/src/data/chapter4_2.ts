import { Section } from '../types';

export const SECTION_4_2: Section = {
  id: "section-4-2",
  title: "Section 4.2: Carey Foster's Bridge",
  description: "Advanced bridge techniques for precise resistance measurements.",
  color: "duo-orange",
  units:[
    {
      id: "unit-421-carey-foster",
      title: "Carey Foster's Bridge",
      description: "Measuring small resistance differences.",
      color: "duo-orange",
      lessons:[
        {
          id: "les-421-1",
          title: "Carey Foster's Bridge Principle",
          description: "A modified Wheatstone bridge.",
          icon: "Minus",
          slides:[
             { id: "s0", type: "quiz", title: "Conceptual Objective", content: "Why use a Carey Foster Bridge instead of a standard Meter Bridge?", options:[{id:"A", text:"To measure extremely high resistances.", isCorrect:false, explanation:""}, {id:"B", text:"To accurately compare two nearly equal resistances.", isCorrect:true, explanation:"It eliminates errors from end resistances."}] },
             { id: "s1", type: "quiz", title: "Conceptual Objective", content: "What is physically swapped during the experiment to take a second reading?", options:[{id:"A", text:"The unknown resistance and the standard resistance.", isCorrect:true, explanation:"Swapping R and S."}, {id:"B", text:"The battery and the galvanometer.", isCorrect:false, explanation:""}] },
             { id: "s2", type: "theory", title: "Carey Foster's Bridge Principle", content: "This is a modified Wheatstone bridge with a 1-meter slide wire. P and Q are equal known resistances. $R$ is the unknown, and $S$ is a standard resistance.\n\nFirst balance is found at length $l_1$. Then $R$ and $S$ are swapped, and a new balance $l_2$ is found.\n\nThe difference between the resistances is proportional to the shift in the balance point:\n$$ R - S = \\rho (l_2 - l_1) $$\nWhere $\\rho$ is the resistance per unit length of the slide wire." },
             { id: "s3", type: "interactive_canvas", title: "Bridge Visualizer", content: "The Carey Foster bridge operates exactly on the Wheatstone principle.", interactiveCanvasId: "carey-foster-interactive" },
             { id: "s4", type: "proof", title: "Proof: Carey Foster Equation", content: "**Result: $R - S = \\rho(l_2 - l_1)$**\n\n1. Initial balance: $\\frac{P}{Q} = \\frac{R + \\alpha + l_1\\rho}{S + \\beta + (100-l_1)\\rho}$.\n2. Add 1 to both sides: $\\frac{P+Q}{Q} = \\frac{R + S + \\alpha + \\beta + 100\\rho}{\\text{Total Resistance}}$.\n3. Swap R and S. New balance length $l_2$: $\\frac{P}{Q} = \\frac{S + \\alpha + l_2\\rho}{R + \\beta + (100-l_2)\\rho}$.\n4. Add 1 to both sides again. The LHS $\\frac{P+Q}{Q}$ is identical in both cases.\n5. Since numerators are equal (total resistance of the wire + R + S), denominators must be equal: $S + \\beta + (100-l_1)\\rho = R + \\beta + (100-l_2)\\rho$.\n6. Simplifying yields: $R - S = \\rho(l_2 - l_1)$." },
             { id: "s5", type: "numerical", title: "Find Difference", content: "If $\\rho = 0.1 \\Omega/cm$, $l_1 = 40$ cm, and $l_2 = 60$ cm, what is the value of $R - S$ in Ohms?", numericAnswer: 2, numericTolerance: 0.1 },
             { id: "s6", type: "quiz", title: "End Resistances", content: "Why are the end resistances ($\\alpha$ and $\\beta$) not present in the final formula?", options:[{id:"A", text:"They perfectly cancel out algebraically during the swap.", isCorrect:true, explanation:"This is the genius of the Carey Foster method."}, {id:"B", text:"They are exactly zero.", isCorrect:false, explanation:""}] },
             { id: "s7", type: "fill_in_blank", title: "Fill in the blank", content: "The Carey Foster bridge evaluates the difference between R and S by measuring the shift in the ___ point.", blankAnswer: "balance" }
          ]
        },
        {
          id: "les-421-2",
          title: "Determination of Resistivity",
          description: "Finding rho and unknown R.",
          icon: "Activity",
          slides:[
             { id: "s0", type: "quiz", title: "Conceptual Objective", content: "To find the resistance per unit length ($\\rho$) of the slide wire, what is typically used for the standard resistance $S$?", options:[{id:"A", text:"A very high resistance.", isCorrect:false, explanation:""}, {id:"B", text:"A thick copper strip (essentially $0\\Omega$).", isCorrect:true, explanation:"This maximizes the shift and provides a known zero."}] },
             { id: "s2", type: "theory", title: "Finding $\\rho$", content: "To find the resistance per unit length $\\rho$, a standard resistance of $0.1\\Omega$ is connected in gap 1 ($R = 0.1\\Omega$). A thick copper strip is connected in gap 4 ($S = 0$).\n\nThe balancing length $l_1'$ is determined. Then they are swapped and $l_2'$ is determined.\nFrom $R - S = \\rho(l_2' - l_1')$, we get:\n$0.1 - 0 = \\rho(l_2' - l_1') \\implies \\rho = \\frac{0.1}{l_2' - l_1'}$" },
             { id: "s4", type: "proof", title: "Finding Specific Resistance", content: "**Result: $\\sigma = \\frac{\\pi r^2 R}{L}$**\n\n1. Once $\\rho$ is known, the unknown resistance $R$ of any given wire can be accurately found.\n2. Measure the length $L$ of this specific wire.\n3. Measure its mean radius $r$ using a screw gauge.\n4. The resistivity (specific resistance) is $\\sigma = \\frac{R \\cdot A}{L} = \\frac{R \\cdot \\pi r^2}{L}$." },
             { id: "s5", type: "numerical", title: "Example Calculation", content: "In a Carey Foster bridge, swapping a thick copper strip ($S=0$) and a $R=1\\Omega$ resistance gives a shift of $5.4$ cm. What is $\\rho$ in $\\Omega/cm$? (Round to 3 decimals)", numericAnswer: 0.185, numericTolerance: 0.005 },
             { id: "s7", type: "fill_in_blank", title: "Fill in the blank", content: "The fractional change in resistance per degree rise in temperature is called the temperature ___ of resistance.", blankAnswer: "coefficient" }
          ]
        }
      ]
    },
    {
      id: "unit-42-summary",
      title: "Section Summary",
      description: "Recap of Carey Foster's Bridge.",
      color: "duo-orange",
      lessons:[
        {
          id: "les-sum-carey",
          title: "Carey Foster Recap",
          description: "Review of the bridge.",
          icon: "CheckSquare",
          slides:[
            { id: "s0", type: "quiz", title: "Knowledge Check 1", content: "The Carey Foster bridge is specially designed to eliminate errors from:", options:[{id:"A", text:"End resistances", isCorrect:true, explanation:"By swapping the resistors, the alpha and beta terms cancel."}, {id:"B", text:"Battery voltage fluctuations", isCorrect:false, explanation:""}] },
            { id: "s1", type: "theory", title: "Summary", content: "**Carey Foster Bridge:** Swaps standard and unknown resistances to find tiny differences with high accuracy: $R - S = \\rho(l_2 - l_1)$. \n\nIt is specifically employed to find the resistance per unit length of a wire ($\\rho$) and to subsequently calculate the specific resistance (resistivity) of material samples." }
          ]
        }
      ]
    }
  ]
};
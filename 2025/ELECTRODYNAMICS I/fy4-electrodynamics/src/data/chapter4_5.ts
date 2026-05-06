import { Section } from '../types';

export const SECTION_4_5: Section = {
  id: "section-4-5",
  title: "Section 4.5: Thevenin's & Norton's Theorems",
  description: "Simplifying complex networks to equivalent voltage or current sources.",
  color: "duo-orange",
  units:[
    {
      id: "unit-451-thevenin",
      title: "Thevenin's Theorem",
      description: "Reducing a network to a single voltage source and series impedance.",
      color: "duo-orange",
      lessons:[
        {
          id: "les-451-1",
          title: "Introduction to Thevenin's Theorem",
          description: "Statement of the theorem.",
          icon: "Minimize",
          slides:[
             { id: "s0", type: "quiz", title: "Conceptual Objective", content: "If you have a highly complex circuit with 50 batteries and 100 resistors, how does it behave from the perspective of a single output resistor?", options:[{id:"A", text:"Like a highly complex system with non-linear outputs.", isCorrect:false, explanation:""}, {id:"B", text:"Like a single battery and a single resistor in series.", isCorrect:true, explanation:"This remarkable fact is the core of Thevenin's theorem."}] },
             { id: "s1", type: "quiz", title: "Conceptual Objective", content: "When calculating the equivalent resistance of a network, what do we do with ideal voltage sources?", options:[{id:"A", text:"Replace them with open circuits.", isCorrect:false, explanation:""}, {id:"B", text:"Replace them with their internal impedances (short circuits for ideal sources).", isCorrect:true, explanation:"We turn the 'active' generation off."}] },
             { id: "s2", type: "theory", title: "Statement of Thevenin's Theorem", content: "The current in a load impedance connected between two terminals of a network of generators and linear impedances is exactly the same as if it were connected to a **single voltage generator**.\n\n- The EMF of this generator ($E_{th}$) is equal to the **open-circuit voltage** between the two terminals.\n- The internal impedance of this generator ($Z_{th}$) is the impedance of the network looking back into the terminals, with all independent generators replaced by their **internal impedances**." },
             { id: "s3", type: "interactive_canvas", title: "Circuit Simplification", content: "Observe how a complex T-network can be simplified into a single Thevenin equivalent without changing the load current.", interactiveCanvasId: "thevenin-interactive" },
             { id: "s4", type: "proof", title: "Proof: Thevenin's Theorem", content: "**Result: $I_L = \\frac{E_{th}}{Z_{th} + Z_L}$**\n\n1. Consider a T-network with a source $E$, resistors $Z_1, Z_2, Z_3$, and load $Z_L$.\n2. Applying KVL mesh analysis yields the load current: $I_L = \\frac{E Z_3}{(Z_1 Z_2 + Z_2 Z_3 + Z_3 Z_1) + Z_L(Z_1+Z_3)}$.\n3. Now find the open-circuit voltage (remove $Z_L$): $E_{th} = E \\frac{Z_3}{Z_1 + Z_3}$.\n4. Find the equivalent impedance (short $E$): $Z_{th} = Z_2 + \\frac{Z_1 Z_3}{Z_1 + Z_3}$.\n5. Substitute $E_{th}$ and $Z_{th}$ into $\\frac{E_{th}}{Z_{th} + Z_L}$. Algebraic simplification proves it identically matches the complex $I_L$ formula from step 2." },
             { id: "s5", type: "numerical", title: "Thevenin Voltage", content: "A 12V battery is in series with $R_1 = 6\\Omega$. A resistor $R_2 = 6\\Omega$ is in parallel. What is the open-circuit Thevenin voltage $E_{th}$ across $R_2$?", numericAnswer: 6, numericTolerance: 0.1 },
             { id: "s6", type: "quiz", title: "Network Condition", content: "Thevenin's theorem only applies if the network consists of:", options:[{id:"A", text:"Linear impedances", isCorrect:true, explanation:"It relies on superposition and linearity."}, {id:"B", text:"Non-linear components", isCorrect:false, explanation:""}] },
             { id: "s7", type: "fill_in_blank", title: "Fill in the blank", content: "The equivalent voltage $E_{th}$ is calculated under ___-circuit conditions.", blankAnswer: "open" }
          ]
        },
        {
          id: "les-451-2",
          title: "Example: Finding Thevenin Equivalent",
          description: "Step-by-step calculation.",
          icon: "Target",
          slides:[
             { id: "s0", type: "example_q", title: "Example Calculation", content: "**Problem:** A circuit has a 10V battery. In series with the battery is a $10\\Omega$ resistor. In parallel with that combination is a $5\\Omega$ resistor. Finally, another $10\\Omega$ resistor connects to output terminal A. Terminal B connects to the negative side. Find $E_{th}$ and $R_{th}$." },
             { id: "s1", type: "solution", title: "Step 1: Find Eth", content: "**Goal: Calculate Open-Circuit Voltage.**\n\n1. With the load removed, no current flows through the final $10\\Omega$ series resistor. Thus, there is no voltage drop across it.\n2. The voltage at terminals A-B is simply the voltage across the $5\\Omega$ resistor.\n3. The 10V battery drives current through the $10\\Omega$ and $5\\Omega$ resistors in series. Current $I = 10V / (10 + 5)\\Omega = 10/15$ A.\n4. Voltage across $5\\Omega$ is $V = I \\times 5 = (10/15) \\times 5 = 10/3$ Volts.\n5. Therefore, $E_{th} = 3.33$ V." },
             { id: "s2", type: "solution", title: "Step 2: Find Rth", content: "**Goal: Calculate Equivalent Resistance.**\n\n1. Replace the 10V battery with a short circuit.\n2. Looking back from A-B, the $10\\Omega$ and $5\\Omega$ resistors are in parallel. $R_p = (10 \\times 5) / (10 + 5) = 50/15 = 10/3 \\Omega$.\n3. The final $10\\Omega$ resistor is in series with this parallel combination.\n4. $R_{th} = 10/3 + 10 = 40/3 \\Omega \\approx 13.33 \\Omega$.\n5. The circuit is now simplified!" },
             { id: "s3", type: "quiz", title: "Load Calculation", content: "If you now connect a $100\\Omega$ load to this Thevenin circuit, how do you find the current?", options:[{id:"A", text:"I = E_th / (R_th + 100)", isCorrect:true, explanation:"Simple series circuit calculation."}, {id:"B", text:"I = E_th / 100", isCorrect:false, explanation:""}] }
          ]
        }
      ]
    },
    {
      id: "unit-452-norton",
      title: "Norton's Theorem",
      description: "Reducing a network to a single current source and parallel impedance.",
      color: "duo-orange",
      lessons:[
        {
          id: "les-452-1",
          title: "Introduction to Norton's Theorem",
          description: "Statement and equivalence.",
          icon: "ArrowRight",
          slides:[
             { id: "s0", type: "quiz", title: "Conceptual Objective", content: "If Thevenin's theorem models a complex circuit as a voltage source, Norton's theorem models it as a:", options:[{id:"A", text:"Capacitor", isCorrect:false, explanation:""}, {id:"B", text:"Current source", isCorrect:true, explanation:"It uses a constant current generator."}] },
             { id: "s1", type: "quiz", title: "Conceptual Objective", content: "To find the Norton current, what must you do to the output terminals?", options:[{id:"A", text:"Leave them open", isCorrect:false, explanation:""}, {id:"B", text:"Short them together", isCorrect:true, explanation:"It relies on the short-circuit current."}] },
             { id: "s2", type: "theory", title: "Statement of Norton's Theorem", content: "Any two-terminal active network, consisting of linear impedances and generators, may be replaced by a **current generator** in parallel with an impedance.\n\n- The current ($I_N$) is equal to the current obtained through a **short circuit** placed across the two terminals.\n- The impedance ($Z_N$) is that viewed across the two terminals when all generators are replaced by their internal impedances. (Notice that $Z_N = Z_{th}$)." },
             { id: "s3", type: "proof", title: "Proof: Source Transformation", content: "**Result: Norton is exactly equivalent to Thevenin.**\n\n1. In a Thevenin circuit ($E_{th}$ in series with $Z_{th}$), if we short the load terminals, the short-circuit current is $I_{sc} = E_{th} / Z_{th}$.\n2. In a Norton circuit ($I_N$ in parallel with $Z_N$), if we short the load terminals, all current bypasses $Z_N$. Thus $I_{sc} = I_N$.\n3. Therefore, $I_N = E_{th} / Z_{th}$.\n4. For open circuit, Norton voltage is $I_N Z_N$. We know this must equal $E_{th}$. Thus $(E_{th} / Z_{th}) Z_N = E_{th}$, meaning $Z_N = Z_{th}$.\n5. The two theorems are mathematically identical source transformations!" },
             { id: "s4", type: "numerical", title: "Norton Conversion", content: "A Thevenin equivalent circuit has $E_{th} = 12$V and $R_{th} = 4\\Omega$. What is the Norton current $I_N$ in Amperes?", numericAnswer: 3, numericTolerance: 0.1 },
             { id: "s5", type: "quiz", title: "Impedance Location", content: "In Norton's equivalent, where is the impedance placed?", options:[{id:"A", text:"In parallel with the current source", isCorrect:true, explanation:""}, {id:"B", text:"In series with the current source", isCorrect:false, explanation:""}] },
             { id: "s6", type: "fill_in_blank", title: "Fill in the blank", content: "The Norton current is calculated under ___-circuit conditions.", blankAnswer: "short" }
          ]
        }
      ]
    },
    {
      id: "unit-453-summary",
      title: "Section Summary",
      description: "Recap of Network Theorems.",
      color: "duo-orange",
      lessons:[
        {
          id: "les-sum-theorems",
          title: "Theorems Recap",
          description: "Review of Thevenin and Norton.",
          icon: "CheckSquare",
          slides:[
            { id: "s0", type: "quiz", title: "Knowledge Check 1", content: "Thevenin's and Norton's theorems are fundamentally forms of:", options:[{id:"A", text:"Source Transformations", isCorrect:true, explanation:"They transform complex active networks into simple ideal sources with impedance."}, {id:"B", text:"Energy Conservation", isCorrect:false, explanation:""}] },
            { id: "s1", type: "theory", title: "Summary: Theorems", content: "**Thevenin's Theorem:** Any linear active network can be replaced by a single voltage source ($E_{th} = V_{open-circuit}$) in series with an impedance ($Z_{th}$). \n\n**Norton's Theorem:** The same network can be replaced by a current source ($I_N = I_{short-circuit}$) in parallel with the same impedance ($Z_{th}$)." }
          ]
        }
      ]
    }
  ]
};
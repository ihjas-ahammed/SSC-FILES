import { Section } from '../types';

export const SECTION_4_3: Section = {
  id: "section-4-3",
  title: "Section 4.3: The Potentiometer",
  description: "Principle, measurement of EMF, internal resistance, and calibration of instruments.",
  color: "duo-orange",
  units:[
    {
      id: "unit-431-principle",
      title: "Potentiometer Principle",
      description: "Measuring unknown EMF without drawing current.",
      color: "duo-orange",
      lessons:[
        {
          id: "les-431-1",
          title: "Principle of the Potentiometer",
          description: "Measuring EMF accurately.",
          icon: "Sliders",
          slides:[
             { id: "s0", type: "quiz", title: "Conceptual Objective", content: "Why is a potentiometer considered an 'ideal' instrument compared to an ordinary voltmeter for measuring EMF?", options:[{id:"A", text:"It is cheaper.", isCorrect:false, explanation:""}, {id:"B", text:"It draws absolutely zero current from the test cell at the balance point.", isCorrect:true, explanation:"Voltmeters draw a tiny current, which drops the voltage due to internal resistance."}] },
             { id: "s1", type: "quiz", title: "Conceptual Objective", content: "The potential drop across any length of a uniform potentiometer wire is directly proportional to:", options:[{id:"A", text:"The length of that wire segment.", isCorrect:true, explanation:"V = rho L I, where rho and I are constant."}, {id:"B", text:"The temperature of the wire.", isCorrect:false, explanation:""}] },
             { id: "s2", type: "theory", title: "Principle of the Potentiometer", content: "A potentiometer consists of a uniform wire $AB$ of length $L$ (often 10m) carrying a steady current $I$ provided by a driver cell.\n\nThe potential drop across any segment of length $l$ is $V = I \\rho l$, where $\\rho$ is the resistance per unit length. Thus, $V \\propto l$.\n\nTo measure an unknown cell EMF $E$, we connect it such that it opposes the potential of the wire. We find a balance point $l$ where the galvanometer shows no deflection.\nAt this point: $$ E \propto l $$" },
             { id: "s3", type: "interactive_canvas", title: "Potentiometer Visualizer", content: "Adjust the unknown EMF and watch the balance point slide along the wire. Notice how the reading relies strictly on the length ratio.", interactiveCanvasId: "potentiometer-interactive" },
             { id: "s4", type: "proof", title: "Proof: Proportionality", content: "**Result: $\\frac{V_{AC}}{V_{AB}} = \\frac{l}{L}$**\n\n1. Let $L$ be total length $AB$, and $l$ be the balancing length $AC$.\n2. Total potential drop across $AB$ is $V_{AB} = I R_{AB} = I (\\rho L)$.\n3. Potential drop across $AC$ is $V_{AC} = I R_{AC} = I (\\rho l)$.\n4. Taking the ratio: $\\frac{V_{AC}}{V_{AB}} = \\frac{I \\rho l}{I \\rho L} = \\frac{l}{L}$.\n5. Thus, $V_{AC} = V_{AB} \\times \\frac{l}{L}$. The potential drop is strictly proportional to length." },
             { id: "s5", type: "numerical", title: "Length Calculation", content: "A driver cell maintains 5V across a 1000 cm wire. At what length (in cm) will a 1.5V dry cell balance?", numericAnswer: 300, numericTolerance: 0.1 },
             { id: "s6", type: "quiz", title: "Wire Uniformity", content: "What happens if the potentiometer wire is thicker in some places than others?", options:[{id:"A", text:"The principle still holds.", isCorrect:false, explanation:""}, {id:"B", text:"The potential drop is no longer strictly proportional to length.", isCorrect:true, explanation:"Resistance per unit length (rho) would vary."}] },
             { id: "s7", type: "fill_in_blank", title: "Fill in the blank", content: "At the balance point, the potentiometer draws ___ current from the cell being tested.", blankAnswer: "zero" }
          ]
        }
      ]
    },
    {
      id: "unit-432-resistance",
      title: "Resistance Measurements",
      description: "Finding internal resistance and comparing coils.",
      color: "duo-orange",
      lessons:[
        {
          id: "les-432-1",
          title: "Internal Resistance of a Cell",
          description: "Using a shunt resistor.",
          icon: "Target",
          slides:[
             { id: "s0", type: "quiz", title: "Conceptual Objective", content: "When a cell supplies current to an external resistor, its terminal voltage is:", options:[{id:"A", text:"Equal to its EMF", isCorrect:false, explanation:""}, {id:"B", text:"Less than its EMF", isCorrect:true, explanation:"Due to the internal voltage drop Ir."}] },
             { id: "s2", type: "theory", title: "Measuring Internal Resistance", content: "To find the **internal resistance** $r$ of a cell $E$:\n\n1. First, leave the cell open-circuited. Balance its true EMF against the wire: $E \\propto l_1$.\n2. Next, shunt the cell with a known external resistance $R$. The cell now supplies current, and its voltage drops to its terminal voltage $V$.\n3. Balance this new terminal voltage: $V \\propto l_2$.\n\nThe internal resistance is given by:\n$$ r = R \\left( \\frac{l_1 - l_2}{l_2} \\right) $$" },
             { id: "s4", type: "proof", title: "Proof: Internal Resistance Formula", content: "**Result: $r = R \\left(\\frac{l_1 - l_2}{l_2}\\right)$**\n\n1. Balance open-circuit EMF: $E \propto l_1$.\n2. Connect known resistance $R$ across cell. Cell supplies current $I_{cell} = \\frac{E}{R+r}$.\n3. Terminal voltage $V = I_{cell} R = E \\frac{R}{R+r}$.\n4. Balance new terminal voltage: $V \\propto l_2$.\n5. Take ratio: $\\frac{E}{V} = \\frac{l_1}{l_2}$.\n6. Substitute $V$: $\\frac{E}{E \\frac{R}{R+r}} = \\frac{R+r}{R} = 1 + \\frac{r}{R} = \\frac{l_1}{l_2}$.\n7. Solving for $r$ gives $r = R(\\frac{l_1}{l_2} - 1)$." },
             { id: "s5", type: "numerical", title: "Calculate Internal Resistance", content: "A cell balances at $l_1 = 100$ cm. When shunted by $R = 5\\Omega$, it balances at $l_2 = 80$ cm. Find the internal resistance $r$ in Ohms.", numericAnswer: 1.25, numericTolerance: 0.05 },
             { id: "s7", type: "fill_in_blank", title: "Fill in the blank", content: "The voltage across the cell when it is supplying current is called the ___ voltage.", blankAnswer: "terminal" }
          ]
        },
        {
          id: "les-432-2",
          title: "Measurement of Resistance of a Coil",
          description: "Comparing P and Q.",
          icon: "Layers",
          slides:[
             { id: "s0", type: "quiz", title: "Conceptual Objective", content: "If two resistors are connected in series, the potential drop across each is proportional to:", options:[{id:"A", text:"Their resistance", isCorrect:true, explanation:"V = IR. Since I is the same for both in series, V scales with R."}, {id:"B", text:"The inverse of their resistance", isCorrect:false, explanation:""}] },
             { id: "s2", type: "theory", title: "Comparing Resistances", content: "To compare two resistances $P$ and $Q$:\n\n1. Connect them in series with a steady power supply so the exact same current $i$ flows through both.\n2. The potential difference across $P$ is $V_P = iP$. Balance this on the potentiometer to find length $l_1$. Thus, $iP \\propto l_1$.\n3. The potential difference across $Q$ is $V_Q = iQ$. Balance this to find length $l_2$. Thus, $iQ \\propto l_2$.\n\nDividing the two equations gives:\n$$ \\frac{P}{Q} = \\frac{l_1}{l_2} $$" },
             { id: "s5", type: "numerical", title: "Calculate Unknown", content: "The PD across $P$ balances at 40 cm. The PD across $Q$ balances at 60 cm. If $P = 2\\Omega$, what is the value of $Q$ in Ohms?", numericAnswer: 3, numericTolerance: 0.1 },
             { id: "s7", type: "fill_in_blank", title: "Fill in the blank", content: "To ensure the potential drops are directly proportional to the resistance, $P$ and $Q$ must be connected in ___.", blankAnswer: "series" }
          ]
        }
      ]
    },
    {
      id: "unit-433-calibration",
      title: "Calibration of Instruments",
      description: "Ammeters and Voltmeters.",
      color: "duo-orange",
      lessons:[
        {
          id: "les-433-1",
          title: "Calibration of Ammeter",
          description: "Finding the true current.",
          icon: "Activity",
          slides:[
             { id: "s0", type: "quiz", title: "Conceptual Objective", content: "To calibrate an ammeter with a potentiometer, you measure the potential drop across:", options:[{id:"A", text:"A standard known resistance.", isCorrect:true, explanation:"V = IR, so measuring V tells you the exact I."}, {id:"B", text:"The ammeter itself.", isCorrect:false, explanation:""}] },
             { id: "s2", type: "theory", title: "Calibration of Ammeter", content: "The ammeter to be calibrated is placed in series with a standard resistance $R$ and a power source. A current $I$ flows.\n\nThe potential drop across $R$ is $V = IR$. This potential drop is balanced against the potentiometer wire (length $l_1$).\nSince the voltage gradient is known from a standard cell ($k = E/l$), we have $IR = k l_1$.\n\nThe true current is $I = \\frac{E l_1}{l R}$. The ammeter's reading $A_1$ is compared to this true value to find the error/correction: $I_{true} - A_1$." },
             { id: "s4", type: "proof", title: "Proof: True Current Formula", content: "**Result: $I_{true} = \\frac{E l_1}{l R}$**\n\n1. Balance a standard cell $E$ at length $l$. The potential drop per cm is $k = E/l$.\n2. Balance the potential drop $V_R$ across the standard resistor $R$ at length $l_1$.\n3. Therefore, $V_R = k l_1 = \\frac{E l_1}{l}$.\n4. By Ohm's law, the true current flowing is $I_{true} = V_R / R$.\n5. Substituting gives $I_{true} = \\frac{E l_1}{l R}$." },
             { id: "s5", type: "numerical", title: "Calculate True Current", content: "Standard cell $E=1.0$ V balances at $l=100$ cm. Standard resistor $R=1\\Omega$. The PD across $R$ balances at $l_1=50$ cm. What is the true current in Amperes?", numericAnswer: 0.5, numericTolerance: 0.01 },
             { id: "s7", type: "fill_in_blank", title: "Fill in the blank", content: "A graph plotted between the instrument reading and its required correction is called a ___ curve.", blankAnswer: "calibration" }
          ]
        },
        {
          id: "les-433-2",
          title: "Calibration of Voltmeter",
          description: "Low Range vs High Range.",
          icon: "Maximize",
          slides:[
             { id: "s0", type: "quiz", title: "Conceptual Objective", content: "Why can't we directly balance a high-range voltmeter (e.g. measuring 10V) against a standard potentiometer?", options:[{id:"A", text:"The voltage exceeds the maximum potential drop across the potentiometer wire.", isCorrect:true, explanation:"The potentiometer wire usually only spans a few volts."}, {id:"B", text:"Voltmeters don't work with potentiometers.", isCorrect:false, explanation:""}] },
             { id: "s2", type: "theory", title: "Voltmeter Calibration", content: "**Low Range:** The voltmeter is connected in parallel with a standard resistance $R$. The true potential drop is balanced directly on the potentiometer. True $V = \\frac{E l_1}{l}$.\n\n**High Range:** A voltage divider made of two high resistances $P$ and $Q$ is used. The total high voltage is applied across $P+Q$, but the potentiometer only balances the smaller potential across $P$ (length $l_1$).\nTrue Total Voltage = $\\left( \\frac{P+Q}{P} \\right) \\times \\frac{E l_1}{l}$." },
             { id: "s4", type: "proof", title: "Proof: High Range Formula", content: "**Result: $V_{true} = \\left( \\frac{P+Q}{P} \\right) \\frac{E l_1}{l}$**\n\n1. Let total voltage across the divider be $V_{tot}$.\n2. The voltage across resistor $P$ is a fraction of the total: $V_P = V_{tot} \\frac{P}{P+Q}$.\n3. The potentiometer measures $V_P$ directly by balancing it at $l_1$: $V_P = k l_1 = \\frac{E l_1}{l}$.\n4. Equating the two expressions for $V_P$: $V_{tot} \\frac{P}{P+Q} = \\frac{E l_1}{l}$.\n5. Solving for $V_{tot}$ yields the formula." },
             { id: "s5", type: "numerical", title: "High Range Multiplier", content: "If $P=1000\\Omega$ and $Q=9000\\Omega$, what is the multiplier factor $\\frac{P+Q}{P}$ applied to the potentiometer reading?", numericAnswer: 10, numericTolerance: 0.1 },
             { id: "s7", type: "fill_in_blank", title: "Fill in the blank", content: "To calibrate a high-range voltmeter, we step down the voltage using a voltage ___.", blankAnswer: "divider" }
          ]
        }
      ]
    },
    {
      id: "unit-43-summary",
      title: "Section Summary",
      description: "Recap of the Potentiometer.",
      color: "duo-orange",
      lessons:[
        {
          id: "les-sum-potentiometer",
          title: "Potentiometer Recap",
          description: "Review of principles and applications.",
          icon: "CheckSquare",
          slides:[
            { id: "s0", type: "quiz", title: "Knowledge Check", content: "The key advantage of the potentiometer over moving-coil voltmeters is:", options:[{id:"A", text:"It balances at a null point, drawing zero current from the source.", isCorrect:true, explanation:""}, {id:"B", text:"It is much smaller and portable.", isCorrect:false, explanation:""}] },
            { id: "s1", type: "theory", title: "Summary", content: "**The Potentiometer** utilizes a uniform wire where $V \propto l$. By finding a null balance point, it measures true EMF without drawing current ($E \propto l_1$). \n\nIt is highly versatile, used for:\n1. Comparing EMFs ($E_1/E_2 = l_1/l_2$)\n2. Measuring internal resistance ($r = R[l_1/l_2 - 1]$)\n3. Comparing resistances ($P/Q = l_1/l_2$)\n4. Calibrating ammeters and voltmeters against a standard cell." }
          ]
        }
      ]
    }
  ]
};
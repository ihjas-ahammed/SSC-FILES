import { Section } from '../types';

export const SECTION_4_6: Section = {
  id: "section-4-6",
  title: "Section 4.6: Maximum Power Transfer Theorem",
  description: "Optimizing the load for maximum power delivery from a source.",
  color: "duo-orange",
  units:[
    {
      id: "unit-461-max-power",
      title: "Maximum Power Transfer",
      description: "Optimizing the load for power delivery.",
      color: "duo-orange",
      lessons:[
        {
          id: "les-461-1",
          title: "Maximum Power Transfer Theorem",
          description: "Matching impedances.",
          icon: "Zap",
          slides:[
             { id: "s0", type: "quiz", title: "Conceptual Objective", content: "If you connect a $0\\Omega$ load (short circuit) to a battery, how much power is delivered to the load?", options:[{id:"A", text:"Maximum", isCorrect:false, explanation:"Power = I^2 R. If R is 0, Power is 0."}, {id:"B", text:"Zero", isCorrect:true, explanation:"All the power is burned up inside the battery's internal resistance."}] },
             { id: "s1", type: "quiz", title: "Conceptual Objective", content: "If you connect an infinite $\\Omega$ load (open circuit) to a battery, how much power is delivered?", options:[{id:"A", text:"Zero", isCorrect:true, explanation:"No current flows, so Power is zero."}, {id:"B", text:"Maximum", isCorrect:false, explanation:""}] },
             { id: "s2", type: "theory", title: "Statement of the Theorem", content: "The maximum power will be delivered to a load by a generator when:\n1. The resistive components of the impedances of the load and generator are **equal** ($R_L = R_{th}$).\n2. The reactive components are equal in magnitude but **opposite in sign** ($X_L = -X_{th}$).\n\nFor simple DC circuits containing only resistors, this means maximum power transfer occurs exactly when the load resistance matches the Thevenin equivalent resistance of the source: **$R_L = R_{th}$**." },
             { id: "s3", type: "interactive_canvas", title: "Power Curve", content: "Adjust the load resistance. Notice how the power delivered starts at zero, peaks exactly when RL = Rth, and then slowly decays.", interactiveCanvasId: "max-power-interactive" },
             { id: "s4", type: "proof", title: "Proof: Differentiation", content: "**Result: Maximum at $R_L = R_{th}$**\n\n1. Let the Thevenin circuit be $E$ and $R_{th}$. The load is $R_L$.\n2. Current $I = \\frac{E}{R_{th} + R_L}$.\n3. Power to load $P = I^2 R_L = \\frac{E^2 R_L}{(R_{th} + R_L)^2}$.\n4. To find the maximum, take the derivative $dP/dR_L$ and set it to zero.\n5. $\\frac{d}{dR_L} \\left[ E^2 R_L (R_{th} + R_L)^{-2} \\right] = E^2 \\left[ (R_{th}+R_L)^{-2} - 2R_L(R_{th}+R_L)^{-3} \\right] = 0$.\n6. Dividing out terms yields $1 - \\frac{2R_L}{R_{th}+R_L} = 0 \\implies R_{th} + R_L = 2R_L \\implies R_L = R_{th}$." },
             { id: "s5", type: "numerical", title: "Maximum Power", content: "A source has $E_{th} = 10$V and $R_{th} = 5\\Omega$. What is the maximum possible power (in Watts) that can be delivered to a load?", numericAnswer: 5, numericTolerance: 0.1, notes: "P_max = E^2 / (4 * R_th)" },
             { id: "s6", type: "quiz", title: "Efficiency", content: "At maximum power transfer ($R_L = R_{th}$), what is the efficiency of the system (Power to load / Total Power generated)?", options:[{id:"A", text:"100%", isCorrect:false, explanation:""}, {id:"B", text:"50%", isCorrect:true, explanation:"Exactly half the power is lost as heat inside the source's internal resistance."}] },
             { id: "s7", type: "fill_in_blank", title: "Fill in the blank", content: "Maximum power transfer occurs when the load resistance is ___ to the internal resistance of the source.", blankAnswer: "equal" }
          ]
        }
      ]
    },
    {
      id: "unit-462-summary",
      title: "Section Summary",
      description: "Recap of Maximum Power Transfer.",
      color: "duo-orange",
      lessons:[
        {
          id: "les-sum-max-power",
          title: "Max Power Recap",
          description: "Review of optimization.",
          icon: "CheckSquare",
          slides:[
            { id: "s0", type: "quiz", title: "Knowledge Check 1", content: "To deliver maximum power, a DC load must be set to:", options:[{id:"A", text:"Zero ohms", isCorrect:false, explanation:""}, {id:"B", text:"The Thevenin resistance of the source", isCorrect:true, explanation:"Impedance matching."}] },
            { id: "s1", type: "theory", title: "Summary: Max Power", content: "**Max Power Transfer Theorem:** To extract the maximum possible power from any given source, the load resistance must perfectly match the source's internal Thevenin resistance ($R_L = R_{th}$). At this peak power delivery state, the efficiency of the overall system is exactly 50%." }
          ]
        }
      ]
    }
  ]
};
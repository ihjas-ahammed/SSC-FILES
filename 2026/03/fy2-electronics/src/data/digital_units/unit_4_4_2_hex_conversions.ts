import { Unit } from '../../types';

export const UNIT_4_4_2: Unit = {
  id: "unit-4-4-2",
  title: "Hex Conversions",
  description: "Translating to Base 16",
  color: "duo-indigo",
  lessons: [
    {
      id: "les-4-4-2-1",
      title: "Decimal to Hex",
      description: "Division Method",
      icon: "Divide",
      slides: [
        {
          id: "dest",
          type: "theory",
          title: "The Goal",
          content: "Convert Decimal **423** to Hexadecimal. \n\n**Method:** Repeated division by 16."
        },
        {
          id: "proof",
          type: "proof",
          title: "Step-by-Step",
          content: "Divide and keep the remainder.",
          proofSteps: [
            "1. $423 \\div 16 = 26$, Remainder **7** (LSB)",
            "2. $26 \\div 16 = 1$, Remainder **10** (which is **A**)",
            "3. $1 \\div 16 = 0$, Remainder **1** (MSB)",
            "4. Read Up: **1A7**"
          ],
          interactiveSteps: [
            {
              prompt: "What is the remainder of $423 \\div 16$?",
              options: [
                { id: "A", text: "7", isCorrect: true, explanation: "$16 \\times 26 = 416$. $423 - 416 = 7$." },
                { id: "B", text: "15", isCorrect: false, explanation: "Incorrect math." }
              ]
            }
          ]
        },
        {
          id: "verify",
          type: "numerical",
          title: "Verify",
          content: "Calculate $1 \\times 256 + 10 \\times 16 + 7 \\times 1$.",
          numericAnswer: 423,
          numericTolerance: 0
        }
      ]
    },
    {
      id: "les-4-4-2-2",
      title: "Fractional Conversion",
      description: "Example 24.22",
      icon: "Percent",
      slides: [
        {
          id: "dest",
          type: "theory",
          title: "The Goal",
          content: "Convert Decimal **0.75** to Hex.\n\n**Method:** Repeated Multiplication by 16."
        },
        {
          id: "proof",
          type: "proof",
          title: "Calculation",
          content: "Multiply fraction by 16.",
          proofSteps: [
            "1. $0.75 \\times 16 = 12.00$",
            "2. Integer part is **12**.",
            "3. Convert 12 to Hex symbol: **C**.",
            "4. Result: **0.C**"
          ]
        }
      ]
    },
    {
      id: "les-4-4-2-3",
      title: "Binary to Hex",
      description: "The Shortcut",
      icon: "Zap",
      slides: [
        {
          id: "priming",
          type: "theory",
          title: "Why Hex is Popular",
          content: "Hex is a 'shorthand' for Binary. \n\nSince $2^4 = 16$, exactly **4 bits** map to **1 Hex digit**. This makes conversion trivial compared to decimal."
        },
        {
          id: "vis",
          type: "interactive_canvas",
          title: "Grouping Visual",
          content: "Group bits by 4 starting from the LSB.",
          interactiveCanvasId: "hex-grouping-visual"
        },
        {
          id: "quiz",
          type: "quiz",
          title: "Practice",
          content: "Convert binary **1111 0010** to Hex.",
          options: [
            { id: "A", text: "F2", isCorrect: true, explanation: "1111=F, 0010=2." },
            { id: "B", text: "E2", isCorrect: false, explanation: "1110 is E." }
          ]
        }
      ]
    }
  ]
};
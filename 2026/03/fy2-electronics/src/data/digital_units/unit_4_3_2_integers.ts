import { Unit } from '../../types';

export const UNIT_4_3_2: Unit = {
  id: "unit-4-3-2",
  title: "Integer Conversion",
  description: "Practice & Examples",
  color: "duo-indigo",
  lessons: [
    {
      id: "les-4-3-2-1",
      title: "Large Number",
      description: "Example 24.1",
      icon: "Hash",
      slides: [
        {
          id: "chal",
          type: "theory",
          title: "Convert 1245",
          content: "Convert Decimal $(1245)_{10}$ to Binary."
        },
        {
          id: "sol",
          type: "solution",
          title: "Solution Trace",
          content: "Follow the remainders.",
          interactiveSteps: [
            { stepText: "$1245 \\div 2 = 622$ R **1** (LSB)" },
            { stepText: "$622 \\div 2 = 311$ R **0**" },
            { stepText: "$311 \\div 2 = 155$ R **1**" },
            { stepText: "$155 \\div 2 = 77$ R **1**" },
            { stepText: "$77 \\div 2 = 38$ R **1**" },
            { stepText: "$38 \\div 2 = 19$ R **0**" },
            { stepText: "$19 \\div 2 = 9$ R **1**" },
            { stepText: "$9 \\div 2 = 4$ R **1**" },
            { stepText: "$4 \\div 2 = 2$ R **0**" },
            { stepText: "$2 \\div 2 = 1$ R **0**" },
            { stepText: "$1 \\div 2 = 0$ R **1** (MSB)" },
            { stepText: "Read Up: **10011011101**" }
          ]
        }
      ]
    },
    {
      id: "les-4-3-2-2",
      title: "Your Turn",
      description: "Practice",
      icon: "PenTool",
      slides: [
        {
          id: "prob",
          type: "numerical",
          title: "Convert 25",
          content: "Convert $(25)_{10}$ to binary. Enter the result as a number (e.g. 101).",
          numericAnswer: 11001,
          numericTolerance: 0
        },
        {
          id: "hint",
          type: "solution",
          title: "Steps for 25",
          content: "Did you get 11001?",
          interactiveSteps: [
            { stepText: "25/2 = 12 R 1" },
            { stepText: "12/2 = 6 R 0" },
            { stepText: "6/2 = 3 R 0" },
            { stepText: "3/2 = 1 R 1" },
            { stepText: "1/2 = 0 R 1" }
          ]
        }
      ]
    }
  ]
};
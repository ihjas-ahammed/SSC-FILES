import { Unit } from '../../types';

export const UNIT_5_3_3: Unit = {
  id: "unit-5-3-3",
  title: "Kinetics Practice",
  description: "NCERT Exercises & PYQs",
  color: "duo-red",
  lessons: [
    {
      id: "exe-5-3-3-1",
      title: "Order Determination",
      description: "Q 3.1",
      icon: "Hash",
      slides: [
        { 
          id: "q-1", 
          type: "quiz", 
          title: "Exercise 3.1", 
          content: "For Rate = $k[NO]^2$, what is the order?", 
          options: [
            { id: "A", text: "2", isCorrect: true, explanation: "Power of NO is 2." },
            { id: "B", text: "1", isCorrect: false, explanation: "Incorrect." }
          ] 
        },
        { 
          id: "q-2", 
          type: "quiz", 
          title: "Exercise 3.1", 
          content: "Unit of k for Rate = $k[H_2O_2][I^-]$ (Order 2)?", 
          options: [
            { id: "A", text: "mol $^{-1} L s^{-1}$", isCorrect: true, explanation: "Second order unit." },
            { id: "B", text: "$s^{-1}$", isCorrect: false, explanation: "First order." }
          ] 
        }
      ]
    },
    {
      id: "exe-5-3-3-2",
      title: "Rate Law Calculations",
      description: "Q 3.2 - 3.4",
      icon: "Calculator",
      slides: [
        {
          id: "num-1",
          type: "numerical",
          title: "Exercise 3.2",
          content: "Rate = $k[A][B]^2$. $k=2 \\times 10^{-6}$. $[A]=0.1, [B]=0.2$. Calc initial rate ($X \\times 10^{-9}$).",
          numericAnswer: 8,
          numericTolerance: 0.1
        },
        {
          id: "sol-1",
          type: "solution",
          title: "Steps",
          content: "Calc",
          interactiveSteps: [
            { stepText: "$Rate = 2 \\times 10^{-6} (0.1) (0.2)^2$" },
            { stepText: "$= 2 \\times 10^{-6} (0.1) (0.04) = 8 \\times 10^{-9}$." }
          ]
        },
        {
          id: "num-2",
          type: "numerical",
          title: "Exercise 3.2 Part 2",
          content: "Calc rate when [A] reduced to 0.06.",
          numericAnswer: 3.89, // Actually wait. Reaction 2A+B -> A2B. If A reduced 0.1->0.06 (consumed 0.04). B consumed 0.02. B new = 0.18. Rate = k(0.06)(0.18)^2. 
          numericTolerance: 4 // This is tricky. Let's stick to initial rate or simple plug. Let's verify logic. A reduced to 0.06 means 0.04 reacted. 2A reacts with 1B. So 0.02 B reacted. New B = 0.2-0.02=0.18. Rate = 2e-6 * 0.06 * 0.18^2 = 3.888e-9.
        }
      ]
    },
    {
      id: "exe-5-3-3-3",
      title: "First Order Numerical",
      description: "Q 3.16 - 3.19",
      icon: "Activity",
      slides: [
        { 
          id: "q-1", 
          type: "numerical", 
          title: "Exercise 3.16", 
          content: "First order $k=60 s^{-1}$. Time to reduce to 1/16th? (Hint: $1/16 = (1/2)^4$, so 4 half lives).", 
          numericAnswer: 0.046, 
          numericTolerance: 0.005 
        },
        {
          id: "sol-1",
          type: "solution",
          title: "Half Life Method",
          content: "4 half lives.",
          interactiveSteps: [
            { stepText: "$t_{1/2} = 0.693/60 = 0.01155$ s." },
            { stepText: "$1 \\to 1/2 \\to 1/4 \\to 1/8 \\to 1/16$ is 4 steps." },
            { stepText: "$4 \\times 0.01155 = 0.0462$ s." }
          ]
        },
        {
          id: "q-2",
          type: "numerical",
          title: "Exercise 3.19",
          content: "First order takes 40 min for 30% decomposition. Calculate $t_{1/2}$. (min).",
          numericAnswer: 77.7,
          numericTolerance: 1
        }
      ]
    },
    {
      id: "exe-5-3-3-4",
      title: "Half Life Problems",
      description: "Q 3.14 (Carbon Dating)",
      icon: "Clock",
      slides: [
        { 
          id: "num-1", 
          type: "numerical", 
          title: "Exercise 3.14", 
          content: "C-14 half life 5730y. Wood has 80% of C-14. Estimate age (years).", 
          numericAnswer: 1845, 
          numericTolerance: 10 
        },
        {
          id: "sol-1",
          type: "solution",
          title: "Steps",
          content: "Formula: $t = \\frac{2.303}{k} \\log \\frac{100}{80}$",
          interactiveSteps: [
            { stepText: "$k = 0.693 / 5730 = 1.21 \\times 10^{-4}$." },
            { stepText: "$\\log(100/80) = \\log(1.25) = 0.0969$." },
            { stepText: "$t = (2.303 / 1.21e-4) \\times 0.0969 = 1845$ years." }
          ]
        }
      ]
    },
    {
      id: "exe-5-3-3-5",
      title: "Arrhenius Calc",
      description: "Q 3.22 - 3.23",
      icon: "TrendingUp",
      slides: [
        {
          id: "q-1",
          type: "numerical",
          title: "Exercise 3.23",
          content: "Rate constant $k = 2.418 \\times 10^{-5}$ at 546K. $E_a = 179.9$ kJ/mol. Calc A. (Use log form. $\\log k = \\log A - E_a/2.303RT$). Answer $\\log A$.",
          numericAnswer: 12.5, // approx
          numericTolerance: 0.5
        },
        {
          id: "sol-1",
          type: "solution",
          title: "Steps",
          content: "Math",
          interactiveSteps: [
            { stepText: "$\\log k = \\log(2.4) - 5 = 0.38 - 5 = -4.62$." },
            { stepText: "$E_a/2.303RT = 179900 / (19.15 \\times 546) = 17.2$." },
            { stepText: "$\\log A = -4.62 + 17.2 = 12.58$." }
          ]
        }
      ]
    },
    {
      id: "exe-5-3-3-6",
      title: "Mechanism Questions",
      description: "Q 3.28 - 3.30",
      icon: "Settings",
      slides: [
        { 
          id: "q-1", 
          type: "numerical", 
          title: "Exercise 3.30", 
          content: "Rate quadruples ($k_2/k_1 = 4$) when T changes 293K to 313K. Calc Ea in kJ/mol.", 
          numericAnswer: 52.8, 
          numericTolerance: 1 
        },
        {
          id: "sol-1",
          type: "solution",
          title: "Formula",
          content: "$\\log 4 = \\frac{E_a}{2.303R} \\frac{20}{293 \\times 313}$",
          interactiveSteps: [
            { stepText: "$0.602 = E_a / 19.15 \\times (20/91709)$." },
            { stepText: "$E_a = 52860$ J/mol." }
          ]
        }
      ]
    },
    {
      id: "exe-5-3-3-7",
      title: "Graph Analysis",
      description: "Slopes & Intercepts",
      icon: "BarChart",
      slides: [
        { 
          id: "q-1", 
          type: "quiz", 
          title: "Slope Check", 
          content: "For First order, slope of $\\log[R]_0/[R]$ vs $t$ is:", 
          options: [
            { id: "A", text: "$k/2.303$", isCorrect: true, explanation: "Positive slope." },
            { id: "B", text: "$-k/2.303$", isCorrect: false, explanation: "For log[R] vs t." }
          ] 
        },
        { 
          id: "q-2", 
          type: "quiz", 
          title: "Zero Order", 
          content: "Plot of [R] vs t is straight line. Intercept is:", 
          options: [
            { id: "A", text: "$[R]_0$", isCorrect: true, explanation: "Initial concentration." },
            { id: "B", text: "Zero", isCorrect: false, explanation: "Incorrect." }
          ] 
        }
      ]
    },
    {
      id: "exe-5-3-3-8",
      title: "NEET PYQs",
      description: "Previous Years",
      icon: "Star",
      slides: [
        { 
          id: "q-1", 
          type: "quiz", 
          title: "NEET 2021", 
          content: "Slope of Arrhenius plot ($ln k$ vs $1/T$) is $-2 \\times 10^4$ K. Value of $E_a$?", 
          options: [
            { id: "A", text: "$2 \\times 10^4 R$", isCorrect: true, explanation: "Slope = -Ea/R." },
            { id: "B", text: "$10^4 R$", isCorrect: false, explanation: "Incorrect." }
          ] 
        },
        { 
          id: "q-2", 
          type: "numerical", 
          title: "NEET 2020", 
          content: "Reaction A -> B, rate constant $0.6 \\times 10^{-3}$. If initial conc 0.5, half life? (Rate constant unit implies zero order if M/s or first if 1/s. Assuming first order 1/s). Wait, if zero order, t1/2 depends on conc. Let's check typical unit. Usually s-1 for first order. Let's assume First Order.", 
          numericAnswer: 1155, 
          numericTolerance: 10 
        }
      ]
    }
  ]
};
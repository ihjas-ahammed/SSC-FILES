import { Unit } from '../../types';

export const UNIT_5_2_4: Unit = {
  id: "unit-5-2-4",
  title: "Electrochemistry Practice",
  description: "NCERT Exercises & Numericals",
  color: "duo-blue",
  lessons: [
    {
      id: "exe-5-2-4-1",
      title: "Nernst Calculation",
      description: "Q 2.5",
      icon: "Calculator",
      slides: [
        { 
          id: "q-1", 
          type: "numerical", 
          title: "Exercise 2.5", 
          content: "Calculate EMF of $Ni|Ni^{2+}(0.160M)||Ag^+(0.002M)|Ag$. $E^0 = 1.05 V$.", 
          numericAnswer: 0.91, 
          numericTolerance: 0.02 
        },
        {
          id: "sol-1",
          type: "solution",
          title: "Solution",
          content: "Steps",
          interactiveSteps: [
            {stepText: "$E = 1.05 - (0.059/2) \\log([0.160] / [0.002]^2)$"},
            {stepText: "$[0.002]^2 = 4 \\times 10^{-6}$. Ratio = $40000$."},
            {stepText: "$\\log(40000) = 4.6$. $E = 1.05 - 0.14 = 0.91$ V."}
          ]
        }
      ]
    },
    {
      id: "exe-5-2-4-2",
      title: "Equilibrium Constant",
      description: "Q 2.6",
      icon: "Scale",
      slides: [
        { 
          id: "q-1", 
          type: "numerical", 
          title: "Exercise 2.6", 
          content: "Cell $2Fe^{3+} + 2I^- \\to 2Fe^{2+} + I_2$ has $E^0 = 0.236 V$. Calculate $\\Delta G^0$ (kJ/mol).", 
          numericAnswer: -45.54, 
          numericTolerance: 0.1 
        },
        {
          id: "sol-1",
          type: "solution",
          title: "Logic",
          content: "$-nFE^0$. n=2.",
          interactiveSteps: [
            {stepText: "$-2 \\times 96500 \\times 0.236 = -45548$ J."}
          ]
        }
      ]
    },
    {
      id: "exe-5-2-4-3",
      title: "Molar Conductivity",
      description: "Q 2.8",
      icon: "Activity",
      slides: [
        { 
          id: "q-1", 
          type: "numerical", 
          title: "Exercise 2.8", 
          content: "Conductivity of 0.20 M KCl is 0.0248 S/cm. Calc Molar Conductivity.", 
          numericAnswer: 124, 
          numericTolerance: 0.1 
        }
      ]
    },
    {
      id: "exe-5-2-4-4",
      title: "Kohlrausch Law",
      description: "Q 2.11",
      icon: "Plus",
      slides: [
        { 
          id: "q-1", 
          type: "numerical", 
          title: "Exercise 2.11", 
          content: "Conductivity of 0.00241 M acetic acid is $7.896 \\times 10^{-5}$ S/cm. $\\Lambda_m^0 = 390.5$. Calculate dissociation constant $K_a$ (Enter $X$ for $X \\times 10^{-5}$).", 
          numericAnswer: 1.86, 
          numericTolerance: 0.2 
        },
        {
          id: "sol-1",
          type: "solution",
          title: "Steps",
          content: "Alpha and Ka",
          interactiveSteps: [
            {stepText: "$\\Lambda_m = (7.896e-5 \\times 1000) / 0.00241 = 32.76$."},
            {stepText: "$\\alpha = 32.76 / 390.5 = 0.084$."},
            {stepText: "$K_a = C \\alpha^2 / (1-\\alpha) \\approx 1.86 \\times 10^{-5}$."}
          ]
        }
      ]
    },
    {
      id: "exe-5-2-4-5",
      title: "Faraday's Law",
      description: "Q 2.12 - 2.13",
      icon: "Zap",
      slides: [
        { 
          id: "q-1", 
          type: "numerical", 
          title: "Exercise 2.12", 
          content: "Charge required for $1 \\text{mol } Al^{3+} \\to Al$? (In Coulombs, $X \\times 10^5$).", 
          numericAnswer: 2.89, 
          numericTolerance: 0.05 
        },
        { 
          id: "q-2", 
          type: "numerical", 
          title: "Exercise 2.13", 
          content: "How much electricity in terms of Faraday to produce 20g Ca from molten $CaCl_2$? (Ca=40).", 
          numericAnswer: 1, 
          numericTolerance: 0 
        }
      ]
    },
    {
      id: "exe-5-2-4-6",
      title: "Electrolysis Products",
      description: "Q 2.18",
      icon: "Filter",
      slides: [
        { 
          id: "q-1", 
          type: "quiz", 
          title: "Exercise 2.18", 
          content: "Electrolysis of aqueous AgNO3 with Silver electrodes. Anode product?", 
          options: [
            { id: "A", text: "Ag dissolves ($Ag \\to Ag^+$)", isCorrect: true, explanation: "Active electrode oxidizes." },
            { id: "B", text: "Oxygen gas", isCorrect: false, explanation: "Only with inert Pt electrode." }
          ] 
        }
      ]
    },
    {
      id: "exe-5-2-4-7",
      title: "Battery Reactions",
      description: "Q 2.17",
      icon: "Battery",
      slides: [
        { 
          id: "q-1", 
          type: "quiz", 
          title: "Lead Storage", 
          content: "During discharge, $H_2SO_4$ is:", 
          options: [
            { id: "A", text: "Consumed", isCorrect: true, explanation: "Density decreases." },
            { id: "B", text: "Produced", isCorrect: false, explanation: "During recharge." }
          ] 
        }
      ]
    },
    {
      id: "exe-5-2-4-8",
      title: "Mixed Problems",
      description: "Q 2.15",
      icon: "Star",
      slides: [
        { 
          id: "q-1", 
          type: "numerical", 
          title: "Exercise 2.15", 
          content: "Ni(NO3)2 electrolysed with 5A for 20 min. Mass of Ni? (M=58.7).", 
          numericAnswer: 1.82, 
          numericTolerance: 0.1 
        }
      ]
    },
    {
      id: "exe-5-2-4-9",
      title: "NEET PYQs",
      description: "Past Paper",
      icon: "Award",
      slides: [
        { 
          id: "q-1", 
          type: "quiz", 
          title: "NEET 2020", 
          content: "On electrolysis of dil sulphuric acid using Pt electrode, product at anode is:", 
          options: [
            { id: "A", text: "Oxygen", isCorrect: true, explanation: "Water oxidation." },
            { id: "B", text: "SO2", isCorrect: false, explanation: "No." }
          ] 
        }
      ]
    }
  ]
};
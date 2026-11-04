import { Unit } from '../../types';

export const UNIT_2_2_6: Unit = {
  id: "unit-2-2-6",
  title: "Equilibrium Practice",
  description: "NCERT Exercises",
  color: "duo-blue",
  lessons: [
    {
      id: "exe-2-2-6-1",
      title: "Kc & Kp Calculations",
      description: "Q 6.1 - 6.5",
      icon: "Calculator",
      slides: [
        { 
          id: "q-1", 
          type: "numerical", 
          title: "Exercise 6.2", 
          content: "For $2SO_2 + O_2 \\rightleftharpoons 2SO_3$. At eq, $[SO_2]=0.6, [O_2]=0.82, [SO_3]=1.90$. Calculate $K_c$.", 
          numericAnswer: 12.23, 
          numericTolerance: 0.1 
        }
      ]
    },
    {
      id: "exe-2-2-6-2",
      title: "Le Chatelier",
      description: "Q 6.25 - 6.29",
      icon: "ArrowRightLeft",
      slides: [
        { 
          id: "q-1", 
          type: "quiz", 
          title: "Exercise 6.25", 
          content: "Effect of decreasing pressure on $PCl_5 \\rightleftharpoons PCl_3 + Cl_2$?", 
          options: [
            { id: "A", text: "Shift Forward", isCorrect: true, explanation: "Low P favours more moles (1 -> 2)." },
            { id: "B", text: "Shift Backward", isCorrect: false, explanation: "Incorrect." }
          ] 
        }
      ]
    },
    {
      id: "exe-2-2-6-3",
      title: "pH Calculations",
      description: "Q 6.41 - 6.48",
      icon: "Droplet",
      slides: [
        { 
          id: "q-1", 
          type: "numerical", 
          title: "Exercise 6.41", 
          content: "[H+] in soft drink is $3.8 \\times 10^{-3}$ M. Calculate pH.", 
          numericAnswer: 2.42, 
          numericTolerance: 0.05 
        },
        { 
          id: "q-2", 
          type: "numerical", 
          title: "Exercise 6.48", 
          content: "pH of 0.003 M HCl?", 
          numericAnswer: 2.52, 
          numericTolerance: 0.05 
        }
      ]
    },
    {
      id: "exe-2-2-6-4",
      title: "Solubility",
      description: "Q 6.67 - 6.73",
      icon: "Grid",
      slides: [
        { 
          id: "q-1", 
          type: "numerical", 
          title: "Exercise 6.68", 
          content: "$K_{sp}$ of $Ag_2CrO_4 = 1.1 \\times 10^{-12}$. Calculate solubility (S) in $10^{-4}$ M.", 
          numericAnswer: 0.65, 
          numericTolerance: 0.05 
        },
        {
          id: "sol-1",
          type: "solution",
          title: "Logic",
          content: "$K_{sp} = 4S^3$. $S = (K_{sp}/4)^{1/3}$.",
          interactiveSteps: []
        }
      ]
    }
  ]
};
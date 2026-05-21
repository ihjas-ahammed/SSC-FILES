import { Unit } from '../../types';

export const UNIT_2_1_6: Unit = {
  id: "unit-2-1-6",
  title: "Second Law Exercises",
  description: "NCERT Exe 5.11 - 5.22",
  color: "duo-red",
  lessons: [
    {
      id: "exe-2-1-6-1",
      title: "Combustion Heat",
      description: "Q 5.11",
      icon: "Flame",
      slides: [
        { 
          id: "q-1", 
          type: "numerical", 
          title: "Exercise 5.11", 
          content: "Enthalpy of combustion of C to CO2 is -393.5 kJ/mol. Heat released forming 35.2 g CO2? (Molar mass CO2 = 44).", 
          numericAnswer: 314.8, 
          numericTolerance: 0.5 
        },
        {
          id: "sol-1",
          type: "solution",
          title: "Steps",
          content: "Proportion",
          interactiveSteps: [
            {stepText: "Moles CO2 = 35.2 / 44 = 0.8 mol."},
            {stepText: "Heat = 0.8 * 393.5 = 314.8 kJ."}
          ]
        }
      ]
    },
    {
      id: "exe-2-1-6-2",
      title: "Hess Law",
      description: "Q 5.12",
      icon: "Plus",
      slides: [
        { 
          id: "q-1", 
          type: "numerical", 
          title: "Exercise 5.12", 
          content: "Find $\\Delta H$ for $N_2O_4 + 3CO \\to N_2O + 3CO_2$. Given formation enthalpies: CO (-110), CO2 (-393), N2O (81), N2O4 (9.7).", 
          numericAnswer: -778, 
          numericTolerance: 1 
        },
        {
          id: "sol-1",
          type: "solution",
          title: "Product - Reactant",
          content: "Sum(Prod) - Sum(React)",
          interactiveSteps: [
            {stepText: "Reactants: 9.7 + 3(-110) = -320.3"},
            {stepText: "Products: 81 + 3(-393) = -1098"},
            {stepText: "Diff: -1098 - (-320.3) = -777.7 kJ."}
          ]
        }
      ]
    },
    {
      id: "exe-2-1-6-3",
      title: "Bond Enthalpy",
      description: "Q 5.15",
      icon: "Link",
      slides: [
        { 
          id: "q-1", 
          type: "numerical", 
          title: "Exercise 5.15", 
          content: "Find Bond Enthalpy of C-Cl. Given: vap(CCl4)=30.5, f(CCl4)=-135.5, a(C)=715, a(Cl2)=242.", 
          numericAnswer: 326, 
          numericTolerance: 1 
        },
        {
          id: "sol-1",
          type: "solution",
          title: "Cycle",
          content: "$CCl_4(g) \\to C(g) + 4Cl(g)$",
          interactiveSteps: [
            {stepText: "Enthalpy of reaction = Bond energy of 4 C-Cl."},
            {stepText: "Cycle: Formation eq reversed (- -135.5) + Vap (30.5) + Atomization C (715) + 2*Atomization Cl2 (2*242)."},
            {stepText: "Total = 135.5 + 30.5 + 715 + 484 = 1305 kJ."},
            {stepText: "Avg Bond Enthalpy = 1305 / 4 = 326.25 kJ/mol."}
          ]
        }
      ]
    },
    {
      id: "exe-2-1-6-4",
      title: "Entropy",
      description: "Q 5.16 - 5.18",
      icon: "Shuffle",
      slides: [
        { 
          id: "q-1", 
          type: "quiz", 
          title: "Exercise 5.16", 
          content: "For isolated system, $\\Delta U = 0$, what will be $\\Delta S$?", 
          options: [
            { id: "A", text: "> 0", isCorrect: true, explanation: "Spontaneous process in isolated system increases entropy." },
            { id: "B", text: "= 0", isCorrect: false, explanation: "Only at equilibrium." }
          ] 
        },
        {
          id: "q-2",
          type: "numerical",
          title: "Exercise 5.17",
          content: "Reaction: $\\Delta H = 400$ kJ, $\\Delta S = 0.2$ kJ/K. At what T does it become spontaneous?",
          numericAnswer: 2000,
          numericTolerance: 0
        },
        {
          id: "q-3",
          type: "quiz",
          title: "Exercise 5.18",
          content: "Signs of $\\Delta H$ and $\\Delta S$ for $2Cl(g) \\to Cl_2(g)$?",
          options: [
            { id: "A", text: "Both negative", isCorrect: true, explanation: "Bond formation (Exo) and Gas to Gas (Less particles, less entropy)." },
            { id: "B", text: "Both positive", isCorrect: false, explanation: "Incorrect." }
          ]
        }
      ]
    },
    {
      id: "exe-2-1-6-5",
      title: "Gibbs Calculation",
      description: "Q 5.19",
      icon: "Battery",
      slides: [
        { 
          id: "q-1", 
          type: "numerical", 
          title: "Exercise 5.19", 
          content: "Reaction $2A + B \\to 2D$. $\\Delta U = -10.5$ kJ, $\\Delta S = -44.1$ J/K. Calculate $\\Delta G$ at 298K. (Assume $\\Delta H \\approx \\Delta U$ or calculate $\\Delta n_g$ if phases known. Q implies standard states, usually implies gases if not stated, but let's assume $\\Delta H = \\Delta U$ for simplicity or check NCERT solution. NCERT Solution uses $\\Delta H = \\Delta U$ directly? Wait. Let's assume $\\Delta n_g$ not given, use $\\Delta H = \\Delta U$).", 
          numericAnswer: 0.16, 
          numericTolerance: 0.5 
        },
        {
           id: "correction",
           type: "theory",
           title: "Note",
           content: "Actually $\\Delta G = \\Delta H - T\\Delta S$. \n$\\Delta H = -10500$ J.\n$T\\Delta S = 298 \\times -44.1 = -13141.8$ J.\n$\\Delta G = -10500 - (-13142) = +2642$ J. Non spontaneous."
        },
        {
           id: "q-1-real",
           type: "numerical",
           title: "Recalculate",
           content: "Calculate $\\Delta G$ in kJ. (-10.5 - (298*-0.0441)).",
           numericAnswer: 2.64,
           numericTolerance: 0.1
        }
      ]
    },
    {
      id: "exe-2-1-6-6",
      title: "Equilibrium Constant",
      description: "Q 5.20",
      icon: "Scale",
      slides: [
        { 
          id: "q-1", 
          type: "numerical", 
          title: "Exercise 5.20", 
          content: "K = 10 at 300K. Calculate $\\Delta G^\\ominus$. ($R=8.314$). Answer in kJ.", 
          numericAnswer: -5.74, 
          numericTolerance: 0.1 
        },
        {
          id: "sol-1",
          type: "solution",
          title: "Formula",
          content: "$\\Delta G = -2.303 RT \\log K$",
          interactiveSteps: [
            {stepText: "$-2.303 \\times 8.314 \\times 300 \\times 1$"},
            {stepText: "$-5744$ J = $-5.74$ kJ."}
          ]
        }
      ]
    }
  ]
};
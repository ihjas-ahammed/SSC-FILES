import { Unit } from '../../types';

export const UNIT_2_3_2: Unit = {
  id: "unit-2-3-2",
  title: "Oxidation Number",
  description: "Rules & Balancing",
  color: "duo-violet",
  lessons: [
    {
      id: "les-2-3-2-1",
      title: "Oxidation Number Rules",
      description: "Assigning States",
      icon: "Hash",
      slides: [
        {
          id: "core-1",
          type: "theory",
          title: "Rules",
          content: "1. Elements in free state = 0 ($O_2, Na$).\n2. Group 1 = +1, Group 2 = +2.\n3. Oxygen = -2 (Except peroxides -1, OF2 +2).\n4. Hydrogen = +1 (Except metal hydrides -1).\n5. Halogens = -1 (F is always -1).\n6. Sum in neutral = 0, Polyatomic ion = Charge."
        },
        {
          id: "num-1",
          type: "numerical",
          title: "Practice",
          content: "Oxidation state of Mn in $KMnO_4$.",
          numericAnswer: 7,
          numericTolerance: 0
        },
        {
          id: "sol-1",
          type: "solution",
          title: "Steps",
          content: "$1(+1) + x + 4(-2) = 0$",
          interactiveSteps: [
            {stepText: "$1 + x - 8 = 0$"},
            {stepText: "$x = +7$"}
          ]
        },
        { id: "flash-1", type: "quiz", title: "Flashback", content: "OF2 oxygen state?", options: [{id: "A", text: "+2", isCorrect: true, explanation: "F is -1"}, {id: "B", text: "-2", isCorrect: false, explanation: "Normal oxide"}]}
      ]
    },
    {
      id: "les-2-3-2-2",
      title: "Types of Redox",
      description: "Classification",
      icon: "List",
      slides: [
        {
          id: "core-1",
          type: "theory",
          title: "Reaction Types",
          content: "1. **Combination:** $C + O_2 \\to CO_2$\n2. **Decomposition:** $2H_2O \\to 2H_2 + O_2$\n3. **Displacement:** $Zn + CuSO_4 \\to ZnSO_4 + Cu$\n4. **Disproportionation:** Same element oxidized and reduced. ($2H_2O_2 \\to 2H_2O + O_2$ - O goes from -1 to -2 and 0)."
        },
        {
          id: "ret-1",
          type: "quiz",
          title: "Check",
          content: "In $P_4 + NaOH \\to PH_3 + NaH_2PO_2$, P undergoes:",
          options: [
            { id: "A", text: "Disproportionation", isCorrect: true, explanation: "0 to -3 and +1." },
            { id: "B", text: "Comproportionation", isCorrect: false, explanation: "Reverse." }
          ]
        }
      ]
    },
    {
      id: "les-2-3-2-3",
      title: "Balancing Redox",
      description: "Ion-Electron Method",
      icon: "Scale",
      slides: [
        {
          id: "core-1",
          type: "theory",
          title: "Steps (Acidic Medium)",
          content: "1. Separate into Half-reactions (Ox/Red).\n2. Balance atoms other than O/H.\n3. Balance O by adding $H_2O$.\n4. Balance H by adding $H^+$.\n5. Balance charge by adding $e^-$.\n6. Equalize electrons and add."
        },
        {
          id: "sol-1",
          type: "solution",
          title: "Balance $MnO_4^- + Fe^{2+} \\to Mn^{2+} + Fe^{3+}$",
          content: "Acidic medium.",
          interactiveSteps: [
            {stepText: "Ox: $Fe^{2+} \\to Fe^{3+} + e^-$"},
            {stepText: "Red: $MnO_4^- + 8H^+ + 5e^- \\to Mn^{2+} + 4H_2O$"},
            {stepText: "Multiply Ox by 5: $5Fe^{2+} \\to 5Fe^{3+} + 5e^-$"},
            {stepText: "Add: $MnO_4^- + 5Fe^{2+} + 8H^+ \\to Mn^{2+} + 5Fe^{3+} + 4H_2O$"}
          ]
        }
      ]
    }
  ]
};
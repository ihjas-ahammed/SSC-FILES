import { Unit } from '../../types';

export const UNIT_2_2_5: Unit = {
  id: "unit-2-2-5",
  title: "Advanced Ionic",
  description: "Hydrolysis, Buffers & Ksp",
  color: "duo-blue",
  lessons: [
    {
      id: "les-2-2-5-1",
      title: "Salt Hydrolysis",
      description: "pH of Salt Solutions",
      icon: "Beaker",
      slides: [
        { id: "init-1", type: "quiz", title: "Concept", content: "NaCl solution is:", options: [{id: "A", text: "Neutral", isCorrect: true, explanation: "Strong Acid + Strong Base."}, {id: "B", text: "Acidic", isCorrect: false, explanation: "No hydrolysis."}] },
        {
          id: "core-1",
          type: "theory",
          title: "Hydrolysis Types",
          content: "1. **SA + SB:** Neutral ($NaCl$).\n2. **SA + WB:** Acidic ($NH_4Cl$). Cation hydrolyses.\n3. **WA + SB:** Basic ($CH_3COONa$). Anion hydrolyses.\n4. **WA + WB:** Depends on $K_a$ vs $K_b$."
        },
        {
          id: "app-1",
          type: "quiz",
          title: "Prediction",
          content: "pH of Ammonium Chloride ($NH_4Cl$) solution?",
          options: [
            { id: "A", text: "< 7", isCorrect: true, explanation: "Salt of Strong Acid (HCl) + Weak Base." },
            { id: "B", text: "> 7", isCorrect: false, explanation: "That is for Sodium Acetate." }
          ]
        }
      ]
    },
    {
      id: "les-2-2-5-2",
      title: "Buffer Solutions",
      description: "Resisting pH Change",
      icon: "Shield",
      slides: [
        {
          id: "core-1",
          type: "theory",
          title: "Buffers",
          content: "Solution that resists change in pH upon adding small amount of acid or base.\n- **Acidic Buffer:** Weak Acid + Salt with SB ($CH_3COOH + CH_3COONa$).\n- **Basic Buffer:** Weak Base + Salt with SA ($NH_4OH + NH_4Cl$).\n\n**Henderson-Hasselbalch Eq:**\n$$ pH = pK_a + \\log \\frac{[Salt]}{[Acid]} $$"
        },
        {
          id: "num-1",
          type: "numerical",
          title: "Buffer pH",
          content: "For acid buffer, if $[Salt] = [Acid]$ and $pK_a = 4.74$, what is pH?",
          numericAnswer: 4.74,
          numericTolerance: 0.05
        },
        {
          id: "sol-1",
          type: "solution",
          title: "Logic",
          content: "Log 1 = 0.",
          interactiveSteps: [
            {stepText: "$pH = 4.74 + \\log(1)$"},
            {stepText: "$pH = 4.74 + 0 = 4.74$"}
          ]
        },
        { id: "flash-1", type: "quiz", title: "Flashback", content: "Human blood is a buffer?", options: [{id: "A", text: "Yes", isCorrect: true, explanation: "Bicarbonate system"}, {id: "B", text: "No", isCorrect: false, explanation: "pH constant 7.4"}]}
      ]
    },
    {
      id: "les-2-2-5-3",
      title: "Solubility Product (Ksp)",
      description: "Sparingly Soluble Salts",
      icon: "Grid",
      slides: [
        {
          id: "core-1",
          type: "theory",
          title: "Solubility Product ($K_{sp}$)",
          content: "Product of molar concentrations of ions in a saturated solution, raised to power of coefficients.\nFor $AgCl \\rightleftharpoons Ag^+ + Cl^-$:\n$K_{sp} = [Ag^+][Cl^-] = S^2$ (where S is solubility).\n\n**Condition for PPT:**\n- Ionic Product ($Q_{ip}$) > $K_{sp}$ $\\to$ Precipitation.\n- $Q_{ip} < K_{sp}$ $\\to$ Unsaturated."
        },
        {
          id: "num-1",
          type: "numerical",
          title: "Ksp Calculation",
          content: "Solubility of $AgCl$ is $10^{-5}$ M. Calculate $K_{sp}$ (Enter $X$ for $X \\times 10^{-10}$).",
          numericAnswer: 1,
          numericTolerance: 0
        },
        {
          id: "ret-1",
          type: "quiz",
          title: "Common Ion Effect",
          content: "Addition of NaCl to AgCl solution will:",
          options: [
            { id: "A", text: "Decrease solubility of AgCl", isCorrect: true, explanation: "Increase in Cl- shifts eq backward." },
            { id: "B", text: "Increase solubility", isCorrect: false, explanation: "Incorrect." }
          ]
        },
        { id: "flash-1", type: "quiz", title: "Flashback", content: "Kw value?", options: [{id: "A", text: "10^-14", isCorrect: true, explanation: "Correct"}, {id: "B", text: "10^-7", isCorrect: false, explanation: "That is [H+]"}]}
      ]
    }
  ]
};
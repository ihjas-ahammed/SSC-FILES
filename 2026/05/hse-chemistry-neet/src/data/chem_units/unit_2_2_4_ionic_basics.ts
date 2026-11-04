import { Unit } from '../../types';

export const UNIT_2_2_4: Unit = {
  id: "unit-2-2-4",
  title: "Ionic Equilibrium",
  description: "Acids, Bases & pH",
  color: "duo-blue",
  lessons: [
    {
      id: "les-2-2-4-1",
      title: "Electrolytes",
      description: "Strong vs Weak",
      icon: "Zap",
      slides: [
        { id: "init-1", type: "quiz", title: "Concept", content: "Which conducts electricity?", options: [{id: "A", text: "Sugar Solution", isCorrect: false, explanation: "Non-electrolyte."}, {id: "B", text: "Salt Solution", isCorrect: true, explanation: "Ions are carriers."}] },
        {
          id: "core-1",
          type: "theory",
          title: "Electrolytes",
          content: "**Strong Electrolyte:** Dissociates almost completely (e.g., $NaCl, HCl$).\n**Weak Electrolyte:** Dissociates partially (e.g., $CH_3COOH, NH_4OH$). Equilibrium exists between ions and unionized molecules."
        },
        {
          id: "vis-1",
          type: "theory",
          title: "Dissociation",
          content: "Strong: $HCl \\to H^+ + Cl^-$ (One way)\nWeak: $CH_3COOH \\rightleftharpoons CH_3COO^- + H^+$ (Reversible)"
        },
        { id: "ret-1", type: "fill_in_blank", title: "Recall", content: "Ionic equilibrium deals with equilibrium involving ___ in aqueous solution.", blankAnswer: "ions" }
      ]
    },
    {
      id: "les-2-2-4-2",
      title: "Acid-Base Concepts",
      description: "Arrhenius, Bronsted, Lewis",
      icon: "Beaker",
      slides: [
        {
          id: "core-1",
          type: "theory",
          title: "Definitions",
          content: "1. **Arrhenius:** Acid gives $H^+$, Base gives $OH^-$ in water.\n2. **Bronsted-Lowry:** Acid is Proton ($H^+$) Donor, Base is Proton Acceptor.\n3. **Lewis:** Acid is Electron Pair Acceptor ($BF_3$), Base is Electron Pair Donor ($NH_3$).\n\n**Conjugate Pairs:** Differ by one proton ($HCl / Cl^-$)."
        },
        {
          id: "ret-1",
          type: "quiz",
          title: "Identify",
          content: "Conjugate base of $H_2O$?",
          options: [
            { id: "A", text: "$OH^-$", isCorrect: true, explanation: "Remove H+." },
            { id: "B", text: "$H_3O^+$", isCorrect: false, explanation: "Conjugate acid." }
          ]
        },
        {
          id: "app-1",
          type: "quiz",
          title: "Application",
          content: "$BF_3$ acts as:",
          options: [
            { id: "A", text: "Lewis Acid", isCorrect: true, explanation: "Electron deficient, accepts pair." },
            { id: "B", text: "Lewis Base", isCorrect: false, explanation: "No lone pair." }
          ]
        }
      ]
    },
    {
      id: "les-2-2-4-3",
      title: "Ionization of Water",
      description: "pH Scale",
      icon: "Droplet",
      slides: [
        {
          id: "core-1",
          type: "theory",
          title: "Ionic Product of Water ($K_w$)",
          content: "Water self-ionizes: $2H_2O \\rightleftharpoons H_3O^+ + OH^-$\n$$ K_w = [H_3O^+][OH^-] $$\nAt 298K, $K_w = 1.0 \\times 10^{-14}$.\n\n**pH Scale:** $pH = -\\log[H^+]$.\n$$ pH + pOH = 14 $$"
        },
        {
          id: "vis-1",
          type: "interactive_canvas",
          title: "pH Scale",
          content: "Visual scale 0-14.",
          interactiveCanvasId: "eq-ph-scale"
        },
        {
          id: "num-1",
          type: "numerical",
          title: "Calculation",
          content: "Calculate pH of $0.01$ M $HCl$.",
          numericAnswer: 2,
          numericTolerance: 0
        },
        {
          id: "sol-1",
          type: "solution",
          title: "Steps",
          content: "Calc",
          interactiveSteps: [
            {stepText: "$[H^+] = 10^{-2}$ M"},
            {stepText: "$pH = -\\log(10^{-2}) = 2$"}
          ]
        }
      ]
    },
    {
      id: "les-2-2-4-4",
      title: "Weak Acids/Bases",
      description: "Ka and Kb",
      icon: "Activity",
      slides: [
        {
          id: "core-1",
          type: "theory",
          title: "Dissociation Constants",
          content: "For weak acid $HA \\rightleftharpoons H^+ + A^-$:\n$$ K_a = \\frac{[H^+][A^-]}{[HA]} $$\nDegree of dissociation $\\alpha = \\sqrt{K_a/C}$ (Ostwald Dilution Law).\n\nRelation: $K_a \\times K_b = K_w$ (For conjugate pair)."
        },
        {
          id: "num-1",
          type: "numerical",
          title: "Calculation",
          content: "Calculate $pKa$ if $K_a = 10^{-5}$.",
          numericAnswer: 5,
          numericTolerance: 0
        },
        {
          id: "ret-1",
          type: "quiz",
          title: "Trend",
          content: "Higher $K_a$ implies:",
          options: [
            { id: "A", text: "Stronger Acid", isCorrect: true, explanation: "More dissociation." },
            { id: "B", text: "Weaker Acid", isCorrect: false, explanation: "Inverse." }
          ]
        }
      ]
    }
  ]
};
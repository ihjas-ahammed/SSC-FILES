import { Unit } from '../../types';

export const UNIT_1_1_9: Unit = {
  id: "unit-1-1-9",
  title: "Chapter Summary",
  description: "Review of Basic Concepts",
  color: "duo-violet",
  lessons: [
    {
      id: "sum-1-1",
      title: "Laws & Dalton",
      description: "Quick Review",
      icon: "BookOpen",
      slides: [
        { id: "s-1", type: "theory", title: "Laws", content: "**Conservation of Mass:** Mass in = Mass out.\n**Definite Proportions:** Fixed ratio by mass.\n**Multiple Proportions:** Small whole number ratios.\n**Gay Lussac:** Volume ratios.\n**Avogadro:** Equal Vol = Equal Molecules." },
        { id: "s-2", type: "theory", title: "Dalton", content: "Atoms are indivisible (Modified later). Atoms of element are identical (Isotopes modify this). Reactions are reorganization." }
      ]
    },
    {
      id: "sum-1-2",
      title: "Mole & Stoichiometry",
      description: "Quick Review",
      icon: "BookOpen",
      slides: [
        { id: "s-1", type: "theory", title: "The Mole", content: "**Mole:** $6.022 \\times 10^{23}$ particles.\n**Molar Mass:** Mass of 1 mole in grams." },
        { id: "s-2", type: "theory", title: "Solutions", content: "**Molarity (M):** mol/L (Temp dependent).\n**Molality (m):** mol/kg (Temp independent)." }
      ]
    }
  ]
};
import { Unit } from '../../types';

export const UNIT_6_2_4: Unit = {
  id: "unit-6-2-4",
  title: "Section Summary",
  description: "Review of Alcohols & Ethers",
  color: "duo-pink",
  lessons: [
    {
      id: "sum-6-2-1",
      title: "Alcohols & Phenols Recap",
      description: "Prep & Properties",
      icon: "BookOpen",
      slides: [
        { id: "s-1", type: "theory", title: "Prep", content: "**Alcohols:** Hydration, Hydroboration, Reduction, Grignard.\n**Phenols:** Dow, Cumene, Diazonium." },
        { id: "s-2", type: "theory", title: "Reactions", content: "**Acidity:** Phenol > Alcohol.\n**Phenol Electrophilic:** Nitration, Bromination, Kolbe (Salicylic acid), Reimer-Tiemann (Salicylaldehyde)." }
      ]
    },
    {
      id: "sum-6-2-2",
      title: "Ethers Recap",
      description: "Synthesis & Reactions",
      icon: "BookOpen",
      slides: [
        { id: "s-1", type: "theory", title: "Prep & Rxn", content: "**Williamson:** 1° Halide + Alkoxide.\n**Cleavage:** HI gives Iodide with smaller group (SN2) or tertiary (SN1). Anisole gives Phenol + MeI." }
      ]
    }
  ]
};
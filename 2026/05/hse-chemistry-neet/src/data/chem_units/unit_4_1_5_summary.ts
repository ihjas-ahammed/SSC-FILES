import { Unit } from '../../types';

export const UNIT_4_1_5: Unit = {
  id: "unit-4-1-5",
  title: "Section Summary",
  description: "Review of GOC",
  color: "duo-green",
  lessons: [
    {
      id: "sum-4-1-1",
      title: "Structure Recap",
      description: "Key Points",
      icon: "BookOpen",
      slides: [
        { id: "s-1", type: "theory", title: "Hybridisation", content: "$sp^3$ (Single), $sp^2$ (Double), $sp$ (Triple). Affects shape and electronegativity." },
        { id: "s-2", type: "theory", title: "Isomerism", content: "Chain, Position, Functional, Metamerism. Stereo: Geometrical (Cis/Trans), Optical (Chiral)." }
      ]
    },
    {
      id: "sum-4-1-2",
      title: "Effects Recap",
      description: "Electronic Effects",
      icon: "BookOpen",
      slides: [
        { id: "s-1", type: "theory", title: "Permanent Effects", content: "**Inductive (I):** Electronegativity diff. Distance dependent.\n**Resonance (R):** Delocalization of pi electrons.\n**Hyperconjugation:** Sigma-pi interaction (No bond resonance)." },
        { id: "s-2", type: "theory", title: "Temporary", content: "**Electromeric:** Pi e- shift in presence of reagent." }
      ]
    },
    {
      id: "sum-4-1-3",
      title: "Practical Recap",
      description: "Analysis",
      icon: "BookOpen",
      slides: [
        { id: "s-1", type: "theory", title: "Tests", content: "**Lassaigne:** N (Blue), S (Violet/Black), X (AgX ppt).\n**Combustion:** C, H detection." },
        { id: "s-2", type: "theory", title: "Purification", content: "Distillation (BP diff), Sublimation (Volatile solid), Chromatography (Adsorption)." }
      ]
    }
  ]
};
import { Unit } from '../../types';

export const UNIT_4_2_4: Unit = {
  id: "unit-4-2-4",
  title: "Section Summary",
  description: "Review of Hydrocarbons",
  color: "duo-orange",
  lessons: [
    {
      id: "sum-4-2-1",
      title: "Aliphatic Recap",
      description: "Alkanes, Alkenes, Alkynes",
      icon: "BookOpen",
      slides: [
        { id: "s-1", type: "theory", title: "Preparation", content: "**Alkanes:** Wurtz, Decarboxylation.\n**Alkenes:** Dehydration, Elimination.\n**Alkynes:** CaC2, Vic-dihalides." },
        { id: "s-2", type: "theory", title: "Reactions", content: "**Alkanes:** Free radical substitution.\n**Alkenes/Alkynes:** Electrophilic Addition (Markovnikov). Ozonolysis." }
      ]
    },
    {
      id: "sum-4-2-2",
      title: "Aromatic Recap",
      description: "Benzene Chemistry",
      icon: "BookOpen",
      slides: [
        { id: "s-1", type: "theory", title: "Benzene", content: "Aromatic (Huckel). Electrophilic Substitution (Nitration, Halogenation, F-C).\n**Directing Groups:** Activators (o/p), Deactivators (m)." }
      ]
    }
  ]
};
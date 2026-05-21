import { Unit } from '../../types';

export const UNIT_3_1_5: Unit = {
  id: "unit-3-1-5",
  title: "Chapter Summary",
  description: "Review of d and f Block",
  color: "duo-gray",
  lessons: [
    {
      id: "sum-3-1-1",
      title: "Transition Elements",
      description: "d-Block Recap",
      icon: "BookOpen",
      slides: [
        { id: "s-1", type: "theory", title: "General Props", content: "Metals with high MP/BP. Variable Oxidation States (+2 to +7). Coloured ions (d-d transition). Paramagnetic. Catalytic activity." },
        { id: "s-2", type: "theory", title: "Compounds", content: "$K_2Cr_2O_7$: Orange (acidic) / Yellow (basic). Strong oxidant.\n$KMnO_4$: Purple. Strong oxidant in acid/neutral/base." }
      ]
    },
    {
      id: "sum-3-1-2",
      title: "Inner Transition",
      description: "f-Block Recap",
      icon: "BookOpen",
      slides: [
        { id: "s-1", type: "theory", title: "Lanthanoids", content: "4f series. Lanthanoid contraction (Size decrease). Mostly +3 state. Chemical similarity." },
        { id: "s-2", type: "theory", title: "Actinoids", content: "5f series. Radioactive. Wide range of oxidation states. Actinoid contraction > Lanthanoid." }
      ]
    }
  ]
};
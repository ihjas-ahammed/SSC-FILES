import { Unit } from '../../types';

export const UNIT_6_4_5: Unit = {
  id: "unit-6-4-5",
  title: "Section Summary",
  description: "Review of Amines & Bio",
  color: "duo-green",
  lessons: [
    {
      id: "sum-6-4-1",
      title: "Amines & Diazo Recap",
      description: "Key Points",
      icon: "BookOpen",
      slides: [
        { id: "s-1", type: "theory", title: "Amines", content: "Basic nature (2 > 1 > 3 in aq for methyl). Carbylamine test for 1°. Hinsberg for distinction. Aniline gives electrophilic substitution (must protect NH2 for monosubstitution)." },
        { id: "s-2", type: "theory", title: "Diazonium", content: "$R-N_2^+Cl^-$. Great for synthesising fluorides (Balz-Schiemann), cyanides (Sandmeyer). Couples with phenol/aniline to form azo dyes." }
      ]
    },
    {
      id: "sum-6-4-2",
      title: "Biomolecules Recap",
      description: "Key Points",
      icon: "BookOpen",
      slides: [
        { id: "s-1", type: "theory", title: "Carbohydrates", content: "Glucose (Aldo) vs Fructose (Keto). Glycosidic linkages form disaccharides. Starch (storage) vs Cellulose (structural)." },
        { id: "s-2", type: "theory", title: "Proteins & DNA", content: "Amino acids -> Peptide bonds -> Proteins. Denaturation affects 2°/3°. DNA has double helix (H-bonds), contains A, T, G, C." }
      ]
    }
  ]
};
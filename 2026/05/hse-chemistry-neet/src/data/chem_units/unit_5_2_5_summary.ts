import { Unit } from '../../types';

export const UNIT_5_2_5: Unit = {
  id: "unit-5-2-5",
  title: "Section Summary",
  description: "Review of Electrochemistry",
  color: "duo-blue",
  lessons: [
    {
      id: "sum-5-2-1",
      title: "Cells Recap",
      description: "Nernst & Potentials",
      icon: "BookOpen",
      slides: [
        { id: "s-1", type: "theory", title: "Nernst", content: "$E = E^0 - (0.059/n) \\log Q$. Relates conc to potential." },
        { id: "s-2", type: "theory", title: "Gibbs", content: "$\\Delta G = -nFE$. Feasibility condition." }
      ]
    },
    {
      id: "sum-5-2-2",
      title: "Conduction Recap",
      description: "Ions & Laws",
      icon: "BookOpen",
      slides: [
        { id: "s-1", type: "theory", title: "Kohlrausch", content: "Limiting molar conductivity is sum of ions." },
        { id: "s-2", type: "theory", title: "Faraday", content: "Mass $\\propto$ Charge. 1 F deposits 1 eq mass." }
      ]
    },
    {
      id: "sum-5-2-3",
      title: "Applications Recap",
      description: "Batteries",
      icon: "BookOpen",
      slides: [
        { id: "s-1", type: "theory", title: "Batteries", content: "Primary (Dry, Mercury) vs Secondary (Lead, NiCd). Fuel cells ($H_2-O_2$)." },
        { id: "s-2", type: "theory", title: "Corrosion", content: "Electrochemical process. Fe oxidized, $O_2$ reduced." }
      ]
    }
  ]
};
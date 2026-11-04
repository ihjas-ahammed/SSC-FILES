import { Unit } from '../../types';

export const UNIT_3_4_3_SECTION_SUMMARY: Unit = {
  id: "unit-3-4-3",
  title: "Section 3.4 Summary",
  description: "Review of Standing and Traveling Waves",
  color: "duo-pink",
  lessons:[
    {
      id: "les-3-4-3-1",
      title: "Summary: Boundary Conditions",
      description: "Recap of Unit 3.4.1",
      icon: "List",
      slides:[
        {
          id: "theory-def",
          type: "theory",
          title: "Standing Waves Recap",
          content: "When a wave is confined to a string with fixed ends, boundary conditions ($y=0$ at edges) force the wave into discrete **normal modes**.\n\n*   The spatial shape is quantized: $k_n = n\\pi/L$.\n*   The frequencies are integer multiples of the fundamental: $f_n = n f_1$.\n*   The $n$-th harmonic has exactly $n$ loops (antinodes) and $n+1$ nodes."
        }
      ]
    },
    {
      id: "les-3-4-3-2",
      title: "Summary: Traveling Waves",
      description: "Recap of Unit 3.4.2",
      icon: "FastForward",
      slides:[
        {
          id: "theory-def",
          type: "theory",
          title: "Traveling Waves Recap",
          content: "A wave that propagates through space without changing its shape is described by D'Alembert's traveling wave form.\n\n*   Moving Right: $y = f(x - vt)$\n*   Moving Left: $y = f(x + vt)$\n\nWe proved mathematically that any twice-differentiable function of this argument perfectly satisfies the linear wave equation."
        }
      ]
    }
  ]
};
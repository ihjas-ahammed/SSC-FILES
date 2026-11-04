import { Unit } from '../../types';

export const UNIT_2_4_SUMMARY: Unit = {
  id: "unit-2-4-summary",
  title: "Section 2.4 Summary",
  description: "Photon Interactions & the Duality Revolution Recap",
  color: "duo-orange",
  lessons: [
    {
      id: "les-sum-2-4",
      title: "Summary: Photons meet electrons",
      description: "Key ideas from Section 2.4",
      icon: "BookCheck",
      slides: [
        {
          id: "sum-244sxcczs1-xsxqa0s0wa",
          type: "theory",
          title: "Section 2.4 Summary",
          content: "**Compton Effect:**\nX-rays scattered by electrons increase in wavelength because the photon loses energy in a particle-like collision.\n$$\\lambda' - \\lambda = \\frac{h}{m_e c} (1 - \\cos \\theta)$$\n\n**Other Photon Processes:**\n- *Bremsstrahlung:* Fast electrons decelerate near a nucleus, emitting X-ray photons.\n- *Pair Production:* A high-energy photon ($>1.02$ MeV) vanishes near a nucleus, creating an electron-positron pair.\n\n**Particle-Wave Duality:**\nLight exhibits both wave and particle properties, but never both in the same experiment (Bohr's Principle of Complementarity). The connection is statistical: the wave's intensity determines the probability of finding the photon particles ($P \\propto |E|^2$)."
        },
        {
          id: "sum-244-q1",
          type: "quiz",
          title: "Summary Check",
          content: "Which process involves a photon completely disappearing to create matter?",
          options: [
            { id: "A", text: "Pair Production", isCorrect: true, explanation: "The photon converts entirely into the mass of an electron and a positron." },
            { id: "B", text: "Compton Scattering", isCorrect: false, explanation: "The photon survives but loses energy." }
          ]
        }
      ]
    }
  ]
};
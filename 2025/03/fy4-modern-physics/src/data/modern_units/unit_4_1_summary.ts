import { Unit } from '../../types';

export const UNIT_4_1_SUMMARY: Unit = {
  id: "unit-4-1-summary",
  title: "Section 4.1 Summary",
  description: "Atomic Structure & Scattering Recap",
  color: "duo-orange",
  lessons: [
    {
      id: "les-sum-4-1-1",
      title: "Summary: Early Models & Scattering",
      description: "Key ideas from Unit 4.1.1",
      icon: "BookCheck",
      slides: [
        {
          id: "sum-411",
          type: "theory",
          title: "Unit 4.1.1 — Early Models",
          content: "**Thomson Model:** Atoms are modeled as a diffuse, uniform sphere of positive charge with negatively charged electrons embedded throughout like 'plum pudding'.\n\n**Scattering Theory:** By bombarding a foil with high-energy alpha particles, physicists can deduce internal structure. The Thomson model predicts almost zero large-angle scattering because its charge is too diffuse to stop a fast alpha particle.\n\n**Geiger-Marsden Experiment:** Found that roughly 1 in 10,000 alpha particles scattered backward ($>90^\\circ$). This is statistically impossible under the Thomson model, proving the model was fundamentally incorrect."
        }
      ]
    },
    {
      id: "les-sum-4-1-2",
      title: "Summary: The Nuclear Atom",
      description: "Key ideas from Unit 4.1.2",
      icon: "BookCheck",
      slides: [
        {
          id: "sum-412",
          type: "theory",
          title: "Unit 4.1.2 — The Rutherford Model",
          content: "**The Nucleus:** Rutherford concluded that all positive charge and nearly all mass is concentrated in a tiny central nucleus (radius $\\sim 10^{-14}$ m), leaving the atom mostly empty space.\n\n**Distance of Closest Approach:** In a head-on collision, an alpha particle converts all kinetic energy into electrostatic potential energy before stopping:\n$$d = \\frac{1}{4\\pi\\epsilon_0} \\frac{zZe^2}{K}$$\nThis provides an upper limit for the size of the nucleus.\n\n**Scattering Proportionalities:** The scattering rate $N(\\theta)$ is proportional to foil thickness $t$, to the square of the nuclear charge $Z^2$, and inversely proportional to the square of kinetic energy $1/K^2$."
        }
      ]
    }
  ]
};
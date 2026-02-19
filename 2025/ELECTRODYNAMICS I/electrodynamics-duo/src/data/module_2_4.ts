import { ModuleSection } from '../types';

export const UNIT_2_4: ModuleSection = {
  id: "sec-2-4",
  title: "Unit 4: Work and Energy",
  description: "Work to move charges and Energy stored in fields.",
  color: "duo-blue",
  units: [
    {
      id: "unit-2-4-work",
      title: "Work & Potential",
      description: "Moving charges.",
      color: "duo-blue",
      lessons: [
        {
          id: "lesson-work-point",
          title: "Work Done",
          description: "Moving a test charge.",
          icon: "Briefcase",
          slides: [
            {
              id: "s1",
              type: "theory",
              title: "Formula",
              content: "The work required to move a charge $Q$ from point $a$ to $b$ is:\n\n$$ W = Q[V(b) - V(a)] $$\n\nIf bringing a charge from infinity ($V(\\infty)=0$) to point $\\mathbf{r}$:\n\n$$ W = Q V(\\mathbf{r}) $$"
            }
          ]
        }
      ]
    },
    {
      id: "unit-2-4-energy",
      title: "Electrostatic Energy",
      description: "Energy of distributions.",
      color: "duo-blue",
      lessons: [
        {
          id: "lesson-energy-dist",
          title: "Energy of Distributions",
          description: "Discrete and Continuous.",
          icon: "Battery",
          slides: [
            {
              id: "s1",
              type: "theory",
              title: "Point Charges",
              content: "The work to assemble a system of point charges is:\n\n$$ W = \\frac{1}{2} \\sum_{i=1}^n q_i V(\\mathbf{r}_i) $$"
            },
            {
              id: "s2",
              type: "theory",
              title: "Continuous Charge",
              content: "For a volume charge density $\\rho$:\n\n$$ W = \\frac{1}{2} \\int \\rho V d\\tau $$"
            }
          ]
        },
        {
          id: "lesson-energy-field",
          title: "Energy in the Field",
          description: "Stored in E.",
          icon: "Zap",
          slides: [
            {
              id: "s1",
              type: "theory",
              title: "Energy Density",
              content: "Energy can be viewed as stored in the electric field itself:\n\n$$ W = \\frac{\\epsilon_0}{2} \\int_{all\\, space} E^2 d\\tau $$\n\nThis formula is always positive."
            },
            {
              id: "q1",
              type: "quiz",
              title: "Comparison",
              content: "Does the formula $W = \\frac{1}{2} \\sum q_i V_i$ give the same result as the field integral for point charges?",
              options: [
                { id: "1", text: "Yes", isCorrect: false, explanation: "The sum formula ignores the infinite self-energy of point charges." },
                { id: "2", text: "No", isCorrect: true, explanation: "The integral includes self-energy, which diverges for point charges." }
              ]
            }
          ]
        }
      ]
    }
  ]
};
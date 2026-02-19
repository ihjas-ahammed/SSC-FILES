import { ModuleSection } from '../types';

export const UNIT_4_2: ModuleSection = {
  id: "sec-4-2",
  title: "Unit 2: Instruments",
  description: "Potentiometers and Galvanometers.",
  color: "duo-gray",
  units: [
    {
      id: "unit-4-2-pot",
      title: "Potentiometer",
      description: "Precision voltage measurement.",
      color: "duo-gray",
      lessons: [
        {
          id: "lesson-pot-principle",
          title: "Working Principle",
          description: "V proportional to L.",
          icon: "BarChart",
          slides: [
            {
              id: "s1",
              type: "theory",
              title: "Concept",
              content: "A potentiometer measures EMF by balancing it against a potential drop across a uniform wire. No current is drawn from the source at the null point.\n\n$$ V \\propto L \\implies V = kL $$\n\nWhere $k$ is the potential gradient."
            },
            {
              id: "q1",
              type: "fill-blank",
              title: "Advantage",
              content: "A potentiometer is better than a voltmeter because it draws ",
              segments: [
                { id: "1", isBlank: true, correctValue: "zero" },
                { id: "2", text: " current at balance, measuring the true ", isBlank: false },
                { id: "3", isBlank: true, correctValue: "EMF" },
                { id: "4", text: ".", isBlank: false }
              ],
              wordBank: ["max", "zero", "EMF", "Terminal Voltage"]
            }
          ]
        },
        {
          id: "lesson-pot-app",
          title: "Applications",
          description: "Comparing EMFs and Internal Resistance.",
          icon: "Battery",
          slides: [
            {
              id: "s1",
              type: "theory",
              title: "Comparison of EMFs",
              content: "To compare two cells $E_1$ and $E_2$:\n\n$$ \\frac{E_1}{E_2} = \\frac{l_1}{l_2} $$\n\nWhere $l_1$ and $l_2$ are balancing lengths."
            },
            {
              id: "s2",
              type: "theory",
              title: "Internal Resistance",
              content: "To find internal resistance $r$ of a cell:\n\n$$ r = R \\left( \\frac{l_1 - l_2}{l_2} \\right) $$\n\n$l_1$: Open circuit length.\n$l_2$: Length with shunt resistance $R$."
            }
          ]
        }
      ]
    },
    {
      id: "unit-4-2-galvo",
      title: "Galvanometers",
      description: "Moving Coil Instruments.",
      color: "duo-gray",
      lessons: [
        {
          id: "lesson-mcg",
          title: "Moving Coil",
          description: "Torque on a current loop.",
          icon: "RotateCw",
          slides: [
            {
              id: "s1",
              type: "theory",
              title: "Principle",
              content: "A current carrying coil in a magnetic field experiences a torque:\n\n$$ \\tau = N I A B \\sin\\theta $$\n\nIn a radial field ($\\theta=90^\\circ$), $\\tau = NIAB$."
            },
            {
              id: "s2",
              type: "theory",
              title: "Current Sensitivity",
              content: "Deflection $\\alpha$ is proportional to current $I$:\n\n$$ \\alpha = \\left( \\frac{NAB}{C} \\right) I $$\n\n$C$ is the torsional constant of the suspension."
            }
          ]
        }
      ]
    }
  ]
};
import { Unit } from '../../types';

export const UNIT_1_4_1: Unit = {
  id: "unit-1-4-1",
  title: "LED Physics",
  description: "Light Emitting Diodes",
  color: "duo-orange",
  lessons: [
    {
      id: "les-1-4-1-1",
      title: "What is an LED?",
      description: "Emission basics",
      icon: "Sun",
      slides: [
        {
          id: "def",
          type: "theory",
          title: "Definition",
          content: "A **Light Emitting Diode (LED)** is a specialized diode that emits visible (or IR) light when **Forward Biased**.\n\nUnlike standard Si/Ge diodes which dissipate energy as heat, LEDs release energy as photons."
        },
        {
          id: "mech",
          type: "theory",
          title: "Mechanism",
          content: "1. Forward bias pushes electrons into p-region and holes into n-region.\n2. **Recombination** occurs near the junction.\n3. Electron falls from Conduction Band to Valence Band.\n4. Energy difference is released as Light."
        },
        {
          id: "vis",
          type: "interactive_canvas",
          title: "Recombination",
          content: "Electron dropping into a hole releases a photon.",
          interactiveCanvasId: "led-recombination"
        }
      ]
    },
    {
      id: "les-1-4-1-2",
      title: "Materials",
      description: "Why not Silicon?",
      icon: "Box",
      slides: [
        {
          id: "theory",
          type: "theory",
          title: "Band Gap Matters",
          content: "Silicon is an *Indirect Bandgap* material (energy $\\to$ heat).\n\nLEDs use Compound Semiconductors like:\n- **Gallium Arsenide (GaAs):** Infrared (IR)\n- **Gallium Phosphide (GaP):** Green/Red"
        },
        {
          id: "check",
          type: "quiz",
          title: "Material Selection",
          content: "Which material would you use for a Red LED?",
          options: [
            { id: "A", text: "Pure Silicon", isCorrect: false, explanation: "Releases heat, not light." },
            { id: "B", text: "Gallium Arsenide Phosphide", isCorrect: true, explanation: "Compound semiconductors are required for visible light." }
          ]
        }
      ]
    },
    {
      id: "les-1-4-1-3",
      title: "Circuit Symbol",
      description: "Identifying LEDs",
      icon: "Code",
      slides: [
        {
          id: "symbol",
          type: "theory",
          title: "The Symbol",
          content: "The LED symbol is a standard diode symbol with **two arrows pointing away**, indicating light emission."
        },
        {
          id: "quiz",
          type: "quiz",
          title: "Symbol Check",
          content: "If the arrows point *inwards* towards the diode, it is a:",
          options: [
            { id: "A", text: "LED", isCorrect: false, explanation: "Arrows out for emission." },
            { id: "B", text: "Photodiode", isCorrect: true, explanation: "Arrows in for detection." }
          ]
        }
      ]
    }
  ]
};
import { Unit } from '../../types';

export const UNIT_2_3_1: Unit = {
  id: "unit-2-3-1",
  title: "Filter Theory",
  description: "Smoothing pulsating DC",
  color: "duo-blue",
  lessons: [
    {
      id: "les-2-3-1-1",
      title: "What is a Filter?",
      description: "Removing the ripple",
      icon: "Activity",
      slides: [
        {
          id: "priming",
          type: "quiz",
          title: "Intuition Check",
          content: "A rectifier converts AC to DC, but the output still has 'bumps' (pulsations). What type of component would act like a shock absorber for these voltage bumps?",
          options: [
            { id: "A", text: "An Amplifier", isCorrect: false, explanation: "An amplifier just makes the bumps bigger." },
            { id: "B", text: "A Filter", isCorrect: true, explanation: "Correct! Filters smooth out the voltage." }
          ]
        },
        {
          id: "def",
          type: "theory",
          title: "Definition of a Filter",
          content: "A **Filter Circuit** is a device which removes the a.c. component (ripple) of a rectifier's output but allows the pure d.c. component to reach the load.\n\nIt is installed *between* the rectifier and the load."
        },
        {
          id: "vis",
          type: "interactive_canvas",
          title: "Block Diagram",
          content: "Visualizing the transformation from pulsating to pure DC.",
          interactiveCanvasId: "filter-block-diagram"
        },
        {
          id: "retrieval",
          type: "fill_in_blank",
          title: "Retrieval Practice",
          content: "A filter removes the ___ component and allows the d.c. component to pass.",
          blankAnswer: "a.c."
        },
        {
          id: "elab",
          type: "quiz",
          title: "Critical Thinking",
          content: "**Assertion:** A perfect, ideal filter output contains absolutely zero AC frequency.\n**Reason:** Filter circuits physically destroy electrons that oscillate.",
          options: [
            { id: "A", text: "Both True", isCorrect: false, explanation: "" },
            { id: "B", text: "Both False", isCorrect: true, explanation: "Filters store and release energy, they don't destroy electrons. And practically, a tiny ripple always remains." }
          ]
        },
        {
          id: "flash",
          type: "quiz",
          title: "Flashback",
          content: "Which rectifier has a maximum theoretical efficiency of $81.2\\%$?",
          options: [
            { id: "A", text: "Half-Wave", isCorrect: false, explanation: "Half-wave is 40.6%." },
            { id: "B", text: "Full-Wave", isCorrect: true, explanation: "Both Center-Tap and Bridge hit 81.2%." }
          ]
        }
      ]
    },
    {
      id: "les-2-3-1-2",
      title: "Capacitive Reactance",
      description: "Blocking DC",
      icon: "Cpu",
      slides: [
        {
          id: "priming",
          type: "quiz",
          title: "Intuition Check",
          content: "If a capacitor consists of two plates separated by an insulator, can direct current (DC) flow *through* it continuously?",
          options: [
            { id: "A", text: "Yes", isCorrect: false, explanation: "The insulator blocks physical charge flow." },
            { id: "B", text: "No", isCorrect: true, explanation: "It charges up and then stops DC flow completely." }
          ]
        },
        {
          id: "theory",
          type: "theory",
          title: "Reactance Formula",
          content: "The opposition a capacitor offers to alternating current is called **Capacitive Reactance ($X_C$)**.\n\n$$ X_C = \\frac{1}{2\\pi f C} $$ \n\nWhere $f$ is frequency. For DC, $f = 0$, so $X_C = \\infty$ (Infinite resistance). Thus, a capacitor passes AC readily but blocks DC."
        },
        {
          id: "retrieval",
          type: "fill_in_blank",
          title: "Reactance Check",
          content: "For a direct current (DC) signal, the frequency is ___ Hz.",
          blankAnswer: "0"
        }
      ]
    },
    {
      id: "les-2-3-1-3",
      title: "Inductive Reactance",
      description: "Passing DC",
      icon: "Wind",
      slides: [
        {
          id: "theory",
          type: "theory",
          title: "Reactance Formula",
          content: "The opposition an inductor (coil) offers to alternating current is called **Inductive Reactance ($X_L$)**.\n\n$$ X_L = 2\\pi f L $$\n\nFor DC, $f = 0$, so $X_L = 0$. Thus, an inductor passes DC perfectly but opposes AC."
        },
        {
          id: "check",
          type: "quiz",
          title: "Logic Match",
          content: "If you want to allow DC to pass but block AC, you should place a(n) ___ in *series* with the load.",
          options: [
            { id: "A", text: "Capacitor", isCorrect: false, explanation: "A series capacitor would block the DC!" },
            { id: "B", text: "Inductor", isCorrect: true, explanation: "It has zero resistance for DC, but high resistance for AC." }
          ]
        }
      ]
    }
  ]
};
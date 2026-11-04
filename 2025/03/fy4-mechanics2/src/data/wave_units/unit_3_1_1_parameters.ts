import { Unit } from '../../types';

export const UNIT_3_1_1_PARAMETERS: Unit = {
  id: "unit-3-1-1",
  title: "Wave Parameters",
  description: "Understanding the properties of a traveling wave",
  color: "duo-violet",
  lessons:[
    {
      id: "les-3-1-1-1",
      title: "Traveling Wave Definition",
      description: "How waves move through space",
      icon: "Waves",
      slides:[
        {
          id: "warmup-1",
          type: "quiz",
          title: "Conceptual Warm-up 1",
          content: "When a water wave travels across the ocean, does the water itself travel horizontally across the ocean?",
          options:[
            { id: "A", text: "Yes, the water moves with the wave.", isCorrect: false, explanation: "If that were true, all ocean water would end up piled on the shore!" },
            { id: "B", text: "No, the water mainly oscillates in place.", isCorrect: true, explanation: "In a wave, the medium oscillates but does not translate globally." }
          ]
        },
        {
          id: "warmup-2",
          type: "quiz",
          title: "Conceptual Warm-up 2",
          content: "If the medium isn't moving across the ocean, what exactly is the wave transporting?",
          options:[
            { id: "A", text: "Energy and Momentum", isCorrect: true, explanation: "Waves are a mechanism for transporting energy and momentum without transporting mass." },
            { id: "B", text: "Electric charge", isCorrect: false, explanation: "Water waves are mechanical, not electromagnetic." }
          ]
        },
        {
          id: "theory-def",
          type: "theory",
          title: "What is a Wave?",
          content: "A wave is an oscillation of a medium, such as a water wave in the ocean or a wave propagating down a stretched string.\n\nIn general, the medium as a whole does not translate. For example, water molecules move vertically up and down while the wave itself moves horizontally. A strange and interesting thing about waves is that although there is no transport of mass, the wave does transport **energy** and **momentum**."
        },
        {
          id: "canvas-1",
          type: "interactive_canvas",
          title: "Traveling Wave vs Medium",
          content: "Watch the red dot (the medium) move only vertically, while the wave peak moves horizontally.",
          interactiveCanvasId: "wave-traveling-definition"
        },
        {
          id: "proof-1",
          type: "proof",
          title: "Transverse vs Longitudinal",
          content: "We classify waves by how the medium oscillates relative to the wave velocity $\\mathbf{v}$.",
          proofSteps:[
            "Transverse wave: the material particles move perpendicular to the direction of the wave (e.g., a wave in a string).",
            "Longitudinal wave: the material particles move back and forth parallel to the direction of the wave (e.g., sound waves in air)."
          ]
        },
        {
          id: "num-1",
          type: "numerical",
          title: "Speed and Distance",
          content: "If a wave is traveling at a speed of $v = 15$ m/s, how far does the wave energy travel in $4$ seconds?",
          numericAnswer: 60,
          numericTolerance: 0.1
        },
        {
          id: "mcq-1",
          type: "quiz",
          title: "Knowledge Check",
          content: "A sound wave in air is an example of what kind of wave?",
          options:[
            { id: "A", text: "Transverse Wave", isCorrect: false, explanation: "Sound waves compress and expand the air in the same direction they travel." },
            { id: "B", text: "Longitudinal Wave", isCorrect: true, explanation: "The particles oscillate parallel to the direction of wave propagation." }
          ]
        },
        {
          id: "fib-1",
          type: "fill_in_blank",
          title: "Key Takeaway",
          content: "A wave transports energy and ___ without transporting mass.",
          blankAnswer: "momentum"
        }
      ]
    },
    {
      id: "les-3-1-1-2",
      title: "Wave Characteristics",
      description: "Amplitude, Wavelength, Period, Frequency",
      icon: "Ruler",
      slides:[
        {
          id: "warmup-1",
          type: "quiz",
          title: "Conceptual Warm-up 1",
          content: "Which parameter describes the maximum displacement of the medium from its resting equilibrium?",
          options:[
            { id: "A", text: "Wavelength", isCorrect: false, explanation: "Wavelength measures horizontal spatial distance." },
            { id: "B", text: "Amplitude", isCorrect: true, explanation: "Amplitude is the 'height' of the wave." }
          ]
        },
        {
          id: "warmup-2",
          type: "quiz",
          title: "Conceptual Warm-up 2",
          content: "If you shake a string back and forth more rapidly, what happens to the frequency of the resulting wave?",
          options:[
            { id: "A", text: "It decreases.", isCorrect: false },
            { id: "B", text: "It increases.", isCorrect: true, explanation: "More shakes per second means a higher frequency." }
          ]
        },
        {
          id: "theory-def",
          type: "theory",
          title: "Defining the Parameters",
          content: "A wave is characterized by several key physical parameters:\n\n*   **Amplitude ($A$):** The maximum displacement from equilibrium.\n*   **Wavelength ($\\lambda$):** The distance from peak to peak (spatial periodicity).\n*   **Period ($\\tau$):** The time it takes for one complete oscillation.\n*   **Frequency ($f$):** The number of oscillations per unit time. $f = 1/\\tau$."
        },
        {
          id: "canvas-2",
          type: "interactive_canvas",
          title: "Visualizing Parameters",
          content: "Amplitude $A$ measures height, Wavelength $\\lambda$ measures distance.",
          interactiveCanvasId: "wave-parameters"
        },
        {
          id: "proof-1",
          type: "proof",
          title: "Angular Frequency",
          content: "We will show that Angular frequency $\\omega = 2\\pi f = 2\\pi/\\tau$.",
          proofSteps:[
            "One complete oscillation corresponds to a full cycle of $2\\pi$ radians.",
            "The time taken for one full cycle is the period $\\tau$.",
            "Therefore, the angular rate of change is $\\omega = 2\\pi / \\tau$.",
            "Since $f = 1/\\tau$, we can substitute to get $\\omega = 2\\pi f$."
          ]
        },
        {
          id: "num-1",
          type: "numerical",
          title: "Calculating Period",
          content: "A tuning fork produces a sound wave with a frequency of $f = 50$ Hz. What is the period $\\tau$ of this wave in seconds?",
          numericAnswer: 0.02,
          numericTolerance: 0.001
        },
        {
          id: "mcq-1",
          type: "quiz",
          title: "Knowledge Check",
          content: "The distance between any two corresponding consecutive points on a wave is called the:",
          options:[
            { id: "A", text: "Period", isCorrect: false, explanation: "Period is a measurement of time, not distance." },
            { id: "B", text: "Wavelength", isCorrect: true, explanation: "Wavelength $\\lambda$ is the spatial period of the wave." }
          ]
        },
        {
          id: "fib-1",
          type: "fill_in_blank",
          title: "Key Takeaway",
          content: "The number of oscillations per unit time is called the ___.",
          blankAnswer: "frequency"
        }
      ]
    },
    {
      id: "les-3-1-1-3",
      title: "Phase Velocity",
      description: "How fast the wave travels",
      icon: "FastForward",
      slides:[
        {
          id: "warmup-1",
          type: "quiz",
          title: "Conceptual Warm-up 1",
          content: "The speed at which a wave peak moves forward through space is known as:",
          options:[
            { id: "A", text: "Angular frequency", isCorrect: false },
            { id: "B", text: "Phase velocity", isCorrect: true, explanation: "It describes the velocity of a specific 'phase' of the wave, like the crest." }
          ]
        },
        {
          id: "warmup-2",
          type: "quiz",
          title: "Conceptual Warm-up 2",
          content: "If a wave travels one full wavelength $\\lambda$ in exactly one period $\\tau$, what is its speed?",
          options:[
            { id: "A", text: "$\\lambda \\times \\tau$", isCorrect: false },
            { id: "B", text: "$\\lambda / \\tau$", isCorrect: true, explanation: "Speed is distance divided by time." }
          ]
        },
        {
          id: "theory-def",
          type: "theory",
          title: "Speed and Wave Number",
          content: "The **Speed ($v$)** of a wave tells us how fast the waveform is displaced in the direction of motion. Since it travels distance $\\lambda$ in time $\\tau$:\n$$ v = \\frac{\\lambda}{\\tau} = \\lambda f $$\n\nWe also define the **Wave number ($k$)**:\n$$ k = \\frac{2\\pi}{\\lambda} $$\nThis is analogous to angular frequency, but for space instead of time."
        },
        {
          id: "canvas-3",
          type: "interactive_canvas",
          title: "Phase Velocity",
          content: "The entire waveform shifts to the right at velocity $v$.",
          interactiveCanvasId: "wave-phase-velocity"
        },
        {
          id: "proof-1",
          type: "proof",
          title: "Relating v, w, and k",
          content: "We will prove the crucial relationship: $v = \\omega / k$.",
          proofSteps:[
            "Start with the definition of wave speed: $v = \\lambda / \\tau$.",
            "Multiply the numerator and denominator by $2\\pi$: $v = \\frac{2\\pi \\lambda}{2\\pi \\tau}$.",
            "Rearrange the terms: $v = \\frac{2\\pi/\\tau}{2\\pi/\\lambda}$.",
            "Substitute $\\omega = 2\\pi/\\tau$ and $k = 2\\pi/\\lambda$.",
            "Result: $v = \\frac{\\omega}{k}$."
          ]
        },
        {
          id: "num-1",
          type: "numerical",
          title: "Calculate Phase Velocity",
          content: "A wave has an angular frequency of $\\omega = 10\\pi$ rad/s and a wave number of $k = 2\\pi$ rad/m. What is its phase velocity in m/s?",
          numericAnswer: 5,
          numericTolerance: 0.1
        },
        {
          id: "mcq-1",
          type: "quiz",
          title: "Knowledge Check",
          content: "What is the physical meaning of the wave number $k$?",
          options:[
            { id: "A", text: "It is the number of waves that pass a point per second.", isCorrect: false, explanation: "That is frequency $f$." },
            { id: "B", text: "It is the spatial equivalent of angular frequency.", isCorrect: true, explanation: "It relates to spatial periodicity (radians per meter) just as $\\omega$ relates to temporal periodicity (radians per second)." }
          ]
        },
        {
          id: "fib-1",
          type: "fill_in_blank",
          title: "Key Takeaway",
          content: "The phase velocity of a wave is calculated by multiplying its wavelength by its ___.",
          blankAnswer: "frequency"
        }
      ]
    }
  ]
};
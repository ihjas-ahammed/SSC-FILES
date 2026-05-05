import { Unit } from '../../types';

export const UNIT_4_1_1_BASIC_PROPERTIES_THOMSON: Unit = {
  id: "unit-4-1-1",
  title: "Basic Properties & Thomson Model",
  description: "D: Properties of Atoms · T: Thomson Model · Exp: Geiger-Marsden Experiment",
  color: "duo-blue",
  lessons: [
    {
      id: "les-4-1-1-act",
      title: "Warm-Up: Probing the Atom",
      description: "Activate prior knowledge",
      icon: "Brain",
      slides: [
        {
          id: "thm-act-1",
          type: "quiz",
          title: "Priming Question 1",
          content: "By the early 1900s, scientists knew atoms contained electrons. Since atoms are electrically neutral overall, what must also be true about the atom?",
          options: [
            { id: "A", text: "It must contain an equal amount of positive charge.", isCorrect: true, explanation: "Correct. To be neutral, the negative charge of the electrons must be perfectly balanced by positive charge somewhere in the atom." },
            { id: "B", text: "It must contain antimatter.", isCorrect: false, explanation: "Antimatter wasn't discovered or proposed until much later." }
          ]
        },
        {
          id: "thm-act-2",
          type: "quiz",
          title: "Priming Question 2",
          content: "If you wanted to figure out what was inside a closed, dark room without opening the door, what would be a good physical approach?",
          options: [
            { id: "A", text: "Shoot bullets through the walls and see how they bounce off whatever is inside.", isCorrect: true, explanation: "This is exactly the logic of a scattering experiment! You fire high-energy projectiles into an atom and measure how they deflect." },
            { id: "B", text: "Wait for the objects inside to come out.", isCorrect: false, explanation: "Atoms are generally stable; their internal structure doesn't spontaneously fall out." }
          ]
        }
      ]
    },
    {
      id: "les-4-1-1-1",
      title: "Basic Properties of Atoms",
      description: "D: Size, mass, charge, and stability",
      icon: "Box",
      slides: [
        {
          id: "prop-theory",
          type: "theory",
          title: "What did we know by 1900?",
          content: "Any successful model of the atom had to explain four fundamental properties known at the time:\n\n1. **Size:** Atoms are extremely small, with radii on the order of $0.1$ nm ($10^{-10}$ m).\n2. **Stability:** Atoms do not spontaneously collapse or fly apart, so the internal forces must be in equilibrium.\n3. **Charge:** Atoms contain negatively charged electrons (proven by the photoelectric and Compton effects), but bulk matter is neutral. Thus, an atom with $Z$ electrons must contain a net positive charge of $+Ze$.\n4. **Radiation:** Atoms emit and absorb electromagnetic radiation at very specific, discrete wavelengths (line spectra)."
        },
        {
          id: "prop-q1",
          type: "quiz",
          title: "Concept Check",
          content: "Because atoms emit only specific, discrete wavelengths of light (line spectra), what does this imply about any classical model of the atom?",
          options: [
            { id: "A", text: "The electrons must oscillate or orbit at those exact specific frequencies.", isCorrect: true, explanation: "Classically, an accelerating or oscillating charge emits radiation at its frequency of oscillation. The atom must have some internal structure that dictates these specific frequencies." },
            { id: "B", text: "The atom must be a solid, rigid block.", isCorrect: false, explanation: "A rigid block wouldn't emit discrete spectral lines." }
          ]
        },
        {
          id: "prop-fitb",
          type: "fill_in_blank",
          title: "Fill in the Blank",
          content: "Because atoms are electrically ___, an atom containing $Z$ electrons must also possess a positive charge of $+Ze$.",
          blankAnswer: "neutral"
        }
      ]
    },
    {
      id: "les-4-1-1-2",
      title: "The Thomson Model",
      description: "T: The 'Plum Pudding' Model",
      icon: "Circle",
      slides: [
        {
          id: "thom-theory",
          type: "theory",
          title: "The Thomson Model (1904)",
          content: "J.J. Thomson (who discovered the electron) proposed the first major atomic model.\n\nTo satisfy the requirements of neutrality and stability, he proposed that an atom consists of a uniform sphere of positive charge $+Ze$, with radius $R \\approx 0.1$ nm.\n\nThe $Z$ tiny, negatively charged electrons are embedded throughout this positive sphere, like raisins in a plum pudding.\n\nBecause the positive charge is spread out evenly over the whole atom, the electric field and forces inside the atom are relatively weak and diffuse."
        },
        {
          id: "thom-canvas",
          type: "interactive_canvas",
          title: "The Plum Pudding Model",
          content: "Electrons embedded in a continuous, diffuse sphere of positive charge.",
          interactiveCanvasId: "thomson-plum-pudding"
        },
        {
          id: "thom-q1",
          type: "quiz",
          title: "Concept Check",
          content: "In the Thomson model, where is the mass of the atom mostly located?",
          options: [
            { id: "A", text: "It is spread uniformly throughout the entire sphere of the atom.", isCorrect: true, explanation: "Since the positive charge is spread out over the whole $0.1$ nm sphere, and electrons are very light, the mass of the atom is also assumed to be spread uniformly across the entire sphere." },
            { id: "B", text: "It is concentrated in the electrons.", isCorrect: false, explanation: "Electrons account for less than 0.1% of an atom's mass." }
          ]
        }
      ]
    },
    {
      id: "les-4-1-1-3",
      title: "Scattering Experiments",
      description: "Exp: Probing atomic structure with alpha particles",
      icon: "Target",
      slides: [
        {
          id: "scat-theory",
          type: "theory",
          title: "Probing the Atom",
          content: "To test the Thomson model, we use a **scattering experiment**. We bombard a thin foil of atoms with high-energy projectiles and measure the deflection (scattering) angle $\\theta$.\n\nThe projectiles used were **alpha particles** (helium nuclei, charge $+2e$, mass $4$ u) emitted from radioactive decay. \n\nBecause the Thomson atom's positive charge is spread out and diffuse, it cannot exert a very strong repulsive force on a fast, heavy alpha particle. The expected deflection from a single Thomson atom is tiny—around $0.01^\\circ$."
        },
        {
          id: "scat-canvas",
          type: "interactive_canvas",
          title: "Thomson Scattering",
          content: "Alpha particles pass through the diffuse Thomson atoms with almost no deflection.",
          interactiveCanvasId: "alpha-scattering-thomson"
        },
        {
          id: "scat-q1",
          type: "quiz",
          title: "Multiple Scatterings",
          content: "If one Thomson atom deflects an alpha particle by $0.01^\\circ$, what happens if the alpha particle passes through a gold foil that is 10,000 atoms thick?",
          options: [
            { id: "A", text: "It gets deflected by exactly 100 degrees ($10,000 \\times 0.01^\\circ$).", isCorrect: false, explanation: "The deflections are random in direction (up, down, left, right), so they don't simply add up linearly." },
            { id: "B", text: "The random scatterings partially cancel out, resulting in a typical total deflection of about 1 degree.", isCorrect: true, explanation: "This is a 'random walk' problem. The total expected angle is $\\theta_{total} \\approx \\sqrt{N} \\theta_{avg} = \\sqrt{10000} \\times 0.01^\\circ = 1^\\circ$." }
          ]
        }
      ]
    },
    {
      id: "les-4-1-1-4",
      title: "The Geiger-Marsden Experiment",
      description: "Exp: The surprising results of gold-foil scattering",
      icon: "Activity",
      slides: [
        {
          id: "gm-setup",
          type: "theory",
          title: "The Geiger-Marsden Experiment (1910)",
          content: "Hans Geiger and Ernest Marsden (under Ernest Rutherford's direction) set up an experiment to measure alpha particle scattering through thin gold foil.\n\nBased on the Thomson model's random walk statistics ($\\sim 1^\\circ$ average deflection), the probability of an alpha particle bouncing backward (deflecting $> 90^\\circ$) requires 10,000 consecutive deflections all in the exact same direction.\n\nStatistically, the chance of this happening is about $(1/2)^{10,000} = 10^{-3000}$. It should be fundamentally impossible."
        },
        {
          id: "gm-logic",
          type: "proof",
          title: "Interactive Logic: The Observation",
          content: "What did the experiment actually reveal?",
          interactiveSteps: [
            {
              stepText: "Geiger and Marsden patiently sat in a dark room, counting tiny flashes of light on a zinc sulfide screen placed at various angles."
            },
            {
              prompt: "When they placed the detector at angles greater than 90 degrees (behind the foil), what did they see?",
              stepText: "They observed about 1 in every 10,000 alpha particles bouncing backward!\n\nProbability observed: $10^{-4}$\nThomson prediction: $10^{-3000}$",
              options: [
                { id: "A", text: "They saw a significant number of alpha particles bouncing backward.", isCorrect: true, explanation: "Rutherford famously described it: 'It was as incredible as if you fired a 15-inch shell at a piece of tissue paper and it came back and hit you.'" },
                { id: "B", text: "They saw absolutely nothing, confirming the Thomson model.", isCorrect: false, explanation: "They saw backwards-scattered particles, which completely destroyed the Thomson model." }
              ]
            }
          ]
        },
        {
          id: "gm-q2",
          type: "quiz",
          title: "Conclusion",
          content: "Since the Thomson model physically cannot deflect an alpha particle backward, what must be true about the atom?",
          options: [
            { id: "A", text: "The positive charge must be incredibly concentrated into a tiny, dense point to exert a massive repulsive force.", isCorrect: true, explanation: "Exactly. The diffuse 'pudding' cannot stop an alpha particle. Only a highly concentrated, massive 'rock' of positive charge could cause a 180-degree bounce." },
            { id: "B", text: "The alpha particles must have had negative charge.", isCorrect: false, explanation: "Alpha particles are definitively positive." }
          ]
        }
      ]
    }
  ]
};
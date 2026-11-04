import { Unit } from '../../types';

export const UNIT_2_1_2_XRAY_DIFFRACTION: Unit = {
  id: "unit-2-1-2",
  title: "X-Ray Crystal Diffraction",
  description: "T: Bragg's Law · Exp: Laue patterns · Ex 3.1",
  color: "duo-violet",
  lessons: [
    // ── Activation ────────────────────────────────────────────────────────
    {
      id: "les-2-1-2-act",
      title: "Priming: Seeing Atoms",
      description: "Why use X-rays?",
      icon: "Brain",
      slides: [
        {
          id: "prime-1",
          type: "quiz",
          title: "Priming Question",
          content: "To get a good diffraction pattern, the slit spacing $d$ must be roughly the same size as the wavelength $\\lambda$. Atoms in a crystal are about $0.1$ nm apart. What kind of EM wave is needed to diffract off them?",
          options: [
            { id: "A", text: "Visible light ($\\sim 500$ nm)", isCorrect: false, explanation: "Visible light wavelength is too large; it won't resolve the atoms." },
            { id: "B", text: "X-rays ($\\sim 0.1$ nm)", isCorrect: true, explanation: "X-rays have the perfect wavelength to use the crystal lattice as a natural diffraction grating." }
          ]
        }
      ]
    },

    // ── Bragg's Law ───────────────────────────────────────────────────────
    {
      id: "les-2-1-2-1",
      title: "Bragg's Law",
      description: "T: Equation 3.16",
      icon: "Grid",
      slides: [
        {
          id: "bragg-theory",
          type: "theory",
          title: "X-Ray Diffraction & Bragg's Law",
          content: "Instead of a manufactured grating, we can use the regular rows of atoms in a crystal to diffract X-rays.\n\nWhen X-rays hit crystal planes spaced by distance $d$, the beam reflected from the second plane travels an extra distance of $2d \\sin\\theta$.\n\nFor constructive interference, this path difference must be a whole wavelength:\n$$\\boxed{2d \\sin\\theta = n\\lambda} \\quad (n = 1, 2, 3, \\dots)$$\n\n*Note: In X-ray diffraction, the angle $\\theta$ is measured from the **surface** of the crystal plane, not the normal!*"
        },
        {
          id: "bragg-canvas",
          type: "interactive_canvas",
          title: "Bragg Reflection",
          content: "The extra path length is $2 \times d \\sin\\theta$.",
          interactiveCanvasId: "bragg-diffraction"
        },
        {
          id: "bragg-q1",
          type: "quiz",
          title: "The Factor of 2",
          content: "Why is there a factor of 2 in Bragg's Law ($2d \\sin\\theta = n\\lambda$) but not in the standard grating equation ($d \\sin\\theta = n\\lambda$)?",
          options: [
            { id: "A", text: "Because the X-ray must travel down to the second plane AND back up.", isCorrect: true, explanation: "Yes, it reflects. The extra path is $d \\sin\\theta$ on the way in, and another $d \\sin\\theta$ on the way out." },
            { id: "B", text: "Because crystals have two dimensions.", isCorrect: false, explanation: "It's purely geometric path difference due to reflection." }
          ]
        }
      ]
    },

    // ── Example 3.1 ───────────────────────────────────────────────────────
    {
      id: "les-2-1-2-2",
      title: "Ex 3.1: Bragg Calculation",
      description: "Ex: Finding atomic spacing",
      icon: "Calculator",
      slides: [
        {
          id: "ex31-q",
          type: "example_q",
          title: "Example 3.1",
          content: "**Problem:** A single crystal of table salt (NaCl) is irradiated with X-rays of wavelength $0.250$ nm. The first Bragg reflection ($n=1$) is observed at an angle of $26.3^\\circ$.\n\nWhat is the atomic spacing $d$ of NaCl?"
        },
        {
          id: "ex31-sol",
          type: "proof",
          title: "Solution",
          content: "Use Bragg's Law: $2d \\sin\\theta = n\\lambda$.",
          interactiveSteps: [
            {
              prompt: "Rearrange to solve for $d$.",
              stepText: "$d = \\frac{n\\lambda}{2 \\sin\\theta}$",
              options: [
                { id: "A", text: "Correct", isCorrect: true, explanation: "" }
              ]
            },
            {
              prompt: "Plug in the values.",
              stepText: "$d = \\frac{(1)(0.250 \\text{ nm})}{2 \\sin(26.3^\\circ)} = \\frac{0.250}{2(0.443)} = \\frac{0.250}{0.886} \\approx 0.282 \\text{ nm}$",
              options: [
                { id: "A", text: "0.282 nm", isCorrect: true, explanation: "This allows us to measure the exact distance between atoms in a solid!" }
              ]
            }
          ]
        }
      ]
    },

    // ── Laue Patterns ─────────────────────────────────────────────────────
    {
      id: "les-2-1-2-3",
      title: "Laue Patterns",
      description: "Exp: Real crystal diffraction",
      icon: "Aperture",
      slides: [
        {
          id: "laue-theory",
          type: "theory",
          title: "Laue Patterns",
          content: "A crystal is 3-dimensional. There are many different ways to draw parallel planes through the atoms, each with a different spacing $d$.\n\nIf we shine a beam of X-rays containing a **continuous range of wavelengths** at a crystal, different wavelengths will satisfy Bragg's law for different sets of planes.\n\nThe result is a pattern of bright spots on a photographic film called a **Laue pattern**. By analyzing the geometry of the spots, scientists can deduce the exact 3D arrangement of atoms in the crystal."
        },
        {
          id: "laue-q",
          type: "quiz",
          title: "Application",
          content: "What was a famous historical application of X-ray crystallography?",
          options: [
            { id: "A", text: "Discovering the structure of DNA (Rosalind Franklin).", isCorrect: true, explanation: "Yes! The famous 'Photo 51' was an X-ray diffraction pattern that revealed the double helix of DNA." },
            { id: "B", text: "Proving that atoms have a nucleus.", isCorrect: false, explanation: "That was Rutherford's alpha scattering experiment." }
          ]
        }
      ]
    }
  ]
};
import { Unit } from '../../types';

export const UNIT_2_1_1_EM_WAVES: Unit = {
  id: "unit-2-1-1",
  title: "Review of EM Waves",
  description: "T: EM wave intensity · T: Young's Double-Slit · T: Diffraction Grating",
  color: "duo-blue",
  lessons: [
    // ── Activation ────────────────────────────────────────────────────────
    {
      id: "les-2-1-1-act",
      title: "Priming: Light as a Wave",
      description: "Activate prior thinking about wave properties",
      icon: "Brain",
      slides: [
        {
          id: "prime-1",
          type: "quiz",
          title: "Priming Question",
          content: "When two waves meet, they can pass through each other. If a peak meets a trough, what happens?",
          options: [
            { id: "A", text: "Constructive interference (they add to a bigger wave).", isCorrect: false, explanation: "That's when peak meets peak." },
            { id: "B", text: "Destructive interference (they cancel out).", isCorrect: true, explanation: "Correct. This unique property of waves creates patterns of light and dark fringes." }
          ]
        }
      ]
    },

    // ── EM Wave Intensity ─────────────────────────────────────────────────
    {
      id: "les-2-1-1-1",
      title: "EM Wave Intensity",
      description: "T: Eq 3.1 - 3.8",
      icon: "Zap",
      slides: [
        {
          id: "em-theory",
          type: "theory",
          title: "Electromagnetic Waves",
          content: "Light is a traveling wave of oscillating electric ($\\vec{E}$) and magnetic ($\\vec{B}$) fields.\n\nThe energy flux (power per unit area) is the **Poynting vector**:\n$$\\vec{S} = \\frac{1}{\\mu_0} \\vec{E} \\times \\vec{B}$$\n\nThe **Intensity** $I$ is the time-average of this power per unit area:\n$$I = \\frac{1}{2\\mu_0 c} E_0^2$$\n\n**Key Rule:** Intensity is proportional to the **square of the amplitude** ($E_0^2$). This is a general property of all classical waves."
        },
        {
          id: "em-canvas",
          type: "interactive_canvas",
          title: "EM Wave Fields",
          content: "The E and B fields are perpendicular to each other and to the direction of travel.",
          interactiveCanvasId: "em-wave-diagram"
        },
        {
          id: "em-q1",
          type: "quiz",
          title: "Intensity",
          content: "If the amplitude of the electric field in a light wave is doubled, what happens to the intensity (brightness) of the light?",
          options: [
            { id: "A", text: "It doubles.", isCorrect: false, explanation: "Intensity depends on the square of the amplitude." },
            { id: "B", text: "It quadruples (x4).", isCorrect: true, explanation: "Since $I \\propto E_0^2$, doubling $E_0$ makes $I$ four times greater." }
          ]
        }
      ]
    },

    // ── Young's Double Slit ───────────────────────────────────────────────
    {
      id: "les-2-1-1-2",
      title: "Young's Double-Slit",
      description: "T: Interference equations",
      icon: "Waves",
      slides: [
        {
          id: "ys-theory",
          type: "theory",
          title: "Double-Slit Interference",
          content: "When a plane wave passes through two narrow slits separated by distance $d$, the waves spread out (diffract) and overlap.\n\n**Constructive Interference (Bright fringes):**\nOccurs when the path difference is a whole wavelength:\n$$|X_1 - X_2| = n\\lambda \\quad (n = 0, 1, 2, \\dots)$$\n\nThe position $y_n$ of the $n^{\\text{th}}$ bright fringe on a screen at distance $D$ is:\n$$y_n = n \\frac{\\lambda D}{d}$$\n\nThis experiment (Thomas Young, 1801) was definitive proof that light behaves as a wave."
        },
        {
          id: "ys-canvas",
          type: "interactive_canvas",
          title: "Interference Pattern",
          content: "Overlapping circular waves create regions of constructive (bright) and destructive (dark) interference.",
          interactiveCanvasId: "double-slit-diagram"
        },
        {
          id: "ys-q1",
          type: "quiz",
          title: "Fringe Spacing",
          content: "Looking at $y_n = n \\frac{\\lambda D}{d}$, what happens to the spacing between bright fringes if you move the slits closer together (decrease $d$)?",
          options: [
            { id: "A", text: "The fringes get farther apart.", isCorrect: true, explanation: "Since $d$ is in the denominator, decreasing $d$ increases $y_n$. The pattern spreads out." },
            { id: "B", text: "The fringes get closer together.", isCorrect: false, explanation: "That would happen if you increased $d$." }
          ]
        },
        {
          id: "ys-num",
          type: "numerical",
          title: "Calculation",
          content: "In a double slit experiment, $\\lambda = 500$ nm, $D = 2.0$ m, and $d = 1.0$ mm ($10^{-3}$ m). What is the distance $y_1$ to the first bright fringe (in mm)?",
          numericAnswer: 1.0,
          numericTolerance: 0.05
        }
      ]
    },

    // ── Diffraction Grating ───────────────────────────────────────────────
    {
      id: "les-2-1-1-3",
      title: "Diffraction Grating",
      description: "T: Eq 3.15",
      icon: "Menu",
      slides: [
        {
          id: "dg-theory",
          type: "theory",
          title: "Diffraction Grating",
          content: "A diffraction grating has thousands of parallel slits. It produces much sharper and brighter interference maxima than a double slit.\n\nThe condition for an interference maximum at angle $\\theta$ is:\n$$d \\sin\\theta = n\\lambda \\quad (n = 1, 2, 3, \\dots)$$\n\nWhere $d$ is the spacing between adjacent slits.\n\nBecause gratings spread different wavelengths (colors) to different angles, they are used to analyze the spectra of light sources."
        },
        {
          id: "dg-q1",
          type: "quiz",
          title: "Color Separation",
          content: "According to $d \\sin\\theta = n\\lambda$, which color of light is bent (diffracted) at the largest angle?",
          options: [
            { id: "A", text: "Red light (longer wavelength).", isCorrect: true, explanation: "Larger $\\lambda$ means larger $\\sin\\theta$, so red is bent more than blue." },
            { id: "B", text: "Blue light (shorter wavelength).", isCorrect: false, explanation: "Blue light is bent less." }
          ]
        }
      ]
    }
  ]
};
import { Unit } from '../../types';

export const UNIT_4_2_1_LINE_SPECTRA: Unit = {
  id: "unit-4-2-1",
  title: "Line Spectra",
  description: "Exp: Hydrogen emission · T: Rydberg formula · D: Spectral series",
  color: "duo-blue",
  lessons: [
    // ── LESSON 1: Priming ─────────────────────────────────────────────────────────
    {
      id: "les-4-2-1-act",
      title: "Warm-Up: Colors of Atoms",
      description: "Activate prior knowledge",
      icon: "Brain",
      slides: [
        {
          id: "ls-prime-1",
          type: "quiz",
          title: "Priming Question",
          content: "When you heat a solid object (like a horseshoe) until it glows, it emits a continuous rainbow of colors (blackbody radiation). If you pass an electric current through a low-pressure gas (like neon), what kind of light does it emit?",
          options: [
            { id: "A", text: "A continuous rainbow of all colors.", isCorrect: false, explanation: "That only happens for dense solids or high-pressure gases where atoms constantly collide." },
            { id: "B", text: "Only a few specific, distinct colors.", isCorrect: true, explanation: "Correct! Gases emit 'line spectra'—discrete wavelengths unique to that element." }
          ]
        },
        {
          id: "ls-prime-2",
          type: "quiz",
          title: "The Mystery of Lines",
          content: "Classical physics predicted that an electron orbiting a nucleus should emit a continuous spectrum of light as it spirals inward. Since atoms emit only discrete lines, what does this suggest?",
          options: [
            { id: "A", text: "The classical model of a continuously spiraling electron is fundamentally wrong.", isCorrect: true, explanation: "Exactly. The discrete lines imply that the electron must exist in specific, discrete states rather than spiraling continuously." },
            { id: "B", text: "The gas absorbs all the other colors.", isCorrect: false, explanation: "No, the other colors are never emitted in the first place." }
          ]
        }
      ]
    },

    // ── LESSON 2: Exp: Hydrogen emission spectrum ─────────────────────────────────
    {
      id: "les-4-2-1-1",
      title: "Exp: Hydrogen Emission",
      description: "Observing the discrete lines of hydrogen",
      icon: "Activity",
      slides: [
        {
          id: "ls-exp-1",
          type: "theory",
          title: "The Emission Spectrum",
          content: "If we pass an electric discharge through a tube containing atomic hydrogen gas, the gas glows. If we pass this emitted light through a prism or diffraction grating, we do not see a continuous rainbow.\n\nInstead, we see a **line spectrum** consisting of distinct, sharp lines of specific colors. For hydrogen in the visible region, four prominent lines are seen:\n- Red (656.1 nm)\n- Blue-green (486.0 nm)\n- Blue-violet (434.0 nm)\n- Violet (410.1 nm)\n\nThis pattern is incredibly regular and mathematically precise, begging for a theoretical explanation."
        },
        {
          id: "ls-exp-canvas",
          type: "interactive_canvas",
          title: "Hydrogen Line Spectra",
          content: "The specific wavelengths emitted by hydrogen gas.",
          interactiveCanvasId: "hydrogen-line-spectra"
        },
        {
          id: "ls-exp-q1",
          type: "quiz",
          title: "Observation",
          content: "What did early physicists observe about the spacing of the lines in the hydrogen spectrum as they went toward shorter wavelengths (toward the violet end)?",
          options: [
            { id: "A", text: "The lines get closer and closer together, approaching a limit.", isCorrect: true, explanation: "The lines converge toward a specific 'series limit' in the ultraviolet." },
            { id: "B", text: "The lines get farther and farther apart.", isCorrect: false, explanation: "They actually crowd together." }
          ]
        }
      ]
    },

    // ── LESSON 3: T: Rydberg formula ──────────────────────────────────────────────
    {
      id: "les-4-2-1-2",
      title: "The Rydberg Formula",
      description: "The mathematical rule describing the spectral lines",
      icon: "FunctionSquare",
      slides: [
        {
          id: "ryd-theory",
          type: "theory",
          title: "The Rydberg Formula",
          content: "In 1885, a Swiss teacher named Johann Balmer found a mathematical formula that perfectly predicted the visible lines of hydrogen by trial and error. This was later generalized by Johannes Rydberg to predict *all* lines of hydrogen.\n\n$$\\frac{1}{\\lambda} = R_\\infty \\left( \\frac{1}{n_f^2} - \\frac{1}{n_i^2} \\right)$$\n\nWhere:\n- $\\lambda$ is the emitted wavelength.\n- $R_\\infty = 1.097 \\times 10^7 \\text{ m}^{-1}$ is the Rydberg constant.\n- $n_f$ and $n_i$ are integers ($n_i > n_f \\ge 1$).\n\nThis formula was purely empirical—it worked, but nobody knew *why* it worked until Bohr came along."
        },
        {
          id: "ryd-q1",
          type: "quiz",
          title: "Understanding the Formula",
          content: "According to the Rydberg formula, what happens to the wavelength $\\lambda$ as the initial integer $n_i$ gets very large ($n_i \\to \\infty$)?",
          options: [
            { id: "A", text: "The wavelength becomes infinite.", isCorrect: false, explanation: "Look at the term $1/n_i^2$. As $n_i \\to \\infty$, $1/n_i^2 \\to 0$." },
            { id: "B", text: "The wavelength approaches a minimum, non-zero constant limit.", isCorrect: true, explanation: "Yes! The term $1/n_i^2$ goes to zero, leaving $1/\\lambda = R_\\infty / n_f^2$. This minimum wavelength is called the 'series limit'." }
          ]
        }
      ]
    },

    // ── LESSON 4: D: Spectral Series ──────────────────────────────────────────────
    {
      id: "les-4-2-1-3",
      title: "The Spectral Series",
      description: "Lyman, Balmer, Paschen, Brackett, Pfund",
      icon: "Menu",
      slides: [
        {
          id: "ser-theory",
          type: "theory",
          title: "The Hydrogen Series",
          content: "The integer $n_f$ determines the specific \"series\" of spectral lines:\n\n- **Lyman Series** ($n_f = 1$): Ultraviolet region.\n- **Balmer Series** ($n_f = 2$): Visible region (the lines Balmer originally saw).\n- **Paschen Series** ($n_f = 3$): Infrared region.\n- **Brackett Series** ($n_f = 4$): Infrared region.\n- **Pfund Series** ($n_f = 5$): Infrared region.\n\nFor any series, plugging in $n_i = n_f + 1$ gives the longest wavelength line, and taking $n_i \\to \\infty$ gives the shortest wavelength (the series limit)."
        },
        {
          id: "ser-q1",
          type: "quiz",
          title: "Series Identification",
          content: "If a hydrogen atom emits a photon in the visible light spectrum, which series does it belong to?",
          options: [
            { id: "A", text: "Lyman series ($n_f = 1$)", isCorrect: false, explanation: "Lyman is ultraviolet." },
            { id: "B", text: "Balmer series ($n_f = 2$)", isCorrect: true, explanation: "The Balmer series transitions end at $n=2$ and produce the visible colors." },
            { id: "C", text: "Paschen series ($n_f = 3$)", isCorrect: false, explanation: "Paschen is infrared." }
          ]
        },
        {
          id: "ser-fitb",
          type: "fill_in_blank",
          title: "Fill in the Blank",
          content: "The series of hydrogen spectral lines that appears in the ultraviolet region corresponds to a final state of $n_f =$ ___.",
          blankAnswer: "1"
        }
      ]
    },

    // ── LESSON 5: Ex: Balmer line calculation ─────────────────────────────────────
    {
      id: "les-4-2-1-4",
      title: "Ex: Balmer Line Calculation",
      description: "Ex: Calculating the red line of hydrogen",
      icon: "Calculator",
      slides: [
        {
          id: "ex-balmer-q",
          type: "example_q",
          title: "Calculating a Balmer Line",
          content: "**Problem:**\nCalculate the wavelength of the longest-wavelength line in the Balmer series of hydrogen.\n\n*Hint:* For the Balmer series, $n_f = 2$. For the longest wavelength, we need the smallest energy jump, which comes from the very next integer, $n_i = 3$."
        },
        {
          id: "ex-balmer-sol",
          type: "proof",
          title: "Interactive Solution",
          content: "Use the Rydberg formula: $\\frac{1}{\\lambda} = R_\\infty \\left( \\frac{1}{n_f^2} - \\frac{1}{n_i^2} \\right)$.",
          interactiveSteps: [
            {
              stepText: "Plug in $n_f = 2$ and $n_i = 3$:\n$$\\frac{1}{\\lambda} = R_\\infty \\left( \\frac{1}{2^2} - \\frac{1}{3^2} \\right)$$"
            },
            {
              prompt: "Calculate the value in the parentheses.",
              stepText: "$$\\frac{1}{4} - \\frac{1}{9} = \\frac{9}{36} - \\frac{4}{36} = \\frac{5}{36}$$",
              options: [
                { id: "A", text: "$5/36$", isCorrect: true, explanation: "" }
              ]
            },
            {
              prompt: "Solve for $\\lambda$.",
              stepText: "$$\\frac{1}{\\lambda} = R_\\infty \\left( \\frac{5}{36} \\right) \\implies \\lambda = \\frac{36}{5 R_\\infty}$$",
              options: [
                { id: "A", text: "Proceed", isCorrect: true, explanation: "" }
              ]
            },
            {
              prompt: "Plug in $R_\\infty = 1.097 \\times 10^7 \\text{ m}^{-1}$.",
              stepText: "$$\\lambda = \\frac{36}{5 (1.097 \\times 10^7)} \\approx 656.1 \\text{ nm}$$",
              options: [
                { id: "A", text: "$656.1$ nm", isCorrect: true, explanation: "This perfectly matches the prominent red line (H-alpha) observed in the hydrogen spectrum!" }
              ]
            }
          ]
        }
      ]
    }
  ]
};
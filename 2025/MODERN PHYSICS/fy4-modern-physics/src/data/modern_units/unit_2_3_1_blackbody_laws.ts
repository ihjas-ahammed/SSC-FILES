import { Unit } from '../../types';

export const UNIT_2_3_1_BLACKBODY_LAWS: Unit = {
  id: "unit-2-3-1",
  title: "Blackbody Radiation Laws",
  description: "Exp: Setup & observations · T: Stefan-Boltzmann & Wien's displacement laws",
  color: "duo-orange",
  lessons: [
    // ── 1. Priming ────────────────────────────────────────────────────────
    {
      id: "les-2-3-1-act",
      title: "Priming: Heat and Color",
      description: "Real world examples of thermal radiation",
      icon: "Brain",
      slides: [
        {
          id: "thm-act-1",
          type: "quiz",
          title: "Warm-Up Check",
          content: "As you heat a piece of iron in a furnace, its color visibly changes. What color progression do you typically see as it gets hotter?",
          options: [
            { id: "A", text: "Dim red → Yellow → Bright white", isCorrect: true, explanation: "Correct! Cooler glowing things are red; hotter things shift toward yellow and eventually white (a blend of all visible colors, peaking near the blue/UV end)." },
            { id: "B", text: "White → Yellow → Dull red", isCorrect: false, explanation: "Reversed. It starts out red before progressing toward white-hot." },
            { id: "C", text: "It stays the same color but gets brighter.", isCorrect: false, explanation: "The color actually shifts to shorter wavelengths as it gets hotter." }
          ]
        },
        {
          id: "thm-act-2",
          type: "quiz",
          title: "What about us?",
          content: "Living humans have a body temperature of about 37°C. Does the human body emit electromagnetic radiation like the hot iron?",
          options: [
            { id: "A", text: "No, humans are too cold to emit radiation.", isCorrect: false, explanation: "ALL objects above absolute zero emit thermal radiation! Our eyes just aren't sensitive to the wavelengths we emit." },
            { id: "B", text: "Yes, but mostly in the infrared region, invisible to our eyes.", isCorrect: true, explanation: "Exactly. Infrared cameras can spot people in the dark by detecting their natural thermal radiation." }
          ]
        }
      ]
    },

    // ── 2. Experimental Setup ─────────────────────────────────────────────
    {
      id: "les-2-3-1-1",
      title: "Exp: The Ideal Blackbody",
      description: "Defining and experimenting with Blackbody radiation",
      icon: "Box",
      slides: [
        {
          id: "bb-theory",
          type: "theory",
          title: "What is a 'Blackbody'?",
          content: "Measuring the precise emission spectrum of an object can be complicated by its specific material properties (like texture or pigment). To understand thermal radiation fundamentally, we define an ideal reference.\n\nA **Blackbody** is an object that absorbs ALL electromagnetic radiation incident on it (reflecting nothing). Consequently, it is also a perfect emitter of radiation, and its emission spectrum depends *exclusively* on its temperature $T$.\n\n**Experimental Setup (Fig 3.12 & 3.14):** \nA practical blackbody is a hollow cavity with a tiny hole. Radiation entering the hole bounces around inside until absorbed. The radiation escaping the hole is a perfect sample of the thermal radiation inside the cavity, dependent only on the wall's temperature."
        },
        {
          id: "bb-exp",
          type: "proof",
          title: "Experimental Logic",
          content: "How do we measure the spectrum?",
          interactiveSteps: [
            {
              stepText: "**Step 1:** Heat the cavity to a uniform temperature $T$. Radiation escapes through the tiny hole."
            },
            {
              prompt: "**Step 2:** Pass the escaping light through a prism or diffraction grating. What does this accomplish?",
              stepText: "The prism separates the radiation into its component wavelengths.",
              options: [
                { id: "A", text: "It separates the radiation into its component wavelengths.", isCorrect: true, explanation: "This allows us to measure the intensity of the radiation $I(\\lambda)$ at each specific wavelength $\\lambda$." },
                { id: "B", text: "It increases the temperature of the light.", isCorrect: false, explanation: "A prism only disperses light; it does not change its energy or temperature." }
              ]
            },
            {
              prompt: "**Step 3:** Use a detector to measure the intensity at each angle (wavelength). What type of spectrum is observed?",
              stepText: "The result is a **continuous spectrum** (a smooth curve) of all wavelengths, with a distinct peak that depends on $T$.",
              options: [
                { id: "A", text: "A discrete line spectrum (only specific colors).", isCorrect: false, explanation: "Thermal radiation produces a broad, continuous spectrum, unlike the sharp lines from atomic gases." },
                { id: "B", text: "A continuous spectrum of all wavelengths.", isCorrect: true, explanation: "Blackbody radiation spans a continuous range of wavelengths from 0 to infinity." }
              ]
            }
          ]
        },
        {
          id: "bb-q1",
          type: "quiz",
          title: "Observation Check",
          content: "If a perfect blackbody absorbs 100% of incident light and reflects nothing, why does it appear brightly colored when heated in a furnace?",
          options: [
            { id: "A", text: "Because it emits its own thermal electromagnetic radiation based on its temperature.", isCorrect: true, explanation: "\"Black\" simply means no reflection. A blackbody glows brightly with emitted thermal radiation if it is hot enough." },
            { id: "B", text: "Because the definition of a blackbody breaks down at high temperatures.", isCorrect: false, explanation: "The definition holds at all temperatures." }
          ]
        }
      ]
    },

    // ── 3. Stefan-Boltzmann Law ───────────────────────────────────────────
    {
      id: "les-2-3-1-2",
      title: "Stefan-Boltzmann Law",
      description: "Mapping total emission intensity to temperature",
      icon: "Sun",
      slides: [
        {
          id: "sb-theory",
          type: "theory",
          title: "Stefan-Boltzmann Law",
          content: "By measuring the area under the blackbody spectrum curve, we find the **total intensity** $I$ (total power radiated per unit area) across *all* wavelengths.\n\nExperiment shows that this total intensity increases dramatically as the object gets hotter. Specifically, it scales with the **fourth power** of the absolute temperature:\n\n$$\\boxed{I = \\sigma T^4} \\qquad \\text{(Eq. 3.24)}$$\n\nWhere:\n- $T$ is the absolute temperature in Kelvin (K).\n- $\\sigma$ is the Stefan-Boltzmann constant: $\\sigma \\approx 5.67 \\times 10^{-8} \\text{ W/(m}^2 \\cdot \\text{K}^4)$."
        },
        {
          id: "sb-q1",
          type: "quiz",
          title: "Conceptual Check 1",
          content: "Suppose you double the Kelvin temperature of a thermal source (e.g., from 1000 K to 2000 K). How does the total radiated intensity change?",
          options: [
            { id: "A", text: "It doubles (increases by a factor of 2).", isCorrect: false, explanation: "Intensity scales with $T^4$, not linearly with $T$." },
            { id: "B", text: "It increases by a factor of 16.", isCorrect: true, explanation: "Since $I \\propto T^4$, doubling the temperature results in $2^4 = 16$ times more radiated power!" }
          ]
        },
        {
          id: "sb-q2",
          type: "quiz",
          title: "Conceptual Check 2",
          content: "Can you use the Celsius scale directly in the Stefan-Boltzmann equation?",
          options: [
            { id: "A", text: "Yes, Celsius and Kelvin use the same degree size.", isCorrect: false, explanation: "While the degree size is the same, the zero points differ. At $0^\\circ\\text{C}$, an object still radiates energy because it is at 273 K. You MUST use Kelvin." },
            { id: "B", text: "No, you must use the absolute Kelvin scale.", isCorrect: true, explanation: "The equation $I = \\sigma T^4$ requires absolute temperature. Radiation only stops at absolute zero (0 K)." }
          ]
        },
        {
          id: "bb-canvas",
          type: "interactive_canvas",
          title: "Interactive Spectrum & Temp Curve",
          content: "Notice how the total area under the curve (total intensity) explodes upward as you increase the temperature.",
          interactiveCanvasId: "blackbody-spectrum"
        },
        {
          id: "sb-num",
          type: "numerical",
          title: "Numerical Application",
          content: "An object is at room temperature, $T = 300$ K. Calculate the total thermal radiation intensity $I$ emitted from its surface in $\\text{W/m}^2$. \n\nUse $\\sigma = 5.67 \\times 10^{-8}$.",
          numericAnswer: 459.27,
          numericTolerance: 2.0
        },
        {
          id: "sb-fitb",
          type: "fill_in_blank",
          title: "Fill in the Blank",
          content: "The total intensity radiated by a blackbody is proportional to the ___ power of its absolute temperature.",
          blankAnswer: "fourth"
        }
      ]
    },

    // ── 4. Wien's displacement Law ────────────────────────────────────────
    {
      id: "les-2-3-1-3",
      title: "Wien's Displacement Law",
      description: "Formula for the peak wavelength shift",
      icon: "SignalHigh",
      slides: [
        {
          id: "wien-theory",
          type: "theory",
          title: "Wien's Displacement Law",
          content: "Look at the peak of the blackbody curve. As the temperature increases, the wavelength at which the emitted intensity reaches its maximum ($\\lambda_{\\text{max}}$) shifts to the left (toward shorter wavelengths).\n\nExperimentally, this relationship is perfectly inverse:\n\n$$\\boxed{\\lambda_{\\text{max}} T = 2.8978 \\times 10^{-3} \\text{ m}\\cdot\\text{K}} \\qquad \\text{(Eq. 3.25)}$$\n\nThis explains why heated objects glow red first (long visible wavelength), then yellow, and eventually blue-white (short visible wavelength) as they get hotter."
        },
        {
          id: "wien-q1",
          type: "quiz",
          title: "Conceptual Check 1",
          content: "If the temperature of a blackbody is halved, what happens to its peak emission wavelength $\\lambda_{\\text{max}}$?",
          options: [
            { id: "A", text: "It is halved.", isCorrect: false, explanation: "They are inversely proportional, not directly proportional." },
            { id: "B", text: "It doubles.", isCorrect: true, explanation: "Since $\\lambda_{\\text{max}} \\propto 1/T$, halving $T$ means $\\lambda_{\\text{max}}$ becomes twice as long." }
          ]
        },
        {
          id: "wien-q2",
          type: "quiz",
          title: "Blue hot vs Red hot",
          content: "Based on Wien's Law, which star has a hotter surface?",
          options: [
            { id: "A", text: "A star glowing with a red color.", isCorrect: false, explanation: "Red light has a longer wavelength, which corresponds to a lower temperature." },
            { id: "B", text: "A star glowing with a blue color.", isCorrect: true, explanation: "Blue light has a shorter wavelength. A shorter $\\lambda_{\\text{max}}$ requires a higher temperature $T$." }
          ]
        },
        {
          id: "wien-canvas",
          type: "interactive_canvas",
          title: "Peak Displacement",
          content: "Observe the white dot marking $\\lambda_{\\text{max}}$. As temperature rises, it moves left toward the ultraviolet.",
          interactiveCanvasId: "blackbody-spectrum"
        },
        {
          id: "wien-num",
          type: "numerical",
          title: "Numerical Application",
          content: "The Sun's surface temperature is approximately $5800$ K. Using Wien's law (constant $= 2.898 \\times 10^{-3} \\text{ m}\\cdot\\text{K}$), find the Sun's peak emission wavelength $\\lambda_{\\text{max}}$ in nanometers (nm).",
          numericAnswer: 500,
          numericTolerance: 5
        },
        {
          id: "wien-fitb",
          type: "fill_in_blank",
          title: "Fill in the Blank",
          content: "Wien's displacement law states that the peak wavelength is ___ proportional to the absolute temperature.",
          blankAnswer: "inversely"
        }
      ]
    },

    // ── 5. Example 3.6 ────────────────────────────────────────────────────
    {
      id: "les-2-3-1-4",
      title: "Ex 3.6: Human Body & Hot Objects",
      description: "Numerical application of Wien & Stefan",
      icon: "Calculator",
      slides: [
        {
          id: "ex36-setup",
          type: "example_q",
          title: "Example 3.6",
          content: "**Problem:**\n(a) At what wavelength does a room-temperature ($T = 20^{\\circ}\\mathrm{C}$) object emit the maximum thermal radiation?\n\n(b) To what temperature must we heat it until its peak thermal radiation is in the red region of the spectrum ($\\lambda = 650$ nm)?\n\n(c) How many times as much thermal radiation does it emit at the higher temperature?"
        },
        {
          id: "ex36-sol",
          type: "proof",
          title: "Interactive Solution",
          content: "Applying Wien's Law and Stefan's Law.",
          interactiveSteps: [
            {
               stepText : "**Step 1:** Convert Celsius to Kelvin: $T_1 = 20 + 273 = 293$ K."
            }, 
            {
               prompt: "Part (a): Find the peak wavelength for a human body at 293 K.",
               stepText: "$$\\lambda_{\\text{max}} = \\frac{2.898 \\times 10^{-3} \\text{ m}\\cdot\\text{K}}{293 \\text{ K}} \\approx 9.89 \\times 10^{-6} \\text{ m} = 9.89 \\ \\mu\\text{m}$$", 
               options: [ 
                 { id: "A", text: "$9.89 \\ \\mu\\text{m}$ (Infrared)", isCorrect: true, explanation: "Correct! This falls deep in the infrared region, which is why we can't see human body heat with the naked eye." },
                 { id: "B", text: "$989$ nm (Visible)", isCorrect: false, explanation: "Check your powers of 10. It is $9.89 \\times 10^{-6}$ m." }
               ]
            }, 
            {
               prompt: "Part (b): Find $T_2$ required to shift the peak to $\\lambda = 650$ nm ($650 \\times 10^{-9}$ m).",
               stepText: "$$T_2 = \\frac{2.898 \\times 10^{-3} \\text{ m}\\cdot\\text{K}}{650 \\times 10^{-9} \\text{ m}} \\approx 4460 \\text{ K}$$", 
               options: [ 
                 { id: "A", text: "$4460$ K", isCorrect: true, explanation: "You have to heat an object to nearly 4500 Kelvin to make it glow bright red!" }
               ]
            },
            {
               prompt: "Part (c): What is the ratio of total intensities $I_2 / I_1$?",
               stepText: "Using Stefan's Law ($I = \\sigma T^4$):\n$$\\frac{I_2}{I_1} = \\frac{\\sigma T_2^4}{\\sigma T_1^4} = \\left(\\frac{4460}{293}\\right)^4 \\approx 5.37 \\times 10^4$$", 
               options: [ 
                 { id: "A", text: "About $53,700$ times more radiation", isCorrect: true, explanation: "Correct! The $T^4$ dependence means that a 15-fold increase in temperature leads to an enormous $15^4$ increase in total power output." }
               ]
            }
          ]
        },
        {
          id: "ex36-method",
          type: "quiz",
          title: "Method Check",
          content: "Why was the very first step in part (a) to add 273 to the temperature?",
          options: [
            { id: "A", text: "To convert from Celsius to Kelvin.", isCorrect: true, explanation: "Wien's law and Stefan's law only work with absolute temperature (Kelvin)." },
            { id: "B", text: "To account for room temperature background.", isCorrect: false, explanation: "No, it's just a unit conversion." }
          ]
        },
        {
          id: "ex36-num",
          type: "numerical",
          title: "Variation Problem",
          content: "A distant star has a peak emission wavelength of $966$ nm. What is its surface temperature in Kelvin? \n(Use constant $= 2.898 \\times 10^{-3}$ m·K)",
          numericAnswer: 3000,
          numericTolerance: 10
        }
      ]
    }
  ]
};
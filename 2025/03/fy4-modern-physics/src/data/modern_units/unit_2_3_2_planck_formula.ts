import { Unit } from '../../types';

export const UNIT_2_3_2_PLANCK_FORMULA: Unit = {
  id: "unit-2-3-2",
  title: "Planck's Radiation Formula",
  description: "Deriving resolution to UV Catastrophe and quantum concept definitions constraints limits",
  color: "duo-blue",
  lessons: [
    // ── 1. Priming ────────────────────────────────────────────────────────
    {
      id: "les-2-3-2-act",
      title: "Priming: The Catastrophe",
      description: "Why classical physics broke down",
      icon: "AlertOctagon",
      slides: [
        {
          id: "uv-prime-1",
          type: "quiz",
          title: "Warm-Up 1",
          content: "In classical physics, an oscillating system (like a pendulum or an atom in a cavity wall) can have any arbitrary amount of energy. What if a vending machine only accepted exactly $1 bills and gave no change?",
          options: [
            { id: "A", text: "You could spend $1.50.", isCorrect: false, explanation: "No change is given, and it only accepts $1 bills." },
            { id: "B", text: "You can only spend in discrete, integer amounts ($1, $2, $3...).", isCorrect: true, explanation: "This is the essence of quantization. Energy can only be exchanged in specific 'chunks' or quanta." }
          ]
        },
        {
          id: "uv-prime-2",
          type: "quiz",
          title: "Warm-Up 2",
          content: "Classical thermodynamics predicted that in a heated cavity, there is an infinite number of highly-packed short wavelengths (ultraviolet and beyond), and each gets an equal share of thermal energy ($kT$). What does this predict for the total energy emitted?",
          options: [
            { id: "A", text: "It approaches infinity.", isCorrect: true, explanation: "This impossible result is known as the Ultraviolet Catastrophe. An oven would emit lethal infinite X-rays as soon as you turned it on!" },
            { id: "B", text: "It smoothly goes to zero.", isCorrect: false, explanation: "That's what actually happens in reality, but classical physics predicted infinity." }
          ]
        }
      ]
    },

    // ── 2. Planck's Quantization & Energy Quantum ─────────────────────────
    {
      id: "les-2-3-2-1",
      title: "Planck's Quantization",
      description: "T: Discrete energy of oscillators & D: Energy quantum",
      icon: "Coins",
      slides: [
        {
          id: "planck-theory",
          type: "theory",
          title: "Planck's Quantization Hypothesis",
          content: "In 1900, Max Planck proposed a radical mathematical trick to solve the blackbody problem. He suggested that the atomic oscillators in the cavity walls cannot have just *any* continuous energy.\n\nInstead, they can only emit or absorb energy in discrete bundles (quanta) that are integer multiples of a basic quantity $\\epsilon$:\n\n$$E_n = n\\epsilon \\qquad (n = 1, 2, 3, \\dots)$$\n\nHe further defined this fundamental quantum of energy to be proportional to the frequency $f$ of the oscillator:\n\n$$\\epsilon = hf$$\n\nWhere $h$ is a new fundamental constant of nature, now known as **Planck's constant**."
        },
        {
          id: "planck-q1",
          type: "quiz",
          title: "Conceptual Check 1",
          content: "According to Planck's hypothesis, what does the integer $n$ represent in $E_n = n hf$?",
          options: [
            { id: "A", text: "The number of energy quanta (bundles) the oscillator possesses.", isCorrect: true, explanation: "Correct. An oscillator can have 1 quantum ($hf$), 2 quanta ($2hf$), but nothing in between." },
            { id: "B", text: "The frequency of the light.", isCorrect: false, explanation: "Frequency is $f$. $n$ is just a counting integer." }
          ]
        },
        {
          id: "planck-q2",
          type: "quiz",
          title: "Conceptual Check 2",
          content: "Can a Planck oscillator have an energy of exactly $1.5 hf$?",
          options: [
            { id: "A", text: "Yes, if it is hot enough.", isCorrect: false, explanation: "No, energy must be an integer multiple of $hf$." },
            { id: "B", text: "No, it must be an integer multiple of $hf$.", isCorrect: true, explanation: "The energy states are discrete steps: $hf, 2hf, 3hf$, etc." }
          ]
        },
        {
          id: "planck-num",
          type: "numerical",
          title: "Energy of a Quantum",
          content: "Calculate the energy quantum $\\epsilon = hf$ in electron-volts (eV) for light with frequency $f = 5.0 \\times 10^{14}$ Hz. \n\nUse $h = 4.136 \\times 10^{-15} \\text{ eV}\\cdot\\text{s}$.",
          numericAnswer: 2.07,
          numericTolerance: 0.05
        },
        {
          id: "planck-fitb",
          type: "fill_in_blank",
          title: "Fill in the Blank",
          content: "Planck proposed that the energy of an oscillator is ___, meaning it can only take on discrete values.",
          blankAnswer: "quantized"
        }
      ]
    },

    // ── 3. Derivation: Resolving the UV Catastrophe ───────────────────────
    {
      id: "les-2-3-2-2",
      title: "Der: Resolving the UV Catastrophe",
      description: "How quantization fixes the math",
      icon: "ShieldCheck",
      slides: [
        {
          id: "der-uv-theory",
          type: "theory",
          title: "Goal: Fix the Average Energy",
          content: "**The Classical Failure:**\nClassical thermodynamics (Maxwell-Boltzmann distribution) integrated continuously over all possible energies and found the average energy per standing wave is always $E_{av} = kT$. \nThis led to the disastrous Rayleigh-Jeans formula: $I(\\lambda) = \\frac{2\\pi c}{\\lambda^4} kT$. As $\\lambda \\to 0$, $I \\to \\infty$.\n\n**Planck's Goal:**\nRecalculate $E_{av}$ using a discrete sum instead of a continuous integral, using $E = nhf$ and $f = c/\\lambda$.\n\n**Result (Eq 3.38):**\n$$E_{av} = \\frac{hc/\\lambda}{e^{hc/\\lambda kT} - 1}$$"
        },
        {
          id: "der-uv-steps",
          type: "proof",
          title: "Interactive Derivation: The Limit",
          content: "Let's see how Planck's new $E_{av}$ behaves at the dangerous short wavelengths.",
          interactiveSteps: [
            {
              stepText: "Planck's average energy is: $E_{av} = \\frac{hc/\\lambda}{e^{hc/\\lambda kT} - 1}$"
            },
            {
              prompt: "Consider the ultraviolet limit where wavelength gets very small: $\\lambda \\to 0$. What happens to the exponent $hc/\\lambda kT$?",
              stepText: "As $\\lambda \to 0$, the fraction $1/\\lambda \to \\infty$. Therefore, the exponent $hc/\\lambda kT \to \\infty$.",
              options: [
                { id: "A", text: "It approaches infinity.", isCorrect: true, explanation: "Correct. A tiny denominator makes the fraction huge." }
              ]
            },
            {
              prompt: "If the exponent approaches $\\infty$, what happens to the term $e^{hc/\\lambda kT}$ in the denominator of $E_{av}$?",
              stepText: "The exponential $e^{\\infty}$ grows incredibly fast, dominating everything else. It approaches $\\infty$.",
              options: [
                { id: "A", text: "It approaches infinity.", isCorrect: true, explanation: "Yes. The denominator of the $E_{av}$ equation blows up to infinity." }
              ]
            },
            {
              prompt: "Finally, if the denominator goes to infinity much faster than the numerator, what happens to the average energy $E_{av}$ as $\\lambda \\to 0$?",
              stepText: "Because the exponential denominator grows faster than the $1/\\lambda$ numerator, the whole fraction $E_{av} \to 0$.",
              options: [
                { id: "A", text: "$E_{av} \\to 0$", isCorrect: true, explanation: "This is the miracle! By quantizing energy, the high-frequency waves have essentially ZERO average energy, shutting down the UV catastrophe!" },
                { id: "B", text: "$E_{av} \\to \\infty$", isCorrect: false, explanation: "That was the classical error." }
              ]
            }
          ]
        },
        {
          id: "der-uv-meaning",
          type: "quiz",
          title: "Physical Meaning",
          content: "Physically, why does quantization cause high-frequency (short $\\lambda$) oscillators to have near-zero average energy?",
          options: [
            { id: "A", text: "Because the minimum energy 'chunk' ($hf$) is so large that the thermal energy ($kT$) rarely has enough to trigger even the first step ($n=1$).", isCorrect: true, explanation: "Exactly. If the 'vending machine' requires a $100 bill (high $hf$), and you only have pennies ($kT$), you can't buy anything. The high-frequency modes remain unexcited!" },
            { id: "B", text: "Because high frequencies travel slower.", isCorrect: false, explanation: "All EM waves travel at $c$." }
          ]
        },
        {
          id: "der-uv-num",
          type: "numerical",
          title: "Classical Limit",
          content: "At long wavelengths ($\\lambda \\to \\infty$), the exponent is very small. The approximation $e^x \\approx 1 + x$ can be used. \nSubstitute $e^{hc/\\lambda kT} \\approx 1 + \\frac{hc}{\\lambda kT}$ into $E_{av}$. What does it simplify to? (Answer with the multiplier of $kT$)",
          numericAnswer: 1,
          numericTolerance: 0.1
        }
      ]
    },

    // ── 4. Planck's Radiation Formula ───────────────────────────────────────
    {
      id: "les-2-3-2-3",
      title: "Planck's Radiation Formula",
      description: "T: Eq 3.39 - The complete spectrum",
      icon: "FunctionSquare",
      slides: [
        {
          id: "prf-theory",
          type: "theory",
          title: "Planck's Radiation Formula",
          content: "By multiplying the number of standing waves by the new, correct average energy $E_{av}$, Planck derived the complete equation for the intensity of blackbody radiation:\n\n$$\\boxed{I(\\lambda) = \\frac{2\\pi hc^2}{\\lambda^5} \\left[ \\frac{1}{e^{hc/\\lambda kT} - 1} \\right]} \\qquad \\text{(Eq. 3.39)}$$\n\nThis single formula perfectly matches experimental data at ALL wavelengths.\n- At large $\\lambda$, it simplifies to the classical Rayleigh-Jeans law.\n- At small $\\lambda$, the exponential term forces the intensity to zero, matching Wien's observations and preventing the UV catastrophe."
        },
        {
          id: "prf-q1",
          type: "quiz",
          title: "Conceptual Check 1",
          content: "Does Planck's formula agree with the classical Rayleigh-Jeans formula under any conditions?",
          options: [
            { id: "A", text: "Yes, at very long wavelengths (low frequencies).", isCorrect: true, explanation: "At long wavelengths, the energy quanta $hf$ are so small that energy seems continuous again, and quantum mechanics reduces to classical mechanics (Correspondence Principle)." },
            { id: "B", text: "No, they contradict each other everywhere.", isCorrect: false, explanation: "Classical physics is an approximation of quantum physics at low energies." }
          ]
        },
        {
          id: "prf-canvas",
          type: "interactive_canvas",
          title: "Planck vs Classical",
          content: "Notice how the Classical (Rayleigh-Jeans) curve blows up to infinity on the left, while Planck's curve gently falls back to zero.",
          interactiveCanvasId: "uv-catastrophe"
        },
        {
          id: "prf-fitb",
          type: "fill_in_blank",
          title: "Fill in the Blank",
          content: "Planck's constant $h$ is a fundamental constant of nature that characterizes the scale of ___ mechanics.",
          blankAnswer: "quantum"
        }
      ]
    },

    // ── 5. Example 3.7 ────────────────────────────────────────────────────
    {
      id: "les-2-3-2-4",
      title: "Ex 3.7: Intensity in an Interval",
      description: "Applying Planck's formula",
      icon: "Target",
      slides: [
        {
          id: "ex37-q",
          type: "example_q",
          title: "Example 3.7",
          content: "**Problem:** You use a radiometer to observe a heated object at $T = 1278$ K. The radiometer records radiation in a small wavelength interval $d\\lambda = 12.6$ nm.\n\nYou set the radiometer to measure at the peak wavelength $\\lambda_{\\text{max}} = 2267$ nm.\n\nWhat is the intensity of the emitted radiation *in this specific interval*? ($I(\\lambda)d\\lambda$)"
        },
        {
          id: "ex37-sol",
          type: "proof",
          title: "Interactive Solution",
          content: "We use $I(\\lambda) d\\lambda$ directly.",
          interactiveSteps: [
            {
              stepText: "**Step 1:** Calculate $kT$ in eV. \n$kT = (8.617 \\times 10^{-5} \\text{ eV/K})(1278 \\text{ K}) = 0.1101$ eV."
            },
            {
              prompt: "The exponent is $hc / (\\lambda kT)$. Using $hc = 1240 \\text{ eV}\\cdot\\text{nm}$ and $\\lambda = 2267$ nm, we calculate the exponent.",
              stepText: "**Step 2:** $\\frac{1240}{(2267)(0.1101)} \\approx 4.96$. \nSo the term is $e^{4.96} - 1 \\approx 142.6 - 1 = 141.6$.",
              options: [
                { id: "A", text: "Proceed", isCorrect: true, explanation: "" }
              ]
            },
            {
              prompt: "Multiply the constants $2\\pi hc^2 / \\lambda^5$ by the interval $d\\lambda$ and divide by 141.6.",
              stepText: "**Step 3:** The full calculation gives $552 \\text{ W/m}^2$.",
              options: [
                { id: "A", text: "552 W/m²", isCorrect: true, explanation: "This is the precise power delivered in just that tiny 12.6 nm slice of the spectrum." }
              ]
            }
          ]
        },
        {
          id: "ex37-method",
          type: "quiz",
          title: "Method Check",
          content: "Why did we just multiply $I(\\lambda)$ by $d\\lambda$ instead of performing an integral?",
          options: [
            { id: "A", text: "Because $d\\lambda$ (12.6 nm) is very small compared to the spectrum width, so $I(\\lambda)$ is roughly constant across it.", isCorrect: true, explanation: "For very narrow intervals, the area under the curve is just a rectangle: height $I(\\lambda)$ times width $d\\lambda$." },
            { id: "B", text: "Because Planck's formula cannot be integrated.", isCorrect: false, explanation: "It can be integrated (yielding Stefan's Law over all wavelengths), but it's unnecessary for a tiny slice." }
          ]
        },
        {
          id: "ex37-interp",
          type: "quiz",
          title: "Application",
          content: "What is a practical use of radiometers orbiting Earth?",
          options: [
            { id: "A", text: "Measuring the temperatures of land, sea, and clouds by detecting their thermal radiation peaks.", isCorrect: true, explanation: "Satellites use this exact math to map global temperatures from space!" },
            { id: "B", text: "Reflecting light back to Earth.", isCorrect: false, explanation: "Radiometers are passive detectors, not mirrors." }
          ]
        }
      ]
    }
  ]
};
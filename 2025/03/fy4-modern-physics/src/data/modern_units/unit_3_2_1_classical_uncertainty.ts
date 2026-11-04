import { Unit } from '../../types';

export const UNIT_3_2_1_CLASSICAL_UNCERTAINTY: Unit = {
  id: "unit-3-2-1",
  title: "Uncertainty Relationships for Classical Waves",
  description: "Wave packet limits, bandwidth, and pulse duration: ΔxΔk ≥ 1 and ΔtΔω ≥ 1",
  color: "duo-blue",
  lessons: [
    // ── LESSON 1: Priming ─────────────────────────────────────────────────────────
    {
      id: "les-3-2-1-act",
      title: "Priming: Localizing Waves",
      description: "Activate prior thinking about wave properties",
      icon: "Brain",
      slides: [
        {
          id: "cu-prime-1",
          type: "quiz",
          title: "Priming Question 1",
          content: "A pure sine wave goes on forever from $-\\infty$ to $+\\infty$. If you were asked to point to exactly 'where' this wave is located, what would you say?",
          options: [
            { id: "A", text: "It is located at the origin (x = 0).", isCorrect: false, explanation: "A pure sine wave has no start or end; it is equally present everywhere." },
            { id: "B", text: "It is everywhere, so its exact location is completely uncertain.", isCorrect: true, explanation: "Correct! To have a perfectly defined wavelength, the wave must be infinite. Therefore, its position is entirely undefined." }
          ]
        },
        {
          id: "cu-prime-2",
          type: "quiz",
          title: "Priming Question 2",
          content: "Imagine listening to an extremely short 'click' or burst of sound lasting only a fraction of a millisecond. Would it be easy or difficult to identify its exact musical pitch (frequency)?",
          options: [
            { id: "A", text: "Very easy, short sounds are clearer.", isCorrect: false, explanation: "Actually, to determine a frequency, you need to observe multiple cycles of the wave." },
            { id: "B", text: "Very difficult, because there isn't enough of the wave to measure its cycles.", isCorrect: true, explanation: "Exactly. A highly localized wave pulse (short duration) inherently has a highly uncertain frequency. This is a fundamental property of all waves!" }
          ]
        }
      ]
    },

    // ── LESSON 2: Theory & Derivation: Position-Wavenumber ────────────────────────
    {
      id: "les-3-2-1-1",
      title: "Position-Wavenumber Uncertainty",
      description: "T & Der: Deriving ΔxΔk ~ 1",
      icon: "Waves",
      slides: [
        {
          id: "cu-theory-1",
          type: "theory",
          title: "Wave Packets and Localization",
          content: "To describe a localized particle, we cannot use a pure, infinite sine wave. Instead, we use a **wave packet**—a wave disturbance confined to a finite region $\\Delta x$.\n\nWhen we measure the length of a wave packet to find its wavelength $\\lambda$, there is always some uncertainty $\\Delta \\lambda$ in locating the exact start and end of the packet. \n\nIf the packet contains $N$ cycles, its size is $\\Delta x \\approx N\\lambda$. The uncertainty in finding the start/end is roughly a fraction $\\epsilon$ of a wavelength, so $\\Delta \\lambda \\sim \\epsilon\\lambda / N$.\n\nMultiplying these gives a fundamental classical wave relationship:\n$$\\Delta x \\Delta \\lambda \\sim \\epsilon \\lambda^2$$"
        },
        {
          id: "cu-der-1",
          type: "proof",
          title: "Interactive Derivation: Wavenumber Uncertainty",
          content: "**Goal:** Convert $\\Delta x \\Delta \\lambda \\sim \\epsilon \\lambda^2$ into a relationship between position $\\Delta x$ and wavenumber $\\Delta k$.\n\nRecall that wavenumber is defined as $k = \\frac{2\\pi}{\\lambda}$.",
          interactiveSteps: [
            {
              stepText: "Take the differential of $k = 2\\pi/\\lambda$ to relate $dk$ to $d\\lambda$.\n$$dk = -\\frac{2\\pi}{\\lambda^2} d\\lambda$$"
            },
            {
              prompt: "Convert the differentials to uncertainties (magnitudes, dropping the minus sign). What is $\\Delta k$?",
              stepText: "$$\\Delta k \\approx \\frac{2\\pi}{\\lambda^2} \\Delta \\lambda$$",
              options: [
                { id: "A", text: "$\\Delta k \\approx \\frac{2\\pi}{\\lambda^2} \\Delta \\lambda$", isCorrect: true, explanation: "Correct! The spread in wavenumber is proportional to the spread in wavelength." },
                { id: "B", text: "$\\Delta k \approx 2\\pi \\Delta \\lambda$", isCorrect: false, explanation: "Don't forget the derivative of $1/\\lambda$ gives $1/\\lambda^2$." }
              ]
            },
            {
              prompt: "Rearrange this to solve for $\\Delta \\lambda$ and substitute it into the initial equation $\\Delta x \\Delta \\lambda \\sim \\epsilon \\lambda^2$.",
              stepText: "$$\\Delta \\lambda \approx \\frac{\\lambda^2}{2\\pi} \\Delta k$$\nSubstitute:\n$$\\Delta x \\left( \\frac{\\lambda^2}{2\\pi} \\Delta k \\right) \\sim \\epsilon \\lambda^2$$",
              options: [
                { id: "A", text: "Substitute $\\Delta \\lambda = (\\lambda^2 / 2\\pi)\\Delta k$", isCorrect: true, explanation: "The $\\lambda^2$ terms will now cancel beautifully." }
              ]
            },
            {
              prompt: "Cancel $\\lambda^2$ and simplify. What is the final relationship?",
              stepText: "Multiplying both sides by $2\\pi$ yields:\n$$\\Delta x \\Delta k \\sim 2\\pi \\epsilon$$\nSince $\\epsilon$ is roughly on the order of 0.1 to 1, the product is on the order of unity:\n$$\\boxed{\\Delta x \\Delta k \\sim 1}$$",
              options: [
                { id: "A", text: "$\\Delta x \\Delta k \\sim 1$", isCorrect: true, explanation: "This shows that making the wave packet shorter (small $\\Delta x$) requires combining waves with a wider spread of wavenumbers (large $\\Delta k$)." }
              ]
            }
          ]
        },
        {
          id: "cu-q1",
          type: "quiz",
          title: "Physical Interpretation",
          content: "If you want to construct a very tightly localized wave packet (extremely small $\\Delta x$), what must you do?",
          options: [
            { id: "A", text: "Add together many waves with a very large spread of different wavelengths.", isCorrect: true, explanation: "To get a small $\\Delta x$, $\\Delta k$ (and thus the spread of wavelengths) must be very large. You need extreme destructive interference everywhere except the tiny packet region." },
            { id: "B", text: "Use a single pure sine wave of very high frequency.", isCorrect: false, explanation: "A single sine wave always has $\\Delta x = \\infty$, regardless of its frequency." }
          ]
        },
        {
          id: "cu-canvas-1",
          type: "interactive_canvas",
          title: "Wave Packet Uncertainty",
          content: "Adjust the width of the wave packet. Notice how a narrow packet requires a broad range of wavenumbers (momenta).",
          interactiveCanvasId: "wave-packet-uncertainty"
        }
      ]
    },

    // ── LESSON 3: Theory & Derivation: Frequency-Time ─────────────────────────────
    {
      id: "les-3-2-1-2",
      title: "Frequency-Time Uncertainty",
      description: "T & Der: Deriving ΔtΔω ~ 1",
      icon: "Clock",
      slides: [
        {
          id: "ct-theory-1",
          type: "theory",
          title: "Time Duration and Frequency",
          content: "Instead of looking at the wave across space ($x$), let's look at it over time ($t$). \n\nImagine a measuring device trying to determine the period $T$ of a short wave packet that lasts for a duration $\\Delta t \approx N T$. \n\nAs before, there is a tiny uncertainty $\\epsilon T$ in finding the start/end of the packet, leading to an uncertainty in the period of $\\Delta T \\sim \\epsilon T / N$.\n\nMultiplying duration and period uncertainty gives:\n$$\\Delta t \\Delta T \\sim \\epsilon T^2$$"
        },
        {
          id: "ct-der-1",
          type: "proof",
          title: "Interactive Derivation: Frequency Uncertainty",
          content: "**Goal:** Convert $\\Delta t \\Delta T \\sim \\epsilon T^2$ into a relationship between duration $\\Delta t$ and frequency $\\Delta f$ (or angular frequency $\\Delta \\omega$).",
          interactiveSteps: [
            {
              stepText: "Recall that frequency is the inverse of the period: $f = \\frac{1}{T}$."
            },
            {
              prompt: "Take the differential to relate $df$ to $dT$, then convert to absolute uncertainties.",
              stepText: "$$df = -\\frac{1}{T^2} dT \\implies \\Delta f \\approx \\frac{\\Delta T}{T^2}$$",
              options: [
                { id: "A", text: "$\\Delta f \\approx \\frac{\\Delta T}{T^2}$", isCorrect: true, explanation: "Correct." }
              ]
            },
            {
              prompt: "Rearrange to solve for $\\Delta T$ and substitute into the original equation $\\Delta t \\Delta T \\sim \\epsilon T^2$.",
              stepText: "$$\\Delta T \approx T^2 \\Delta f$$\nSubstitute:\n$$\\Delta t (T^2 \\Delta f) \\sim \\epsilon T^2$$",
              options: [
                { id: "A", text: "Substitute $\\Delta T = T^2 \\Delta f$", isCorrect: true, explanation: "The $T^2$ terms will cancel out perfectly." }
              ]
            },
            {
              prompt: "Cancel $T^2$ and state the relationship. Then, convert to angular frequency $\\omega = 2\\pi f$.",
              stepText: "$$\\Delta t \\Delta f \\sim \\epsilon$$\nSince $\\omega = 2\\pi f$, we have $\\Delta \\omega = 2\\pi \\Delta f$. Therefore:\n$$\\Delta t \\left( \\frac{\\Delta \\omega}{2\\pi} \\right) \\sim \\epsilon \\implies \\boxed{\\Delta t \\Delta \\omega \\sim 1}$$",
              options: [
                { id: "A", text: "$\\Delta t \\Delta f \\sim \\epsilon$, or $\\Delta t \\Delta \\omega \\sim 1$", isCorrect: true, explanation: "This means a signal with a short duration MUST have a wide spread of frequencies (bandwidth)." }
              ]
            }
          ]
        },
        {
          id: "ct-q1",
          type: "quiz",
          title: "Telecommunications Link",
          content: "In digital communications, you send bits of data as very short pulses of light or voltage. To send data faster, you must make the pulses shorter (smaller $\\Delta t$). What is the consequence for the signal?",
          options: [
            { id: "A", text: "The signal requires a much larger frequency bandwidth (large $\\Delta f$).", isCorrect: true, explanation: "Because $\\Delta t \\Delta f \sim 1$, extremely short pulses span a massive range of frequencies. This is why high-speed internet requires high-bandwidth cables (like fiber optics)!" },
            { id: "B", text: "The signal's frequency becomes perfectly precise.", isCorrect: false, explanation: "Short duration means highly UNCERTAIN (spread out) frequency." }
          ]
        }
      ]
    },

    // ── LESSON 4: Worked Example (Water waves & bandwidth) ───────────────────────
    {
      id: "les-3-2-1-3",
      title: "Example: Bandwidth & Pulse Duration",
      description: "Ex: Applying classical wave uncertainty (Ex 4.4 and Ex 4.5 analogs)",
      icon: "Calculator",
      slides: [
        {
          id: "c-ex-q1",
          type: "example_q",
          title: "Pulse Duration and Bandwidth",
          content: "**Problem:**\nA radar transmitter emits a short pulse of electromagnetic radiation to bounce off an airplane. The pulse has a duration of $\\Delta t = 1.27 \\ \\mu\\text{s}$.\n\nThe receiver must be tuned to accept a range of frequencies to capture the full returning pulse.\n\nUsing the classical relationship $\\Delta f \\Delta t \\sim 1$, what is the minimum frequency bandwidth $\\Delta f$ the receiver must accept?"
        },
        {
          id: "c-ex-sol1",
          type: "proof",
          title: "Interactive Solution",
          content: "We use the relationship $\\Delta f \\Delta t \\sim 1$.",
          interactiveSteps: [
            {
              stepText: "We are given the duration of the wave packet: $\\Delta t = 1.27 \\times 10^{-6}$ s."
            },
            {
              prompt: "Rearrange the uncertainty relationship to solve for the frequency spread $\\Delta f$.",
              stepText: "$$\\Delta f \\sim \\frac{1}{\\Delta t}$$",
              options: [
                { id: "A", text: "$\\Delta f \\sim 1 / \\Delta t$", isCorrect: true, explanation: "" }
              ]
            },
            {
              prompt: "Calculate the bandwidth.",
              stepText: "$$\\Delta f \\sim \\frac{1}{1.27 \\times 10^{-6} \\text{ s}} \\approx 7.87 \\times 10^5 \\text{ Hz}$$",
              options: [
                { id: "A", text: "$\\approx 787$ kHz", isCorrect: true, explanation: "The receiver must be tuned to accept a bandwidth of at least ~787 kHz to successfully process the radar pulse without distorting its shape." }
              ]
            }
          ]
        },
        {
          id: "c-ex-q2",
          type: "quiz",
          title: "Conceptual Check",
          content: "An electronics salesman claims his new device can measure the frequency of a signal to an accuracy of $0.01$ Hz by sampling the signal for only $\\Delta t = 1$ second. Is this claim valid?",
          options: [
            { id: "A", text: "Yes, modern electronics are that good.", isCorrect: false, explanation: "Electronics cannot beat the fundamental physics of waves." },
            { id: "B", text: "No, a 1-second sample inherently limits frequency precision to $\\Delta f \\sim 1$ Hz.", isCorrect: true, explanation: "Because $\\Delta f \\Delta t \\sim 1$, sampling for 1 second gives an inherent physical uncertainty of about 1 Hz. The salesman's claim is exaggerated by a factor of 100!" }
          ]
        }
      ]
    }
  ]
};
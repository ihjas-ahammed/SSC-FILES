import { Unit } from '../../types';

export const UNIT_3_3_1_WAVE_PACKETS: Unit = {
  id: "unit-3-3-1",
  title: "Wave Packets & Group Velocity",
  description: "D: Wave packet · T: Phase vs Group Velocity · Der: vg = dw/dk · Ex: Ocean Waves",
  color: "duo-blue",
  lessons: [
    // ── LESSON 1: Priming ─────────────────────────────────────────────────────────
    {
      id: "les-3-3-1-act",
      title: "Priming: Localizing a Wave",
      description: "Activate prior thinking about building wave packets",
      icon: "Brain",
      slides: [
        {
          id: "wp-prime-1",
          type: "quiz",
          title: "Priming Question 1",
          content: "A pure sine wave $y = A \\cos(kx - \\omega t)$ extends infinitely from $-\\infty$ to $+\\infty$. If we want a wave to represent a real particle localized in a small region of space, what must we do?",
          options: [
            { id: "A", text: "Multiply it by zero everywhere except where the particle is.", isCorrect: false, explanation: "Mathematically, this creates sharp, discontinuous edges, which violates the laws of smooth wave mechanics." },
            { id: "B", text: "Add together many sine waves of slightly different wavelengths.", isCorrect: true, explanation: "Correct! By adding waves of different wavelengths, they constructively interfere in one small region and destructively interfere everywhere else. This is called a Wave Packet." }
          ]
        },
        {
          id: "wp-prime-2",
          type: "quiz",
          title: "Priming Question 2",
          content: "When you add two sound waves of slightly different frequencies together, what auditory phenomenon do you hear?",
          options: [
            { id: "A", text: "A single continuous tone.", isCorrect: false, explanation: "They interfere." },
            { id: "B", text: "Beats (the sound pulses loud and soft).", isCorrect: true, explanation: "Exactly! The waves go in and out of phase, creating an 'envelope' or 'beat' pattern. A wave packet is essentially a single, isolated beat!" }
          ]
        }
      ]
    },

    // ── LESSON 2: Theory: Constructing a Wave Packet ──────────────────────────────
    {
      id: "les-3-3-1-1",
      title: "Constructing a Wave Packet",
      description: "T: Adding continuous waves to localize a particle",
      icon: "Layers",
      slides: [
        {
          id: "wp-theory-1",
          type: "theory",
          title: "Building a Wave Packet",
          content: "To represent a localized particle, we construct a **wave packet**—a disturbance that is large in a finite region $\\Delta x$ and nearly zero elsewhere.\n\nWe build this by summing (integrating) over a continuous range of wavenumbers $k$:\n$$y(x) = \\int A(k) \\cos(kx) \\, dk \\qquad (\\text{Eq. 4.23})$$\n\nIf we use a Gaussian distribution for the amplitudes $A(k)$, centered at $k_0$, we get a Gaussian wave packet:\n$$y(x) = A_0 \\Delta k \\sqrt{2\\pi} e^{-(\\Delta k x)^2/2} \\cos(k_0 x)$$\n\nNotice the two parts: a high-frequency internal oscillation $\\cos(k_0 x)$ governed by the central wavelength, wrapped inside a modulating envelope $e^{-(\\Delta k x)^2/2}$ that confines it."
        },
        {
          id: "wp-q1",
          type: "quiz",
          title: "Conceptual Check",
          content: "In the expression for a wave packet, there is an inverse relationship between $\\Delta x$ (the physical width of the packet) and $\\Delta k$ (the spread of wavenumbers used). If you want to make the particle highly localized (small $\\Delta x$), what must you do to $\\Delta k$?",
          options: [
            { id: "A", text: "Make $\\Delta k$ very small (use only a few wavelengths).", isCorrect: false, explanation: "Using only a few wavelengths creates a very spread-out wave." },
            { id: "B", text: "Make $\\Delta k$ very large (use a massive range of different wavelengths).", isCorrect: true, explanation: "Yes! The relationship $\\Delta x \\Delta k \\sim 1$ requires a broad spectrum of waves to build a tight, localized spike." }
          ]
        },
        {
          id: "wp-fitb",
          type: "fill_in_blank",
          title: "Fill in the Blank",
          content: "A localized particle is represented in quantum mechanics by a wave ___, which is formed by adding together many waves of different wavelengths.",
          blankAnswer: "packet"
        }
      ]
    },

    // ── LESSON 3: Theory & Definition: Phase vs Group Velocity ────────────────────
    {
      id: "les-3-3-1-2",
      title: "Phase vs. Group Velocity",
      description: "D: The difference between the ripples and the envelope",
      icon: "ArrowRight",
      slides: [
        {
          id: "vg-theory-1",
          type: "theory",
          title: "Phase Velocity vs. Group Velocity",
          content: "When a wave packet moves, it has two distinct speeds:\n\n1. **Phase Velocity ($v_{\\text{phase}}$):** The speed at which the individual 'ripples' or wave crests move. \n$$v_{\\text{phase}} = \\frac{\\omega}{k}$$\n\n2. **Group Velocity ($v_{\\text{group}}$):** The speed at which the overall envelope (the packet itself) moves.\n$$v_{\\text{group}} = \\frac{d\\omega}{dk} \\qquad (\\text{Eq. 4.28})$$\n\nIn a **non-dispersive medium** (like light in a vacuum), all wavelengths travel at the same speed. Here, $v_{\\text{phase}} = v_{\\text{group}}$.\nIn a **dispersive medium** (like light in glass, or de Broglie waves everywhere), different wavelengths travel at different speeds, meaning the ripples can move faster or slower than the envelope itself!"
        },
        {
          id: "vg-canvas",
          type: "interactive_canvas",
          title: "Visualizing Phase and Group Velocity",
          content: "Watch carefully: The internal peaks (phase) move at a different speed than the overall pulse envelope (group).",
          interactiveCanvasId: "wave-packet-motion"
        },
        {
          id: "vg-q1",
          type: "quiz",
          title: "Conceptual Check",
          content: "Which velocity represents the physical speed of the particle the wave packet is describing?",
          options: [
            { id: "A", text: "The phase velocity.", isCorrect: false, explanation: "The phase velocity just tracks internal ripples, which don't correspond to the bulk transport of the particle." },
            { id: "B", text: "The group velocity.", isCorrect: true, explanation: "The group velocity tracks the envelope, which is where the probability of finding the particle is concentrated. The particle moves with the group!" }
          ]
        }
      ]
    },

    // ── LESSON 4: Derivation: Group Velocity of Matter Waves ──────────────────────
    {
      id: "les-3-3-1-3",
      title: "Deriving Group Velocity",
      description: "Der: Showing vg = v_particle",
      icon: "ArrowRightCircle",
      slides: [
        {
          id: "vg-der-start",
          type: "theory",
          title: "Goal: Group Speed of de Broglie Waves",
          content: "We stated that the particle moves with the wave packet. Now we must prove it.\n\n**Given:**\n- Group velocity: $v_{\\text{group}} = \\frac{d\\omega}{dk}$\n- Energy relation: $E = \\hbar \\omega$\n- Momentum relation: $p = \\hbar k$\n\n**Goal (Eq. 4.31):**\n$$\\boxed{v_{\\text{group}} = v_{\\text{particle}}}$$"
        },
        {
          id: "vg-der-steps",
          type: "proof",
          title: "Interactive Derivation",
          content: "Let's connect wave properties to particle kinematics.",
          interactiveSteps: [
            {
              stepText: "Since $E = \\hbar \\omega$ and $p = \\hbar k$, their differentials are $dE = \\hbar d\\omega$ and $dp = \\hbar dk$."
            },
            {
              prompt: "Substitute these into the definition of group velocity $v_{\\text{group}} = \\frac{d\\omega}{dk}$.",
              stepText: "$$v_{\\text{group}} = \\frac{dE/\\hbar}{dp/\\hbar} = \\frac{dE}{dp} \\qquad (\\text{Eq. 4.29})$$",
              options: [
                { id: "A", text: "$v_{\\text{group}} = \\frac{dE}{dp}$", isCorrect: true, explanation: "Correct. The group velocity of a quantum wave is the derivative of Energy with respect to momentum." }
              ]
            },
            {
              prompt: "Now consider a classical particle with kinetic energy $E = K = \\frac{p^2}{2m}$. Find $\\frac{dE}{dp}$.",
              stepText: "$$\\frac{dE}{dp} = \\frac{d}{dp}\\left(\\frac{p^2}{2m}\\right) = \\frac{2p}{2m} = \\frac{p}{m}$$",
              options: [
                { id: "A", text: "$\\frac{dE}{dp} = \\frac{p}{m}$", isCorrect: true, explanation: "" }
              ]
            },
            {
              prompt: "Since $p = mv$, what does $p/m$ equal?",
              stepText: "Since $\\frac{p}{m} = v_{\\text{particle}}$, we conclude:\n$$v_{\\text{group}} = \\frac{dE}{dp} = v_{\\text{particle}}$$",
              options: [
                { id: "A", text: "$v_{\\text{group}} = v_{\\text{particle}}$", isCorrect: true, explanation: "The math proves it! The wave packet perfectly shadows the particle. Wherever the particle goes, its wave packet envelope moves at the exact same speed." }
              ]
            }
          ]
        },
        {
          id: "vg-der-q1",
          type: "quiz",
          title: "Physical Interpretation",
          content: "What does $v_{\\text{group}} = v_{\\text{particle}}$ imply about the wave nature of matter?",
          options: [
            { id: "A", text: "A particle can never outrun or escape its own wave nature.", isCorrect: true, explanation: "Because their speeds are identical, the de Broglie wave packet travels exactly alongside the particle at all times." },
            { id: "B", text: "The particle oscillates back and forth inside the wave packet.", isCorrect: false, explanation: "The particle's location is described probabilistically by the packet, but its bulk speed matches the packet's speed." }
          ]
        }
      ]
    },

    // ── LESSON 5: Example 4.12 (Ocean Waves) ──────────────────────────────────────
    {
      id: "les-3-3-1-4",
      title: "Ex 4.12: Group Velocity of Ocean Waves",
      description: "Ex: Calculating phase vs group velocity in a physical medium",
      icon: "Waves",
      slides: [
        {
          id: "ex412-q",
          type: "example_q",
          title: "Example 4.12 — Ocean Waves",
          content: "**Problem:**\nCertain ocean waves travel with a phase velocity $v_{\\text{phase}} = \\sqrt{\\frac{g\\lambda}{2\\pi}}$, where $g$ is the acceleration due to gravity.\n\nWhat is the group velocity $v_{\\text{group}}$ of a wave packet formed by these waves? \n\n*Hint: Convert $v_{\\text{phase}}$ into a relation between $\\omega$ and $k$, then use $v_{\\text{group}} = \\frac{d\\omega}{dk}$.*"
        },
        {
          id: "ex412-sol",
          type: "proof",
          title: "Interactive Solution",
          content: "Let's find the dispersion relation $\\omega(k)$.",
          interactiveSteps: [
            {
              stepText: "Since $k = \\frac{2\\pi}{\\lambda}$, we can write the phase velocity as:\n$$v_{\\text{phase}} = \\sqrt{\\frac{g}{k}}$$"
            },
            {
              prompt: "We know by definition $v_{\\text{phase}} = \\frac{\\omega}{k}$. Set these equal and solve for $\\omega$.",
              stepText: "$$\\frac{\\omega}{k} = \\sqrt{\\frac{g}{k}} \\implies \\omega = k \\sqrt{\\frac{g}{k}} = \\sqrt{gk}$$",
              options: [
                { id: "A", text: "$\\omega = \\sqrt{gk}$", isCorrect: true, explanation: "Correct. This is the dispersion relation for deep water waves." }
              ]
            },
            {
              prompt: "Now calculate $v_{\\text{group}} = \\frac{d\\omega}{dk}$ by taking the derivative of $\\omega = \\sqrt{g} \\cdot k^{1/2}$.",
              stepText: "$$v_{\\text{group}} = \\frac{d}{dk} (\\sqrt{g} k^{1/2}) = \\sqrt{g} \\left( \\frac{1}{2} k^{-1/2} \\right) = \\frac{1}{2} \\sqrt{\\frac{g}{k}}$$",
              options: [
                { id: "A", text: "$v_{\\text{group}} = \\frac{1}{2} \\sqrt{\\frac{g}{k}}$", isCorrect: true, explanation: "" }
              ]
            },
            {
              prompt: "Express $v_{\\text{group}}$ in terms of $v_{\\text{phase}}$.",
              stepText: "Since $v_{\\text{phase}} = \\sqrt{\\frac{g}{k}}$, we have:\n$$v_{\\text{group}} = \\frac{1}{2} v_{\\text{phase}}$$",
              options: [
                { id: "A", text: "$v_{\\text{group}} = \\frac{1}{2} v_{\\text{phase}}$", isCorrect: true, explanation: "Fascinating! In deep water, the wave envelope moves exactly half as fast as the individual ripples inside it!" }
              ]
            }
          ]
        }
      ]
    },

    // ── LESSON 6: Theory: Wave Packet Spreading ──────────────────────────────────
    {
      id: "les-3-3-1-5",
      title: "Wave Packet Spreading",
      description: "T: Why localized particles don't stay localized",
      icon: "Expand",
      slides: [
        {
          id: "spread-theory",
          type: "theory",
          title: "The Spreading of a Wave Packet",
          content: "Suppose we confine a particle tightly at time $t=0$, so its initial position uncertainty $\\Delta x_0$ is very small.\n\nAccording to Heisenberg, this implies a large uncertainty in its initial momentum $\\Delta p_{x0}$, which means a large uncertainty in its velocity: $\\Delta v_{x0} = \\Delta p_{x0} / m$.\n\nBecause we don't know exactly how fast it is moving, as time passes, our uncertainty in *where* it is grows! The total uncertainty in position at time $t$ is the combination of its initial fuzziness and the velocity spread over time:\n\n$$\\Delta x = \\sqrt{(\\Delta x_0)^2 + (\\Delta v_{x0} t)^2} \\qquad (\\text{Eq. 4.32})$$"
        },
        {
          id: "spread-q1",
          type: "quiz",
          title: "The Paradox of Confinement",
          content: "What happens if we try to make a particle's initial position perfectly precise ($\\Delta x_0 \\to 0$)?",
          options: [
            { id: "A", text: "It stays perfectly localized forever.", isCorrect: false, explanation: "If $\\Delta x_0 \to 0$, then $\\Delta p_{x0} \to \\infty$." },
            { id: "B", text: "Its wave packet expands infinitely rapidly.", isCorrect: true, explanation: "Yes! A perfectly localized particle has infinite momentum uncertainty. $\\Delta v_{x0} \to \\infty$, so the packet immediately blows up and spreads everywhere in space. The harder you squeeze it, the faster it escapes!" }
          ]
        }
      ]
    }
  ]
};
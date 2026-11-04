import { Unit } from '../../types';

export const UNIT_1_4_3_CONSERVATION_LAWS: Unit = {
  id: "unit-1-4-3",
  title: "Conservation Laws in Collisions",
  description: "T: Relativistic energy/momentum conservation · Ex 2.18–2.21",
  color: "duo-violet",
  lessons: [
    // ── Theory: Conservation Laws ─────────────────────────────────────────
    {
      id: "les-1-4-3-1",
      title: "Relativistic Conservation Laws",
      description: "T: How to analyze relativistic collisions",
      icon: "ShieldCheck",
      slides: [
        {
          id: "cons-theory",
          type: "theory",
          title: "Conservation of Energy and Momentum",
          content: "In relativistic collisions and decays, we use two fundamental rules for isolated systems:\n\n1. **Conservation of Total Relativistic Momentum:**\n   $$\\sum \\mathbf{p}_{\\text{initial}} = \\sum \\mathbf{p}_{\\text{final}}$$\n   *(Note: This is a vector equation!)*\n\n2. **Conservation of Total Relativistic Energy:**\n   $$\\sum E_{\\text{initial}} = \\sum E_{\\text{final}}$$\n   *(Remember: $E = K + mc^2$. Rest energy is included!)*\n\n**Crucial Difference from Classical:** In classical inelastic collisions, Kinetic Energy is lost (turned into heat/internal energy). In relativistic collisions, this \"lost\" kinetic energy physically increases the **rest mass** of the products!"
        },
        {
          id: "cons-q1",
          type: "quiz",
          title: "Conceptual Check",
          content: "In a relativistic inelastic collision where particles stick together, what happens to the total rest mass?",
          options: [
            { id: "A", text: "It stays the same.", isCorrect: false, explanation: "In classical physics mass is conserved. In relativity, rest mass is not always conserved!" },
            { id: "B", text: "The final rest mass is GREATER than the sum of the initial rest masses.", isCorrect: true, explanation: "The 'lost' kinetic energy must go somewhere. It goes into the internal energy of the composite particle, which increases its rest mass! ($E_i = E_f$ includes $mc^2$)." }
          ]
        }
      ]
    },

    // ── Example 2.18: Composite Particle Mass ─────────────────────────────
    {
      id: "les-1-4-3-2",
      title: "Ex 2.18: Creating Mass",
      description: "Ex: Head-on collision creates a heavier particle",
      icon: "Combine",
      slides: [
        {
          id: "ex218-q",
          type: "example_q",
          title: "Example 2.18 — Creating Mass",
          content: "**Problem:** Two identical particles, each of mass $m$, travel toward each other with equal speed $v$ in frame $S$. They collide head-on and stick together to form a new composite particle of mass $M$.\n\nIs $M$ greater than $2m$, equal to $2m$, or less than $2m$?"
        },
        {
          id: "ex218-sol",
          type: "proof",
          title: "Interactive Solution",
          content: "Apply conservation laws.",
          interactiveSteps: [
            {
              stepText: "**Momentum:** Initially, $\\mathbf{p}_1 = +p$ and $\\mathbf{p}_2 = -p$. Total $p_i = 0$. \nThus, final momentum $p_f = 0$, meaning the composite particle $M$ is formed **at rest**."
            },
            {
              prompt: "Apply Conservation of Energy. Initial energy is $2E = 2\\gamma mc^2$. Final energy is the rest energy of $M$. What is $M$?",
              stepText: "$$\\sum E_i = 2\\gamma mc^2$$\n$$\\sum E_f = Mc^2 \\quad \\text{(since it is at rest)}$$\n\n$$Mc^2 = 2\\gamma mc^2 \\implies M = 2\\gamma m$$",
              options: [
                { id: "A", text: "$M = 2\\gamma m$", isCorrect: true, explanation: "Since $\\gamma > 1$, $M > 2m$. The kinetic energy of the incoming particles was converted directly into the rest mass of the new particle!" },
                { id: "B", text: "$M = 2m$", isCorrect: false, explanation: "That would mean kinetic energy just vanished, violating total energy conservation." }
              ]
            }
          ]
        },
        {
          id: "ex218-interp",
          type: "quiz",
          title: "Frame Independence",
          content: "Observer $S'$ is moving along with one of the initial particles, so it appears at rest. Would $S'$ also agree that $M > 2m$?",
          options: [
            { id: "A", text: "Yes", isCorrect: true, explanation: "Rest mass $M$ is an invariant quantity. All observers, no matter their frame, will agree on the value of $M$ and that $M > 2m$." },
            { id: "B", text: "No", isCorrect: false, explanation: "Mass is invariant in relativity." }
          ]
        }
      ]
    },

    // ── Example 2.20: K meson + proton decay ──────────────────────────────
    {
      id: "les-1-4-3-3",
      title: "Ex 2.20: Particle Physics 2D",
      description: "Ex: Conservation of energy and momentum in 2D",
      icon: "Atom",
      slides: [
        {
          id: "ex220-q",
          type: "example_q",
          title: "Example 2.20 — K meson collision",
          content: "A $K^-$ meson ($493.7$ MeV/c$^2$) collides with a stationary proton ($938.3$ MeV/c$^2$). It produces a $\\Lambda^0$ ($1115.7$ MeV/c$^2$) and a $\\pi^0$ ($135.0$ MeV/c$^2$).\n\nInitial KE of $K^-$ is $152.4$ MeV. Final KE of $\\pi^0$ is $254.8$ MeV.\n\nFind the kinetic energy of the $\\Lambda^0$."
        },
        {
          id: "ex220-canvas",
          type: "interactive_canvas",
          title: "Collision Diagram",
          content: "Conservation of momentum requires the outgoing particles to balance the incoming momentum in both x and y directions.",
          interactiveCanvasId: "collision-2d"
        },
        {
          id: "ex220-sol",
          type: "proof",
          title: "Interactive Solution",
          content: "Use Conservation of Total Energy.",
          interactiveSteps: [
            {
              stepText: "Total Energy $E = K + mc^2$.\n\n$$E_{\\text{initial}} = K_K + m_K c^2 + m_p c^2$$\n$$E_{\\text{final}} = K_\\Lambda + m_\\Lambda c^2 + K_\\pi + m_\\pi c^2$$"
            },
            {
              prompt: "Set $E_{\\text{initial}} = E_{\\text{final}}$ and solve for $K_\\Lambda$.",
              stepText: "$K_\\Lambda = (152.4 + 493.7 + 938.3) - (1115.7 + 254.8 + 135.0)$\n$K_\\Lambda = 1584.4 - 1505.5 = 78.9$ MeV",
              options: [
                { id: "A", text: "78.9 MeV", isCorrect: true, explanation: "Correct. We simply balance the energy budget. Rest energy + KE before = Rest energy + KE after." },
                { id: "B", text: "152.4 MeV", isCorrect: false, explanation: "That's the initial KE of the K meson." }
              ]
            }
          ]
        }
      ]
    },

    // ── Example 2.21: Antiproton threshold ────────────────────────────────
    {
      id: "les-1-4-3-4",
      title: "Ex 2.21: Antiproton Creation",
      description: "Ex: Threshold energy for particle creation",
      icon: "Target",
      slides: [
        {
          id: "ex221-q",
          type: "example_q",
          title: "Example 2.21 — Threshold Energy",
          content: "**Problem:** The antiproton $\\bar{p}$ was discovered via the reaction:\n$$p + p \\to p + p + p + \\bar{p}$$\n\nAn accelerated proton hits a stationary proton target. The **threshold kinetic energy** is the minimum energy required to make this happen.\nAt threshold, all 4 final particles are created at rest relative to each other (moving as a single unit in the lab frame).\n\nFind the threshold KE of the incident proton."
        },
        {
          id: "ex221-canvas",
          type: "interactive_canvas",
          title: "Antiproton Creation",
          content: "At threshold energy, the 4 resulting particles move together as a single clump in the lab frame.",
          interactiveCanvasId: "particle-creation"
        },
        {
          id: "ex221-sol",
          type: "proof",
          title: "Solution Concept",
          content: "We use $E^2 - (pc)^2 = (mc^2)^2$. This quantity is an invariant, meaning it has the same value in the Lab frame as in the Center of Mass (CM) frame.",
          interactiveSteps: [
            {
              stepText: "**Final State (Threshold):** The 4 particles ($3p, 1\\bar{p}$) have total mass $4m_p$. In the CM frame, they are completely at rest.\nSo invariant $(E_f)^2 - (p_fc)^2 = (4m_p c^2)^2 - 0 = 16 m_p^2 c^4$."
            },
            {
              stepText: "**Initial State (Lab Frame):** One moving proton (Energy $E$, momentum $p$), one stationary proton (Energy $m_pc^2$, momentum $0$).\nTotal initial Energy = $E + m_pc^2$.\nTotal initial Momentum = $p$."
            },
            {
              prompt: "Set the initial invariant equal to the final invariant: $(E + m_pc^2)^2 - (pc)^2 = 16 m_p^2 c^4$. Expand and use $E^2 - (pc)^2 = m_p^2 c^4$ to solve for $E$.",
              stepText: "$E^2 + 2E m_p c^2 + m_p^2 c^4 - (pc)^2 = 16 m_p^2 c^4$\nWe know $E^2 - (pc)^2 = m_p^2 c^4$, so:\n$m_p^2 c^4 + 2E m_p c^2 + m_p^2 c^4 = 16 m_p^2 c^4$\n$2E m_p c^2 = 14 m_p^2 c^4 \\implies E = 7 m_p c^2$",
              options: [
                { id: "A", text: "$E = 7 m_p c^2$", isCorrect: true, explanation: "Correct! The incident proton must have a total energy of 7 times its rest mass." }
              ]
            },
            {
              prompt: "If Total Energy $E = 7m_p c^2$, what is the Kinetic Energy $K$?",
              stepText: "$K = E - m_pc^2 = 7m_p c^2 - m_p c^2 = 6 m_p c^2$.\nSince $m_p c^2 = 938$ MeV, $K = 6(938) = 5628$ MeV = 5.6 GeV.",
              options: [
                { id: "A", text: "$6 m_p c^2$ (5.6 GeV)", isCorrect: true, explanation: "The Bevatron accelerator was built specifically to reach 5.6 GeV just to discover the antiproton!" },
                { id: "B", text: "$7 m_p c^2$ (6.5 GeV)", isCorrect: false, explanation: "That's the total energy. Kinetic energy is $E - E_0$." }
              ]
            }
          ]
        }
      ]
    }
  ]
};
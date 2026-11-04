import { Unit } from '../../types';

export const UNIT_4_3_2_CORRESPONDENCE_FAILURE: Unit = {
  id: "unit-4-3-2",
  title: "Correspondence Principle & Failure of Bohr",
  description: "T: Bohr correspondence principle · T: Deficiencies of the Bohr model · D: Full QM requirements",
  color: "duo-red",
  lessons: [
    // ── LESSON 1: Priming ─────────────────────────────────────────────────────────
    {
      id: "les-4-3-2-act",
      title: "Warm-Up: Classical vs Quantum",
      description: "Activate prior knowledge",
      icon: "Brain",
      slides: [
        {
          id: "cf-prime-1",
          type: "quiz",
          title: "Priming Question",
          content: "If a quantum theory perfectly explains the behavior of atoms, what must it predict when applied to large, macroscopic objects (like baseballs or planets)?",
          options: [
            { id: "A", text: "It should predict exactly the same behavior as classical physics.", isCorrect: true, explanation: "Yes. Classical physics works flawlessly for large objects. Any new quantum theory must reduce to classical physics at macroscopic scales. This is the heart of the Correspondence Principle." },
            { id: "B", text: "It should reveal new, bizarre quantum behaviors for large objects.", isCorrect: false, explanation: "If it did, we would see baseballs diffracting. Since we don't, the theory must predict classical behavior at large scales." }
          ]
        },
        {
          id: "cf-prime-2",
          type: "quiz",
          title: "The Helium Problem",
          content: "The Bohr model works perfectly for Hydrogen and He+. Why might it fail for neutral Helium (2 protons, 2 electrons)?",
          options: [
            { id: "A", text: "Because the two electrons repel each other.", isCorrect: true, explanation: "The Bohr math only accounts for the electron-nucleus attraction. As soon as you add a second electron, the complex electron-electron repulsion ruins the simple orbit math." },
            { id: "B", text: "Helium doesn't have quantized energy levels.", isCorrect: false, explanation: "All atoms have quantized levels. The Bohr model just isn't complex enough to calculate them." }
          ]
        }
      ]
    },

    // ── LESSON 2: T: The Correspondence Principle ─────────────────────────────────
    {
      id: "les-4-3-2-1",
      title: "The Correspondence Principle",
      description: "T: Bridging the quantum and classical worlds",
      icon: "ArrowRightLeft",
      slides: [
        {
          id: "cp-theory",
          type: "theory",
          title: "The Correspondence Principle",
          content: "Bohr's model was a strange hybrid of classical physics (Newton's laws for orbits) and radical new postulates (quantized $L$, non-radiating states). To justify this, Bohr proposed the **Correspondence Principle**:\n\n> *Quantum theory must agree with classical theory in the limit of large quantum numbers ($n \\to \\infty$).*\n\nIf we make a Bohr atom so large that it reaches laboratory size ($n \\sim 10^4$), the discrete energy steps become so tiny that the energy appears continuous. In this limit, the frequency of the emitted photon must exactly match the classical orbital frequency of the spiraling electron!"
        },
        {
          id: "cp-q1",
          type: "quiz",
          title: "Classical Radiation",
          content: "Classically, an electron orbiting at frequency $f_{\\text{orbit}}$ radiates light at what frequency?",
          options: [
            { id: "A", text: "Exactly $f_{\\text{orbit}}$.", isCorrect: true, explanation: "Classical electromagnetism says the emitted wave matches the oscillation frequency of the charge." },
            { id: "B", text: "It doesn't radiate.", isCorrect: false, explanation: "That's Bohr's quantum postulate. Classically, it MUST radiate." }
          ]
        },
        {
          id: "cp-q2",
          type: "quiz",
          title: "Quantum Agreement",
          content: "For a transition from $n$ to $n-1$ where $n$ is very large (e.g., $10,000 \\to 9,999$), how does the emitted photon's frequency $f_{\\text{photon}}$ compare to the classical orbital frequency $f_{\\text{orbit}}$?",
          options: [
            { id: "A", text: "They are completely different.", isCorrect: false, explanation: "No, this is where the theories must overlap." },
            { id: "B", text: "$f_{\\text{photon}} \\approx f_{\\text{orbit}}$", isCorrect: true, explanation: "Exactly. Bohr proved mathematically that as $n \to \infty$, the photon frequency derived from $E_n - E_{n-1}$ perfectly matches the classical orbital frequency. This validated his radical postulates." }
          ]
        },
        {
          id: "cp-canvas",
          type: "interactive_canvas",
          title: "Quantum vs Classical Orbits",
          content: "At large n, the discrete quantum jumps blur into a continuous classical spiral.",
          interactiveCanvasId: "correspondence-principle"
        },
        {
          id: "cp-fitb",
          type: "fill_in_blank",
          title: "Fill in the Blank",
          content: "The requirement that quantum mechanics must yield classical results at macroscopic scales is known as the ___ principle.",
          blankAnswer: "correspondence"
        }
      ]
    },

    // ── LESSON 3: T: Deficiencies of the Bohr Model ───────────────────────────────
    {
      id: "les-4-3-2-2",
      title: "Deficiencies of the Bohr Model",
      description: "T: Why the Bohr model is ultimately incorrect",
      icon: "Unlink",
      slides: [
        {
          id: "def-theory-1",
          type: "theory",
          title: "Where Bohr Failed",
          content: "Despite its massive success with Hydrogen, the Bohr model is fundamentally incomplete. Its major failures include:\n\n1. **Multi-Electron Atoms:** It fails completely for any atom with more than one electron (like neutral Helium) because it cannot account for electron-electron repulsion.\n2. **Angular Momentum:** Bohr predicted the ground state of hydrogen has angular momentum $L = \\hbar$. True quantum mechanics shows the ground state has $L = 0$ (a spherical cloud, not a flat orbit).\n3. **Spectral Intensities:** It can predict the wavelengths of spectral lines, but not their *intensities* (how bright they are, or how probable a transition is).\n4. **Fine Structure:** High-resolution spectroscopy showed that single lines are actually closely spaced doublets. Bohr's model couldn't explain this fine splitting."
        },
        {
          id: "def-q1",
          type: "quiz",
          title: "The Uncertainty Violation",
          content: "The Bohr model describes an electron moving in a perfectly circular orbit of exact radius $r_n$ with exact momentum $p_n$. Which fundamental law of nature does this violate?",
          options: [
            { id: "A", text: "Conservation of Energy.", isCorrect: false, explanation: "Energy is conserved in the model." },
            { id: "B", text: "The Heisenberg Uncertainty Principle.", isCorrect: true, explanation: "If $r$ is known exactly and $p$ is known exactly, then $\\Delta x \\Delta p_x = 0$. This violates $\\Delta x \\Delta p_x \\ge \\hbar/2$. An electron cannot have a perfectly defined trajectory." }
          ]
        },
        {
          id: "def-q2",
          type: "quiz",
          title: "The Ground State",
          content: "Bohr predicted $L = n\\hbar$. For $n=1$, $L=\\hbar$. How does an electron with $L=0$ (the true quantum mechanical ground state) behave?",
          options: [
            { id: "A", text: "It travels in a straight line.", isCorrect: false, explanation: "It's still bound to the nucleus." },
            { id: "B", text: "It doesn't 'orbit' in a circle; it exists as a spherical probability cloud.", isCorrect: true, explanation: "An angular momentum of zero means it has no net rotational motion. It simply pulses in and out spherically. Bohr's planetary model is wrong." }
          ]
        },
        {
          id: "def-fitb",
          type: "fill_in_blank",
          title: "Fill in the Blank",
          content: "The Bohr model fails for neutral Helium because it cannot mathematically account for the repulsive forces between multiple ___.",
          blankAnswer: "electrons"
        }
      ]
    },

    // ── LESSON 4: D: What Full QM Must Address ────────────────────────────────────
    {
      id: "les-4-3-2-3",
      title: "The Dawn of True Quantum Mechanics",
      description: "D: Moving beyond orbits to probability waves",
      icon: "Waves",
      slides: [
        {
          id: "qm-theory",
          type: "theory",
          title: "Replacing the Bohr Atom",
          content: "To build a truly correct model of the atom, physicists (led by Schrödinger and Heisenberg in 1925) had to abandon planetary orbits entirely.\n\nA full quantum mechanical treatment requires:\n1. **Wave Functions ($\\psi$):** Electrons are not point particles on tracks; they are 3D probability clouds describing the likelihood of finding the electron.\n2. **The Schrödinger Equation:** A rigorous wave equation that automatically yields quantized energy levels and correct angular momenta without arbitrary postulates.\n3. **Spin and Relativity:** Later additions (Dirac equation) explained fine structure by introducing electron 'spin' and relativistic corrections."
        },
        {
          id: "qm-q1",
          type: "quiz",
          title: "The Fate of the Bohr Model",
          content: "If the Bohr model is fundamentally incorrect, why do we still learn it?",
          options: [
            { id: "A", text: "It provides an intuitive, visual stepping-stone that correctly predicts hydrogen energies and introduces key concepts like stationary states and quantum leaps.", isCorrect: true, explanation: "It's an excellent transitional model. It introduced the core ideas of quantization and energy transitions that carried over directly into modern quantum mechanics." },
            { id: "B", text: "Because the Schrödinger equation is just a minor adjustment to it.", isCorrect: false, explanation: "Schrödinger's approach is mathematically and conceptually entirely different." }
          ]
        },
        {
          id: "qm-q2",
          type: "quiz",
          title: "The Big Shift",
          content: "What is the primary conceptual shift from the Bohr model to the Schrödinger model?",
          options: [
            { id: "A", text: "Replacing continuous energies with quantized energies.", isCorrect: false, explanation: "Bohr already did this." },
            { id: "B", text: "Replacing exact planetary orbits with probabilistic wave clouds.", isCorrect: true, explanation: "This is the essence of true quantum mechanics. Abandoning determinism for probability amplitudes." }
          ]
        },
        {
          id: "qm-fitb",
          type: "fill_in_blank",
          title: "Fill in the Blank",
          content: "In modern quantum mechanics, the exact planetary orbit is replaced by a 3D ___ cloud representing the likelihood of finding the electron.",
          blankAnswer: "probability"
        }
      ]
    }
  ]
};
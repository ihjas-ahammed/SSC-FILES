import { Unit } from '../../types';

export const UNIT_1_4_1_RELATIVISTIC_MOMENTUM: Unit = {
  id: "unit-1-4-1",
  title: "Relativistic Momentum",
  description: "Der: Why classical momentum fails · D: Relativistic momentum · Ex 2.13",
  color: "duo-blue",
  lessons: [
    // ── Priming ───────────────────────────────────────────────────────────
    {
      id: "les-1-4-1-act",
      title: "Priming: Collisions at High Speed",
      description: "Activate prior thinking about momentum",
      icon: "Brain",
      slides: [
        {
          id: "prime-1",
          type: "quiz",
          title: "Priming Question 1",
          content: "In classical physics, what quantity is ALWAYS conserved in both elastic and inelastic collisions between isolated particles?",
          options: [
            { id: "A", text: "Kinetic energy", isCorrect: false, explanation: "Kinetic energy is only conserved in perfectly elastic collisions." },
            { id: "B", text: "Linear momentum", isCorrect: true, explanation: "Momentum $\\vec{p} = m\\vec{v}$ is conserved in all isolated collisions in classical physics." },
            { id: "C", text: "Velocity", isCorrect: false, explanation: "Individual and relative velocities can change." }
          ]
        },
        {
          id: "prime-2",
          type: "quiz",
          title: "Priming Question 2",
          content: "Einstein's First Postulate states that the laws of physics are the same in all inertial frames. If momentum is conserved in frame S, what must be true in frame S'?",
          options: [
            { id: "A", text: "Momentum is NOT conserved in S'.", isCorrect: false, explanation: "If a fundamental law holds in one inertial frame, it must hold in all inertial frames." },
            { id: "B", text: "Momentum must also be conserved in S'.", isCorrect: true, explanation: "Exactly. The law of conservation of momentum must be a universal law. However, if we use the classical formula $\\vec{p} = m\\vec{v}$ and the relativistic velocity addition formula, this consistency breaks down!" }
          ]
        }
      ]
    },

    // ── Failure of Classical Momentum ─────────────────────────────────────
    {
      id: "les-1-4-1-1",
      title: "Failure of Classical Momentum",
      description: "Der: Why p = mv is not universally conserved",
      icon: "TrendingDown",
      slides: [
        {
          id: "fail-theory",
          type: "theory",
          title: "Why $\\vec{p} = m\\vec{v}$ Fails",
          content: "**The Setup:** Imagine an elastic collision between two particles in frame $S'$. Particle 1 (mass $2m$) is at rest. Particle 2 (mass $m$) hits it.\n\nUsing $\\vec{p} = m\\vec{v}$, total momentum is conserved in $S'$.\n\n**The Problem:** Now view the exact same collision from frame $S$, which moves relative to $S'$. Because velocities transform relativistically (Eq. 2.17) rather than by simple addition, the initial and final momenta in $S$ **do not match** if we use $\\vec{p} = m\\vec{v}$.\n\n**Conclusion:** The classical definition $\\vec{p} = m\\vec{v}$ does not satisfy Einstein's first postulate. We cannot have a law that is valid for some observers but not for others. We need a new definition of momentum."
        },
        {
          id: "fail-q1",
          type: "quiz",
          title: "Conceptual Check",
          content: "Why does classical momentum conservation fail when viewed from a different relativistic frame?",
          options: [
            { id: "A", text: "Because mass changes during the collision.", isCorrect: false, explanation: "Rest mass is invariant and does not change here." },
            { id: "B", text: "Because the classical formula relies on simple Galilean velocity addition, which is incorrect at high speeds.", isCorrect: true, explanation: "Classical momentum conservation implicitly assumes $u = u' + v$. When velocities are transformed correctly using the Lorentz transformation, $m\\vec{v}$ is no longer conserved." },
            { id: "C", text: "Because energy is lost as heat.", isCorrect: false, explanation: "Even in perfectly elastic collisions (no heat loss), classical momentum isn't conserved across frames at relativistic speeds." }
          ]
        }
      ]
    },

    // ── Definition: Relativistic Momentum ─────────────────────────────────
    {
      id: "les-1-4-1-2",
      title: "Relativistic Momentum",
      description: "D: The correct relativistic definition of momentum",
      icon: "ArrowRightCircle",
      slides: [
        {
          id: "rel-mom-def",
          type: "theory",
          title: "Definition: Relativistic Momentum",
          content: "To preserve the law of conservation of momentum in all inertial frames, we define **relativistic momentum** as:\n\n$$\\mathbf{p} = \\frac{m\\mathbf{v}}{\\sqrt{1 - v^2/c^2}} = \\gamma m\\mathbf{v}$$\n\nWhere:\n- $m$ is the **rest mass** (an invariant property of the particle).\n- $\\mathbf{v}$ is the velocity of the particle as measured in that frame.\n- $\\gamma$ is the Lorentz factor.\n\n*Note: We do not use the term \"relativistic mass\" ($\\gamma m$). We say the momentum has an extra factor of $\\gamma$, while mass $m$ is always the rest mass.*"
        },
        {
          id: "rel-mom-q1",
          type: "quiz",
          title: "Limit Check",
          content: "What happens to the relativistic momentum $\\mathbf{p} = \\gamma m\\mathbf{v}$ when the particle's speed $v$ is much less than $c$?",
          options: [
            { id: "A", text: "It becomes undefined.", isCorrect: false, explanation: "It is perfectly well-defined at low speeds." },
            { id: "B", text: "It reduces to the classical formula $\\mathbf{p} = m\\mathbf{v}$.", isCorrect: true, explanation: "When $v \\ll c$, the denominator $\\sqrt{1 - v^2/c^2} \\approx 1$, so $\\mathbf{p} \\approx m\\mathbf{v}$. This satisfies the Correspondence Principle!" },
            { id: "C", text: "It approaches zero.", isCorrect: false, explanation: "It approaches $m\\mathbf{v}$, not zero." }
          ]
        },
        {
          id: "rel-mom-q2",
          type: "quiz",
          title: "High Speed Behavior",
          content: "As a particle's speed $v$ approaches the speed of light $c$, what happens to its momentum?",
          options: [
            { id: "A", text: "It approaches a maximum limit of $mc$.", isCorrect: false, explanation: "Look at the denominator: $\\sqrt{1 - v^2/c^2}$ approaches 0." },
            { id: "B", text: "It approaches infinity.", isCorrect: true, explanation: "As $v \\to c$, the denominator approaches 0, making $\\gamma \\to \\infty$. Thus, it takes an infinite amount of force to push a massive particle to the speed of light." }
          ]
        },
        {
          id: "rel-mom-fitb",
          type: "fill_in_blank",
          title: "Fill in the Blank",
          content: "The relativistic momentum formula includes the factor $\\gamma$, which ensures that momentum is ___ in all inertial reference frames.",
          blankAnswer: "conserved"
        }
      ]
    },

    // ── Example 2.13: Proton Momentum ─────────────────────────────────────
    {
      id: "les-1-4-1-3",
      title: "Ex 2.13: Proton Momentum",
      description: "Ex: Calculating momentum at relativistic speeds",
      icon: "Calculator",
      slides: [
        {
          id: "ex213-q",
          type: "example_q",
          title: "Example 2.13",
          content: "**Problem:** What is the momentum of a proton moving at a speed of $v = 0.86c$?\n\n*Proton mass:* $m = 1.67 \\times 10^{-27}$ kg\n*Rest energy of proton:* $mc^2 = 938$ MeV\n\nTry calculating it in standard SI units (kg·m/s) AND in physics units (MeV/c)."
        },
        {
          id: "ex213-sol",
          type: "proof",
          title: "Interactive Solution",
          content: "Using $p = \\gamma m v$. Let's use the MeV/c unit method, as it is much easier.",
          interactiveSteps: [
            {
              stepText: "Instead of plugging in kg and m/s, multiply numerator and denominator by $c$:\n$$pc = \\frac{mvc}{\\sqrt{1 - v^2/c^2}} = \\frac{mc^2 (v/c)}{\\sqrt{1 - v^2/c^2}}$$"
            },
            {
              prompt: "We are given $mc^2 = 938$ MeV and $v/c = 0.86$. Calculate the denominator $\\sqrt{1 - 0.86^2}$.",
              stepText: "$\\sqrt{1 - 0.86^2} = \\sqrt{1 - 0.7396} = \\sqrt{0.2604} \\approx 0.5103$",
              options: [
                { id: "A", text: "0.5103", isCorrect: true, explanation: "Correct. So $\\gamma \\approx 1 / 0.5103 \\approx 1.96$." },
                { id: "B", text: "0.14", isCorrect: false, explanation: "Check math: $1 - 0.86^2$." }
              ]
            },
            {
              prompt: "Calculate $pc$.",
              stepText: "$$pc = \\frac{(938 \\text{ MeV})(0.86)}{0.5103} = \\frac{806.68}{0.5103} \\approx 1580 \\text{ MeV}$$",
              options: [
                { id: "A", text: "$1580$ MeV", isCorrect: true, explanation: "Correct!" },
                { id: "B", text: "$806$ MeV", isCorrect: false, explanation: "You forgot to divide by the square root term (you calculated classical $p = mv$ instead of relativistic)." }
              ]
            },
            {
              prompt: "If $pc = 1580$ MeV, what is the momentum $p$?",
              stepText: "**Result:** Divide by $c$ to get the momentum:\n$$p = 1580 \\text{ MeV}/c$$\n\n*(In SI units, this is $8.44 \\times 10^{-19}$ kg·m/s)*",
              options: [
                { id: "A", text: "$1580$ MeV/c", isCorrect: true, explanation: "MeV/c is the standard unit of momentum in particle physics. It makes calculations much simpler!" },
                { id: "B", text: "$1580$ MeV", isCorrect: false, explanation: "MeV is a unit of Energy. Momentum requires dividing by $c$." }
              ]
            }
          ]
        },
        {
          id: "ex213-interp",
          type: "quiz",
          title: "Physical Interpretation",
          content: "Why is it usually better to express momentum in units of MeV/c rather than kg·m/s?",
          options: [
            { id: "A", text: "It allows direct comparison and calculation with the rest energy $mc^2$ (in MeV) without using powers of 10.", isCorrect: true, explanation: "Yes! As we'll see soon, the relation $E^2 = (pc)^2 + (mc^2)^2$ makes using MeV for energy and MeV/c for momentum extremely convenient." },
            { id: "B", text: "It is the only unit allowed by the SI system.", isCorrect: false, explanation: "MeV/c is NOT an SI unit; it is a specialized unit for particle physics." }
          ]
        }
      ]
    }
  ]
};
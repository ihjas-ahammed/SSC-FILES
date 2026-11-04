import { Unit } from '../../types';

export const UNIT_2_4_3_FORCED_DAMPED: Unit = {
  id: "unit-2-4-3",
  title: "Forced Damped Motion",
  description: "Steady State Resonance",
  color: "duo-red",
  lessons: [
    {
      id: "les-2-4-3-1",
      title: "Steady State Solution",
      description: "Complex Amplitude",
      icon: "Zap",
      slides: [
        {
          id: "target",
          type: "theory",
          title: "The Goal",
          content: "Solve the full damped, driven equation for steady state:\n$$ m\\ddot{x} + b\\dot{x} + kx = F_0 \\sin(\\omega_d t) $$"
        },
        {
          id: "proof",
          type: "proof",
          title: "Complex Substitution",
          content: "Use the complex trick. Let force be $F_0 e^{i\\omega_d t}$ and guess $\\xi_p = C e^{i\\omega_d t}$.",
          proofSteps: [
            "Derivatives: $\\dot{\\xi} = i\\omega_d C e^{i\\omega_d t}$, $\\ddot{\\xi} = -\\omega_d^2 C e^{i\\omega_d t}$",
            "Substitute into ODE: $m(-\\omega_d^2)C + b(i\\omega_d)C + kC = F_0$",
            "Group C: $C [ (k - m\\omega_d^2) + i b\\omega_d ] = F_0$"
          ],
          interactiveSteps: [
            {
              prompt: "Divide the term in brackets by $m$, substituting $\\omega_0^2 = k/m$.",
              options: [
                { id: "a", text: "$C = \\frac{F_0/m}{(\\omega_0^2 - \\omega_d^2) + i (b/m)\\omega_d}$", isCorrect: true, explanation: "This complex constant C contains both Amplitude and Phase shift information." }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "les-2-4-3-2",
      title: "Resonance Amplitude",
      description: "Formula for A",
      icon: "Maximize2",
      slides: [
        {
          id: "target",
          type: "theory",
          title: "Extracting Amplitude",
          content: "The magnitude of the complex constant $C$ gives the physical Amplitude $A$ of the steady-state oscillation."
        },
        {
          id: "proof",
          type: "proof",
          title: "Magnitude Math",
          content: "Find the magnitude of $C = \\frac{F_0/m}{X + iY}$.",
          proofSteps: [
            "The magnitude of a complex fraction is $|N/D| = |N|/|D|$.",
            "The magnitude of a complex number $Z = X + iY$ is $|Z| = \\sqrt{X^2 + Y^2}$.",
            "Denominator magnitude: $|D| = \\sqrt{(\\omega_0^2 - \\omega_d^2)^2 + (b\\omega_d/m)^2}$."
          ],
          interactiveSteps: [
            {
              prompt: "Select the final Amplitude A = |C|.",
              options: [
                { id: "a", text: "$A = \\frac{F_0/m}{\\sqrt{(\\omega_0^2 - \\omega_d^2)^2 + (b\\omega_d/m)^2}}$", isCorrect: true, explanation: "This is the famous resonance amplitude formula." }
              ]
            }
          ]
        },
        {
          id: "intuition",
          type: "quiz",
          title: "The Role of Damping",
          content: "If damping $b=0$, what happens to the amplitude when $\\omega_d = \\omega_0$?",
          options: [
            { id: "A", text: "It goes to a finite maximum.", isCorrect: false },
            { id: "B", text: "It goes to infinity.", isCorrect: true, explanation: "This is 'pure' resonance. Damping is what prevents real-world systems from having infinite amplitude." }
          ]
        }
      ]
    },
    {
      id: "les-2-4-3-3",
      title: "Phase Shift",
      description: "Lagging behind",
      icon: "FastForward",
      slides: [
        {
          id: "target",
          type: "theory",
          title: "Extracting Phase",
          content: "The angle of the complex constant $C$ gives the phase shift $\\phi$ between the driving force and the oscillator's response."
        },
        {
          id: "proof",
          type: "proof",
          title: "Phase Math",
          content: "Find the phase of $C = \\frac{F_0/m}{X + iY}$.",
          proofSteps: [
            "The phase of a complex fraction is $\\text{arg}(N) - \\text{arg}(D)$.",
            "The phase of the numerator $F_0/m$ is 0.",
            "So, the phase of C is $-\\text{arg}(D)$. This means the motion *lags* the force by $\\phi = \\text{arg}(D)$.",
            "The phase of a complex number $X+iY$ is $\\tan^{-1}(Y/X)$."
          ],
          interactiveSteps: [
            {
              prompt: "Substitute $Y = b\\omega_d/m$ and $X = \\omega_0^2 - \\omega_d^2$.",
              options: [
                { id: "a", text: "$\\tan\\phi = \\frac{b\\omega_d/m}{\\omega_0^2 - \\omega_d^2}$", isCorrect: true, explanation: "Correct." }
              ]
            }
          ]
        },
        {
          id: "significance",
          type: "quiz",
          title: "Resonance Phase",
          content: "At exact resonance ($\\omega_d = \\omega_0$), what happens to $\\tan\\phi$?",
          options: [
            { id: "A", text: "It goes to zero ($\\phi = 0^\\circ$).", isCorrect: false, explanation: "This happens at very low frequencies." },
            { id: "B", text: "It goes to infinity ($\\phi = 90^\\circ$).", isCorrect: true, explanation: "At resonance, the velocity is perfectly in phase with the force, meaning the position lags the force by exactly 90 degrees." }
          ]
        }
      ]
    }
  ]
};
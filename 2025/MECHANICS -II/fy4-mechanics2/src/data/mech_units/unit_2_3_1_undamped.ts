import { Unit } from '../../types';

export const UNIT_2_3_1_UNDAMPED: Unit = {
  id: "unit-2-3-1",
  title: "The Undamped Oscillator",
  description: "Ideal Simple Harmonic Motion",
  color: "duo-green",
  lessons: [
    {
      id: "les-2-3-1-1",
      title: "General Solution Form",
      description: "Amplitude and Phase",
      icon: "Activity",
      slides: [
        {
          id: "def",
          type: "theory",
          title: "The Standard Form",
          content: "While $x = C_1\\cos\\omega t + C_2\\sin\\omega t$ is mathematically correct, physically we prefer:\n\n$$ x(t) = x_0\\sin(\\omega t + \\beta) $$\n\nWhere $x_0$ is the **Amplitude** (max displacement) and $\\beta$ is the **Phase Angle** (starting point)."
        }
      ]
    },
    {
      id: "les-2-3-1-2",
      title: "Figure 11.3 - Position vs Time",
      description: "Plotting SHM",
      icon: "TrendingUp",
      slides: [
        {
          id: "vis",
          type: "theory",
          title: "The Sine Wave",
          content: "A plot of $x(t) = x_0\\sin(\\omega t)$ is a smooth wave oscillating between $+x_0$ and $-x_0$.\n\nThe **Period** $P = 2\\pi/\\omega$ is the time for one complete cycle."
        },
        {
          id: "quiz",
          type: "quiz",
          title: "Frequency Check",
          content: "If $\\omega = 4\\pi$ rad/s, what is the frequency $f$ in Hz (cycles per second)?",
          options: [
            { id: "A", text: "2 Hz", isCorrect: true, explanation: "$f = \\omega / 2\\pi = 4\\pi / 2\\pi = 2$." },
            { id: "B", text: "4 Hz", isCorrect: false }
          ]
        }
      ]
    },
    {
      id: "les-2-3-1-3",
      title: "Total Energy",
      description: "Conservation",
      icon: "Battery",
      slides: [
        {
          id: "derive",
          type: "proof",
          title: "Proving E is Constant",
          content: "Derive $E = T + V$.",
          proofSteps: [
            "Position: $x = A\\sin(\\omega t + \\beta)$. Velocity: $v = A\\omega\\cos(\\omega t + \\beta)$.",
            "Energy: $E = \\frac{1}{2}mv^2 + \\frac{1}{2}kx^2$.",
            "Substitute: $E = \\frac{1}{2}m A^2 \\omega^2 \\cos^2(...) + \\frac{1}{2}k A^2 \\sin^2(...)$.",
            "Recall $\\omega^2 = k/m \\implies m\\omega^2 = k$.",
            "Factor: $E = \\frac{1}{2}kA^2(\\cos^2 + \\sin^2) = \\frac{1}{2}kA^2$."
          ]
        },
        {
          id: "check",
          type: "theory",
          title: "Conclusion",
          content: "Total energy of a harmonic oscillator is proportional to the **square of the amplitude**."
        }
      ]
    },
    {
      id: "les-2-3-1-4",
      title: "Worked Example 11.2",
      description: "Max Velocity",
      icon: "Zap",
      slides: [
        {
          id: "prob",
          type: "numerical",
          title: "Finding V_max",
          content: "A 0.25 kg mass is on a spring of $k=1.0$ N/m. It is displaced $0.15$ m and released from rest.\n\nCalculate the maximum velocity in m/s.",
          numericAnswer: 0.3, // w = sqrt(1/0.25) = sqrt(4) = 2. vmax = wA = 2 * 0.15 = 0.3.
          numericTolerance: 0.05
        },
        {
          id: "sol",
          type: "solution",
          title: "Energy Approach",
          content: "Use Conservation of Energy.",
          interactiveSteps: [
            {
              stepText: "Find Total Energy $E$.",
              options: [
                { id: "a", text: "$E = \\frac{1}{2}k x_0^2 = 0.5(1.0)(0.15)^2 = 0.01125$ J", isCorrect: true, explanation: "Correct." }
              ]
            },
            {
              stepText: "Equate to Max Kinetic Energy.",
              options: [
                { id: "a", text: "$0.01125 = \\frac{1}{2}m v_{max}^2$", isCorrect: true, explanation: "Velocity is max when $x=0$ (Potential is zero)." }
              ]
            },
            {
              stepText: "Solve for $v_{max}$.",
              options: [
                { id: "a", text: "$v_{max} = \\sqrt{2(0.01125)/0.25} = 0.3$ m/s", isCorrect: true, explanation: "Correct." }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "les-2-3-1-5",
      title: "Exercise 11.10",
      description: "Equivalent Solutions",
      icon: "PenTool",
      slides: [
        {
          id: "prob",
          type: "proof",
          title: "Trig Expansion",
          content: "Show that $x_0\\sin(\\omega t + \\beta) = C_1\\cos\\omega t + C_2\\sin\\omega t$.",
          proofSteps: [
            "Use angle addition: $\\sin(A+B) = \\sin A\\cos B + \\cos A\\sin B$.",
            "Apply to LHS: $x_0(\\sin\\omega t\\cos\\beta + \\cos\\omega t\\sin\\beta)$.",
            "Group sine and cosine terms: $(x_0\\sin\\beta)\\cos\\omega t + (x_0\\cos\\beta)\\sin\\omega t$.",
            "Define $C_1 = x_0\\sin\\beta$ and $C_2 = x_0\\cos\\beta$.",
            "The forms are equivalent."
          ]
        }
      ]
    },
    {
      id: "les-2-3-1-6",
      title: "Exercise 11.11",
      description: "Amplitude Calculation",
      icon: "PenTool",
      slides: [
        {
          id: "prob",
          type: "numerical",
          title: "Find Amplitude",
          content: "A $k=10$ N/m spring connects to a 2 kg mass. Initially at rest at unstretched position ($x=0$), it is given an initial speed of 3 m/s.\n\nFind the amplitude of oscillation in meters.",
          numericAnswer: 1.34, // w = sqrt(10/2) = sqrt(5) = 2.236. v_max = wA -> 3 = 2.236 * A -> A = 1.34
          numericTolerance: 0.05
        },
        {
          id: "sol",
          type: "solution",
          title: "Method",
          content: "Use $v_{max} = \\omega A$.",
          interactiveSteps: [
            {
              stepText: "Find $\\omega$.",
              options: [
                { id: "a", text: "$\\sqrt{10/2} = \\sqrt{5} \\approx 2.236$", isCorrect: true, explanation: "Correct." }
              ]
            },
            {
              stepText: "Solve for A.",
              options: [
                { id: "a", text: "$A = 3 / \\sqrt{5} \\approx 1.34$ m", isCorrect: true, explanation: "Correct." }
              ]
            }
          ]
        }
      ]
    }
  ]
};
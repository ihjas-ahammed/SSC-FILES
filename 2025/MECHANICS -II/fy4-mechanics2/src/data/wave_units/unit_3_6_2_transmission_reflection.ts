import { Unit } from '../../types';

export const UNIT_3_6_2_TRANSMISSION_REFLECTION: Unit = {
  id: "unit-3-6-2",
  title: "362 (Transmission and Reflection)",
  description: "Wave boundaries and intensity ratios",
  color: "duo-orange",
  lessons:[
    {
      id: "les-3-6-2-1",
      title: "Joined Strings (Fig 13.6)",
      description: "Interface between two media",
      icon: "Link",
      slides:[
        {
          id: "wu1",
          type: "quiz",
          title: "Conceptual Warm-up",
          content: "What happens when light travelling through air hits a glass window?",
          options:[
            { id: "A", text: "It all passes through.", isCorrect: false },
            { id: "B", text: "Some passes through (transmitted) and some bounces back (reflected).", isCorrect: true, explanation: "This happens to ALL waves when they hit a boundary between two different media." }
          ]
        },
        {
          id: "theory",
          type: "theory",
          title: "The String Interface",
          content: "Consider a wave traveling in a string of linear density $\\rho_1$ incident on a second string of different linear density $\\rho_2$, joined at $x=0$.\n\nBecause the densities are different, the wave speeds $v_1$ and $v_2$ are different. The incident wave splits into a **reflected wave** moving back into medium 1, and a **transmitted wave** moving forward into medium 2."
        },
        {
          id: "canvas",
          type: "interactive_canvas",
          title: "Wave Reflection and Transmission",
          content: "Observe the incident wave split at the junction.",
          interactiveCanvasId: "joined-strings-reflection"
        },
        {
          id: "mcq",
          type: "quiz",
          title: "Frequency Check",
          content: "When the wave enters the new string, its speed changes. Does its frequency change?",
          options:[
            { id: "A", text: "Yes", isCorrect: false },
            { id: "B", text: "No", isCorrect: true, explanation: "Frequency is determined by the source. Only speed and wavelength change." }
          ]
        }
      ]
    },
    {
      id: "les-3-6-2-2",
      title: "Derivation: Boundary Conditions",
      description: "Equations at the junction",
      icon: "FunctionSquare",
      slides:[
        {
          id: "theory",
          type: "theory",
          title: "Matching the Interface",
          content: "We define the three waves:\nIncident: $y_i = A_i \\cos(k_1x - \\omega t)$\nReflected: $y_r = A_r \\cos(k_1x + \\omega t)$\nTransmitted: $y_t = A_t \\cos(k_2x - \\omega t)$"
        },
        {
          id: "proof",
          type: "proof",
          title: "The Boundary Conditions",
          content: "At the knot ($x=0$), two physical realities must hold true at all times.",
          proofSteps:[
            "1. Continuity of string: The string can't break. So the displacement on the left equals displacement on the right.",
            "$[y_i + y_r]_{x=0} = [y_t]_{x=0}$",
            "2. Continuity of slope: Since the tension $F$ is uniform and the knot is massless, the vertical forces must balance instantly.",
            "$\\left[\\frac{\\partial y_i}{\\partial x} + \\frac{\\partial y_r}{\\partial x}\\right]_{x=0} = \\left[\\frac{\\partial y_t}{\\partial x}\\right]_{x=0}$"
          ]
        }
      ]
    },
    {
      id: "les-3-6-2-3",
      title: "Derivation: R & T Coefficients",
      description: "Amplitude ratios",
      icon: "Percent",
      slides:[
        {
          id: "proof",
          type: "proof",
          title: "Solving for Amplitudes",
          content: "Substitute the wave functions into the boundary conditions at $x=0$.",
          proofSteps:[
            "From displacement continuity: $A_i \\cos(-\\omega t) + A_r \\cos(\\omega t) = A_t \\cos(-\\omega t)$.",
            "Since $\\cos(-\\omega t) = \\cos(\\omega t)$, we get: $A_i + A_r = A_t$.",
            "From slope continuity (derivatives bring out $k$): $-k_1 A_i \\sin(-\\omega t) - k_1 A_r \\sin(\\omega t) = -k_2 A_t \\sin(-\\omega t)$.",
            "Simplify (since $\\sin(-\\omega t) = -\\sin(\\omega t)$): $k_1(A_i - A_r) = k_2 A_t$.",
            "Substitute $k = \\omega / v$: $\\frac{1}{v_1}(A_i - A_r) = \\frac{1}{v_2} A_t$."
          ]
        },
        {
          id: "theory",
          type: "theory",
          title: "The Resulting Ratios",
          content: "Solving the system of equations yields the amplitude ratios:\n\nReflection Amplitude: $\\frac{A_r}{A_i} = \\frac{v_2 - v_1}{v_1 + v_2}$\n\nTransmission Amplitude: $\\frac{A_t}{A_i} = \\frac{2v_2}{v_1 + v_2}$"
        },
        {
          id: "mcq",
          type: "quiz",
          title: "Phase Inversion",
          content: "If the second string is much heavier than the first ($v_2 < v_1$), what happens to $A_r$?",
          options:[
            { id: "A", text: "It is positive.", isCorrect: false },
            { id: "B", text: "It is negative.", isCorrect: true, explanation: "If $v_2 < v_1$, then $v_2 - v_1$ is negative. This means the reflected wave is inverted (upside down)." }
          ]
        },
        {
          id: "fib",
          type: "fill_in_blank",
          title: "Key Takeaway",
          content: "If the second string is a rigid wall ($v_2 = 0$), the reflection amplitude equals $-1 \\times A_i$, and the transmitted amplitude equals ___.",
          blankAnswer: "zero"
        }
      ]
    },
    {
      id: "les-3-6-2-4",
      title: "Worked Example 13.2",
      description: "Reflection Intensity",
      icon: "Sun",
      slides:[
        {
          id: "q",
          type: "example_q",
          title: "Worked Example 13.2",
          content: "Obtain an expression for the reflection coefficient $R$, defined as the ratio of the **intensity** of the reflected wave to the **intensity** of the incident wave ($R = I_r / I_i$)."
        },
        {
          id: "sol",
          type: "solution",
          title: "Intensity Ratios",
          content: "Intensity is power per unit area, proportional to amplitude squared.",
          interactiveSteps:[
            {
              prompt: "Since both the incident and reflected waves travel in the exact same medium (string 1), their speeds are identical. Thus, the ratio of intensities is simply the ratio of their squared amplitudes.",
              options:[
                { id: "A", text: "$R = \\frac{A_r^2}{A_i^2}$", isCorrect: true, explanation: "Correct." }
              ]
            },
            {
              prompt: "Substitute our amplitude formula $\\frac{A_r}{A_i} = \\frac{v_2 - v_1}{v_1 + v_2}$.",
              options:[
                { id: "A", text: "$R = \\left(\\frac{v_2 - v_1}{v_1 + v_2}\\right)^2$", isCorrect: true, explanation: "Since it is squared, it doesn't matter whether the wave hits a denser or lighter string; the same fraction of energy reflects." }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "les-3-6-2-5",
      title: "Exercise 13.9: Slope Continuity",
      description: "Why must the slope be continuous?",
      icon: "TrendingUp",
      slides:[
        {
          id: "q",
          type: "example_q",
          title: "Exercise 13.9 (From Text)",
          content: "Show that if the tension is continuous at the junction, the slope $dy/dx$ is continuous. (Assuming a standard massless knot)."
        },
        {
          id: "sol",
          type: "solution",
          title: "Force Balance",
          content: "Analyze the forces exactly at the knot.",
          interactiveSteps:[
            {
              prompt: "The knot connecting the strings has zero mass. If there was a net vertical force on this zero mass, what would its acceleration be?",
              options:[
                { id: "A", text: "Zero", isCorrect: false },
                { id: "B", text: "Infinite", isCorrect: true, explanation: "$a = F_{net} / 0 = \\infty$. Infinite acceleration is physically impossible." }
              ]
            },
            {
              prompt: "Therefore, the net vertical force must be perfectly zero. The vertical force from string 1 is $F_1 \\sin \\theta_1$ and string 2 is $F_2 \\sin \\theta_2$. If $F_1 = F_2 = F$, what must be true about the slopes?",
              options:[
                { id: "A", text: "$\\frac{\\partial y_1}{\\partial x} = \\frac{\\partial y_2}{\\partial x}$", isCorrect: true, explanation: "Since the forces must cancel, $F \\frac{\\partial y_1}{\\partial x} = F \\frac{\\partial y_2}{\\partial x}$, so the slopes must match perfectly." }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "les-3-6-2-6",
      title: "Exercise 13.10: Massive Knot",
      description: "Boundary condition for knot of mass m",
      icon: "Circle",
      slides:[
        {
          id: "q",
          type: "example_q",
          title: "Exercise 13.10",
          content: "Obtain the appropriate boundary condition for two strings joined by a knot of mass $m$."
        },
        {
          id: "sol",
          type: "solution",
          title: "Newton's Second Law",
          content: "Apply $F=ma$ directly to the knot.",
          interactiveSteps:[
            {
              prompt: "Unlike the previous exercise, the knot now has mass $m$. Therefore, the net vertical force doesn't have to be zero. What must it equal?",
              options:[
                { id: "A", text: "$m \\frac{\\partial^2 y}{\\partial t^2}$", isCorrect: true, explanation: "Mass times vertical acceleration." }
              ]
            },
            {
              prompt: "The net vertical force is the pull from the right string minus the pull from the left string. Express this mathematically.",
              options:[
                { id: "A", text: "$F \\left( \\left.\\frac{\\partial y}{\\partial x}\\right|_{0+} - \\left.\\frac{\\partial y}{\\partial x}\\right|_{0-} \\right) = m \\frac{\\partial^2 y}{\\partial t^2}$", isCorrect: true, explanation: "Correct. The slope is no longer continuous; there is a 'kink' at the knot that provides the force to accelerate the knot's mass." }
              ]
            }
          ]
        }
      ]
    }
  ]
};
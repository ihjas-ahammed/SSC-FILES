import { Unit } from '../../types';

export const UNIT_3_4_2_TRAVELING_WAVES: Unit = {
  id: "unit-3-4-2",
  title: "Traveling Waves",
  description: "D'Alembert's Form and Wave Pulses",
  color: "duo-pink",
  lessons:[
    {
      id: "les-3-4-2-1",
      title: "Pulse Propagation",
      description: "Figure 13.5 Analysis",
      icon: "FastForward",
      slides:[
        {
          id: "warmup-1",
          type: "quiz",
          title: "Conceptual Warm-up 1",
          content: "Unlike standing waves which oscillate in place, a traveling wave or pulse physically moves through space. Does its shape change as it moves in an ideal medium?",
          options:[
            { id: "A", text: "Yes, it flattens out.", isCorrect: false, explanation: "In a perfect, non-dispersive ideal medium, it maintains its shape exactly." },
            { id: "B", text: "No, it maintains its shape.", isCorrect: true, explanation: "The entire disturbance simply translates through space." }
          ]
        },
        {
          id: "theory-def",
          type: "theory",
          title: "The Wave Pulse",
          content: "Consider a single disturbance, or 'pulse', created at one end of a long string. \n\nAs time progresses, this pulse travels down the string at a constant velocity $v$. If we observe the pulse at different times, it looks exactly the same, just shifted further down the string by a distance $vt$."
        },
        {
          id: "canvas-1",
          type: "interactive_canvas",
          title: "Pulse Propagation",
          content: "The shape translates steadily to the right at velocity v.",
          interactiveCanvasId: "pulse-propagation"
        },
        {
          id: "num-1",
          type: "numerical",
          title: "Distance Traveled",
          content: "If a wave pulse travels at a constant velocity of $v = 5$ m/s, how far down the string is the peak of the pulse after $3$ seconds? (Assuming it started at $x=0$).",
          numericAnswer: 15,
          numericTolerance: 0.1
        },
        {
          id: "mcq-1",
          type: "quiz",
          title: "Knowledge Check",
          content: "As the pulse passes through a specific point $x$ on the string, what happens to the physical medium (the string material) at that point?",
          options:[
            { id: "A", text: "It moves horizontally with the pulse.", isCorrect: false },
            { id: "B", text: "It moves vertically up and then back down.", isCorrect: true, explanation: "The medium only undergoes transverse motion." }
          ]
        },
        {
          id: "fib-1",
          type: "fill_in_blank",
          title: "Key Takeaway",
          content: "A single, isolated wave disturbance that moves through a medium without repeating is called a wave ___.",
          blankAnswer: "pulse"
        }
      ]
    },
    {
      id: "les-3-4-2-2",
      title: "The Traveling Form",
      description: "Mathematical definition f(x - vt)",
      icon: "FunctionSquare",
      slides:[
        {
          id: "warmup-1",
          type: "quiz",
          title: "Conceptual Warm-up 1",
          content: "If you have a function $f(x)$, and you want to shift the entire graph to the right by a distance 'd', what is the new function?",
          options:[
            { id: "A", text: "$f(x + d)$", isCorrect: false, explanation: "This shifts the graph to the left." },
            { id: "B", text: "$f(x - d)$", isCorrect: true, explanation: "Subtracting a value from the argument shifts the plot right." }
          ]
        },
        {
          id: "theory-def",
          type: "theory",
          title: "D'Alembert's Traveling Waves",
          content: "If a wave has an initial shape $f(x)$ at $t=0$, and it travels to the right at velocity $v$, its shape at any later time $t$ will be shifted by distance $d = vt$.\n\nMathematically, a wave moving to the right is described by:\n$$ y(x,t) = f(x - vt) $$\n\nA wave moving to the left is described by:\n$$ y(x,t) = f(x + vt) $$"
        },
        {
          id: "canvas-2",
          type: "interactive_canvas",
          title: "The Right-Traveling Function",
          content: "The argument (x - vt) perfectly models steady translation.",
          interactiveCanvasId: "traveling-wave-form"
        },
        {
          id: "proof-1",
          type: "proof",
          title: "Tracking the Peak",
          content: "Let's prove the peak moves at velocity $v$.",
          proofSteps:[
            "Suppose the peak of the wave function $f(u)$ occurs when its argument $u = 0$.",
            "At $t=0$, the peak is at $x=0$ because $u = 0 - v(0) = 0$.",
            "At some later time $t$, we want to find where the peak is located. So we set $u=0$.",
            "$x - vt = 0 \implies x = vt$.",
            "The position of the peak is $x = vt$, meaning it moved right at speed $v$."
          ]
        },
        {
          id: "num-1",
          type: "numerical",
          title: "Applying the Form",
          content: "A wave pulse is described by the equation $y = 10 / (2 + (x - 4t)^2)$. What is the velocity $v$ of this wave?",
          numericAnswer: 4,
          numericTolerance: 0.1
        },
        {
          id: "mcq-1",
          type: "quiz",
          title: "Knowledge Check",
          content: "What does the function $g(x + 3t)$ represent?",
          options:[
            { id: "A", text: "A wave traveling right at 3 m/s.", isCorrect: false },
            { id: "B", text: "A wave traveling left at 3 m/s.", isCorrect: true, explanation: "The plus sign indicates a leftward shift over time." }
          ]
        }
      ]
    },
    {
      id: "les-3-4-2-3",
      title: "Proving the Traveling Solution",
      description: "Verifying it solves the Wave Equation",
      icon: "CheckSquare",
      slides:[
        {
          id: "warmup-1",
          type: "quiz",
          title: "Conceptual Warm-up 1",
          content: "Does the function $f(x-vt)$ restrict the wave to be a specific shape, like a sine wave?",
          options:[
            { id: "A", text: "Yes", isCorrect: false },
            { id: "B", text: "No", isCorrect: true, explanation: "It can be ANY twice-differentiable shape: a pulse, a triangle, or a sine wave." }
          ]
        },
        {
          id: "theory-def",
          type: "theory",
          title: "The Ultimate Test",
          content: "For $f(x-vt)$ to represent a physical wave on a string, it must be a valid mathematical solution to the linear wave equation:\n$$ \\frac{\\partial^2 y}{\\partial x^2} = \\frac{1}{v^2} \\frac{\\partial^2 y}{\\partial t^2} $$"
        },
        {
          id: "proof-1",
          type: "proof",
          title: "Verifying D'Alembert's Solution",
          content: "We use the Chain Rule. Let $u = x - vt$. So $y = f(u)$.",
          proofSteps:[
            "Spatial derivative: $\\frac{\\partial y}{\\partial x} = f'(u) \\cdot \\frac{\\partial u}{\\partial x} = f'(u) \\cdot 1$.",
            "Second spatial: $\\frac{\\partial^2 y}{\\partial x^2} = f''(u)$.",
            "Time derivative: $\\frac{\\partial y}{\\partial t} = f'(u) \\cdot \\frac{\\partial u}{\\partial t} = f'(u) \\cdot (-v)$.",
            "Second time: $\\frac{\\partial^2 y}{\\partial t^2} = f''(u) \\cdot (-v)^2 = v^2 f''(u)$.",
            "Substitute into the RHS of wave equation: $\\frac{1}{v^2}(v^2 f''(u)) = f''(u)$.",
            "Since LHS = $f''(u)$ and RHS = $f''(u)$, the equation is perfectly satisfied!"
          ]
        },
        {
          id: "num-1",
          type: "numerical",
          title: "Derivative Ratio",
          content: "If a wave is traveling at $v = 3$ m/s, what is the value of the ratio $\\frac{\\partial^2 y / \\partial t^2}{\\partial^2 y / \\partial x^2}$ ?",
          numericAnswer: 9,
          numericTolerance: 0.1
        },
        {
          id: "mcq-1",
          type: "quiz",
          title: "Knowledge Check",
          content: "Would the proof still work if we used $f(x+vt)$?",
          options:[
            { id: "A", text: "Yes", isCorrect: true, explanation: "When we take the second time derivative, the $+v$ is squared, yielding $v^2$, leading to the exact same result." },
            { id: "B", text: "No", isCorrect: false }
          ]
        }
      ]
    },
    {
      id: "les-3-4-2-4",
      title: "Exercise 13.6",
      description: "Proportionality of Wave Number",
      icon: "TrendingUp",
      slides:[
        {
          id: "ex-13-6-q",
          type: "example_q",
          title: "Exercise 13.6",
          content: "Show that for waves traveling in a given medium, the wave number $k$ is directly proportional to the frequency $f$."
        },
        {
          id: "ex-13-6-sol",
          type: "solution",
          title: "Solution Steps",
          content: "We link the definitions of $k$ and $v$.",
          interactiveSteps:[
            {
              prompt: "What is the defining formula for wave number $k$?",
              options:[
                { id: "a", text: "$k = 2\\pi / \\lambda$", isCorrect: true, explanation: "Correct." }
              ]
            },
            {
              prompt: "From the fundamental wave relationship $v = \\lambda f$, solve for $\\lambda$.",
              options:[
                { id: "a", text: "$\\lambda = v / f$", isCorrect: true, explanation: "Correct." }
              ]
            },
            {
              prompt: "Substitute this expression for $\\lambda$ into the wave number equation.",
              options:[
                { id: "a", text: "$k = \\frac{2\\pi}{v/f} = \\left(\\frac{2\\pi}{v}\\right) f$", isCorrect: true, explanation: "Correct." }
              ]
            }
          ]
        },
        {
          id: "mcq-1",
          type: "quiz",
          title: "Conclusion Check",
          content: "Because $k = (2\\pi/v) f$, why can we conclude they are directly proportional?",
          options:[
            { id: "A", text: "Because $2\\pi$ and $v$ are constants for a given medium.", isCorrect: true, explanation: "Wave speed $v$ is fixed by the medium's tension and density, making $2\\pi/v$ a constant." },
            { id: "B", text: "Because frequency is always constant.", isCorrect: false }
          ]
        }
      ]
    },
    {
      id: "les-3-4-2-5",
      title: "Exercise 13.7",
      description: "Plotting Sine Wave values",
      icon: "Activity",
      slides:[
        {
          id: "ex-13-7-q",
          type: "example_q",
          title: "Exercise 13.7",
          content: "Consider the traveling wave $y(x,t) = A \\sin(kx - \\omega t)$. \n\nWe want to analyze the shape of this wave at three specific times: $t=0$, $t=\\tau/4$, and $t=\\tau/2$ (where $\\tau$ is the period)."
        },
        {
          id: "ex-13-7-sol",
          type: "solution",
          title: "Evaluating the Wave",
          content: "Substitute the time values.",
          interactiveSteps:[
            {
              prompt: "At $t=0$, what is the wave function?",
              options:[
                { id: "a", text: "$y = A \\sin(kx)$", isCorrect: true, explanation: "This is a standard unshifted sine wave." }
              ]
            },
            {
              prompt: "At $t=\\tau/4$, calculate the argument shift $\\omega t$. (Remember $\\omega = 2\\pi/\\tau$).",
              options:[
                { id: "a", text: "$\\omega t = (2\\pi/\\tau)(\\tau/4) = \\pi/2$", isCorrect: true, explanation: "Correct." }
              ]
            },
            {
              prompt: "So at $t=\\tau/4$, the wave is $A \\sin(kx - \\pi/2)$. Using trig identities, what does this equal?",
              options:[
                { id: "a", text: "$-A \\cos(kx)$", isCorrect: true, explanation: "The sine wave has shifted to the right by exactly one quarter of a wavelength." }
              ]
            },
            {
              prompt: "At $t=\\tau/2$, $\\omega t = \\pi$. The wave is $A \\sin(kx - \\pi)$. What does this equal?",
              options:[
                { id: "a", text: "$-A \\sin(kx)$", isCorrect: true, explanation: "The wave has shifted half a wavelength, effectively flipping upside down." }
              ]
            }
          ]
        }
      ]
    }
  ]
};
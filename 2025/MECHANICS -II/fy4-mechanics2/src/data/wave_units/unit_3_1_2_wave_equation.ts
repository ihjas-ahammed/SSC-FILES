import { Unit } from '../../types';

export const UNIT_3_1_2_WAVE_EQUATION: Unit = {
  id: "unit-3-1-2",
  title: "Deriving the Wave Equation",
  description: "From Newton's Laws to the Linear Wave Equation",
  color: "duo-violet",
  lessons:[
    {
      id: "les-3-1-2-1",
      title: "The Wave Function Snapshot",
      description: "Mathematical representation of a string",
      icon: "Camera",
      slides:[
        {
          id: "warmup-1",
          type: "quiz",
          title: "Conceptual Warm-up 1",
          content: "If you take an instantaneous photograph of a wave on a string, does the shape in the photo depend on time $t$?",
          options:[
            { id: "A", text: "Yes", isCorrect: false, explanation: "A photograph freezes time, so $t$ is constant." },
            { id: "B", text: "No", isCorrect: true, explanation: "The shape is purely a function of position $x$, written as $y(x)$." }
          ]
        },
        {
          id: "warmup-2",
          type: "quiz",
          title: "Conceptual Warm-up 2",
          content: "What mathematical function best describes the simple continuous up-and-down shape of a vibrating string?",
          options:[
            { id: "A", text: "A parabola", isCorrect: false },
            { id: "B", text: "A sine or cosine function", isCorrect: true, explanation: "Sinusoidal functions perfectly capture the periodic nature of waves." }
          ]
        },
        {
          id: "theory-def",
          type: "theory",
          title: "Snapshot of a String",
          content: "Consider a string of length $L$ fixed at both ends. If you photograph the string while it vibrates, the vertical displacement $y$ depends only on the horizontal position $x$, so $y = y(x)$.\n\nThe curve repeats after a distance $x = \\lambda$. We can describe this mathematically as:\n$$ y(x) = A \\sin\\left(\\frac{2\\pi x}{\\lambda}\\right) = A \\sin(kx) $$"
        },
        {
          id: "canvas-1",
          type: "interactive_canvas",
          title: "String Wavelength Visual",
          content: "A standing wave fitting exactly onto a string of length L.",
          interactiveCanvasId: "string-wavelength-visual"
        },
        {
          id: "proof-1",
          type: "proof",
          title: "Finding the Nodes",
          content: "We will prove that nodes occur when $x$ is a multiple of $\\lambda/2$.",
          proofSteps:[
            "A node is a point of zero displacement: $y(x) = A \\sin(2\\pi x / \\lambda) = 0$.",
            "The sine function equals zero when its argument is an integer multiple of $\\pi$.",
            "So, $\\frac{2\\pi x}{\\lambda} = n\\pi$ where $n = 0, 1, 2, \\dots$",
            "Solving for $x$: $x = n \\frac{\\lambda}{2}$.",
            "Thus, nodes appear every half-wavelength."
          ]
        },
        {
          id: "num-1",
          type: "numerical",
          title: "Fitting a Wave",
          content: "A string is $L = 6$ m long and fixed at both ends. What is the wavelength $\\lambda$ of the longest possible simple standing wave (first harmonic) that fits on this string?",
          numericAnswer: 12,
          numericTolerance: 0.1
        },
        {
          id: "mcq-1",
          type: "quiz",
          title: "Knowledge Check",
          content: "When we want to describe the moving wave, not just a snapshot, the displacement $y$ becomes a function of:",
          options:[
            { id: "A", text: "Only time $t$", isCorrect: false },
            { id: "B", text: "Both position $x$ and time $t$", isCorrect: true, explanation: "The wave function is $y(x,t)$." }
          ]
        },
        {
          id: "fib-1",
          type: "fill_in_blank",
          title: "Key Takeaway",
          content: "Points on the string where the displacement is always zero are called ___.",
          blankAnswer: "nodes"
        }
      ]
    },
    {
      id: "les-3-1-2-2",
      title: "Forces on a String Segment",
      description: "Analyzing the Tension",
      icon: "Scissors",
      slides:[
        {
          id: "warmup-1",
          type: "quiz",
          title: "Conceptual Warm-up 1",
          content: "In a stretched string, what is the primary physical force pulling a displaced segment back toward the center equilibrium line?",
          options:[
            { id: "A", text: "Gravity", isCorrect: false, explanation: "Gravity is usually negligible compared to the strong forces inside the string." },
            { id: "B", text: "Tension", isCorrect: true, explanation: "The tight pulling force along the string is what restores it to straightness." }
          ]
        },
        {
          id: "warmup-2",
          type: "quiz",
          title: "Conceptual Warm-up 2",
          content: "For an ideal, perfectly flexible string, is the magnitude of the tension $F$ the same everywhere along the string?",
          options:[
            { id: "A", text: "Yes", isCorrect: true, explanation: "In an ideal string undergoing small vibrations, tension $F$ is uniform." },
            { id: "B", text: "No", isCorrect: false }
          ]
        },
        {
          id: "theory-def",
          type: "theory",
          title: "Isolating a Segment",
          content: "Let's zoom in on an infinitesimal segment of the string of length $dx$. The mass of this element is $dm = \\rho dx$, where $\\rho$ is the mass per unit length.\n\nThe string is subjected to a Tension $F(x)$ acting to the left (at angle $\\theta$) and a Tension $F(x+dx)$ acting to the right (at angle $\\phi$). Because the segment is not accelerating horizontally, the horizontal tension components must cancel, so the magnitude of tension is uniform: $F(x) = F(x+dx) = F$."
        },
        {
          id: "canvas-2",
          type: "interactive_canvas",
          title: "Segment Forces",
          content: "Notice the slight difference in angles $\\theta$ and $\\phi$ at the two ends.",
          interactiveCanvasId: "segment-forces"
        },
        {
          id: "proof-1",
          type: "proof",
          title: "Horizontal Equilibrium",
          content: "We will prove that the horizontal tension is constant.",
          proofSteps:[
            "Assume the string segment $dx$ only moves vertically.",
            "Horizontal acceleration $a_x = 0$.",
            "Net horizontal force: $\\Sigma F_x = F(x+dx)\\cos\\phi - F(x)\\cos\\theta = 0$.",
            "For small angles, $\\cos\\theta \\approx 1$ and $\\cos\\phi \\approx 1$.",
            "Therefore, $F(x+dx) \\approx F(x) = F$. The tension magnitude is constant."
          ]
        },
        {
          id: "num-1",
          type: "numerical",
          title: "Segment Mass",
          content: "A guitar string has a linear mass density of $\\rho = 0.05$ kg/m. What is the mass $dm$ of a tiny segment of length $dx = 0.1$ m?",
          numericAnswer: 0.005,
          numericTolerance: 0.0001
        },
        {
          id: "mcq-1",
          type: "quiz",
          title: "Knowledge Check",
          content: "What causes the string segment to accelerate vertically if the tension magnitude $F$ is the same at both ends?",
          options:[
            { id: "A", text: "The difference in the angles at each end.", isCorrect: true, explanation: "Because the string curves, $\\phi$ and $\\theta$ are slightly different, creating a net vertical force." },
            { id: "B", text: "A change in the mass of the segment.", isCorrect: false }
          ]
        },
        {
          id: "fib-1",
          type: "fill_in_blank",
          title: "Key Takeaway",
          content: "The mass of an infinitesimal segment is the product of its length $dx$ and its linear mass ___ $\\rho$.",
          blankAnswer: "density"
        }
      ]
    },
    {
      id: "les-3-1-2-3",
      title: "Applying Newton's 2nd Law",
      description: "Setting up the differential equation",
      icon: "TrendingUp",
      slides:[
        {
          id: "warmup-1",
          type: "quiz",
          title: "Conceptual Warm-up 1",
          content: "Which fundamental law of physics is used to derive the wave equation for mechanical waves?",
          options:[
            { id: "A", text: "Newton's Second Law", isCorrect: true, explanation: "$F = ma$ applied to a tiny string segment gives us the wave equation." },
            { id: "B", text: "Kepler's Laws", isCorrect: false }
          ]
        },
        {
          id: "warmup-2",
          type: "quiz",
          title: "Conceptual Warm-up 2",
          content: "What is the proper mathematical expression for the vertical acceleration of the string segment $y(x,t)$?",
          options:[
            { id: "A", text: "$\\partial y / \\partial x$", isCorrect: false, explanation: "That is the spatial slope." },
            { id: "B", text: "$\\partial^2 y / \\partial t^2$", isCorrect: true, explanation: "Acceleration is the second partial derivative of position with respect to time." }
          ]
        },
        {
          id: "theory-def",
          type: "theory",
          title: "Net Vertical Force",
          content: "The vertical acceleration is $a_y = \\partial^2 y / \\partial t^2$. We apply Newton's second law ($F_{net} = m a_y$) to the element $dm = \\rho dx$.\n\nThe upward force is $F\\sin\\phi$ and the downward force is $F\\sin\\theta$.\n$$ \\rho dx \\frac{\\partial^2 y}{\\partial t^2} = F\\sin\\phi - F\\sin\\theta $$"
        },
        {
          id: "canvas-3",
          type: "interactive_canvas",
          title: "Newton's Law on String",
          content: "Focusing purely on the unbalanced vertical components.",
          interactiveCanvasId: "newtons-law-string"
        },
        {
          id: "proof-1",
          type: "proof",
          title: "Setting up the ODE",
          content: "We will formalize the force equation.",
          proofSteps:[
            "Mass of segment: $m = \\rho dx$.",
            "Acceleration of segment: $a = \\frac{\\partial^2 y(x,t)}{\\partial t^2}$.",
            "Net force: $\\Sigma F_y = F(x+dx)\\sin\\phi - F(x)\\sin\\theta$.",
            "Equating them: $\\rho dx \\frac{\\partial^2 y}{\\partial t^2} = F(\\sin\\phi - \\sin\\theta)$."
          ]
        },
        {
          id: "num-1",
          type: "numerical",
          title: "Net Force Calculation",
          content: "A string has tension $F = 50$ N. At one end of a segment, $\\sin\\phi = 0.10$. At the other end, $\\sin\\theta = 0.05$. What is the net vertical force in Newtons?",
          numericAnswer: 2.5,
          numericTolerance: 0.1
        },
        {
          id: "mcq-1",
          type: "quiz",
          title: "Knowledge Check",
          content: "Why do we use partial derivatives ($\\partial$) instead of ordinary derivatives ($d$) for acceleration here?",
          options:[
            { id: "A", text: "Because acceleration is a vector.", isCorrect: false },
            { id: "B", text: "Because the displacement $y$ depends on both $x$ and $t$.", isCorrect: true, explanation: "We are holding position $x$ constant while taking the time derivative." }
          ]
        },
        {
          id: "fib-1",
          type: "fill_in_blank",
          title: "Key Takeaway",
          content: "The unbalanced vertical force on the segment is $F(\\sin\\phi - \\sin\\theta)$, driving the vertical ___.",
          blankAnswer: "acceleration"
        }
      ]
    },
    {
      id: "les-3-1-2-4",
      title: "Small Angle Approximation",
      description: "Simplifying the trig functions",
      icon: "Minimize",
      slides:[
        {
          id: "warmup-1",
          type: "quiz",
          title: "Conceptual Warm-up 1",
          content: "For very small angles (close to zero), the value of $\\sin(\\theta)$ is approximately equal to:",
          options:[
            { id: "A", text: "$\\cos(\\theta)$", isCorrect: false },
            { id: "B", text: "$\\tan(\\theta)$", isCorrect: true, explanation: "For small $\\theta$, $\\sin(\\theta) \\approx \\tan(\\theta) \\approx \\theta$ (in radians)." }
          ]
        },
        {
          id: "warmup-2",
          type: "quiz",
          title: "Conceptual Warm-up 2",
          content: "In calculus, what does the tangent of the angle of a curve represent?",
          options:[
            { id: "A", text: "The area under the curve.", isCorrect: false },
            { id: "B", text: "The slope of the curve.", isCorrect: true, explanation: "The slope is exactly $\\partial y / \\partial x$, which equals $\\tan(\\theta)$." }
          ]
        },
        {
          id: "theory-def",
          type: "theory",
          title: "Replacing Sine with Slope",
          content: "Assuming the amplitude is small, the angles $\\theta$ and $\\phi$ are small. We can use the approximation:\n$$ \\sin\\theta \\approx \\tan\\theta = \\frac{\\partial y(x,t)}{\\partial x} $$\n\nSimilarly for the right side of the segment:\n$$ \\sin\\phi \\approx \\tan\\phi = \\frac{\\partial y(x+dx, t)}{\\partial x} $$"
        },
        {
          id: "canvas-4",
          type: "interactive_canvas",
          title: "Small Angle Geometry",
          content: "Visualizing why Sine and Tangent converge for tiny displacements.",
          interactiveCanvasId: "small-angle-approx"
        },
        {
          id: "proof-1",
          type: "proof",
          title: "Updating the Force Equation",
          content: "We will rewrite the net force using spatial derivatives.",
          proofSteps:[
            "Start with: $F_{net} = F(\\sin\\phi - \\sin\\theta)$.",
            "Substitute $\\sin\\phi \\approx \\frac{\\partial y(x+dx, t)}{\\partial x}$.",
            "Substitute $\\sin\\theta \\approx \\frac{\\partial y(x, t)}{\\partial x}$.",
            "Result: $F_{net} = F \\left[ \\frac{\\partial y(x+dx, t)}{\\partial x} - \\frac{\\partial y(x, t)}{\\partial x} \\right]$."
          ]
        },
        {
          id: "num-1",
          type: "numerical",
          title: "Approximation Accuracy",
          content: "If an angle is $\\theta = 0.1$ radians, $\\tan(0.1)$ is approximately $0.1003$. What is $\\sin(0.1)$ approximately?",
          numericAnswer: 0.100,
          numericTolerance: 0.005
        },
        {
          id: "mcq-1",
          type: "quiz",
          title: "Knowledge Check",
          content: "Why is it mathematically necessary to convert the forces into partial derivatives $\\partial y / \\partial x$?",
          options:[
            { id: "A", text: "To eliminate the tension $F$.", isCorrect: false },
            { id: "B", text: "To link the force to the physical shape (curvature) of the string.", isCorrect: true, explanation: "This step connects the dynamic force to the geometric shape." }
          ]
        },
        {
          id: "fib-1",
          type: "fill_in_blank",
          title: "Key Takeaway",
          content: "For a stretched string, the restoring force is proportional to the difference in ___ at the two ends.",
          blankAnswer: "slopes"
        }
      ]
    },
    {
      id: "les-3-1-2-5",
      title: "The Linear Wave Equation",
      description: "The Final Form (Eq 13.1)",
      icon: "FunctionSquare",
      slides:[
        {
          id: "warmup-1",
          type: "quiz",
          title: "Conceptual Warm-up 1",
          content: "In calculus, the difference between two slopes divided by the distance between them $dx$ gives you what?",
          options:[
            { id: "A", text: "The first derivative.", isCorrect: false },
            { id: "B", text: "The second derivative.", isCorrect: true, explanation: "The rate of change of the slope is the second derivative (curvature)." }
          ]
        },
        {
          id: "warmup-2",
          type: "quiz",
          title: "Conceptual Warm-up 2",
          content: "Which two physical properties of the string determine the speed of the wave?",
          options:[
            { id: "A", text: "Tension and Mass Density.", isCorrect: true, explanation: "Specifically, $v = \\sqrt{F/\\rho}$." },
            { id: "B", text: "Length and Amplitude.", isCorrect: false, explanation: "These do not affect the wave speed." }
          ]
        },
        {
          id: "theory-def",
          type: "theory",
          title: "The Final Assembly",
          content: "We divide our force equation by $dx$ and take the limit as $dx \\to 0$. The bracketed term becomes the second spatial derivative:\n$$ \\rho \\frac{\\partial^2 y}{\\partial t^2} = F \\frac{\\partial^2 y}{\\partial x^2} $$\n\nRearranging gives the famous 1D Linear Wave Equation:\n$$ \\frac{\\partial^2 y}{\\partial x^2} = \\frac{1}{v^2} \\frac{\\partial^2 y}{\\partial t^2} $$"
        },
        {
          id: "canvas-5",
          type: "interactive_canvas",
          title: "Curvature vs Acceleration",
          content: "The Wave Equation states that the acceleration of a point is directly proportional to the curvature of the string at that point.",
          interactiveCanvasId: "linear-wave-equation"
        },
        {
          id: "proof-1",
          type: "proof",
          title: "Extracting Wave Speed",
          content: "We will prove that the phase velocity is $v = \\sqrt{F/\\rho}$.",
          proofSteps:[
            "Start with: $\\frac{\\partial^2 y}{\\partial x^2} = \\frac{\\rho}{F} \\frac{\\partial^2 y}{\\partial t^2}$.",
            "Compare this to the standard form: $\\frac{\\partial^2 y}{\\partial x^2} = \\frac{1}{v^2} \\frac{\\partial^2 y}{\\partial t^2}$.",
            "Equating the constants: $\\frac{1}{v^2} = \\frac{\\rho}{F}$.",
            "Solve for $v$: $v^2 = \\frac{F}{\\rho} \\implies v = \\sqrt{\\frac{F}{\\rho}}$."
          ]
        },
        {
          id: "num-1",
          type: "numerical",
          title: "Wave Speed Calculation",
          content: "A string has a tension of $F = 100$ N and a linear mass density of $\\rho = 0.01$ kg/m. What is the wave speed $v$ in m/s?",
          numericAnswer: 100,
          numericTolerance: 0.1
        },
        {
          id: "mcq-1",
          type: "quiz",
          title: "Knowledge Check",
          content: "If you want to make a wave travel faster on a guitar string, what should you do?",
          options:[
            { id: "A", text: "Increase the tension $F$.", isCorrect: true, explanation: "Since $v = \\sqrt{F/\\rho}$, increasing the tension increases the wave speed." },
            { id: "B", text: "Use a heavier string (increase $\\rho$).", isCorrect: false, explanation: "Increasing $\\rho$ would decrease the speed." }
          ]
        },
        {
          id: "fib-1",
          type: "fill_in_blank",
          title: "Key Takeaway",
          content: "The 1D wave equation relates the second spatial derivative of displacement to its second ___ derivative.",
          blankAnswer: "time"
        }
      ]
    }
  ]
};
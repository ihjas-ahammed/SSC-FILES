import { Unit } from '../../types';

export const UNIT_4_4_1_GRAVITATIONAL_EFFECTS: Unit = {
  id: "unit-4-4-1",
  title: "441 (Gravitational Effects)",
  description: "Centrifugal Force and the Plumb Bob",
  color: "duo-blue",
  lessons:[
    {
      id: "les-4-4-1-1",
      title: "Forces on a Plumb Bob",
      description: "Analyzing the static pendulum",
      icon: "TrendingDown",
      slides:[
        {
          id: "wu1",
          type: "quiz",
          title: "Conceptual Warm-up 1",
          content: "If you hang a heavy weight from a string (a plumb bob) and wait for it to stop swinging, does it point EXACTLY to the geometric center of the Earth?",
          options:[
            { id: "A", text: "Yes", isCorrect: false, explanation: "If the Earth were perfectly stationary, it would. But the Earth is rotating!" },
            { id: "B", text: "No", isCorrect: true, explanation: "Due to the Earth's rotation, the bob is deflected slightly." }
          ]
        },
        {
          id: "wu2",
          type: "quiz",
          title: "Conceptual Warm-up 2",
          content: "Which fictitious force is responsible for pushing the plumb bob away from the axis of rotation?",
          options:[
            { id: "A", text: "Coriolis Force", isCorrect: false, explanation: "Coriolis force only acts on moving objects. The plumb bob is at rest relative to the Earth." },
            { id: "B", text: "Centrifugal Force", isCorrect: true, explanation: "The centrifugal force pushes objects radially outward from the axis of rotation." }
          ]
        },
        {
          id: "theory",
          type: "theory",
          title: "Forces on the Bob",
          content: "Consider a plumb bob hanging at rest relative to the Earth. The \"real\" forces acting on the bob are the tension in the string $\\mathbf{T}$ and the true gravitational attraction of the Earth $m\\mathbf{g}$ (directed towards the center).\n\nBecause we are in a rotating frame, we must also include fictitious forces. Since the bob is at rest ($\\mathbf{v}_{rot} = 0$), the Coriolis force is zero. The only fictitious force is the centrifugal force:\n$$ \\mathbf{F}_c = -m\\mathbf{\\Omega} \\times (\\mathbf{\\Omega} \\times \\mathbf{r}) $$"
        },
        {
          id: "canvas",
          type: "interactive_canvas",
          title: "Figure 15.4: Plumb Bob Forces",
          content: "The centrifugal force pulls the bob slightly outward, away from the axis of rotation.",
          interactiveCanvasId: "plumb-bob-forces"
        },
        {
          id: "proof",
          type: "proof",
          title: "Equation of Equilibrium",
          content: "We want to show that the sum of the forces equals zero in the rotating frame.",
          proofSteps:[
            "Start with Newton's Second Law in the rotating frame: $m\\mathbf{a}_{rot} = \\mathbf{F}_{real} + \\mathbf{F}_{fictitious}$.",
            "Since the plumb bob is hanging at rest, $\\mathbf{a}_{rot} = 0$.",
            "The real forces are $\\mathbf{T} + m\\mathbf{g}$.",
            "The fictitious force is $-m\\mathbf{\\Omega} \\times (\\mathbf{\\Omega} \\times \\mathbf{r})$.",
            "Result: $\\mathbf{T} + m\\mathbf{g} - m[\\mathbf{\\Omega} \\times (\\mathbf{\\Omega} \\times \\mathbf{r})] = 0$."
          ]
        },
        {
          id: "num",
          type: "numerical",
          title: "Centrifugal Force Magnitude",
          content: "Consider a planet with rotation rate $\\Omega = 10^{-4}$ rad/s and radius $R = 6 \\times 10^6$ m. What is the magnitude of the centrifugal force on a $10$ kg mass at the equator? (In Newtons)",
          numericAnswer: 0.6,
          numericTolerance: 0.05
        },
        {
          id: "mcq",
          type: "quiz",
          title: "Knowledge Check",
          content: "At which location on Earth is the centrifugal force on a plumb bob equal to zero?",
          options:[
            { id: "A", text: "The Equator", isCorrect: false },
            { id: "B", text: "The North or South Pole", isCorrect: true, explanation: "At the poles, the distance to the axis of rotation is zero, so the cross product $\\mathbf{\\Omega} \\times \\mathbf{r}$ is zero." }
          ]
        },
        {
          id: "fib",
          type: "fill_in_blank",
          title: "Key Takeaway",
          content: "The equation for a plumb bob at rest in a rotating frame includes Tension, Gravity, and the ___ force.",
          blankAnswer: "centrifugal"
        }
      ]
    },
    {
      id: "les-4-4-1-2",
      title: "Effective Gravity",
      description: "Defining g_e",
      icon: "Minimize",
      slides:[
        {
          id: "wu1",
          type: "quiz",
          title: "Conceptual Warm-up 1",
          content: "When you drop an object, does it accelerate exactly at the theoretical \"true\" gravity value $g = GM/R^2$?",
          options:[
            { id: "A", text: "Yes", isCorrect: false },
            { id: "B", text: "No", isCorrect: true, explanation: "The measured free-fall acceleration includes the effect of the centrifugal force, reducing the effective gravity slightly at the equator." }
          ]
        },
        {
          id: "wu2",
          type: "quiz",
          title: "Conceptual Warm-up 2",
          content: "Does the tension in a hanging string point exactly opposite to true gravity $m\\mathbf{g}$?",
          options:[
            { id: "A", text: "Yes", isCorrect: false },
            { id: "B", text: "No", isCorrect: true, explanation: "It points opposite to the EFFECTIVE gravity, which is a combination of true gravity and centrifugal force." }
          ]
        },
        {
          id: "theory",
          type: "theory",
          title: "Defining Effective Gravity",
          content: "Because we always experience true gravity and the centrifugal force together on the Earth's surface, it is highly convenient to combine them into a single term.\n\nWe define the \"effective\" gravitational acceleration $\\mathbf{g}_e$ as:\n$$ \\mathbf{g}_e = \\mathbf{g} - \\mathbf{\\Omega} \\times (\\mathbf{\\Omega} \\times \\mathbf{r}) $$"
        },
        {
          id: "canvas",
          type: "interactive_canvas",
          title: "Vector Addition of Gravity",
          content: "True gravity $\\mathbf{g}$ and centrifugal acceleration combine to form $\\mathbf{g}_e$.",
          interactiveCanvasId: "effective-gravity-vector"
        },
        {
          id: "proof",
          type: "proof",
          title: "Simplifying the Equilibrium Equation",
          content: "Let's rewrite the equation for the plumb bob using $\\mathbf{g}_e$.",
          proofSteps:[
            "Start with: $\\mathbf{T} + m\\mathbf{g} - m[\\mathbf{\\Omega} \\times (\\mathbf{\\Omega} \\times \\mathbf{r})] = 0$.",
            "Factor out the mass $m$: $\\mathbf{T} + m (\\mathbf{g} - \\mathbf{\\Omega} \\times (\\mathbf{\\Omega} \\times \\mathbf{r})) = 0$.",
            "Substitute the definition of $\\mathbf{g}_e$: $\\mathbf{T} + m\\mathbf{g}_e = 0$.",
            "Result: The tension is directed exactly opposite to the effective gravity $\\mathbf{g}_e$, NOT the true gravity $\\mathbf{g}$."
          ]
        },
        {
          id: "num",
          type: "numerical",
          title: "Effective Gravity Calculation",
          content: "If the true gravitational acceleration is $9.82$ m/s$^2$ and the centrifugal acceleration at the equator is $0.03$ m/s$^2$ (pointing directly outward), what is the magnitude of the effective gravity $\\mathbf{g}_e$ at the equator?",
          numericAnswer: 9.79,
          numericTolerance: 0.01
        },
        {
          id: "mcq",
          type: "quiz",
          title: "Knowledge Check",
          content: "In the Northern Hemisphere, where does the effective gravity vector $\\mathbf{g}_e$ point relative to the true center of the Earth?",
          options:[
            { id: "A", text: "Slightly above the center", isCorrect: false },
            { id: "B", text: "Slightly below the center", isCorrect: true, explanation: "The centrifugal force points outward and towards the equator, skewing the vector downwards (southwards) relative to the direct line to the center." }
          ]
        },
        {
          id: "fib",
          type: "fill_in_blank",
          title: "Key Takeaway",
          content: "The string of a plumb bob aligns itself with the ___ gravity vector, not the true gravity vector.",
          blankAnswer: "effective"
        }
      ]
    },
    {
      id: "les-4-4-1-3",
      title: "Angle of Deflection & The Equatorial Bulge",
      description: "Why the Earth is an oblate spheroid",
      icon: "Globe",
      slides:[
        {
          id: "wu1",
          type: "quiz",
          title: "Conceptual Warm-up 1",
          content: "If a plumb bob hangs at an angle compared to the true radial line, does water on the surface of the Earth also try to slide \"downhill\" towards the equator?",
          options:[
            { id: "A", text: "Yes", isCorrect: true, explanation: "The same centrifugal force that deflects the bob pulls mass towards the equator, creating the equatorial bulge." },
            { id: "B", text: "No", isCorrect: false }
          ]
        },
        {
          id: "wu2",
          type: "quiz",
          title: "Conceptual Warm-up 2",
          content: "Is the Earth a perfect sphere?",
          options:[
            { id: "A", text: "Yes", isCorrect: false },
            { id: "B", text: "No, it's an oblate spheroid.", isCorrect: true, explanation: "It bulges at the equator and is flattened at the poles due to its rotation." }
          ]
        },
        {
          id: "theory",
          type: "theory",
          title: "The Unbalanced Force",
          content: "If the Earth were a perfect sphere, the centrifugal force would have a component parallel to the surface pointing towards the equator.\n\nThis unbalanced parallel component would cause all loose material (water, loose rocks) to migrate towards the equator. Over billions of years, the Earth has deformed into an **oblate spheroid** to reach an equilibrium where the surface is perfectly perpendicular to the *effective* gravity $\\mathbf{g}_e$ at all points."
        },
        {
          id: "proof",
          type: "proof",
          title: "Resolving the Centrifugal Force",
          content: "Let's resolve the centrifugal acceleration $\\mathbf{a}_c = \\Omega^2 R \ \cos \lambda$ (where $\\lambda$ is latitude) into components on a spherical Earth.",
          proofSteps:[
            "Magnitude of centrifugal acceleration: $a_c = \\Omega^2 r_{\\perp} = \\Omega^2 R \ \\cos \lambda$.",
            "This vector points horizontally outward from the rotation axis.",
            "Perpendicular component (adds to gravity): $a_{\\perp} = a_c \\cos \lambda = \\Omega^2 R \\cos^2 \\lambda$.",
            "Parallel component (points to equator): $a_{\\parallel} = a_c \\sin \lambda = \\Omega^2 R \\cos \lambda \\sin \lambda$.",
            "This $a_{\\parallel}$ is the driving force that created the equatorial bulge!"
          ]
        },
        {
          id: "num",
          type: "numerical",
          title: "Max Tangential Force",
          content: "At what latitude $\\lambda$ (in degrees) is the parallel (tangential) component of the centrifugal force, $a_{\\parallel} = \\Omega^2 R \\cos \\lambda \\sin \\lambda$, maximized?",
          numericAnswer: 45,
          numericTolerance: 0.1
        },
        {
          id: "mcq",
          type: "quiz",
          title: "Knowledge Check",
          content: "Because of the equatorial bulge, a plumb line on Earth:",
          options:[
            { id: "A", text: "Does not point to the center of the Earth, but IS perpendicular to the local surface.", isCorrect: true, explanation: "The surface itself has shifted to be perpendicular to the effective gravity $\\mathbf{g}_e$." },
            { id: "B", text: "Points exactly to the center of the Earth.", isCorrect: false }
          ]
        },
        {
          id: "fib",
          type: "fill_in_blank",
          title: "Key Takeaway",
          content: "The Earth is an ___ spheroid because the surface deformed until there were no unbalanced tangential forces.",
          blankAnswer: "oblate"
        }
      ]
    },
    {
      id: "les-4-4-1-4",
      title: "Exercise 15.3",
      description: "Force diagram for a particle on the surface",
      icon: "PenTool",
      slides:[
        {
          id: "q",
          type: "example_q",
          title: "Exercise 15.3",
          content: "Draw the force diagram for a particle on the surface of a perfectly smooth, spherical, rotating planet and show that the particle accelerates towards the equator.\n\nDo this for both the Northern and Southern Hemispheres. Then demonstrate that for a planet with an equatorial bulge, there is no net force."
        },
        {
          id: "sol",
          type: "solution",
          title: "Solution: The Spherical Planet",
          content: "Consider the forces acting on the particle.",
          interactiveSteps:[
            {
              prompt: "On a perfectly spherical planet, the normal force $\\mathbf{N}$ points directly away from the center, exactly opposite to true gravity $m\\mathbf{g}$. Do these two forces cancel the centrifugal force?",
              options:[
                { id: "A", text: "No, they only cancel each other radially.", isCorrect: true, explanation: "Because $\\mathbf{N}$ and $m\\mathbf{g}$ are purely radial, they cannot balance the tangential component of the centrifugal force." }
              ]
            },
            {
              prompt: "In the Northern Hemisphere, the centrifugal force points outward from the axis. What is the direction of its tangential component along the spherical surface?",
              options:[
                { id: "A", text: "Towards the South (the equator)", isCorrect: true, explanation: "It pushes the particle downhill towards the bulging equator." }
              ]
            },
            {
              prompt: "In the Southern Hemisphere, the centrifugal force still points outward from the axis. What is the direction of its tangential component?",
              options:[
                { id: "A", text: "Towards the North (the equator)", isCorrect: true, explanation: "Again, it points towards the equator. This explains why the planet bulges in the middle." }
              ]
            }
          ]
        },
        {
          id: "omr1",
          type: "quiz",
          title: "OMR 1: The Oblate Planet",
          content: "Now consider the oblate planet. What changes about the normal force $\\mathbf{N}$?",
          options:[
            { id: "A", text: "It still points exactly away from the geometric center.", isCorrect: false },
            { id: "B", text: "It points perpendicular to the local tilted surface, no longer exactly radial.", isCorrect: true, explanation: "The tilted surface tilts the normal force. The normal force now has a tangential component that perfectly cancels the tangential centrifugal force!" }
          ]
        },
        {
          id: "omr2",
          type: "quiz",
          title: "OMR 2: Net Force",
          content: "On the fully formed oblate Earth, if you place a perfectly smooth marble on a perfectly smooth horizontal floor, will it roll towards the equator?",
          options:[
            { id: "A", text: "Yes", isCorrect: false },
            { id: "B", text: "No", isCorrect: true, explanation: "The local horizontal floor is already tilted to exactly balance the centrifugal force. The net tangential force is zero." }
          ]
        }
      ]
    }
  ]
};
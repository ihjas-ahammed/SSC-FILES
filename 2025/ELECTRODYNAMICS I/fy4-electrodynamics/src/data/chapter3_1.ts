import { Section } from '../types';

export const SECTION_3_1: Section = {
  id: "section-3-1",
  title: "Section 1: Lorentz Force & Biot-Savart Law",
  description: "Introduction to magnetic forces, moving charges, and the generation of magnetic fields by steady currents.",
  color: "duo-red",
  units: [
    {
      id: "unit-10-lorentz",
      title: "The Lorentz Force Law",
      description: "Magnetic fields, cyclotron motion, and the realization that magnetic forces do no work.",
      color: "duo-red",
      lessons: [
        {
          id: "les-10-1-mag-fields-intro", title: "Magnetic Fields", description: "Currents and forces", icon: "Magnet",
          slides: [
            { id: "s0", type: "quiz", title: "Conceptual Warm-up 1", content: "If you hang two parallel wires next to each other and pass a current UP through both of them, what happens?", options: [ { id: "A", text: "They repel each other", isCorrect: false, explanation: "That would be true for like electrostatic charges, but this is magnetism!" }, { id: "B", text: "They attract each other", isCorrect: true, explanation: "Parallel currents attract in magnetism." } ] },
            { id: "s1", type: "quiz", title: "Conceptual Warm-up 2", content: "Are the wires in the previous example electrically charged?", options: [ { id: "A", text: "Yes", isCorrect: false, explanation: "Current is moving charge, but the wire has equal protons and electrons." }, { id: "B", text: "No, they are electrically neutral", isCorrect: true, explanation: "The force must be purely magnetic, not electrostatic." } ] },
            { id: "s2", type: "theory", title: "Introduction to Magnetic Fields", content: "Stationary charges produce electric fields ($\\mathbf{E}$). However, **moving charges** (currents) generate an additional field: the **Magnetic Field** ($\\mathbf{B}$).\n\nIf you hold a compass near a current-carrying wire, the needle doesn't point toward or away from the wire; it circles *around* the wire. If you grab the wire with your right hand—thumb pointing in the direction of current—your fingers curl in the direction of the magnetic field." },
            { id: "s3", type: "interactive_canvas", title: "The Right-Hand Rule", content: "Drag the field point around the wire. Notice how the magnetic field $\\mathbf{B}$ always forms a circle around the current direction.", interactiveCanvasId: "biot-savart-interactive" },
            { 
              id: "s4", 
              type: "proof", 
              title: "Interactive Insight: Attraction of Parallel Currents", 
              content: "**Goal: Understand why parallel currents attract.**", 
              interactiveSteps: [
                {
                  stepText: "Imagine Wire 1 and Wire 2, both carrying current UP the screen."
                },
                {
                  prompt: "Using the right-hand rule on Wire 1, what is the direction of its magnetic field at the location of Wire 2 (which is to its right)?",
                  options: [
                    { id: "A", text: "Pointing INTO the screen", isCorrect: true, explanation: "Thumb up, fingers curl into the screen on the right side." },
                    { id: "B", text: "Pointing OUT OF the screen", isCorrect: false, explanation: "That would be on the left side of Wire 1." }
                  ],
                  stepText: "The magnetic field from Wire 1 points INTO the screen at Wire 2."
                },
                {
                  stepText: "Later we'll learn that a current moving UP through a field pointing IN experiences a force to the LEFT (towards Wire 1). Thus, they attract!"
                }
              ]
            },
            { id: "s5", type: "numerical", title: "Units of B", content: "The magnetic field is measured in Teslas (T). If 1 Tesla equals $10^x$ Gauss, what is $x$?", numericAnswer: 4, numericTolerance: 0.1 },
            { id: "s6", type: "quiz", title: "Antiparallel Currents", content: "If parallel currents attract, what do antiparallel currents (one UP, one DOWN) do?", options: [ { id: "A", text: "Repel", isCorrect: true, explanation: "Opposite current directions result in repulsion." }, { id: "B", text: "Attract", isCorrect: false, explanation: "" } ] },
            { id: "s7", type: "fill_in_blank", title: "Fill in the blank", content: "While stationary charges create electric fields, ___ charges create magnetic fields.", blankAnswer: "moving" }
          ]
        },
        {
          id: "les-10-2-lorentz-force", title: "Lorentz Force Law", description: "F = Q(v x B)", icon: "ArrowUpRight",
          slides: [
            { id: "s0", type: "quiz", title: "Conceptual Warm-up 1", content: "If a charged particle is completely at rest in a strong magnetic field, what is the magnetic force on it?", options: [ { id: "A", text: "Zero", isCorrect: true, explanation: "Magnetic fields only exert force on MOVING charges." }, { id: "B", text: "Very strong", isCorrect: false, explanation: "" } ] },
            { id: "s1", type: "quiz", title: "Conceptual Warm-up 2", content: "What mathematical operation relates the velocity, magnetic field, and resulting force?", options: [ { id: "A", text: "Dot Product", isCorrect: false, explanation: "Dot product yields a scalar." }, { id: "B", text: "Cross Product", isCorrect: true, explanation: "The force is mutually perpendicular to velocity and the field." } ] },
            { id: "s2", type: "theory", title: "The Lorentz Force Law", content: "The magnetic force on a charge $Q$, moving with velocity $\\mathbf{v}$ in a magnetic field $\\mathbf{B}$, is:\n\n$\\mathbf{F}_{mag} = Q(\\mathbf{v} \\times \\mathbf{B})$\n\nIn the presence of both electric and magnetic fields, the net force on $Q$ is the complete Lorentz force law:\n$\\mathbf{F} = Q[\\mathbf{E} + (\\mathbf{v} \\times \\mathbf{B})]$\n\nNotice that the magnetic force is always *perpendicular* to both the velocity of the charge and the magnetic field." },
            { id: "s3", type: "interactive_canvas", title: "Cross Product Force", content: "Drag the velocity vector to change the direction of the moving charge. Notice how the resulting Force vector is always perpendicular to velocity.", interactiveCanvasId: "lorentz-force-interactive" },
            { 
              id: "s4", 
              type: "proof", 
              title: "Interactive Insight: Negative Charges", 
              content: "**Goal: Determine the direction of force on an electron.**", 
              interactiveSteps: [
                {
                  stepText: "Suppose a proton ($+e$) moves UP in a magnetic field pointing INTO the screen."
                },
                {
                  prompt: "Using the right hand rule for $\\mathbf{v} \\times \\mathbf{B}$ (fingers UP, curl INTO screen), where does the thumb point?",
                  options: [
                    { id: "A", text: "LEFT", isCorrect: true, explanation: "Correct!" },
                    { id: "B", text: "RIGHT", isCorrect: false, explanation: "" }
                  ],
                  stepText: "The force on the proton is to the LEFT."
                },
                {
                  prompt: "Now suppose an electron ($-e$) moves UP in the same field. What is the direction of the force?",
                  options: [
                    { id: "A", text: "LEFT", isCorrect: false, explanation: "Don't forget to multiply by the negative charge!" },
                    { id: "B", text: "RIGHT", isCorrect: true, explanation: "The negative charge flips the direction of the force vector." }
                  ],
                  stepText: "Because $Q$ is negative, the force is in the opposite direction: RIGHT. Goal reached."
                }
              ]
            },
            { id: "s5", type: "numerical", title: "Calculate Force", content: "A 2 C charge moves at 3 m/s strictly along the x-axis. The magnetic field is 4 T entirely along the y-axis. What is the magnitude of the magnetic force in Newtons?", numericAnswer: 24, numericTolerance: 0.1 },
            { id: "s6", type: "quiz", title: "Parallel Motion", content: "What is the magnetic force if the charge moves exactly parallel to the magnetic field?", options: [ { id: "A", text: "Maximum", isCorrect: false, explanation: "" }, { id: "B", text: "Zero", isCorrect: true, explanation: "The cross product of parallel vectors is zero (sin 0 = 0)." } ] },
            { id: "s7", type: "fill_in_blank", title: "Fill in the blank", content: "The magnetic force is always ___ to the velocity of the particle.", blankAnswer: "perpendicular" }
          ]
        },
        {
          id: "les-10-3-cyclotron", title: "Cyclotron Motion", description: "Circular paths in B-fields", icon: "RefreshCw",
          slides: [
            { id: "s0", type: "quiz", title: "Conceptual Warm-up 1", content: "If a force is always perpendicular to your velocity, what kind of motion does it produce?", options: [ { id: "A", text: "Linear acceleration", isCorrect: false, explanation: "" }, { id: "B", text: "Circular motion", isCorrect: true, explanation: "It acts purely as a centripetal force." } ] },
            { id: "s2", type: "theory", title: "Cyclotron Motion", content: "Because the magnetic force is perpendicular to velocity, a charged particle moving in a uniform magnetic field will travel in a circle.\n\nThe magnetic force provides the exact centripetal acceleration needed:\n$QvB = m \\frac{v^2}{R}$\n\nSolving for momentum $p = mv$, we get:\n$p = QBR$\n\nThis simple formula allows physicists to measure the momentum of subatomic particles by observing the radius of their curved paths in a known magnetic field." },
            { 
              id: "s4", 
              type: "proof", 
              title: "Interactive Insight: Cyclotron Frequency", 
              content: "**Goal: Find the frequency of orbit.**", 
              interactiveSteps: [
                {
                  stepText: "We know $QvB = m v^2 / R$. Let's divide both sides by $v$."
                },
                {
                  stepText: "This leaves $QB = m (v/R)$."
                },
                {
                  prompt: "In circular motion, what is the angular velocity $\\omega$ in terms of $v$ and $R$?",
                  options: [
                    { id: "A", text: "$\\omega = v/R$", isCorrect: true, explanation: "Basic kinematic relation." },
                    { id: "B", text: "$\\omega = vR$", isCorrect: false, explanation: "" }
                  ],
                  stepText: "Substituting $\\omega = v/R$, we get $QB = m\\omega$."
                },
                {
                  stepText: "Thus, the cyclotron frequency is $\\omega = \\frac{QB}{m}$. Notice it does NOT depend on the speed $v$ or radius $R$! Goal reached."
                }
              ]
            },
            { id: "s5", type: "numerical", title: "Radius Calculation", content: "A particle with charge $Q=2$ C and mass $m=4$ kg moves at $v=5$ m/s in a field $B=10$ T. What is the radius of its circular orbit in meters?", numericAnswer: 1, numericTolerance: 0.1 },
            { id: "s6", type: "quiz", title: "Helical Motion", content: "What if the particle has a component of velocity parallel to B?", options: [ { id: "A", text: "It stops", isCorrect: false, explanation: "" }, { id: "B", text: "It moves in a helix (corkscrew)", isCorrect: true, explanation: "The perpendicular velocity makes a circle, the parallel velocity moves it forward." } ] },
            { id: "s7", type: "fill_in_blank", title: "Fill in the blank", content: "The equation $p = QBR$ is known as the ___ formula.", blankAnswer: "cyclotron" }
          ]
        },
        {
          id: "les-10-4-no-work", title: "Magnetic Forces Do No Work", description: "A peculiar property", icon: "XCircle",
          slides: [
            { id: "s0", type: "quiz", title: "Conceptual Warm-up 1", content: "In physics, work is defined as Force dotted with displacement ($\\mathbf{F} \\cdot d\\mathbf{l}$). Since $\\mathbf{F}_{mag}$ is perpendicular to velocity, what is the work done?", options: [ { id: "A", text: "Maximum", isCorrect: false, explanation: "" }, { id: "B", text: "Zero", isCorrect: true, explanation: "The dot product of perpendicular vectors is zero." } ] },
            { id: "s2", type: "theory", title: "Magnetic Forces Do No Work", content: "One of the most profound implications of the Lorentz force law is that **magnetic forces do no work** on a charge.\n\n$dW_{mag} = \\mathbf{F}_{mag} \\cdot d\\mathbf{l} = Q(\\mathbf{v} \\times \\mathbf{B}) \\cdot \\mathbf{v} dt = 0$\n\nBecause $(\\mathbf{v} \\times \\mathbf{B})$ is strictly perpendicular to $\\mathbf{v}$, their dot product vanishes exactly. Magnetic forces can alter the *direction* in which a particle moves, but they can never speed it up or slow it down. They cannot change a particle's kinetic energy." },
            { 
              id: "s4", 
              type: "proof", 
              title: "Interactive Insight: The Magnetic Crane", 
              content: "**Goal: Resolve a paradox.**", 
              interactiveSteps: [
                {
                  stepText: "A magnetic crane lifts a heavy junked car. It certainly seems like the magnetic force is doing work!"
                },
                {
                  prompt: "If the magnetic force doesn't do work, what is actually supplying the energy to lift the car?",
                  options: [
                    { id: "A", text: "The battery/generator running the electromagnet", isCorrect: true, explanation: "The magnetic field merely redirects the force; the power source does the actual work." },
                    { id: "B", text: "Gravity", isCorrect: false, explanation: "Gravity is pulling down." }
                  ],
                  stepText: "The power supply pushes charges through the wire. The magnetic field acts like a frictionless ramp, redirecting horizontal work into vertical lift."
                },
                {
                  stepText: "Ultimately, the magnetic force itself does no net work; it is the active agent (the battery) that expends energy."
                }
              ]
            },
            { id: "s6", type: "quiz", title: "Kinetic Energy", content: "If an electron enters a region of purely magnetic field, what happens to its kinetic energy?", options: [ { id: "A", text: "It increases", isCorrect: false, explanation: "" }, { id: "B", text: "It remains exactly constant", isCorrect: true, explanation: "Since W=0, change in KE=0." } ] },
            { id: "s7", type: "fill_in_blank", title: "Fill in the blank", content: "Magnetic forces can change a particle's direction, but never its ___.", blankAnswer: "speed" }
          ]
        },
        {
          id: "les-10-5-currents", title: "Currents & Density", description: "Line, Surface, and Volume Currents", icon: "Activity",
          slides: [
            { id: "s0", type: "quiz", title: "Conceptual Warm-up 1", content: "By historical convention, the direction of electric current is:", options: [ { id: "A", text: "The direction positive charges would move", isCorrect: true, explanation: "Thanks, Ben Franklin!" }, { id: "B", text: "The actual direction electrons move", isCorrect: false, explanation: "Electrons move opposite to conventional current." } ] },
            { id: "s2", type: "theory", title: "Currents", content: "The **current** ($I$) in a wire is the charge per unit time passing a given point. $I = \\lambda v$, where $\\lambda$ is the line charge density and $v$ is velocity.\n\nWhen charge flows over a 2D surface, we use the **surface current density** $\\mathbf{K}$. $\\mathbf{K} = \\sigma \\mathbf{v}$. It represents current per unit width.\n\nWhen charge flows through a 3D region, we use the **volume current density** $\\mathbf{J}$. $\\mathbf{J} = \\rho \\mathbf{v}$. It represents current per unit area." },
            { 
              id: "s4", 
              type: "proof", 
              title: "Interactive Insight: Dictionary of Currents", 
              content: "**Goal: Learn how to translate between distributions.**", 
              interactiveSteps: [
                {
                  stepText: "In electrostatics, we translated charge $Q$ to $\\lambda dl$, $\\sigma da$, or $\\rho d\\tau$."
                },
                {
                  prompt: "The magnetic force on a point charge is $\\int (\\mathbf{v} \\times \\mathbf{B}) dq$. For a line current, $dq = \\lambda dl$. What does $\\mathbf{v} \\lambda$ become?",
                  options: [
                    { id: "A", text: "Current $\\mathbf{I}$", isCorrect: true, explanation: "Since I = lambda * v." },
                    { id: "B", text: "$\\mathbf{K}$", isCorrect: false, explanation: "That's surface current." }
                  ],
                  stepText: "So $\\mathbf{v} dq \\rightarrow \\mathbf{I} dl$ for a wire."
                },
                {
                  stepText: "Similarly, $\\mathbf{v} dq \\rightarrow \\mathbf{K} da$ for a surface, and $\\mathbf{v} dq \\rightarrow \\mathbf{J} d\\tau$ for a volume. This 'dictionary' easily translates equations!"
                }
              ]
            },
            { id: "s5", type: "numerical", title: "Current Calculation", content: "A wire has a line charge density $\\lambda = 3$ C/m moving at $v = 4$ m/s. What is the current $I$ in Amperes?", numericAnswer: 12, numericTolerance: 0.1 },
            { id: "s6", type: "quiz", title: "Units of J", content: "What are the SI units of Volume Current Density $\\mathbf{J}$?", options: [ { id: "A", text: "Amperes / meter", isCorrect: false, explanation: "That's K." }, { id: "B", text: "Amperes / meter squared", isCorrect: true, explanation: "Current per unit cross-sectional area." } ] },
            { id: "s7", type: "fill_in_blank", title: "Fill in the blank", content: "The surface current density is denoted by the letter ___.", blankAnswer: "K" }
          ]
        },
        {
          id: "les-10-6-continuity", title: "The Continuity Equation", description: "Conservation of charge", icon: "Waves",
          slides: [
            { id: "s0", type: "quiz", title: "Conceptual Warm-up 1", content: "If more water flows out of a bathtub than flows in, what must happen to the water level inside?", options: [ { id: "A", text: "It goes up", isCorrect: false, explanation: "" }, { id: "B", text: "It goes down", isCorrect: true, explanation: "Conservation of mass!" } ] },
            { id: "s2", type: "theory", title: "The Continuity Equation", content: "Charge is conserved. If current flows out through a closed surface, the total charge inside must decrease.\n\nThe outward flux of current is $\\oint \\mathbf{J} \\cdot d\\mathbf{a}$. By the divergence theorem, this equals $\\int (\\nabla \\cdot \\mathbf{J}) d\\tau$.\n\nThe rate of charge decrease is $-\\frac{d}{dt} \\int \\rho d\\tau = \\int \\left(-\\frac{\\partial \\rho}{\\partial t}\\right) d\\tau$.\n\nEquating the integrands gives the **Continuity Equation**:\n$\\nabla \\cdot \\mathbf{J} = -\\frac{\\partial \\rho}{\\partial t}$" },
            { 
              id: "s4", 
              type: "proof", 
              title: "Interactive Insight: Steady Currents", 
              content: "**Goal: Apply continuity to magnetostatics.**", 
              interactiveSteps: [
                {
                  stepText: "Magnetostatics is the study of *steady* currents, meaning they have been going on forever without change, and charge is not piling up anywhere."
                },
                {
                  prompt: "If charge density $\\rho$ is not changing anywhere, what is $\\frac{\\partial \\rho}{\\partial t}$?",
                  options: [
                    { id: "A", text: "Zero", isCorrect: true, explanation: "The derivative of a constant is zero." },
                    { id: "B", text: "Infinity", isCorrect: false, explanation: "" }
                  ],
                  stepText: "For steady currents, $\\frac{\\partial \\rho}{\\partial t} = 0$."
                },
                {
                  stepText: "Therefore, the continuity equation for steady currents simplifies to $\\nabla \\cdot \\mathbf{J} = 0$."
                }
              ]
            },
            { id: "s6", type: "quiz", title: "Physical Meaning", content: "What does $\\nabla \\cdot \\mathbf{J} = 0$ mean physically?", options: [ { id: "A", text: "What goes in must come out.", isCorrect: true, explanation: "No net accumulation of charge anywhere." }, { id: "B", text: "The current is zero everywhere.", isCorrect: false, explanation: "It just means it doesn't diverge from a point." } ] },
            { id: "s7", type: "fill_in_blank", title: "Fill in the blank", content: "The equation $\\nabla \\cdot \\mathbf{J} = -\\partial \\rho / \\partial t$ is the precise mathematical statement of local charge ___.", blankAnswer: "conservation" }
          ]
        }
      ]
    },
    {
      id: "unit-11-biot-savart",
      title: "The Biot-Savart Law",
      description: "Calculating magnetic fields from steady currents.",
      color: "duo-red",
      lessons: [
        {
          id: "les-11-1-steady-currents", title: "Steady Currents", description: "The regime of Magnetostatics", icon: "Clock",
          slides: [
            { id: "s0", type: "quiz", title: "Conceptual Warm-up 1", content: "Can a single, moving point charge constitute a 'steady current'?", options: [ { id: "A", text: "Yes", isCorrect: false, explanation: "It's here one second, gone the next." }, { id: "B", text: "No", isCorrect: true, explanation: "A point charge creates a rapidly changing field, not a static one." } ] },
            { id: "s2", type: "theory", title: "Magnetostatics", content: "Just as *stationary charges* produce electric fields that are constant in time (electrostatics), *steady currents* produce magnetic fields that are constant in time (magnetostatics).\n\nBy steady current, we mean a continuous flow that doesn't change with time: $\\frac{\\partial \\mathbf{J}}{\\partial t} = 0$ and $\\frac{\\partial \\rho}{\\partial t} = 0$.\n\nBecause moving point charges don't form steady currents, we cannot build magnetostatics starting from a single point charge. We are forced to deal with extended, continuous wires right from the start." },
            { id: "s6", type: "quiz", title: "Everyday Magnetostatics", content: "Is an alternating household current (AC) strictly magnetostatic?", options: [ { id: "A", text: "Yes", isCorrect: false, explanation: "" }, { id: "B", text: "No, but it's often a good approximation.", isCorrect: true, explanation: "It changes 120 times a second, but for many calculations, we treat it quasi-statically." } ] },
            { id: "s7", type: "fill_in_blank", title: "Fill in the blank", content: "The theory of steady currents is called ___.", blankAnswer: "magnetostatics" }
          ]
        },
        {
          id: "les-11-2-biot-savart-eq", title: "The Biot-Savart Law", description: "The fundamental formula", icon: "Target",
          slides: [
            { id: "s0", type: "quiz", title: "Conceptual Warm-up 1", content: "In electrostatics, Coulomb's law gives the E-field from charge. What law gives the B-field from current?", options: [ { id: "A", text: "Faraday's Law", isCorrect: false, explanation: "That's for induction." }, { id: "B", text: "The Biot-Savart Law", isCorrect: true, explanation: "It is the magnetic equivalent of Coulomb's Law." } ] },
            { id: "s2", type: "theory", title: "The Biot-Savart Law", content: "The magnetic field of a steady line current is given by the empirical **Biot-Savart Law**:\n\n$\\mathbf{B}(\\mathbf{r}) = \\frac{\\mu_0}{4\\pi} \\int \\frac{\\mathbf{I} \\times \\mathbf{\\hat{\\cal{r}}}}{\\cal{r}^2} dl'$\n\nThe constant $\\mu_0 = 4\\pi \\times 10^{-7}$ N/A$^2$ is the permeability of free space.\n\nLike Coulomb's law, it features an inverse-square dependence ($1/\\cal{r}^2$). However, the cross product perfectly accounts for the fact that the magnetic field circles *around* the wire." },
            { id: "s3", type: "interactive_canvas", title: "Biot-Savart Explorer", content: "Drag the observation point around the wire. Notice how the cross product $\\mathbf{dl} \\times \\mathbf{\\hat{r}}$ forces the $\\mathbf{B}$ vector to remain tangential to a circle.", interactiveCanvasId: "biot-savart-interactive" },
            { 
              id: "s4", 
              type: "proof", 
              title: "Interactive Insight: Direction of B", 
              content: "**Goal: Deduce the field direction from the formula.**", 
              interactiveSteps: [
                {
                  prompt: "If current $\\mathbf{I}$ flows in the $+z$ direction, and we look at a point on the $+x$ axis, $\\mathbf{\\hat{\\cal{r}}}$ points roughly in $+x$. What is $\\hat{z} \\times \\hat{x}$?",
                  options: [
                    { id: "A", text: "$\\hat{y}$", isCorrect: true, explanation: "Standard cross product rule." },
                    { id: "B", text: "$-\\hat{y}$", isCorrect: false, explanation: "" }
                  ],
                  stepText: "The cross product yields a field in the $+y$ direction."
                },
                {
                  stepText: "This confirms the Right-Hand Rule mathematically: current UP, field on the right points INTO the page."
                }
              ]
            },
            { id: "s5", type: "numerical", title: "Permeability", content: "If you calculate $\\frac{\\mu_0}{4\\pi}$, what is the exact value? (Format: $1 \\times 10^x$. Provide $x$)", numericAnswer: -7, numericTolerance: 0.1 },
            { id: "s6", type: "quiz", title: "Distance Dependence", content: "The magnetic field contribution from a tiny segment of wire $dl'$ falls off with distance as:", options: [ { id: "A", text: "$1/r$", isCorrect: false, explanation: "An infinite wire falls off as 1/r, but a single segment does not." }, { id: "B", text: "$1/r^2$", isCorrect: true, explanation: "The formula explicitly has $\\cal{r}^2$ in the denominator." } ] },
            { id: "s7", type: "fill_in_blank", title: "Fill in the blank", content: "The constant $\\mu_0$ is called the ___ of free space.", blankAnswer: "permeability" }
          ]
        },
        {
          id: "les-11-3-infinite-wire", title: "Example: Infinite Straight Wire", description: "B = mu0 I / 2 pi s", icon: "Minus",
          slides: [
            { id: "s0", type: "example_q", title: "Example 5.5", content: "**Problem:** Find the magnetic field a distance $s$ from a long, straight wire carrying a steady current $I$.\n\n*Hint:* Use Biot-Savart. Express $dl'$ and $\\cal{r}$ in terms of the angle $\\theta$." },
            { 
              id: "s1", 
              type: "solution", 
              title: "Interactive Solution", 
              content: "**Goal: Evaluate the Biot-Savart integral.**", 
              interactiveSteps: [
                {
                  stepText: "The cross product $d\\mathbf{l}' \\times \\mathbf{\\hat{\\cal{r}}}$ points out of the page with magnitude $dl' \\sin\\alpha = dl' \\cos\\theta$."
                },
                {
                  prompt: "Using trigonometry, $l' = s \\tan\\theta$. What is $dl'$ in terms of $d\\theta$?",
                  options: [
                    { id: "A", text: "$\\frac{s}{\\cos^2\\theta} d\\theta$", isCorrect: true, explanation: "Derivative of tan is sec^2." },
                    { id: "B", text: "$s \\cos\\theta d\\theta$", isCorrect: false, explanation: "That would be derivative of sin." }
                  ],
                  stepText: "$dl' = \\frac{s}{\\cos^2\\theta} d\\theta$."
                },
                {
                  stepText: "Also, $\\cal{r} = \\frac{s}{\\cos\\theta}$, so $\\frac{1}{\\cal{r}^2} = \\frac{\\cos^2\\theta}{s^2}$."
                },
                {
                  stepText: "Putting it all into the integral: $B = \\frac{\\mu_0 I}{4\\pi} \\int \\left( \\frac{\\cos^2\\theta}{s^2} \\right) \\left( \\frac{s}{\\cos^2\\theta} \\right) \\cos\\theta d\\theta = \\frac{\\mu_0 I}{4\\pi s} \\int_{\\theta_1}^{\\theta_2} \\cos\\theta d\\theta$."
                },
                {
                  stepText: "For an *infinite* wire, limits are $-\\pi/2$ to $\\pi/2$. The integral of $\\cos$ is $2$. Result: $B = \\frac{\\mu_0 I}{2\\pi s}$. Goal reached!"
                }
              ]
            },
            { id: "s2", type: "numerical", title: "Evaluate Field", content: "If $I = 10$ A and $s = 0.02$ m (2 cm), use $B = \\frac{\\mu_0 I}{2\\pi s}$ where $\\mu_0 = 4\\pi \\times 10^{-7}$. What is B in microTeslas ($\\mu$T)?", numericAnswer: 100, numericTolerance: 0.1 },
            { id: "s3", type: "quiz", title: "Fall off", content: "How does the magnetic field of an infinite straight wire fall off with distance $s$?", options: [ { id: "A", text: "$1/s^2$", isCorrect: false, explanation: "That's for a point charge." }, { id: "B", text: "$1/s$", isCorrect: true, explanation: "The integration over the infinite length reduces the power by 1." } ] }
          ]
        },
        {
          id: "les-11-4-parallel-wires", title: "Force Between Parallel Wires", description: "Applying Lorentz and Biot-Savart", icon: "Pause",
          slides: [
            { id: "s0", type: "quiz", title: "Conceptual Warm-up 1", content: "We previously stated that parallel currents attract. Now let's calculate it. What two formulas must we combine?", options: [ { id: "A", text: "Biot-Savart and Lorentz Force", isCorrect: true, explanation: "Biot-Savart gets the field, Lorentz gets the force." }, { id: "B", text: "Coulomb and Gauss", isCorrect: false, explanation: "That's electrostatics." } ] },
            { id: "s2", type: "theory", title: "Force Between Parallel Wires", content: "Let Wire 1 carry $I_1$ and Wire 2 carry $I_2$, separated by distance $d$.\n\n1. Wire 1 produces a magnetic field at Wire 2: $B_1 = \\frac{\\mu_0 I_1}{2\\pi d}$ (pointing INTO the page).\n2. Wire 2 feels a force: $\\mathbf{F} = I_2 \\int (d\\mathbf{l} \\times \\mathbf{B}_1)$.\n\nThe total force per unit length is:\n$f = \\frac{\\mu_0 I_1 I_2}{2\\pi d}$\n\nIf the currents are parallel, the right-hand rule shows the force is attractive. If antiparallel, it is repulsive." },
            { 
              id: "s4", 
              type: "proof", 
              title: "Interactive Insight: Official Ampere", 
              content: "**Goal: Understand how the Ampere was officially defined.**", 
              interactiveSteps: [
                {
                  stepText: "The equation $f = \\frac{\\mu_0 I_1 I_2}{2\\pi d}$ was historically used to *define* the Ampere."
                },
                {
                  prompt: "If $I_1 = I_2 = 1$ Ampere, and $d = 1$ meter, what is the force per unit length $f$?",
                  options: [
                    { id: "A", text: "$2 \\times 10^{-7}$ N/m", isCorrect: true, explanation: "mu0 is 4pi x 10^-7. Divided by 2pi gives 2 x 10^-7." },
                    { id: "B", text: "1 N/m", isCorrect: false, explanation: "" }
                  ],
                  stepText: "The force is exactly $2 \\times 10^{-7}$ N/m."
                },
                {
                  stepText: "For decades, the SI Ampere was officially defined as the current required to produce exactly this force!"
                }
              ]
            }
          ]
        },
        {
          id: "les-11-5-circular-loop", title: "Example: Circular Loop", description: "Field on the axis", icon: "Circle",
          slides: [
            { id: "s0", type: "example_q", title: "Example 5.6", content: "**Problem:** Find the magnetic field a distance $z$ above the center of a circular loop of radius $R$, carrying steady current $I$.\n\n*Hint:* Consider the symmetry. Which components cancel?" },
            { 
              id: "s1", 
              type: "solution", 
              title: "Interactive Solution", 
              content: "**Goal: Find B on the z-axis.**", 
              interactiveSteps: [
                {
                  stepText: "The field $d\\mathbf{B}$ from a segment $dl'$ sweeps out a cone as we integrate around the loop."
                },
                {
                  prompt: "By symmetry, which components cancel out?",
                  options: [
                    { id: "A", text: "The horizontal components", isCorrect: true, explanation: "Every segment has an opposite segment across the circle that cancels its horizontal pull." },
                    { id: "B", text: "The vertical component", isCorrect: false, explanation: "The vertical components all point straight UP." }
                  ],
                  stepText: "Only the vertical (z) component survives: $dB_z = dB \\cos\\theta$."
                },
                {
                  stepText: "From Biot-Savart, $dB = \\frac{\\mu_0 I}{4\\pi} \\frac{dl'}{\\cal{r}^2}$. Note $dl'$ and $\\cal{r}$ are perpendicular."
                },
                {
                  stepText: "$B(z) = \\frac{\\mu_0 I}{4\\pi \\cal{r}^2} \\cos\\theta \\int dl'$. The integral $\\int dl'$ is the circumference $2\\pi R$."
                },
                {
                  stepText: "Substitute $\\cos\\theta = R/\\cal{r}$ and $\\cal{r} = \\sqrt{R^2+z^2}$. We get $B(z) = \\frac{\\mu_0 I}{2} \\frac{R^2}{(R^2+z^2)^{3/2}} \\mathbf{\\hat{z}}$. Goal reached!"
                }
              ]
            },
            { id: "s2", type: "numerical", title: "Center of Loop", content: "What is the magnetic field exactly at the center of the loop ($z=0$)? Formula is $\\mu_0 I / (X * R)$. What is X?", numericAnswer: 2, numericTolerance: 0.1 }
          ]
        },
        {
          id: "les-11-6-surface-volume-bs", title: "B for Surface & Volume Currents", description: "Biot-Savart expanded", icon: "Layers",
          slides: [
            { id: "s0", type: "quiz", title: "Conceptual Warm-up 1", content: "To find the field of a continuous volume current, we replace $I d\\mathbf{l}'$ with:", options: [ { id: "A", text: "$\\mathbf{K} da'$", isCorrect: false, explanation: "That's for a surface." }, { id: "B", text: "$\\mathbf{J} d\\tau'$", isCorrect: true, explanation: "Volume current density times volume element." } ] },
            { id: "s2", type: "theory", title: "Biot-Savart for Extended Currents", content: "Using our 'dictionary', we can easily write the Biot-Savart law for surface and volume currents.\n\n**Surface Current:**\n$\\mathbf{B}(\\mathbf{r}) = \\frac{\\mu_0}{4\\pi} \\int \\frac{\\mathbf{K}(\\mathbf{r}') \\times \\mathbf{\\hat{\\cal{r}}}}{\\cal{r}^2} da'$\n\n**Volume Current:**\n$\\mathbf{B}(\\mathbf{r}) = \\frac{\\mu_0}{4\\pi} \\int \\frac{\\mathbf{J}(\\mathbf{r}') \\times \\mathbf{\\hat{\\cal{r}}}}{\\cal{r}^2} d\\tau'$\n\nThese are the most general forms of the Biot-Savart law." },
            { id: "s6", type: "quiz", title: "Cross Product Warning", content: "Can you safely pull the $\\mathbf{\\hat{\\cal{r}}}$ vector outside the integral?", options: [ { id: "A", text: "Yes", isCorrect: false, explanation: "" }, { id: "B", text: "No", isCorrect: true, explanation: "Just like in electrostatics, the separation vector changes direction as you integrate over different source points!" } ] },
            { id: "s7", type: "fill_in_blank", title: "Fill in the blank", content: "The magnetic equivalent of integrating $\\rho$ to find $\\mathbf{E}$ is integrating $\\mathbf{J}$ to find ___.", blankAnswer: "\\mathbf{B}" }
          ]
        },
        {
          id: "les-11-7-superposition", title: "Superposition Principle", description: "Adding B fields", icon: "PlusCircle",
          slides: [
            { id: "s0", type: "quiz", title: "Conceptual Warm-up 1", content: "If you have two separate wire loops creating magnetic fields, the total field is:", options: [ { id: "A", text: "The vector sum of their individual fields", isCorrect: true, explanation: "Superposition holds for magnetism too!" }, { id: "B", text: "The product of their fields", isCorrect: false, explanation: "" } ] },
            { id: "s2", type: "theory", title: "Superposition in Magnetostatics", content: "The superposition principle applies to magnetic fields exactly as it does to electric fields.\n\n$\\mathbf{B}_{total} = \\mathbf{B}_1 + \\mathbf{B}_2 + \\dots$\n\nIf you have a complex circuit, you can break it into simple segments (straight lines, arcs), use the Biot-Savart law on each segment, and vector-add the results together to find the total field." },
            { 
              id: "s4", 
              type: "proof", 
              title: "Interactive Insight: Why does it work?", 
              content: "**Goal: See the mathematical basis of superposition.**", 
              interactiveSteps: [
                {
                  prompt: "Look at the Biot-Savart law: $\\int \\frac{\\mathbf{J} \\times \\mathbf{\\hat{\\cal{r}}}}{\\cal{r}^2} d\\tau$. Is the relationship between $\\mathbf{J}$ and $\\mathbf{B}$ linear?",
                  options: [
                    { id: "A", text: "Yes", isCorrect: true, explanation: "B is directly proportional to J." },
                    { id: "B", text: "No", isCorrect: false, explanation: "There are no squared terms of J." }
                  ],
                  stepText: "Because it's a linear integral, $\\int (\\mathbf{J}_1 + \\mathbf{J}_2) = \\int \\mathbf{J}_1 + \\int \\mathbf{J}_2$."
                },
                {
                  stepText: "This linearity mathematically guarantees the principle of superposition."
                }
              ]
            }
          ]
        },
        {
          id: "les-11-8-point-charge-warning", title: "Point Charge Warning", description: "Moving point charges in magnetostatics", icon: "AlertTriangle",
          slides: [
            { id: "s0", type: "quiz", title: "Conceptual Warm-up 1", content: "Can we use the Biot-Savart law to find the EXACT magnetic field of a single electron flying through space?", options: [ { id: "A", text: "Yes, just plug in $qv$ for $I dl$", isCorrect: false, explanation: "It seems tempting, but it's physically wrong." }, { id: "B", text: "No, a single charge is not a steady current", isCorrect: true, explanation: "Magnetostatics only applies to steady currents." } ] },
            { id: "s2", type: "theory", title: "The Point Charge Fallacy", content: "You might be tempted to write down a Biot-Savart law for a moving point charge by replacing $\\mathbf{I}dl$ with $q\\mathbf{v}$:\n\n$\\mathbf{B}(\\mathbf{r}) \\approx \\frac{\\mu_0}{4\\pi} \\frac{q\\mathbf{v} \\times \\mathbf{\\hat{\\cal{r}}}}{\\cal{r}^2}$  (WRONG)\n\n**This is strictly incorrect.** A moving point charge does not constitute a steady current (it's here one instant, gone the next). The Biot-Savart law, which only holds for steady currents, does not correctly determine its field. \n\n(It is approximately correct for very slow, non-relativistic charges where retardation can be neglected, but it is not a fundamental law like Coulomb's law)." },
            { id: "s6", type: "quiz", title: "Retardation", content: "Why do rapidly moving point charges break the simple laws?", options: [ { id: "A", text: "Because they get tired.", isCorrect: false, explanation: "" }, { id: "B", text: "Because electromagnetic 'news' travels at the speed of light, not instantly.", isCorrect: true, explanation: "This requires full Electrodynamics (Jefimenko's equations), not Magneto-statics." } ] },
            { id: "s7", type: "fill_in_blank", title: "Fill in the blank", content: "The Biot-Savart law is strictly valid only for ___ currents.", blankAnswer: "steady" }
          ]
        }
      ]
    }
  ]
};
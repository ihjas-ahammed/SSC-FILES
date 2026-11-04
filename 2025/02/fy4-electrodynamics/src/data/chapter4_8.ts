import { Section } from '../types';

export const SECTION_4_8: Section = {
  id: "section-4-8",
  title: "Section 4.8: Torque on a Current Loop",
  description: "Magnetic torque, the magnetic dipole moment, and the principle of the Moving Coil Galvanometer.",
  color: "duo-orange",
  units:[
    {
      id: "unit-481-torque",
      title: "Torque on a Current Loop",
      description: "How uniform magnetic fields cause loops to rotate.",
      color: "duo-orange",
      lessons:[
        {
          id: "les-481-1",
          title: "Forces on a Rectangular Loop",
          description: "Analyzing forces on individual sides.",
          icon: "Maximize",
          slides:[
             { id: "s0", type: "quiz", title: "Conceptual Objective", content: "If you place a closed loop of wire carrying a steady current in a strictly UNIFORM magnetic field, what is the net force on the entire loop?", options:[{id:"A", text:"Depends on the loop's orientation.", isCorrect:false, explanation:""}, {id:"B", text:"Exactly zero.", isCorrect:true, explanation:"Forces on opposite sides cancel out."}] },
             { id: "s1", type: "quiz", title: "Conceptual Objective", content: "If the net force is zero, does that mean the loop will simply sit completely still?", options:[{id:"A", text:"Yes.", isCorrect:false, explanation:""}, {id:"B", text:"No, it might experience a net torque.", isCorrect:true, explanation:"Forces can cancel but still cause rotation if they act along different lines."}] },
             { id: "s2", type: "theory", title: "Forces on the Loop", content: "Consider a rectangular loop of height $l$ and width $b$, carrying a current $i$, placed in a uniform magnetic field $\\mathbf{B}$.\n\nThe forces on the top and bottom sides are equal, opposite, and act along the exact same line of action. They cancel completely and produce zero torque.\n\nThe forces on the two vertical sides ($F_2$ and $F_4$) are also equal and opposite (magnitude $F = i l B$). However, they do **not** act along the same line unless the loop is perfectly aligned. This creates a twisting force, or **Torque**." },
             { id: "s3", type: "interactive_canvas", title: "Torque Visualizer", content: "Observe the top-down view of the loop. Notice how the two forces $F$ and $-F$ try to twist the loop into alignment.", interactiveCanvasId: "torque-interactive" },
             { id: "s4", type: "fill_in_blank", title: "Fill in the blank", content: "A pair of equal and opposite forces acting along different lines of action forms a ___.", blankAnswer: "couple" }
          ]
        },
        {
          id: "les-481-2",
          title: "Deriving the Torque",
          description: "Calculating the rotational force.",
          icon: "RotateCw",
          slides:[
             { id: "s0", type: "quiz", title: "Conceptual Objective", content: "Torque is maximized when the plane of the loop is:", options:[{id:"A", text:"Perpendicular to the magnetic field.", isCorrect:false, explanation:"The forces would just try to stretch/crush the loop, no rotation."}, {id:"B", text:"Parallel to the magnetic field.", isCorrect:true, explanation:"The lever arm distance between the forces is maximized."}] },
             { id: "s1", type: "theory", title: "Torque Expression", content: "Let $\\theta$ be the angle between the **normal vector** (perpendicular to the plane of the loop) and the magnetic field $\\mathbf{B}$.\n\nThe two forces $F = i l B$ act at a perpendicular separation distance of $b \\sin\\theta$.\nThe total torque $\\tau$ is Force $\\times$ distance:\n$$ \\tau = (i l B) (b \\sin\\theta) $$\nSince the area of the loop is $A = l \\times b$, we get:\n$$ \\tau = i A B \\sin\\theta $$\nIf the coil has $N$ turns, the total torque is **$\\tau = N i A B \\sin\\theta$**." },
             { id: "s2", type: "proof", title: "Proof: Torque Derivation", content: "**Result: $\\tau = N i A B \\sin\\theta$**\n\n1. Let vertical wire length = $l$, horizontal wire width = $b$.\n2. Force on left vertical wire: $F_{left} = i l B$ (directed into/out of page depending on setup).\n3. Force on right vertical wire: $F_{right} = i l B$ (directed opposite to left wire).\n4. Looking down from the top, the distance between the two wires is $b$. However, the loop is tilted at angle $\\theta$ relative to the perpendicular of B.\n5. The perpendicular lever arm distance between the two force vectors is $b \\sin\\theta$.\n6. Torque $\\tau = F \\times \\text{lever arm} = i l B \\times b \\sin\\theta = i (lb) B \\sin\\theta = i A B \\sin\\theta$.\n7. For $N$ turns, multiply by $N$." },
             { id: "s3", type: "numerical", title: "Torque Calculation", content: "A coil with $N=10$ turns, area $A=0.1$ m$^2$, and current $i=2$ A is placed parallel to a $B=5$ T field (so normal is at $\\theta = 90^\\circ$). What is the torque in N·m?", numericAnswer: 10, numericTolerance: 0.1, notes: "10 * 2 * 0.1 * 5 * sin(90) = 10" },
             { id: "s4", type: "fill_in_blank", title: "Fill in the blank", content: "When the normal to the loop is exactly parallel to the B field ($\\theta = 0$), the torque is ___.", blankAnswer: "zero" }
          ]
        },
        {
          id: "les-481-3",
          title: "Magnetic Dipole Moment",
          description: "Vector formulation.",
          icon: "ArrowRight",
          slides:[
             { id: "s0", type: "quiz", title: "Conceptual Objective", content: "The magnetic dipole moment $\\vec{\\mu}$ of a loop has a magnitude equal to:", options:[{id:"A", text:"Current times Area ($iA$)", isCorrect:true, explanation:""}, {id:"B", text:"Current times Magnetic Field ($iB$)", isCorrect:false, explanation:""}] },
             { id: "s1", type: "theory", title: "Vector Form", content: "We define the **Magnetic Dipole Moment** ($\\vec{\\mu}$) of a plane current loop as:\n$$ \\vec{\\mu} = N i \\mathbf{A} $$\nIts direction is given by the Right-Hand Rule: curl your fingers in the direction of the current, and your thumb points in the direction of $\\vec{\\mu}$ (the normal vector).\n\nUsing this definition, the torque equation $\\tau = \\mu B \\sin\\theta$ can be elegantly written as a vector cross product:\n$$ \\vec{\\tau} = \\vec{\\mu} \\times \\mathbf{B} $$" },
             { id: "s2", type: "quiz", title: "Equilibrium", content: "The magnetic torque will force the loop to rotate until the dipole moment $\\vec{\\mu}$ is:", options:[{id:"A", text:"Perpendicular to B", isCorrect:false, explanation:"That is where torque is maximum."}, {id:"B", text:"Parallel to B", isCorrect:true, explanation:"When mu and B align, the cross product is zero, and it is in stable equilibrium."}] },
             { id: "s3", type: "fill_in_blank", title: "Fill in the blank", content: "The torque vector is determined by the cross product of the magnetic dipole moment and the magnetic ___.", blankAnswer: "field" }
          ]
        }
      ]
    },
    {
      id: "unit-482-galvanometer",
      title: "Moving Coil Galvanometer",
      description: "Applying magnetic torque to measure current.",
      color: "duo-orange",
      lessons:[
        {
          id: "les-482-1",
          title: "D'Arsonval Galvanometer",
          description: "Principle and construction.",
          icon: "Activity",
          slides:[
             { id: "s0", type: "quiz", title: "Conceptual Objective", content: "The primary purpose of a moving coil galvanometer is to:", options:[{id:"A", text:"Generate electricity", isCorrect:false, explanation:""}, {id:"B", text:"Measure tiny electric currents", isCorrect:true, explanation:"By observing the mechanical rotation caused by the current."}] },
             { id: "s1", type: "quiz", title: "Conceptual Objective", content: "For the galvanometer's scale to be perfectly linear (deflection proportional to current), the magnetic torque must NOT depend on:", options:[{id:"A", text:"The angle of the coil", isCorrect:true, explanation:"If it depends on the angle (sin theta), the scale will be squished at the ends."}, {id:"B", text:"The magnetic field strength", isCorrect:false, explanation:""}] },
             { id: "s2", type: "theory", title: "Construction and Radial Field", content: "A D'Arsonval galvanometer consists of a rectangular coil suspended between the poles of a permanent horse-shoe magnet. \n\nTo ensure the scale is linear, the pole pieces are made **cylindrical**, and a soft iron core is placed inside the coil. This produces a **radial magnetic field**.\n\nIn a radial field, the plane of the coil is *always* parallel to the magnetic field lines, regardless of how much it has rotated. Therefore, the angle $\\theta$ is always $90^\\circ$." },
             { id: "s3", type: "proof", title: "Proof: Linear Torque", content: "**Result: $\\tau = N i B A$ (constant)**\n\n1. The general torque equation is $\\tau = N i A B \\sin\\theta$.\n2. Because the magnetic pole pieces are curved (cylindrical), the B-field lines radiate outward from the center.\n3. As the coil turns, its vertical wires always cut exactly across a B-field line perpendicularly.\n4. The normal to the coil area is therefore always at $\\theta = 90^\\circ$ relative to the local B-field.\n5. Since $\\sin(90^\\circ) = 1$, the torque simplifies to $\\tau = N i B A$, which is strictly proportional to $i$ and independent of rotation." },
             { id: "s4", type: "fill_in_blank", title: "Fill in the blank", content: "To make the magnetic field radial, the pole pieces of the magnet are made ___ in shape.", blankAnswer: "cylindrical" }
          ]
        },
        {
          id: "les-482-2",
          title: "Restoring Torque and Equilibrium",
          description: "Balancing the magnetic twist.",
          icon: "Target",
          slides:[
             { id: "s0", type: "quiz", title: "Conceptual Objective", content: "If the magnetic field twists the coil, what stops it from spinning in circles forever?", options:[{id:"A", text:"Friction", isCorrect:false, explanation:""}, {id:"B", text:"A restoring suspension spring/wire", isCorrect:true, explanation:"It acts like a rubber band twisting back."}] },
             { id: "s1", type: "theory", title: "Equilibrium Deflection", content: "The magnetic torque tries to twist the coil: $\\tau_{mag} = N i B A$.\n\nAs the coil twists by an angle $\\phi$, the phosphor-bronze suspension wire twists and creates an opposing **elastic restoring torque**: $\\tau_{elastic} = c \\phi$, where $c$ is the torsional constant of the suspension.\n\nAt equilibrium, the coil stops moving when the two torques perfectly balance:\n$$ N i B A = c \\phi $$" },
             { id: "s2", type: "proof", title: "Proof: Galvanometer Constant", content: "**Result: $i = k \\phi$**\n\n1. At steady deflection, $\\tau_{mag} = \\tau_{elastic}$.\n2. $N i B A = c \\phi$.\n3. Solve for current: $i = \\left( \\frac{c}{N B A} \\right) \\phi$.\n4. Define $k = \\frac{c}{N B A}$ as the **galvanometer constant**.\n5. Therefore, $i = k \\phi$. The current is directly proportional to the angle of deflection!" },
             { id: "s3", type: "numerical", title: "Calculate Current", content: "A galvanometer has $N=50$, $B=0.1$ T, $A=0.02$ m$^2$, and torsional constant $c = 0.01$ N·m/rad. If the coil deflects by $\\phi = 0.5$ radians, what is the current $i$ in Amperes?", numericAnswer: 0.05, numericTolerance: 0.01, notes: "i = (0.01 / (50*0.1*0.02)) * 0.5 = (0.01 / 0.1) * 0.5 = 0.1 * 0.5 = 0.05" },
             { id: "s4", type: "fill_in_blank", title: "Fill in the blank", content: "The steady angular deflection of the coil is directly ___ to the current flowing through it.", blankAnswer: "proportional" }
          ]
        }
      ]
    },
    {
      id: "unit-483-summary",
      title: "Section Summary",
      description: "Recap of Torque and Galvanometers.",
      color: "duo-orange",
      lessons:[
        {
          id: "les-sum-torque",
          title: "Torque & Galvanometer Recap",
          description: "Review of the principles.",
          icon: "CheckSquare",
          slides:[
            { id: "s0", type: "quiz", title: "Knowledge Check", content: "Why do we use a soft iron core and cylindrical pole pieces in a moving coil galvanometer?", options:[{id:"A", text:"To make the magnetic field radial, ensuring linear deflection.", isCorrect:true, explanation:""}, {id:"B", text:"To make the instrument heavier and more stable.", isCorrect:false, explanation:""}] },
            { id: "s1", type: "theory", title: "Summary", content: "**Magnetic Torque:** A current loop in a uniform magnetic field experiences zero net force, but feels a torque $\\vec{\\tau} = \\vec{\\mu} \\times \\mathbf{B}$, where the dipole moment $\\vec{\\mu} = N i \\mathbf{A}$.\n\n**Moving Coil Galvanometer:** By designing the magnet to produce a **radial field**, the angle between the coil's normal and B is always $90^\\circ$. The magnetic torque ($N i B A$) balances against a suspension spring's restoring torque ($c \\phi$). Thus, $i = \\left(\\frac{c}{NBA}\\right) \\phi$, providing a perfectly linear scale for measuring current." }
          ]
        }
      ]
    }
  ]
};
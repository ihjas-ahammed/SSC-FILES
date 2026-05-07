import { Section } from '../types';

export const SECTION_4_9: Section = {
  id: "section-4-9",
  title: "Section 4.9: Moving Coil Ballistic Galvanometer",
  description: "Measuring electric charge via instantaneous impulse and tracking damped oscillatory motion.",
  color: "duo-orange",
  units:[
    {
      id: "unit-491-ballistic-intro",
      title: "Principle & Construction",
      description: "How a ballistic galvanometer differs from a standard one.",
      color: "duo-orange",
      lessons:[
        {
          id: "les-491-1",
          title: "The Ballistic Principle",
          description: "Measuring charge, not steady current.",
          icon: "Activity",
          slides:[
             { id: "s0", type: "quiz", title: "Conceptual Objective", content: "While a standard (dead-beat) moving coil galvanometer is designed to measure a steady continuous current, a Ballistic Galvanometer is specifically designed to measure:", options:[{id:"A", text:"Extremely high continuous voltages.", isCorrect:false, explanation:""}, {id:"B", text:"A sudden, transient flow of electric charge (an impulse).", isCorrect:true, explanation:"It measures 'q', the total charge that passes through quickly."}] },
             { id: "s1", type: "quiz", title: "Conceptual Objective", content: "To effectively measure this sudden impulse, the coil must receive the entire charge BEFORE:", options:[{id:"A", text:"It has time to start moving significantly.", isCorrect:true, explanation:"The current must pass 'ballistically', like a bullet hitting a pendulum."}, {id:"B", text:"The magnetic field collapses.", isCorrect:false, explanation:""}] },
             { id: "s2", type: "theory", title: "Principle of the B.G.", content: "A **Moving Coil Ballistic Galvanometer** (B.G.) is used to measure electrical charge ($q$) passing through it in a very short time interval.\n\n**Principle:** When a brief current pulse is passed through a coil suspended in a magnetic field, it experiences a sudden magnetic torque impulse. This imparts angular momentum to the coil. The coil then swings to a maximum deflection (the 'throw', $\\theta$) which is proportional to the total charge $q$ that passed through it." },
             { id: "s3", type: "interactive_canvas", title: "Ballistic Throw Visualizer", content: "Fire a charge impulse and observe the 'throw' of the galvanometer scale.", interactiveCanvasId: "ballistic-interactive" },
             { id: "s4", type: "fill_in_blank", title: "Fill in the blank", content: "The maximum initial deflection registered by the galvanometer is called the ___.", blankAnswer: "throw" }
          ]
        },
        {
          id: "les-491-2",
          title: "Construction Details",
          description: "Minimizing damping and maximizing period.",
          icon: "Maximize",
          slides:[
             { id: "s0", type: "quiz", title: "Conceptual Objective", content: "To ensure the coil doesn't move until all the charge has passed, the coil should ideally have:", options:[{id:"A", text:"A very small moment of inertia (low mass).", isCorrect:false, explanation:"It would move too quickly."}, {id:"B", text:"A large moment of inertia (heavy/wide).", isCorrect:true, explanation:"This gives it a large time period of oscillation, making it slow to start moving."}] },
             { id: "s1", type: "theory", title: "Construction of a B.G.", content: "The B.G. consists of a rectangular coil of fine wire suspended between cylindrical pole pieces of a powerful magnet, with a soft iron core to ensure a radial field.\n\n**Crucial Differences from Dead-Beat:**\n1. **High Moment of Inertia:** The coil is designed to have a large moment of inertia ($I$) so its period of oscillation is fairly large. \n2. **Non-Metallic Frame:** The coil is wound on a non-conducting frame (like ivory or bamboo) rather than aluminium. This prevents eddy currents from forming in the frame, keeping electromagnetic damping practically zero." },
             { id: "s2", type: "quiz", title: "Frame Material", content: "Why is an ordinary galvanometer wound on a metallic (aluminium) frame?", options:[{id:"A", text:"To provide electromagnetic damping so it settles quickly on a reading.", isCorrect:true, explanation:"This is called 'dead-beat'. For ballistic, we DON'T want it to stop quickly."}, {id:"B", text:"Because metal is cheaper.", isCorrect:false, explanation:""}] },
             { id: "s3", type: "fill_in_blank", title: "Fill in the blank", content: "To reduce electromagnetic damping, the coil of a ballistic galvanometer is wound on a ___-metallic frame.", blankAnswer: "non" }
          ]
        }
      ]
    },
    {
      id: "unit-492-ballistic-theory",
      title: "Theory of Ballistic Throw",
      description: "Mathematical derivation linking charge to deflection angle.",
      color: "duo-orange",
      lessons:[
        {
          id: "les-492-1",
          title: "Impulse to Momentum",
          description: "The initial kick.",
          icon: "Zap",
          slides:[
             { id: "s0", type: "quiz", title: "Conceptual Objective", content: "The torque on a coil in a radial magnetic field is $\\tau = NiBA$. What is the integral of torque over time ($\\int \\tau dt$)?", options:[{id:"A", text:"Work done", isCorrect:false, explanation:""}, {id:"B", text:"Angular impulse", isCorrect:true, explanation:"Which equals the change in angular momentum."}] },
             { id: "s1", type: "theory", title: "Angular Impulse", content: "When the short current $i$ flows, the torque is $\\tau = N i B A$.\n\nIntegrating this over the short time $dt$ gives the total angular impulse:\n$$ \\int \tau dt = N B A \\int_0^t i \\, dt $$\n\nSince $q = \\int i \\, dt$ is the total charge passing through, the angular impulse is $NBAq$.\n\nBy mechanics, impulse equals the change in angular momentum ($I\\omega$). Since it starts from rest:\n$$ I\\omega = NBAq $$" },
             { id: "s2", type: "proof", title: "Proof: Initial Kinetic Energy", content: "**Result: $\\frac{1}{2} I \\omega^2$ is stored in the coil.**\n\n1. The swift passage of charge $q$ imparts an angular momentum $I\\omega = NBAq$ to the coil.\n2. The coil now possesses kinetic energy $K.E. = \\frac{1}{2} I \\omega^2$.\n3. Because the current pulse was practically instantaneous, the coil is still essentially at the zero position ($\\theta=0$) when it receives all this energy.\n4. It will now swing outward, converting this kinetic energy into potential energy." },
             { id: "s3", type: "fill_in_blank", title: "Fill in the blank", content: "The total angular impulse given to the coil is equal to the product of $NBA$ and the total ___.", blankAnswer: "charge" }
          ]
        },
        {
          id: "les-492-2",
          title: "Energy Conversion & The Formula",
          description: "Relating energy to the final throw angle.",
          icon: "Target",
          slides:[
             { id: "s0", type: "quiz", title: "Conceptual Objective", content: "As the coil swings, its kinetic energy is converted into:", options:[{id:"A", text:"Elastic potential energy in the twisting suspension wire.", isCorrect:true, explanation:"Like twisting a spring."}, {id:"B", text:"Gravitational potential energy.", isCorrect:false, explanation:""}] },
             { id: "s1", type: "theory", title: "Deriving the Charge Equation", content: "The kinetic energy $\\frac{1}{2} I \\omega^2$ is used to twist the suspension wire through a maximum angle $\\theta$. The work done twisting a wire with torsional constant $c$ is $\\frac{1}{2} c \\theta^2$.\n\nEquating them: $\\frac{1}{2} I \\omega^2 = \\frac{1}{2} c \\theta^2 \\implies I \\omega^2 = c \\theta^2$.\n\nWe also know the period of oscillation is $T = 2\\pi\\sqrt{I/c}$, so $I = \\frac{T^2 c}{4\\pi^2}$.\nSubstituting $I$ and solving for $q$ gives the master formula:\n$$ q = \\left(\\frac{T}{2\\pi}\\right) \\left(\\frac{c}{NBA}\\right) \\theta $$" },
             { id: "s2", type: "proof", title: "Proof: The Full Derivation", content: "**Result: $q = K \\theta$**\n\n1. We have $(I\\omega)^2 = (NBAq)^2$. (From impulse)\n2. We have $I\\omega^2 = c\\theta^2$. (From energy conservation)\n3. Multiply (2) by $I$: $I^2\\omega^2 = c I \\theta^2$.\n4. Equate (1) and (3): $(NBAq)^2 = c I \\theta^2$.\n5. Substitute $I = c T^2 / 4\\pi^2$.\n6. $(NBAq)^2 = c \\left(\\frac{c T^2}{4\\pi^2}\\right) \\theta^2 = \\frac{c^2 T^2}{4\\pi^2} \\theta^2$.\n7. Take square root: $NBAq = \\frac{c T}{2\\pi} \\theta$.\n8. Solve for $q$: $q = \\left(\\frac{T}{2\\pi}\\right) \\left(\\frac{c}{NBA}\\right) \\theta$. Let the constants be $K$. Thus $q = K \\theta$." },
             { id: "s3", type: "numerical", title: "Reduction Factor Calculation", content: "If $T = 6.28$ s (approx $2\\pi$), and the galvanometer constant $(c/NBA) = 0.05$ A/rad, what is the ballistic reduction factor $K$ in Coulombs/rad?", numericAnswer: 0.05, numericTolerance: 0.01, notes: "K = (T/2pi) * (c/NBA) = (2pi/2pi) * 0.05 = 0.05" },
             { id: "s4", type: "fill_in_blank", title: "Fill in the blank", content: "The constant $K$ is called the ballistic ___ factor.", blankAnswer: "reduction" }
          ]
        }
      ]
    },
    {
      id: "unit-493-damping",
      title: "Damping Correction",
      description: "Accounting for air resistance and tiny induced currents.",
      color: "duo-orange",
      lessons:[
        {
          id: "les-493-1",
          title: "Logarithmic Decrement",
          description: "Correcting the observed throw.",
          icon: "ArrowDown",
          slides:[
             { id: "s0", type: "quiz", title: "Conceptual Objective", content: "In the real world, the very first observed throw $\\theta_1$ will be:", options:[{id:"A", text:"Slightly smaller than the theoretical true throw $\\theta$.", isCorrect:true, explanation:"Because some energy is lost to air resistance as it swings out."}, {id:"B", text:"Larger than the true throw.", isCorrect:false, explanation:""}] },
             { id: "s1", type: "theory", title: "Correction for Damping", content: "The kinetic energy is damped by air resistance and tiny induced currents. \nIf $\\theta_1, \\theta_2, \\theta_3$ are successive peak deflections (left and right), their ratio is constant:\n$\\frac{\\theta_1}{\\theta_2} = \\frac{\\theta_2}{\\theta_3} = d$\nwhere $d$ is the **decrement per half vibration**.\n\nWe define the **logarithmic decrement** $\\lambda = \\log_e d$, so $d = e^\\lambda$.\nBecause the first throw $\\theta_1$ happens after a *quarter* vibration ($T/4$), the correction factor is $e^{\\lambda/2}$.\n\nThe true throw is $\\theta = \\theta_1 e^{\\lambda/2} \\approx \theta_1 (1 + \\lambda/2)$." },
             { id: "s2", type: "interactive_canvas", title: "Damping Visualizer", content: "Adjust the damping (λ) to see how it suppresses the first observed throw $\\theta_1$ compared to the true theoretical throw.", interactiveCanvasId: "ballistic-interactive" },
             { id: "s3", type: "proof", title: "Proof: Calculating Lambda", content: "**Result: $\\lambda = \\frac{1}{10} \\ln\\left(\\frac{\\theta_1}{\\theta_{11}}\\right)$**\n\n1. It is hard to measure consecutive peaks $\\theta_1$ and $\\theta_2$ accurately.\n2. Instead, we measure the 1st throw ($\\theta_1$) and let it swing 10 times to measure the 11th throw ($\\theta_{11}$).\n3. $\\frac{\\theta_1}{\\theta_{11}} = \\frac{\\theta_1}{\\theta_2} \\cdot \\frac{\\theta_2}{\\theta_3} \\dots \\frac{\\theta_{10}}{\\theta_{11}} = d^{10}$.\n4. Since $d = e^\\lambda$, we have $\\frac{\\theta_1}{\\theta_{11}} = e^{10\\lambda}$.\n5. Taking the natural log: $10\\lambda = \\ln(\\theta_1 / \\theta_{11})$.\n6. Therefore, $\\lambda = \\frac{1}{10} \\ln(\\theta_1 / \\theta_{11})$. Note: $\\ln(x) = 2.3026 \\log_{10}(x)$." },
             { id: "s4", type: "numerical", title: "Applying Correction", content: "You observe a first throw of $\\theta_1 = 100$ divisions. If you calculated $\\lambda = 0.04$, what is the true undamped throw $\\theta$ (using the approximation $\\theta \\approx \\theta_1(1 + \\lambda/2)$)?", numericAnswer: 102, numericTolerance: 0.1 },
             { id: "s5", type: "fill_in_blank", title: "Fill in the blank", content: "The constant ratio of successive maximum deflections is evaluated using the ___ decrement.", blankAnswer: "logarithmic" }
          ]
        },
        {
          id: "les-493-2",
          title: "Dead-Beat vs Ballistic",
          description: "Comparing the two types of galvanometers.",
          icon: "Layers",
          slides:[
             { id: "s0", type: "quiz", title: "Comparison", content: "Which galvanometer requires a metal frame for its coil?", options:[{id:"A", text:"Dead-beat galvanometer", isCorrect:true, explanation:"The metal frame creates heavy electromagnetic damping (eddy currents)."}, {id:"B", text:"Ballistic galvanometer", isCorrect:false, explanation:"It uses a non-metallic frame."}] },
             { id: "s1", type: "theory", title: "Key Differences", content: "**Dead-Beat (Aperiodic):**\n1. Measures steady current ($i$).\n2. Coil wound on a metal frame (high damping).\n3. Non-oscillatory; settles quickly to a steady deflection.\n4. Small moment of inertia so it responds fast.\n\n**Ballistic:**\n1. Measures electric charge ($q$).\n2. Coil wound on non-metallic frame (low damping).\n3. Oscillatory; we measure the first 'throw'.\n4. Large moment of inertia so it waits for all charge to pass before swinging." },
             { id: "s2", type: "fill_in_blank", title: "Fill in the blank", content: "A galvanometer that gives a steady deflection without producing any oscillation is called ___.", blankAnswer: "dead-beat" }
          ]
        }
      ]
    },
    {
      id: "unit-494-summary",
      title: "Section Summary",
      description: "Recap of the Ballistic Galvanometer.",
      color: "duo-orange",
      lessons:[
        {
          id: "les-sum-ballistic",
          title: "Ballistic Galvanometer Recap",
          description: "Review of principles.",
          icon: "CheckSquare",
          slides:[
            { id: "s0", type: "quiz", title: "Knowledge Check", content: "The full corrected formula for the charge measured by a Ballistic Galvanometer is:", options:[{id:"A", text:"$q = \\left(\\frac{T}{2\\pi}\\right) \\left(\\frac{c}{NBA}\\right) \\theta_1 (1 + \\frac{\\lambda}{2})$", isCorrect:true, explanation:"Includes the period T, the galv constant, the observed throw, and the damping correction."}, {id:"B", text:"$q = \\left(\\frac{c}{NBA}\\right) \\theta_1$", isCorrect:false, explanation:"That is for steady current in a dead-beat galv."}] },
            { id: "s1", type: "theory", title: "Summary", content: "**The Moving Coil Ballistic Galvanometer** is uniquely constructed with a high moment of inertia and low damping (non-metallic frame) to measure rapid impulses of electric charge.\n\nThe momentary passage of charge $q$ provides an angular impulse ($NBAq$) that gives the coil kinetic energy. This energy translates into a maximum angular deflection, or 'throw' ($\\theta$). By applying the **logarithmic decrement** $\\lambda$ to correct for air resistance, we can accurately calculate the total charge that passed through the circuit." }
          ]
        }
      ]
    }
  ]
};
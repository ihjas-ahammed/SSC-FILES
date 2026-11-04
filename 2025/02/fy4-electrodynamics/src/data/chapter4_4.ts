import { Section } from '../types';

export const SECTION_4_4: Section = {
  id: "section-4-4",
  title: "Section 4.4: Network Analysis: Superposition Theorem",
  description: "Understanding linear networks and applying the Superposition Theorem to solve multi-source circuits.",
  color: "duo-orange",
  units:[
    {
      id: "unit-441-network-basics",
      title: "Network Fundamentals",
      description: "Basic definitions of networks, branches, nodes, and sources.",
      color: "duo-orange",
      lessons:[
        {
          id: "les-441-1",
          title: "Network Terminology",
          description: "Junctions, Branches, and Loops.",
          icon: "Grid",
          slides:[
             { id: "s0", type: "quiz", title: "Conceptual Objective", content: "In a circuit, the point where three or more wires connect is known as a:", options:[{id:"A", text:"Branch", isCorrect:false, explanation:""}, {id:"B", text:"Node (or Junction)", isCorrect:true, explanation:"A node connects multiple branches together."}] },
             { id: "s1", type: "quiz", title: "Conceptual Objective", content: "What do we call any closed path within an electrical network?", options:[{id:"A", text:"A Loop", isCorrect:true, explanation:"If it's closed, it's a loop. (A mesh is a loop containing no other loops inside it)."}, {id:"B", text:"A Branch", isCorrect:false, explanation:""}] },
             { id: "s2", type: "theory", title: "Important Definitions", content: "To effectively analyze networks, we must standardize our terminology:\n\n1. **Junction (or Node):** The point where two or more branches meet.\n2. **Branch:** Any group of series elements having two terminals. The current in a branch remains the same at each point.\n3. **Loop:** Any completely closed path in a network.\n4. **Mesh:** A set of branches forming a closed path that contains no other smaller loops inside it." },
             { id: "s3", type: "quiz", title: "Current Flow", content: "Within a single unbroken branch, the current is:", options:[{id:"A", text:"Constant everywhere", isCorrect:true, explanation:"Since there are no junctions for it to split, current is uniform across the branch."}, {id:"B", text:"Decreasing due to resistance", isCorrect:false, explanation:"Voltage drops, but current stays constant."}] },
             { id: "s4", type: "fill_in_blank", title: "Fill in the blank", content: "An element joining two nodes is called a ___.", blankAnswer: "branch" }
          ]
        },
        {
          id: "les-441-2",
          title: "Types of Networks",
          description: "Active vs Passive, Linear vs Non-linear.",
          icon: "Activity",
          slides:[
             { id: "s0", type: "quiz", title: "Conceptual Objective", content: "A circuit that contains NO batteries or voltage sources is called:", options:[{id:"A", text:"An active network", isCorrect:false, explanation:""}, {id:"B", text:"A passive network", isCorrect:true, explanation:"Active networks must contain EMF sources."}] },
             { id: "s1", type: "quiz", title: "Conceptual Objective", content: "Does a standard resistor obey Ohm's Law (V = IR) at all voltages?", options:[{id:"A", text:"Yes, perfectly", isCorrect:false, explanation:"It can heat up and change resistance, but ideally, yes."}, {id:"B", text:"Yes, assuming it is a linear impedance", isCorrect:true, explanation:"A linear element has a strict straight-line V-I relationship."}] },
             { id: "s2", type: "theory", title: "Network Classifications", content: "**Active vs Passive:** Networks containing sources of EMF (batteries, generators) are *active* networks. Those containing only resistors/capacitors/inductors are *passive*.\n\n**Linear vs Non-Linear:** A network is *linear* if it consists entirely of linear impedances (elements that obey Ohm's law, where V is directly proportional to I). If any element is non-linear (like a diode or a thermistor where the V-I curve is not straight), the network is non-linear.\n\n*Network theorems like Superposition ONLY apply to linear networks!*" },
             { id: "s3", type: "quiz", title: "Application limits", content: "Can you use the Superposition Theorem on a circuit containing a semiconductor diode?", options:[{id:"A", text:"Yes", isCorrect:false, explanation:""}, {id:"B", text:"No", isCorrect:true, explanation:"Diodes are non-linear; their resistance changes depending on voltage."}] },
             { id: "s4", type: "fill_in_blank", title: "Fill in the blank", content: "A linear impedance is any impedance that strictly obeys ___'s Law.", blankAnswer: "Ohm" }
          ]
        },
        {
          id: "les-441-3",
          title: "Voltage and Current Sources",
          description: "Ideal vs Real generators.",
          icon: "Zap",
          slides:[
             { id: "s0", type: "quiz", title: "Conceptual Objective", content: "An ideal voltage source maintains a constant voltage across its terminals regardless of:", options:[{id:"A", text:"The current supplied by it", isCorrect:true, explanation:"It never drops its voltage."}, {id:"B", text:"The temperature", isCorrect:false, explanation:""}] },
             { id: "s1", type: "quiz", title: "Conceptual Objective", content: "Why does a real battery's voltage drop when you draw heavy current from it?", options:[{id:"A", text:"Due to its internal impedance", isCorrect:true, explanation:"The internal resistance consumes some of the voltage."}, {id:"B", text:"Because the chemicals run out instantly", isCorrect:false, explanation:""}] },
             { id: "s2", type: "theory", title: "Ideal vs Real Sources", content: "**Ideal Voltage Source:** Maintains a constant voltage across its terminals irrespective of the current drawn. It has zero internal resistance ($R_i = 0$).\n\n**Real Voltage Source:** Modeled as an ideal voltage source in series with a finite internal impedance. Its terminal voltage decreases as load current increases.\n\n**Current Source:** An active device supplying a constant current to any load. A real current source is modeled as an ideal current source in *parallel* with an internal impedance." },
             { id: "s3", type: "numerical", title: "Real Source Voltage", content: "A 10V real battery has an internal resistance of $1\\Omega$. If you draw 2 Amps from it, what is the terminal voltage in Volts?", numericAnswer: 8, numericTolerance: 0.1 },
             { id: "s4", type: "fill_in_blank", title: "Fill in the blank", content: "A real voltage generator has a finite ___ impedance.", blankAnswer: "internal" }
          ]
        }
      ]
    },
    {
      id: "unit-442-superposition",
      title: "The Superposition Theorem",
      description: "Solving multi-source networks by isolating sources.",
      color: "duo-orange",
      lessons:[
        {
          id: "les-442-1",
          title: "Statement of the Theorem",
          description: "The core principle of superposition.",
          icon: "Layers",
          slides:[
             { id: "s0", type: "quiz", title: "Conceptual Objective", content: "If a circuit has two batteries, how can you find the total current through a specific resistor?", options:[{id:"A", text:"Add the voltages and divide by the resistor.", isCorrect:false, explanation:"That only works if they are in simple series."}, {id:"B", text:"Find the current due to Battery 1 alone, then Battery 2 alone, and add them algebraically.", isCorrect:true, explanation:"This is the essence of the Superposition Theorem."}] },
             { id: "s1", type: "quiz", title: "Conceptual Objective", content: "When considering Battery 1 'alone', what do you do with Battery 2?", options:[{id:"A", text:"Remove it and leave the wire open.", isCorrect:false, explanation:"That breaks the circuit entirely."}, {id:"B", text:"Replace it with its internal impedance (or short it out if ideal).", isCorrect:true, explanation:"You turn its voltage generation off, leaving only its physical resistance behind."}] },
             { id: "s2", type: "theory", title: "The Superposition Theorem", content: "**Statement:** In any linear network containing impedances and more than one source of EMF, the current flowing in any element is equal to the algebraic sum of the currents that would separately flow in that element if each source of EMF were considered separately, all other sources being replaced at that time by their internal impedances.\n\n*(If a voltage source is ideal, replacing it with its internal impedance means replacing it with a simple short circuit wire.)*" },
             { id: "s3", type: "interactive_canvas", title: "Superposition Visualizer", content: "Toggle the batteries on and off to see how the individual currents combine to form the total current.", interactiveCanvasId: "superposition-interactive" },
             { id: "s4", type: "fill_in_blank", title: "Fill in the blank", content: "To apply superposition, a deactivated ideal voltage source is replaced by a ___ circuit.", blankAnswer: "short" }
          ]
        },
        {
          id: "les-442-2",
          title: "Proof of Superposition",
          description: "Using Mesh Equations to prove linearity.",
          icon: "Target",
          slides:[
             { id: "s0", type: "quiz", title: "Conceptual Objective", content: "Why does the superposition theorem work mathematically?", options:[{id:"A", text:"Because Ohm's law and Kirchhoff's laws generate perfectly linear systems of equations.", isCorrect:true, explanation:"If equations are linear, solutions can be split and summed."}, {id:"B", text:"Because energy is conserved.", isCorrect:false, explanation:""}] },
             { id: "s2", type: "proof", title: "Mathematical Proof", content: "**Goal: Prove $I = I' + I''$**\n\n1. Consider a 2-mesh network with $E_1$ and $E_2$. The full mesh equations are:\n   $E_1 = I_1(Z_1+Z_3) + I_2(Z_3)$\n   $E_2 = I_1(Z_3) + I_2(Z_2+Z_3)$\n\n2. Now activate ONLY $E_1$ (set $E_2=0$). Let currents be $I_1'$ and $I_2'$.\n   $E_1 = I_1'(Z_1+Z_3) + I_2'(Z_3)$\n   $0 = I_1'(Z_3) + I_2'(Z_2+Z_3)$\n\n3. Now activate ONLY $E_2$ (set $E_1=0$). Let currents be $I_1''$ and $I_2''$.\n   $0 = I_1''(Z_1+Z_3) + I_2''(Z_3)$\n   $E_2 = I_1''(Z_3) + I_2''(Z_2+Z_3)$\n\n4. Add the equations from steps 2 and 3 together. Because the $Z$ coefficients are constant (linear), they factor out beautifully, exactly matching the full equations in step 1 if $I_1 = I_1'+I_1''$ and $I_2 = I_2'+I_2''$. Proof complete!" },
             { id: "s3", type: "quiz", title: "Non-Linear Break", content: "If $Z$ depended on $I$ (e.g. $Z = kI$), would this proof still work?", options:[{id:"A", text:"Yes", isCorrect:false, explanation:""}, {id:"B", text:"No", isCorrect:true, explanation:"You couldn't factor $Z$ out when adding the equations, breaking the superposition."}] }
          ]
        },
        {
          id: "les-442-3",
          title: "Example Problem 1",
          description: "Applying the theorem to a concrete circuit.",
          icon: "Activity",
          slides:[
             { id: "s0", type: "example_q", title: "Example 1 Setup", content: "**Problem:** A circuit has three parallel branches. \n- Left branch: $7.5V$ ideal battery and $6\\Omega$ resistor.\n- Center branch: $3\\Omega$ resistor.\n- Right branch: $10V$ battery (with $1\\Omega$ internal resistance) and $2\\Omega$ resistor.\n\nFind the total current flowing through the central $3\\Omega$ resistor using the Superposition Theorem." },
             { id: "s1", type: "solution", title: "Step 1: 7.5V Active Only", content: "**Goal: Short the 10V battery and find $I'$.**\n\n1. Replace the 10V battery with its $1\\Omega$ internal resistance. The right branch now has $2\\Omega + 1\\Omega = 3\\Omega$ total.\n2. The central $3\\Omega$ and right $3\\Omega$ are in parallel. Equivalent resistance = $1.5\\Omega$.\n3. Total resistance seen by the 7.5V battery = $6\\Omega$ (left) $+ 1.5\\Omega$ = $7.5\\Omega$.\n4. Total current from 7.5V battery = $7.5V / 7.5\\Omega = 1 A$.\n5. This 1A splits equally between the central and right $3\\Omega$ branches.\n6. Therefore, current down the central $3\\Omega$ branch $I' = 0.5 A$ downwards." },
             { id: "s2", type: "solution", title: "Step 2: 10V Active Only", content: "**Goal: Short the 7.5V battery and find $I''$.**\n\n1. Replace the 7.5V battery with a short circuit. The left branch is just $6\\Omega$.\n2. The left $6\\Omega$ and central $3\\Omega$ are in parallel. Equivalent resistance = $(6 \\times 3)/(6+3) = 2\\Omega$.\n3. Total resistance seen by the 10V battery = $3\\Omega$ (right branch) $+ 2\\Omega$ = $5\\Omega$.\n4. Total current from 10V battery = $10V / 5\\Omega = 2 A$.\n5. This 2A splits into the left and central branches. The current prefers the path of least resistance. Using the current divider rule, current through the $3\\Omega$ central branch is $2A \\times (6 / (6+3)) = 1.33 A$.\n6. Therefore, current down the central branch $I'' = 1.33 A$ downwards." },
             { id: "s3", type: "solution", title: "Step 3: Combine", content: "**Goal: Find total $I = I' + I''$.**\n\nBoth individual currents flow downwards through the central resistor.\n$I = 0.5 A \\text{ (from 7.5V)} + 1.33 A \\text{ (from 10V)}$\n\n$I_{total} = 1.83 A$ downwards.\n\nProblem solved!" },
             { id: "s4", type: "interactive_canvas", title: "Verify with Interactive", content: "Check these exact calculations using the interactive simulator.", interactiveCanvasId: "superposition-interactive" },
             { id: "s5", type: "numerical", title: "Total Current Check", content: "If both currents had been 1.5A downwards, what would the total be?", numericAnswer: 3, numericTolerance: 0 },
             { id: "s6", type: "quiz", title: "Direction matters", content: "What if the 10V battery had been inserted upside down?", options:[{id:"A", text:"I'' would point upwards, and we would subtract it from I'.", isCorrect:true, explanation:"Superposition requires ALGEBRAIC summation. Direction is critical!"}, {id:"B", text:"It wouldn't matter.", isCorrect:false, explanation:""}] }
          ]
        }
      ]
    },
    {
      id: "unit-44-summary",
      title: "Section Summary",
      description: "Recap of the Superposition Theorem.",
      color: "duo-orange",
      lessons:[
        {
          id: "les-sum-superposition",
          title: "Superposition Recap",
          description: "Review of principles.",
          icon: "CheckSquare",
          slides:[
            { id: "s0", type: "quiz", title: "Knowledge Check", content: "The Superposition theorem allows you to solve multi-source networks by turning off all but one source at a time. To turn off an ideal voltage source, you must:", options:[{id:"A", text:"Replace it with an open circuit.", isCorrect:false, explanation:""}, {id:"B", text:"Replace it with a short circuit.", isCorrect:true, explanation:"This removes the voltage while keeping the circuit path intact."}] },
            { id: "s1", type: "theory", title: "Summary", content: "**The Superposition Theorem** is a powerful analytical tool for linear networks. It states that the total current in any branch is the algebraic sum of the currents produced by each source acting independently.\n\nTo use it:\n1. Select one source to keep active.\n2. Deactivate all others (replace voltage sources with their internal resistance/short circuits).\n3. Calculate the branch current (noting its direction).\n4. Repeat for all sources.\n5. Algebraically add the currents together." }
          ]
        }
      ]
    }
  ]
};
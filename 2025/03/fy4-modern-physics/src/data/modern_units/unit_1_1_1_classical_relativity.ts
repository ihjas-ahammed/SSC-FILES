import { Unit } from '../../types';

export const UNIT_1_1_1_CLASSICAL_RELATIVITY: Unit = {
  id: "unit-1-1-1",
  title: "Classical Relativity",
  description: "Inertial frames and the Galilean transformation",
  color: "duo-blue",
  lessons: [
    // ── LESSON 1 (Priming) ────────────────────────────────────────────────
    {
      id: "les-1-1-1-1",
      title: "Priming: Reference Frames",
      description: "Activate prior thinking before the lesson",
      icon: "Brain",
      slides: [
        {
          id: "prime-1",
          type: "quiz",
          title: "Priming Question 1",
          content: "You are sitting still on a train. A ball rolls at 5 m/s along the aisle (forward). The train itself moves at 30 m/s relative to the ground. How fast is the ball moving relative to the ground?",
          options: [
            { id: "A", text: "5 m/s", isCorrect: false, explanation: "That's only the speed relative to the train, not the ground." },
            { id: "B", text: "25 m/s", isCorrect: false, explanation: "You'd subtract only if the ball moved backward relative to the train." },
            { id: "C", text: "35 m/s", isCorrect: true, explanation: "Classically, velocities simply add: 30 + 5 = 35 m/s. This is the Galilean velocity addition rule." },
            { id: "D", text: "We can't tell without knowing the speed of light.", isCorrect: false, explanation: "At everyday speeds, classical velocity addition works perfectly fine." }
          ]
        },
        {
          id: "prime-2",
          type: "quiz",
          title: "Priming Question 2",
          content: "Two observers measure the length of the same rod — one observer is at rest, the other is moving past the rod at 100 km/h. According to classical (Newtonian) physics, what do they measure?",
          options: [
            { id: "A", text: "Different lengths — the moving observer sees the rod contracted.", isCorrect: false, explanation: "Length contraction is a relativistic effect; it doesn't appear in classical mechanics." },
            { id: "B", text: "The same length — distance and time are absolute in classical physics.", isCorrect: true, explanation: "Galilean/Newtonian mechanics assumes absolute space and time. All observers agree on lengths and time intervals." },
            { id: "C", text: "Different lengths — the rod must be contracting due to air resistance.", isCorrect: false, explanation: "Length measurement is not affected by air resistance here." }
          ]
        }
      ]
    },

    // ── LESSON 2 (Definition: Inertial Reference Frame) ───────────────────
    {
      id: "les-1-1-1-2",
      title: "Inertial Reference Frames",
      description: "Definition and physical meaning",
      icon: "Layers",
      slides: [
        {
          id: "def-slide",
          type: "theory",
          title: "Definition: Inertial Reference Frame",
          content: "An **inertial reference frame** is a coordinate system in which Newton's First Law holds:\n\n> A body at rest stays at rest, and a body in uniform motion continues in uniform motion, **unless acted upon by a net external force.**\n\nEquivalently, an inertial frame is one that is **not accelerating** — it moves at constant velocity (including rest) relative to the distant stars.\n\n**Key property:** The laws of physics look identical in all inertial frames. There is no experiment you can perform *inside* a closed inertial frame that tells you whether you are 'really' moving."
        },
        {
          id: "q1",
          type: "quiz",
          title: "Conceptual Check 1",
          content: "A rocket ship far from all planets and stars fires its engine, accelerating forward. Is the interior of the rocket an inertial reference frame?",
          options: [
            { id: "A", text: "Yes — it's in deep space, so no gravity acts.", isCorrect: false, explanation: "Absence of gravity is not the criterion. The rocket is accelerating, so Newton's First Law is violated inside: objects 'fall' backward without any external force." },
            { id: "B", text: "No — the rocket is accelerating, so Newton's First Law breaks down inside.", isCorrect: true, explanation: "An accelerating frame is non-inertial. Passengers feel a pseudo-force (like being pushed into their seats). Newton's laws do not hold in their natural form." }
          ]
        },
        {
          id: "q2",
          type: "quiz",
          title: "Conceptual Check 2",
          content: "Earth's surface is often treated as an inertial frame in introductory physics. Why is this only an approximation?",
          options: [
            { id: "A", text: "Because Earth is spherical rather than flat.", isCorrect: false, explanation: "The shape of Earth is not the issue here." },
            { id: "B", text: "Because Earth rotates and orbits the Sun — both introduce small accelerations.", isCorrect: true, explanation: "Earth is technically a non-inertial frame (Coriolis effect, centrifugal effects). For most lab experiments these are negligibly small, making Earth a good approximate inertial frame." },
            { id: "C", text: "Because Einstein showed all frames are equivalent.", isCorrect: false, explanation: "Special Relativity deals with inertial frames only; it does not say all frames are equivalent." }
          ]
        },
        {
          id: "canvas-frames",
          type: "interactive_canvas",
          title: "Two Inertial Frames",
          content: "Frame S is at rest; frame S′ moves at constant velocity $v$ along the x-axis. Both are inertial — neither accelerates.",
          interactiveCanvasId: "galilean-frames"
        },
        {
          id: "fitb",
          type: "fill_in_blank",
          title: "Fill in the Blank",
          content: "An inertial reference frame is one in which Newton's ___ Law holds without any pseudo-forces.",
          blankAnswer: "First"
        }
      ]
    },

    // ── LESSON 3 (Theory: Galilean Transformation) ────────────────────────
    {
      id: "les-1-1-1-3",
      title: "The Galilean Transformation",
      description: "Equations 2.1 – 2.3 (Krane §2.1)",
      icon: "ArrowLeftRight",
      slides: [
        {
          id: "theory-gal",
          type: "theory",
          title: "The Galilean Transformation",
          content: "Let frame $S$ be at rest, and frame $S'$ move at **constant velocity** $v$ along the $+x$ direction. At $t = 0$, the origins coincide.\n\nThe **Galilean transformation equations** relate coordinates in $S$ to those in $S'$:\n\n$$x' = x - vt \\qquad \\text{(Eq. 2.1)}$$\n\n$$y' = y, \\quad z' = z \\qquad \\text{(Eq. 2.2)}$$\n\n$$t' = t \\qquad \\text{(Eq. 2.3)}$$\n\n**Key insight:** Time is **absolute** — both observers always agree on $t$. This is the classical assumption that Einstein will challenge."
        },
        {
          id: "q-gal-1",
          type: "quiz",
          title: "Conceptual Check 1",
          content: "According to the Galilean transformation, if an event occurs at $x = 100$ m and $t = 2$ s, and frame $S'$ moves at $v = 10$ m/s, what is $x'$?",
          options: [
            { id: "A", text: "$x' = 120$ m", isCorrect: false, explanation: "Check the sign: $x' = x - vt = 100 - (10)(2) = 80$ m." },
            { id: "B", text: "$x' = 80$ m", isCorrect: true, explanation: "$x' = x - vt = 100 - (10)(2) = 80$ m. The origin of $S'$ has moved 20 m forward, so the event appears closer in $S'$." },
            { id: "C", text: "$x' = 100$ m", isCorrect: false, explanation: "This would be correct only if $v = 0$." }
          ]
        },
        {
          id: "q-gal-2",
          type: "quiz",
          title: "Conceptual Check 2",
          content: "What does the Galilean transformation predict for the speed of a light beam if the source moves at speed $v$ toward you?",
          options: [
            { id: "A", text: "$c$ — same as always.", isCorrect: false, explanation: "Galilean velocity addition gives $c + v$, not $c$. This prediction (that light speed depends on source motion) was what Michelson–Morley tested." },
            { id: "B", text: "$c + v$ — light is faster when the source approaches.", isCorrect: true, explanation: "The Galilean rule says speeds simply add. So light from an approaching source would be $c + v$. This was the expected classical result — and it was found to be WRONG." },
            { id: "C", text: "$v$ — the source speed dominates.", isCorrect: false, explanation: "Light has its own propagation speed $c$; it doesn't reduce to $v$." }
          ]
        },
        {
          id: "vis-gal",
          type: "interactive_canvas",
          title: "Galilean Frames Visualization",
          content: "Frame $S'$ moves at velocity $v$ relative to $S$. The origins coincide at $t = 0$.",
          interactiveCanvasId: "galilean-frames"
        },
        {
          id: "proof-velocity-addition",
          type: "proof",
          title: "Deriving Galilean Velocity Addition",
          content: "**Goal:** Show that $u_x = u'_x + v$, where $u_x$ is the object's speed in $S$ and $u'_x$ is its speed in $S'$.",
          proofSteps: [
            "Start from the position transformation: $x' = x - vt$.",
            "Differentiate both sides with respect to $t$: $\\frac{dx'}{dt} = \\frac{dx}{dt} - v$.",
            "Since $t' = t$, we have $\\frac{dx'}{dt} = \\frac{dx'}{dt'}$. Define $u'_x = \\frac{dx'}{dt'}$ and $u_x = \\frac{dx}{dt}$.",
            "Result: $u'_x = u_x - v$, or equivalently $u_x = u'_x + v$. Velocities add linearly in classical physics."
          ]
        },
        {
          id: "num-gal",
          type: "numerical",
          title: "Quick Numerical Check",
          content: "A particle moves at $u'_x = 15$ m/s in frame $S'$. Frame $S'$ moves at $v = 8$ m/s relative to $S$. What is the particle's speed $u_x$ in $S$?",
          numericAnswer: 23,
          numericTolerance: 0.5
        }
      ]
    },

    // ── LESSON 4 (Ex 2.1 – Car Speeds, velocity addition) ─────────────────
    {
      id: "les-1-1-1-4",
      title: "Ex 2.1: Car and Ball",
      description: "Classical velocity addition — numerical example",
      icon: "Car",
      slides: [
        {
          id: "ex21-q",
          type: "example_q",
          title: "Example 2.1 — Car Speeds",
          content: "**Problem:** A car moves at $v_{\\text{car}} = 25.0$ m/s east relative to the ground. The driver throws a ball *forward* (east) at $u'_{\\text{ball}} = 15.0$ m/s relative to the car.\n\n(a) What is the speed of the ball relative to the ground?\n\n(b) If the ball were thrown *backward* at $15.0$ m/s relative to the car, what is its speed relative to the ground?\n\nTry the problem yourself before proceeding."
        },
        {
          id: "ex21-sol",
          type: "proof",
          title: "Interactive Solution",
          content: "Using the Galilean velocity addition: $u_{\\text{ground}} = u'_{\\text{ball}} + v_{\\text{car}}$",
          interactiveSteps: [
            {
              stepText: "**Set up the frames.** Let $S$ = ground frame, $S'$ = car frame. The car moves at $v = +25.0$ m/s (east) relative to $S$."
            },
            {
              prompt: "Part (a): Ball thrown *forward* at $u'_{\\text{ball}} = +15.0$ m/s relative to the car. Apply Galilean addition. What is $u_{\\text{ground}}$?",
              stepText: "$u_{\\text{ground}} = u'_{\\text{ball}} + v = 15.0 + 25.0 = \\mathbf{+40.0}$ m/s (east)",
              options: [
                { id: "A", text: "$40.0$ m/s east", isCorrect: true, explanation: "Correct! Velocities in the same direction add: 15 + 25 = 40 m/s." },
                { id: "B", text: "$10.0$ m/s east", isCorrect: false, explanation: "That would be the case if the ball moved backward relative to the car (subtraction)." },
                { id: "C", text: "$25.0$ m/s east", isCorrect: false, explanation: "That's just the car's speed — the ball's speed relative to the car must also be included." }
              ]
            },
            {
              prompt: "Part (b): Ball thrown *backward* at $u'_{\\text{ball}} = -15.0$ m/s relative to the car. What is $u_{\\text{ground}}$?",
              stepText: "$u_{\\text{ground}} = u'_{\\text{ball}} + v = -15.0 + 25.0 = \\mathbf{+10.0}$ m/s (east)",
              options: [
                { id: "A", text: "$-10.0$ m/s (west)", isCorrect: false, explanation: "The car is still moving east faster than the ball moves backward, so the ball is still going east relative to the ground." },
                { id: "B", text: "$+10.0$ m/s (east)", isCorrect: true, explanation: "The car drags the ball forward at 25 m/s, but the ball's backward speed of 15 m/s reduces this to 10 m/s east." },
                { id: "C", text: "$+40.0$ m/s (east)", isCorrect: false, explanation: "That's for the forward-thrown case. Here the ball's velocity is negative relative to the car." }
              ]
            }
          ]
        },
        {
          id: "ex21-method",
          type: "quiz",
          title: "Method Check",
          content: "In part (a), why did we ADD the velocities rather than subtract them?",
          options: [
            { id: "A", text: "Because both the car and the ball move in the same direction.", isCorrect: true, explanation: "Both are directed east. The Galilean rule $u = u' + v$ adds them algebraically, and with the same sign, they add numerically." },
            { id: "B", text: "Because the ball was accelerating.", isCorrect: false, explanation: "Galilean addition applies to any velocities, not just accelerating objects. Acceleration is not relevant here." },
            { id: "C", text: "Because the car is faster than the ball.", isCorrect: false, explanation: "The relative speeds don't determine whether we add or subtract — the direction of the velocities does." }
          ]
        },
        {
          id: "ex21-vis",
          type: "interactive_canvas",
          title: "Velocity Addition Diagram",
          content: "Visual representation of classical velocity addition.",
          interactiveCanvasId: "velocity-addition-diagram"
        },
        {
          id: "ex21-var",
          type: "numerical",
          title: "Variation Problem",
          content: "A truck moves at 20 m/s east. A person inside runs *forward* at 3 m/s relative to the truck. What is the person's speed (in m/s) relative to the ground?",
          numericAnswer: 23,
          numericTolerance: 0.5
        }
      ]
    },

    // ── LESSON 5 (Ex 2.2 – Airplane with Crosswind) ───────────────────────
    {
      id: "les-1-1-1-5",
      title: "Ex 2.2: Airplane & Crosswind",
      description: "Velocity addition in 2D",
      icon: "Plane",
      slides: [
        {
          id: "ex22-q",
          type: "example_q",
          title: "Example 2.2 — Crosswind",
          content: "**Problem:** An airplane has an airspeed (speed relative to the air) of $200$ m/s directed due *north*. A crosswind blows *east* at $50$ m/s.\n\n(a) What is the plane's **speed** relative to the ground?\n\n(b) What is the plane's **direction** relative to ground north? (Express as an angle east of north.)\n\n*Hint: Draw the vector triangle.*"
        },
        {
          id: "ex22-canvas",
          type: "interactive_canvas",
          title: "Crosswind Vector Diagram",
          content: "The plane's velocity and the wind's velocity add vectorially.",
          interactiveCanvasId: "crosswind-vector"
        },
        {
          id: "ex22-sol",
          type: "proof",
          title: "Solution",
          content: "The ground velocity is the **vector sum** of airspeed and wind velocity.",
          interactiveSteps: [
            {
              stepText: "Set up components. Plane's velocity relative to air: $\\vec{v}_{\\text{air}} = (0,\\ 200)$ m/s (north). Wind: $\\vec{v}_{\\text{wind}} = (50,\\ 0)$ m/s (east)."
            },
            {
              prompt: "Using Galilean vector addition, what is the ground velocity $\\vec{v}_{\\text{ground}}$?",
              stepText: "$\\vec{v}_{\\text{ground}} = \\vec{v}_{\\text{air}} + \\vec{v}_{\\text{wind}} = (50,\\ 200)$ m/s.",
              options: [
                { id: "A", text: "$(50,\\ 200)$ m/s", isCorrect: true, explanation: "Correct. We simply add the components." },
                { id: "B", text: "$(200,\\ 50)$ m/s", isCorrect: false, explanation: "That swaps north and east components." },
                { id: "C", text: "$(150,\\ 200)$ m/s", isCorrect: false, explanation: "Subtraction would only apply if the wind opposed the plane." }
              ]
            },
            {
              prompt: "Part (a): What is the **speed** (magnitude) of the ground velocity?",
              stepText: "$|\\vec{v}_{\\text{ground}}| = \\sqrt{50^2 + 200^2} = \\sqrt{2500 + 40000} = \\sqrt{42500} \\approx 206.2$ m/s.",
              options: [
                { id: "A", text: "$250$ m/s", isCorrect: false, explanation: "That's just adding the magnitudes — only valid when they're parallel, not perpendicular." },
                { id: "B", text: "$206.2$ m/s", isCorrect: true, explanation: "Correct! Pythagorean theorem for perpendicular vectors: $\\sqrt{200^2 + 50^2} \\approx 206$ m/s." },
                { id: "C", text: "$150$ m/s", isCorrect: false, explanation: "That's the difference; valid for head-on opposing vectors." }
              ]
            },
            {
              prompt: "Part (b): The direction angle $\\theta$ east of north. Which expression is correct?",
              stepText: "$\\theta = \\arctan\\!\\left(\\frac{50}{200}\\right) \\approx \\arctan(0.25) \\approx 14.0°$ east of north.",
              options: [
                { id: "A", text: "$\\theta = \\arctan(200/50) \\approx 76°$", isCorrect: false, explanation: "That's measured from east (the horizontal component), not from north." },
                { id: "B", text: "$\\theta = \\arctan(50/200) \\approx 14°$", isCorrect: true, explanation: "The east displacement is 50, the north is 200. The angle from north is $\\arctan(E/N) = \\arctan(50/200) \\approx 14°$." }
              ]
            }
          ]
        },
        {
          id: "ex22-interp",
          type: "quiz",
          title: "Physical Interpretation",
          content: "The plane aimed due north but ended up travelling slightly east of north. Physically, why?",
          options: [
            { id: "A", text: "The pilot made a navigational error.", isCorrect: false, explanation: "No error — the pilot aimed the nose north, but the wind carried the whole aircraft east simultaneously." },
            { id: "B", text: "The wind pushed the whole aircraft sideways while it flew forward.", isCorrect: true, explanation: "Correct. The wind adds an eastward component to the plane's velocity. Vectors add independently in each direction." },
            { id: "C", text: "The plane decelerated due to drag.", isCorrect: false, explanation: "Drag is not part of this problem; we're doing kinematic velocity addition only." }
          ]
        }
      ]
    },

    // ── LESSON 6 (Ex 2.3 – Swimmer Upstream/Downstream) ──────────────────
    {
      id: "les-1-1-1-6",
      title: "Ex 2.3: Swimmer in a River",
      description: "Upstream vs. downstream relative velocities",
      icon: "Waves",
      slides: [
        {
          id: "ex23-q",
          type: "example_q",
          title: "Example 2.3 — Swimmer",
          content: "**Problem:** A swimmer can swim at $v_s = 2.0$ m/s relative to the water. The river flows at $v_r = 1.0$ m/s.\n\n(a) The swimmer swims *upstream* for $d = 100$ m, then returns *downstream*. Find the **total time** for the round trip.\n\n(b) For comparison, find the time to swim $100$ m across the river and return (perpendicular to current, ignoring lateral drift).\n\n*Which trip is faster?*"
        },
        {
          id: "ex23-canvas",
          type: "interactive_canvas",
          title: "Swimmer Velocity Diagram",
          content: "Galilean relativity applied to a swimmer in a flowing river.",
          interactiveCanvasId: "swimmer-diagram"
        },
        {
          id: "ex23-sol",
          type: "proof",
          title: "Solution",
          content: "Apply Galilean velocity addition for each leg.",
          interactiveSteps: [
            {
              stepText: "**Upstream leg:** Swimmer moves against current. Effective speed relative to ground: $v_{\\text{up}} = v_s - v_r = 2.0 - 1.0 = 1.0$ m/s."
            },
            {
              prompt: "Time to swim 100 m upstream?",
              stepText: "$t_{\\text{up}} = \\frac{d}{v_{\\text{up}}} = \\frac{100}{1.0} = 100$ s.",
              options: [
                { id: "A", text: "$100$ s", isCorrect: true, explanation: "Correct. At 1.0 m/s, 100 m takes 100 seconds." },
                { id: "B", text: "$50$ s", isCorrect: false, explanation: "That would be if the effective speed were 2.0 m/s — but the current reduces it to 1.0 m/s." }
              ]
            },
            {
              prompt: "**Downstream leg.** Effective speed = $v_s + v_r = 3.0$ m/s. Time to return 100 m downstream?",
              stepText: "$t_{\\text{down}} = \\frac{100}{3.0} \\approx 33.3$ s.",
              options: [
                { id: "A", text: "$\\approx 33.3$ s", isCorrect: true, explanation: "The current helps the swimmer, boosting effective speed to 3.0 m/s." },
                { id: "B", text: "$100$ s", isCorrect: false, explanation: "That's for the upstream leg, where the current opposes." }
              ]
            },
            {
              prompt: "Total round-trip time for upstream–downstream journey?",
              stepText: "$t_{\\text{total}} = t_{\\text{up}} + t_{\\text{down}} = 100 + 33.3 = 133.3$ s.",
              options: [
                { id: "A", text: "$133.3$ s", isCorrect: true, explanation: "The upstream penalty (extra 50 s) is greater than the downstream gain (saves ~16.7 s from 50 s baseline)." },
                { id: "B", text: "$100$ s", isCorrect: false, explanation: "That's only the upstream leg." }
              ]
            },
            {
              stepText: "**Part (b) — Crosswise trip.** Swimming perpendicular to current at effective speed $v_s = 2.0$ m/s (current doesn't affect the crosswise component). Time for 100 m × 2 = $t_{\\text{cross}} = 2 \\times \\frac{100}{2.0} = 100$ s. **The crosswise trip is faster!** (133.3 s vs 100 s)"
            }
          ]
        },
        {
          id: "ex23-interp",
          type: "quiz",
          title: "Physical Interpretation",
          content: "The upstream–downstream trip (133.3 s) took longer than the crosswise trip (100 s), even though both distances are 2 × 100 m. Why?",
          options: [
            { id: "A", text: "The current slowed the swimmer more upstream than it helped downstream — the penalty asymmetry.", isCorrect: true, explanation: "Correct! Going upstream, speed falls to 1 m/s (halved), while downstream it rises to 3 m/s. The time penalty from the slow upstream leg exceeds the time saved downstream. This asymmetry is also crucial in the Michelson–Morley experiment with light." },
            { id: "B", text: "The swimmer's energy ran out upstream.", isCorrect: false, explanation: "We're treating the swimmer as maintaining constant speed relative to the water — there's no energy consideration." },
            { id: "C", text: "The crosswise trip has a shorter path length.", isCorrect: false, explanation: "Both trips cover 200 m total. The difference is entirely due to effective speeds." }
          ]
        },
        {
          id: "ex23-var",
          type: "numerical",
          title: "Variation Problem",
          content: "A swimmer's speed in still water is $3.0$ m/s; the river flows at $1.0$ m/s. What is the total time (in seconds) to swim $60$ m upstream and $60$ m back downstream?",
          numericAnswer: 45,
          numericTolerance: 1
        }
      ]
    }
  ]
};

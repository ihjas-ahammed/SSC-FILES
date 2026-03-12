import { Unit } from '../../types';

export const UNIT_1_2_2_TIME_DILATION_LENGTH_CONTRACTION: Unit = {
  id: "unit-1-2-2",
  title: "Time Dilation & Length Contraction",
  description: "Deriving the light clock, proper time, Eq 2.8, Muon examples, Length contraction Eq 2.13",
  color: "duo-blue",
  lessons: [

    // ── ACTIVATION (prior thinking) ──────────────────────────────────────
    {
      id: "les-1-2-2-act",
      title: "Warm-Up: Moving Clocks",
      description: "Activate prior thinking before time dilation",
      icon: "Clock",
      slides: [
        {
          id: "act-td-1",
          type: "quiz",
          title: "Activation Question 1",
          content: "If you and a friend both start identical stopwatches, then your friend travels at $0.99c$ for a while and comes back — whose stopwatch shows more elapsed time?",
          options: [
            { id: "A", text: "Yours (the one who stayed).", isCorrect: true, explanation: "This is exactly what time dilation predicts! Moving clocks run slower. Your stationary clock accumulates more time. The travelling friend returns younger — this is the essence of the Twin Paradox." },
            { id: "B", text: "Your friend's (the one who moved).", isCorrect: false, explanation: "Actually the opposite. Moving clocks run SLOWER, so the travelling clock shows LESS elapsed time." },
            { id: "C", text: "Both show the same time.", isCorrect: false, explanation: "This is the Newtonian expectation (absolute time). Relativity says moving clocks run slow — they do NOT agree!" }
          ]
        },
        {
          id: "act-td-2",
          type: "quiz",
          title: "Activation Question 2",
          content: "A spaceship is 200 m long when measured at rest. If it flies past you at near-light speed, would you measure its length as longer, shorter, or the same?",
          options: [
            { id: "A", text: "Shorter.", isCorrect: true, explanation: "Length contraction! Objects moving relative to you are contracted along the direction of motion. The faster they move, the shorter they appear. At $v \\to c$, length approaches zero." },
            { id: "B", text: "Longer.", isCorrect: false, explanation: "No — moving objects contract, not expand. Only the transverse dimensions (perpendicular to motion) are unaffected." },
            { id: "C", text: "The same (200 m).", isCorrect: false, explanation: "That would be the Galilean result. In Special Relativity, the length of a moving object is contracted in the direction of motion." }
          ]
        }
      ]
    },

    // ── LESSON 1 (Derivation: Time dilation via light clock → Eq 2.8) ────
    {
      id: "les-1-2-2-1",
      title: "Deriving Time Dilation (Light Clock)",
      description: "Der: Time dilation via light clock → Eq 2.8",
      icon: "Timer",
      slides: [
        {
          id: "td-der-0",
          type: "theory",
          title: "Starting Point & Goal",
          content: "**The light clock thought experiment (Krane §2.2):**\n\nA clock consists of a light pulse bouncing between two mirrors separated by distance $d$.\n\n**Starting point:** In the clock's rest frame $S'$, one tick takes:\n$$\\Delta t_0 = \\frac{2d}{c}$$\n\n**Goal (Eq. 2.8):** Show that in frame $S$ (where the clock moves at speed $v$), the time between ticks is:\n$$\\boxed{\\Delta t = \\frac{\\Delta t_0}{\\sqrt{1 - v^2/c^2}} = \\gamma \\Delta t_0}$$\n\nwhere the Lorentz factor is $\\gamma = \\dfrac{1}{\\sqrt{1 - v^2/c^2}} \\geq 1$."
        },
        {
          id: "td-canvas",
          type: "interactive_canvas",
          title: "Light Clock Animation",
          content: "In the rest frame, the light bounces straight up and down. In the moving frame, it traces a longer zigzag path — the light must travel farther, so the tick takes longer.",
          interactiveCanvasId: "light-clock-diagram"
        },
        {
          id: "td-der-1",
          type: "proof",
          title: "Interactive Derivation: Time Dilation",
          content: "**Destination:** $\\Delta t = \\gamma\\,\\Delta t_0$ where $\\gamma = 1/\\sqrt{1-v^2/c^2}$\n\n**Step 1:** In rest frame $S'$, the light travels straight up and down. One tick = $\\Delta t_0 = 2d/c$.",
          interactiveSteps: [
            {
              stepText: "**Step 1 (Given):** In the clock's rest frame $S'$, light travels distance $2d$ in time $\\Delta t_0 = 2d/c$."
            },
            {
              prompt: "In frame $S$, the clock moves horizontally at $v$. During one tick, the mirror moves horizontally by how much?",
              stepText: "**Step 2:** The mirror moves $v\\,\\Delta t$ horizontally during the tick time $\\Delta t$ (measured in $S$).",
              options: [
                { id: "A", text: "$v \\cdot \\Delta t$", isCorrect: true, explanation: "Correct. The horizontal distance = speed × time. The time is now $\\Delta t$, the (unknown) tick duration in $S$." },
                { id: "B", text: "$v \\cdot \\Delta t_0$", isCorrect: false, explanation: "Close, but $\\Delta t_0$ is the tick time in $S'$, not $S$. We must use $\\Delta t$, the tick duration in $S$, which is what we are solving for." },
                { id: "C", text: "$c \\cdot \\Delta t$", isCorrect: false, explanation: "That would be the distance light travels. The mirror moves at $v$, not $c$." }
              ]
            },
            {
              prompt: "The light path in $S$ forms two right triangles. Using the Pythagorean theorem, what is the total path length of the light in $S$?",
              stepText: "**Step 3:** Each leg of the light path is $\\sqrt{d^2 + (v\\Delta t/2)^2}$. Total path $= 2\\sqrt{d^2 + (v\\Delta t/2)^2}$.",
              options: [
                { id: "A", text: "$2\\sqrt{d^2 + (v\\Delta t/2)^2}$", isCorrect: true, explanation: "Yes — by Pythagoras, the diagonal (light path per half-tick) is $\\sqrt{d^2 + (v\\Delta t/2)^2}$, so the total round trip is twice this." },
                { id: "B", text: "$2d + v\\Delta t$", isCorrect: false, explanation: "That would be simply adding the vertical and horizontal paths — but they form a right triangle, so use Pythagoras." },
                { id: "C", text: "$2d$", isCorrect: false, explanation: "That's the path length in $S'$ (rest frame). In $S$, the light takes a diagonal path, which is longer." }
              ]
            },
            {
              prompt: "Since light always travels at speed $c$, the total path = $c\\,\\Delta t$. Set up the equation and solve for $\\Delta t$.",
              stepText: "**Step 4:** $c\\,\\Delta t = 2\\sqrt{d^2 + (v\\Delta t/2)^2}$\n\nSquare both sides:\n$$c^2\\Delta t^2 = 4d^2 + v^2\\Delta t^2$$\n\nSolve:\n$$\\Delta t^2(c^2 - v^2) = 4d^2 = c^2\\Delta t_0^2$$\n\n$$\\Delta t = \\frac{\\Delta t_0}{\\sqrt{1 - v^2/c^2}} = \\gamma\\,\\Delta t_0 \\qquad \\text{(Eq. 2.8)}$$",
              options: [
                { id: "A", text: "$\\Delta t = \\gamma \\Delta t_0 = \\dfrac{\\Delta t_0}{\\sqrt{1-v^2/c^2}}$", isCorrect: true, explanation: "Correct — that's Eq. 2.8. The time measured in $S$ is longer (dilated) by the factor $\\gamma \\geq 1$. Moving clocks run SLOW." },
                { id: "B", text: "$\\Delta t = \\Delta t_0 / v$", isCorrect: false, explanation: "That's not dimensionally consistent ($\\Delta t_0/v$ would have units of time/velocity = seconds²/m). Follow the algebra from step 3." },
                { id: "C", text: "$\\Delta t = \\Delta t_0 \\cdot v/c$", isCorrect: false, explanation: "Follow the algebra: squaring gives $c^2\\Delta t^2 = 4d^2 + v^2\\Delta t^2$, which rearranges to $\\gamma\\Delta t_0$, not $v\\Delta t_0/c$." }
              ]
            }
          ]
        },
        {
          id: "td-meaning",
          type: "quiz",
          title: "Physical Meaning",
          content: "Time dilation says $\\Delta t = \\gamma \\Delta t_0$. Since $\\gamma \\geq 1$, which clock ticks faster?",
          options: [
            { id: "A", text: "The stationary clock (the one measuring $\\Delta t$).", isCorrect: true, explanation: "$\\Delta t \\geq \\Delta t_0$ since $\\gamma \\geq 1$. The stationary observer's clock records MORE time passing. The moving clock runs SLOWER." },
            { id: "B", text: "The moving clock (the one measuring $\\Delta t_0$).", isCorrect: false, explanation: "No — the moving clock records LESS elapsed time ($\\Delta t_0$). Moving clocks are the ones that run slow." },
            { id: "C", text: "Both tick at the same rate.", isCorrect: false, explanation: "This is Newtonian (absolute time). Relativity: moving clocks genuinely run slower." }
          ]
        },
        {
          id: "td-assumptions",
          type: "quiz",
          title: "Assumptions & Limitations",
          content: "What key assumption about light is used in the light clock derivation?",
          options: [
            { id: "A", text: "Light travels at speed $c$ in both frames (Postulate 2).", isCorrect: true, explanation: "The entire derivation hinges on the fact that light takes the same speed $c$ in both $S$ and $S'$. Without Postulate 2, you'd get different (Galilean) results." },
            { id: "B", text: "Light slows down in a moving frame.", isCorrect: false, explanation: "The opposite — Postulate 2 requires light to remain at $c$ in all inertial frames. It never slows down." },
            { id: "C", text: "The mirrors must be perfectly aligned with the direction of motion.", isCorrect: false, explanation: "The light clock is oriented perpendicular to the direction of motion specifically to avoid length contraction effects in the derivation. Alignment matters but is chosen deliberately." }
          ]
        },
        {
          id: "td-numerical",
          type: "numerical",
          title: "Quick Numerical: Lorentz Factor",
          content: "Calculate the Lorentz factor $\\gamma$ for a particle moving at $v = 0.6c$.\n\n$$\\gamma = \\frac{1}{\\sqrt{1 - v^2/c^2}}$$",
          numericAnswer: 1.25,
          numericTolerance: 0.02
        }
      ]
    },

    // ── LESSON 2 (Definition: Proper Time & Time Dilation) ───────────────
    {
      id: "les-1-2-2-2",
      title: "Proper Time & Time Dilation",
      description: "D: Proper time — the time measured by a clock at rest relative to the events",
      icon: "Hourglass",
      slides: [
        {
          id: "pt-def",
          type: "theory",
          title: "Definition: Proper Time",
          content: "**Proper time** $\\Delta t_0$ (or $\\tau$) is the time interval measured by a clock that is **present at both events** — i.e., the clock is at rest relative to the two events.\n\n**Key facts:**\n- Proper time is the **shortest** possible time interval between two events. Any other frame measures a longer (dilated) time.\n- A person carrying a clock always measures their own **proper time**.\n- If event 1 is 'clock starts' and event 2 is 'clock stops', the proper time is what the clock itself reads.\n\n**Time Dilation (Eq. 2.8):**\n$$\\Delta t = \\gamma \\,\\Delta t_0 = \\frac{\\Delta t_0}{\\sqrt{1 - v^2/c^2}}$$\n\nwhere $\\Delta t$ is measured in the frame where the two events occur at **different positions** (the 'lab' frame)."
        },
        {
          id: "pt-q1",
          type: "quiz",
          title: "Conceptual Check 1",
          content: "A muon is created at altitude 10 km and decays at sea level. In which frame is the muon's **lifetime** the proper time?",
          options: [
            { id: "A", text: "The Earth frame, because the muon travels through Earth's atmosphere.", isCorrect: false, explanation: "In Earth's frame, creation (at 10 km) and decay (at sea level) occur at *different positions*. The muon's own frame has both events at the same location (the muon)." },
            { id: "B", text: "The muon's rest frame, because both events (creation and decay) occur at the same location relative to the muon.", isCorrect: true, explanation: "Exactly. In the muon's frame, it's at rest — both birth and death happen at the same spatial point. The muon's internal clock measures the proper (shortest) lifetime." },
            { id: "C", text: "Neither — there is no proper time for particle decays.", isCorrect: false, explanation: "Proper time is well-defined for any pair of events. For a particle's creation and decay, the proper time is always the particle's rest-frame lifetime." }
          ]
        },
        {
          id: "pt-q2",
          type: "quiz",
          title: "Conceptual Check 2",
          content: "If $\\gamma = 5$ and the proper time between two events is $\\Delta t_0 = 2$ μs, what is the dilated time $\\Delta t$ in the lab frame?",
          options: [
            { id: "A", text: "0.4 μs", isCorrect: false, explanation: "You divided instead of multiplying. $\\Delta t = \\gamma \\Delta t_0 = 5 \\times 2 = 10$ μs." },
            { id: "B", text: "10 μs", isCorrect: true, explanation: "$\\Delta t = \\gamma \\Delta t_0 = 5 \\times 2 = 10$ μs. The lab frame clock runs 5 times faster (from the muon's point of view — or equivalently, the muon's clock runs 5 times slower from the lab's view)." },
            { id: "C", text: "2 μs", isCorrect: false, explanation: "That would mean no time dilation ($\\gamma = 1$, $v = 0$). With $\\gamma = 5$, the dilated time is 5 times the proper time." }
          ]
        },
        {
          id: "pt-canvas",
          type: "interactive_canvas",
          title: "Spacetime & Time Dilation",
          content: "A steeper worldline means higher speed. Drag to increase $\\gamma$ and observe the time dilation effect.",
          interactiveCanvasId: "time-dilation-spacetime"
        },
        {
          id: "pt-fitb",
          type: "fill_in_blank",
          title: "Fill in the Blank",
          content: "The ___ time is the shortest possible time interval between two events and is measured by a clock present at both events.",
          blankAnswer: "proper"
        }
      ]
    },

    // ── LESSON 3 (Ex 2.4: Muon lifetime in Earth's frame) ────────────────
    {
      id: "les-1-2-2-3",
      title: "Ex 2.4: Muon Lifetime in Earth's Frame",
      description: "Ex: Time dilation applied to cosmic ray muons",
      icon: "Atom",
      slides: [
        {
          id: "ex24-q",
          type: "example_q",
          title: "Example 2.4 — Muon Lifetime",
          content: "**Problem (Krane Ex 2.4):**\n\nCosmic ray muons are produced at an altitude of $h = 9.0$ km and travel toward Earth at $v = 0.998c$.\n\nThe muon's **proper lifetime** (in its own rest frame) is $\\tau_0 = 2.2$ μs.\n\n(a) What is the muon's **lifetime as measured in Earth's frame** ($\\Delta t$)?\n\n(b) What **distance** does the muon travel in Earth's frame during this lifetime?\n\n*Try solving before checking the solution.*"
        },
        {
          id: "ex24-sol",
          type: "proof",
          title: "Interactive Solution — Ex 2.4",
          content: "Using $\\Delta t = \\gamma \\tau_0$ and $d = v\\Delta t$.",
          interactiveSteps: [
            {
              stepText: "**Step 1:** Find $\\gamma$ for $v = 0.998c$.\n\n$$\\gamma = \\frac{1}{\\sqrt{1 - (0.998)^2}} = \\frac{1}{\\sqrt{1 - 0.996}} = \\frac{1}{\\sqrt{0.004}} \\approx 15.8$$"
            },
            {
              prompt: "Apply time dilation to find the muon's lifetime in Earth's frame: $\\Delta t = \\gamma \\tau_0$.",
              stepText: "**Step 2:** $\\Delta t = \\gamma \\tau_0 = 15.8 \\times 2.2 \\text{ μs} \\approx 34.8 \\text{ μs}$",
              options: [
                { id: "A", text: "$\\Delta t \\approx 34.8$ μs", isCorrect: true, explanation: "Correct! The muon's lifetime is dilated from 2.2 μs (its own frame) to about 35 μs in Earth's frame — a factor of $\\gamma \\approx 15.8$." },
                { id: "B", text: "$\\Delta t \\approx 2.2$ μs", isCorrect: false, explanation: "That's the proper lifetime in the muon's frame. In Earth's frame, time dilation means it lives $\\gamma$ times longer." },
                { id: "C", text: "$\\Delta t \\approx 0.14$ μs", isCorrect: false, explanation: "You divided when you should have multiplied: $\\Delta t = \\gamma \\tau_0$, not $\\tau_0/\\gamma$." }
              ]
            },
            {
              prompt: "Calculate the distance the muon travels in Earth's frame: $d = v\\Delta t$.",
              stepText: "**Step 3:** $d = v\\Delta t = 0.998c \\times 34.8 \\text{ μs} = 0.998 \\times (3 \\times 10^8) \\times 34.8 \\times 10^{-6} \\approx 10.4 \\text{ km}$",
              options: [
                { id: "A", text: "$d \\approx 10.4$ km", isCorrect: true, explanation: "The muon travels about 10.4 km — more than the 9 km altitude — so it does reach Earth! Without time dilation, a classical muon at $c$ would only cover $3\\times10^8 \\times 2.2\\times10^{-6} \\approx 0.66$ km." },
                { id: "B", text: "$d \\approx 0.66$ km", isCorrect: false, explanation: "That would be the distance if no time dilation occurred (using $\\tau_0$ instead of $\\Delta t$). Time dilation is why muons actually reach the ground." },
                { id: "C", text: "$d \\approx 9$ km", isCorrect: false, explanation: "9 km is the altitude at creation — we're calculating how far it actually travels, which turns out to be ~10.4 km (slightly more, confirming detection at ground level)." }
              ]
            }
          ]
        },
        {
          id: "ex24-interp",
          type: "quiz",
          title: "Physical Interpretation",
          content: "Without relativistic time dilation, could the muon (with $\\tau_0 = 2.2$ μs and $v \\approx c$) reach Earth's surface from 9 km altitude?",
          options: [
            { id: "A", text: "No — it could travel only ~660 m classically, far less than 9 km.", isCorrect: true, explanation: "At $c$ for 2.2 μs: $3\\times10^8 \\times 2.2\\times10^{-6} \\approx 660$ m. Without time dilation, we should detect almost no muons at sea level. Yet we detect millions per hour — direct evidence for time dilation." },
            { id: "B", text: "Yes — moving near $c$ gives it plenty of range.", isCorrect: false, explanation: "Speed alone isn't enough — the lifetime is too short. The key is that time dilation *extends* the lifetime from Earth's perspective." },
            { id: "C", text: "Yes — the 9 km is within the 2.2 μs × c range.", isCorrect: false, explanation: "Check: $c \\times 2.2\\text{ μs} \\approx 660$ m, which is much less than 9 km." }
          ]
        },
        {
          id: "ex24-canvas",
          type: "interactive_canvas",
          title: "Muon Decay: Two Frames",
          content: "In Earth's frame, the muon's lifetime is time-dilated. In the muon's frame, the atmosphere is length-contracted. Both predict the same outcome.",
          interactiveCanvasId: "muon-decay-diagram"
        }
      ]
    },

    // ── LESSON 4 (Ex 2.5: Length contraction from muon's perspective) ────
    {
      id: "les-1-2-2-4",
      title: "Ex 2.5: Muon's Frame — Length Contraction",
      description: "Ex: The same muon problem seen from the muon's rest frame",
      icon: "Minimize2",
      slides: [
        {
          id: "ex25-q",
          type: "example_q",
          title: "Example 2.5 — Muon's Perspective",
          content: "**Problem (Krane Ex 2.5):**\n\nUsing the same muon from Ex 2.4 ($v = 0.998c$, $\\gamma \\approx 15.8$):\n\nFrom the **muon's rest frame**, the muon lives for $\\tau_0 = 2.2$ μs. During this time, it is the Earth's atmosphere that is rushing toward it.\n\n(a) What is the thickness of the atmosphere the muon 'sees'? (The proper length is $L_0 = 9.0$ km)\n\n(b) Does the muon still reach Earth? Is this consistent with Ex 2.4?\n\n*Note:* This problem uses **length contraction**, not time dilation."
        },
        {
          id: "ex25-sol",
          type: "proof",
          title: "Interactive Solution — Ex 2.5",
          content: "Using $L = L_0/\\gamma$ (length contraction, Eq 2.13).",
          interactiveSteps: [
            {
              stepText: "**Step 1:** In the muon's frame, the atmospheric thickness is length-contracted.\n$$L = \\frac{L_0}{\\gamma} = \\frac{9.0 \\text{ km}}{15.8} \\approx 0.57 \\text{ km} = 570 \\text{ m}$$"
            },
            {
              prompt: "How far can the muon 'travel' (i.e., how far does the Earth move toward it) in its own lifetime $\\tau_0 = 2.2$ μs?",
              stepText: "**Step 2:** Distance Earth moves toward muon = $v\\tau_0 = 0.998c \\times 2.2\\text{ μs} \\approx 660$ m",
              options: [
                { id: "A", text: "~660 m", isCorrect: true, explanation: "$0.998 \\times 3\\times10^8 \\times 2.2\\times10^{-6} \\approx 660$ m. The Earth travels 660 m toward the muon in the muon's own lifetime." },
                { id: "B", text: "~10.4 km", isCorrect: false, explanation: "That was the distance in Earth's frame (Ex 2.4), using the dilated time $\\Delta t$. In the muon's frame, the lifetime is $\\tau_0 = 2.2$ μs." },
                { id: "C", text: "~9 km", isCorrect: false, explanation: "That's the *proper length* of the atmosphere. The muon's own lifetime only allows it 660 m — but the atmosphere is length-contracted to only 570 m, so it still reaches Earth!" }
              ]
            },
            {
              prompt: "The muon needs to cover 570 m (contracted atmosphere) in 2.2 μs. Earth travels 660 m toward it. Does the muon reach Earth?",
              stepText: "**Step 3:** Required range = 570 m. Available range = 660 m. Since 660 m > 570 m, the muon **does reach Earth's surface**. ✓\n\nBoth frames agree on the physical outcome — a hallmark of relativistic consistency.",
              options: [
                { id: "A", text: "Yes — 660 m > 570 m, so the muon reaches Earth.", isCorrect: true, explanation: "Consistent with Ex 2.4. Time dilation in Earth's frame and length contraction in the muon's frame are two perspectives on the same physical fact: muons reach Earth." },
                { id: "B", text: "No — the contracted atmosphere is too thick.", isCorrect: false, explanation: "The contracted atmosphere is 570 m, which is LESS than the 660 m the Earth can travel. The muon comfortably reaches the surface." },
                { id: "C", text: "Cannot be determined without knowing the muon's decay distance.", isCorrect: false, explanation: "We have all the information needed. Compare the contracted atmosphere thickness (570 m) to the Earth's approach distance in the muon's lifetime (660 m)." }
              ]
            }
          ]
        },
        {
          id: "ex25-consistency",
          type: "quiz",
          title: "Consistency of Results",
          content: "Ex 2.4 used **time dilation** and Ex 2.5 used **length contraction**, yet both conclude the muon reaches Earth. What does this tell us?",
          options: [
            { id: "A", text: "The two effects are independent and unrelated.", isCorrect: false, explanation: "They're deeply related — both are consequences of the same Lorentz transformation. They MUST give consistent predictions for the physical outcome." },
            { id: "B", text: "Time dilation and length contraction are two perspectives on the same spacetime geometry — they must agree.", isCorrect: true, explanation: "Exactly. Both effects are manifestations of the Lorentz transformation. Any physical outcome (does the muon reach Earth?) must be the same in all frames. The fact that they agree is a powerful consistency check of Special Relativity." },
            { id: "C", text: "One of them must be wrong since they use different approaches.", isCorrect: false, explanation: "Both are correct! Different frames analyze the same event differently, but they must agree on the physical outcome. This is Special Relativity's self-consistency." }
          ]
        }
      ]
    },

    // ── LESSON 5 (Derivation: Length contraction → Eq 2.13) ──────────────
    {
      id: "les-1-2-2-5",
      title: "Deriving Length Contraction",
      description: "Der: Length contraction → Eq 2.13",
      icon: "ArrowLeftRight",
      slides: [
        {
          id: "lc-der-0",
          type: "theory",
          title: "Starting Point & Goal",
          content: "**Setup:** A rod is at rest in frame $S'$, aligned along $x'$. Its **proper length** is $L_0$ (measured in $S'$).\n\nFrame $S'$ moves at speed $v$ relative to frame $S$.\n\n**Question:** What length $L$ does an observer in $S$ measure for the moving rod?\n\n**Goal (Eq. 2.13):**\n$$\\boxed{L = \\frac{L_0}{\\gamma} = L_0\\sqrt{1 - v^2/c^2}}$$\n\nThe moving rod is **shorter** than the proper length. This is called **length contraction** (or Lorentz–FitzGerald contraction)."
        },
        {
          id: "lc-der-1",
          type: "proof",
          title: "Interactive Derivation: Length Contraction",
          content: "**Destination:** $L = L_0/\\gamma$\n\n**Method:** Use the definition of length measurement — in any frame, the length of a moving rod = distance between its two endpoints measured at the **same time** in that frame.",
          interactiveSteps: [
            {
              stepText: "**Step 1:** In $S'$, the rod's two endpoints are at $x'_1 = 0$ and $x'_2 = L_0$. The rod is at rest in $S'$, so its length in $S'$ is $L_0 = x'_2 - x'_1$."
            },
            {
              prompt: "In frame $S$, to measure the rod's length, we must measure both endpoints at the *same time* $t$. Using the time dilation result $\\Delta t_0 = \\Delta t/\\gamma$, apply it to relate the rod's transit time in $S$ to the event timing in $S'$. What is the measured length in $S$?",
              stepText: "**Step 2:** The time for the rod to pass a stationary point in $S$ is $\\Delta t = L_0/v$ (the proper length passing at speed $v$). But the rod's internal clock runs slow: $\\Delta t_0 = \\Delta t/\\gamma$. The length seen from $S$ is:\n$$L = v \\cdot \\Delta t_0 = v \\cdot \\frac{\\Delta t}{\\gamma} = \\frac{v \\cdot L_0/v}{\\gamma} = \\frac{L_0}{\\gamma}$$",
              options: [
                { id: "A", text: "$L = L_0/\\gamma$", isCorrect: true, explanation: "Length contraction — the moving rod is shorter by a factor $\\gamma$ in the direction of motion." },
                { id: "B", text: "$L = L_0 \\cdot \\gamma$", isCorrect: false, explanation: "That would be *length dilation* (length getting longer). The correct result is a contraction: $L = L_0/\\gamma < L_0$." },
                { id: "C", text: "$L = L_0$", isCorrect: false, explanation: "That's the Galilean (classical) result — no length change. Relativity gives $L = L_0/\\gamma$." }
              ]
            },
            {
              prompt: "Write the result using the explicit form of $\\gamma$:",
              stepText: "**Step 3 (Final):** Substituting $\\gamma = 1/\\sqrt{1-v^2/c^2}$:\n$$\\boxed{L = L_0\\sqrt{1 - v^2/c^2}} \\qquad \\text{(Eq. 2.13)}$$\n\nAs $v \\to c$: $L \\to 0$. As $v \\to 0$: $L \\to L_0$. Only the length **along the direction of motion** is contracted. Transverse dimensions ($y$, $z$) are unaffected.",
              options: [
                { id: "A", text: "$L = L_0\\sqrt{1 - v^2/c^2}$", isCorrect: true, explanation: "This is Eq. 2.13. It shows that length depends on relative speed — a purely relativistic effect with no classical analogue." },
                { id: "B", text: "$L = L_0/\\sqrt{1 + v^2/c^2}$", isCorrect: false, explanation: "Note the sign inside the square root: it should be a minus sign. $L = L_0/\\gamma = L_0\\sqrt{1 - v^2/c^2}$." },
                { id: "C", text: "$L = L_0(1 - v/c)$", isCorrect: false, explanation: "That's an approximate linear form, not the exact relativistic result. The exact formula has $\\sqrt{1 - v^2/c^2}$." }
              ]
            }
          ]
        },
        {
          id: "lc-q-meaning",
          type: "quiz",
          title: "Physical Meaning",
          content: "A rod is 1 m long in its rest frame. At $v = 0.6c$, $\\gamma = 1.25$. What length does a lab observer measure?",
          options: [
            { id: "A", text: "0.8 m", isCorrect: true, explanation: "$L = L_0/\\gamma = 1/1.25 = 0.8$ m. The rod appears contracted to 80% of its proper length." },
            { id: "B", text: "1.25 m", isCorrect: false, explanation: "That would be $L_0 \\times \\gamma$ — but length contracts, it doesn't expand." },
            { id: "C", text: "1 m", isCorrect: false, explanation: "Length contraction means the moving rod is measured shorter: $L = L_0/\\gamma = 0.8$ m." }
          ]
        },
        {
          id: "lc-q-limit",
          type: "quiz",
          title: "Conceptual Limit",
          content: "Length contraction only applies to the dimension **along the direction of motion**. What happens to the rod's width (perpendicular dimension)?",
          options: [
            { id: "A", text: "It also contracts by the same factor $\\gamma$.", isCorrect: false, explanation: "No — transverse dimensions are unaffected. Only the component along $v$ contracts. This follows from the symmetry of the Lorentz transformation ($y' = y$, $z' = z$)." },
            { id: "B", text: "It remains unchanged ($y' = y$, $z' = z$).", isCorrect: true, explanation: "Transverse dimensions are unaffected. Only the length component parallel to the direction of relative motion contracts." },
            { id: "C", text: "It expands to compensate for the contraction.", isCorrect: false, explanation: "No such compensation occurs. Volume is not conserved under Lorentz contraction — a moving cube appears as a contracted rectangular box." }
          ]
        },
        {
          id: "lc-canvas",
          type: "interactive_canvas",
          title: "Length Contraction Interactive",
          content: "Drag the slider to increase speed and observe the rod length contract.",
          interactiveCanvasId: "length-contraction-visual"
        }
      ]
    },

    // ── LESSON 6 (Definition: Proper Length) ────────────────────────────
    {
      id: "les-1-2-2-6",
      title: "Proper Length",
      description: "D: Proper length — the length measured in the object's rest frame",
      icon: "Ruler",
      slides: [
        {
          id: "pl-def",
          type: "theory",
          title: "Definition: Proper Length",
          content: "**Proper length** $L_0$ is the length of an object measured in the frame in which the object is **at rest**.\n\nIt is the **longest** possible measured length for the object. Any observer in relative motion measures a shorter (contracted) length:\n\n$$L = \\frac{L_0}{\\gamma} \\leq L_0$$\n\n**Contrast with proper time:**\n| Quantity | Definition | Value |\n|----------|-----------|-------|\n| Proper time $\\tau_0$ | Measured by a clock present at both events | **Shortest** time |\n| Proper length $L_0$ | Measured in rest frame of object | **Longest** length |\n\n**Note:** Proper time and proper length are both *invariant quantities* — they do not depend on the observer's frame and represent the 'intrinsic' spacetime interval."
        },
        {
          id: "pl-q1",
          type: "quiz",
          title: "Conceptual Check 1",
          content: "Two observers measure the length of a spaceship. Observer A is inside the ship. Observer B watches it fly past at $0.9c$. Who measures the proper length?",
          options: [
            { id: "A", text: "Observer A (inside the ship).", isCorrect: true, explanation: "Observer A is at rest relative to the ship — so A measures the proper length $L_0$. Observer B, in relative motion, measures $L = L_0/\\gamma < L_0$." },
            { id: "B", text: "Observer B (watching it fly past).", isCorrect: false, explanation: "Observer B is in relative motion, so they measure the contracted length $L < L_0$, not the proper length." },
            { id: "C", text: "Both measure the same length.", isCorrect: false, explanation: "Length is frame-dependent in Special Relativity. The proper length is measured only in the rest frame." }
          ]
        },
        {
          id: "pl-q2",
          type: "quiz",
          title: "Conceptual Check 2",
          content: "Why is proper length the *longest* measured length for an object, while proper time is the *shortest* measured time interval?",
          options: [
            { id: "A", text: "Because length and time are completely unrelated in relativity.", isCorrect: false, explanation: "Length and time are deeply linked through spacetime. The asymmetry (longest vs. shortest) reflects the geometry of spacetime intervals." },
            { id: "B", text: "Moving objects are Lorentz-contracted (shorter), and moving clocks run slow (record less time) — consistent with $L = L_0/\\gamma < L_0$ and $\\Delta t_0 < \\Delta t$.", isCorrect: true, explanation: "Exactly. Both follow from the same Lorentz factor $\\gamma$: lengths shrink ($L = L_0/\\gamma$), while time intervals expand from the proper time ($\\Delta t = \\gamma \\Delta t_0$). Moving clocks show less elapsed time, and moving rods appear shorter." },
            { id: "C", text: "It's a coincidence of how the experiments are set up.", isCorrect: false, explanation: "It's not a coincidence — it's a fundamental consequence of the Minkowski spacetime metric and the Lorentz transformation." }
          ]
        },
        {
          id: "pl-fitb",
          type: "fill_in_blank",
          title: "Fill in the Blank",
          content: "The proper length is the length measured in the ___ frame of the object, and is the ___ possible length measured by any observer.",
          blankAnswer: "rest"
        }
      ]
    },

    // ── LESSON 7 (Ex 2.6: Platform-and-rocket multi-part) ───────────────
    {
      id: "les-1-2-2-7",
      title: "Ex 2.6: Platform & Rocket",
      description: "Ex: Multi-part problem — platform and rocket with time dilation and length contraction",
      icon: "Rocket",
      slides: [
        {
          id: "ex26-q",
          type: "example_q",
          title: "Example 2.6 — Platform and Rocket",
          content: "**Problem (Krane Ex 2.6):**\n\nA rocket of **proper length** $L_0 = 100$ m passes a platform at $v = 0.8c$ ($\\gamma = 5/3 \\approx 1.667$).\n\n**(a)** What is the length of the rocket as measured from the platform?\n\n**(b)** A clock on the rocket reads $\\tau_0 = 0$ when the rocket's nose passes the front of the platform. What does the platform clock read at that moment?\n\n**(c)** When does the rocket's **tail** pass the front of the platform (platform frame)?\n\n**(d)** What does the *rocket's own clock* read when its tail passes the front of the platform?\n\n*Attempt each part before checking.*"
        },
        {
          id: "ex26-sol",
          type: "proof",
          title: "Interactive Solution — Ex 2.6",
          content: "Applying $L = L_0/\\gamma$ and $\\Delta t = \\gamma \\tau_0$ systematically.",
          interactiveSteps: [
            {
              prompt: "Part (a): Find the platform-frame length of the rocket. Recall $L = L_0/\\gamma$.",
              stepText: "**Part (a):** $L = L_0/\\gamma = 100/1.667 \\approx 60$ m. The rocket appears only 60 m long from the platform.",
              options: [
                { id: "A", text: "$L \\approx 60$ m", isCorrect: true, explanation: "$100 / (5/3) = 100 \\times 3/5 = 60$ m. Length contraction: the rocket is seen as shorter." },
                { id: "B", text: "$L \\approx 167$ m", isCorrect: false, explanation: "That would be $L_0 \\times \\gamma$ — length expansion. Moving objects CONTRACT, not expand." },
                { id: "C", text: "$L = 100$ m", isCorrect: false, explanation: "That's the proper length. The platform (in relative motion) measures $L_0/\\gamma = 60$ m." }
              ]
            },
            {
              prompt: "Part (c): The rocket's tail passes the platform front when the (contracted) rocket has fully passed. Time = $L/v$. Calculate.",
              stepText: "**Part (c):** Time for the 60 m (contracted) rocket to pass: $\\Delta t = L/v = 60/(0.8c) = 60/(0.8 \\times 3\\times10^8) \\approx 250$ ns",
              options: [
                { id: "A", text: "$\\Delta t \\approx 250$ ns", isCorrect: true, explanation: "$L/v = 60 \\text{ m}/(0.8 \\times 3\\times10^8 \\text{ m/s}) = 2.5\\times10^{-7}$ s = 250 ns. The platform clock advances 250 ns." },
                { id: "B", text: "$\\Delta t \\approx 417$ ns", isCorrect: false, explanation: "That would be using $L_0/v = 100/(0.8c)$ — the proper length. But in the platform frame, the rocket is length-contracted to 60 m." },
                { id: "C", text: "$\\Delta t \\approx 150$ ns", isCorrect: false, explanation: "Check: $60 \\text{ m} / (0.8 \\times 3\\times10^8 \\text{ m/s}) = 60 / (2.4\\times10^8) \\approx 2.5\\times10^{-7}$ s = 250 ns." }
              ]
            },
            {
              prompt: "Part (d): The rocket's own clock measures the PROPER time $\\tau_0 = \\Delta t/\\gamma$. Calculate.",
              stepText: "**Part (d):** $\\tau_0 = \\Delta t/\\gamma = 250 \\text{ ns}/1.667 \\approx 150$ ns. The rocket clock shows only 150 ns (time dilation — moving clocks run slow).",
              options: [
                { id: "A", text: "$\\tau_0 \\approx 150$ ns", isCorrect: true, explanation: "$\\tau_0 = \\Delta t/\\gamma = 250/1.667 = 150$ ns. The rocket's own clock runs slower by $\\gamma$. Both the time dilation and length contraction give consistent results." },
                { id: "B", text: "$\\tau_0 \\approx 250$ ns", isCorrect: false, explanation: "That's the platform frame time $\\Delta t$. The rocket's proper time is shorter: $\\tau_0 = \\Delta t/\\gamma$." },
                { id: "C", text: "$\\tau_0 \\approx 417$ ns", isCorrect: false, explanation: "That would be $\\Delta t \\times \\gamma$. Proper time is LESS than coordinate time: $\\tau_0 = \\Delta t/\\gamma$." }
              ]
            }
          ]
        },
        {
          id: "ex26-method",
          type: "quiz",
          title: "Method Check",
          content: "In part (c), why did we use the **contracted** length (60 m) rather than the proper length (100 m) to find the platform-frame time?",
          options: [
            { id: "A", text: "Because we were working in the platform frame, where the rocket appears 60 m long.", isCorrect: true, explanation: "In the platform frame, the rocket is length-contracted to 60 m. This is the relevant length for calculating when the tail passes: $\\Delta t = L_{\\text{contracted}}/v = 60/0.8c$." },
            { id: "B", text: "Because 60 m is the smaller number.", isCorrect: false, explanation: "The reason is physical: in the platform frame, the rocket is length-contracted. Always use the length appropriate to the frame you're working in." },
            { id: "C", text: "The proper length should have been used; 60 m was a mistake.", isCorrect: false, explanation: "60 m is correct for the platform frame. The proper length of 100 m is what the *rocket passengers* measure." }
          ]
        },
        {
          id: "ex26-interp",
          type: "quiz",
          title: "Physical Interpretation",
          content: "The platform clock reads 250 ns but the rocket clock reads only 150 ns for the same event (rocket tail passes platform front). This is an example of which effect?",
          options: [
            { id: "A", text: "Time dilation — the rocket (moving) clock runs slower.", isCorrect: true, explanation: "Correct. The rocket is the moving frame, so its clock ticks more slowly. For every 250 ns of platform time, the rocket clock only advances $250/\\gamma = 150$ ns. This is time dilation in action." },
            { id: "B", text: "Length contraction — the contracted rocket is shorter.", isCorrect: false, explanation: "Length contraction explains why the rocket appears 60 m (not 100 m) from the platform. The difference in clock readings (250 ns vs. 150 ns) is time dilation." },
            { id: "C", text: "Simultaneity — the two events occur at different times in each frame.", isCorrect: false, explanation: "Relativity of simultaneity is also involved (events simultaneous in one frame aren't in another), but the specific effect of moving clocks running slow is time dilation." }
          ]
        }
      ]
    }
  ]
};
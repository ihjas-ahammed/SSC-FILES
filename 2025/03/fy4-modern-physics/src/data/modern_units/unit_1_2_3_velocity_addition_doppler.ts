import { Unit } from '../../types';

export const UNIT_1_2_3_VELOCITY_ADDITION_DOPPLER: Unit = {
  id: "unit-1-2-3",
  title: "Velocity Addition & Relativistic Doppler",
  description: "Der: Relativistic velocity addition Eq 2.17 · Worked examples · Der: Relativistic Doppler Eq 2.22",
  color: "duo-orange",
  lessons: [

    // ── ACTIVATION ────────────────────────────────────────────────────────
    {
      id: "les-1-2-3-act",
      title: "Warm-Up: Adding Speeds",
      description: "Activate prior thinking on velocity addition",
      icon: "Lightbulb",
      slides: [
        {
          id: "act-va-1",
          type: "quiz",
          title: "Activation Question 1",
          content: "Two rockets are moving toward each other, each at $0.8c$ as measured from Earth. According to Galilean mechanics, what is their relative approach speed?",
          options: [
            { id: "A", text: "$1.6c$", isCorrect: true, explanation: "Galilean mechanics says simply $0.8c + 0.8c = 1.6c$. But this violates Postulate 2 (nothing can exceed $c$). Einstein's relativistic formula gives a value less than $c$." },
            { id: "B", text: "$0.8c$", isCorrect: false, explanation: "That's just each rocket's speed relative to Earth. Their relative speed in Galilean mechanics would be $0.8 + 0.8 = 1.6c$." },
            { id: "C", text: "$c$", isCorrect: false, explanation: "Only light travels at exactly $c$. The relativistic formula gives the correct answer — less than $c$, but not exactly $c$." }
          ]
        },
        {
          id: "act-va-2",
          type: "quiz",
          title: "Activation Question 2",
          content: "When an ambulance moves toward you, the siren sounds higher-pitched than when it moves away. Is there a similar frequency shift for light from moving stars?",
          options: [
            { id: "A", text: "Yes — this is the Doppler effect for light (redshift / blueshift).", isCorrect: true, explanation: "Absolutely. Light from receding galaxies is redshifted (lower frequency) and from approaching objects is blueshifted (higher frequency). The relativistic Doppler formula accounts for the absence of a medium (unlike sound)." },
            { id: "B", text: "No — the Doppler effect only applies to sound, which needs a medium.", isCorrect: false, explanation: "Light also shows a Doppler effect! Unlike sound, the relativistic formula for light has no 'medium' (no ether), but frequency shifts still occur with relative motion." },
            { id: "C", text: "Light doesn't change frequency with motion — only wavelength changes.", isCorrect: false, explanation: "Frequency and wavelength are both affected. Since $c = f\\lambda$ and $c$ is constant, if wavelength changes, frequency must change too." }
          ]
        }
      ]
    },

    // ── LESSON 1 (Derivation: Relativistic velocity addition → Eq 2.17) ──
    {
      id: "les-1-2-3-1",
      title: "Deriving Relativistic Velocity Addition",
      description: "Der: Relativistic velocity addition → Eq 2.17",
      icon: "ArrowRight",
      slides: [
        {
          id: "rva-der-0",
          type: "theory",
          title: "Starting Point & Goal",
          content: "**Setup:** Frame $S'$ moves at speed $v$ relative to $S$. An object moves at speed $u'$ in frame $S'$.\n\n**Galilean result (fails):** $u = u' + v$ — this can exceed $c$ and violates Postulate 2.\n\n**Goal (Eq. 2.17):**\n$$\\boxed{u = \\frac{u' + v}{1 + u'v/c^2}}$$\n\n**Key features:**\n- When $u' \\ll c$ and $v \\ll c$: denominator → 1, recovers $u = u' + v$ (Galilean limit). ✓\n- When $u' = c$: $u = (c + v)/(1 + v/c) = c(c+v)/(c+v) = c$ — light always travels at $c$! ✓\n- Result always $\\leq c$ for $u', v \\leq c$. ✓"
        },
        {
          id: "rva-der-steps",
          type: "proof",
          title: "Interactive Derivation: Relativistic Velocity Addition",
          content: "**Destination:** $u = (u' + v)/(1 + u'v/c^2)$\n\n**Method:** Use the Lorentz transformation equations for position and time.",
          interactiveSteps: [
            {
              stepText: "**Step 1:** The Lorentz transformation relates events in $S$ and $S'$:\n$$x = \\gamma(x' + vt'), \\quad t = \\gamma(t' + vx'/c^2)$$\n\nLet the object move at $u'$ in $S'$, so $x' = u' t'$ (starting from origin)."
            },
            {
              prompt: "The velocity in $S$ is defined as $u = dx/dt$. Differentiate the Lorentz transformation to find $dx$ and $dt$ in terms of $dx'$ and $dt'$.",
              stepText: "**Step 2:** Taking differentials:\n$$dx = \\gamma(dx' + v\\,dt'), \\quad dt = \\gamma(dt' + v\\,dx'/c^2)$$",
              options: [
                { id: "A", text: "$dx = \\gamma(dx' + v\\,dt')$ and $dt = \\gamma(dt' + v\\,dx'/c^2)$", isCorrect: true, explanation: "These are just the differential forms of the Lorentz transformation. Since $\\gamma$ is a constant (doesn't depend on coordinates), differentiating is straightforward." },
                { id: "B", text: "$dx = dx' + v\\,dt'$ and $dt = dt'$", isCorrect: false, explanation: "That's the Galilean transformation. The relativistic version includes $\\gamma$ and the $vx'/c^2$ term in the time transformation." },
                { id: "C", text: "$dx = dx'/\\gamma$ and $dt = dt'\\cdot\\gamma$", isCorrect: false, explanation: "That's a mixture of time dilation and length contraction formulas. For velocity addition, use the full Lorentz differential transformation." }
              ]
            },
            {
              prompt: "Form $u = dx/dt$ by dividing the expressions from Step 2.",
              stepText: "**Step 3:** Divide:\n$$u = \\frac{dx}{dt} = \\frac{\\gamma(dx' + v\\,dt')}{\\gamma(dt' + v\\,dx'/c^2)} = \\frac{dx' + v\\,dt'}{dt' + v\\,dx'/c^2}$$\n\nDivide numerator and denominator by $dt'$, using $u' = dx'/dt'$:\n$$u = \\frac{u' + v}{1 + u'v/c^2} \\qquad \\text{(Eq. 2.17)}$$",
              options: [
                { id: "A", text: "$u = \\dfrac{u' + v}{1 + u'v/c^2}$", isCorrect: true, explanation: "This is the relativistic velocity addition formula (Eq. 2.17). The $\\gamma$ factors cancel, leaving a clean result." },
                { id: "B", text: "$u = u' + v$", isCorrect: false, explanation: "That's the Galilean result — the denominator $1 + u'v/c^2$ is crucial and must not be dropped." },
                { id: "C", text: "$u = u' \\cdot v$", isCorrect: false, explanation: "Velocities in relativity don't multiply. Divide $dx'/dt' + v$ by $1 + dx'/dt' \\cdot v/c^2$." }
              ]
            }
          ]
        },
        {
          id: "rva-meaning",
          type: "quiz",
          title: "Physical Meaning",
          content: "Why does the relativistic formula have a denominator of $1 + u'v/c^2$ instead of just 1 (Galilean)?",
          options: [
            { id: "A", text: "The denominator encodes the relativistic modification to time — in relativity, time is not universal, so the rate at which $t$ advances differs from $t'$.", isCorrect: true, explanation: "Exactly. The $vx'/c^2$ term in the Lorentz time transformation is the origin of the denominator. It reflects the relativity of simultaneity — observers in $S$ and $S'$ disagree on time intervals, leading to the velocity transformation." },
            { id: "B", text: "The denominator is just a correction to prevent $u$ from exceeding $c$, added by hand.", isCorrect: false, explanation: "Not added by hand — it emerges naturally from the Lorentz transformation. The protection against $u > c$ is a consequence, not the cause." },
            { id: "C", text: "The denominator corrects for the gravitational time dilation between frames.", isCorrect: false, explanation: "Gravitational effects are part of General Relativity. This is Special Relativity — the denominator comes from the kinematics of inertial frames." }
          ]
        },
        {
          id: "rva-limit",
          type: "quiz",
          title: "Limiting Case: Light Speed",
          content: "Apply the formula with $u' = c$ (a photon). What does the formula give for $u$?",
          options: [
            { id: "A", text: "$u = c$ (regardless of $v$).", isCorrect: true, explanation: "$u = (c + v)/(1 + cv/c^2) = (c + v)/((c + v)/c) = c$. The formula automatically preserves $c$ — Postulate 2 is built in!" },
            { id: "B", text: "$u = c + v$ (classical result).", isCorrect: false, explanation: "The denominator prevents this. With $u' = c$: $(c + v)/(1 + v/c) = c(c+v)/(c+v) = c$." },
            { id: "C", text: "$u = v$ (speed of the frame).", isCorrect: false, explanation: "That would only happen if $u' = 0$. Substitute $u' = c$ into the formula: you get exactly $c$." }
          ]
        },
        {
          id: "rva-canvas",
          type: "interactive_canvas",
          title: "Relativistic vs. Classical Velocity Addition",
          content: "Move the slider to see how the relativistic formula (purple) always stays below $c$ while Galilean (green) can exceed it.",
          interactiveCanvasId: "relativistic-velocity-addition"
        }
      ]
    },

    // ── LESSON 2 (Ex 2.7: Velocity transformation — timing device) ───────
    {
      id: "les-1-2-3-2",
      title: "Ex 2.7: Velocity Transformation",
      description: "Ex: Applying relativistic velocity addition to a timing device",
      icon: "Gauge",
      slides: [
        {
          id: "ex27-q",
          type: "example_q",
          title: "Example 2.7 — Velocity Transformation",
          content: "**Problem (Krane Ex 2.7):**\n\nA spaceship moves away from Earth at $v = 0.60c$. The ship fires a probe forward at $u' = 0.80c$ relative to the ship.\n\n(a) What is the probe's speed $u$ relative to Earth?\n\n(b) What would the Galilean formula give? By what fraction does the relativistic result differ?\n\n*Use the relativistic velocity addition formula: $u = (u' + v)/(1 + u'v/c^2)$*"
        },
        {
          id: "ex27-sol",
          type: "proof",
          title: "Interactive Solution — Ex 2.7",
          content: "Applying Eq. 2.17.",
          interactiveSteps: [
            {
              stepText: "**Step 1:** Identify variables: $v = 0.60c$ (ship relative to Earth), $u' = 0.80c$ (probe relative to ship). Plug into Eq. 2.17:\n$$u = \\frac{u' + v}{1 + u'v/c^2} = \\frac{0.80c + 0.60c}{1 + (0.80)(0.60)}$$"
            },
            {
              prompt: "Calculate the denominator: $1 + u'v/c^2 = 1 + (0.80)(0.60)$.",
              stepText: "**Step 2:** Denominator $= 1 + 0.48 = 1.48$\n\nNumerator $= 1.40c$\n\n$$u = \\frac{1.40c}{1.48} = 0.946c$$",
              options: [
                { id: "A", text: "$u = 0.946c$", isCorrect: true, explanation: "$1.40c / 1.48 = 0.946c$. The probe moves at $94.6\\%$ of $c$ relative to Earth — less than $c$, as required." },
                { id: "B", text: "$u = 1.40c$ (Galilean)", isCorrect: false, explanation: "That's the Galilean answer — just $0.80c + 0.60c$. The relativistic denominator (1.48) reduces this to $0.946c$." },
                { id: "C", text: "$u = 0.80c$", isCorrect: false, explanation: "That's the probe's speed relative to the ship, not Earth. We need to transform to Earth's frame using the velocity addition formula." }
              ]
            },
            {
              prompt: "How does the relativistic result compare to the Galilean result?",
              stepText: "**Step 3:** Galilean: $u_{\\text{Gal}} = 0.60c + 0.80c = 1.40c$. Relativistic: $u = 0.946c$.\n\nFractional difference $= (1.40 - 0.946)/1.40 \\approx 32\\%$ below the Galilean result.",
              options: [
                { id: "A", text: "About 32% below the Galilean prediction.", isCorrect: true, explanation: "The relativistic result is significantly different from the Galilean one when speeds are comparable to $c$. At low speeds, both formulas agree." },
                { id: "B", text: "Essentially the same as Galilean.", isCorrect: false, explanation: "At speeds near $c$, the relativistic and Galilean results differ substantially. Here they differ by 32%." },
                { id: "C", text: "The Galilean result is impossible, so comparison is meaningless.", isCorrect: false, explanation: "We can certainly compute $0.6c + 0.8c = 1.4c$ and compare — it's simply the incorrect classical prediction. The comparison shows how large the relativistic correction is." }
              ]
            }
          ]
        },
        {
          id: "ex27-interp",
          type: "quiz",
          title: "Physical Interpretation",
          content: "At what speed regime does the relativistic formula agree with the Galilean formula?",
          options: [
            { id: "A", text: "When both $u'$ and $v$ are much less than $c$.", isCorrect: true, explanation: "When $u' \\ll c$ and $v \\ll c$, the denominator $1 + u'v/c^2 \\approx 1$, and the formula reduces to $u = u' + v$. This is why classical mechanics works for everyday speeds." },
            { id: "B", text: "When both $u'$ and $v$ are close to $c$.", isCorrect: false, explanation: "Near $c$ is exactly when the relativistic correction is largest. The Galilean formula fails most dramatically near $c$." },
            { id: "C", text: "They never agree — even at low speeds.", isCorrect: false, explanation: "They agree in the low-speed limit. The denominator $1 + u'v/c^2$ approaches 1 when $u', v \\ll c$." }
          ]
        }
      ]
    },

    // ── LESSON 3 (Ex 2.8: Missile speed — classical violation vs relativistic) ──
    {
      id: "les-1-2-3-3",
      title: "Ex 2.8: Missile Speed",
      description: "Ex: Classical violation vs. relativistic result — missile fired from rocket",
      icon: "Rocket",
      slides: [
        {
          id: "ex28-q",
          type: "example_q",
          title: "Example 2.8 — Missile and Rockets",
          content: "**Problem (Krane Ex 2.8):**\n\nRocket A travels at $v_A = 0.75c$ relative to Earth. It fires a missile forward at $u' = 0.75c$ relative to the rocket.\n\n(a) What speed does the missile have relative to Earth according to the **Galilean** formula?\n\n(b) Does this violate Special Relativity?\n\n(c) What does the **relativistic** formula give?\n\n*Explore both predictions.*"
        },
        {
          id: "ex28-sol",
          type: "proof",
          title: "Interactive Solution — Ex 2.8",
          content: "Comparing Galilean (violation) and relativistic (correct) answers.",
          interactiveSteps: [
            {
              prompt: "Part (a): Apply Galilean velocity addition: $u = u' + v$.",
              stepText: "**Part (a) — Galilean:** $u_{\\text{Gal}} = u' + v = 0.75c + 0.75c = 1.5c$",
              options: [
                { id: "A", text: "$1.5c$", isCorrect: true, explanation: "The Galilean formula gives $1.5c$ — which exceeds the speed of light. This is the violation." },
                { id: "B", text: "$0.75c$", isCorrect: false, explanation: "That's the missile's speed relative to the rocket. Adding the rocket's speed gives $1.5c$ classically." },
                { id: "C", text: "$0.96c$", isCorrect: false, explanation: "That's the relativistic answer (coming in step 3). The Galilean answer is simply $0.75 + 0.75 = 1.5c$." }
              ]
            },
            {
              prompt: "Part (b): Does $1.5c$ violate Special Relativity?",
              stepText: "**Part (b):** Yes — Postulate 2 says no material object can reach or exceed $c$. The Galilean result $1.5c > c$ is unphysical and demonstrates why Galilean velocity addition must be replaced.",
              options: [
                { id: "A", text: "Yes — $1.5c > c$ violates Postulate 2.", isCorrect: true, explanation: "Any speed exceeding $c$ for a material object is forbidden in Special Relativity. This is a direct falsification of the Galilean formula for high-speed objects." },
                { id: "B", text: "No — the Galilean formula is valid for any speed.", isCorrect: false, explanation: "The Galilean formula breaks down at speeds comparable to $c$. Its prediction of $1.5c$ is incorrect." },
                { id: "C", text: "It only violates if the object has mass — photons can exceed $c$.", isCorrect: false, explanation: "Even photons cannot exceed $c$ (they travel at exactly $c$). No particle or signal can travel faster than light in vacuum." }
              ]
            },
            {
              prompt: "Part (c): Apply the relativistic formula $u = (u' + v)/(1 + u'v/c^2)$.",
              stepText: "**Part (c) — Relativistic:**\n$$u = \\frac{0.75c + 0.75c}{1 + (0.75)(0.75)} = \\frac{1.50c}{1 + 0.5625} = \\frac{1.50c}{1.5625} \\approx 0.960c$$\n\nThe missile moves at $0.960c < c$ — consistent with Special Relativity. ✓",
              options: [
                { id: "A", text: "$u \\approx 0.960c$", isCorrect: true, explanation: "$1.50/1.5625 \\approx 0.960$. The relativistic formula automatically prevents the result from exceeding $c$." },
                { id: "B", text: "$u \\approx 1.5c$", isCorrect: false, explanation: "That's the Galilean answer. The relativistic denominator $1.5625$ brings the result down to $0.960c$." },
                { id: "C", text: "$u \\approx 0.75c$", isCorrect: false, explanation: "You need to use the formula: $(0.75 + 0.75)/(1 + 0.75^2) = 1.5/1.5625 = 0.960c$." }
              ]
            }
          ]
        },
        {
          id: "ex28-interp",
          type: "quiz",
          title: "Physical Interpretation",
          content: "As you keep adding velocities close to $c$ using the relativistic formula, what is the maximum speed you can ever reach?",
          options: [
            { id: "A", text: "The speed of light, $c$ — approached but never reached.", isCorrect: true, explanation: "The formula $(u' + v)/(1 + u'v/c^2)$ always gives a result $< c$ when $u', v < c$. You can get arbitrarily close to $c$ but never reach it — a fundamental feature of Special Relativity." },
            { id: "B", text: "$2c$ — since two objects at $c$ give $c + c = 2c$.", isCorrect: false, explanation: "If $u' = c$: $u = (c + v)/(1 + v/c) = c$. Even adding $c$ to any speed gives $c$." },
            { id: "C", text: "There is no limit — with enough rockets, you can exceed $c$.", isCorrect: false, explanation: "No number of rocket stages can exceed $c$. Each application of the relativistic formula gives a result $< c$, converging toward $c$ but never reaching it." }
          ]
        }
      ]
    },

    // ── LESSON 4 (Derivation: Relativistic Doppler → Eq 2.22) ────────────
    {
      id: "les-1-2-3-4",
      title: "Deriving the Relativistic Doppler Effect",
      description: "Der: Relativistic Doppler effect → Eq 2.22",
      icon: "Waves",
      slides: [
        {
          id: "doppler-der-0",
          type: "theory",
          title: "Starting Point & Goal",
          content: "**Setup:** A light source emits at frequency $f_s$ in its own rest frame. The source moves toward the observer at speed $v$.\n\n**Classical Doppler:** For sound, both source and observer speed matter, and the medium (air) defines a preferred frame.\n\n**Key difference for light:** There is no medium. Einstein's Postulate 2 says $c$ is the same for all observers. The relativistic Doppler formula includes both the classical shift AND time dilation.\n\n**Goal (Eq. 2.22):**\n$$\\boxed{f_{\\text{obs}} = f_s \\sqrt{\\frac{1 + \\beta}{1 - \\beta}} \\quad \\text{(source approaching)}}$$\n$$\\boxed{f_{\\text{obs}} = f_s \\sqrt{\\frac{1 - \\beta}{1 + \\beta}} \\quad \\text{(source receding)}}$$\n\nwhere $\\beta = v/c$. Unified form: $f_{\\text{obs}} = f_s \\sqrt{\\frac{c + v}{c - v}}$ (approaching)."
        },
        {
          id: "doppler-der-steps",
          type: "proof",
          title: "Interactive Derivation: Relativistic Doppler",
          content: "**Destination:** $f_{\\text{obs}} = f_s\\sqrt{(1+\\beta)/(1-\\beta)}$\n\n**Method:** Track wavefronts, account for both source motion and time dilation.",
          interactiveSteps: [
            {
              stepText: "**Step 1:** In the source's frame, it emits one wavecrest every $T_s = 1/f_s$ seconds. In the observer's frame, the source moves toward the observer at speed $v$."
            },
            {
              prompt: "In the observer's frame, the source clock runs slow (time dilation). The source emits crests every $T_0$ in its frame, but the observer sees this as every $\\gamma T_0$. Meanwhile, the source moves closer. What is the wavelength $\\lambda'$ of the wave received?",
              stepText: "**Step 2:** Time between crests in observer frame (before travel): $T_{\\text{dilated}} = \\gamma T_s$. During $T_{\\text{dilated}}$, source moves $v \\cdot T_{\\text{dilated}}$ closer, reducing the gap. The received wavelength:\n$$\\lambda' = (c - v)\\cdot T_{\\text{dilated}} = (c-v)\\gamma T_s$$",
              options: [
                { id: "A", text: "$\\lambda' = (c - v)\\gamma T_s$", isCorrect: true, explanation: "The wavelength is compressed because (a) the source moves toward the observer and (b) the source's clock is time-dilated. Both effects multiply." },
                { id: "B", text: "$\\lambda' = c T_s$ (unshifted)", isCorrect: false, explanation: "That would be the rest-frame wavelength. Motion compresses the wavefronts: factor $(c-v)/c$, and time dilation adds $\\gamma$." },
                { id: "C", text: "$\\lambda' = c T_s / v$", isCorrect: false, explanation: "Check dimensions: $c T_s / v$ would have units of m/s × s / (m/s) = m — but the formula should give $(c-v)\\gamma T_s$." }
              ]
            },
            {
              prompt: "The observed frequency is $f = c/\\lambda'$. Substitute and simplify using $\\gamma = 1/\\sqrt{1-\\beta^2} = 1/\\sqrt{(1-\\beta)(1+\\beta)}$.",
              stepText: "**Step 3:**\n$$f_{\\text{obs}} = \\frac{c}{\\lambda'} = \\frac{c}{(c-v)\\gamma T_s} = \\frac{f_s}{(1-\\beta)\\gamma}$$\n\nSubstitute $\\gamma = 1/\\sqrt{(1-\\beta)(1+\\beta)}$:\n$$f_{\\text{obs}} = \\frac{f_s \\sqrt{(1-\\beta)(1+\\beta)}}{(1-\\beta)} = f_s\\sqrt{\\frac{1+\\beta}{1-\\beta}} \\qquad \\text{(Eq. 2.22)}$$",
              options: [
                { id: "A", text: "$f_{\\text{obs}} = f_s\\sqrt{\\dfrac{1+\\beta}{1-\\beta}}$", isCorrect: true, explanation: "This is Eq. 2.22 — the relativistic Doppler formula for an approaching source. For $\\beta > 0$ (approaching), $f_{\\text{obs}} > f_s$: blueshift!" },
                { id: "B", text: "$f_{\\text{obs}} = f_s(1 + \\beta)$", isCorrect: false, explanation: "That's the classical (non-relativistic) Doppler formula. The relativistic version includes the $\\sqrt{\\;\\;}$ from time dilation." },
                { id: "C", text: "$f_{\\text{obs}} = f_s / \\sqrt{1+\\beta}$", isCorrect: false, explanation: "Recheck step 3: $f_s / [(1-\\beta) \\cdot 1/\\sqrt{(1-\\beta)(1+\\beta)}] = f_s\\sqrt{(1+\\beta)/(1-\\beta)}$." }
              ]
            }
          ]
        },
        {
          id: "doppler-meaning",
          type: "quiz",
          title: "Physical Meaning",
          content: "A source moves **away** from the observer. How does $f_{\\text{obs}}$ compare to $f_s$?",
          options: [
            { id: "A", text: "$f_{\\text{obs}} < f_s$ — redshift (lower frequency, longer wavelength).", isCorrect: true, explanation: "For a receding source, $f_{\\text{obs}} = f_s\\sqrt{(1-\\beta)/(1+\\beta)} < f_s$. Wavelength increases → redshift. This is how astronomers detect that distant galaxies are moving away (cosmological redshift)." },
            { id: "B", text: "$f_{\\text{obs}} > f_s$ — blueshift.", isCorrect: false, explanation: "Blueshift occurs when the source approaches. Receding → redshift (lower frequency)." },
            { id: "C", text: "$f_{\\text{obs}} = f_s$ — no shift for light.", isCorrect: false, explanation: "Unlike sound, there's no 'magic angle' for light. Any relative radial motion produces a Doppler shift." }
          ]
        },
        {
          id: "doppler-canvas",
          type: "interactive_canvas",
          title: "Doppler Effect: Approaching vs. Receding",
          content: "Wavefronts are compressed (blueshift) ahead of the source and stretched (redshift) behind it.",
          interactiveCanvasId: "relativistic-doppler-diagram"
        },
        {
          id: "doppler-assumptions",
          type: "quiz",
          title: "Key Assumptions",
          content: "The relativistic Doppler formula assumes the motion is **along the line of sight** (radial). What happens if the source moves **perpendicular** to the line of sight (transverse)?",
          options: [
            { id: "A", text: "No Doppler shift — the frequency is unchanged.", isCorrect: false, explanation: "There IS a transverse Doppler shift in Special Relativity, due to time dilation alone — even with no classical Doppler term!" },
            { id: "B", text: "There is a purely relativistic transverse Doppler shift: $f_{\\text{obs}} = f_s/\\gamma < f_s$ (always redshift).", isCorrect: true, explanation: "This is unique to Special Relativity — no classical analogue. Even if the source moves perpendicular to your line of sight, the source's clock runs slow ($\\gamma$), so you observe a reduced frequency. This is the **transverse Doppler effect**." },
            { id: "C", text: "There is a blueshift because the source is getting closer.", isCorrect: false, explanation: "If the motion is purely transverse, the source neither approaches nor recedes (instantaneously). The only effect is the relativistic time dilation redshift." }
          ]
        }
      ]
    },

    // ── LESSON 5 (Ex 2.9: Redshift of distant galaxy) ───────────────────
    {
      id: "les-1-2-3-5",
      title: "Ex 2.9: Redshift of a Galaxy",
      description: "Ex: Applying the relativistic Doppler formula to cosmological redshift",
      icon: "Globe",
      slides: [
        {
          id: "ex29-q",
          type: "example_q",
          title: "Example 2.9 — Galaxy Redshift",
          content: "**Problem (Krane Ex 2.9):**\n\nA distant galaxy recedes from Earth at $v = 0.55c$.\n\nThe galaxy emits hydrogen's H$\\alpha$ spectral line at $\\lambda_s = 656.3$ nm (its rest wavelength).\n\n(a) What is the observed wavelength $\\lambda_{\\text{obs}}$ on Earth?\n\n(b) Is this a redshift or blueshift?\n\n*Hint: Recall that $f = c/\\lambda$, and for a receding source: $f_{\\text{obs}} = f_s\\sqrt{(1-\\beta)/(1+\\beta)}$.*"
        },
        {
          id: "ex29-sol",
          type: "proof",
          title: "Interactive Solution — Ex 2.9",
          content: "Using the receding source formula.",
          interactiveSteps: [
            {
              stepText: "**Step 1:** $\\beta = v/c = 0.55$. Receding source formula:\n$$\\frac{f_{\\text{obs}}}{f_s} = \\sqrt{\\frac{1-\\beta}{1+\\beta}} = \\sqrt{\\frac{1-0.55}{1+0.55}} = \\sqrt{\\frac{0.45}{1.55}}$$"
            },
            {
              prompt: "Calculate the wavelength ratio. Since $f \\propto 1/\\lambda$, we have $\\lambda_{\\text{obs}}/\\lambda_s = f_s/f_{\\text{obs}} = \\sqrt{(1+\\beta)/(1-\\beta)}$. Find $\\lambda_{\\text{obs}}$.",
              stepText: "**Step 2:**\n$$\\frac{\\lambda_{\\text{obs}}}{\\lambda_s} = \\sqrt{\\frac{1+\\beta}{1-\\beta}} = \\sqrt{\\frac{1.55}{0.45}} = \\sqrt{3.444} \\approx 1.856$$\n\n$$\\lambda_{\\text{obs}} = 1.856 \\times 656.3 \\text{ nm} \\approx 1218 \\text{ nm}$$",
              options: [
                { id: "A", text: "$\\lambda_{\\text{obs}} \\approx 1218$ nm (near infrared)", isCorrect: true, explanation: "The H$\\alpha$ line at 656 nm (red visible) is shifted to 1218 nm (near infrared) — a significant redshift. This galaxy is moving away at 55% the speed of light!" },
                { id: "B", text: "$\\lambda_{\\text{obs}} \\approx 354$ nm (ultraviolet)", isCorrect: false, explanation: "That would be a blueshift (shorter wavelength). For a receding source, the wavelength increases (redshift)." },
                { id: "C", text: "$\\lambda_{\\text{obs}} \\approx 656$ nm (no shift)", isCorrect: false, explanation: "There is definitely a shift: $\\beta = 0.55$ is large. Apply the formula: $\\lambda_{\\text{obs}} = 656.3 \\times \\sqrt{1.55/0.45} \\approx 1218$ nm." }
              ]
            },
            {
              prompt: "What type of shift is this, and what does it indicate astronomically?",
              stepText: "**Step 3:** $\\lambda_{\\text{obs}} = 1218$ nm $>$ $\\lambda_s = 656$ nm → **redshift**. The wavelength increased, confirming the galaxy recedes. This is cosmological redshift — evidence for the expanding universe.",
              options: [
                { id: "A", text: "Redshift — the galaxy is moving away from Earth, wavelength increased.", isCorrect: true, explanation: "Correct. Redshift (longer wavelength) means recession. Hubble's Law and the expanding universe are based on observing such redshifts in distant galaxies." },
                { id: "B", text: "Blueshift — the galaxy is approaching Earth.", isCorrect: false, explanation: "Blueshift = shorter wavelength. Since $\\lambda_{\\text{obs}} > \\lambda_s$, this is a redshift." },
                { id: "C", text: "No shift — the galaxy must be stationary.", isCorrect: false, explanation: "We calculated $\\lambda_{\\text{obs}} = 1218$ nm vs. $\\lambda_s = 656$ nm — clearly a large shift." }
              ]
            }
          ]
        },
        {
          id: "ex29-astro",
          type: "quiz",
          title: "Astronomical Significance",
          content: "In 1929, Edwin Hubble observed that distant galaxies are redshifted, and the more distant the galaxy, the greater the redshift. What conclusion did he draw?",
          options: [
            { id: "A", text: "The universe is expanding — distant galaxies recede faster.", isCorrect: true, explanation: "Hubble's Law: recession speed is proportional to distance ($v = H_0 d$). The relativistic Doppler formula (or its generalization in cosmology) is the key tool for measuring these speeds. This discovery established the expanding universe paradigm." },
            { id: "B", text: "Distant galaxies are made of different elements that emit longer wavelengths.", isCorrect: false, explanation: "The same spectral lines (hydrogen, helium) appear in all galaxies but are shifted. The shift is kinematic (motion), not compositional." },
            { id: "C", text: "The speed of light decreases with distance.", isCorrect: false, explanation: "The speed of light is a universal constant (Postulate 2). The redshift is due to relative motion, not variation in $c$." }
          ]
        },
        {
          id: "ex29-fitb",
          type: "fill_in_blank",
          title: "Fill in the Blank",
          content: "A galaxy moving away from Earth shows a ___ shift in its spectral lines — longer wavelength and lower frequency.",
          blankAnswer: "red"
        }
      ]
    }
  ]
};
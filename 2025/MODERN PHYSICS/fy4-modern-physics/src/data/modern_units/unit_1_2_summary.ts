import { Unit } from '../../types';

export const UNIT_1_2_SUMMARY: Unit = {
  id: "unit-1-2-summary",
  title: "Section 1.2 Summary",
  description: "Einstein's Postulates & Space-Time Consequences",
  color: "duo-green",
  lessons: [

    // ── Summary Lesson 1: Einstein's Two Postulates (Unit 121) ────────────
    {
      id: "les-sum-1-2-1",
      title: "Summary: Einstein's Postulates",
      description: "Key ideas from Unit 121",
      icon: "BookCheck",
      slides: [
        {
          id: "sum-121-theory",
          type: "theory",
          title: "Unit 121 — Einstein's Two Postulates",
          content: "**Postulate 1 (Principle of Relativity):** The laws of physics are the same in all inertial (non-accelerating) reference frames. No experiment inside a sealed lab can determine absolute velocity.\n\n**Postulate 2 (Constancy of $c$):** The speed of light in vacuum is $c = 3 \\times 10^8$ m/s for all inertial observers, regardless of source or observer motion.\n\n**Inertial frame equivalence:** All inertial frames are physically equivalent — none is preferred as 'truly at rest'. Relative motion is the only meaningful quantity.\n\n**Key consequence:** These two postulates together force us to abandon Galilean velocity addition and absolute time/space. Time dilation, length contraction, and the Lorentz transformation follow inevitably."
        },
        {
          id: "sum-121-q",
          type: "quiz",
          title: "Summary Check",
          content: "Postulate 2 says light travels at $c$ for all observers. A laser is fired from a spaceship at $0.5c$. What speed does the laser beam have relative to Earth?",
          options: [
            { id: "A", text: "$c$", isCorrect: true, explanation: "Postulate 2: the speed of light is $c$ for all inertial observers regardless of source motion. Not $1.5c$, not $0.5c$ — always $c$." },
            { id: "B", text: "$1.5c$", isCorrect: false, explanation: "That's the Galilean answer. Postulate 2 explicitly states light travels at $c$ regardless of source speed." },
            { id: "C", text: "$0.5c$", isCorrect: false, explanation: "That's the ship's speed. Light always travels at $c$ in vacuum, independent of source motion." }
          ]
        }
      ]
    },

    // ── Summary Lesson 2: Time Dilation & Length Contraction (Unit 122) ──
    {
      id: "les-sum-1-2-2",
      title: "Summary: Time Dilation & Length Contraction",
      description: "Key ideas from Unit 122",
      icon: "BookCheck",
      slides: [
        {
          id: "sum-122-theory",
          type: "theory",
          title: "Unit 122 — Time Dilation & Length Contraction",
          content: "**Lorentz factor:** $\\gamma = \\dfrac{1}{\\sqrt{1 - v^2/c^2}} \\geq 1$\n\n**Time Dilation (Eq. 2.8):** $\\Delta t = \\gamma\\,\\Delta t_0$ — moving clocks run slower. $\\Delta t_0$ = proper time (shortest interval, measured in clock's rest frame).\n\n**Length Contraction (Eq. 2.13):** $L = L_0/\\gamma$ — moving objects appear shorter in direction of motion. $L_0$ = proper length (longest, measured in object's rest frame).\n\n**Muon experiment:** Cosmic muons ($v = 0.998c$, $\\gamma \\approx 15.8$) survive the 9 km descent:\n- Earth frame: dilated lifetime $\\Delta t = \\gamma\\tau_0 \\approx 35$ μs → travels 10.4 km ✓\n- Muon frame: contracted atmosphere $L = L_0/\\gamma \\approx 570$ m → survives 660 m range ✓\n\nBoth analyses agree: **experimental confirmation of relativity.**"
        },
        {
          id: "sum-122-q",
          type: "quiz",
          title: "Summary Check",
          content: "A particle moves at $v = 0.866c$ (so $\\gamma = 2$). Its proper lifetime is 1 μs. What lifetime is measured in the lab?",
          options: [
            { id: "A", text: "2 μs", isCorrect: true, explanation: "$\\Delta t = \\gamma\\tau_0 = 2 \\times 1 = 2$ μs. The particle's clock runs twice as slow in the lab." },
            { id: "B", text: "0.5 μs", isCorrect: false, explanation: "That would be $\\tau_0/\\gamma$. Time dilation INCREASES the lab-measured lifetime: $\\Delta t = \\gamma\\tau_0 = 2$ μs." },
            { id: "C", text: "1 μs", isCorrect: false, explanation: "1 μs is the proper time. The lab measures $\\gamma$ times more: $2$ μs." }
          ]
        }
      ]
    },

    // ── Summary Lesson 3: Velocity Addition & Doppler (Unit 123) ─────────
    {
      id: "les-sum-1-2-3",
      title: "Summary: Velocity Addition & Doppler",
      description: "Key ideas from Unit 123",
      icon: "BookCheck",
      slides: [
        {
          id: "sum-123-theory",
          type: "theory",
          title: "Unit 123 — Velocity Addition & Relativistic Doppler",
          content: "**Relativistic Velocity Addition (Eq. 2.17):**\n$$u = \\frac{u' + v}{1 + u'v/c^2}$$\n- Replaces Galilean $u = u' + v$.\n- Always gives $u < c$ for $u', v < c$.\n- At low speeds: denominator → 1, recovers Galilean result.\n- At $u' = c$: $u = c$ (Postulate 2 preserved).\n\n**Relativistic Doppler Effect (Eq. 2.22):**\n$$f_{\\text{obs}} = f_s\\sqrt{\\frac{1 \\pm \\beta}{1 \\mp \\beta}}$$\n(+/– for approaching; –/+ for receding)\n\n- Approaching → blueshift ($f_{\\text{obs}} > f_s$)\n- Receding → redshift ($f_{\\text{obs}} < f_s$)\n- Includes time dilation (no classical analogue for light)\n- Application: Hubble's Law — galaxy recession from redshift."
        },
        {
          id: "sum-123-q",
          type: "quiz",
          title: "Summary Check",
          content: "A source at $\\beta = 0.6$ recedes from you. The ratio $\\sqrt{(1-0.6)/(1+0.6)} = \\sqrt{0.25} = 0.5$. What is $f_{\\text{obs}}/f_s$?",
          options: [
            { id: "A", text: "0.5 — the observed frequency is halved (redshift).", isCorrect: true, explanation: "For recession: $f_{\\text{obs}} = f_s \\times 0.5$. The frequency drops to half — a significant redshift for $\\beta = 0.6$." },
            { id: "B", text: "2 — the observed frequency doubles (blueshift).", isCorrect: false, explanation: "That's for an approaching source. A receding source gives $f_{\\text{obs}} = f_s\\sqrt{(1-\\beta)/(1+\\beta)} = 0.5 f_s$." },
            { id: "C", text: "1 — no change.", isCorrect: false, explanation: "There is a shift: $f_{\\text{obs}} = f_s\\sqrt{(1-0.6)/(1+0.6)} = 0.5 f_s$." }
          ]
        }
      ]
    }
  ]
};
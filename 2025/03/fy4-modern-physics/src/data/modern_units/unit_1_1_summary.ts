import { Unit } from '../../types';

export const UNIT_1_1_SUMMARY: Unit = {
  id: "unit-1-1-summary",
  title: "Section 1.1 Summary",
  description: "Classical Foundations & The Ether Problem",
  color: "duo-orange",
  lessons: [
    {
      id: "les-sum-1-1-1",
      title: "Summary: Classical Relativity",
      description: "Key ideas from Unit 111",
      icon: "BookCheck",
      slides: [
        {
          id: "sum-111",
          type: "theory",
          title: "Unit 111 — Classical Relativity",
          content: "**Inertial reference frame:** A non-accelerating frame in which Newton's First Law holds. All inertial frames are physically equivalent.\n\n**Galilean transformation** (Krane Eqs. 2.1–2.3):\n$$x' = x - vt, \\quad y' = y, \\quad z' = z, \\quad t' = t$$\nTime is **absolute** — all observers agree.\n\n**Galilean velocity addition:**\n$$u_x = u'_x + v$$\nVelocities add (or subtract) linearly depending on direction.\n\n**Examples:**\n- Car + ball → speeds add linearly along direction of motion.\n- Airplane + crosswind → vector addition (Pythagorean).\n- Swimmer in river → upstream speed = $v_s - v_r$; downstream = $v_s + v_r$. The upstream–downstream round trip takes longer than the crosswise trip — a key analogy for the Michelson–Morley experiment."
        },
        {
          id: "sum-111-q",
          type: "quiz",
          title: "Summary Check",
          content: "A key feature of the Galilean transformation is that time is absolute ($t' = t$). What does this imply about two events that are simultaneous in one inertial frame?",
          options: [
            { id: "A", text: "They are simultaneous in all inertial frames.", isCorrect: true, explanation: "Since $t' = t$ in Galilean mechanics, two events at $t_1 = t_2$ in $S$ also have $t'_1 = t'_2$ in $S'$. Simultaneity is absolute — this is what Einstein will abandon." },
            { id: "B", text: "They may not be simultaneous in other frames.", isCorrect: false, explanation: "That's the relativistic result. In Galilean mechanics, $t' = t$ guarantees absolute simultaneity." }
          ]
        }
      ]
    },
    {
      id: "les-sum-1-1-2",
      title: "Summary: Michelson–Morley",
      description: "Key ideas from Unit 112",
      icon: "BookCheck",
      slides: [
        {
          id: "sum-112",
          type: "theory",
          title: "Unit 112 — Michelson–Morley Experiment",
          content: "**Ether hypothesis:** 19th-century scientists postulated a stationary medium ('luminiferous ether') through which light propagated. By Galilean addition, Earth's orbital motion ($v \\approx 3 \\times 10^4$ m/s) should produce a measurable 'ether wind'.\n\n**The experiment (1887):** Michelson and Morley split a light beam into two perpendicular arms using an interferometer. If an ether wind existed, the travel times would differ, causing a fringe shift.\n\n**The null result:** No fringe shift was detected — the speed of light appeared the same in all directions.\n\n**Implication:** Galilean velocity addition fails for light. The ether concept was ultimately abandoned. Einstein's Special Relativity (1905) replaced both with two postulates: (1) laws of physics are the same in all inertial frames, and (2) $c$ is constant for all observers."
        },
        {
          id: "sum-112-q",
          type: "quiz",
          title: "Summary Check",
          content: "The Michelson–Morley null result is most directly a challenge to which classical idea?",
          options: [
            { id: "A", text: "Newton's law of gravitation.", isCorrect: false, explanation: "Gravity is not involved." },
            { id: "B", text: "The Galilean velocity addition rule — that light's speed should depend on the observer's motion.", isCorrect: true, explanation: "Exactly. If $c_\\text{measured} = c$ regardless of Earth's velocity, then $c + v \\ne c_\\text{measured}$, which directly contradicts Galilean addition." },
            { id: "C", text: "Conservation of momentum.", isCorrect: false, explanation: "Momentum conservation is unrelated to this experiment." }
          ]
        }
      ]
    }
  ]
};

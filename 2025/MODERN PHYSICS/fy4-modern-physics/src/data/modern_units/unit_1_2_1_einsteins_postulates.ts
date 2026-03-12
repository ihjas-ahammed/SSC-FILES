import { Unit } from '../../types';

export const UNIT_1_2_1_EINSTEINS_POSTULATES: Unit = {
  id: "unit-1-2-1",
  title: "Einstein's Two Postulates",
  description: "T Postulate 1 — Principle of Relativity · T Postulate 2 — Constancy of c · D Inertial frame equivalence",
  color: "duo-violet",
  lessons: [

    // ── ACTIVATION LESSONS (prior thinking) ─────────────────────────────
    {
      id: "les-1-2-1-act",
      title: "Warm-Up: Before Einstein",
      description: "Activate prior thinking before studying the postulates",
      icon: "Lightbulb",
      slides: [
        {
          id: "act-1",
          type: "quiz",
          title: "Activation Question 1",
          content: "A spaceship moves at $0.5c$ and fires a laser forward. According to Galilean mechanics, what speed does the laser beam travel at, measured from Earth?",
          options: [
            { id: "A", text: "$1.5c$", isCorrect: true, explanation: "By Galilean addition, $c + 0.5c = 1.5c$. This is what classical mechanics predicts — and it turned out to be WRONG. Einstein's second postulate says the answer is just $c$." },
            { id: "B", text: "$c$", isCorrect: false, explanation: "That's Einstein's answer! Galilean mechanics says speeds add, so the classical prediction is $1.5c$." },
            { id: "C", text: "$0.5c$", isCorrect: false, explanation: "That's the ship's speed. The laser travels at $c$ relative to the ship, so classically $c + 0.5c = 1.5c$ relative to Earth." }
          ]
        },
        {
          id: "act-2",
          type: "quiz",
          title: "Activation Question 2",
          content: "The Michelson–Morley experiment showed that the speed of light was the **same** regardless of Earth's orbital direction. Which classical idea does this directly contradict?",
          options: [
            { id: "A", text: "Newton's second law ($F = ma$)", isCorrect: false, explanation: "Newton's second law is about force and acceleration — not related to the speed of light." },
            { id: "B", text: "Galilean velocity addition ($u = u' + v$)", isCorrect: true, explanation: "Exactly. If Earth moves at $v$, Galilean addition predicts light from the 'ether wind' direction would be $c + v$ or $c - v$. The null result means this is wrong." },
            { id: "C", text: "Conservation of energy", isCorrect: false, explanation: "Energy conservation is not what's being tested here." }
          ]
        }
      ]
    },

    // ── LESSON 1 (Theory: Postulate 1 — Principle of Relativity) ─────────
    {
      id: "les-1-2-1-1",
      title: "Postulate 1 — Principle of Relativity",
      description: "T: The laws of physics are the same in all inertial frames",
      icon: "Scale",
      slides: [
        {
          id: "post1-theory",
          type: "theory",
          title: "Postulate 1: The Principle of Relativity",
          content: "**Einstein's First Postulate (1905):**\n\n> The laws of physics are the same in all inertial (non-accelerating) reference frames.\n\nThis means: **no experiment performed inside a sealed, non-accelerating laboratory can determine whether you are at rest or moving at constant velocity.**\n\nThis extends Galilean relativity (which applied only to *mechanics*) to **all** physics — including electromagnetism and optics.\n\n**Implication:** There is no absolute rest frame. The concept of 'truly stationary' is meaningless. Only *relative* motion between frames has physical significance.\n\n$$\\text{Physics in S} \\equiv \\text{Physics in S'} \\quad \\text{(all inertial frames)}$$"
        },
        {
          id: "post1-q1",
          type: "quiz",
          title: "Conceptual Check 1",
          content: "You are in a smoothly moving train with no windows. You conduct an experiment dropping a ball. According to Postulate 1, what can you conclude?",
          options: [
            { id: "A", text: "You can determine your speed by measuring the ball's trajectory.", isCorrect: false, explanation: "No — inside an inertial frame, all mechanics experiments give the same result regardless of your speed. You cannot determine absolute velocity this way." },
            { id: "B", text: "The ball falls straight down, exactly as it would if the train were stationary.", isCorrect: true, explanation: "Correct! Postulate 1 guarantees that all physics — including the falling ball — behaves identically in all inertial frames. You cannot tell if you're 'moving' or 'at rest'." },
            { id: "C", text: "The ball curves backward, revealing the train is moving forward.", isCorrect: false, explanation: "That would happen only if the train were *accelerating*. For constant velocity (inertial frame), the ball falls straight down." }
          ]
        },
        {
          id: "post1-q2",
          type: "quiz",
          title: "Conceptual Check 2",
          content: "Before Einstein, the Galilean relativity principle applied only to the laws of **mechanics**. What did Einstein extend it to?",
          options: [
            { id: "A", text: "Only thermodynamics.", isCorrect: false, explanation: "Einstein extended it much more broadly than just thermodynamics." },
            { id: "B", text: "All laws of physics — including electromagnetism and optics.", isCorrect: true, explanation: "Einstein took the bold step of requiring that Maxwell's equations (and therefore the speed of light) must also be the same in all inertial frames. This was the key extension." },
            { id: "C", text: "Only gravitational forces.", isCorrect: false, explanation: "Gravity was addressed in General Relativity (1915), not Special Relativity." }
          ]
        },
        {
          id: "post1-canvas",
          type: "interactive_canvas",
          title: "Inertial Frames: No Preferred Frame",
          content: "Both trains are inertial frames. Neither can claim to be 'truly at rest'. Physics is identical inside each.",
          interactiveCanvasId: "inertial-frames-equivalence"
        },
        {
          id: "post1-fitb",
          type: "fill_in_blank",
          title: "Fill in the Blank",
          content: "Postulate 1 states that the laws of physics are the same in all ___ reference frames.",
          blankAnswer: "inertial"
        }
      ]
    },

    // ── LESSON 2 (Theory: Postulate 2 — Constancy of c) ─────────────────
    {
      id: "les-1-2-1-2",
      title: "Postulate 2 — Constancy of c",
      description: "T: The speed of light in vacuum is c for all inertial observers",
      icon: "Zap",
      slides: [
        {
          id: "post2-theory",
          type: "theory",
          title: "Postulate 2: Constancy of the Speed of Light",
          content: "**Einstein's Second Postulate (1905):**\n\n> The speed of light in vacuum is $c = 3 \\times 10^8$ m/s, independent of the speed of the source or the observer.\n\nThis is the radical departure from classical physics. It means:\n\n- A laser fired from a spaceship at $0.9c$ **still** travels at $c$ relative to the ground.\n- An observer chasing a beam of light at $0.99c$ **still** measures the beam travelling at $c$ — not $0.01c$.\n- $c$ is a **universal constant** — it is the same speed limit of the universe.\n\n$$c = 2.998 \\times 10^8 \\text{ m/s} \\approx 3 \\times 10^8 \\text{ m/s}$$\n\nThis postulate, combined with Postulate 1, forces us to abandon the Galilean concepts of absolute time and absolute space."
        },
        {
          id: "post2-q1",
          type: "quiz",
          title: "Conceptual Check 1",
          content: "A star is moving toward Earth at $0.5c$ and emits light. At what speed does the light reach Earth?",
          options: [
            { id: "A", text: "$1.5c$", isCorrect: false, explanation: "That's the Galilean answer. Einstein's Postulate 2 says no: the light always travels at $c$ regardless of source motion." },
            { id: "B", text: "$c$", isCorrect: true, explanation: "Postulate 2: the speed of light is $c$ for all observers, regardless of the motion of the source. The star's velocity does not add to the light's speed." },
            { id: "C", text: "$0.5c$", isCorrect: false, explanation: "That's the star's speed — not the light's. Light always travels at $c$." }
          ]
        },
        {
          id: "post2-q2",
          type: "quiz",
          title: "Conceptual Check 2",
          content: "If you travelled at $0.99c$ toward a beam of light, how fast would you measure the beam approaching you?",
          options: [
            { id: "A", text: "$1.99c$", isCorrect: false, explanation: "No — that's the Galilean prediction. The whole point of Postulate 2 is that this does NOT happen." },
            { id: "B", text: "$0.01c$", isCorrect: false, explanation: "This would be the 'closing speed' if light were a classical particle. But $c$ is absolute — you measure the full $c$, not the difference." },
            { id: "C", text: "$c$", isCorrect: true, explanation: "Yes — no matter how fast you move toward a beam of light, you always measure exactly $c$. This is the profound consequence of Postulate 2." }
          ]
        },
        {
          id: "post2-fitb",
          type: "fill_in_blank",
          title: "Fill in the Blank",
          content: "The speed of light in vacuum is ___ regardless of the motion of the source or observer.",
          blankAnswer: "c"
        }
      ]
    },

    // ── LESSON 3 (Definition: Inertial Frame Equivalence) ────────────────
    {
      id: "les-1-2-1-3",
      title: "Inertial Frame Equivalence",
      description: "D: What makes two inertial frames equivalent?",
      icon: "ArrowLeftRight",
      slides: [
        {
          id: "ife-theory",
          type: "theory",
          title: "Definition: Inertial Frame Equivalence",
          content: "Two reference frames $S$ and $S'$ are **physically equivalent** if and only if:\n\n1. Both are **inertial** — neither is accelerating.\n2. Every **physical law** (mechanics, EM, optics) has the same form in both.\n3. No experiment inside either frame can determine which is 'really moving'.\n\n**Standard setup (Krane §2.2):**\nFrame $S'$ moves at constant velocity $v$ along the $+x$ direction relative to $S$. At $t = t' = 0$, the origins coincide.\n\n$$S \\longleftrightarrow S' \\quad \\text{if } v = \\text{const}$$\n\n**Key contrast with Galilean view:** In classical mechanics, there was a hypothetical 'absolute rest frame' (the ether). Einstein abolished this — all inertial frames are equally valid, and none is preferred."
        },
        {
          id: "ife-q1",
          type: "quiz",
          title: "Conceptual Check 1",
          content: "Frame $S$ is a laboratory on Earth. Frame $S'$ is a rocket moving at $v = 0.8c$ at constant velocity. Which statement is correct?",
          options: [
            { id: "A", text: "Frame $S$ is the 'real' rest frame; the rocket is 'actually' moving.", isCorrect: false, explanation: "This contradicts Postulate 1 and the equivalence of inertial frames. There is no absolute rest frame in Special Relativity." },
            { id: "B", text: "Both frames are equally valid; no experiment inside either can distinguish them as 'at rest' or 'moving'.", isCorrect: true, explanation: "Exactly right. Both $S$ and $S'$ are inertial frames (constant velocity). The laws of physics are identical in each, and neither can be called 'really at rest'." },
            { id: "C", text: "Frame $S'$ is invalid because $0.8c$ is too fast for physics to work.", isCorrect: false, explanation: "Speed has no upper validity limit for inertial frames (only the unattainable limit $v = c$). $S'$ at $0.8c$ is a perfectly valid inertial frame." }
          ]
        },
        {
          id: "ife-q2",
          type: "quiz",
          title: "Conceptual Check 2",
          content: "An accelerating rocket is NOT an inertial frame. Why does this matter for the postulates?",
          options: [
            { id: "A", text: "Because the laws of Special Relativity apply only to inertial frames.", isCorrect: true, explanation: "Special Relativity (1905) is formulated for inertial frames only. In an accelerating frame, pseudo-forces appear and physics looks different — this requires General Relativity." },
            { id: "B", text: "Because the rocket cannot reach speed $c$.", isCorrect: false, explanation: "Speed limits apply to all frames. The issue with accelerating frames is specifically about the form of physical laws, not about reaching $c$." },
            { id: "C", text: "Because light speed is only $c$ in inertial frames.", isCorrect: false, explanation: "In General Relativity, light speed can appear to vary in non-inertial frames, but the real reason Special Relativity is restricted is the form of all physics laws." }
          ]
        },
        {
          id: "ife-canvas",
          type: "interactive_canvas",
          title: "Two Equivalent Inertial Frames",
          content: "Observer in S and observer in S′ both see the same physics. Neither frame is preferred.",
          interactiveCanvasId: "inertial-frames-equivalence"
        },
        {
          id: "ife-fitb",
          type: "fill_in_blank",
          title: "Fill in the Blank",
          content: "In Special Relativity, there is no ___ rest frame. All inertial frames are equally valid.",
          blankAnswer: "absolute"
        }
      ]
    }
  ]
};
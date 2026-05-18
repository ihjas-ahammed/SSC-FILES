import { Section } from '../../types';

export const SEC_U1_SCIENTISTS_IMAGINATION: Section = {
  id: "sec-u1-scientists-imagination",
  title: "Unit 1: Scientists & Imagination",
  description: "Scientists and the Power of Imagination — AH Documentary",
  color: "duo-blue",
  units: [
    {
      id: "u1-intro",
      title: "1. Introduction",
      description: "Overview and key ideas of the documentary.",
      color: "duo-blue",
      lessons: [
        {
          id: "les-u1-intro",
          title: "About the Text",
          description: "Einstein's quote and the role of imagination in science.",
          icon: "Lightbulb",
          slides: [
            {
              id: "u1-hook",
              type: "theory",
              title: "Opening Quote",
              content: `> "Imagination is more important than knowledge. For knowledge is limited to all we now know and understand, while imagination embraces the entire world, and all there ever will be to know and understand." — **Albert Einstein**\n\nThis quote, from the introduction, sets the tone for the entire unit.`
            },
            {
              id: "u1-overview",
              type: "theory",
              title: "What is this unit about?",
              content: `This unit is based on the **YouTube documentary** *"Scientists and the Power of Imagination"* (published Feb 26, 2024).\n\n**Key idea:** Imagination, though abstract, is a **driving force** behind scientific discoveries — more so than mere accumulated knowledge.\n\n**Examples from history:**\n- William Harvey → blood circulation\n- Isaac Newton → law of gravity\n- Albert Einstein → theory of relativity`
            },
            {
              id: "u1-quiz1",
              type: "quiz",
              title: "Quick Check",
              content: "According to Einstein, what is more important than knowledge?",
              options: [
                { id: "A", text: "Logic", isCorrect: false, explanation: "Logic is important but not what Einstein prioritized here." },
                { id: "B", text: "Imagination", isCorrect: true, explanation: "Einstein famously said 'Imagination is more important than knowledge.'" },
                { id: "C", text: "Memory", isCorrect: false, explanation: "Memory is not the focus of this quote." },
                { id: "D", text: "Technology", isCorrect: false, explanation: "Technology is a product of imagination, not the source." }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "u1-text",
      title: "2. The Documentary Text",
      description: "Key ideas from the transcript.",
      color: "duo-green",
      lessons: [
        {
          id: "les-u1-discovery",
          title: "Imagination in Discovery",
          description: "How scientists use imagination to make breakthroughs.",
          icon: "Telescope",
          slides: [
            {
              id: "u1-tx1",
              type: "theory",
              title: "Imagination as the Bridge",
              content: `In science, imagination is described as **"the bridge that connects the known to the unknown."**\n\n- It is not just the domain of artists and writers.\n- It is a **crucial aspect of human cognition** and an **indispensable tool** in scientific discovery.\n- Scientists imagine what they cannot directly observe (e.g., structure of an atom, curvature of spacetime).`
            },
            {
              id: "u1-tx2",
              type: "theory",
              title: "Great Scientists & Their Imagination",
              content: `**William Harvey** — imagined the **circulation of blood** in a time when no one else had.\n\n**Isaac Newton** — asked *why* the apple fell downward (not sideways/upward) → **Law of Gravity**.\n\n**Albert Einstein** — imagined what it would be like to **travel at the speed of light** → **Theory of Relativity**.`
            },
            {
              id: "u1-tx3",
              type: "quiz",
              title: "Who imagined blood circulation?",
              content: "Which scientist imagined the circulation of blood within the human body?",
              options: [
                { id: "A", text: "Isaac Newton", isCorrect: false, explanation: "Newton formulated the law of gravity." },
                { id: "B", text: "Albert Einstein", isCorrect: false, explanation: "Einstein developed the theory of relativity." },
                { id: "C", text: "William Harvey", isCorrect: true, explanation: "Harvey envisioned blood circulation, reshaping human physiology." },
                { id: "D", text: "Galileo Galilei", isCorrect: false, explanation: "Galileo is associated with astronomy and mechanics." }
              ]
            }
          ]
        },
        {
          id: "les-u1-nurture",
          title: "Nurturing Imagination",
          description: "Activities to foster imagination for scientific thinking.",
          icon: "Brain",
          slides: [
            {
              id: "u1-nurture1",
              type: "theory",
              title: "Five Activities",
              content: `The documentary suggests **five activities** to nurture imagination:\n\n1. **Walking** — allows the mind to wander, stimulating daydreaming.\n2. **Reading** — fosters mental flexibility; exposes us to different perspectives.\n3. **Writing** — helps articulate and refine thoughts.\n4. **Meditation** — quiets the mind, tapping into the subconscious.\n5. **Puzzle Solving** — sharpens the ability to think outside the box.`
            },
            {
              id: "u1-nurture2",
              type: "fill_in_blank",
              title: "Recall the Five Activities",
              content: "The documentary suggests walking, reading, writing, meditation, and ___ as ways to nurture imagination.",
              blankAnswer: "puzzle solving"
            },
            {
              id: "u1-nurture3",
              type: "theory",
              title: "Imagination Shapes Reality",
              content: `Imagination is not just about creativity — it **moulds our reality**:\n\n- Every great invention began as a spark of imagination (telephone, airplane, internet).\n- Scientists visualize complex concepts (atom structure, curvature of spacetime) they cannot directly observe.\n- It enables **problem-solving** and drives **technological advancement**.\n\n> "Our imagination is not just a tool for scientific discovery. It is an integral part of our reality."`
            }
          ]
        },
        {
          id: "les-u1-future",
          title: "The Future of Imagination",
          description: "AI, VR, and interdisciplinary research.",
          icon: "Cpu",
          slides: [
            {
              id: "u1-future1",
              type: "theory",
              title: "Technology Augmenting Imagination",
              content: `Looking ahead, imagination in science will evolve through:\n\n- **Artificial Intelligence** — not just task performance, but *augmenting* human imagination to explore new realms.\n- **Virtual & Augmented Reality** — immersive experiences that catalyze creative thinking.\n- **Interdisciplinary Research** — cross-pollination (e.g., physicist + biologist, chemist + artist) sparks innovative solutions.\n- **Education** — must cultivate curiosity, creativity, and imagination for the next generation of scientists.`
            },
            {
              id: "u1-future-quiz",
              type: "quiz",
              title: "AI and Imagination",
              content: "How does the documentary view the role of AI in relation to human imagination?",
              options: [
                { id: "A", text: "AI will replace human imagination entirely.", isCorrect: false, explanation: "The documentary argues against this view." },
                { id: "B", text: "AI will augment and enhance human imagination.", isCorrect: true, explanation: "AI is envisioned as a tool to amplify, not replace, human imaginative capabilities." },
                { id: "C", text: "AI has no relationship to imagination.", isCorrect: false, explanation: "The text explicitly connects AI development with imagination." },
                { id: "D", text: "AI currently limits imagination.", isCorrect: false, explanation: "The concern exists currently, but the future vision is of augmentation." }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "u1-glossary",
      title: "3. Glossary",
      description: "Key vocabulary from the unit.",
      color: "duo-violet",
      lessons: [
        {
          id: "les-u1-vocab",
          title: "Key Terms",
          description: "Vocabulary from Scientists and the Power of Imagination.",
          icon: "BookOpen",
          slides: [
            {
              id: "v-whimsical",
              type: "word_card",
              content: "Vocabulary",
              wordCard: {
                word: "Whimsical",
                translation: "Playful and imaginative",
                context: "Used to describe the kind of thinking often associated with imagination.",
                example: "When we think of imagination, we often picture whimsical fantasies and make-believe."
              }
            },
            {
              id: "v-tangible",
              type: "word_card",
              content: "Vocabulary",
              wordCard: {
                word: "Tangible",
                translation: "Clear, definite, or substantial in effect",
                context: "From Latin tangibilis meaning 'to touch'.",
                example: "Imagination has a tangible influence on our perception of the world around us."
              }
            },
            {
              id: "v-augment",
              type: "word_card",
              content: "Vocabulary",
              wordCard: {
                word: "Augment",
                translation: "To increase or strengthen",
                context: "Used to describe AI's role in relation to human capabilities.",
                example: "AI will serve as a powerful tool to augment our imaginative capabilities."
              }
            },
            {
              id: "v-burgeon",
              type: "word_card",
              content: "Vocabulary",
              wordCard: {
                word: "Burgeon",
                translation: "To grow or expand rapidly",
                context: "Used to describe how ideas grow in a favourable environment.",
                example: "Emerging technologies provide fertile ground for the seeds of imagination to burgeon."
              }
            }
          ]
        }
      ]
    },
    {
      id: "u1-exam",
      title: "4. Exam Preparation",
      description: "Model questions from the question paper.",
      color: "duo-orange",
      lessons: [
        {
          id: "les-u1-exam",
          title: "Model Questions",
          description: "Section A, B practice.",
          icon: "PenTool",
          slides: [
            {
              id: "u1-secA-q1",
              type: "theory",
              title: "Section A (2 Marks) — Q1",
              content: `**Question:** Give any four activities suggested in "Scientists and the Power of Imagination" to nurture imagination.\n\n**Model Answer:**\nThe documentary suggests four activities to nurture imagination: (1) **Walking**, which allows the mind to wander and daydream; (2) **Reading**, which fosters mental flexibility and exposes one to new perspectives; (3) **Meditation**, which quiets the mind to tap into the subconscious; and (4) **Puzzle solving**, which trains one to think outside the box and find creative solutions.`
            },
            {
              id: "u1-secA-quiz",
              type: "quiz",
              title: "Quick Recall",
              content: "Which activity helps 'quiet the mind' and allows access to the subconscious, according to the documentary?",
              options: [
                { id: "A", text: "Writing", isCorrect: false, explanation: "Writing helps articulate thoughts, not quiet the mind." },
                { id: "B", text: "Reading", isCorrect: false, explanation: "Reading fosters flexibility and new perspectives." },
                { id: "C", text: "Meditation", isCorrect: true, explanation: "Meditation quiets the mind, allowing access to the subconscious where innovative ideas reside." },
                { id: "D", text: "Walking", isCorrect: false, explanation: "Walking allows the mind to wander and stimulates daydreaming." }
              ]
            }
          ]
        }
      ]
    }
  ]
};

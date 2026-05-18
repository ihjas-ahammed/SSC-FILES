import { Section } from '../../types';

export const SEC_U9_FRANCIS_BACON: Section = {
  id: "sec-u9-francis-bacon",
  title: "Unit 9: On the Interpretation of Nature",
  description: "Aphorisms I–X from 'Of the Interpretation of Nature and the Empire of Man' — Francis Bacon",
  color: "duo-blue",
  units: [
    {
      id: "u9-intro",
      title: "1. Introduction",
      description: "About Francis Bacon and the essay's form.",
      color: "duo-blue",
      lessons: [
        {
          id: "les-u9-intro",
          title: "About Francis Bacon",
          description: "Renaissance philosopher and father of the scientific method.",
          icon: "User",
          slides: [
            {
              id: "u9-author",
              type: "theory",
              title: "Who is Francis Bacon?",
              content: `**Francis Bacon** (1561–1626) was an English philosopher, statesman, and author.\n\n- Often called the **"father of empiricism"** and a key architect of the **scientific method**.\n- His major works include *Novum Organum* (1620) and *Essays* (1597).\n- Advocated **inductive reasoning** — drawing general conclusions from specific observations.\n- Believed knowledge should lead to **power over nature** for the benefit of humanity.\n\nHis motto: *"Knowledge is power"* (Scientia potentia est).`
            },
            {
              id: "u9-form",
              type: "theory",
              title: "The Aphorism Form",
              content: `Bacon's essay is written as **numbered aphorisms** — short, precise statements of wisdom.\n\n**Distinctiveness of structure:**\n- Not a flowing narrative but a series of **compact, independent observations**.\n- Each aphorism stands on its own as a complete thought.\n- The numbered form allows readers to refer to specific ideas easily.\n- Influenced by classical Roman and Greek writing traditions.\n\nThis form suits philosophical writing because it **condenses complex ideas** into memorable, quotable statements.`
            },
            {
              id: "u9-quiz-form",
              type: "quiz",
              title: "Bacon's Essay Structure",
              content: "What is the distinctive structural feature of Bacon's essay 'Of the Interpretation of Nature and the Empire of Man'?",
              options: [
                { id: "A", text: "It is a fictional narrative.", isCorrect: false, explanation: "Bacon's essay is philosophical non-fiction." },
                { id: "B", text: "It consists of numbered aphorisms — short, self-contained statements of wisdom.", isCorrect: true, explanation: "The aphoristic structure allows each idea to stand independently, making complex philosophy accessible." },
                { id: "C", text: "It is structured as a scientific research paper.", isCorrect: false, explanation: "While philosophical, it predates the modern scientific paper format." },
                { id: "D", text: "It is written as a dialogue between two philosophers.", isCorrect: false, explanation: "Bacon's essay is a monological series of aphorisms, not a dialogue." }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "u9-text",
      title: "2. Key Aphorisms",
      description: "Selected aphorisms from the essay.",
      color: "duo-green",
      lessons: [
        {
          id: "les-u9-aphorisms",
          title: "Aphorisms I–X",
          description: "Core ideas from Bacon's essay.",
          icon: "Quote",
          slides: [
            {
              id: "u9-aph1",
              type: "theory",
              title: "Aphorism I — Knowledge and Nature",
              content: `> "Man, being the servant and interpreter of Nature, can do and understand so much and so much only as he has observed in fact or in thought; more he neither knows nor can do."\n\n**Meaning:** Human power over nature comes through **understanding nature**, not domination. We can only know what we observe or reason about. This sets the empirical foundation of Bacon's scientific philosophy.`
            },
            {
              id: "u9-aph2",
              type: "theory",
              title: "Core Ideas of the Essay",
              content: `**Key themes across Aphorisms I–X:**\n\n1. **Nature must be obeyed** — to command nature, one must first understand (obey) its laws.\n2. **Induction over syllogism** — Bacon prefers building from observations, not deducing from given principles.\n3. **The "idols" of the mind** — false notions that cloud scientific thinking (developed further in *Novum Organum*).\n4. **Empire of Man** — through knowledge and science, humanity can expand its dominion over the natural world.\n5. **Practical benefit** — science must benefit humanity, not just satisfy curiosity.`
            },
            {
              id: "u9-structure",
              type: "theory",
              title: "Why the Aphoristic Structure Works",
              content: `Bacon chose aphorisms deliberately:\n\n- **Brevity** — philosophy condensed to essential truths.\n- **Numbered sequence** — implies a systematic, logical progression of thought.\n- **Self-sufficiency** — each aphorism stands alone, useful independently.\n- **Universality** — the form mirrors his belief in universal, empirical laws discoverable through observation.\n\nThe structure itself reflects his scientific philosophy: **ordered, evidence-based, and universally applicable**.`
            }
          ]
        }
      ]
    },
    {
      id: "u9-exam",
      title: "3. Exam Preparation",
      description: "Model questions from the question paper.",
      color: "duo-orange",
      lessons: [
        {
          id: "les-u9-exam",
          title: "Model Questions",
          description: "Section A practice.",
          icon: "PenTool",
          slides: [
            {
              id: "u9-secA-q4",
              type: "theory",
              title: "Section A (2 Marks) — Q4",
              content: `**Question:** What is the distinctiveness of the structure of Bacon's essay?\n\n**Model Answer:**\nBacon's essay *"Of the Interpretation of Nature and the Empire of Man"* is distinctively structured as a series of **numbered aphorisms** — short, compact, self-contained philosophical statements. Unlike a flowing narrative or argumentative essay, each aphorism stands independently as a complete thought. This form condenses complex ideas into memorable statements, allows for easy cross-referencing, and reflects Bacon's empirical philosophy of building systematic, universal knowledge from precise observations.`
            }
          ]
        }
      ]
    }
  ]
};

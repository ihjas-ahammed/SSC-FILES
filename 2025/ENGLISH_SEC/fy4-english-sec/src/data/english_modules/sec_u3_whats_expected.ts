import { Section } from '../../types';

export const SEC_U3_WHATS_EXPECTED: Section = {
  id: "sec-u3-whats-expected",
  title: "Unit 3: \"What's Expected of Us?\"",
  description: "A speculative fiction warning about free will — Ted Chiang (2005)",
  color: "duo-purple",
  units: [
    {
      id: "u3-intro",
      title: "1. Introduction",
      description: "About Ted Chiang and the story's context.",
      color: "duo-purple",
      lessons: [
        {
          id: "les-u3-intro",
          title: "About Ted Chiang",
          description: "Author background and his literary significance.",
          icon: "User",
          slides: [
            {
              id: "u3-author",
              type: "theory",
              title: "Who is Ted Chiang?",
              content: `**Ted Chiang** (b.1967, Chiang Feng-nan) is an American author of **speculative fiction**.\n\n- Parents were Chinese immigrants settled in America.\n- Graduated in **Computer Science** from Brown University.\n- Works as a **technical writer at Microsoft**, Seattle.\n- Debut story *Tower of Babylon* (1990) won the **Nebula Award**.\n- Collections: *Stories of Your Life and Others* (2002), *Exhalation* (2019).\n- *"Story of Your Life"* was adapted into the film **Arrival** (2016).\n\n**Awards:** PEN/Malamud Award, Hugo Award, Locus Award.`
            },
            {
              id: "u3-themes",
              type: "theory",
              title: "Chiang's Themes",
              content: `Chiang's works explore:\n- **Time, space, and free will**\n- **Technology and human-machine interactions**\n- **Scientific speculation with philosophical depth**\n\nHe uses science fiction as *"a way to dramatize thought experiments"* that are difficult to comprehend otherwise.\n\nHis essay *"Why AI isn't going to make art"* (The New Yorker) stirred significant public interest.`
            }
          ]
        }
      ]
    },
    {
      id: "u3-text",
      title: "2. The Story",
      description: "Reading and analysis of the text.",
      color: "duo-teal",
      lessons: [
        {
          id: "les-u3-predictor",
          title: "The Predictor Device",
          description: "The central device and its implications.",
          icon: "Zap",
          slides: [
            {
              id: "u3-predictor1",
              type: "theory",
              title: "The Predictor",
              content: `The story opens: **"This is a warning. Please read carefully."**\n\nThe **Predictor** is a small device:\n- Like a remote for opening a car door.\n- Has only a **button** and a **big green LED**.\n- **The light flashes ONE SECOND BEFORE you press the button.**\n\nThe heart of each Predictor is a **circuit with a negative time delay** — it sends a signal *back in time*.\n\nThe key implication: **"Predictors demonstrate that there's no such thing as free will."**`
            },
            {
              id: "u3-predictor2",
              type: "theory",
              title: "You Cannot Fool It",
              content: `When people try to outwit the Predictor:\n- If you press the button without seeing a flash → the flash immediately appears anyway.\n- If you wait for the flash intending NOT to press → the flash never appears.\n\n> "No matter what you do, the light always precedes the button press. **There's no way to fool a Predictor.**"\n\nArguments for free will being an illusion existed before — but the Predictor provides a **demonstration**, not just an argument.`
            },
            {
              id: "u3-predictor-quiz",
              type: "quiz",
              title: "What does the Predictor demonstrate?",
              content: "What is the central philosophical implication of the Predictor device?",
              options: [
                { id: "A", text: "Humans can predict the future.", isCorrect: false, explanation: "The device predicts, not humans." },
                { id: "B", text: "Free will is an illusion.", isCorrect: true, explanation: "The device demonstrates determinism — every action is predetermined." },
                { id: "C", text: "Time travel is possible.", isCorrect: false, explanation: "The device uses negative delay, but the story's focus is on free will." },
                { id: "D", text: "Technology will control humanity.", isCorrect: false, explanation: "While implied, the core message is about free will." }
              ]
            }
          ]
        },
        {
          id: "les-u3-consequences",
          title: "The Consequences",
          description: "Akinetic mutism and civilization's response.",
          icon: "AlertTriangle",
          slides: [
            {
              id: "u3-mutism",
              type: "theory",
              title: "Akinetic Mutism — A Cognitive Plague",
              content: `After playing with a Predictor, people go through stages:\n1. Compulsive play for several days.\n2. Showing it to friends, trying to outwit it.\n3. Gradually realizing their choices don't matter.\n4. **Refusing to make any choices** — becoming like *Bartleby the Scrivener*.\n5. **Akinetic mutism**: a waking coma — they track motion but lose all motivation.\n\n> "A third of those who play with a Predictor must be hospitalized because they won't feed themselves."\n\nOnce extremely rare, **akinetic mutism now spreads like a cognitive plague**.`
            },
            {
              id: "u3-warning",
              type: "theory",
              title: "The Warning from the Future",
              content: `The narrator is transmitting from **just over a year in the future** using **negative delays in the megasecond range**.\n\n**The message:**\n> "Pretend that you have free will. It's essential that you behave as if your decisions matter, even though you know that they don't. The reality isn't important: what's important is your belief, and believing the lie is the only way to avoid a waking coma. **Civilization now depends on self-deception.**"\n\nThe narrator acknowledges the paradox: even sending the warning was predetermined. **"Because I had no choice."**`
            },
            {
              id: "u3-symbolism",
              type: "theory",
              title: "Symbolic Readings of the Predictor",
              content: `The Predictor can be read as a symbol for:\n\n1. **Smartphones** — addictive gadgets that flash (notifications) before we even need them.\n2. **Human beings themselves** — a device that resembles a human face (green LED = smile), creating bonds without questioning credibility.\n3. **Social constructs** — questioning whether our *"choices"* are actually imposed on us by society.\n\nThe title *"What's Expected of Us?"* refers to this fundamental dilemma.`
            }
          ]
        }
      ]
    },
    {
      id: "u3-glossary",
      title: "3. Glossary",
      description: "Key terms from the story.",
      color: "duo-violet",
      lessons: [
        {
          id: "les-u3-vocab",
          title: "Key Terms",
          description: "Vocabulary from What's Expected of Us?",
          icon: "BookOpen",
          slides: [
            {
              id: "v-immutable",
              type: "word_card",
              content: "Vocabulary",
              wordCard: {
                word: "Immutable",
                translation: "Unchangeable",
                context: "Used to describe a future that cannot be altered.",
                example: "Over the following weeks, the implications of an immutable future sink in."
              }
            },
            {
              id: "v-determinism",
              type: "word_card",
              content: "Vocabulary",
              wordCard: {
                word: "Determinism",
                translation: "The theory that everything happens as it must and could not be otherwise",
                context: "The philosophical doctrine underlying the story.",
                example: "Every form of behaviour is compatible with determinism."
              }
            },
            {
              id: "v-automaton",
              type: "word_card",
              content: "Vocabulary",
              wordCard: {
                word: "Automaton",
                translation: "A machine or person acting mechanically without thinking",
                context: "Used to contrast with a free-thinking entity.",
                example: "An automaton cannot become discouraged, only a free-thinking entity can."
              }
            }
          ]
        }
      ]
    },
    {
      id: "u3-exam",
      title: "4. Exam Preparation",
      description: "Model questions from the question paper.",
      color: "duo-orange",
      lessons: [
        {
          id: "les-u3-exam",
          title: "Model Questions",
          description: "Section A and B practice.",
          icon: "PenTool",
          slides: [
            {
              id: "u3-secA-q3",
              type: "theory",
              title: "Section A (2 Marks) — Q3",
              content: `**Question:** Analyse the relevance of the point of view employed in Chiang's story. Is it a common point of view employed by writers?\n\n**Model Answer:**\nChiang employs a **second-person point of view** ("you") combined with a voice from the future. This is unusual and effective because it directly implicates the reader in the story's warning about free will. Unlike the more common first or third person, this POV creates an **immediate sense of urgency** and blurs the boundary between fiction and reality, making the philosophical message more personally impactful.`
            },
            {
              id: "u3-secB-q15",
              type: "theory",
              title: "Section B (6 Marks) — Q15",
              content: `**Question:** What does the 'Predictor' in Ted Chiang's story symbolise?\n\n**Model Answer:**\nThe Predictor is a multivalent symbol:\n1. It symbolises **technological determinism** — how modern devices anticipate our needs.\n2. It represents **smartphones and social media** — addictive gadgets that control behaviour.\n3. It stands for **social constructs** that impose choices on individuals without their awareness.\n4. It resembles a **human face** (green LED smile), symbolising relationships built without critical questioning.\n5. Ultimately, it symbolises the **gradual erosion of free will** in modern society — the "tragic self-deception" that is becoming a way of life.`
            }
          ]
        }
      ]
    }
  ]
};

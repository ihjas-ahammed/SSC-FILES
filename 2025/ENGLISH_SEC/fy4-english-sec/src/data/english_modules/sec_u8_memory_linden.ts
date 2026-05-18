import { Section } from '../../types';

export const SEC_U8_MEMORY_LINDEN: Section = {
  id: "sec-u8-memory-linden",
  title: "Unit 8: You Can't Completely Trust Your Memories",
  description: "Autobiographical memory and its adaptive nature — David J. Linden",
  color: "duo-teal",
  units: [
    {
      id: "u8-intro",
      title: "1. Introduction",
      description: "About David Linden and popular science writing.",
      color: "duo-teal",
      lessons: [
        {
          id: "les-u8-intro",
          title: "About David Linden",
          description: "Neuroscientist and author.",
          icon: "User",
          slides: [
            {
              id: "u8-author",
              type: "theory",
              title: "Who is David J. Linden?",
              content: `**David J. Linden** (b.1961) is an American neuroscientist at **Johns Hopkins University**.\n\n- Research focuses on: cellular mechanisms of memory, molecular basis of addiction, recovery after brain injury.\n- Fellow of the **American Association for the Advancement of Science** (2010).\n- Books: *The Accidental Mind* (2007), *The Compass of Pleasure* (2011), *Touch* (2016), *Unique* (2020).\n\nThe text is an excerpt from **Unique: The New Science of Human Individuality**, reprinted in the *Popular Science* digital platform.`
            },
            {
              id: "u8-popsci",
              type: "theory",
              title: "What is Popular Science?",
              content: `**Popular Science (pop sci)** — scientific communication aimed at a general audience:\n- Presents complex concepts in an accessible and engaging way.\n- Avoids technical jargon.\n- Unlike academic literature (for experts), pop sci bridges the gap between **scientific community** and **society**.\n\nKey figures in pop sci: **Carl Sagan**, **Stephen Hawking**, **Neil deGrasse Tyson**.\n\nThe *Popular Science* magazine covers space, environment, health, innovation, and emerging technologies.`
            }
          ]
        }
      ]
    },
    {
      id: "u8-text",
      title: "2. The Text",
      description: "Linden's exploration of autobiographical memory.",
      color: "duo-blue",
      lessons: [
        {
          id: "les-u8-distortions",
          title: "Memory Distortions",
          description: "How and why our memories are unreliable.",
          icon: "Brain",
          slides: [
            {
              id: "u8-tx1",
              type: "theory",
              title: "Sins of Commission",
              content: `Linden cites psychologist **Daniel Schacter's** concept of **"sins of commission"** — distortions in autobiographical memory:\n\n- **Misattributions of time** — placing events in the wrong time frame.\n- **Suggestibility** — memories influenced by others' accounts.\n- **Bias** — warping recollection to match **present beliefs, knowledge, and feelings**.\n\n**Example:** After a bad breakup, people's memories of the early stages (previously pleasant) often turn darker.`
            },
            {
              id: "u8-field-observer",
              type: "theory",
              title: "Field Memory vs. Observer Memory",
              content: `**Field Memory:**\n- Recalling an event from *your own point of view* — as if the camera is in your own eyes.\n- More common for **recent events**.\n- More likely when asked to recall **emotional tone**.\n\n**Observer Memory:**\n- Recalling a memory from *an outside perspective* — you see yourself in the scene.\n- More common for **childhood memories**.\n- More likely when asked to recall **facts** about an event.\n\n> "The way we recall the memory is not set in stone. It can be strongly influenced by the task at hand."`
            },
            {
              id: "u8-quiz-memory",
              type: "quiz",
              title: "Field vs. Observer Memory",
              content: "What is the key difference between field memory and observer memory?",
              options: [
                { id: "A", text: "Field memory is more accurate; observer memory is distorted.", isCorrect: false, explanation: "Both can be accurate or distorted depending on the context." },
                { id: "B", text: "Field memory = first-person POV; Observer memory = third-person POV (seeing yourself in the scene).", isCorrect: true, explanation: "Field memory is 'through your own eyes'; observer memory is 'watching yourself from outside'." },
                { id: "C", text: "Field memory is for facts; observer memory is for emotions.", isCorrect: false, explanation: "It's actually the reverse — emotional tone evokes field memory; facts evoke observer memory." },
                { id: "D", text: "Field memory applies only to recent events; observer memory to all events.", isCorrect: false, explanation: "Field memory is more common for recent events, but observer memory is not limited to childhood." }
              ]
            },
            {
              id: "u8-emotions",
              type: "theory",
              title: "Emotions as Currency of Memory",
              content: `**Emotions are the currency of autobiographical memory:**\n- Emotional events are stored more strongly and permanently — "in bold type and italics."\n- **Positive effect:** Emotionally salient events are often those most needed to recall later.\n- **Negative effect:** Memory of traumatic events (assault, combat) can become **pathologically persistent**.\n\n**Repetition effect:** If you've been to the beach once, you remember details. If 50 times, you won't recall visit #37 unless something **emotionally significant** happened.`
            }
          ]
        },
        {
          id: "les-u8-adaptive",
          title: "Why Memory is Adaptive",
          description: "Memory as a feature, not a bug.",
          icon: "Cog",
          slides: [
            {
              id: "u8-adaptive1",
              type: "theory",
              title: "What is Memory For?",
              content: `If memories are inaccurate, why do we have them?\n\n**Primary purpose:** Memory allows us to **learn** — to adjust behaviour based on individual experience:\n- Find food, avoid predators, find mates.\n- Memory does for the individual what **evolution of the genome** does for the species.\n\n**Another benefit:** The act of recollection enables **mental time travel** — imagining a past AND a future. This releases mental life from the "tyranny of the present moment" and enables **decision-making**.`
            },
            {
              id: "u8-adaptive2",
              type: "theory",
              title: "Failures as Features",
              content: `Linden's key insight: the **failures of autobiographical memory are features, not bugs**.\n\n- Memory must be **updated and integrated** with new experience to remain useful.\n- A **generic memory** compiled from 50 beach trips is more useful for future decisions than 50 accurate stand-alone memories.\n- **Repetition-driven loss of detail** allows for efficient use of the brain's limited memory resources.\n\n> "We humans all have an inborn tendency to create a plausible story out of memory fragments."`
            }
          ]
        }
      ]
    },
    {
      id: "u8-glossary",
      title: "3. Glossary",
      description: "Key terms from the unit.",
      color: "duo-violet",
      lessons: [
        {
          id: "les-u8-vocab",
          title: "Key Terms",
          description: "Vocabulary from the memory text.",
          icon: "BookOpen",
          slides: [
            {
              id: "v-malleable",
              type: "word_card",
              content: "Vocabulary",
              wordCard: {
                word: "Malleable",
                translation: "Capable of being shaped; adaptable",
                context: "Used to describe how memory can be reshaped by new experiences.",
                example: "It's helpful for recollection to render the memory of an event malleable, so it may be integrated with the present."
              }
            },
            {
              id: "v-plausible",
              type: "word_card",
              content: "Vocabulary",
              wordCard: {
                word: "Plausible",
                translation: "Seeming reasonable and believable",
                context: "Used to describe the stories we construct from memory fragments.",
                example: "We humans have an inborn tendency to create a plausible story out of memory fragments."
              }
            },
            {
              id: "v-genome",
              type: "word_card",
              content: "Vocabulary",
              wordCard: {
                word: "Genome",
                translation: "The complete set of genetic material in an organism",
                context: "Used to compare individual memory to species-level adaptation.",
                example: "Memory does for the individual what evolution of the genome does for the species."
              }
            }
          ]
        }
      ]
    },
    {
      id: "u8-exam",
      title: "4. Exam Preparation",
      description: "Model questions from the question paper.",
      color: "duo-orange",
      lessons: [
        {
          id: "les-u8-exam",
          title: "Model Questions",
          description: "Section A practice.",
          icon: "PenTool",
          slides: [
            {
              id: "u8-secA-q9",
              type: "theory",
              title: "Section A (2 Marks) — Q9",
              content: `**Question:** What is the difference between field memory and observer memory?\n\n**Model Answer:**\n**Field memory** is when a person recalls an event *from their own point of view* — as if seeing through their own eyes. This is more common for recent events and emotional recollections. **Observer memory** is when a person recalls an event *from an outside perspective* — seeing themselves in the scene. This is more common for childhood memories and factual recollections. Linden notes that the type of memory recalled depends significantly on the task at hand, showing that memory is flexible and not static.`
            }
          ]
        }
      ]
    }
  ]
};

import { Section } from '../../types';

export const SEC_U2_MAN_KNEW_INFINITY: Section = {
  id: "sec-u2-man-knew-infinity",
  title: "Unit 2: The Man Who Knew Infinity",
  description: "The 2015 biopic about mathematician Srinivasa Ramanujan — Dir. Matthew Brown",
  color: "duo-green",
  units: [
    {
      id: "u2-intro",
      title: "1. Introduction",
      description: "Ramanujan's life and the film's background.",
      color: "duo-green",
      lessons: [
        {
          id: "les-u2-intro",
          title: "About Ramanujan & the Film",
          description: "Early life, self-taught genius, and the biopic.",
          icon: "User",
          slides: [
            {
              id: "u2-hook",
              type: "theory",
              title: "Who was Ramanujan?",
              content: `**Srinivasa Ramanujan FRS** (22 Dec 1887 – 26 Apr 1920) was a remarkable Indian mathematician who revolutionised:\n- Number theory\n- Infinite series\n- Mathematical analysis\n\nBorn in **Erode, Tamil Nadu** to a poor Brahmin family, he was an **autodidact** (self-taught). He lost his scholarship due to singular focus on mathematics and worked as a clerk at Madras Port Trust.`
            },
            {
              id: "u2-cambridge",
              type: "theory",
              title: "Ramanujan at Cambridge",
              content: `In **1913**, Ramanujan wrote to British mathematician **G.H. Hardy**, earning:\n- A scholarship from the University of Madras\n- A grant from Trinity College, Cambridge\n\nArrived in England: **April 14, 1914**\n\nTogether, Hardy and Ramanujan contributed to:\n- Theory of prime numbers\n- Theory of modular forms\n- The **Hardy-Ramanujan number: 1729** — the smallest number expressible as the sum of two cubes in two ways.`
            },
            {
              id: "u2-quiz1",
              type: "quiz",
              title: "The Hardy-Ramanujan Number",
              content: "What is the Hardy-Ramanujan number and why is it special?",
              options: [
                { id: "A", text: "1729 — the smallest prime number", isCorrect: false, explanation: "1729 is not a prime number." },
                { id: "B", text: "1729 — the smallest number expressible as the sum of two cubes in two ways", isCorrect: true, explanation: "1729 = 1³ + 12³ = 9³ + 10³. This is called the Hardy-Ramanujan number." },
                { id: "C", text: "1729 — the year Cambridge was founded", isCorrect: false, explanation: "This is not the significance of 1729." },
                { id: "D", text: "1729 — the number of mathematical theorems Ramanujan proved", isCorrect: false, explanation: "The number is not related to the count of theorems." }
              ]
            },
            {
              id: "u2-film",
              type: "theory",
              title: "The Film",
              content: `**The Man Who Knew Infinity** (2015) — directed by **Matthew Brown**\n- Stars **Dev Patel** as Ramanujan, **Jeremy Irons** as G.H. Hardy\n- Based on the biography by **Robert Kanigel**\n- Took **12 years** to complete due to commitment to authenticity\n- Mathematician **Ken Ono** assisted to ensure accuracy\n\nDirector's intent: *"The math was always a subtext for me. It was always the background to a human story."*`
            }
          ]
        }
      ]
    },
    {
      id: "u2-themes",
      title: "2. Themes & Analysis",
      description: "Key themes explored in the film.",
      color: "duo-teal",
      lessons: [
        {
          id: "les-u2-persist",
          title: "Persistence & Individuality",
          description: "Ramanujan's self-worth and struggle for recognition.",
          icon: "Star",
          slides: [
            {
              id: "u2-persist1",
              type: "theory",
              title: "Self-worth Against Adversity",
              content: `Ramanujan was **denied employment** citing lack of qualifications. Yet he declared:\n\n> "What you might see now is ordinary glass, but I promise you will soon remain to see a diamond."\n\nThis statement to Sir Francis Spring (Chairman, Madras Port Trust) perfectly portrays his **self-worth** and highlights the **insignificance of money** in determining one's dignity.`
            },
            {
              id: "u2-imagination",
              type: "theory",
              title: "Imagination & Humility",
              content: `Narayana Iyer ('Anna') instigates Ramanujan to "imagine," to which he replies: **"All I do is imagine."**\n\nWhen asked on a ship if he could imagine the vast ocean's distance, Ramanujan humbly replies: **"I have known larger numbers."**\n\nThese **pithy statements** sum up his life's work and highlight the importance of being original.`
            },
            {
              id: "u2-racism",
              type: "theory",
              title: "Racism at Cambridge",
              content: `The film raises issues of **racism**:\n- Hardy's proposal to give Ramanujan a Fellowship was **outvoted** at Trinity College.\n- Littlewood predicted: "I doubt a dark face will ever grace these walls."\n- Hardy chose **deliberate silence** — letting time prove everything.\n\nEventually, the academia bestowed the coveted **Royal Society Fellowship (FRS)** on Ramanujan.`
            },
            {
              id: "u2-janaki",
              type: "theory",
              title: "Role of Janaki Ammal",
              content: `Ramanujan's wife **Janaki** (played by Devika Bhise) is portrayed as a **strong woman**:\n- Agreed to his move to England on condition he would take her once the situation permits.\n- Continued writing letters despite receiving no reply (hidden by his mother).\n- Her feelings and courage are presented genuinely and without judgement.`
            }
          ]
        },
        {
          id: "les-u2-title",
          title: "Relevance of the Title",
          description: "What 'infinity' means in the context of the film.",
          icon: "Infinity",
          slides: [
            {
              id: "u2-title1",
              type: "theory",
              title: "Hardy's Declaration",
              content: `The title refers to Ramanujan's exploration of **mathematical infinity**.\n\nHardy's final speech defending Ramanujan for the FRS:\n\n> "We are merely explorers of infinity in the pursuit of absolute perfection. We do not invent these formulae, they already exist and lie in wait for only the very brightest of minds, like Ramanujan, ever to divine and prove. So, in the end, I have been forced to consider, who are we to question Ramanujan, let alone God?"`
            },
            {
              id: "u2-conclusion",
              type: "theory",
              title: "The Conclusion",
              content: `Ramanujan returned to India in **1919**, dying at age **32**.\n\nHis final paper featured **"mock modular forms"** — their meaning eluded mathematicians for generations until verified in **2012**.\n\nSpiritual to his core, Ramanujan declared:\n> "An equation for me has no meaning unless it expresses a thought of God."\n\nIn **2011**, India declared his birthday **National Mathematics Day**.`
            },
            {
              id: "u2-q-secC",
              type: "quiz",
              title: "Section C Practice",
              content: "Ramanujan's relationship with Hardy can best be described as:",
              options: [
                { id: "A", text: "A simple teacher-student relationship", isCorrect: false, explanation: "It was far more complex and mutual." },
                { id: "B", text: "A coloniser-colonised dynamic only", isCorrect: false, explanation: "While that tension exists, their relationship went beyond it." },
                { id: "C", text: "A mutual intellectual partnership that transcended cultural and personal barriers", isCorrect: true, explanation: "They constructively influenced each other despite social and cultural differences." },
                { id: "D", text: "A one-sided admiration by Hardy", isCorrect: false, explanation: "Both influenced each other deeply." }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "u2-glossary",
      title: "3. Glossary",
      description: "Key terms from the unit.",
      color: "duo-violet",
      lessons: [
        {
          id: "les-u2-vocab",
          title: "Key Terms",
          description: "Vocabulary from The Man Who Knew Infinity.",
          icon: "BookOpen",
          slides: [
            {
              id: "v-autodidact",
              type: "word_card",
              content: "Vocabulary",
              wordCard: {
                word: "Autodidact",
                translation: "Self-taught person",
                context: "Describes someone who learns without formal instruction.",
                example: "Ramanujan was a remarkable autodidact who received sparse formal education."
              }
            },
            {
              id: "v-biopic",
              type: "word_card",
              content: "Vocabulary",
              wordCard: {
                word: "Biopic",
                translation: "A biographical film",
                context: "A portmanteau of 'biography' and 'picture'.",
                example: "The Man Who Knew Infinity is a biopic about the life of Srinivasa Ramanujan."
              }
            },
            {
              id: "v-homonymous",
              type: "word_card",
              content: "Vocabulary",
              wordCard: {
                word: "Homonymous",
                translation: "Having the same name or title",
                context: "Used to describe the film and the book it was based on.",
                example: "The film is based on the homonymous biography by Robert Kanigel."
              }
            }
          ]
        }
      ]
    },
    {
      id: "u2-exam",
      title: "4. Exam Preparation",
      description: "Model questions from Section C.",
      color: "duo-orange",
      lessons: [
        {
          id: "les-u2-exam",
          title: "Model Questions",
          description: "Section C essay practice.",
          icon: "PenTool",
          slides: [
            {
              id: "u2-secC",
              type: "theory",
              title: "Section C (10 Marks) — Q17",
              content: `**Question:** Compare Ramanujan's role as a scientist with that of a husband/son to illustrate the humane qualities required to contribute to one's society despite challenges.\n\n**Key Points to include:**\n1. As a **scientist**: persistence, self-belief, original thinking, dedication to mathematics despite poverty and racism.\n2. As a **husband**: his promise to Janaki, his inability to bring her to England, emotional cost of separation.\n3. As a **son**: mother's interference with letters; torn between duty and destiny.\n4. **Humane qualities**: courage, sacrifice, humility, emotional vulnerability alongside intellectual genius.\n5. **Conclusion**: Ramanujan's story shows that genuine contribution to society requires sacrifice at a personal level.`
            }
          ]
        }
      ]
    }
  ]
};

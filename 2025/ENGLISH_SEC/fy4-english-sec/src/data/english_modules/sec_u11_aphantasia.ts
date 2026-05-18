import { Section } from '../../types';

export const SEC_U11_APHANTASIA: Section = {
  id: "sec-u11-aphantasia",
  title: "Unit 11: Imagination Without Images — Aphantasia",
  description: "Science fiction reading and writing with aphantasia — Kim Zarins",
  color: "duo-purple",
  units: [
    {
      id: "u11-intro",
      title: "1. Introduction",
      description: "About Kim Zarins and aphantasia.",
      color: "duo-purple",
      lessons: [
        {
          id: "les-u11-intro",
          title: "About Kim Zarins",
          description: "Author and context for the article.",
          icon: "User",
          slides: [
            {
              id: "u11-author",
              type: "theory",
              title: "Who is Kim Zarins?",
              content: `**Kimberly (Kim) Zarins** — PhD in English from Cornell University.\n\n- Teaches medieval literature and children's literature at Sacramento State University.\n- Debut novel: *Sometimes We Tell the Truth* (YA fiction — retelling of Chaucer's Canterbury Tales).\n- Picture books: *The Helpful Puppy* (2012) and *Playful Bunny* (2006).\n\n**The article** was published on **Aphantasia Network** (Nov 4, 2022), originally from **SFWA (Science Fiction & Fantasy Writers Association)** (Oct 4, 2022).`
            },
            {
              id: "u11-aphantasia-def",
              type: "theory",
              title: "What is Aphantasia?",
              content: `**Aphantasia** = the inability to visualize in the mind's eye.\n\n- Coined in **2015** by **Adam Zeman**.\n- Also called **"mind blindness"**.\n- Affects approximately **2%** of the population.\n- Aphants cannot picture familiar people/places or imaginary scenarios.\n\n**Important:** Aphants don't lack imagination — they experience it through **thoughts and feelings** rather than visual images.`
            },
            {
              id: "u11-quiz-def",
              type: "quiz",
              title: "What is Aphantasia?",
              content: "What is aphantasia?",
              options: [
                { id: "A", text: "The inability to feel emotions.", isCorrect: false, explanation: "Aphantasia is about visualization, not emotions." },
                { id: "B", text: "The inability to visualize images in the mind's eye.", isCorrect: true, explanation: "Aphantasia is the condition of lacking a mind's eye — the inability to visualize." },
                { id: "C", text: "A condition that prevents reading.", isCorrect: false, explanation: "Aphants can and do read; they just experience it differently." },
                { id: "D", text: "Fear of images or pictures.", isCorrect: false, explanation: "This is not the definition — aphantasia is an absence of mental visualization." }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "u11-text",
      title: "2. The Article",
      description: "Zarins' insights on aphantasia and fiction.",
      color: "duo-blue",
      lessons: [
        {
          id: "les-u11-experience",
          title: "The Aphant's Reading Experience",
          description: "How aphants engage with speculative fiction.",
          icon: "BookOpen",
          slides: [
            {
              id: "u11-narnia",
              type: "theory",
              title: "Zarins' Personal Experience",
              content: `Zarins shares:\n\n> "When I was a child, I snuck out to the backyard, made a little circle of stones, and jumped inside the circle. The goal was to get to Narnia, which I loved intensely. But I have never pictured Narnia or its characters in my mind."\n\nShe skimmed descriptions in Tolkien's *Lord of the Rings* — her head "lacks a place for all those details to stick."\n\nDespite this, *The Chronicles of Narnia* and *The Lord of the Rings* began her path as a medievalist, reader, and writer.`
            },
            {
              id: "u11-thoughts-feelings",
              type: "theory",
              title: "Thoughts and Feelings",
              content: `What do aphants get from speculative fiction?\n\n**"Thoughts and feelings"** — not visual images.\n\nA blogger with aphantasia explains:\n\n> "For me, 'picturing' a setting is more of a **feeling** rather than actually seeing it. When an author does a particularly good job of creating atmosphere, I can feel it. I just can't see it. That's probably why I prefer fantasy books so much more than contemporary—the worlds are so much more incredible and easier to 'feel!'"\n\nZarins notes that **"atmosphere"** is something that no one truly visualizes — yet everyone perceives its character.`
            },
            {
              id: "u11-structure",
              type: "theory",
              title: "Presenting a Scientific Concept",
              content: `Zarins' article demonstrates effective **structure for presenting a scientific concept** (aphantasia) to a general audience:\n\n1. **Personal anecdote** — makes an abstract condition concrete and relatable.\n2. **Definition** — introduces the technical term (aphantasia) with context.\n3. **Examples from literature** — grounds the condition in recognizable cultural references.\n4. **Expert quotes** — the blogger Tracy's words; Derek Parfit's example.\n5. **Practical tips** — writers are given actionable suggestions.\n6. **Broader implications** — connects to neurodiversity, inclusion, scientific inquiry.`
            },
            {
              id: "u11-tips-writers",
              type: "theory",
              title: "Tips for Writers",
              content: `Zarins gives **two suggestions** for writers to reach aphant readers:\n\n1. **Use setting description on an as-needed basis** — deliver sensory information like breadcrumbs, one situated detail at a time (not page-length sketches).\n\n2. **Sometimes it helps to "tell" not just "show"** — guiding commentary and character reactions to a setting allow aphants to focus on emotional stakes rather than trying to process visual details.`
            }
          ]
        }
      ]
    },
    {
      id: "u11-glossary",
      title: "3. Glossary",
      description: "Key terms from the article.",
      color: "duo-violet",
      lessons: [
        {
          id: "les-u11-vocab",
          title: "Key Terms",
          description: "Vocabulary from the aphantasia article.",
          icon: "BookOpen",
          slides: [
            {
              id: "v-aphantasia",
              type: "word_card",
              content: "Vocabulary",
              wordCard: {
                word: "Aphantasia",
                translation: "The inability to visualize in the mind's eye (mind blindness)",
                context: "A neurodivergent condition coined by Adam Zeman in 2015.",
                example: "Aphantasia is the condition of lacking a mind's eye, affecting approximately 2% of people."
              }
            },
            {
              id: "v-ekphrasis-pre",
              type: "word_card",
              content: "Vocabulary",
              wordCard: {
                word: "Neurodivergent",
                translation: "Having a brain that functions differently from what is considered 'typical'",
                context: "Aphantasia, autism, and synesthesia are examples of neurodivergent conditions.",
                example: "Diverse perspectives including neurological diversity such as autism or synesthesia are increasingly represented in speculative fiction."
              }
            }
          ]
        }
      ]
    },
    {
      id: "u11-exam",
      title: "4. Exam Preparation",
      description: "Model questions from the question paper.",
      color: "duo-orange",
      lessons: [
        {
          id: "les-u11-exam",
          title: "Model Questions",
          description: "Section B practice.",
          icon: "PenTool",
          slides: [
            {
              id: "u11-secB-q14",
              type: "theory",
              title: "Section B (6 Marks) — Q14",
              content: `**Question:** Consider the structure of the article on aphantasia to bring out the characteristics of presenting a scientific concept.\n\n**Model Answer:**\nZarins' article on aphantasia demonstrates several characteristics of effective scientific writing for a general audience:\n1. **Personal anecdote as opening** — the Narnia story immediately engages readers and makes the abstract condition relatable.\n2. **Clear definition** — the technical term is introduced with its coinage date and the person who coined it.\n3. **Cultural anchoring** — familiar literary references (Narnia, LOTR) help readers understand the condition's impact.\n4. **Quoted evidence** — a blogger's first-person account provides empirical, experiential data.\n5. **Practical application** — the article does not just describe the condition but provides actionable tips for writers.\n6. **Broad implications** — connects to neurodiversity, inclusion, and interdisciplinary collaboration between science and literature.`
            }
          ]
        }
      ]
    }
  ]
};

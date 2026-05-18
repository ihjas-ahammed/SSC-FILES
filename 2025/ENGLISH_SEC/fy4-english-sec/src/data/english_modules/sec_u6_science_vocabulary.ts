import { Section } from '../../types';

export const SEC_U6_SCIENCE_VOCABULARY: Section = {
  id: "sec-u6-science-vocabulary",
  title: "Unit 6: Five Ideas for Teaching Science Vocabulary",
  description: "Effective vocabulary instruction in science — Flocabulary blog post",
  color: "duo-green",
  units: [
    {
      id: "u6-intro",
      title: "1. Introduction",
      description: "Why science vocabulary matters.",
      color: "duo-green",
      lessons: [
        {
          id: "les-u6-intro",
          title: "Why Vocabulary Matters",
          description: "The importance of science vocabulary in learning.",
          icon: "BookOpen",
          slides: [
            {
              id: "u6-overview",
              type: "theory",
              title: "The Challenge of Science Vocabulary",
              content: `Science has **its own language** — filled with specific terms, processes, and classifications that can seem intimidating.\n\nTraditional approach: **Front-loaded vocabulary** — students memorized words in isolation before context.\n\nProblem: Research shows this method is **not effective**. Students who learn words without conceptual meaning don't truly understand them.\n\n**Better approach:** The **explore-before-explain** method — expose students to vocabulary in context first, then explain meaning.`
            },
            {
              id: "u6-quiz-why",
              type: "quiz",
              title: "Traditional vs. Modern Approach",
              content: "What does research show about teaching vocabulary through traditional memorization?",
              options: [
                { id: "A", text: "It is the most effective method for science students.", isCorrect: false, explanation: "Research shows the opposite." },
                { id: "B", text: "It fails to build genuine understanding; context-first learning is more effective.", isCorrect: true, explanation: "Students need conceptual meaning before definitions — the explore-before-explain approach." },
                { id: "C", text: "It works for science but not for other subjects.", isCorrect: false, explanation: "The limitation applies broadly." },
                { id: "D", text: "It is only ineffective for younger students.", isCorrect: false, explanation: "It is broadly ineffective without contextual grounding." }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "u6-five-ideas",
      title: "2. The Five Ideas",
      description: "Strategies for effective vocabulary instruction.",
      color: "duo-teal",
      lessons: [
        {
          id: "les-u6-ideas",
          title: "Five Strategies",
          description: "Practical approaches to teach science vocabulary.",
          icon: "List",
          slides: [
            {
              id: "u6-idea1",
              type: "theory",
              title: "1. Provide Context for New Words",
              content: `Use the **explore-before-explain** approach:\n- Give students **context** about new words *before* teaching definitions.\n- Assign a quick lab, activity, or demonstration.\n- Students are then primed to truly understand the meaning.\n\nThis contrasts with traditional methods that involve *memorizing and parroting definitions*.`
            },
            {
              id: "u6-idea2",
              type: "theory",
              title: "2. Create Visual References",
              content: `Visual references support and strengthen vocabulary retention:\n- **Word walls** — students collaborate to create and decorate classroom word walls for each unit.\n- **Glossaries with images** in science notebooks.\n- **Word maps** and **Frayer models** — graphic organizers that break vocabulary into four parts (definition, example, characteristics, non-example).`
            },
            {
              id: "u6-idea3",
              type: "theory",
              title: "3. Provide Repeated Exposure",
              content: `Research shows students need **multiple exposures** to new words over time.\n\nMethods:\n- **Different modalities** — speaking, writing, listening.\n- Journal entries using specific vocabulary.\n- **True or False activities** — rewrite sentences using vocabulary to make them true.\n- **Think-Pair-Share** discussions.\n- **Gamified practice** — vocabulary games, scavenger hunts.`
            },
            {
              id: "u6-idea4",
              type: "theory",
              title: "4. Teach Word Parts (Morphemes)",
              content: `Teaching **prefixes, suffixes, and roots** helps students independently decode new vocabulary.\n\nExamples:\n- **micro-** (small): microscope, microorganism, microbiology\n- **-ology** (study of): biology, geology\n- **uni-** (one) vs **multi-** (many): unicellular, multicellular\n\nIf students know affixes and root words, they can **decipher the meaning of new vocabulary** independently.`
            },
            {
              id: "u6-idea5",
              type: "theory",
              title: "5. Use a Creative Approach",
              content: `Creative approaches make vocabulary learning fun and memorable:\n- **Comic strip contests** — students explain a topic using lesson-specific vocabulary.\n- **Diagrams and models** — visual representations with labels and definitions.\n- **Lyric Lab** (Flocabulary) — students write raps/poems using vocabulary words, then perform or record them.`
            },
            {
              id: "u6-fill-blank",
              type: "fill_in_blank",
              title: "Recall the Five Ideas",
              content: "The five ideas for teaching science vocabulary are: Provide Context, Create Visual References, Provide Repeated Exposure, Teach Word Parts, and Use a ___ Approach.",
              blankAnswer: "Creative"
            }
          ]
        }
      ]
    },
    {
      id: "u6-glossary",
      title: "3. Glossary",
      description: "Key terms from the unit.",
      color: "duo-violet",
      lessons: [
        {
          id: "les-u6-vocab",
          title: "Key Terms",
          description: "Vocabulary from Five Ideas for Teaching Science Vocabulary Words.",
          icon: "BookOpen",
          slides: [
            {
              id: "v-morpheme",
              type: "word_card",
              content: "Vocabulary",
              wordCard: {
                word: "Morpheme",
                translation: "The smallest unit of meaning in a language",
                context: "Understanding morphemes helps decode new science vocabulary.",
                example: "The prefix 'micro-' is a morpheme meaning 'small' or 'tiny'."
              }
            },
            {
              id: "v-frayer",
              type: "word_card",
              content: "Vocabulary",
              wordCard: {
                word: "Frayer Model",
                translation: "A graphic organizer for understanding new vocabulary",
                context: "Breaks a word into: definition, example, characteristics, and non-example.",
                example: "Teachers use Frayer models to help students understand complex science terms."
              }
            },
            {
              id: "v-blooms",
              type: "word_card",
              content: "Vocabulary",
              wordCard: {
                word: "Bloom's Taxonomy",
                translation: "A framework classifying learning from basic recall to higher-order thinking",
                context: "All Flocabulary lessons are designed with Bloom's Taxonomy in mind.",
                example: "Bloom's Taxonomy levels: Remember, Understand, Apply, Analyse, Evaluate, Create."
              }
            }
          ]
        }
      ]
    }
  ]
};

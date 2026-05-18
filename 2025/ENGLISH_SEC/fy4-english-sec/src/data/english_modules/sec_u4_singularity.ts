import { Section } from '../../types';

export const SEC_U4_SINGULARITY: Section = {
  id: "sec-u4-singularity",
  title: "Unit 4: \"Singularity\"",
  description: "A poem meditating on cosmic unity — Marie Howe (after Stephen Hawking)",
  color: "duo-teal",
  units: [
    {
      id: "u4-intro",
      title: "1. Introduction",
      description: "About Marie Howe and the poem's background.",
      color: "duo-teal",
      lessons: [
        {
          id: "les-u4-intro",
          title: "About Marie Howe",
          description: "American poet and her connection to science.",
          icon: "Feather",
          slides: [
            {
              id: "u4-author",
              type: "theory",
              title: "Who is Marie Howe?",
              content: `**Marie Howe** (b.1950) is an American poet and educator.\n\n- Began career as journalist and teacher; earned MFA from **Columbia University** (1983).\n- Poetry collections: *The Good Thief* (1988), *What the Living Do* (1998), *Magdalene* (2017), *New and Selected Poems* (2024).\n- *New and Selected Poems* won the **2025 Pulitzer Prize for Poetry**.\n- Elected **Chancellor of the Academy of American Poets**.\n- Teaches at **NYU** and **Sarah Lawrence College**.`
            },
            {
              id: "u4-poem-context",
              type: "theory",
              title: "About the Poem",
              content: `**"Singularity"** (after Stephen Hawking) is inspired by Hawking's scientific theory of the **singularity** — the idea that all matter in the universe originated from a single point.\n\n**Core themes:**\n- **Oneness** — all existence traces back to a single origin.\n- **Loss and separation** — modern life fragments what was once unified.\n- **Interdisciplinary meeting point** — science (singularity) + literature (sense of belonging).\n\nThe title holds dual meaning: scientific (single origin point) and literary (feeling of oneness/individuality).`
            }
          ]
        }
      ]
    },
    {
      id: "u4-text",
      title: "2. The Poem",
      description: "Line-by-line analysis of 'Singularity'.",
      color: "duo-blue",
      lessons: [
        {
          id: "les-u4-poem",
          title: "Reading the Poem",
          description: "Full poem with analysis.",
          icon: "BookOpen",
          slides: [
            {
              id: "u4-poem-text",
              type: "theory",
              title: "The Poem",
              content: `*Do you sometimes want to wake up to the singularity we once were?*\n\n*so compact nobody needed a bed, or food or money —*\n\n*nobody hiding in the school bathroom or home alone*\n\n*pulling open the drawer where the pills are kept.*\n\n*For every atom belonging to me as good Belongs to you. Remember?*\n\n*(Line from Walt Whitman's "Song of Myself")*\n\n*There was no Nature. No them. No tests*\n\n*to determine if the elephant grieves her calf or if*\n\n*the coral reef feels pain...*\n\n*Can molecules recall it? what once was? before anything happened?*\n\n*No I, no We, no one. No was No verb no noun only a tiny tiny dot brimming with*\n\n*is is is is is*\n\n*All everything home*`
            },
            {
              id: "u4-opening-line",
              type: "theory",
              title: "Significance of the Opening Line",
              content: `**Opening Line:** *"Do you sometimes want to wake up to the singularity we once were?"*\n\nThis **rhetorical question** establishes the poem's central longing:\n- "Wake up" implies humanity is in a **deep slumber** — unaware of its shared origins.\n- "The singularity we once were" — a time before separation, poverty, suffering, and divisions.\n- It recalls the **cosmological singularity**: the pre-Big Bang state where all matter was compressed into a single point.\n- Emotionally, it expresses **yearning for belonging** — a world without loneliness or pain.`
            },
            {
              id: "u4-whitman",
              type: "theory",
              title: "The Whitman Allusion",
              content: `*"For every atom belonging to me as good Belongs to you."* — Walt Whitman, *Song of Myself*\n\nHowe weaves this line from **Whitman's** poem to suggest:\n- We all **originate from the same elements** of the universe.\n- The distinction between "I" and "you" is an illusion.\n- This reinforces the scientific idea that all matter comes from stardust of ancient supernovae.`
            },
            {
              id: "u4-symbols",
              type: "theory",
              title: "Key Symbols",
              content: `**The Elephant & Coral Reef:**\nUsed to highlight the **limitations of our current understanding** of non-human experiences. We test whether animals feel grief or pain — exposing our fragmented, anthropocentric worldview.\n\n**"Trashed oceans don't speak English or Farsi or French":**\nNature transcends language barriers — but we have destroyed it. Points to environmental destruction.\n\n**"Nothing" before humans felt self-important:**\nStrategic placement — the word "nothing" just before humans' self-importance conveys the poem's core message: human ego arose from cosmic nothingness.`
            },
            {
              id: "u4-ending",
              type: "theory",
              title: "The Ending: 'Home'",
              content: `The poem ends with: **"All everything home"**\n\n- The final word **"home"** = Earth, our shared origin.\n- Encapsulates the journey from **nothing** (the singularity) to **everything** (existence).\n- A **resonant invocation** — Earth is where all life belongs and originates.\n\n> The poem is a profound meditation on **the ties that bind all existence**, the mysteries of time and space, and humanity's yearning for wholeness.`
            },
            {
              id: "u4-quiz",
              type: "quiz",
              title: "Opening Line Analysis",
              content: "What is the significance of the opening line of 'Singularity'?",
              options: [
                { id: "A", text: "It asks a literal question about scientific theories.", isCorrect: false, explanation: "It is a rhetorical question, not a literal inquiry." },
                { id: "B", text: "It expresses nostalgia for a primordial state of unity before human separation and suffering.", isCorrect: true, explanation: "The line longs for the cosmic singularity — a state before poverty, divisions, and loneliness." },
                { id: "C", text: "It criticizes Stephen Hawking's theory.", isCorrect: false, explanation: "The poem draws inspiration from Hawking's singularity theory, not criticism." },
                { id: "D", text: "It is a greeting addressed to the reader.", isCorrect: false, explanation: "It is a philosophical question about cosmic origins." }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "u4-glossary",
      title: "3. Glossary",
      description: "Key terms from the poem.",
      color: "duo-violet",
      lessons: [
        {
          id: "les-u4-vocab",
          title: "Key Terms",
          description: "Vocabulary from Singularity.",
          icon: "BookOpen",
          slides: [
            {
              id: "v-singularity",
              type: "word_card",
              content: "Vocabulary",
              wordCard: {
                word: "Singularity",
                translation: "A single point of origin (Stephen Hawking's theory)",
                context: "In science: pre-Big Bang compression of all matter. In literature: oneness.",
                example: "Do you sometimes want to wake up to the singularity we once were?"
              }
            },
            {
              id: "v-farsi",
              type: "word_card",
              content: "Vocabulary",
              wordCard: {
                word: "Farsi",
                translation: "The Persian language",
                context: "Used to illustrate language diversity and nature's transcendence of it.",
                example: "Trashed oceans don't speak English or Farsi or French."
              }
            }
          ]
        }
      ]
    },
    {
      id: "u4-exam",
      title: "4. Exam Preparation",
      description: "Model questions.",
      color: "duo-orange",
      lessons: [
        {
          id: "les-u4-exam",
          title: "Model Questions",
          description: "Section A practice.",
          icon: "PenTool",
          slides: [
            {
              id: "u4-secA-q2",
              type: "theory",
              title: "Section A (2 Marks) — Q2",
              content: `**Question:** Explain the significance of the opening line of the poem, "Singularity."\n\n**Model Answer:**\nThe opening line *"Do you sometimes want to wake up to the singularity we once were?"* is a **rhetorical question** that establishes the poem's core theme of longing. It evokes the **cosmological singularity** (the pre-Big Bang state of unity) as a metaphor for the human desire to return to a state free from poverty, illness, loneliness, and social divisions. The word "wake up" suggests that humanity is currently in a form of unconscious slumber, forgetting its shared origins.`
            }
          ]
        }
      ]
    }
  ]
};

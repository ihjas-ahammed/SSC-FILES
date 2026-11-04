import { Section } from '../../types';

export const SEC_U5_SELF_UNSEEING: Section = {
  id: "sec-u5-self-unseeing",
  title: "Unit 5: The Self-Unseeing",
  description: "Thomas Hardy's touching poem on memory, loss, and living in the present.",
  color: "duo-blue",
  units: [
    {
      id: "u5-part1-intro",
      title: "1. Introduction & Context",
      description: "Thomas Hardy and the Victorian transition.",
      color: "duo-blue",
      lessons: [
        {
          id: "les-u5-intro",
          title: "The Author & Theme",
          description: "Understanding Thomas Hardy's perspective.",
          icon: "User",
          slides: [
            {
              id: "s-u5-hook",
              type: "quiz",
              title: "The Present Moment",
              content: "Have you ever looked back at an ordinary childhood memory and realized it was actually a moment of perfect happiness?",
              options: [
                { id: "A", text: "Yes, we often don't realize we are happy until the moment has passed.", isCorrect: true, explanation: "This exact realization—that we are 'oblivious' to our own happiness in the present—is the core theme of Hardy's poem." },
                { id: "B", text: "No, I am always fully aware of my happiness in the moment.", isCorrect: false, explanation: "While a great skill, Hardy's poem suggests that humans naturally tend to 'look away' from the magic of the present." }
              ]
            },
            {
              id: "s-u5-author",
              type: "theory",
              title: "The Author: Thomas Hardy",
              content: `**Thomas Hardy (1840–1928)** was a renowned English novelist and poet. He is best known for his vivid portrayal of rural life and tragic characters struggling against social and natural forces.\n\nHardy's work bridges the transition from Victorian realism to modernist themes. His novels are set in the fictional region of **Wessex**, a reimagined southwest England, and explore themes like class conflict, fate, sexuality, and the constraints of social norms.`
            },
            {
              id: "s-u5-transition",
              type: "theory",
              title: "From Novels to Poetry",
              content: `Hardy’s bleak yet beautiful depiction of human suffering challenged Victorian ideals and led to critical controversy—especially with *Jude the Obscure* (1895). After this, he stopped writing novels and turned exclusively to poetry.\n\nAs a poet, Hardy produced over 900 poems. His contributions to both fiction and poetry established him as a major literary figure whose work continues to influence writers and critics today.`
            },
            {
              id: "s-u5-genre",
              type: "theory",
              title: "What are we reading?",
              content: `**Genre:** Reflective Poetry\n**Form:** 3 stanzas, ABAB rhyme scheme.\n\n"The Self-Unseeing" is a touching poem that contemplates memory, loss, and the gentle beauty of bygone days. In just a handful of stanzas, Hardy reflects on a memory from his childhood residence, illustrating how individuals frequently overlook the importance of experiences while they are occurring.`
            }
          ]
        }
      ]
    },
    {
      id: "u5-part2-text",
      title: "2. The Poem",
      description: "Reading and analyzing 'The Self-Unseeing'.",
      color: "duo-violet",
      lessons: [
        {
          id: "les-u5-tx1",
          title: "Stanza 1: The Setting",
          description: "Returning to the ancient floor.",
          icon: "Home",
          slides: [
            {
              id: "s-u5-tx1-1",
              type: "theory",
              title: "Stanza 1",
              content: `> Here is the ancient floor,\n> Footworn and hollowed and thin,\n> Here was the former door\n> Where the dead feet walked in.`
            },
            {
              id: "s-u5-tx1-2",
              type: "quiz",
              title: "Analyze the Imagery",
              content: "What does the description of the floor ('Footworn and hollowed and thin') suggest?",
              options: [
                { id: "A", text: "The house was built with cheap materials.", isCorrect: false, explanation: "The focus is on the passage of time, not the quality of construction." },
                { id: "B", text: "Generations of living, movement, and the passage of time.", isCorrect: true, explanation: "Correct! The physical wear on the floor represents the history and the lives of those who once lived there." }
              ]
            },
            {
              id: "s-u5-tx1-3",
              type: "theory",
              title: "Ghosts of the Past",
              content: `The phrase **"Where the dead feet walked in"** introduces a somber, nostalgic tone immediately. The speaker is physically present in the room ("Here is"), but his mind is entirely occupied by those who are gone ("the dead").`
            }
          ]
        },
        {
          id: "les-u5-tx2",
          title: "Stanza 2: The Memory",
          description: "A vision of the past.",
          icon: "Users",
          slides: [
            {
              id: "s-u5-tx2-1",
              type: "theory",
              title: "Stanza 2",
              content: `> She sat here in her chair,\n> Smiling into the fire;\n> He who played stood there,\n> Bowing it higher and higher.`
            },
            {
              id: "s-u5-tx2-2",
              type: "quiz",
              title: "Comprehension Check",
              content: "Who are 'She' and 'He' most likely referring to?",
              options: [
                { id: "A", text: "Strangers the speaker is imagining.", isCorrect: false, explanation: "The poem is highly personal." },
                { id: "B", text: "The speaker's parents or family members from his childhood.", isCorrect: true, explanation: "Yes, 'she' is likely his mother by the fire, and 'he' his father playing the fiddle." }
              ]
            },
            {
              id: "s-u5-tx2-3",
              type: "theory",
              title: "A Scene of Warmth",
              content: `The imagery shifts from the cold, worn floor of the present to the warmth of the past. The mother is **"Smiling into the fire"**, a symbol of comfort and contentment, while the father is energetically playing an instrument (**"Bowing it higher and higher"**).`
            }
          ]
        },
        {
          id: "les-u5-tx3",
          title: "Stanza 3: The Realization",
          description: "The core theme of the poem.",
          icon: "EyeOff",
          slides: [
            {
              id: "s-u5-tx3-1",
              type: "theory",
              title: "Stanza 3",
              content: `> Childlike, I danced in a dream;\n> Blessings emblazoned that day;\n> Everything glowed with a gleam;\n> Yet we were looking away!`
            },
            {
              id: "s-u5-tx3-2",
              type: "quiz",
              title: "The Irony of the Moment",
              content: "What does the final line 'Yet we were looking away!' mean in the context of the poem?",
              options: [
                { id: "A", text: "They were literally looking out the window.", isCorrect: false, explanation: "It is a metaphorical 'looking away'." },
                { id: "B", text: "They were oblivious to how perfectly happy they were at that exact moment.", isCorrect: true, explanation: "This is the 'Self-Unseeing'—being blind to the beauty of the present while it is happening." }
              ]
            },
            {
              id: "s-u5-tx3-3",
              type: "theory",
              title: "The Title's Meaning",
              content: `**"The Self-Unseeing"** refers to this tragic human flaw: we often fail to recognize the "blessings" and the "gleam" of the present. The speaker, "Childlike," was dancing "in a dream," unaware that this ordinary evening was actually a peak moment of joy that he would long for years later.`
            }
          ]
        }
      ]
    },
    {
      id: "u5-part3-vocab",
      title: "3. Vocabulary & Exam Prep",
      description: "Master key terms and tackle university questions.",
      color: "duo-orange",
      lessons: [
        {
          id: "les-u5-vocab",
          title: "Glossary",
          description: "Key vocabulary from the text.",
          icon: "Type",
          slides: [
            {
              id: "v-u5-1",
              type: "word_card",
              content: "Vocabulary",
              wordCard: {
                word: "Emblazoned",
                translation: "Conspicuously inscribed or displayed a design on; brightly illuminated.",
                context: "> \"Blessings emblazoned that day;\"",
                example: "The setting sun emblazoned the sky with brilliant colors."
              }
            },
            {
              id: "v-u5-2",
              type: "word_card",
              content: "Vocabulary",
              wordCard: {
                word: "Gleam",
                translation: "Shine brightly, especially with reflected light.",
                context: "> \"Everything glowed with a gleam;\"",
                example: "There was a hopeful gleam in her eye."
              }
            },
            {
              id: "v-u5-3",
              type: "word_card",
              content: "Vocabulary",
              wordCard: {
                word: "Footworn",
                translation: "Worn out by footsteps over a long period of time.",
                context: "> \"Footworn and hollowed and thin,\"",
                example: "The footworn stone steps of the ancient temple told a story of countless pilgrims."
              }
            }
          ]
        },
        {
          id: "les-u5-exam",
          title: "Exam Questions",
          description: "Practice answering in the format of the exam.",
          icon: "Edit3",
          slides: [
            {
              id: "s-u5-qa1",
              type: "theory",
              title: "Section B (6 Marks) - Model Question",
              content: `**Q: Comment on the central theme of The Self-Unseeing.**\n\n**Model Answer Outline:**\n1. **Core Theme:** The tragic human tendency to overlook the value of the present moment, realizing happiness only in retrospect.\n2. **The Contrast:** The poem contrasts the physical decay of the present ("footworn and hollowed" floor) with the warmth and vitality of the past memory (smiling mother, playing father).\n3. **The Conclusion:** The final line, "Yet we were looking away!", encapsulates the title. The "Self-Unseeing" means being blind to one's own blessings while they are happening, leading to profound nostalgia and a sense of loss later in life.`
            }
          ]
        }
      ]
    }
  ]
};
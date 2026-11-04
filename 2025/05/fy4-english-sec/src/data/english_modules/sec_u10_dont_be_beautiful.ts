import { Section } from '../../types';

export const SEC_U10_DONT_BE_BEAUTIFUL: Section = {
  id: "sec-u10-dont-be-beautiful",
  title: "Unit 10: Don't Be Beautiful",
  description: "Nikita Gill's empowering poem redefining women's worth beyond physical appearance.",
  color: "duo-pink",
  units: [
    {
      id: "u10-part1-intro",
      title: "1. Introduction",
      description: "Meet Nikita Gill and understand her feminist literary context.",
      color: "duo-pink",
      lessons: [
        {
          id: "les-u10-intro",
          title: "Author & Context",
          description: "Understanding the modern poet's perspective.",
          icon: "User",
          slides: [
            {
              id: "s-u10-hook",
              type: "interactive_canvas",
              title: "Shattering Expectations",
              content: "Since childhood, fairytales and media have often taught girls that their ultimate goal is to be 'beautiful.'\n\nWhat happens when we shatter that single, restrictive label?",
              interactiveCanvasId: "mirror_shatter"
            },
            {
              id: "s-u10-author-1",
              type: "theory",
              title: "The Author: Nikita Gill",
              content: `**Nikita Gill** is a British-Indian poet, writer, and artist celebrated for her emotionally charged poetry that delves into themes of love, healing, feminism, mental health, and self-empowerment.\n\nBorn in Belfast, Northern Ireland, and raised in New Delhi, India, Gill's multicultural upbringing informs her poetic style. She is deeply inspired by figures like Sylvia Plath and Maya Angelou.`
            },
            {
              id: "s-u10-author-2",
              type: "theory",
              title: "A Modern Voice",
              content: `Gill's popularity grew significantly through social media (often called an 'Insta-poet'). She was the first Instagram poet commissioned by National Poetry Day in the UK.\n\nHer acclaimed collections, such as *Fierce Fairytales* and *Wild Embers*, reimagine ancient myths through a feminist lens, giving voice to resilience and female strength.`
            },
            {
              id: "s-u10-genre",
              type: "theory",
              title: "What are we reading?",
              content: `**Genre:** Free Verse Poetry / Feminist Manifesto\n\n**The Core Theme:** \n"Don't Be Beautiful" is a powerful feminist poem that challenges conventional standards of beauty. It urges readers not to focus on being physically "beautiful" in the way society dictates, but instead to cultivate inner strength, intelligence, and individuality.`
            },
            {
              id: "s-u10-pre-mcq",
              type: "quiz",
              title: "Pre-reading Check",
              content: "Why might a poet tell young girls specifically *not* to be beautiful?",
              options: [
                { id: "A", text: "Because beauty is unattainable for most people.", isCorrect: false, explanation: "The poem argues that beauty shouldn't be the goal in the first place, not that it's impossible to reach." },
                { id: "B", text: "To free them from the pressure of appearance so they can focus on their character and intellect.", isCorrect: true, explanation: "Exactly. By rejecting the mandate to be beautiful, women are free to be angry, witty, and talented." }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "u10-part2-text",
      title: "2. The Poem",
      description: "Reading and analyzing 'Don't Be Beautiful'.",
      color: "duo-violet",
      lessons: [
        {
          id: "les-u10-tx1",
          title: "The Rejection",
          description: "Stanza 1: Rejecting the societal mandate.",
          icon: "FileText",
          slides: [
            {
              id: "s-u10-tx1-1",
              type: "theory",
              title: "The Societal Mandate",
              content: `> "They keep saying that beautiful is something a girl needs to be. \n> But honestly? Forget that. \n> Don't be beautiful."`
            },
            {
              id: "s-u10-tx1-2",
              type: "quiz",
              title: "Analyze the Opening",
              content: "Who does the word 'They' likely refer to in the first line?",
              options: [
                { id: "A", text: "Society, media, and traditional cultural expectations.", isCorrect: true, explanation: "'They' represents the collective voices that impose gender norms on women." },
                { id: "B", text: "The poet's parents specifically.", isCorrect: false, explanation: "While parents might say it, 'They' acts as a broader, systemic societal force." }
              ]
            },
            {
              id: "s-u10-tx1-3",
              type: "theory",
              title: "A Conversational Tone",
              content: `Notice the phrase **"But honestly? Forget that."** \n\nGill uses a highly conversational, almost defiant tone. It feels like advice from a close, empowering friend rather than a strict academic lecture. This direct address helps the poem resonate immediately with young readers.`
            }
          ]
        },
        {
          id: "les-u10-tx2",
          title: "The Alternatives",
          description: "An eternity of other things.",
          icon: "Zap",
          slides: [
            {
              id: "s-u10-tx2-1",
              type: "theory",
              title: "The List of Virtues",
              content: `> "Be angry, be intelligent, be witty, be klutzy, be interesting, be funny, be adventurous, be crazy, be talented - \n> there are an eternity of other things to be other than beautiful."`
            },
            {
              id: "s-u10-tx2-2",
              type: "quiz",
              title: "Analyzing the Word Choice",
              content: "Why does the poet include words like 'angry', 'klutzy', and 'crazy' alongside 'intelligent' and 'talented'?",
              options: [
                { id: "A", text: "To show that women should strive to be flawed instead of perfect.", isCorrect: false, explanation: "She isn't saying flaw is the goal, but that humanity includes messiness." },
                { id: "B", text: "To embrace the full, messy spectrum of human emotion and personality, rather than a passive, 'perfect' aesthetic.", isCorrect: true, explanation: "Society expects women to be calm, graceful, and perfect (beautiful). Gill argues for the freedom to be chaotic, clumsy, and emotionally expressive." }
              ]
            },
            {
              id: "s-u10-tx2-3",
              type: "fill_in_blank",
              title: "Vocabulary Check",
              content: "Gill states that there are an ___ of other things to be other than beautiful.",
              blankAnswer: "eternity"
            }
          ]
        },
        {
          id: "les-u10-tx3",
          title: "Deconstructing Beauty",
          description: "What is a word, anyway?",
          icon: "Search",
          slides: [
            {
              id: "s-u10-tx3-1",
              type: "theory",
              title: "Just Letters",
              content: `> "And what is beautiful anyway but a set of letters strung together to make a word? \n> Be your own definition of amazing, always. \n> That is so much more important than anything beautiful, ever."`
            },
            {
              id: "s-u10-tx3-2",
              type: "theory",
              title: "Deconstructing the Standard",
              content: `By describing 'beautiful' as just **"a set of letters strung together,"** Gill strips the word of its immense social power. \n\nShe reduces a heavy, oppressive societal standard down to arbitrary ink on a page, freeing the reader to construct their own meaning ("Be your own definition of amazing").`
            },
            {
              id: "s-u10-tx3-3",
              type: "quiz",
              title: "The Ultimate Message",
              content: "Which of the following best summarizes the conclusion of the poem?",
              options: [
                { id: "A", text: "Self-defined greatness ('amazing') is infinitely more valuable than society's definition of beauty.", isCorrect: true, explanation: "She urges readers to define their own worth rather than conforming to a physical standard." },
                { id: "B", text: "Being beautiful is inherently bad and should be avoided.", isCorrect: false, explanation: "She isn't saying it's bad to happen to be beautiful, but that it shouldn't be the primary goal or defining trait." }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "u10-part3-mastery",
      title: "3. Vocabulary & Exam Prep",
      description: "Master key terms and tackle exam questions.",
      color: "duo-orange",
      lessons: [
        {
          id: "les-u10-vocab",
          title: "Glossary",
          description: "Key words from the text.",
          icon: "Type",
          slides: [
            {
              id: "v-u10-1",
              type: "word_card",
              content: "Vocabulary",
              wordCard: {
                word: "Klutzy",
                translation: "Clumsy, awkward, or prone to accidents.",
                context: "> \"...be witty, be klutzy, be interesting...\"",
                example: "It's okay to be a bit klutzy and drop things; perfection is overrated."
              }
            },
            {
              id: "v-u10-2",
              type: "word_card",
              content: "Vocabulary",
              wordCard: {
                word: "Eternity",
                translation: "Infinite or unending time; a limitless number of options.",
                context: "> \"...there are an eternity of other things to be other than beautiful.\"",
                example: "There is an eternity of stars in the night sky."
              }
            },
            {
              id: "v-u10-3",
              type: "word_card",
              content: "Vocabulary",
              wordCard: {
                word: "Strung",
                translation: "Arranged in a line or series (past tense of string).",
                context: "> \"...a set of letters strung together to make a word?\"",
                example: "The pearls were strung together to make a beautiful necklace."
              }
            }
          ]
        },
        {
          id: "les-u10-exam",
          title: "Model Questions",
          description: "Practice answering in the format of the exam.",
          icon: "Edit3",
          slides: [
            {
              id: "s-u10-qa1",
              type: "theory",
              title: "Section A (2 Marks) - Model Question",
              content: `**Q: How does the poem "Don't Be Beautiful" reflect on society's obsession with physical appearance?**\n\n**Model Answer:**\nThe poem challenges the conventional societal expectation that a girl's primary value lies in being physically "beautiful". Instead, Nikita Gill urges women to reject this superficial standard and prioritize intellectual, emotional, and active depth—like being intelligent, witty, angry, and adventurous.`
            },
            {
              id: "s-u10-ref1",
              type: "quiz",
              title: "Section B Theme Practice",
              content: "If asked to write a 100-word paragraph on the tone of the poem, which adjective best describes it?",
              options: [
                { id: "A", text: "Defiant, conversational, and empowering.", isCorrect: true, explanation: "Gill uses direct address ('Forget that') to boldly empower the reader against societal norms." },
                { id: "B", text: "Melancholic, formal, and grieving.", isCorrect: false, explanation: "The poem is energetic and assertive, not sad or formal." }
              ]
            }
          ]
        }
      ]
    }
  ]
};
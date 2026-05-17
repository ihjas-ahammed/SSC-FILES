import { Section } from '../../types';

export const SEC_U13_FACTORIES: Section = {
  id: "sec-u13-factories",
  title: "Unit 13: Factories are Eyesores",
  description: "Baldoon Dhingra's reflective poem on industrialization, nature, and art.",
  color: "duo-gray",
  units: [
    {
      id: "u13-part1-intro",
      title: "1. Introduction",
      description: "Meet Baldoon Dhingra and understand the poem's context.",
      color: "duo-gray",
      lessons: [
        {
          id: "les-u13-intro",
          title: "Author & Context",
          description: "Understanding the poet's ambivalent attitude towards progress.",
          icon: "User",
          slides: [
            {
              id: "s-u13-hook",
              type: "quiz",
              title: "Finding Beauty in the Ugly",
              content: "Imagine a towering, smoke-spewing factory polluting the sky. Could such a scene ever be considered a beautiful work of art?",
              options: [
                { id: "A", text: "No, pollution and destruction can never be beautiful.", isCorrect: false, explanation: "This is the logical environmental view, but art often challenges logic." },
                { id: "B", text: "Yes, under the right lighting or through an artist's eyes, even ugly things can have aesthetic value.", isCorrect: true, explanation: "Exactly! This paradox is the central exploration of Dhingra's poem." }
              ]
            },
            {
              id: "s-u13-author",
              type: "theory",
              title: "The Author: Baldoon Dhingra",
              content: `**Baldoon Dhingra** was a prominent Indian poet and writer prior to independence. He was not just a poet, but an educator, spiritual seeker, and art historian. \n\nHe lived in Paris from the 1940s until the 1960s, working as an Indian representative to UNESCO. Because of his time in Europe, he cultivated a lyrical style reminiscent of Western poets. His poetry generally appreciates nature with compassion and empathy.`
            },
            {
              id: "s-u13-theme",
              type: "theory",
              title: "An Ambivalent Attitude",
              content: `This poem reveals the poet's **ambivalent (conflicted) attitude** towards nature and industrial development.\n\nOn one hand, he uses the common environmentalist adage that "factories are eyesores" because their black smoke destroys the landscape and forces men into "monotonous toil."\n\nOn the other hand, his background as an art historian bleeds through. He wonders how famous painters might look at the misty, smoky factories and see a beautiful canvas.`
            },
            {
              id: "s-u13-pre-mcq",
              type: "quiz",
              title: "Pre-reading Check",
              content: "What does the term 'eyesore' mean?",
              options: [
                { id: "A", text: "A physical medical condition affecting the eyes.", isCorrect: false, explanation: "While literal eye sores exist, the term is used metaphorically here." },
                { id: "B", text: "Something that is incredibly ugly and unpleasant to look at.", isCorrect: true, explanation: "Correct. A building or object that ruins the visual beauty of its surroundings is an eyesore." }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "u13-part2-text1",
      title: "2. The Eyesore & The Toil",
      description: "Reading Stanzas 1 and 2: The destruction of nature and the human cost.",
      color: "duo-blue",
      lessons: [
        {
          id: "les-u13-tx1",
          title: "Stanza 1: Blots on the Landscape",
          description: "The visual pollution of the factories.",
          icon: "FileText",
          slides: [
            {
              id: "s-u13-tx1-1",
              type: "theory",
              title: "Stanza 1",
              content: `> The factories, eyesores as you say,\n> Make iron lines against the sky.\n> Standing to eastward, gaunt and high\n> They belch black smoke by night and day,\n> Blots on the landscape, as you say.`
            },
            {
              id: "s-u13-tx1-2",
              type: "quiz",
              title: "Analyzing Imagery",
              content: "Which words in Stanza 1 emphasize the ugly, unnatural intrusion of the factories?",
              options: [
                { id: "A", text: "'Eastward' and 'sky'", isCorrect: false, explanation: "These are neutral directional and natural terms." },
                { id: "B", text: "'Eyesores', 'gaunt', 'belch', and 'blots'", isCorrect: true, explanation: "These words paint a picture of sickness, pollution, and a violent disruption of nature." }
              ]
            },
            {
              id: "s-u13-tx1-3",
              type: "theory",
              title: "A Conversational Tone",
              content: `Notice the repetition of the phrase **"as you say."** \n\nThe poet is directly addressing the reader (or society), acknowledging the common consensus that factories ruin the environment. He is establishing himself as a fellow nature-lover who agrees that these iron lines are a blight on the earth.`
            }
          ]
        },
        {
          id: "les-u13-tx2",
          title: "Stanza 2: The Human Cost",
          description: "The monotonous, desperate labor of man.",
          icon: "Users",
          slides: [
            {
              id: "s-u13-tx2-1",
              type: "theory",
              title: "Stanza 2",
              content: `> Weary and desperate with toil,\n> Man labours in that acrid space,\n> Time and again he turns his face\n> Away from grimy smoke and soil\n> To pray he shall have done with toil.`
            },
            {
              id: "s-u13-tx2-2",
              type: "quiz",
              title: "The Worker's Experience",
              content: "What is the worker doing 'time and again' in this stanza?",
              options: [
                { id: "A", text: "Turning away from the smoke and praying for his shift/work to end.", isCorrect: true, explanation: "The man is 'weary and desperate,' praying to be done with the suffocating, acrid environment." },
                { id: "B", text: "Looking up at the sky to admire the sunset.", isCorrect: false, explanation: "That happens in the next stanza! Here, the man is just trying to escape the 'grimy smoke'." }
              ]
            },
            {
              id: "s-u13-tx2-3",
              type: "fill_in_blank",
              title: "Vocabulary Check",
              content: "Man labours in that ___ space, turning away from the grimy smoke.",
              blankAnswer: "acrid"
            }
          ]
        }
      ]
    },
    {
      id: "u13-part3-text2",
      title: "3. Art & The Cycle",
      description: "Reading Stanzas 3, 4, and 5: The shift in perspective.",
      color: "duo-violet",
      lessons: [
        {
          id: "les-u13-tx3",
          title: "Stanza 3: The Golden Hour",
          description: "When ugliness grows bright.",
          icon: "Sun",
          slides: [
            {
              id: "s-u13-tx3-1",
              type: "theory",
              title: "Stanza 3",
              content: `> But yet, when mountain tops flush bright\n> With sun-down scintillating gleam,\n> Some tremulously slender base\n> Touches a chimney shaft with light.\n> And things of ugliness grow bright.`
            },
            {
              id: "s-u13-tx3-2",
              type: "theory",
              title: "The Shift (Volta)",
              content: `The word **"But yet"** signals a shift in the poem. The poet stops looking at the factory as a pure environmental disaster and starts looking at it through the lens of light and art.\n\nDuring sunset ("sun-down scintillating gleam"), the natural light hits the artificial, ugly chimney shaft, magically transforming its appearance. Suddenly, the "things of ugliness grow bright."`
            }
          ]
        },
        {
          id: "les-u13-tx4",
          title: "Stanza 4: The Painter's Eye",
          description: "Invoking Claude Monet.",
          icon: "Image",
          slides: [
            {
              id: "s-u13-tx4-1",
              type: "theory",
              title: "Stanza 4",
              content: `> With smoke about them, sullen, slow,\n> Half-hidden in mist, I sometimes think\n> How Monnet had limned them on the brink\n> Of the world’s edge, when fires burn low,\n> And smoke hung around them sullen, slow.`
            },
            {
              id: "s-u13-tx4-2",
              type: "theory",
              title: "Who is Monnet?",
              content: `The poet refers to **Claude Monet**, the famous French Impressionist painter. \n\nMonet was famous for painting landscapes obscured by fog, mist, and smoke (like his famous paintings of train stations). Impressionists didn't care if an object was "ugly"—they cared about how light and color played off of it. Dhingra, an art historian, uses Monet to show how art can transform industrial grit into a masterpiece.`
            },
            {
              id: "s-u13-tx4-3",
              type: "quiz",
              title: "The Role of Art",
              content: "By bringing up Monet, what point is the poet making about the statement 'factories are eyesores'?",
              options: [
                { id: "A", text: "That factories are permanently ugly and art cannot save them.", isCorrect: false, explanation: "He suggests the opposite." },
                { id: "B", text: "That the claim loses credibility, because an artist's perspective can turn that same ugly smoke into a beautiful painting.", isCorrect: true, explanation: "The poet's conflicted feelings show that beauty is subjective." }
              ]
            }
          ]
        },
        {
          id: "les-u13-tx5",
          title: "Stanza 5: Return to Reality",
          description: "The inescapable wheel.",
          icon: "RefreshCw",
          slides: [
            {
              id: "s-u13-tx5-1",
              type: "theory",
              title: "Stanza 5",
              content: `> Now are they eyesores, as you say,\n> At noontide with those smoking tops:\n> Man works beneath, until he drops\n> Out of the world of wheels one day\n> Factories are eyesores, as you say.`
            },
            {
              id: "s-u13-tx5-2",
              type: "theory",
              title: "The Illusion Fades",
              content: `The beauty was only temporary. At "noontide" (midday), under the harsh sun, the artistic mist burns away. The factories are returned to their true, ugly form.\n\nThe poet snaps back to reality: underneath these chimneys, men are literally working until they drop dead ("Out of the world of wheels one day"). Ultimately, despite the brief artistic beauty, the poet concludes that yes, they truly are eyesores.`
            }
          ]
        }
      ]
    },
    {
      id: "u13-part4-mastery",
      title: "4. Vocabulary & Exam Prep",
      description: "Master key terms and tackle model questions.",
      color: "duo-orange",
      lessons: [
        {
          id: "les-u13-vocab",
          title: "Glossary",
          description: "Key words from the text.",
          icon: "Type",
          slides: [
            {
              id: "v-u13-1",
              type: "word_card",
              content: "Vocabulary",
              wordCard: {
                word: "Eyesore",
                translation: "A thing that is very ugly, especially a building that disfigures a landscape.",
                context: "> \"The factories, eyesores as you say...\"",
                example: "The abandoned, rusting factory was a massive eyesore."
              }
            },
            {
              id: "v-u13-2",
              type: "word_card",
              content: "Vocabulary",
              wordCard: {
                word: "Gaunt",
                translation: "Grim or desolate in appearance; exceptionally thin and bony.",
                context: "> \"Standing to eastward, gaunt and high\"",
                example: "The gaunt iron structures loomed over the city."
              }
            },
            {
              id: "v-u13-3",
              type: "word_card",
              content: "Vocabulary",
              wordCard: {
                word: "Acrid",
                translation: "Having an irritatingly strong and unpleasant taste or smell.",
                context: "> \"Man labours in that acrid space,\"",
                example: "The acrid smell of burning rubber filled the air."
              }
            },
            {
              id: "v-u13-4",
              type: "word_card",
              content: "Vocabulary",
              wordCard: {
                word: "Limned",
                translation: "Depicted or described in painting or words; highlighted with light.",
                context: "> \"How Monnet had limned them on the brink...\"",
                example: "The artist limned the city skyline against the setting sun."
              }
            },
            {
              id: "v-u13-5",
              type: "word_card",
              content: "Vocabulary",
              wordCard: {
                word: "Scintillating",
                translation: "Sparkling or shining brightly.",
                context: "> \"With sun-down scintillating gleam...\"",
                example: "The ocean was scintillating under the midday sun."
              }
            }
          ]
        },
        {
          id: "les-u13-exam",
          title: "Model Questions",
          description: "Practice answering in the format of the exam.",
          icon: "Edit3",
          slides: [
            {
              id: "s-u13-qa1",
              type: "theory",
              title: "Section A (2 Marks) - Model Question",
              content: `**Q: Why does the poet call factories "eyesores"?**\n\n**Model Answer:**\nThe poet refers to factories as "eyesores" because their tall, gaunt structures and the continuous belching of black smoke ruin the natural beauty of the landscape. They stand as ugly, polluting blots against the sky that destroy environmental aesthetics and subject workers to a grim, acrid environment.`
            },
            {
              id: "s-u13-qb1",
              type: "theory",
              title: "Section B Concept Checklist",
              content: `**If asked about the poet's "Ambivalent Attitude":**\nEnsure you mention both sides of his perspective:\n1. **The Environmentalist:** He bemoans the destruction of nature and the monotonous, desperate toil of the workers in the acrid smoke.\n2. **The Art Historian:** He acknowledges that under the right light (sunset/mist), even ugly factories can be transformed into beautiful subjects for art, imagining how painters like Claude Monet would have captured them.`
            }
          ]
        }
      ]
    }
  ]
};
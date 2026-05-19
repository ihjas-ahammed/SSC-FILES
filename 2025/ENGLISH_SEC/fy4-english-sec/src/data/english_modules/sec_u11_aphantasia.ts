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
      description: "About Kim Zarins, aphantasia, and the article's context.",
      color: "duo-purple",
      lessons: [
        {
          id: "les-u11-author",
          title: "About Kim Zarins",
          description: "Author background and the article's publication context.",
          icon: "User",
          slides: [
            {
              id: "sl-u11-auth1",
              type: "theory",
              title: "Who is Kim Zarins?",
              content: `Unit 11 Imagination without Images: Aphantasia and Science Fiction Readers and Writers Kim Zarins Introduction Kimberly (Kim) Zarins has a PhD in English from Cornell University and teaches medieval literature and children’s literature at Sacramento State University. Her debut novel, Sometimes We Tell the Truth, is a contemporary retelling of Chaucer’s Canterbury Tales in which high school seniors ride a bus to Washington DC and tell stories to pass the time and reveal something about themselves.

This book is classified under Young Adult (YA) Fiction. She has also published two picture books for children- The Helpful Puppy (2012) and Playful Bunny (2006).`
            },
            {
              id: "sl-u11-auth2",
              type: "theory",
              title: "Context of the Article",
              content: `This chapter is an article published online on November 4, 2022, on the webpage of Aphantasia Network, which is a platform for people living with the neurodiversity called aphantasia, to discover the world of aphantasia. It was originally published on the “Science Fiction & Fantasy Writers Association” (SFWA) webpage on October 4, 2022.

In this article, Zarins introduces the neurodivergent condition called aphantasia, or mind blindness in simple terms, as it is relatively new to many people. Here, she primarily provides tips to writers to make their work inclusive by keeping in mind readers who are aphants while producing works of fiction.

The article is significant in many respects as it introduces a varied point of view of a section of readers who “feel” and cannot “see” the literary world due to an underlying neurological condition. It not only urges writers to consider such readers but also facilitates the others to magnify their outlook by taking into account the experiences of such divergent communities too, even if they are a minority.

Zarins also alludes to the methodology adopted by aphant writers to stretch the boundaries of the literary world further. The role of science in fulfilling this mission of developing a broad world view is noteworthy.

This is a classic example of how interdisciplinary interactions between science and literature help to enhance society. In this context, the definition of “imagination” acquires novel implications as it incorporates not just visual images but sensory experiences too, which help aphants to relate to a fantasy world.

While, on the one hand, this renders the writers more responsible; on the other, it instigates scientists to study areas hitherto unexplored. Ultimately, aphants who are unaware of their condition and left to question their ability, achieve self-awareness which is essential for the growth of any civilisation.`
            },
            {
              id: "sl-u11-auth-quiz",
              type: "quiz",
              title: "About the Article",
              content: "Where was Kim Zarins' article on aphantasia originally published?",
              options: [
                { id: "A", text: "The New Yorker", isCorrect: false, explanation: "That is where Ted Chiang's AI essay was published." },
                { id: "B", text: "Science Fiction & Fantasy Writers Association (SFWA) webpage", isCorrect: true, explanation: "The article was originally published on the SFWA webpage on October 4, 2022." },
                { id: "C", text: "Popular Science magazine", isCorrect: false, explanation: "That is where David Linden's memory text was reprinted." },
                { id: "D", text: "Scientific American", isCorrect: false, explanation: "That is the podcast platform for Unit 5." }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "u11-text1",
      title: "2. The Text — What is Aphantasia?",
      description: "Definition, personal experience, and relation to science fiction.",
      color: "duo-blue",
      lessons: [
        {
          id: "les-u11-def",
          title: "Aphantasia Defined",
          description: "What it means to be an aphant.",
          icon: "Eye",
          slides: [
            {
              id: "sl-u11-narnia",
              type: "theory",
              title: "Opening — The Narnia Story",
              content: `If you write speculative fiction, 2% of your readers might experience reading like I do- tips for reading and writing science fiction with aphantasia. When I was a child, I snuck out to the backyard, made a little circle of stones, and jumped inside the circle.

The goal was to get to Narnia, which I loved intensely. But I have never pictured Narnia or its characters in my mind.

I’m an aphant, that is, someone with aphantasia, the condition of lacking a mind’s eye, and with it, the ability to visualize. The term, coined in 2015 by Adam Zeman, has received much attention since.`
            },
            {
              id: "sl-u11-tolkien",
              type: "theory",
              title: "Tolkien's 'Green Sun' — What an Aphant Experiences",
              content: `Aphantasia is the inability to visualize familiar people and places, as well as things that don’t exist, the province of speculative literature. J.

R. R.

Tolkien writes of language’s inherent power to create fantasy. Even putting an unlikely adjective next to a noun—he gives us “the green sun” as his example—evokes a strange image that many can picture.

However, I don’t see a green sun. I think of Green Eggs and Ham—an association, not an image.

Reading enhances the mind’s eye for most people, but not for me. It sounds like a magic wardrobe in one’s brain.`
            },
            {
              id: "sl-u11-def-quiz",
              type: "quiz",
              title: "Definition Check",
              content: "What percentage of people are estimated to have aphantasia?",
              options: [
                { id: "A", text: "10%", isCorrect: false, explanation: "The text says approximately 2%." },
                { id: "B", text: "2%", isCorrect: true, explanation: "The article states: 'If you write speculative fiction, 2% of your readers might experience reading like I do.'" },
                { id: "C", text: "20%", isCorrect: false, explanation: "That is the percentage from the team presentation survey." },
                { id: "D", text: "5%", isCorrect: false, explanation: "The text specifies 2%." }
              ]
            }
          ]
        },
        {
          id: "les-u11-scifi",
          title: "Aphantasia & Science Fiction",
          description: "How aphants engage with speculative fiction differently.",
          icon: "BookOpen",
          slides: [
            {
              id: "sl-u11-scifi1",
              type: "theory",
              title: "Skimming Descriptions",
              content: `Your gorgeous description of the spaceship or the landscape? Teenage me skimmed that paragraph like I skimmed Tolkien’s descriptions of Middle Earth.

My head lacks a place for all those details to stick. I’ve tried.

When Aslan asked Digory to look west and gave directions to the garden with the apple tree, that description seemed meaningless, a landscape beyond my grasp. Despite these readerly challenges, The Chronicles of Narnia and The Lord of the Rings began my path as a medievalist, reader, and writer.

Today, diverse perspectives in speculative fiction are increasingly represented, including neurological diversity such as autism or synesthesia.`
            },
            {
              id: "sl-u11-scifi2",
              type: "theory",
              title: "Neurological Diversity in Fiction",
              content: `including neurological diversity such as autism or synesthesia. Currently, I only see aphantasia in nonfiction, including interesting pieces by creative people who write whole worlds without visualizing them.

I await characters with aphantasia: say, an aphant at a wizarding school learns to cast rich pictures in people’s minds, though not her own mind. I’m surely not the only one wanting such stories...`
            }
          ]
        }
      ]
    },
    {
      id: "u11-text2",
      title: "3. The Text — Thoughts, Feelings & Writing Tips",
      description: "How aphants experience fiction and advice for writers.",
      color: "duo-teal",
      lessons: [
        {
          id: "les-u11-feelings",
          title: "Thoughts and Feelings Instead of Images",
          description: "How aphants derive meaning from speculative fiction.",
          icon: "Heart",
          slides: [
            {
              id: "sl-u11-feel1",
              type: "theory",
              title: "What Aphants Get from Speculative Fiction",
              content: `Thoughts and Feelings Many writers depend upon their mind’s eye; for example, C.S. Lewis’ process is highly visual: “All my seven Narnia books, and my three science fiction books, began with seeing pictures in my head ....The Lion began with a picture of a Faun carrying an umbrella and parcels in a snowy wood.” How magical to carry such an image in one’s mind and deliver it to readers through printed words!

If you are a visual thinker, you might wonder what aphants get from speculative fiction. In short: thoughts and feelings.

It’s no coincidence that, in his book Reasons and Persons, philosopher and aphant Derek Parfit used a science fiction narrative to think through his philosophy of the self. (His teleportation story explores the death of the self in one location while an identical self appears on Mars.) Speculative fiction helps people speculate.

Speculative fiction also helps us feel things, sometimes deeply. One blogger with aphantasia explains how reading fantasy worlds evoke feelings: For me, “picturing” a setting is more of a feeling rather than actually seeing it.`
            },
            {
              id: "sl-u11-feel2",
              type: "theory",
              title: "Language's Musicality & Atmosphere",
              content: `“Atmosphere” is a great word because the atmosphere isn’t something anyone visualizes (or do they?!), yet everyone perceives its distinct character. Language’s musicality generates this atmosphere.

As a child, I listened, enraptured, to my Narnia cassette tapes. Lewis’s words, Sir Michael Hordern’s voice, and the flute and harp accompaniment: these three varieties of complementary music conveyed emotion ... and even motion.

The gravitational orbit of individual sentences pulled me into deeply realized worlds, almost close enough to touch. Describe with Feeling I have two suggestions for writers seeking to reach readers with aphantasia.`
            }
          ]
        },
        {
          id: "les-u11-tips",
          title: "Two Tips for Writers",
          description: "How writers can reach readers with aphantasia.",
          icon: "PenTool",
          slides: [
            {
              id: "sl-u11-tips1",
              type: "theory",
              title: "Tip 1 — Use Setting Description on an As-Needed Basis",
              content: `I have two suggestions for writers seeking to reach readers with aphantasia. First, use the setting description on an as-needed basis.

When a new landscape or cityscape is described in a page-length sketch, I have nothing to graph the data onto (whereas if you describe someone’s eyes, I know where they belong on a face). I digest sensory information best when it is delivered like breadcrumbs, one situated detail at a time.

When Narnia’s Lucy encounters the wardrobe, then the lamppost, then the Faun, I can process the settings with the help of these focalizers.`
            },
            {
              id: "sl-u11-tips2",
              type: "theory",
              title: "Tip 2 — Sometimes Tell How Characters Feel",
              content: `Second, I know you’re supposed to “show, not tell” and not baldly say how characters feel, but sometimes it helps! Since I can’t process in-depth descriptions, I’m sometimes unsure how to feel—is this place ominous?

Lonely? Guiding commentary and character reactions to the setting allow me to focus on one portion of the description and not worry about other details; these devices also give me a sense of the emotion involved.

Often I know I’m missing details, but by feeling the emotional stakes of a scene and grasping the barest`
            },
            {
              id: "sl-u11-tips-quiz",
              type: "quiz",
              title: "Writing Tips for Aphants",
              content: "What is Zarins' first tip for writers who want to reach readers with aphantasia?",
              options: [
                { id: "A", text: "Avoid all description of settings and landscapes.", isCorrect: false, explanation: "She says 'on an as-needed basis', not to avoid it entirely." },
                { id: "B", text: "Use setting description on an as-needed basis, delivering sensory details like breadcrumbs one at a time.", isCorrect: true, explanation: "She says aphants digest sensory information best when it is delivered like breadcrumbs, one situated detail at a time." },
                { id: "C", text: "Use more visual similes and metaphors.", isCorrect: false, explanation: "That might help sighted readers but not aphants who cannot visualize." },
                { id: "D", text: "Replace all descriptions with dialogue.", isCorrect: false, explanation: "Not what she suggests." }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "u11-glossary",
      title: "4. Glossary",
      description: "Key terms from the unit.",
      color: "duo-violet",
      lessons: [
        {
          id: "les-u11-vocab",
          title: "Key Terms",
          description: "Vocabulary from Imagination Without Images.",
          icon: "BookOpen",
          slides: [
            {
              id: "v-aphantasia",
              type: "word_card",
              title: "Word Card",
              content: "Vocabulary",
              wordCard: {
                word: "Aphantasia",
                translation: "The inability to visualize images in the mind's eye; also called 'mind blindness'",
                context: "Term coined in 2015 by Adam Zeman. About 2% of people have aphantasia.",
                example: "I'm an aphant — someone with aphantasia, the condition of lacking a mind's eye and the ability to visualize."
              }
            },
            {
              id: "v-neurodivergent",
              type: "word_card",
              title: "Word Card",
              content: "Vocabulary",
              wordCard: {
                word: "Neurodivergent",
                translation: "Having a brain that processes information in atypical ways (e.g., autism, aphantasia, synesthesia)",
                context: "Used to describe the population of readers who experience fiction differently due to neurological conditions.",
                example: "Diverse perspectives in speculative fiction are increasingly represented, including neurological diversity such as autism or synesthesia."
              }
            },
            {
              id: "v-speculative",
              type: "word_card",
              title: "Word Card",
              content: "Vocabulary",
              wordCard: {
                word: "Speculative Fiction",
                translation: "Fiction that imagines alternative realities, including science fiction, fantasy, and related genres",
                context: "The genre most relevant to aphant readers because it demands visualization.",
                example: "Speculative fiction helps people speculate — and it also helps us feel things, sometimes deeply."
              }
            }
          ]
        }
      ]
    }
  ]
};

import { Section } from '../../types';

export const SEC_U4_I_AM_A_CAT: Section = {
  id: "sec-u4-i-am-a-cat",
  title: "Unit 4: I am a Cat",
  description: "Kon Ichikawa's satirical film adaptation of Natsume Soseki's novel.",
  color: "duo-pink",
  units: [
    {
      id: "u4-part1-intro",
      title: "1. Introduction to the Film",
      description: "Director, Author, and the satirical lens of a feline.",
      color: "duo-pink",
      lessons: [
        {
          id: "les-u4-intro",
          title: "The Creators & The Cat",
          description: "Understanding Ichikawa, Soseki, and Meiji Japan.",
          icon: "Film",
          slides: [
            {
              id: "s-u4-hook",
              type: "quiz",
              title: "A Different Perspective",
              content: "If your pet could talk, what would it probably think about your daily stresses and arguments?",
              options: [
                { id: "A", text: "It would understand and deeply sympathize with my complex problems.", isCorrect: false, explanation: "Unlikely! Animals don't share our abstract anxieties." },
                { id: "B", text: "It would probably find human behavior ridiculous and unnecessarily complicated.", isCorrect: true, explanation: "Correct! This is exactly the premise of 'I am a Cat'. The feline narrator exposes the absurdity of human pretensions." }
              ]
            },
            {
              id: "s-u4-author",
              type: "theory",
              title: "The Author: Natsume Soseki",
              content: `**Natsume Soseki (1867–1916)** is one of Japan's greatest novelists.\n\nBorn in Edo (Tokyo) into a wealthy family, his early life was marred by feeling like an unwanted child. He later became a scholar of British literature.\n\nHis novel *I Am a Cat* (1905) uses a satirical lens to critique the political and social backdrop of **Meiji-era Japan**—a period of rapid, sometimes superficial, Westernization.`
            },
            {
              id: "s-u4-director",
              type: "theory",
              title: "The Director: Kon Ichikawa",
              content: `**Kon Ichikawa (1915–2008)** was a highly versatile Japanese filmmaker, once dubbed the "Japanese Frank Capra."\n\nNoted for a wry humor that often resembles black comedy, Ichikawa was an important modernist who bridged the gap between classic 1950s cinema and the experimental 1960s.\n\nIn 1975, he directed the cinematic adaptation of *I Am a Cat*, bringing Soseki's literary humor to life with his painter-like visual style.`
            },
            {
              id: "s-u4-context",
              type: "theory",
              title: "The Setting: Meiji Japan",
              content: `The story takes place around 1905, during the **Meiji Restoration**. \n\nJapan was transforming from an isolated feudal society into a modern imperialist power. The intellectuals of the time were caught between traditional Japanese culture and the influx of Western philosophy, often leading to pretension and identity crises—which the film brilliantly satirizes.`
            }
          ]
        }
      ]
    },
    {
      id: "u4-part2-plot",
      title: "2. The Story & Satire",
      description: "Observing human follies through a cat's eyes.",
      color: "duo-orange",
      lessons: [
        {
          id: "les-u4-plot1",
          title: "The Master & His Visitors",
          description: "Kushami and the chaotic household.",
          icon: "Users",
          slides: [
            {
              id: "s-u4-plot-1",
              type: "theory",
              title: "The Unnamed Narrator",
              content: `> "I am a cat. As yet I have no name. I’ve no idea where I was born..."\n\nThe film is narrated by a stray cat who adopts the household of **Mr. Kushami**, a middle-school English teacher. The cat observes human life with detached amusement, noting that humans are often "puffed up by their extreme self-satisfaction."`
            },
            {
              id: "s-u4-plot-2",
              type: "theory",
              title: "Mr. Kushami (The Master)",
              content: `Kushami is a lazybones and a ditherer. He constantly complains about his job, suffers from a bad stomach, and wastes huge amounts of time letting himself be distracted by his uselessly chattering friends.\n\nHe embodies the frustrated, ineffective intellectual of the era—full of lofty ideas but incapable of practical action.`
            },
            {
              id: "s-u4-plot-3",
              type: "theory",
              title: "The Pretentious Friend: Meitei",
              content: `Kushami's house is constantly invaded by visitors. The most prominent is **Meitei**, an intensely annoying friend who bombards everyone with fabricated or half-remembered Western quotations (like William James or Marcus Aurelius).\n\nMeitei represents the superficial Westernization of the Japanese elite—pretending to be educated to appear superior.`
            },
            {
              id: "s-u4-quiz-1",
              type: "quiz",
              title: "Comprehension Check",
              content: "What is the primary function of the character Meitei in the story?",
              options: [
                { id: "A", text: "To act as a wise mentor who guides Kushami to success.", isCorrect: false, explanation: "Meitei is annoying and unhelpful, not a wise mentor." },
                { id: "B", text: "To satirize the superficial intellectualism and fake Westernization of the era.", isCorrect: true, explanation: "Meitei's fake erudition perfectly mocks the intellectuals of Meiji Japan." }
              ]
            }
          ]
        },
        {
          id: "les-u4-plot2",
          title: "Subplots & Ending",
          description: "Romance, burglary, and a philosophical demise.",
          icon: "BookOpen",
          slides: [
            {
              id: "s-u4-plot-4",
              type: "theory",
              title: "Kangetsu & The Kaneda Family",
              content: `Another regular visitor is **Kangetsu**, a physics student and violinist who dithers over whether to pursue his doctorate or marry the daughter of the wealthy businessman **Kaneda**.\n\nThe Kaneda family represents the rising, arrogant capitalist class, contrasting sharply with Kushami's poor, intellectual household.`
            },
            {
              id: "s-u4-plot-5",
              type: "theory",
              title: "Domestic Absurdities",
              content: `The cat observes everyday chaos:\n* Kushami's three daughters struggling to eat rice.\n* A burglary where the police bring the thief for a personal apology, only to return some yams.\n* Baseballs constantly hit into the yard from a noisy, militaristic school next door.`
            },
            {
              id: "s-u4-plot-6",
              type: "theory",
              title: "The Cat's Tragicomic End",
              content: `The cat has its own subplots, including a rivalry with a tough neighborhood cat ("Blacky") and a tragic romance.\n\nIn the end, during a celebration, the cat tastes beer, becomes intoxicated, falls into a water barrel, and drowns. As it sinks, it achieves a sense of Buddhist peace—delivering a poignant, philosophical end to the comedy.`
            },
            {
              id: "s-u4-quiz-2",
              type: "quiz",
              title: "Theme Connection",
              content: "How does the film's narrative style support its themes?",
              options: [
                { id: "A", text: "By using an animal's perspective, it strips away human ego and exposes societal follies objectively.", isCorrect: true, explanation: "The cat acts as a detached, honest mirror to human ridiculousness." },
                { id: "B", text: "By focusing on a cat, it becomes a simple children's story without deeper meaning.", isCorrect: false, explanation: "It is a highly sophisticated satire of society and class." }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "u4-part3-mastery",
      title: "3. Vocabulary & Exam Prep",
      description: "Master key terms and the significance of the title.",
      color: "duo-violet",
      lessons: [
        {
          id: "les-u4-vocab",
          title: "Glossary",
          description: "Key words from the text.",
          icon: "Type",
          slides: [
            {
              id: "v-follies",
              type: "word_card",
              content: "Vocabulary",
              wordCard: {
                word: "Follies",
                translation: "Lack of understanding or sense; foolishness.",
                context: "The cat wryly comments on human follies.",
                example: "The play is a comedy about the follies of the upper class."
              }
            },
            {
              id: "v-mordant",
              type: "word_card",
              content: "Vocabulary",
              wordCard: {
                word: "Mordant",
                translation: "(Especially of humor) having or showing a sharp or critical quality; biting.",
                context: "The movie is a real indulgence integrating mordant wit and humour.",
                example: "His mordant sense of humor often offended sensitive listeners."
              }
            },
            {
              id: "v-ditherer",
              type: "word_card",
              content: "Vocabulary",
              wordCard: {
                word: "Ditherer",
                translation: "Someone who finds it difficult to make decisions.",
                context: "Kushami is a lazybones and ditherer.",
                example: "Stop being a ditherer and just pick a restaurant!"
              }
            },
            {
              id: "v-satire",
              type: "word_card",
              content: "Vocabulary",
              wordCard: {
                word: "Satire",
                translation: "The use of humor, irony, exaggeration, or ridicule to expose and criticize people's stupidity or vices.",
                context: "His 1905 novel was a satirical look at Japanese society...",
                example: "The movie is a brilliant satire of modern politics."
              }
            }
          ]
        },
        {
          id: "les-u4-exam",
          title: "Model Questions",
          description: "Practice answering in the format of the exam.",
          icon: "Edit3",
          slides: [
            {
              id: "s-u4-qa1",
              type: "theory",
              title: "Section A (2 Marks) - Title Significance",
              content: `**Q: What is the significance of the film's title 'I am a Cat'?**\n\n**Model Answer:**\nThe title highlights the unique narrative perspective of the film, where human society is observed through the detached, critical eyes of an unnamed feline. This outsider viewpoint allows for a humorous and objective satire of the pretensions, follies, and superficial Westernization of intellectuals in Meiji-era Japan.`
            },
            {
              id: "s-u4-qb1",
              type: "quiz",
              title: "Section B (6 Marks) - Character Analysis",
              content: "Q: How does the film satirize the intellectuals of Meiji-era Japan through its characters?\n\nWhich point is essential to include in a 100-word response?",
              options: [
                { id: "A", text: "Kushami's great success as a painter and writer.", isCorrect: false, explanation: "Kushami is actually a failure who never gets anything done." },
                { id: "B", text: "Meitei's habit of bombarding people with fabricated Western quotations.", isCorrect: true, explanation: "Meitei embodies the superficial, pretentious embrace of Western culture without true understanding." }
              ]
            }
          ]
        }
      ]
    }
  ]
};
import { Section } from '../../types';

export const SEC_U5_WORLDWIDE_EFFORT: Section = {
  id: "sec-u5-worldwide-effort",
  title: "Unit 5: Worldwide Effort Says, Together Science Can",
  description: "Scientific American Podcast — 60-Second Science with Jeremy Farrar",
  color: "duo-blue",
  units: [
    {
      id: "u5-intro",
      title: "1. Introduction",
      description: "Scientific podcasting and its role.",
      color: "duo-blue",
      lessons: [
        {
          id: "les-u5-intro",
          title: "What is Scientific Podcasting?",
          description: "Overview of science communication through podcasts.",
          icon: "Mic",
          slides: [
            {
              id: "u5-overview",
              type: "theory",
              title: "Scientific Podcasting",
              content: `Scientific podcasting has become increasingly important in the modern era of **rapid scientific progress**.\n\n**Key features of science podcasts:**\n- In-depth explanations of complex science topics\n- Expert interviews\n- Real-world applications and case studies\n- Designed to inspire curiosity and support lifelong learning\n\n**Language considerations:**\n- **General audience**: informal, conversational\n- **Expert audience**: technical, detailed\n- Must avoid jargon and use relatable terms`
            },
            {
              id: "u5-sa-overview",
              type: "theory",
              title: "Scientific American Podcast",
              content: `**Scientific American** is one of the most popular science podcast series, covering:\n- Health, climate, space, technology, neuroscience\n\n**Key segments:**\n- **Science Quickly** — short daily podcast for busy learners.\n- **60-Second Science** — delivers rapid science news in ~1 minute.\n- **Science Talk** — extended interviews with scientists and researchers.`
            }
          ]
        }
      ]
    },
    {
      id: "u5-text",
      title: "2. The Podcast Transcript",
      description: "Reading and analysis of the 60-Second Science episode.",
      color: "duo-green",
      lessons: [
        {
          id: "les-u5-transcript",
          title: "Together Science Can",
          description: "The podcast about global scientific collaboration.",
          icon: "Globe",
          slides: [
            {
              id: "u5-tx1",
              type: "theory",
              title: "The Speakers",
              content: `**Steve Mirsky** — host of Scientific American's 60-Second Science.\n\n**Jeremy Farrar** — Director of the **Wellcome Trust**, one of the world's largest non-governmental funders of scientific research.\n\n**Mariette DiChristina** — Editor-in-Chief of Scientific American.\n\n**Setting:** World Economic Forum in **Davos**, during the **Global Science Outlook** discussion (January 23rd).`
            },
            {
              id: "u5-tx2",
              type: "theory",
              title: "Jeremy Farrar's Message",
              content: `Farrar's central statement:\n\n> "Collaboration in Science across the world is the key to a better world in the future. Doesn't matter whether it's drug resistance or climate change or social inequalities. All of these, I believe, can be broached by science."\n\nHe emphasises:\n- **No single organisation** can solve global problems alone.\n- The **"Together Science Can"** campaign brings people from around the world to stand up for shared values.\n- People can **work across borders**, share information, and **make the world a better place**.`
            },
            {
              id: "u5-quiz1",
              type: "quiz",
              title: "What is 'Together Science Can'?",
              content: "What is the 'Together Science Can' campaign about?",
              options: [
                { id: "A", text: "A scientific research grant programme.", isCorrect: false, explanation: "It is not a grant programme." },
                { id: "B", text: "A campaign to encourage global collaboration in science across borders.", isCorrect: true, explanation: "Farrar describes it as bringing people worldwide to stand up for things they care about and work together." },
                { id: "C", text: "A new podcast series by Scientific American.", isCorrect: false, explanation: "It is not a podcast series." },
                { id: "D", text: "A climate change initiative.", isCorrect: false, explanation: "It covers multiple issues beyond climate change." }
              ]
            },
            {
              id: "u5-elements",
              type: "theory",
              title: "Elements of a Successful Science Podcast",
              content: `From the introduction to this unit, the key elements are:\n\n1. **Clearly defined target audience** and specific scientific theme.\n2. **Clear and concise language** — avoiding jargon.\n3. **Storytelling** — narratives, anecdotes, personal experiences.\n4. **Variety of formats** — interviews, conversations, panel discussions.\n5. **Technical precision** — high audio quality, smooth editing.\n6. **Professional presentation** — compelling title, cover art, descriptions.\n7. **Strategic publishing** — regular releases, social media promotion.`
            }
          ]
        }
      ]
    },
    {
      id: "u5-exam",
      title: "3. Exam Preparation",
      description: "Model questions from the question paper.",
      color: "duo-orange",
      lessons: [
        {
          id: "les-u5-exam",
          title: "Model Questions",
          description: "Section A practice.",
          icon: "PenTool",
          slides: [
            {
              id: "u5-secA-q8",
              type: "theory",
              title: "Section A (2 Marks) — Q8",
              content: `**Question:** Which elements contribute to the success and appeal of a science podcast?\n\n**Model Answer:**\nA science podcast's success depends on several elements: (1) **Clear and accessible language** that avoids jargon; (2) **Engaging storytelling** using narratives and expert interviews; (3) **Technical precision** — high audio quality, balanced sound, and smooth editing; and (4) **Strategic promotion** through social media and academic networks. The podcast's appeal also depends on choosing an appropriate format (interviews, panel discussions) that makes science engaging for a broad audience.`
            }
          ]
        }
      ]
    }
  ]
};

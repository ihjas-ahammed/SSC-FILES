import { Section } from '../../types';

export const SEC_U1_HUMAN_RIGHTS: Section = {
  id: "sec-u1-human-rights-un",
  title: "Unit 1: UN Frameworks",
  description: "Integrating Human Rights, Leave No One Behind, and Gender Equality into UN Cooperation Frameworks.",
  color: "duo-blue",
  units: [
    {
      id: "u1-part1-intro",
      title: "1. Introduction & Overview",
      description: "Module overview and introduction to the UN Sustainable Development Group.",
      color: "duo-blue",
      lessons: [
        {
          id: "les-1-1-intro",
          title: "Module 1 Overview",
          description: "Understanding the thematic scope of the module.",
          icon: "Map",
          slides: [
            {
              id: "u1-hook",
              type: "interactive_canvas",
              title: "What are Human Rights?",
              content: "Before we dive into the text, consider this: **Can a society truly develop if even one group of people is left behind?**\n\nThe United Nations argues that *true* sustainability is impossible without universal human rights and gender equality.",
              interactiveCanvasId: "human_rights_scale"
            },
            {
              id: "u1-mod-overview",
              type: "theory",
              title: "Framing Perspectives",
              content: `> "The first module commences with the unit titled Integrating Human Rights, Leave No One Behind, and Gender Equality into UN Cooperation Frameworks... It enhances the argument by supporting the need for inclusivity in all fields."\n\n**The Rest of Module 1:**\n* **Unit 2:** *On the Rule of the Road* (A.G. Gardiner) – Liberty vs. Anarchy.\n* **Unit 3:** *Humanities V/S Science* (Dr. Radhakrishnan) – Knowledge without wisdom is disastrous.\n* **Unit 4:** *I Am a Cat* (Kon Ichikawa) – Satirical critique of societal norms.`
            },
            {
              id: "u1-genre",
              type: "theory",
              title: "What are we reading?",
              content: `**Genre:** Policy Document / Expository Text\n\n**The Core Focus:** \nWe are looking at the foundational ideology of the UN's **2030 Agenda**. Unlike a story or poem, this text sets a *framework*—a set of rules and goals intended to guide 193 nations toward a resilient, equitable future.`
            },
            {
              id: "u1-pre-mcq",
              type: "quiz",
              title: "Pre-reading Check",
              content: "Which of the following best describes the goal of 'Sustainable Development'?",
              options: [
                { id: "A", text: "Maximizing industrial output at all costs.", isCorrect: false, explanation: "This would likely destroy the planet and increase inequality." },
                { id: "B", text: "Economic, social, and technological progress in harmony with nature.", isCorrect: true, explanation: "Exactly. The UN insists that progress cannot come at the cost of the environment or human rights." },
                { id: "C", text: "Providing free technology to all countries.", isCorrect: false, explanation: "While helpful, it is not the holistic definition of sustainable development." }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "u1-part2-text",
      title: "2. The Policy Text",
      description: "Reading the UN's 2030 Agenda framework.",
      color: "duo-green",
      lessons: [
        {
          id: "les-1-1-tx1",
          title: "The 2030 Agenda",
          description: "Poverty, prosperity, and peace.",
          icon: "FileText",
          slides: [
            {
              id: "u1-tx1-1",
              type: "theory",
              title: "Vision for Sustainable Development",
              content: `<div class="policy-doc">
"The United Nations' Department of Economic and Social Affairs envisions sustainable development based on human rights. They have set the 2030 Agenda for this reason."
</div>\n\nThe 2030 Agenda is described as a plan of action for **people, planet and prosperity** with an intention to strengthen universal peace and freedom.`
            },
            {
              id: "u1-tx1-2",
              type: "theory",
              title: "Eradicating Poverty",
              content: `<div class="policy-doc">
"On a larger scale this also aims to eradicate poverty in all its forms and dimensions. In fact, the objective is to free the human race from the tyranny of poverty and to heal and secure our planet."
</div>\n\nTo shift the world onto a sustainable and resilient path, the UN states there must be "bold and transformative steps" unlocking certain principles for the world to follow.`
            },
            {
              id: "u1-tx1-3",
              type: "fill_in_blank",
              title: "Understanding the Framework",
              content: "To facilitate mission 2030, the UN envisages ___ Sustainable Development Goals and 169 targets.",
              blankAnswer: "17"
            },
            {
              id: "u1-tx1-4",
              type: "theory",
              title: "Harmony & Global Solidarity",
              content: `<div class="policy-doc">
"UN aims to ensure prosperous and fulfilling lives for all human beings and also insists the need for economic, social and technological progress in harmony with nature."
</div>\n\nA revitalised Global Partnership for Sustainable Development is needed. Improved international peace and strengthened global solidarity will cater to the needs of the poorest and most vulnerable.`
            }
          ]
        },
        {
          id: "les-1-1-tx2",
          title: "Guiding Principles",
          description: "The six components of resilience and equity.",
          icon: "Target",
          slides: [
            {
              id: "u1-tx2-1",
              type: "theory",
              title: "Women Empowerment",
              content: `<div class="policy-doc">
"The United Nations presents its 2030 agenda with the objective of integrating human rights into sustainable development... The UN acknowledges that without women empowerment, no resilient society could exist."
</div>`
            },
            {
              id: "u1-tx2-2",
              type: "theory",
              title: "The UNSDG Video Context",
              content: `The prescribed video produced by UNSDG highlights human rights that incorporate all people irrespective of **gender, nation, race, class, and other differences**.\n\n*Watch the video here: [UNSDG Video](https://www.youtube.com/watch?v=mHHy1gDn4x8)*`
            },
            {
              id: "u1-tx2-3",
              type: "quiz",
              title: "The Core Assumption",
              content: "According to the UN framework, what is a necessary condition for creating a 'resilient society'?",
              options: [
                { id: "A", text: "Complete elimination of borders.", isCorrect: false, explanation: "Not mentioned as a requirement in this framework." },
                { id: "B", text: "Gender equality and women empowerment.", isCorrect: true, explanation: "The text explicitly states: 'without women empowerment, no resilient society could exist.'" },
                { id: "C", text: "Strict adherence to scientific research.", isCorrect: false, explanation: "While important, the specific social condition mentioned is gender equality." }
              ]
            },
            {
              id: "u1-tx2-4",
              type: "theory",
              title: "The Six Major Components",
              content: `The video and text enhance the idea of sustainable development by incorporating **six major components**:\n\n1. Human rights-based approach (HRBA)\n2. Leave no one behind\n3. Gender equality and women's empowerment\n4. Resilience\n5. Sustainability\n6. Accountability`
            }
          ]
        }
      ]
    },
    {
      id: "u1-part3-vocab",
      title: "3. Glossary & Terms",
      description: "Master the key acronyms and concepts.",
      color: "duo-violet",
      lessons: [
        {
          id: "les-1-1-vocab",
          title: "Official UN Glossary",
          description: "Key terminology required for the exam.",
          icon: "BookOpen",
          slides: [
            {
              id: "v-un",
              type: "word_card",
              content: "Vocabulary",
              wordCard: {
                word: "UN",
                translation: "United Nations",
                context: "An international organization founded in 1945.",
                example: "Currently made up of 193 Member States, the UN and its work are guided by the purposes and principles contained in its founding charter."
              }
            },
            {
              id: "v-hrba",
              type: "word_card",
              content: "Vocabulary",
              wordCard: {
                word: "HRBA",
                translation: "Human Rights-Based Approach",
                context: "A conceptual framework for human development.",
                example: "It is normatively based on international human rights standards and operationally directed to promoting and protecting human rights."
              }
            },
            {
              id: "v-udhr",
              type: "word_card",
              content: "Vocabulary",
              wordCard: {
                word: "UDHR",
                translation: "Universal Declaration of Human Rights",
                context: "A milestone document in the history of human rights.",
                example: "Drafted by representatives from all regions, it set out, for the first time, fundamental human rights to be universally protected."
              }
            },
            {
              id: "v-sdg",
              type: "word_card",
              content: "Vocabulary",
              wordCard: {
                word: "SDG",
                translation: "Sustainable Development Goals",
                context: "Also known as the Global Goals, adopted in 2015.",
                example: "A universal call to action to end poverty, protect the planet, and ensure that by 2030 all people enjoy peace and prosperity."
              }
            }
          ]
        }
      ]
    },
    {
      id: "u1-part4-exam",
      title: "4. Exam Preparation",
      description: "Tackle model questions directly from the question paper.",
      color: "duo-orange",
      lessons: [
        {
          id: "les-1-1-exam",
          title: "Model Questions",
          description: "Section A, B, and C practice.",
          icon: "PenTool",
          slides: [
            {
              id: "u1-q-secA",
              type: "theory",
              title: "Section A (2 Marks) - Q10 from Model Paper",
              content: `**Question:** Expand UDHR and describe its significance.\n\n**Model Answer:**\nUDHR stands for the Universal Declaration of Human Rights. It is a milestone document drafted by global representatives, which, for the first time in history, established fundamental human rights that must be universally protected.`
            },
            {
              id: "u1-q-secB",
              type: "quiz",
              title: "Section B (6 Marks) - Builder",
              content: "Q: Explain the six major components of sustainable development as envisaged by the UN.\n\nWhich of the following is NOT one of the six components?",
              options: [
                { id: "A", text: "Human rights-based approach (HRBA)", isCorrect: false, explanation: "This is one of the components." },
                { id: "B", text: "Leave no one behind", isCorrect: false, explanation: "This is one of the components." },
                { id: "C", text: "Technological superiority", isCorrect: true, explanation: "Correct! The six are: HRBA, Leave no one behind, Gender equality, Resilience, Sustainability, and Accountability." },
                { id: "D", text: "Accountability", isCorrect: false, explanation: "This is one of the components." }
              ]
            }
          ]
        }
      ]
    }
  ]
};
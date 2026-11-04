import { Section } from '../../types';

export const SEC_U12_EMPOWERMENT_UN: Section = {
  id: "sec-u12-empowerment-un",
  title: "Unit 12: UN Women Strategy",
  description: "The Empowerment of Women and Girls with Disabilities: Towards Full and Effective Participation.",
  color: "duo-blue",
  units: [
    {
      id: "u12-part1-intro",
      title: "1. Introduction",
      description: "Understanding the UN Framework and the Twin-Track Approach.",
      color: "duo-blue",
      lessons: [
        {
          id: "les-u12-intro",
          title: "Strategy & Scope",
          description: "An overview of UN Women's strategy.",
          icon: "ShieldCheck",
          slides: [
            {
              id: "s-u12-hook",
              type: "interactive_canvas",
              title: "The Power of Intersectionality",
              content: "What happens when someone faces not just one, but multiple overlapping forms of discrimination?\n\nUN Women recognizes that 'Women with Disabilities' are not a homogenous group. Tap the buttons below to see how intersecting identities compound systemic barriers.",
              interactiveCanvasId: "intersectionality_web"
            },
            {
              id: "s-u12-intro-1",
              type: "theory",
              title: "The United Nations",
              content: `> "The United Nations (UN) is an international organization founded in 1945 to promote peace, security, human rights, and sustainable development across the globe. With 193 member states, the UN operates through various specialized agencies, programs, and frameworks aimed at addressing global challenges such as poverty, gender inequality, climate change, and conflict resolution. It plays a critical role in setting international norms and standards through conventions, treaties, and resolutions, ensuring that human rights and equality are central to development agendas."`
            },
            {
              id: "s-u12-intro-2",
              type: "theory",
              title: "The UN Women Strategy",
              content: `> "The strategy titled “The Empowerment of Women and Girls with Disabilities: Towards Full and Effective Participation and Gender Equality” was introduced by UN Women as part of its commitment to achieve gender equality and the empowerment of all women and girls."\n\n> "This strategy aligns with the principles of the Convention on the Elimination of All Forms of Discrimination against Women (CEDAW), the Convention on the Rights of Persons with Disabilities (CRPD), and the 2030 Agenda for Sustainable Development."`
            },
            {
              id: "s-u12-intro-3",
              type: "theory",
              title: "Primary Aim & Twin-Track Approach",
              content: `> "The primary aim of this strategy is to remove systemic barriers and promote full and equal participation of women and girls with disabilities across the humanitarian-development continuum."\n\n> "By adopting a twin-track approach—mainstreaming disability inclusion while also implementing targeted interventions—the strategy aspires to transform societal structures and attitudes, ensuring that no one is left behind in the pursuit of gender equality and sustainable development."`
            },
            {
              id: "s-u12-pre-mcq",
              type: "quiz",
              title: "Concept Check",
              content: "What does the 'twin-track approach' refer to in this strategy?",
              options: [
                { id: "A", text: "Providing funding for both education and healthcare simultaneously.", isCorrect: false, explanation: "While good, this isn't the definition of the twin-track approach." },
                { id: "B", text: "Mainstreaming disability inclusion in all general policies while simultaneously running targeted interventions specifically for disabled women.", isCorrect: true, explanation: "It combines broad integration (mainstreaming) with specific, focused action (targeted)." }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "u12-part2-text1",
      title: "2. The Strategy & Demographics",
      description: "Reading Section 1.1 and 1.2 of the Policy Document.",
      color: "duo-violet",
      lessons: [
        {
          id: "les-u12-tx1",
          title: "1.1 About the Strategy",
          description: "The structural goals of UN Women.",
          icon: "FileText",
          slides: [
            {
              id: "s-u12-tx1-1",
              type: "theory",
              title: "Strategic Inclusion",
              content: `<div class="policy-doc">
"UN Women’s Strategy... aims to strengthen the inclusion of the rights of women and girls with disabilities in UN Women’s work to achieve gender equality, the empowerment of women and girls, and the realization of its mandate, and international commitments including the Beijing Declaration and Platform for Action, the Convention on the Elimination of All Forms of Discrimination against Women, and the Convention on the Rights of Persons with Disabilities."
</div>`
            },
            {
              id: "s-u12-tx1-2",
              type: "theory",
              title: "Grounded in the 2030 Agenda",
              content: `<div class="policy-doc">
"The strategy is grounded in the 2030 Agenda for Sustainable Development to leave no one behind, the UN Women’s Strategic Plan 2018-2021, and commitments made in the common chapter to the Strategic Plans of UNDP, UNFPA, UNICEF and UN Women..."
</div>`
            },
            {
              id: "s-u12-tx1-3",
              type: "theory",
              title: "An Inclusive Approach",
              content: `<div class="policy-doc">
"An inclusive approach is essential for the effective implementation of this strategy. This can be done by (a) capitalizing on UN Women’s comparative and collaborative advantages... (b) the full inclusion and meaningful participation of women and girls with disabilities... and (c) the formulation, implementation and evaluation of other corporate strategies with an intersectional lens, including the Strategy for Inclusion and Visibility of Indigenous Women..."
</div>`
            },
            {
              id: "s-u12-tx1-4",
              type: "fill_in_blank",
              title: "A Required Shift",
              content: "This will require a ___ shift, where all women and girls with disabilities... are included and considered equal partners across the humanitarian-development continuum.",
              blankAnswer: "paradigm"
            },
            {
              id: "s-u12-tx1-5",
              type: "theory",
              title: "The Multi-Pronged Approach",
              content: `<div class="policy-doc">
"Building on the twin-track approach... the Strategy proposes a multi-pronged approach across all areas of work. This approach consists of (a) mainstreaming gender, age and disability perspectives, (b) initiatives targeting women and girls with disabilities, and (c) inclusion of women and girls of all ages with disabilities within UN Women..."
</div>`
            }
          ]
        },
        {
          id: "les-u12-tx2",
          title: "1.2 About Women & Girls with Disabilities",
          description: "Statistics and the impact of intersecting identities.",
          icon: "Users",
          slides: [
            {
              id: "s-u12-tx2-1",
              type: "theory",
              title: "Global Prevalence",
              content: `<div class="policy-doc">
"It is estimated that more than one billion people in the world experience some form of disability, and that the average prevalence rate in the female population 18 years and older is 19.2 per cent, compared to 12 per cent for males."
</div>`
            },
            {
              id: "s-u12-tx2-2",
              type: "theory",
              title: "Not a Homogenous Group",
              content: `<div class="policy-doc">
"Women with disabilities are not a homogenous group. They experience various types of impairments, including physical, psychosocial, intellectual and sensory conditions that may or may not come with functional limitations."
</div>`
            },
            {
              id: "s-u12-tx2-3",
              type: "theory",
              title: "Intersecting Identities",
              content: `<div class="policy-doc">
"In addition to this, the diversity of women and girls with disabilities includes those with multiple and intersecting identities, such as being from different ethnic, religious and racial backgrounds; refugee, migrant, asylum-seeking and internally displaced women; LGBTQI+ persons; women living with and affected by HIV; young and older women; and widowed women, across all contexts."
</div>`
            },
            {
              id: "s-u12-tx2-4",
              type: "theory",
              title: "The Extreme Margins",
              content: `<div class="policy-doc">
"As a consequence of multiple identities, some women and girls with disabilities are pushed to the extreme margins and experience profound discriminations. Systemic barriers and exclusion lead to lower economic and social status; increased risk of violence and abuse including sexual violence; early and forced marriage discrimination..."
</div>`
            },
            {
              id: "s-u12-tx2-5",
              type: "theory",
              title: "Historical Neglect",
              content: `<div class="policy-doc">
"International and national laws and policies on the rights of persons with disabilities have historically neglected aspects related to gender equality. Similarly, laws and policies addressing gender equality have traditionally ignored the rights of women and girls with disabilities... [This] continues to perpetuate their invisibility and marginalization."
</div>`
            },
            {
              id: "s-u12-quiz-1",
              type: "quiz",
              title: "Comprehension Check",
              content: "What is the consequence of historical laws treating 'gender equality' and 'disability rights' as completely separate issues?",
              options: [
                { id: "A", text: "It allowed both movements to succeed faster independently.", isCorrect: false, explanation: "The text states the opposite." },
                { id: "B", text: "It perpetuated the invisibility and marginalization of women with disabilities.", isCorrect: true, explanation: "Because gender laws ignored disability, and disability laws ignored gender, women with disabilities fell through the cracks." }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "u12-part3-text2",
      title: "3. Barriers & Frameworks",
      description: "Reading Section 1.3 and 1.4 of the Policy Document.",
      color: "duo-orange",
      lessons: [
        {
          id: "les-u12-tx3",
          title: "1.3 Systemic Barriers and Gaps",
          description: "The specific hurdles preventing full participation.",
          icon: "ShieldAlert",
          slides: [
            {
              id: "s-u12-tx3-1",
              type: "theory",
              title: "Array of Systemic Barriers",
              content: `<div class="policy-doc">
"Women and girls with disabilities, in all their diversity, encounter challenges to participation that arise from an array of systemic barriers, including of a legal, physical, informational, communicational and attitudinal nature."
</div>`
            },
            {
              id: "s-u12-tx3-2",
              type: "theory",
              title: "Discriminatory Attitudes",
              content: `<div class="policy-doc">
"Discriminatory attitudes present additional barriers to education, employment, and health care, including sexual and reproductive health, as well as social, political and cultural participation and access to justice. These attitudes can manifest in or be caused by harmful gender-based prejudices, practices and cultural norms..."
</div>`
            },
            {
              id: "s-u12-tx3-3",
              type: "theory",
              title: "Funding Gaps",
              content: `<div class="policy-doc">
"Organizations of women and girls with disabilities find it difficult to access funding, as their work may not fit within the standard portfolios of women’s rights or disability rights funders or funding mechanisms are inflexible and do not accommodate them. Intentional investment... is critical."
</div>`
            },
            {
              id: "s-u12-tx3-4",
              type: "theory",
              title: "Box 1: CRPD Concepts",
              content: `**Definitions from the CRPD:**\n\n* **Discrimination:** Any distinction, exclusion or restriction on the basis of disability which has the purpose or effect of impairing or nullifying the recognition, enjoyment or exercise... of all human rights.\n* **Disability:** An evolving concept which results from the interaction between persons with impairments and attitudinal and environmental barriers that hinders their full and effective participation in society.`
            }
          ]
        },
        {
          id: "les-u12-tx4",
          title: "1.4 Normative Frameworks (Part 1)",
          description: "CEDAW, CRPD, and CRC.",
          icon: "BookOpen",
          slides: [
            {
              id: "s-u12-tx4-1",
              type: "theory",
              title: "Global Treaties",
              content: `<div class="policy-doc">
"Several international, national and regional norms and standards... directly or implicitly call for the inclusion and empowerment of all women and girls with disabilities across their life course."
</div>\n\nThese include CEDAW, CRPD, CRC, the Beijing Declaration, and the 2030 Agenda.`
            },
            {
              id: "s-u12-tx4-2",
              type: "theory",
              title: "CEDAW & CRPD",
              content: `<div class="policy-doc">
"While CEDAW does not explicitly refer to women and girls with disabilities, the General Recommendation... notes that women with disabilities are doubly marginalized..."\n\n"The CRPD includes equality between men and women as one of its general principles. Article 6 on women and girls with disabilities recognizes the multiple forms of discrimination faced..."
</div>`
            },
            {
              id: "s-u12-tx4-3",
              type: "theory",
              title: "Box 2: Article 6 (CRPD)",
              content: `**Article 6 - Women with disabilities**\n\n1. States Parties recognize that women and girls with disabilities are subject to multiple discrimination, and in this regard shall take measures to ensure the full and equal enjoyment by them of all human rights...\n2. States Parties shall take all appropriate measures to ensure the full development, advancement and empowerment of women...`
            },
            {
              id: "s-u12-tx4-4",
              type: "theory",
              title: "CRC & Beijing Declaration",
              content: `<div class="policy-doc">
"The CRC recognizes the rights of children with disabilities in Article 23. The Article states that children who have any kind of disability have the right to special care and support..."\n\n"The Beijing Declaration and Platform for Action, identifies specific actions to ensure the empowerment of women and girls with disabilities in various areas..."
</div>`
            }
          ]
        },
        {
          id: "les-u12-tx5",
          title: "1.4 Normative Frameworks (Part 2)",
          description: "Addis Ababa, Sendai, and the 2030 Agenda.",
          icon: "Globe",
          slides: [
            {
              id: "s-u12-tx5-1",
              type: "theory",
              title: "Addis Ababa & Sendai",
              content: `<div class="policy-doc">
"The Addis Ababa Action Agenda commits to providing social protection and access to education, employment and technologies for persons with disabilities..."\n\n"The Sendai Framework for Disaster Risk Reduction 2015–2030 emphasizes the importance of disability-inclusive disaster risk reduction."
</div>`
            },
            {
              id: "s-u12-tx5-2",
              type: "theory",
              title: "Refugees & Urban Agendas",
              content: `<div class="policy-doc">
"The New York Declaration for Refugees and Migrants recognizes the vulnerability of various at-risk groups... and the significant contribution and leadership of women..."\n\n"The New Urban Agenda implicitly applies... by recognizing the multiple forms of discrimination faced by women and girls, and persons with disabilities..."
</div>`
            },
            {
              id: "s-u12-tx5-3",
              type: "theory",
              title: "The 2030 Agenda",
              content: `<div class="policy-doc">
"The 2030 Agenda for Sustainable Development recognizes that systematic mainstreaming of gender based perspectives is crucial to making progress across all the Sustainable Development Goals (SDGs) and targets, and calls for the empowerment of persons with disabilities."
</div>`
            },
            {
              id: "s-u12-quiz-2",
              type: "quiz",
              title: "Document Matching",
              content: "Which framework explicitly emphasizes disability-inclusive disaster risk reduction?",
              options: [
                { id: "A", text: "The Sendai Framework", isCorrect: true, explanation: "The Sendai Framework focuses specifically on disaster risk reduction." },
                { id: "B", text: "The New Urban Agenda", isCorrect: false, explanation: "This agenda focuses on urban planning and infrastructure." }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "u12-part4-mastery",
      title: "4. Vocabulary & Exam Prep",
      description: "Master key terms from the Glossary and tackle model questions.",
      color: "duo-green",
      lessons: [
        {
          id: "les-u12-vocab",
          title: "Official Glossary",
          description: "Key terminology provided in the text.",
          icon: "Type",
          slides: [
            {
              id: "v-u12-1",
              type: "word_card",
              content: "Vocabulary",
              wordCard: {
                word: "Inclusion",
                translation: "The practice of ensuring all people, regardless of differences, have equal opportunities and access.",
                context: "An inclusive approach is essential for the effective implementation of this strategy.",
                example: "Workplace inclusion means making reasonable accommodations for disabled employees."
              }
            },
            {
              id: "v-u12-2",
              type: "word_card",
              content: "Vocabulary",
              wordCard: {
                word: "Paradigm Shift",
                translation: "A fundamental change in approach or underlying assumptions.",
                context: "This will require a paradigm shift, where all women and girls with disabilities... are considered equal partners.",
                example: "Moving from charity models to human rights models requires a paradigm shift."
              }
            },
            {
              id: "v-u12-3",
              type: "word_card",
              content: "Vocabulary",
              wordCard: {
                word: "Twin-track Approach",
                translation: "A strategy that combines targeted actions for a specific group with mainstream actions for all groups.",
                context: "Building on the twin-track approach for gender equality...",
                example: "The UN uses a twin-track approach to both mainstream disability rights and fund specific disabled-focused initiatives."
              }
            },
            {
              id: "v-u12-4",
              type: "word_card",
              content: "Vocabulary",
              wordCard: {
                word: "Disaggregation",
                translation: "Separating data into subcategories, such as by gender or disability, for detailed analysis.",
                context: "...failure to prioritize the collection of data... and to disaggregate and report it accordingly continues to perpetuate their invisibility.",
                example: "Without data disaggregation, we cannot see how poverty uniquely affects disabled women."
              }
            },
            {
              id: "v-u12-5",
              type: "word_card",
              content: "Vocabulary",
              wordCard: {
                word: "Habilitation",
                translation: "Training or therapy to help a person learn new skills or improve existing ones.",
                context: "These barriers include... inadequate access to justice, education, rehabilitation, habilitation, and personal and assistive technology.",
                example: "Habilitation services help children with developmental disabilities learn to walk or communicate."
              }
            }
          ]
        },
        {
          id: "les-u12-exam",
          title: "Model Questions",
          description: "Practice answering in the exact format of your university exam.",
          icon: "Edit3",
          slides: [
            {
              id: "s-u12-qa1",
              type: "theory",
              title: "Section A (2 Marks) - Model Question",
              content: `**Q: What are some systemic barriers that prevent full participation of women and girls with disabilities?**\n\n**Model Answer:**\nWomen and girls with disabilities encounter compounded systemic barriers including legal gaps, physical inaccessibility, lack of communicational resources, and deeply rooted attitudinal prejudices. These discriminatory norms exclude them from education, employment, and political participation, pushing them to the extreme margins of society.`
            },
            {
              id: "s-u12-qc1",
              type: "theory",
              title: "Section C (10 Marks) - Essay Plan",
              content: `**Q: Examine how international normative frameworks and global agendas contribute to the inclusion and empowerment of women and girls with disabilities.**\n\n**Essay Plan:**\n1. **Intro:** Define international normative frameworks (treaties, conventions) as the architectures that set global standards for human rights. Mention UN Women's strategy.\n2. **Key Conventions (CEDAW & CRPD):** Explain how CEDAW addresses marginalization of women, while CRPD (Article 6) explicitly recognizes the multiple forms of discrimination faced by women and girls with disabilities.\n3. **The 2030 Agenda (SDGs):** Highlight the core principle of "Leave No One Behind". Discuss how it mainstreams gender and disability perspectives across goals like poverty, education, and economic growth.\n4. **Context-Specific Frameworks:** Briefly mention the Sendai Framework (disaster risk reduction) and the New York Declaration (protecting vulnerable refugees) as examples of operationalizing these norms in crises.\n5. **Conclusion:** Summarize how these frameworks demand a "paradigm shift"—moving from viewing women with disabilities as objects of charity to active rights-holders and equal partners in development.`
            }
          ]
        }
      ]
    }
  ]
};
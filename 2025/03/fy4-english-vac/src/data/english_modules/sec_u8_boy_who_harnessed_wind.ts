import { Section } from '../../types';

export const SEC_U8_BOY_WHO_HARNESSED_WIND: Section = {
  id: "sec-u8-boy-who-harnessed-wind",
  title: "Unit 8: The Boy Who Harnessed the Wind",
  description: "Chiwetel Ejiofor's film adaptation of William Kamkwamba's inspiring true story.",
  color: "duo-orange",
  units: [
    {
      id: "u8-part1-intro",
      title: "1. Introduction",
      description: "Background on the film and its director.",
      color: "duo-orange",
      lessons: [
        {
          id: "les-u8-intro",
          title: "The Director & Theme",
          description: "Understanding Chiwetel Ejiofor and the film's premise.",
          icon: "Film",
          slides: [
            {
              id: "s-u8-hook",
              type: "interactive_canvas",
              title: "Harnessing Nature",
              content: "Imagine your entire village is starving due to a drought, and you have no money for school. How do you save your community using only garbage and library books?",
              interactiveCanvasId: "windmill_view"
            },
            {
              id: "s-u8-author",
              type: "theory",
              title: "The Director: Chiwetel Ejiofor",
              content: `**Chiwetel Ejiofor** is a celebrated British actor of Nigerian descent. Born in 1977, he trained at the London Academy of Music and Dramatic Art (LAMDA).\n\nKnown for his Oscar-nominated role in *12 Years a Slave*, he made his directorial debut with *The Boy Who Harnessed the Wind* (2019), adapting the inspiring true story of William Kamkwamba.`
            },
            {
              id: "s-u8-genre",
              type: "theory",
              title: "What are we reading?",
              content: `**Genre:** Biographical Film Narrative\n\n**The Core Themes:**\n* **Scientific Temper:** Using knowledge to solve real-world problems.\n* **Resilience & Innovation:** Building solutions against extreme poverty and famine.\n* **Education:** The life-saving power of self-directed learning.`
            },
            {
              id: "s-u8-pre-mcq",
              type: "quiz",
              title: "Pre-reading Check",
              content: "What does it mean to 'harness' the wind?",
              options: [
                { id: "A", text: "To protect oneself from storms and hurricanes.", isCorrect: false, explanation: "Harnessing implies using or taking control of, not just hiding from." },
                { id: "B", text: "To capture its energy and use it to do productive work.", isCorrect: true, explanation: "Correct! Like a horse in a harness, the wind is put to work—in this case, to pump water." }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "u8-part2-text",
      title: "2. The Narrative",
      description: "Reading the text about Ejiofor and William's journey.",
      color: "duo-green",
      lessons: [
        {
          id: "les-u8-tx1",
          title: "The Actor & The Film",
          description: "Ejiofor's career and the movie's reception.",
          icon: "User",
          slides: [
            {
              id: "s-u8-tx1-1",
              type: "theory",
              title: "A Celebrated Actor",
              content: `> "Chiwetel Ejiofor is a celebrated British actor of Nigerian descent, renowned for his captivating performances on stage and screen. Born on July 10, 1977, in London, Ejiofor developed a passion for acting at a young age and honed his craft at the prestigious London Academy of Music and Dramatic Art (LAMDA). With a career spanning over two decades, he has earned critical acclaim for his versatility, bringing depth and nuance to every role he undertakes. From his breakout performance in Dirty Pretty Things (2002) to his Oscar-nominated portrayal of Solomon Northup in 12 Years a Slave (2013), Ejiofor has established himself as one of the most compelling actors of his generation."`
            },
            {
              id: "s-u8-tx1-2",
              type: "theory",
              title: "Directorial Debut",
              content: `> "Beyond his remarkable film career, Chiwetel Ejiofor has also made significant contributions to theater and television, showcasing his extraordinary range as a performer. He has starred in acclaimed productions such as Othello and Everyman, earning accolades for his commanding stage presence. In recent years, Ejiofor has expanded his creative endeavors into directing and writing, further cementing his status as a multifaceted artist. Known for his eloquence, intelligence, and dedication to storytelling, he continues to captivate audiences worldwide while using his platform to advocate for diversity and social justice in the entertainment industry. Whether in historical dramas, sci-fi epics, or intimate character studies, Ejiofor's work remains unforgettable."`
            },
            {
              id: "s-u8-tx1-3",
              type: "theory",
              title: "The Adaptation",
              content: `> "The Boy Who Harnessed the Wind (2019) is a cinematic adaptation of the memoir of the same name authored by William Kamkwamba and Bryan Mealer. The film marks the directorial debut of Chiwetel Ejiofor, who also undertook the roles of screenwriter and lead actor. Representing the United Kingdom, the film was submitted for consideration in the Best International Feature Film category at the 92nd Academy Awards, though it did not secure a nomination. Critical reception was predominantly positive, with particular commendation directed toward Ejiofor's direction and the performances delivered by the cast."`
            }
          ]
        },
        {
          id: "les-u8-tx2",
          title: "William's Struggle",
          description: "Education disrupted by poverty.",
          icon: "Search",
          slides: [
            {
              id: "s-u8-tx2-1",
              type: "theory",
              title: "A Keen Interest",
              content: `> "William Kamkwamba, born in Kasungu, Malawi, is a young schoolboy from a farming family residing in the nearby village of Wimbe. From an early age, William displays a keen interest in electronics, often repairing radios for neighbours and friends. He spends much of his free time in the local junkyard, searching for usable electronic components."`
            },
            {
              id: "s-u8-tx2-2",
              type: "theory",
              title: "Expelled from School",
              content: `> "Despite his intellectual curiosity and talent, William's education is abruptly disrupted when his parents can no longer afford the tuition fees, leading to his expulsion from school. Determined to continue learning, William coerces his science teacher, Mr. Kachigunda—who is secretly involved in a relationship with William's sister, Annie—into allowing him to attend classes unofficially and access the school library."`
            },
            {
              id: "s-u8-tx2-3",
              type: "theory",
              title: "The Foundation",
              content: `> "It is here that William encounters texts on electrical engineering and energy generation, which form the foundation of his later innovations."`
            },
            {
              id: "s-u8-tx2-4",
              type: "quiz",
              title: "Comprehension Check",
              content: "How does William manage to keep studying despite being expelled?",
              options: [
                { id: "A", text: "He blackmails his teacher to let him use the library.", isCorrect: true, explanation: "He uses the teacher's secret relationship with his sister to gain unofficial access to the library." },
                { id: "B", text: "He gets a scholarship from the government.", isCorrect: false, explanation: "He relies on his own resilience and informal arrangements." }
              ]
            }
          ]
        },
        {
          id: "les-u8-tx3",
          title: "Drought and Desperation",
          description: "The devastating famine in Wimbe.",
          icon: "CloudRain",
          slides: [
            {
              id: "s-u8-tx3-1",
              type: "theory",
              title: "The Famine",
              content: `> "As the mid-2000s bring prolonged drought, Wimbe is thrust into a severe famine that devastates local agriculture and leads to widespread hunger, looting, and civil unrest. The already fragile economic condition of the country is further worsened by global factors, including the ripple effects of the September 11 attacks."`
            },
            {
              id: "s-u8-tx3-2",
              type: "theory",
              title: "Annie's Departure",
              content: `> "William's family suffers the loss of their limited grain reserves to theft, intensifying their vulnerability. In the face of growing desperation, Annie elopes with Mr. Kachigunda, believing her departure will reduce the burden on her family. Before leaving, she fulfils William's request by passing along a vital bicycle component from Kachigunda, which proves instrumental in his forthcoming invention."`
            },
            {
              id: "s-u8-tx3-3",
              type: "fill_in_blank",
              title: "Keyword Check",
              content: "The village of Wimbe faced widespread hunger and civil ___ due to the prolonged drought.",
              blankAnswer: "unrest"
            }
          ]
        },
        {
          id: "les-u8-tx4",
          title: "Constructing the Windmill",
          description: "Innovation born from adversity.",
          icon: "Zap",
          slides: [
            {
              id: "s-u8-tx4-1",
              type: "theory",
              title: "The Prototype",
              content: `> "Motivated by a desire to help his village, William devises a plan to build a windmill capable of powering a water pump to irrigate crops. His small prototype demonstrates success, but scaling the project requires dismantling the family's bicycle—the only one in the village and a critical asset."`
            },
            {
              id: "s-u8-tx4-2",
              type: "theory",
              title: "Tragedy and Reconciliation",
              content: `> "His father, Trywell Kamkwamba, initially dismisses the idea as futile and compelling William to work in the fields instead. The family's hardships worsen with the death of William's beloved dog, Khamba, from starvation, marking a moment of emotional and symbolic loss. This tragedy prompts William's mother, Agnes, to advocate on his behalf, urging Trywell to reconsider.\n\n> The turning point arrives when William and Trywell reconcile during Khamba's burial."`
            },
            {
              id: "s-u8-tx4-3",
              type: "theory",
              title: "The Transformative Solution",
              content: `> "With Trywell's permission and support from his friends, the remaining villagers, and the salvaged bicycle component from Kachigunda, William constructs a full-scale windmill. The machine successfully powers the water pump, enabling the cultivation of crops and offering a transformative solution for the community."`
            },
            {
              id: "s-u8-tx4-4",
              type: "theory",
              title: "The Power of Innovation",
              content: `> "William's initiative, grounded in self-taught knowledge and resilience, not only addresses a critical survival need but also embodies the power of innovation in contexts of extreme adversity."`
            },
            {
              id: "s-u8-tx4-5",
              type: "quiz",
              title: "Thematic Reflection",
              content: "What does the father's bicycle symbolize in this story?",
              options: [
                { id: "A", text: "The ultimate sacrifice of a crucial existing asset for the risky hope of a better future.", isCorrect: true, explanation: "Dismantling their only transport was a huge risk, highlighting the desperation and ultimate leap of faith." },
                { id: "B", text: "The father's wealth and superiority over the other villagers.", isCorrect: false, explanation: "It represents survival, not mere wealth." }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "u8-part3-mastery",
      title: "3. Vocabulary & Exam Prep",
      description: "Master key terms and tackle exam questions.",
      color: "duo-violet",
      lessons: [
        {
          id: "les-u8-vocab",
          title: "Glossary",
          description: "Key words from the text.",
          icon: "Type",
          slides: [
            {
              id: "v-u8-1",
              type: "word_card",
              content: "Vocabulary",
              wordCard: {
                word: "Coerces",
                translation: "Persuades or forces someone to do something by using pressure or threats.",
                context: "> \"William coerces his science teacher... into allowing him to attend classes unofficially...\"",
                example: "He coerced his friend into helping him build the prototype."
              }
            },
            {
              id: "v-u8-2",
              type: "word_card",
              content: "Vocabulary",
              wordCard: {
                word: "Civil Unrest",
                translation: "Disorder or conflict among citizens, often resulting in protests or riots.",
                context: "> \"...devastates local agriculture and leads to widespread hunger, looting, and civil unrest.\"",
                example: "The severe food shortage led to widespread civil unrest."
              }
            },
            {
              id: "v-u8-3",
              type: "word_card",
              content: "Vocabulary",
              wordCard: {
                word: "Prototype",
                translation: "An initial model of something from which other forms are developed.",
                context: "> \"His small prototype demonstrates success...\"",
                example: "Before building the final machine, they tested a small prototype."
              }
            },
            {
              id: "v-u8-4",
              type: "word_card",
              content: "Vocabulary",
              wordCard: {
                word: "Vulnerability",
                translation: "The state of being exposed to the possibility of being attacked or harmed, either physically or emotionally.",
                context: "> \"...suffers the loss of their limited grain reserves to theft, intensifying their vulnerability.\"",
                example: "The prolonged drought increased the village's vulnerability to famine."
              }
            },
            {
              id: "v-u8-5",
              type: "word_card",
              content: "Vocabulary",
              wordCard: {
                word: "Salvaged",
                translation: "Saved or recovered something from damage or destruction.",
                context: "> \"...and the salvaged bicycle component from Kachigunda...\"",
                example: "They salvaged metal parts from the junkyard to build the pump."
              }
            }
          ]
        },
        {
          id: "les-u8-exam",
          title: "Model Questions",
          description: "Practice answering in the format of the exam.",
          icon: "Edit3",
          slides: [
            {
              id: "s-u8-qa1",
              type: "theory",
              title: "Section A (2 Marks) - Model Question",
              content: `**Q: Why was William Kamkwamba forced to leave school?**\n\n**Model Answer:**\nWilliam was forced to leave school because his parents could no longer afford to pay his tuition fees. The severe drought and subsequent famine had devastated his family's farming income, making continued formal education financially impossible.`
            }
          ]
        }
      ]
    }
  ]
};
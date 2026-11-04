import { Section } from '../../types';

export const SEC_U7_IN_THE_NAME_OF_SCIENCE: Section = {
  id: "sec-u7-in-the-name-of-science",
  title: "Unit 7: In the Name of Science",
  description: "Lori Alexander's biographical narrative on Antony van Leeuwenhoek.",
  color: "duo-blue",
  units: [
    {
      id: "u7-part1-intro",
      title: "1. Introduction",
      description: "Background on the author, illustrator, and the microscopic world.",
      color: "duo-blue",
      lessons: [
        {
          id: "les-u7-intro",
          title: "Author & Context",
          description: "Meet Lori Alexander and Antony van Leeuwenhoek.",
          icon: "Search",
          slides: [
            {
              id: "s-u7-hook",
              type: "interactive_canvas",
              title: "The Invisible World",
              content: "Before 1670, scientists believed that insects simply 'appeared' from mud or rotting garbage out of nowhere. \n\nIt took one curious draper with a homemade lens to prove them all wrong.",
              interactiveCanvasId: "microscope_focus"
            },
            {
              id: "s-u7-author",
              type: "theory",
              title: "The Author & Illustrator",
              content: `**Lori Alexander** is a children's author based in Tucson, Arizona, known for her engaging nonfiction. \n\n**Vivien Mildenberger** is an award-winning illustrator based near Nashville, Tennessee, who brings youthful nonfiction to life with a unique, whimsical style.\n\nTogether, they created *All in a Drop: How Antony van Leeuwenhoek Discovered an Invisible World*, which won multiple honors including a Junior Library Guild Selection.`
            },
            {
              id: "s-u7-context",
              type: "theory",
              title: "Antony van Leeuwenhoek",
              content: `Chapter Eight, titled "In the Name of Science," highlights the bold and curious spirit of **Antony van Leeuwenhoek**, a self-taught scientist from Delft, Netherlands.\n\nHe challenged widely accepted beliefs of the time—like spontaneous generation—through detailed observations and simple, creative tests. Despite neighbors calling his work "magic," his fearless curiosity changed how the world understood life itself.`
            },
            {
              id: "s-u7-pre-mcq",
              type: "quiz",
              title: "Pre-reading Check",
              content: "What does 'spontaneous generation' mean in the context of historical science?",
              options: [
                { id: "A", text: "The idea that living creatures could be magically formed from nonliving things like dirt or trash.", isCorrect: true, explanation: "Yes! People used to think maggots and insects just magically appeared out of rotting garbage." },
                { id: "B", text: "The process of cells dividing rapidly.", isCorrect: false, explanation: "This is mitosis. Spontaneous generation is an obsolete scientific theory." }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "u7-part2-experiments",
      title: "2. The Experiments",
      description: "Reading Chapter 8: From socks of lice to anthills.",
      color: "duo-green",
      lessons: [
        {
          id: "les-u7-tx1",
          title: "The Black Sock",
          description: "Challenging spontaneous generation.",
          icon: "FileText",
          slides: [
            {
              id: "s-u7-tx1-1",
              type: "theory",
              title: "Dutch Tolerance",
              content: `> "Despite the great honor of his being inducted into the Royal Society, not everyone in Delft thinks Antony's discoveries are real. Some call his work magic. Some say Antony shows people what doesn't exist. Fortunately, the Dutch are tolerant of different ways of thinking. In other countries, speaking out or suggesting ideas contrary to existing beliefs can have harsh outcomes, including imprisonment or even death... Antony works without fear."`
            },
            {
              id: "s-u7-tx1-2",
              type: "theory",
              title: "From Observation to Experiment",
              content: `> "Most of Antony's research so far has been strictly observation—looking at a sample and writing down what he sees. But Antony's curiosity continues to grow. He is ready to conduct some simple experiments—tests to find answers to specific questions. And these experiments are wild, indeed!"`
            },
            {
              id: "s-u7-tx1-3",
              type: "theory",
              title: "The Lice Experiment",
              content: `> "Antony wants to know how insects are born. Do they simply appear out of mud, rotting garbage, or dead animal flesh, through spontaneous generation, as most people believe? Antony doesn't think so. He puts two lice into a tight black sock and wears it around the house. After six days, he finds the lice have laid ninety eggs. The white eggs are easy to count on the black sock."`
            },
            {
              id: "s-u7-tx1-4",
              type: "theory",
              title: "The Results (and the Itch)",
              content: `> "He leaves the sock on for ten more days to find twenty-five lice crawling on his leg, with more ready to hatch. Young insects are created from parents like themselves, he learns. They are not mysteriously formed from dirt, trash, or other nonliving things. He also learns that this experiment is itchy. Antony strips off the sock and throws it out the window. He returns to wearing his clean white socks."`
            },
            {
              id: "s-u7-tx1-5",
              type: "quiz",
              title: "Comprehension Check",
              content: "What did Antony's experiment with the lice in the sock prove?",
              options: [
                { id: "A", text: "That lice prefer dark environments like black socks over white ones.", isCorrect: false, explanation: "He used the black sock to make the white eggs easier to see, not because the lice preferred it." },
                { id: "B", text: "That insects are born from parents like themselves, disproving spontaneous generation.", isCorrect: true, explanation: "He proved that life comes from life, overturning the belief that insects just spawn from dirt." }
              ]
            }
          ]
        },
        {
          id: "les-u7-tx2",
          title: "Ants and Animalcules",
          description: "Anthills and dental hygiene.",
          icon: "Search",
          slides: [
            {
              id: "s-u7-tx2-1",
              type: "theory",
              title: "The Anthill",
              content: `> "Antony wants to know why the ants in his yard are carrying so much food. Do the adult ants eat it all? Antony doesn't think so. He sticks his hand down their anthill, breaking it open to look inside. He learns that the food carried underground is not for the adult ants but for the larvae, or baby ants, to survive through winter. The adult ants hibernate and will not eat until spring. He also learns that the stings from ants are the worst pain he's ever felt!"`
            },
            {
              id: "s-u7-tx2-2",
              type: "theory",
              title: "A Healthy Smile?",
              content: `> "At age fifty-one, Antony is proud of his healthy smile. Every day he rubs his teeth with salt, swishes with water, and wipes them with a cloth. 'My teeth back and front remain as clean and white that only a few people of my age can compare with me.' But in his magnifying mirror, he notices something between his back molars. He scrapes off a bit of sticky, white gunk. What could it be?"`
            },
            {
              id: "s-u7-tx2-3",
              type: "theory",
              title: "The Neighbor's Teeth",
              content: `> "When he examines the goo in a microscope, he finds lots of little animals, just like in the water. He guesses there are more little animals living in his own mouth than there are people living in the Netherlands! Antony predicts that people who clean their teeth less often will have even more little animals in their mouths. To test his hypothesis, he asks his neighbor, who has never washed his teeth in his whole life, for a sample."`
            },
            {
              id: "s-u7-tx2-4",
              type: "theory",
              title: "A Great Company",
              content: `> "'I found an unbelievably great company of living animalcules, swimming more nimbly than any I had ever seen up to this time.' Antony was right. People who don't clean their teeth have the most little animals in their mouths (stinky breath, too!)."`
            },
            {
              id: "s-u7-tx2-5",
              type: "fill_in_blank",
              title: "Testing the Hypothesis",
              content: "To test his hypothesis about tooth-cleaning, Antony asked his ___ for a sample of plaque.",
              blankAnswer: "neighbor"
            }
          ]
        },
        {
          id: "les-u7-tx3",
          title: "What's in a Name?",
          description: "Fame and scientific terminology.",
          icon: "CheckCircle",
          slides: [
            {
              id: "s-u7-tx3-1",
              type: "theory",
              title: "The Famous Draper",
              content: `> "Eventually, Antony's neighbors begin to accept his oddities. They are not surprised when Antony knocks on their door to ask for a bit of earwax, a few fingernail clippings, or several strands of hair. He makes his requests in the name of science.\n> \n> Word of Antony's research spreads. The draper from Delft has become one of the most famous men in the world!"`
            },
            {
              id: "s-u7-tx3-2",
              type: "theory",
              title: "What's in a Name?",
              content: `> "The tiny creatures Antony discovered had no name because no one had seen them before. He called them *diertgens*, the Dutch word for little animal, but when his letters were translated into English, the word was changed to *animalcules*."`
            },
            {
              id: "s-u7-tx3-3",
              type: "theory",
              title: "Microbes and Philosophers",
              content: `> "English scientists continued to use this term until the 1880s, when it was replaced by the French word *microbe*, originally from the Greek: mikros (small) + bios (life). Even the word *scientist* wasn't used frequently until the late 1800s. Before that, most scientists referred to themselves as natural philosophers."`
            },
            {
              id: "s-u7-tx3-4",
              type: "quiz",
              title: "Historical Terminology",
              content: "Before the late 1800s, what were scientists most commonly called?",
              options: [
                { id: "A", text: "Alchemists", isCorrect: false, explanation: "While alchemy existed, the general term for scientific thinkers was different." },
                { id: "B", text: "Natural Philosophers", isCorrect: true, explanation: "Correct! The word 'scientist' was not frequently used until the late 1800s." }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "u7-part3-mastery",
      title: "3. Vocabulary & Exam Prep",
      description: "Master key terms and tackle exam questions.",
      color: "duo-violet",
      lessons: [
        {
          id: "les-u7-vocab",
          title: "Glossary",
          description: "Key words from the text.",
          icon: "Type",
          slides: [
            {
              id: "v-u7-1",
              type: "word_card",
              content: "Vocabulary",
              wordCard: {
                word: "Spontaneous Generation",
                translation: "An obsolete theory that living organisms could arise directly from non-living matter.",
                context: "> \"Do they simply appear out of mud... through spontaneous generation, as most people believe?\"",
                example: "Antony van Leeuwenhoek's lice experiment helped disprove spontaneous generation."
              }
            },
            {
              id: "v-u7-2",
              type: "word_card",
              content: "Vocabulary",
              wordCard: {
                word: "Animalcules",
                translation: "A microscopic animal or an organism. (From the Dutch 'diertgens').",
                context: "> \"I found an unbelievably great company of living animalcules...\"",
                example: "Before we called them microbes or bacteria, they were known as animalcules."
              }
            },
            {
              id: "v-u7-3",
              type: "word_card",
              content: "Vocabulary",
              wordCard: {
                word: "Microbe",
                translation: "A microorganism, especially a bacterium causing disease or fermentation. (From Greek: mikros + bios).",
                context: "> \"...replaced by the French word microbe, originally from the Greek...\"",
                example: "Washing your hands helps to destroy harmful microbes."
              }
            },
            {
              id: "v-u7-4",
              type: "word_card",
              content: "Vocabulary",
              wordCard: {
                word: "Hibernate",
                translation: "To spend the winter in a dormant state.",
                context: "> \"The adult ants hibernate and will not eat until spring.\"",
                example: "Bears hibernate during the cold winter months."
              }
            }
          ]
        },
        {
          id: "les-u7-exam",
          title: "Model Questions",
          description: "Practice answering in the format of the exam.",
          icon: "Edit3",
          slides: [
            {
              id: "s-u7-qb1",
              type: "theory",
              title: "Section B (6 Marks) - Exam Question",
              content: `**Q: How did Antony's experiments challenge the common scientific beliefs of his time?**\n\n**Model Answer:**\nAntony challenged the widely accepted belief of *spontaneous generation*—the idea that living things like insects simply appeared from nonliving matter like mud or rotting flesh. Through empirical experiments, such as keeping lice in a black sock to observe them laying eggs, he proved that young insects are created from parents like themselves. Additionally, by scraping his own teeth and examining the plaque, he discovered a completely invisible world of "animalcules." By relying on direct observation and physical testing rather than assumed knowledge, his fearless curiosity overturned established dogma and laid the foundation for modern microbiology.`
            }
          ]
        }
      ]
    }
  ]
};
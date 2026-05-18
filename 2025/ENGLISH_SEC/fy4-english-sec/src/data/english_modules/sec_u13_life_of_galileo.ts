import { Section } from '../../types';

export const SEC_U13_LIFE_OF_GALILEO: Section = {
  id: "sec-u13-life-of-galileo",
  title: "Unit 13: The Life of Galileo — Scene 13",
  description: "Galileo's book crosses the Italian border — Bertolt Brecht (1937)",
  color: "duo-blue",
  units: [
    {
      id: "u13-intro",
      title: "1. Introduction",
      description: "About Brecht and the play.",
      color: "duo-blue",
      lessons: [
        {
          id: "les-u13-intro",
          title: "About Bertolt Brecht & the Play",
          description: "German playwright and his masterwork.",
          icon: "Drama",
          slides: [
            {
              id: "u13-author",
              type: "theory",
              title: "Who is Bertolt Brecht?",
              content: `**Bertolt Brecht** (1898–1956) was a German playwright, poet, and theatre practitioner.\n\n- Opposed the rising Nazi movement; forced to leave Germany in 1933.\n- Developed **"epic theatre"** — techniques to make audiences think critically rather than lose themselves in illusion.\n- Devices: placards announcing scenes, discouraging suspense, encouraging reflection.\n- Major works: *The Life of Galileo*, *The Threepenny Opera*, *Mother Courage and Her Children*.\n\n> "Theatre should not merely entertain but provoke awareness and social change."`
            },
            {
              id: "u13-play-overview",
              type: "theory",
              title: "Overview of the Play",
              content: `*The Life of Galileo* chronicles **Galileo Galilei's** turbulent career against the backdrop of the **Catholic Church's authority**.\n\nKey events:\n- Galileo discovers evidence for the **Copernican system** (sun-centered universe).\n- The Church declares Copernican teachings **"futile, foolish and heretical"** (1616).\n- Galileo eventually **recants** under threat of torture (1633), devastating his pupils.\n- Living under house arrest, he secretly completes his masterwork **Discorsi**.\n- Andrea smuggles *Discorsi* to Holland for publication.\n\n**Brecht's central warning:** *"Knowledge, if not used right, could fall downward to consume us all."*`
            }
          ]
        }
      ]
    },
    {
      id: "u13-scene",
      title: "2. Scene 13",
      description: "Close reading of the prescribed scene.",
      color: "duo-green",
      lessons: [
        {
          id: "les-u13-scene",
          title: "The Frontier Scene",
          description: "Andrea smuggles the Discorsi across the border.",
          icon: "Map",
          slides: [
            {
              id: "u13-setting",
              type: "theory",
              title: "Setting and Context",
              content: `**Year:** 1637\n**Setting:** A small Italian frontier town, early morning.\n\nAndrea, Galileo's pupil, waits at a **frontier turnpike** with his coachman. He is reading Galileo's manuscript (*Discorsi*) hidden in a chest.\n\nChildren play nearby, speaking about **"Old Marina the witch"** who supposedly flies through the air on a broomstick — representing superstition and ignorance in everyday life.`
            },
            {
              id: "u13-scene-tension",
              type: "theory",
              title: "Tension: Knowledge vs. Authority",
              content: `The scene presents several contrasts:\n\n- **Andrea (Knowledge)** vs. **Frontier Guards (Authority)**\n- The guards are concerned with **money and routine**, not knowledge.\n- They search his luggage but fail to recognize the importance of the books.\n- A **clerk** almost examines the chest of books but stops — fearing the "Devil's work."\n\nThis represents how **superstition and bureaucracy** blind authority to the progress of science.`
            },
            {
              id: "u13-children",
              type: "theory",
              title: "The Children — Ignorance & Hope",
              content: `The children mock Andrea and believe in witches:\n\n> "She flies through the air every night."\n\nAndrea responds with patience:\n\n> "One cannot fly through the air on a broomstick. It must at least have a machine on it, and as yet there is no such machine. Perhaps there never will be, for man is too heavy. But, of course, one cannot tell. **We don't know nearly enough, Giuseppe. We are really only at the beginning.**"\n\nThis represents **scientific humility** — acknowledging what we don't know while opening the door to future discovery.`
            },
            {
              id: "u13-verse",
              type: "theory",
              title: "The Opening Verse",
              content: `The scene opens with a verse:\n\n> *"The great book o'er the border went / And, good folk, that was the end. / But we hope you'll keep in mind / He and I, were left behind. / May you now guard Science' light, / Kindle it and use it right, / Lest it be a flame to fall / Downward to consume us all."*\n\nThis verse is Brecht's **direct address** to the audience — his central message about the **responsibility of using scientific knowledge wisely**.`
            },
            {
              id: "u13-quiz",
              type: "quiz",
              title: "The Scene's Central Message",
              content: "How does Scene 13 show the tension between scientific truth and its public presentation?",
              options: [
                { id: "A", text: "Galileo publicly announces his discoveries at the frontier.", isCorrect: false, explanation: "Galileo is not present in Scene 13; Andrea is." },
                { id: "B", text: "The guards eagerly read the books and discuss their scientific content.", isCorrect: false, explanation: "The guards are indifferent to knowledge; they focus on money and routine." },
                { id: "C", text: "Andrea must smuggle Galileo's work across the border — the authorities are blind to its value, while the children represent the superstition that knowledge must overcome.", isCorrect: true, explanation: "The scene shows science being suppressed by authority while superstition prevails — yet knowledge endures and travels onward." },
                { id: "D", text: "The Church directly confronts Andrea at the border.", isCorrect: false, explanation: "The Church is not present; the confrontation is with customs officials." }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "u13-glossary",
      title: "3. Glossary",
      description: "Key terms from the scene.",
      color: "duo-violet",
      lessons: [
        {
          id: "les-u13-vocab",
          title: "Key Terms",
          description: "Vocabulary from The Life of Galileo Scene 13.",
          icon: "BookOpen",
          slides: [
            {
              id: "v-turnpike",
              type: "word_card",
              content: "Vocabulary",
              wordCard: {
                word: "Turnpike",
                translation: "A toll gate or barrier",
                context: "The location where Andrea's papers and luggage are examined.",
                example: "At the frontier turnpike, children are playing while Andrea waits for his papers to be examined."
              }
            },
            {
              id: "v-manuscript",
              type: "word_card",
              content: "Vocabulary",
              wordCard: {
                word: "Manuscript",
                translation: "A handwritten or typed work not yet printed",
                context: "Galileo's Discorsi is hidden as a manuscript in Andrea's chest.",
                example: "Andrea keeps reading Galileo's manuscript, which is hidden safely in his possession."
              }
            }
          ]
        }
      ]
    },
    {
      id: "u13-exam",
      title: "4. Exam Preparation",
      description: "Model questions from the question paper.",
      color: "duo-orange",
      lessons: [
        {
          id: "les-u13-exam",
          title: "Model Questions",
          description: "Section B practice.",
          icon: "PenTool",
          slides: [
            {
              id: "u13-secB-q11",
              type: "theory",
              title: "Section B (6 Marks) — Q11",
              content: `**Question:** How does Scene 13 of Brecht's The Life of Galileo show the tension between scientific truth and its public presentation? Give two specific examples.\n\n**Model Answer:**\nScene 13 dramatizes the tension between the **advance of scientific knowledge** and the forces of **ignorance, authority, and superstition** that obstruct its public dissemination:\n\n**Example 1 — The Frontier Guards:** The guards search Andrea's luggage but fail to recognise the importance of Galileo's *Discorsi*. They are preoccupied with money and routine — the clerk is more concerned about collecting toll money than reading books. This shows how institutional authority can be blind to the true value of knowledge.\n\n**Example 2 — The Children and Superstition:** The children debate whether the old woman is a witch who flies on a broomstick. This superstition contrasts with Andrea's rational scientific explanation (one cannot fly without a machine). By patiently addressing the children, Andrea demonstrates how science must continually overcome popular superstition to reach the public.`
            }
          ]
        }
      ]
    }
  ]
};

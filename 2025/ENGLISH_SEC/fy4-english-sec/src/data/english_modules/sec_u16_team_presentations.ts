import { Section } from '../../types';

export const SEC_U16_TEAM_PRESENTATIONS: Section = {
  id: "sec-u16-team-presentations",
  title: "Unit 16: Team Presentations: Best Practices",
  description: "Collaborate more efficiently — Jordan Turner (Beautiful.ai blog, Jan 2022)",
  color: "duo-orange",
  units: [
    {
      id: "u16-why",
      title: "1. Why Collaboration Matters",
      description: "The value and challenges of team collaboration.",
      color: "duo-orange",
      lessons: [
        {
          id: "les-u16-why",
          title: "The Case for Collaboration",
          description: "Why working together produces better results.",
          icon: "Users",
          slides: [
            {
              id: "u16-intro",
              type: "theory",
              title: "Collaboration in the Workplace",
              content: `> "If you want to go fast, go alone; if you want to go far, go together."\n\n**Why collaboration matters:**\n- You cover more ground with more talent.\n- Each team member brings **unique skills, ideas, and interests**.\n- Encourages **problem-solving** and opens communication.\n- As a business scales, collaboration is a **key pillar of growth**.\n\n**Challenge:** Collaboration can be counterproductive if not done right — versioning issues, feedback chains, cross-departmental blockers.`
            },
            {
              id: "u16-survey",
              type: "theory",
              title: "Collaboration Challenges",
              content: `A 2021 survey found:\n- Just under **20%** of people said collaboration was their **biggest challenge** when creating a new presentation.\n- Historically, **PowerPoint collaboration** created many bottlenecks:\n  - Version history issues\n  - Waiting for design approvals\n  - Relying on in-house designers\n\nModern solutions: **cloud-based tools** and PowerPoint alternatives.`
            }
          ]
        }
      ]
    },
    {
      id: "u16-six-tips",
      title: "2. Six Tips to Reduce Back-and-Forth",
      description: "Practical strategies for efficient collaboration.",
      color: "duo-green",
      lessons: [
        {
          id: "les-u16-tips",
          title: "Six Best Practices",
          description: "How to collaborate efficiently on presentations.",
          icon: "CheckSquare",
          slides: [
            {
              id: "u16-tip1",
              type: "theory",
              title: "1. Start with a Shared Library",
              content: `Nearly **50%** of presenters pull design inspiration from pre-existing decks.\n\n- A **Shared Library** provides easy access to previous work and pre-built templates.\n- Gives team members a starting point — **on-brand and professional** — without needing a designer.\n- Reduces the need for creative and branding approval.`
            },
            {
              id: "u16-tip2",
              type: "theory",
              title: "2. Work in the Cloud",
              content: `The biggest bottleneck: **back-and-forth emails** with updated versions.\n\n- **Cloud-based tools** mean everyone always works on the **most up-to-date version**.\n- Collaborate with anyone, at any time.\n- Eliminates tedious email loops.\n- Examples: Google Slides, Beautiful.ai, Microsoft 365.`
            },
            {
              id: "u16-tip3",
              type: "theory",
              title: "3. Assign Tasks to Collaborators",
              content: `Effective communication is key to seamless collaboration.\n\n- **Tag colleagues** on specific slides to delegate tasks clearly.\n- Each stakeholder contributes content exclusive to their **department or role**.\n- Eliminates confusion about who is responsible for what.\n- Improves **accuracy and time-efficiency** of the final deck.`
            },
            {
              id: "u16-tip4",
              type: "theory",
              title: "4. Unlock Content Management",
              content: `Too many contributors can create inconsistency ("too many cooks in the kitchen").\n\n- **Content management** = design guardrails that ensure **visual consistency** slide to slide.\n- **Version control** is critical for cross-departmental collaboration.\n- Eliminates the need for in-house designers to revise the deck after completion.`
            },
            {
              id: "u16-tip5",
              type: "theory",
              title: "5. Provide Feedback in Real-Time",
              content: `Feedback on completed decks can take **days** through email chains.\n\n- **Real-time feedback** (commenting directly on slides from a browser) is a game-changer, especially in hybrid/remote environments.\n- Tag team members directly with comments so feedback doesn't get lost.\n- Reduces revision cycles significantly.`
            },
            {
              id: "u16-tip6",
              type: "theory",
              title: "6. Share Seamlessly",
              content: `Searching for the correct file version wastes hours.\n\n- **Share via a shareable link** — team members access the most current version with one click.\n- Eliminates the cycle of: editing → uploading → emailing the file → searching for the right version.\n\n**Summary of all 6 tips:**\n1. Shared Library\n2. Work in the Cloud\n3. Assign Tasks\n4. Content Management\n5. Real-time Feedback\n6. Seamless Sharing`
            },
            {
              id: "u16-quiz",
              type: "quiz",
              title: "Identify the Tip",
              content: "What suggestion reduces the 'back-and-forth snag' of waiting for feedback from upper management?",
              options: [
                { id: "A", text: "Start with a Shared Library", isCorrect: false, explanation: "The Shared Library helps with design templates, not feedback." },
                { id: "B", text: "Assign tasks to collaborators", isCorrect: false, explanation: "Task assignment helps with roles, not management feedback." },
                { id: "C", text: "Provide feedback in real-time", isCorrect: true, explanation: "Real-time commenting on slides eliminates lengthy email chains for approvals." },
                { id: "D", text: "Share seamlessly via link", isCorrect: false, explanation: "Sharing helps with distribution, not feedback cycles." }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "u16-glossary",
      title: "3. Glossary",
      description: "Key terms from the unit.",
      color: "duo-violet",
      lessons: [
        {
          id: "les-u16-vocab",
          title: "Key Terms",
          description: "Vocabulary from Team Presentations.",
          icon: "BookOpen",
          slides: [
            {
              id: "v-collaboration",
              type: "word_card",
              content: "Vocabulary",
              wordCard: {
                word: "Collaboration",
                translation: "Working jointly with others to achieve a shared objective",
                context: "The central theme of Unit 16.",
                example: "Collaboration encourages employees to bring their expertise to the table, teaching one another new things."
              }
            },
            {
              id: "v-cloud",
              type: "word_card",
              content: "Vocabulary",
              wordCard: {
                word: "Cloud",
                translation: "Technology storing and sharing data over the internet",
                context: "A key enabler of modern team collaboration.",
                example: "Working in the cloud helps kill inefficiencies because everyone always works in the most up-to-date version."
              }
            }
          ]
        }
      ]
    },
    {
      id: "u16-exam",
      title: "4. Exam Preparation",
      description: "Model questions from the question paper.",
      color: "duo-orange",
      lessons: [
        {
          id: "les-u16-exam",
          title: "Model Questions",
          description: "Section A practice.",
          icon: "PenTool",
          slides: [
            {
              id: "u16-secA-q6",
              type: "theory",
              title: "Section A (2 Marks) — Q6",
              content: `**Question:** What is the role of collaboration in team presentations?\n\n**Model Answer:**\nCollaboration plays a crucial role in team presentations by enabling each team member to **contribute their unique expertise**, share ideas, and build on each other's strengths. It results in more structured, balanced, and engaging presentations. Collaboration also encourages **problem-solving** to eliminate roadblocks, ensures content accuracy through task assignment, and maintains **visual consistency** through shared design tools and content management.`
            },
            {
              id: "u16-secA-q7",
              type: "theory",
              title: "Section A (2 Marks) — Q7",
              content: `**Question:** Identify one suggestion for reducing back-and-forth snag in team presentations.\n\n**Model Answer:**\nOne effective suggestion for reducing back-and-forth snag is to **work in the cloud**. When all team members use a cloud-based platform (such as Google Slides, Microsoft 365, or Beautiful.ai), everyone works on the most up-to-date version of the presentation at all times. This eliminates the inefficiencies of exchanging multiple email versions and waiting for approvals, significantly reducing the time wasted in the collaboration process.`
            }
          ]
        }
      ]
    }
  ]
};

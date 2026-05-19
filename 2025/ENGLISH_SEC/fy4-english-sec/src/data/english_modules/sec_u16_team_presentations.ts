import { Section } from '../../types';

export const SEC_U16_TEAM_PRESENTATIONS: Section = {
  id: "sec-u16-team-presentations",
  title: "Unit 16: Team Presentations: Best Practices",
  description: "Collaborate more efficiently — Jordan Turner (Beautiful.ai blog, Jan 2022)",
  color: "duo-orange",
  units: [
    {
      id: "u16-intro",
      title: "1. Introduction",
      description: "Why collaboration matters in team presentations.",
      color: "duo-orange",
      lessons: [
        {
          id: "les-u16-intro",
          title: "Introduction",
          description: "The importance of collaboration and the context of this article.",
          icon: "Users",
          slides: [
            {
              id: "sl-u16-intro1",
              type: "theory",
              title: "Introduction",
              content: `Unit 16 Team Presentations: Best Practices to Collaborate More Efficiently Jordan Turner Introduction This unit emphasizes the importance of collaboration in team presentations. By dividing roles, coordinating effectively, and building on each other’s strengths, teams can deliver more structured and engaging presentations.

Teamwork ensures clarity, balance, and smooth flow, helping audiences stay attentive and involved. In today’s fast-paced and technology-driven workplace, teams cannot afford to let technical obstacles stand in the way of productivity.`
            },
            {
              id: "sl-u16-intro1-p2",
              type: "theory",
              title: "Introduction",
              content: `The right methods and tools make it possible to overcome difficulties, helping teams stay on track and deliver professional, impactful presentations. By understanding why collaboration matters and by applying clear strategies, teams can work more efficiently, share responsibilities effectively, and maintain consistency in design and content.

This article discusses the importance of collaboration in presentation design and provides best practices to ensure that teamwork remains smooth, organized, and productive. Text https://www.beautiful.ai/blog/team-presentations-best-practices-to-reduce-collaboration-back-and-forth`
            }
          ]
        }
      ]
    },
    {
      id: "u16-why",
      title: "2. Why Collaboration Matters",
      description: "The value and challenges of working together.",
      color: "duo-orange",
      lessons: [
        {
          id: "les-u16-why",
          title: "The Case for Collaboration",
          description: "Why working together produces better results.",
          icon: "TrendingUp",
          slides: [
            {
              id: "sl-u16-why1",
              type: "theory",
              title: "Why Collaboration Matters",
              content: `Why collaboration matters There’s a popular phrase that states, “If you want to go fast, go alone; if you want to go far, go together.” Which translates to the modern statement, “teamwork makes the dream work.” Whichever way you spin it, it’s no secret that working together is more effective than working in a silo. You’re simply able to cover more ground with more talent.

Every colleague boasts their own unique set of skills, ideas, and interests. Working together collaboratively allows each team member to share their ideas, understand how their peers think, and riff on new concepts together to achieve the best possible outcome.`
            },
            {
              id: "sl-u16-why1-p2",
              type: "theory",
              title: "Why Collaboration Matters",
              content: `Collaboration encourages employees to bring their expertise to the table, in turn teaching one another new things along the way. Not only does it open up communication, and opportunities for teams to try new things, it also encourages problem-solving to eliminate roadblocks.

As a business is trying to scale, collaboration is a key pillar in that growth.`
            },
            {
              id: "sl-u16-challenge",
              type: "theory",
              title: "Challenges of Collaboration on Presentations",
              content: `Collaborating on team presentations Collaboration is not one-size-fits-all and can look different for every team. Some teams may collaborate on campaign specs, while others are working as a unit on a sales pitch presentation.

Historically speaking, working collaboratively on PowerPoint presentations created a lot of bottlenecks for teams. Between going back and forth with version histories, getting approvals, and waiting on in-house designers to finesse each deck; it made the process painful and inefficient.`
            },
            {
              id: "sl-u16-challenge-p2",
              type: "theory",
              title: "Challenges of Collaboration on Presentations",
              content: `In a 2021 survey, just under 20% of people said that collaboration was their biggest challenge when creating a new presentation. We’d be willing to bet that they weren’t using the right tools to facilitate said collaboration in their workplace.

Luckily with modern technology and PowerPoint alternatives, collaboration has never been more seamless.`
            },
            {
              id: "sl-u16-why-quiz",
              type: "quiz",
              title: "Why Collaborate?",
              content: "According to the 2021 survey mentioned in the article, what percentage of people said collaboration was their biggest challenge when creating a presentation?",
              options: [
                { id: "A", text: "50%", isCorrect: false, explanation: "50% is the figure for those who pull design from preexisting decks." },
                { id: "B", text: "Just under 20%", isCorrect: true, explanation: "The survey found just under 20% said collaboration was their biggest challenge." },
                { id: "C", text: "About 30%", isCorrect: false, explanation: "Not the figure mentioned." },
                { id: "D", text: "Over 60%", isCorrect: false, explanation: "Not the figure mentioned." }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "u16-six-tips",
      title: "3. Six Tips to Reduce Back-and-Forth",
      description: "Practical strategies for efficient collaboration.",
      color: "duo-teal",
      lessons: [
        {
          id: "les-u16-tips1-3",
          title: "Tips 1–3: Library, Cloud & Tasks",
          description: "First three tips for streamlining collaboration.",
          icon: "Settings",
          slides: [
            {
              id: "sl-u16-tip1",
              type: "theory",
              title: "1. Start with a Shared Library",
              content: `To increase efficiency, and reduce collaboration back and forth consider these six tips. • Start with a Shared Library Nearly 50% of presenters said they pull design inspiration from preexisting decks and can benefit from a Shared Library for easy access to previous work. One of the greatest pain points of presentation design is creating a deck from scratch with little-to-no design experience.

Many departments will rely on their marketing team to make final design tweaks after their content has been added to each slide, but that creates a traffic jam in the presentation process. Starting with a Shared Library — and pre-built templates — gives team members a starting point to create something on-brand and professional without being at the mercy of their art director’s time.

You can give your team access to their own deck designer by providing them with a PowerPoint alternative tool to handle the heavy lifting of design, reducing the need for creative and branding approval.`
            },
            {
              id: "sl-u16-tip2",
              type: "theory",
              title: "2. Work in the Cloud",
              content: `You can give your team access to their own deck designer by providing them with a PowerPoint alternative tool to handle the heavy lifting of design, reducing the need for creative and branding approval. • Work in the cloud When you’re thinking about bottlenecks in your workflow, what comes to mind? For most it’s probably the back and forth emails with updated versions and approvals.

Waiting for your data analyst to email you the most recent metrics, or your boss to sign off on your work, can delay the design process by hours or even days. Working in the cloud helps kill those inefficiencies because everyone is always working in the most up to date version of the presentation deck at all times.

With softwares in the cloud you can collaborate with anyone, at any time, without the need for tedious conversation loops.`
            },
            {
              id: "sl-u16-tip3",
              type: "theory",
              title: "3. Assign Tasks to Collaborators",
              content: `With softwares in the cloud you can collaborate with anyone, at any time, without the need for tedious conversation loops. • Assign tasks to collaborators We’ve all had that person on our team that claims they never got the message or the email got buried in their inbox. To collaborate more seamlessly, effective communication is key.

In Beautiful.ai teams can assign tasks — or slides — to collaborators so there’s no confusion as to who is responsible for what. By tagging your colleague on specific slides you can easily delegate tasks so that you can work in tandem on the same project.

Each stakeholder can input the content exclusive to their department or role so that you’re not going back and forth trying to track down the most relevant information. Not only does this make things more time-efficient, but it improves the accuracy of the deck.`
            }
          ]
        },
        {
          id: "les-u16-tips4-6",
          title: "Tips 4–6: Content, Feedback & Sharing",
          description: "Final three tips for seamless collaboration.",
          icon: "Share2",
          slides: [
            {
              id: "sl-u16-tip4",
              type: "theory",
              title: "4. Unlock Content Management",
              content: `Not only does this make things more time-efficient, but it improves the accuracy of the deck. • Unlock content management Collaboration is great, but when you have too many cooks in the kitchen things can get messy (and nobody has time to redo a messy deck). A key component to collaboration is content management so you can provide design guardrails to teammates to ensure they stay visually consistent from slide to slide.

On average, teams find version control to be a fairly important element in cross-departmental collaboration and presentation deck design to maintain branding and content management. This eliminates the need to rely on in-house designers to revise the deck once it’s complete.`
            },
            {
              id: "sl-u16-tip5",
              type: "theory",
              title: "5. Provide Feedback in Real-Time",
              content: `This eliminates the need to rely on in-house designers to revise the deck once it’s complete. • Provide feedback in real-time Managers and executives are constantly juggling heaps of responsibilities, and it’s inevitable that things will get lost in the shuffle. When a team finishes a presentation deck, they can be waiting for days for feedback from upper management going back and forth on lengthy email chains with suggestions and revision requests.

Especially in a hybrid work environment where teams are remote, being able to sync up and get sign off in real-time, right from your browser, is a game changer. With Beautiful.ai Teams you can add your feedback on the slide with a comment, and tag your team members, so your feedback doesn’t fall between the cracks.`
            },
            {
              id: "sl-u16-tip6",
              type: "theory",
              title: "6. Share Seamlessly",
              content: `With Beautiful.ai Teams you can add your feedback on the slide with a comment, and tag your team members, so your feedback doesn’t fall between the cracks. • Share seamlessly Lastly, stakeholders need to be able to share the presentation with team members or external partners. When teams are working on different versions of the deck, they’re constantly having to search their email for the correct presentation file, make any necessary edits, and reupload the file to send back to their collaborators.

That act alone can add hours to the presentation process. Instead, teams should share their decks out with a shareable link so that team members can access the most current version with a single click.`
            },
            {
              id: "sl-u16-tips-quiz",
              type: "quiz",
              title: "Six Tips",
              content: "What is the purpose of a Shared Library in team presentations according to Tip 1?",
              options: [
                { id: "A", text: "To store all team members' personal files", isCorrect: false, explanation: "It is for presentation design assets and templates, not personal files." },
                { id: "B", text: "To give team members pre-built templates and a starting point for on-brand, professional presentations without depending on designers", isCorrect: true, explanation: "A Shared Library gives access to previous work and pre-built templates, reducing the need for design approval." },
                { id: "C", text: "To automatically generate presentations using AI", isCorrect: false, explanation: "The Shared Library is about templates and access, not AI generation." },
                { id: "D", text: "To store feedback comments from upper management", isCorrect: false, explanation: "That is the function of real-time commenting (Tip 5)." }
              ]
            },
            {
              id: "sl-u16-fib",
              type: "fill_in_blank",
              title: "Fill in the Blank",
              content: "If you want to go fast, go alone; if you want to go ___, go together.",
              blankAnswer: "far"
            }
          ]
        }
      ]
    },
    {
      id: "u16-glossary",
      title: "4. Glossary",
      description: "Key terms from the unit.",
      color: "duo-violet",
      lessons: [
        {
          id: "les-u16-vocab",
          title: "Key Terms",
          description: "Vocabulary from Team Presentations: Best Practices.",
          icon: "BookOpen",
          slides: [
            {
              id: "v-collaboration",
              type: "word_card",
              title: "Word Card",
              content: "Vocabulary",
              wordCard: {
                word: "Collaboration",
                translation: "The act of working jointly with others to achieve a shared objective",
                context: "The central theme of the entire unit.",
                example: "Collaboration is not one-size-fits-all and can look different for every team."
              }
            },
            {
              id: "v-cloud",
              type: "word_card",
              title: "Word Card",
              content: "Vocabulary",
              wordCard: {
                word: "Cloud",
                translation: "A technology that stores and shares data over the internet, allowing multiple users to access and edit files in real time",
                context: "Cloud-based tools eliminate the need for emailing updated versions back and forth.",
                example: "Working in the cloud helps kill inefficiencies because everyone is always working in the most up to date version."
              }
            },
            {
              id: "v-coordination",
              type: "word_card",
              title: "Word Card",
              content: "Vocabulary",
              wordCard: {
                word: "Coordination",
                translation: "Organizing people and tasks so they function smoothly together",
                context: "Essential for team presentations to flow without bottlenecks.",
                example: "Teams can assign tasks to collaborators so there is no confusion as to who is responsible for what."
              }
            }
          ]
        }
      ]
    },
    {
      id: "u16-exam",
      title: "5. Exam Preparation",
      description: "Model questions from the unit.",
      color: "duo-orange",
      lessons: [
        {
          id: "les-u16-exam",
          title: "Model Questions",
          description: "Section A and B practice.",
          icon: "PenTool",
          slides: [
            {
              id: "sl-u16-secA",
              type: "theory",
              title: "Section A (2 Marks) — Six Tips",
              content: `**Question:** List the six tips to reduce back-and-forth in team presentations.

**Answer:**
1. Start with a Shared Library
2. Work in the cloud
3. Assign tasks to collaborators
4. Unlock content management
5. Provide feedback in real-time
6. Share seamlessly`
            },
            {
              id: "sl-u16-secB",
              type: "theory",
              title: "Section B (6 Marks) — Why Collaboration Matters",
              content: `**Question:** Explain why collaboration is crucial for team presentations, according to Jordan Turner.

**Key Points:**
1. **'If you want to go far, go together'** — collaboration covers more ground than working alone.
2. Each team member brings **unique skills, ideas, and interests** — together they achieve the best outcome.
3. Collaboration **opens communication**, encourages problem-solving, and is a key pillar of business growth.
4. Historical challenges — **PowerPoint bottlenecks** (version history, design approvals) — show why proper tools matter.
5. **Modern cloud-based tools** have made collaboration seamless, eliminating email chains and version confusion.
6. Effective collaboration requires **clear task assignment, real-time feedback, and seamless sharing** to be productive.`
            }
          ]
        }
      ]
    }
  ]
};

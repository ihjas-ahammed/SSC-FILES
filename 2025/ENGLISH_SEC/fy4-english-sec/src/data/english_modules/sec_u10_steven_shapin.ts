import { Section } from '../../types';

export const SEC_U10_STEVEN_SHAPIN: Section = {
  id: "sec-u10-steven-shapin",
  title: "Unit 10: An Interview with Steven Shapin",
  description: "The history and sociology of science — Harvard historian of science",
  color: "duo-green",
  units: [
    {
      id: "u10-intro",
      title: "1. Introduction",
      description: "About Steven Shapin and the history of science.",
      color: "duo-green",
      lessons: [
        {
          id: "les-u10-intro",
          title: "About Steven Shapin",
          description: "Leading historian of science.",
          icon: "User",
          slides: [
            {
              id: "u10-author",
              type: "theory",
              title: "Who is Steven Shapin?",
              content: `**Steven Shapin** is a leading American historian of science at **Harvard University** (Franklin L. Ford Research Professor).\n\n- PhD in history and sociology of science from the University of Pennsylvania.\n- Taught at University of Edinburgh and UC San Diego.\n\n**Key Works:**\n- *Leviathan and the Air-Pump* (1985, with Simon Schaffer) — analyzes 17th-century debate between Hobbes and Boyle; shows how scientific facts are **socially constructed**.\n- *The Scientific Life: A Moral History of a Late Modern Vocation* (2008) — examines the modern scientist's role, motivations, and values.`
            }
          ]
        }
      ]
    },
    {
      id: "u10-text",
      title: "2. The Interview",
      description: "Key ideas from the interview.",
      color: "duo-teal",
      lessons: [
        {
          id: "les-u10-virtue",
          title: "Science, Virtue & Institutions",
          description: "From individual virtue to institutional authority.",
          icon: "Building",
          slides: [
            {
              id: "u10-moral",
              type: "theory",
              title: "The Moral History of Science",
              content: `Shapin's book traces the **ennobling** quality of science — historically, scientists were seen as having a special **moral vocation**.\n\n**Three roots of the shift from individual to institutional virtue:**\n1. **Secularization** — If Nature is no longer God's Book, studying it no longer makes scientists virtuous.\n2. **Decline of Genius, rise of Method** — Method is mechanical, available to anyone; genius is inspired.\n3. **Rise of science as a remunerated job** — Science became a profession, not a calling.`
            },
            {
              id: "u10-academia-industry",
              type: "theory",
              title: "Academia vs. Industry",
              content: `Shapin challenges the assumption that academia is superior to industry for science:\n\n- From early 20th century, the **majority of American scientists worked in industry**, not academia.\n- **Autonomy** was often as great in industry as in academia.\n- A clear quality contrast between university and industrial science **does not hold**.\n- Applied research doesn't require less intelligence than pure research.\n- Both industrial and academic scientists want **interesting work and freedom** — "an apparently banal idea, but one which is very widely ignored."`
            },
            {
              id: "u10-charisma",
              type: "theory",
              title: "Charismatic Authority in Modern Science",
              content: `In entrepreneurial science, **personal virtue and charismatic authority** are *more important* than they used to be.\n\n- Scientific inquiry is **inherently uncertain** — especially in high-tech and biotech.\n- In uncertain environments, the solution often comes **embodied in the person** who speaks for the organization.\n- Examples: **Steve Jobs, Craig Venter** — venture capitalists "bet on the jockey, not the horse" (people over technology).\n- Charismatic authority ≠ wonderful people; but it must be taken seriously.`
            },
            {
              id: "u10-ancient-greek",
              type: "theory",
              title: "Ancient Greek Roots",
              content: `Shapin traces modern scientific debates to ancient debates:\n\n- The debate between **"active" and "contemplative" lives** (Antiquity) mirrors modern debates about **teamwork vs. individualism**.\n- The question of whether **solitary or social conditions** produce knowledge goes back centuries.\n\n> "The present is always linked to the past... We will understand 'the way we live now' better if we appreciate how topics going back many centuries are a living feature of the contemporary scene."`
            },
            {
              id: "u10-quiz",
              type: "quiz",
              title: "Venture Capitalists and Science",
              content: "Why do venture capitalists 'bet on the jockey, not the horse'?",
              options: [
                { id: "A", text: "Because technology is unpredictable but entrepreneurs' character is reliable.", isCorrect: true, explanation: "Technologies and markets can change, but the vision, energy, and commitment of the entrepreneur can be as durable as anything else." },
                { id: "B", text: "Because they prefer animals to technology.", isCorrect: false, explanation: "This is a metaphor — 'jockey' = entrepreneur, 'horse' = technology." },
                { id: "C", text: "Because scientific knowledge has no commercial value.", isCorrect: false, explanation: "Shapin argues the opposite — knowledge has monetary value in the knowledge economy." },
                { id: "D", text: "Because academia always produces better technology.", isCorrect: false, explanation: "Shapin challenges the assumption of academic superiority." }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "u10-glossary",
      title: "3. Glossary",
      description: "Key terms from the interview.",
      color: "duo-violet",
      lessons: [
        {
          id: "les-u10-vocab",
          title: "Key Terms",
          description: "Vocabulary from the Shapin interview.",
          icon: "BookOpen",
          slides: [
            {
              id: "v-propitious",
              type: "word_card",
              content: "Vocabulary",
              wordCard: {
                word: "Propitious",
                translation: "Favourable, likely to lead to success",
                context: "Used to describe conditions for scientific inquiry.",
                example: "Some sorts of modern industry can offer more propitious conditions for scientific inquiry than some sorts of universities."
              }
            },
            {
              id: "v-altruism",
              type: "word_card",
              content: "Vocabulary",
              wordCard: {
                word: "Altruism",
                translation: "Selfless concern for others' well-being",
                context: "Found even among commercial scientists.",
                example: "Aspects of altruism can be found among scientists and engineers working in industry."
              }
            },
            {
              id: "v-dogmatic",
              type: "word_card",
              content: "Vocabulary",
              wordCard: {
                word: "Dogmatic",
                translation: "Insisting one's views are correct without considering alternatives",
                context: "Used to criticize assumptions about applied vs. pure research.",
                example: "A presumption that applied research requires less brain-power than pure research is just dogmatic."
              }
            }
          ]
        }
      ]
    },
    {
      id: "u10-exam",
      title: "4. Exam Preparation",
      description: "Model questions.",
      color: "duo-orange",
      lessons: [
        {
          id: "les-u10-exam",
          title: "Model Questions",
          description: "Section A practice.",
          icon: "PenTool",
          slides: [
            {
              id: "u10-secA-q10",
              type: "theory",
              title: "Section A (2 Marks) — Q10",
              content: `**Question:** What was the ancient Greek philosophical perspective on seeking knowledge, as explained by Shapin?\n\n**Model Answer:**\nAccording to Shapin, ancient Greek philosophy engaged in the debate between the **"active life"** (vita activa — knowledge gained through engagement with society) and the **"contemplative life"** (vita contemplativa — knowledge gained in solitude). This debate asked whether virtue and knowledge arose from being alone or from social interaction. Shapin argues that these ancient sensibilities still underpin contemporary discussions about individualism versus teamwork in scientific communities.`
            }
          ]
        }
      ]
    }
  ]
};

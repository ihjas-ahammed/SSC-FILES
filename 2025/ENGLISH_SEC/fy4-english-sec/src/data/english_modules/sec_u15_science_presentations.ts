import { Section } from '../../types';

export const SEC_U15_SCIENCE_PRESENTATIONS: Section = {
  id: "sec-u15-science-presentations",
  title: "Unit 15: Science Presentations",
  description: "Purpose, structure, and techniques — University of Colorado Anschutz",
  color: "duo-teal",
  units: [
    {
      id: "u15-purpose",
      title: "1. Purpose of Science Presentations",
      description: "Why and how to present science.",
      color: "duo-teal",
      lessons: [
        {
          id: "les-u15-purpose",
          title: "The Big Questions",
          description: "What every presentation should answer.",
          icon: "HelpCircle",
          slides: [
            {
              id: "u15-why",
              type: "theory",
              title: "Why Present Science?",
              content: `> "How you present science is really important, not only for your careers but for the entire science process. Presentations push you to think broadly and deeply."\n\n**Every presentation should answer three sets of questions:**\n\n**Setting up the story:**\n- What is the big scientific problem?\n- What is the problem's significance?\n- What is the hypothesis?\n\n**Telling the story:**\n- What is the audience looking at?\n- How should they interpret it?\n\n**The grand finale:**\n- What do you conclude?\n- What remains to be learned?`
            },
            {
              id: "u15-ai",
              type: "theory",
              title: "AI in Presentations",
              content: `AI has transformed presentation practices:\n\n- **Design tools:** Canva, Beautiful.ai, Microsoft Designer — create visually compelling slides.\n- **Script drafting:** ChatGPT — drafts scripts, summarizes content, refines language.\n- **Data visualization:** Tableau, Power BI — interactive, understandable formats.\n- **Rehearsal apps:** Yoodli, Orai — real-time feedback on clarity, tone, and pace.\n\n**However:** AI tools cannot replace **authenticity, clarity, and confidence** that effective presenters bring.`
            }
          ]
        }
      ]
    },
    {
      id: "u15-oral",
      title: "2. Oral Presentations",
      description: "Techniques for effective seminars and talks.",
      color: "duo-blue",
      lessons: [
        {
          id: "les-u15-oral-general",
          title: "General Tips",
          description: "Nine general principles for oral presentations.",
          icon: "Mic",
          slides: [
            {
              id: "u15-tips1",
              type: "theory",
              title: "Tips 1–5",
              content: `1. **Conversation, not recitation** — talk to people as if sitting with just one person.\n2. **Pictures tell 1000 words** — minimize text; use cartoons, images, short phrases.\n3. **Keep slides simple** — don't cram, make things as big as possible.\n4. **Never assume the audience knows more than you** — avoid jargon unless defined.\n5. **Don't make the audience read your mind** — state the problem, goal, question explicitly.`
            },
            {
              id: "u15-tips2",
              type: "theory",
              title: "Tips 6–9",
              content: `6. **Emphasize key ideas** — slow down, pause, make eye contact.\n7. **Good flow** — each slide leads logically to the next; tell a story.\n8. **Less is more** — about 1 slide/minute or less.\n9. **Practice** — even in front of one person; at least once with your advisor.\n\n**The golden rule:** *Focus on communicating, not performing.*`
            },
            {
              id: "u15-structure",
              type: "theory",
              title: "Beginning, Middle, Ending",
              content: `**Beginning:** Tell us about the big question/problem; give background needed to understand.\n\n**Middle (Unmuddled):**\n- State the specific question/hypothesis for each experiment.\n- Explain the experiment clearly.\n- Tell us what EVERY result means.\n- Focus on the MOST important results.\n\n**Ending:** Relate findings back to the big problem; propose models; tell us what questions remain and what you plan to do next.`
            },
            {
              id: "u15-quiz",
              type: "quiz",
              title: "The Ideal Slide Density",
              content: "What is the recommended rule of thumb for slides per minute in a scientific talk?",
              options: [
                { id: "A", text: "3 slides per minute", isCorrect: false, explanation: "Too fast — audience won't absorb the content." },
                { id: "B", text: "About 1 slide per minute or less", isCorrect: true, explanation: "1 slide/minute (or less for complex slides) is the recommended pace." },
                { id: "C", text: "5 slides per minute", isCorrect: false, explanation: "Far too fast for any scientific presentation." },
                { id: "D", text: "1 slide per 5 minutes", isCorrect: false, explanation: "This would be too slow for a standard research talk." }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "u15-exam",
      title: "3. Exam Preparation",
      description: "Model questions.",
      color: "duo-orange",
      lessons: [
        {
          id: "les-u15-exam",
          title: "Model Questions",
          description: "Section C practice.",
          icon: "PenTool",
          slides: [
            {
              id: "u15-secC-q16",
              type: "theory",
              title: "Section C (10 Marks) — Q16",
              content: `**Question:** Design a model scientific presentation on any one contemporary scientific issue. Explain how you would apply the principles of clarity, audience engagement and collaboration.\n\n**Key Points for a Model Answer:**\n\n**Topic choice:** Climate Change & Carbon Capture (or AI Ethics, or CRISPR Gene Editing).\n\n**Clarity:**\n- Define the scientific problem clearly with a specific hypothesis.\n- Use labeled visuals (graphs, diagrams) — avoid dense text.\n- Follow logical structure: introduction → methods → results → conclusion.\n\n**Audience Engagement:**\n- Open with a compelling question or startling statistic.\n- Maintain eye contact; speak conversationally.\n- Pause at key findings; invite questions at the end.\n- Use relatable analogies for non-expert audiences.\n\n**Collaboration:**\n- Acknowledge colleagues who contributed to the work.\n- If team presentation: assign specific roles; work in the cloud for version control.\n- Provide real-time feedback on shared slides before the presentation.`
            }
          ]
        }
      ]
    }
  ]
};

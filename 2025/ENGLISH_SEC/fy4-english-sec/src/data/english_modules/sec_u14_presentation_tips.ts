import { Section } from '../../types';

export const SEC_U14_PRESENTATION_TIPS: Section = {
  id: "sec-u14-presentation-tips",
  title: "Unit 14: Tips for Creating & Giving Scientific Presentations",
  description: "Step-by-step guide from University of Illinois Urbana-Champaign Physics 596",
  color: "duo-green",
  units: [
    {
      id: "u14-creating",
      title: "1. Creating Your Talk",
      description: "Organizing and preparing a scientific presentation.",
      color: "duo-green",
      lessons: [
        {
          id: "les-u14-steps",
          title: "Getting Started",
          description: "Four steps to start preparing.",
          icon: "ClipboardList",
          slides: [
            {
              id: "u14-step1",
              type: "theory",
              title: "Step 1–4: The Foundation",
              content: `**Step 1:** Identify your **audience** — controls the level and amount of background needed.\n\n**Step 2:** Determine your **time** — controls how much to cover.\n\n**Step 3:** Identify the **main points** — reasonably convey only 2–3 main points in a 20–30 minute talk.\n\n**Step 4:** Create an **outline** — builds logical organization and helps decide what figures to include.`
            },
            {
              id: "u14-25min",
              type: "theory",
              title: "Organizing a 25-Minute Talk",
              content: `**Background & Introduction** (~6 min, 4–5 slides):\n- 1 title slide, 1 outline, 1 overview (why important?), 1–2 background slides\n\n**Methods** (~6 min, 2–3 slides):\n- Theoretical/experimental methods\n\n**Results** (~9 min, 4–5 slides):\n- Only 1–2 key results\n\n**Summary** (~1 min, 2 slides):\n- Summary of key points, acknowledgements`
            },
            {
              id: "u14-slide-tips",
              type: "theory",
              title: "Tips for Preparing Your Talk",
              content: `Key slide design rules:\n- **1 idea per slide** — header states the main idea; body supports it.\n- **Use well-labeled graphs and figures** — makes slides real and interesting.\n- **Avoid too much text** — keep it minimal.\n- **Use figures** to: enliven slides, promote interest, provide evidence, explain complex ideas.\n- **Label all elements** in figures — both axes, captions, sources.\n- **Font:** San Serif (e.g., Arial), min 20pt. No calligraphy or serif fonts.\n- **Colors:** Avoid red/green or red/blue. No neon or pastels.`
            }
          ]
        }
      ]
    },
    {
      id: "u14-giving",
      title: "2. Giving Your Talk",
      description: "Delivery tips for effective presentations.",
      color: "duo-teal",
      lessons: [
        {
          id: "les-u14-delivery",
          title: "Delivery Tips",
          description: "How to present confidently.",
          icon: "Mic",
          slides: [
            {
              id: "u14-delivery1",
              type: "theory",
              title: "Key Delivery Principles",
              content: `Pointers for the best possible talk:\n- **Maintain eye contact** — don't stare at screen.\n- **Do not read your talk!**\n- **Avoid nervous mannerisms** — pacing, bobbing, waving arms.\n- **Speak slowly and distinctly** — practice!\n- **Avoid fillers**: "uh", "like", "um", "okay".\n- **Be enthusiastic!** — If you don't act excited, the audience won't be.\n- **Thank the audience** at the end.`
            },
            {
              id: "u14-practice",
              type: "theory",
              title: "Know Your Material",
              content: `**Best preparation:** Know Your Material\n- **Practice, practice, practice** — ideally in front of people.\n- **Focus on communicating**, not performing.\n- Keep it simple. Prepare key phrases.\n- **Stay on track** — planned diversions are fine, but return.\n- **Rehearse your ending** — don't end with "Well, I guess that's it..."\n\n**A few days before:** Practice in front of friends; check timing; rehearse questions.\n**Night before:** Review once more; put materials in order.`
            },
            {
              id: "u14-quiz",
              type: "quiz",
              title: "Key Presentation Tip",
              content: "How many main points should you convey in a 20–30 minute scientific talk?",
              options: [
                { id: "A", text: "5–7 main points", isCorrect: false, explanation: "Too many for a 20–30 minute talk." },
                { id: "B", text: "2–3 main points", isCorrect: true, explanation: "You can reasonably convey only 2–3 main points in a 20–30 minute talk." },
                { id: "C", text: "As many as possible", isCorrect: false, explanation: "Less is more — focusing on 2–3 points makes for a better presentation." },
                { id: "D", text: "10 main points", isCorrect: false, explanation: "This would overwhelm the audience." }
              ]
            },
            {
              id: "u14-questions",
              type: "theory",
              title: "Handling Questions",
              content: `Handling questions is an **essential part** of giving a talk:\n- **Anticipate questions** during preparation.\n- **Identify weak points** in each slide.\n- If you don't know: *"That's an excellent question. I'm not sure; I'll have to look into it"* or *"Let's talk about it afterward."*\n- Never bluff!`
            }
          ]
        }
      ]
    },
    {
      id: "u14-exam",
      title: "3. Exam Preparation",
      description: "Model questions from the question paper.",
      color: "duo-orange",
      lessons: [
        {
          id: "les-u14-exam",
          title: "Model Questions",
          description: "Section A and B practice.",
          icon: "PenTool",
          slides: [
            {
              id: "u14-secA-q5",
              type: "theory",
              title: "Section A (2 Marks) — Q5",
              content: `**Question:** List two qualities of an effective scientific presentation.\n\n**Model Answer:**\nTwo qualities of an effective scientific presentation are: (1) **Clarity** — using simple, well-labeled visuals and clear language with minimal text so that the audience understands the key ideas easily; and (2) **Organization** — following a logical structure (introduction, methods, results, summary) where each slide has one central idea and transitions lead naturally from one point to the next.`
            },
            {
              id: "u14-secB-q12",
              type: "theory",
              title: "Section B (6 Marks) — Q12",
              content: `**Question:** Explain three practical tips that can make a scientific presentation effective.\n\n**Model Answer:**\n1. **Know your audience (Step 1):** Identifying the audience's expertise level controls the amount of background material and the technical complexity of your presentation. A non-expert audience needs more context and simpler language.\n\n2. **Use figures to illustrate key points:** Graphs, diagrams, and images make presentations more real and interesting. All elements must be labeled (axes, captions, sources) and sized for visibility from the back of the room.\n\n3. **Practice your delivery:** Rehearsing in front of others — checking timing, anticipating questions, and refining transitions — ensures confident delivery. It also helps to avoid fillers, maintain eye contact, and speak slowly and distinctly during the actual presentation.`
            }
          ]
        }
      ]
    }
  ]
};

import { Section } from '../../types';

export const SEC_U7_SCIENTIFIC_REASONING: Section = {
  id: "sec-u7-scientific-reasoning",
  title: "Unit 7: \"Scientific Reasoning\"",
  description: "Philosophy of science and inductive reasoning — Samir Okasha",
  color: "duo-purple",
  units: [
    {
      id: "u7-intro",
      title: "1. Introduction",
      description: "About Samir Okasha and the philosophy of science.",
      color: "duo-purple",
      lessons: [
        {
          id: "les-u7-intro",
          title: "About Samir Okasha",
          description: "Author and context for the text.",
          icon: "User",
          slides: [
            {
              id: "u7-author",
              type: "theory",
              title: "Who is Samir Okasha?",
              content: `**Samir Okasha** is a philosopher of science at the University of Bristol.\n\nHis book *Philosophy of Science: A Very Short Introduction* (Oxford University Press) introduces key concepts in the philosophy of science to general readers.\n\nThe prescribed text **"Scientific Reasoning"** explores:\n- The nature of scientific knowledge\n- The role of **inductive reasoning** in science\n- **David Hume's critique** of induction\n- The difference between scientific and non-scientific explanations`
            },
            {
              id: "u7-context",
              type: "theory",
              title: "What is Scientific Reasoning?",
              content: `**Scientific reasoning** refers to the methods scientists use to:\n- Collect and interpret evidence\n- Form hypotheses and test them\n- Draw general conclusions from specific observations\n\n**Two key types of reasoning:**\n1. **Deductive reasoning** — conclusions follow necessarily from premises (valid regardless of evidence).\n2. **Inductive reasoning** — drawing general conclusions from specific observations (can be falsified by new evidence).`
            }
          ]
        }
      ]
    },
    {
      id: "u7-induction",
      title: "2. Induction & Hume's Critique",
      description: "The problem of induction in science.",
      color: "duo-blue",
      lessons: [
        {
          id: "les-u7-induction",
          title: "Inductive Reasoning",
          description: "How science uses induction and its limitations.",
          icon: "GitBranch",
          slides: [
            {
              id: "u7-induction1",
              type: "theory",
              title: "Inductive Reasoning in Science",
              content: `**Induction** = drawing general conclusions from specific observations.\n\n**Example:**\n- Observation 1: This swan is white.\n- Observation 2: All swans I have seen are white.\n- Inductive Conclusion: All swans are white.\n\n**Problem:** One **black swan** falsifies the conclusion.\n\nScience relies heavily on induction — testing hypotheses through repeated experiments — yet no amount of confirmatory evidence can make an inductive conclusion *certain*. There is always the possibility of a counter-example.`
            },
            {
              id: "u7-hume",
              type: "theory",
              title: "David Hume's Critique of Induction",
              content: `**David Hume** (1711–1776), Scottish philosopher, posed the **Problem of Induction**:\n\n> Just because the sun has risen every day so far does not *logically* guarantee it will rise tomorrow.\n\n**Hume's argument:**\n1. We use induction because it has worked in the past.\n2. But justifying induction by its past success is itself an inductive argument — **circular reasoning**.\n3. Therefore, there is no purely rational justification for inductive reasoning.\n\n**Significance:** This remains one of the deepest unsolved problems in the philosophy of science.`
            },
            {
              id: "u7-quiz-hume",
              type: "quiz",
              title: "Hume's Problem",
              content: "What is Hume's fundamental critique of inductive reasoning?",
              options: [
                { id: "A", text: "Science uses too much data and needs to simplify.", isCorrect: false, explanation: "Hume's critique is philosophical, not methodological." },
                { id: "B", text: "Justifying induction by its past success is circular reasoning — there's no purely rational justification for it.", isCorrect: true, explanation: "Hume showed that using past experience to justify induction is itself an inductive argument." },
                { id: "C", text: "Deductive reasoning is always superior to inductive reasoning.", isCorrect: false, explanation: "Hume critiques induction specifically, not in comparison to deduction." },
                { id: "D", text: "Only mathematical proofs can be trusted.", isCorrect: false, explanation: "Hume's concern is specifically with empirical induction." }
              ]
            },
            {
              id: "u7-ancient-greek",
              type: "theory",
              title: "Ancient Greek Perspectives",
              content: `**Ancient Greek** philosophical approaches to knowledge:\n\n- **Plato** — true knowledge is of the eternal, unchanging Forms; sensory experience is unreliable.\n- **Aristotle** — knowledge comes from careful observation of the natural world (empiricism), but must be systematized through logic.\n\nThese contrasting views (rationalism vs. empiricism) underpin the debate about induction that Shapin (Unit 10) also addresses.`
            }
          ]
        }
      ]
    },
    {
      id: "u7-exam",
      title: "3. Exam Preparation",
      description: "Model questions from the question paper.",
      color: "duo-orange",
      lessons: [
        {
          id: "les-u7-exam",
          title: "Model Questions",
          description: "Section B practice.",
          icon: "PenTool",
          slides: [
            {
              id: "u7-secB-q13",
              type: "theory",
              title: "Section B (6 Marks) — Q13",
              content: `**Question:** Analyse David Hume's critique of inductive reasoning.\n\n**Model Answer:**\nDavid Hume (1711–1776) challenged the philosophical foundation of inductive reasoning through what is now called the **Problem of Induction**. Science relies on induction — drawing general conclusions from repeated observations. However, Hume argued that:\n1. We justify induction because it has worked in the past.\n2. But this justification is *itself* inductive, creating **circular reasoning**.\n3. No matter how many times an event occurs, there is no logical guarantee it will occur again.\n\nHume's example: Just because the sun has risen every day does not logically guarantee it will rise tomorrow. One contrary instance would disprove any inductive conclusion. This critique reveals that science, while practically successful, lacks an absolute rational foundation for its core method of reasoning.`
            },
            {
              id: "u7-secA-q10",
              type: "theory",
              title: "Section A (2 Marks) — Q10",
              content: `**Question:** What was the ancient Greek philosophical perspective on seeking knowledge, as explained by Shapin?\n\n**Model Answer:**\nAccording to Shapin, ancient Greek philosophy distinguished between two approaches to knowledge: **Plato's rationalism** (true knowledge comes from reason and the eternal Forms, not sensory experience) and **Aristotle's empiricism** (knowledge arises from systematic observation of the natural world). These contrasting views established the foundational debate in Western philosophy between reason and experience as sources of knowledge.`
            }
          ]
        }
      ]
    }
  ]
};

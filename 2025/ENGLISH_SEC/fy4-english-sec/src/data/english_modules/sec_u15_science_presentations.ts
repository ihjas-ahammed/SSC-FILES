import { Section } from '../../types';

export const SEC_U15_SCIENCE_PRESENTATIONS: Section = {
  id: "sec-u15-science-presentations",
  title: "Unit 15: Science Presentations",
  description: "Purpose, structure, and techniques — University of Colorado Anschutz",
  color: "duo-teal",
  units: [
    {
      id: "u15-intro",
      title: "1. Introduction",
      description: "Why science presentations matter and the role of AI.",
      color: "duo-teal",
      lessons: [
        {
          id: "les-u15-intro",
          title: "Why Present Science?",
          description: "The importance of scientific communication and AI tools.",
          icon: "Presentation",
          slides: [
            {
              id: "sl-u15-intro1",
              type: "theory",
              title: "Introduction",
              content: `Unit 15 Science Presentations Introduction This unit highlights the importance of presenting scientific findings effectively. A clear and well-structured presentation not only communicates research findings but also shows their significance.

Whether through talks, posters or papers, science presentations should state the problem, explain the findings and conclude with key insights to help the audience. In the present era, the significance of these skills has grown with the integration of artificial intelligence (AI) into both research and presentation practices.`
            },
            {
              id: "sl-u15-intro1-p2",
              type: "theory",
              title: "Introduction",
              content: `AI has transformed the way information is designed, organized, and delivered. For instance, tools such as Canva, Beautiful.ai, and Microsoft Designer assist in creating visually compelling slides.

ChatGPT supports presenters by drafting scripts, summarizing complex content, and refining language. Data visualization platforms enhanced by AI, such as Tableau and Power BI, allow researchers to present raw data in interactive and easily understandable formats.`
            },
            {
              id: "sl-u15-intro1-p3",
              type: "theory",
              title: "Introduction",
              content: `Similarly, AI-based rehearsal applications like Yoodli and Orai provide real-time feedback on clarity, tone and pace, enabling speakers to improve their delivery. However, while AI tools enhance design, structure, and practice, the core responsibility of any presentation lies in the speaker’s ability to connect with the audience, simplify complex ideas, and engage in meaningful dialogue.

Technology can assist, but it cannot replace the authenticity, clarity and confidence that effective presenters bring to their work. This chapter is all about presentations-their purpose, structure and techniques that help make communication effective, impactful and engaging.`
            },
            {
              id: "sl-u15-three-q",
              type: "theory",
              title: "Three Sets of Essential Questions",
              content: `Text https://medschool.cuanschutz.edu/docs/librariesprovider157/anat-6950/anat-6950-presentation-tips.pdf How you present science is really important, not only for your careers but for the entire science process. Presentations push you to think broadly and deeply.

Any presentation of your work (a talk, a poster, or a paper) should strive to answer the following basic questions: Setting up the story: What is the big scientific problem my presentation addresses? What is the problem’s significance?`
            },
            {
              id: "sl-u15-three-q-p2",
              type: "theory",
              title: "Three Sets of Essential Questions",
              content: `What are the general and specific questions that my presentation addresses? What is(are) the hypothesis(es) of my presentation?

Telling the story: What is the audience looking at (what am I trying to show)? How should the audience interpret my presentation?`
            },
            {
              id: "sl-u15-three-q-p3",
              type: "theory",
              title: "Three Sets of Essential Questions",
              content: `The grand finale: What do I conclude? What did we learn about the big scientific problem?

What remains to be learned?`
            },
            {
              id: "sl-u15-intro-quiz",
              type: "quiz",
              title: "The Three Story Parts",
              content: "What are the three narrative stages that every science presentation should address?",
              options: [
                { id: "A", text: "Introduction, body, conclusion", isCorrect: false, explanation: "These are generic essay parts, not the framework from the text." },
                { id: "B", text: "Setting up the story, telling the story, and the grand finale", isCorrect: true, explanation: "The text frames a presentation as a story with these three stages." },
                { id: "C", text: "Background, methods, results", isCorrect: false, explanation: "These are section labels, not the three narrative stages described." },
                { id: "D", text: "Problem, experiment, solution", isCorrect: false, explanation: "Not the exact framework used in the text." }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "u15-oral-general",
      title: "2. Oral Presentations — General Tips",
      description: "Nine general tips for effective oral presentations.",
      color: "duo-blue",
      lessons: [
        {
          id: "les-u15-general",
          title: "Nine General Tips",
          description: "Core principles for all oral presentations.",
          icon: "List",
          slides: [
            {
              id: "sl-u15-gen1-3",
              type: "theory",
              title: "Tips 1–3: Conversation, Pictures, Simplicity",
              content: `A. ORAL PRESENTATIONS (Seminars, talks, lectures) General Tips: 1.

Try to have a conversation with the audience. Don’t recite a memorized script.`
            },
            {
              id: "sl-u15-gen1-3-p2",
              type: "theory",
              title: "Tips 1–3: Conversation, Pictures, Simplicity",
              content: `Try to talk directly to people in the audience, as you would if you were sitting down with just one person. 2.

Pictures tell a thousand words: Don’t make the audience read lots of text. Use as few words on your slides as possible.`
            },
            {
              id: "sl-u15-gen1-3-p3",
              type: "theory",
              title: "Tips 1–3: Conversation, Pictures, Simplicity",
              content: `You want the audience to listen to you, not read, or else you will lose them. Use cartoons, images, or short phrases instead of written sentences and then use your voice to tell us what you want us to know.

3. Keep your slides simple: Don’t cram too much info into one slide, and make things as big as possible.`
            },
            {
              id: "sl-u15-gen4-6",
              type: "theory",
              title: "Tips 4–6: Audience Knowledge, Clarity, Emphasis",
              content: `Use cartoons, images, or short phrases instead of written sentences and then use your voice to tell us what you want us to know. 3.

Keep your slides simple: Don’t cram too much info into one slide, and make things as big as possible. 4.`
            },
            {
              id: "sl-u15-gen4-6-p2",
              type: "theory",
              title: "Tips 4–6: Audience Knowledge, Clarity, Emphasis",
              content: `NEVER assume the audience knows more than you. You need to tell us the ideas, methods, and info; unless they are very common knowledge.

It helps to know your audience to judge this. Don’t use jargon unless you define it clearly or unless it’s really common.`
            },
            {
              id: "sl-u15-gen4-6-p3",
              type: "theory",
              title: "Tips 4–6: Audience Knowledge, Clarity, Emphasis",
              content: `5. Don’t make your audience read your mind, or figure out what your slides are about.

You must tell the audience the problem, goal, prediction, or question you’re addressing. You must show them what to look at in the data.`
            },
            {
              id: "sl-u15-gen4-6-p4",
              type: "theory",
              title: "Tips 4–6: Audience Knowledge, Clarity, Emphasis",
              content: `You need to state what you conclude from an observation, and importantly: state what your main points or ideas are (including background information), even when the point/idea seems obvious, and even though the audience may have their own ideas/interpretations. 6.

For the most important ideas, conclusions, and points: slow down, pause, and emphasize. Look us in the eye and make your point like you’re telling us something important.`
            },
            {
              id: "sl-u15-gen4-6-p5",
              type: "theory",
              title: "Tips 4–6: Audience Knowledge, Clarity, Emphasis",
              content: `7. Good flow comes from smooth transitions between slides.

The goal should be to try and tell a story, where one slide leads to the next.`
            },
            {
              id: "sl-u15-gen7-9",
              type: "theory",
              title: "Tips 7–9: Flow, Less is More, Practice",
              content: `The goal should be to try and tell a story, where one slide leads to the next. So, try to organize slides so that the central point from one slide leads logically to the next slide.

Sometimes, this means organizing results NOT in chronological order (what was done first), but in an order that makes a better story. When presenting, make statements that connect the slides together.`
            },
            {
              id: "sl-u15-gen7-9-p2",
              type: "theory",
              title: "Tips 7–9: Flow, Less is More, Practice",
              content: `This takes practice. NOTE: Sometimes you just have to switch gears and tell a new different story.

When you do this, pause, and make it clear that’s what you’re doing. 8.`
            },
            {
              id: "sl-u15-gen7-9-p3",
              type: "theory",
              title: "Tips 7–9: Flow, Less is More, Practice",
              content: `Less is more: Don’t cram too much data or info into a talk. You don’t have to show every last piece of data you ever got.

A good rule of thumb is about 1 slide/min or LESS. (Less if you have several complex slides that demand a lot of time).`
            },
            {
              id: "sl-u15-gen7-9-p4",
              type: "theory",
              title: "Tips 7–9: Flow, Less is More, Practice",
              content: `Exceptions: several slides that really are replicates that build up to one slide....these count essentially as one slide (this is a good technique by the way). 9.

Practice: This may seem contradictory with point #1 but it really is not. It’s easiest to practice in front of people, even just one person.

As a student, at least one practice should always include your advisor.`
            },
            {
              id: "sl-u15-gen-quiz",
              type: "quiz",
              title: "General Tips",
              content: "What is the recommended rule of thumb for slides in relation to time?",
              options: [
                { id: "A", text: "2 slides per minute", isCorrect: false, explanation: "That would be too fast." },
                { id: "B", text: "About 1 slide per minute or LESS", isCorrect: true, explanation: "Tip #8 says: 'A good rule of thumb is about 1 slide/min or LESS.'" },
                { id: "C", text: "3 slides per minute for complex topics", isCorrect: false, explanation: "The guide recommends fewer slides, not more." },
                { id: "D", text: "10 slides total for any presentation", isCorrect: false, explanation: "There is no fixed total; the ratio to time is what matters." }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "u15-oral-specific",
      title: "3. Oral Presentations — Specific Elements",
      description: "Beginning, middle, and end of a research talk.",
      color: "duo-green",
      lessons: [
        {
          id: "les-u15-beginning",
          title: "The Beginning",
          description: "How to open a research talk effectively.",
          icon: "PlayCircle",
          slides: [
            {
              id: "sl-u15-beg",
              type: "theory",
              title: "1. Every Good Story Has a Beginning",
              content: `1. Every good story has a beginning: At the beginning of every research talk, tell us about the big question/problem: Give the audience a sense of the big picture, the general questions, and the problem: What is the central question, broad hypotheses, or problem that your talk addresses and why is it important?

(Again, use slides with cartoons, simple images and very short phrases). Then, give us the background needed to understand this problem and what you did to address it.`
            },
            {
              id: "sl-u15-beg-p2",
              type: "theory",
              title: "1. Every Good Story Has a Beginning",
              content: `Do not give background that is not relevant to your presentation. NOTE: It can also be effective to reverse this: tell a story of prior findings and what they might mean, and then state a paradox, big problem, or grand hypothesis revealed by these findings.

OR, even better, you can do both approaches: state the big picture problem, tell a story, then state big specific issues that come from this story, which you will now add to with your new results.`
            }
          ]
        },
        {
          id: "les-u15-middle",
          title: "The Middle",
          description: "How to present experiments and results clearly.",
          icon: "AlignCenter",
          slides: [
            {
              id: "sl-u15-mid1",
              type: "theory",
              title: "2. Stating Hypotheses and Predictions",
              content: `OR, even better, you can do both approaches: state the big picture problem, tell a story, then state big specific issues that come from this story, which you will now add to with your new results. 2.

Every good story has an unmuddled middle: - For every experiment or set of closely related experiments: State the specific question, hypothesis, prediction, goal, or problem that is being addressed. Ask yourself: Why did I do this?`
            },
            {
              id: "sl-u15-mid1-p2",
              type: "theory",
              title: "2. Stating Hypotheses and Predictions",
              content: `And then tell your audience, in the form of a prediction of a hypothesis, a question or a problem you address in the experiment. In general, the best scenario is the following: 1.

State a clear specific hypothesis directly tied to your experiments (If there is one specific hypothesis that all your experiments address, you can state the hypothesis once, just before the results slides; or, if you address several hypotheses state them before each set of data slides). 2.`
            },
            {
              id: "sl-u15-mid1-p3",
              type: "theory",
              title: "2. Stating Hypotheses and Predictions",
              content: `Then, for each experiment slide, state specific predictions of that hypothesis(es) addressed by the experiment. 3.

Then transition to pt # 4: “to test this prediction, I did this experiment.....”. Alternatively, you can pose a question, then state how you addressed it. - Explain the experiment: Tell us what you did and what the panels/gels show.

Again, don’t assume the audience knows anything other than the most common techniques. And importantly, you need to tell the audience what’s being shown and what they should look at: directly point at the key image, gel band, line on a graph, or table entry.`
            },
            {
              id: "sl-u15-mid2",
              type: "theory",
              title: "Explaining Experiments & Results",
              content: `If you make people spend time trying to figure it out, your message will get lost. - For each result or set of closely related results: what does it mean? Tell us what you conclude from EVERY result you present. The ONLY exception to this is if a set of closely related experiments together lead to the same conclusion: In this case, it may work best to wait and make your conclusion after presenting each of the related results. - Minimize the complexity of data slides: It’s better to split up graphs/images/gels into separate slides than to have too many on one slide. Your slides should NEVER look like a multipanel figure in a paper. - Use photoshop or equivalent to crop unnecessary info and to reorganize into logical easy-to-follow patterns: e.g. for gels, you rarely have to show every lane. Same for cell images (e.g. immunofluorescence); often you only need the key result and the key control. - Alternatively, or in addition, talk ONLY about the key lane/image/number/panel. You don’t have to talk about everything on your slide.`
            },
            {
              id: "sl-u15-mid3",
              type: "theory",
              title: "Data Complexity & Cropping",
              content: `The ONLY exception to this is if a set of closely related experiments together lead to the same conclusion: In this case, it may work best to wait and make your conclusion after presenting each of the related results. - Minimize the complexity of data slides: It’s better to split up graphs/images/gels into separate slides than to have too many on one slide. Your slides should NEVER look like a multipanel figure in a paper. - Use photoshop or equivalent to crop unnecessary info and to reorganize into logical easy-to-follow patterns: e.g. for gels, you rarely have to show every lane.

Same for cell images (e.g. immunofluorescence); often you only need the key result and the key control. - Alternatively, or in addition, talk ONLY about the key lane/image/number/panel. You don’t have to talk about everything on your slide. - Focus on the MOST important result(s) and emphasize them.`
            },
            {
              id: "sl-u15-mid3-p2",
              type: "theory",
              title: "Data Complexity & Cropping",
              content: `You don’t have to show every piece of data you ever generated. This is especially important for short talks (10-15 min).

You should talk about key controls (more on this later). - Sometimes it’s better to use images or cartoons instead of text to label things, depending on what it is. - Make your images, labels, and words BIG and easy to see. It often helps to set up in the lecture room/hall beforehand, then go to the back of the room and look at your slides to ensure that the audience can see what you want them to.`
            }
          ]
        },
        {
          id: "les-u15-end",
          title: "The Ending",
          description: "How to conclude a research talk.",
          icon: "StopCircle",
          slides: [
            {
              id: "sl-u15-end1",
              type: "theory",
              title: "3. Every Good Story Has an Ending",
              content: `3. Every good story has an ending!! (even if it isn’t happily ever after) At the end of every research talk, tell us what it all means or what it could mean.

1. The best thing to do is to relate your findings back to the big problem presented at the beginning.`
            },
            {
              id: "sl-u15-end1-p2",
              type: "theory",
              title: "3. Every Good Story Has an Ending",
              content: `A good way to do this is to propose models with cartoons that fit your data, or refer back to and alter a model that you started with. At a minimum, you should summarize BUT don’t use lots of sentences on your slides.

2. Tell us what important questions remain, and, even better, tell us what NEW questions arise from your results, if possible.`
            },
            {
              id: "sl-u15-end1-p3",
              type: "theory",
              title: "3. Every Good Story Has an Ending",
              content: `NOTE: In grad student talks, it is very common (and good for your committee) to tell us what you plan to do next. BUT: Don’t just throw up a laundry list of random experiments and controls you plan to do.

Again, tell us WHY you want to do these things in the future. Give your plans context: state the important next questions or predictions to test and maybe give an idea of what you plan to do to address these.`
            },
            {
              id: "sl-u15-end1-p4",
              type: "theory",
              title: "3. Every Good Story Has an Ending",
              content: `You can and should do this even if the next thing to do is a missing but seemingly boring control for a flawed experiment you presented: You can re-state the problem the flawed experiment addressed, and state a trivial explanation you want to rule out. Again: Working hard to figure out WHY you want to do what you plan to do is VERY crucial: It can convince you it IS important AND keep you from doing something unimportant.

Glossary Hypothesis : A proposed explanation or prediction that can be tested through research or experiments. Jargon : Specialized or technical language used by a particular group, often difficult for outsiders to understand.`
            },
            {
              id: "sl-u15-end-fib",
              type: "fill_in_blank",
              title: "Fill in the Blank",
              content: "How you present ___ is really important, not only for your careers but for the entire ___ process.",
              blankAnswer: "science"
            }
          ]
        }
      ]
    },
    {
      id: "u15-glossary",
      title: "4. Glossary",
      description: "Key terms from the unit.",
      color: "duo-violet",
      lessons: [
        {
          id: "les-u15-vocab",
          title: "Key Terms",
          description: "Vocabulary from Science Presentations.",
          icon: "BookOpen",
          slides: [
            {
              id: "v-hypothesis",
              type: "word_card",
              title: "Word Card",
              content: "Vocabulary",
              wordCard: {
                word: "Hypothesis",
                translation: "A proposed explanation or prediction that can be tested through research or experiments",
                context: "Central to every research presentation — the prediction being tested.",
                example: "State a clear specific hypothesis directly tied to your experiments."
              }
            },
            {
              id: "v-jargon",
              type: "word_card",
              title: "Word Card",
              content: "Vocabulary",
              wordCard: {
                word: "Jargon",
                translation: "Specialized or technical language used by a particular group, often difficult for outsiders to understand",
                context: "Should be avoided or clearly defined in scientific presentations for general audiences.",
                example: "NEVER assume the audience knows more than you. Don't use jargon unless you define it clearly."
              }
            }
          ]
        }
      ]
    }
  ]
};

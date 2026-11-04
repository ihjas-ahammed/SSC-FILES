import { Section } from '../../types';

export const SEC_U14_PRESENTATION_TIPS: Section = {
  id: "sec-u14-presentation-tips",
  title: "Unit 14: Tips for Creating & Giving Scientific Presentations",
  description: "Step-by-step guide from University of Illinois Urbana-Champaign Physics 596",
  color: "duo-green",
  units: [
    {
      id: "u14-intro",
      title: "1. Introduction",
      description: "Why scientific presentations matter and the resource background.",
      color: "duo-green",
      lessons: [
        {
          id: "les-u14-intro",
          title: "About the Resource",
          description: "Context for the presentation guide.",
          icon: "Info",
          slides: [
            {
              id: "sl-u14-intro1",
              type: "theory",
              title: "Introduction",
              content: `Unit 14 Tips for Creating and Giving Scientific Presentations Introduction When we share our ideas with others, it's not just about what we say but also about how we say it. Scientific presentations are a way of telling the story of our research in a clear and engaging manner.

A good presentation helps the audience understand our work, even if they are not experts in our field. This chapter on Effective Scientific Presentations is based on a resource prepared for the Graduate Physics Orientation Course “Physics 596” (2013) at the University of Illinois Urbana-Champaign.`
            },
            {
              id: "sl-u14-intro1-p2",
              type: "theory",
              title: "Introduction",
              content: `It teaches us how to prepare and deliver a talk step by step. It explains how to know our audience, organize our slides, highlight only the most important points and present ideas with confidence.

It also gives practical tips-like using simple visuals, avoiding too much text, and speaking clearly so that our message is understood and remembered. The chapter demonstrates that a scientific presentation is not just about data, but about communication, clarity and connection with the audience.`
            }
          ]
        }
      ]
    },
    {
      id: "u14-creating",
      title: "2. Creating Your Talk",
      description: "Four steps to get started and organize a 25-minute talk.",
      color: "duo-green",
      lessons: [
        {
          id: "les-u14-steps",
          title: "Getting Started — Four Steps",
          description: "How to begin preparing your scientific presentation.",
          icon: "ClipboardList",
          slides: [
            {
              id: "sl-u14-steps",
              type: "theory",
              title: "Steps 1–4: The Foundation",
              content: `How to get started? Step 1: Identify your audience: this will control the level of your presentation and the amount of background material you need to orient everyone in the audience.

Step 2: Determine how much time you have for your presentation: this will control how much time you have to talk about each part of your outline. Step 3: Identify the main points you want to convey: you can reasonably convey only 2-3 main points in a 20- or 30-minute talk.

Step 4: Create an outline of your talk: this will build in the logical organization of your presentation and help you decide what figures and other supporting evidence you need to make your points.`
            },
            {
              id: "sl-u14-25min",
              type: "theory",
              title: "Organizing a 25-Minute Talk",
              content: `Organizing a 25-minute scientific talk Background and Introduction (~6 minutes) => 4-5 slides ~1 Title slide - Your names, date, citation to paper ~1 Outline slide - Organization of talk ~1 Overview slide - Why is this research important? ~1-2 Background slides - Provides essential background for non-experts Methods (~6 minutes) => 2-3 slides Theoretical/experimental methods used in paper Results (~9 minutes) => 4-5 slides ~ What did you (or the authors) find? Only develop 1-2 key results *Critique and Citation Summary (~3 minutes) => 2 slides 1 critique slide - What was wrong with/good about the paper?

1 citation slide - What happened with the result/field after the paper? *Journal club only`
            },
            {
              id: "sl-u14-titleslide",
              type: "theory",
              title: "Title Slide & Outline",
              content: `The title slide and outline prepares the audience to listen and shows organization of talk Title Slide Your names and affiliations Paper citation (for JC) Venue and date Attention-getting graphic Outline or overview of presentation Prepares the audience to listen Provides a logical structure for your talk Provides motivation and context Summarizes key points (limit to two or three for a 20- to 30-minute talk)`
            },
            {
              id: "sl-u14-body",
              type: "theory",
              title: "Body and Summary Slide",
              content: `The “body” of your presentation is the intellectual content of your talk Problem statement, motivation - ~1-2 slides Previous work - ~1-2 slides Methods - ~1-3 slides Key Results - ~5-6 slides Provide a “summary” slide Recap key results and conclusions Reiterate main critiques (for JC) This slide will probably stay on the screen during the question period and will thus get the longest audience exposure - make it count!`
            },
            {
              id: "sl-u14-steps-quiz",
              type: "quiz",
              title: "Steps Check",
              content: "According to the guide, how many main points can you reasonably convey in a 20–30 minute talk?",
              options: [
                { id: "A", text: "5–7 main points", isCorrect: false, explanation: "The guide says 2-3 main points only." },
                { id: "B", text: "2–3 main points", isCorrect: true, explanation: "Step 3 says: 'you can reasonably convey only 2-3 main points in a 20- or 30-minute talk.'" },
                { id: "C", text: "As many as you can fit", isCorrect: false, explanation: "The guide emphasizes less is more." },
                { id: "D", text: "Exactly 4 main points", isCorrect: false, explanation: "The guide specifies 2-3 only." }
              ]
            }
          ]
        },
        {
          id: "les-u14-slides",
          title: "Tips for Preparing Slides",
          description: "Design principles for effective scientific slides.",
          icon: "Layout",
          slides: [
            {
              id: "sl-u14-slide-tips",
              type: "theory",
              title: "Key Slide Design Rules",
              content: `TIPS FOR PREPARING YOUR TALK Have only 1 idea per slide Use the header to state the main idea of the slide, and use the body of the slide to support that idea Use well-labeled graphs and figures to illustrate your key points...this makes the slide more real and interesting to the audience Avoid too much text or too many distracting images Use figures to illustrate your key points Figures: • enliven slides • promote audience interest • provide supporting evidence for key points • help explain complex ideas and relationships quickly • show how things work, etc Label all elements in a figure • Point out important features • Label both axes of graphs and show units • Provide a brief caption • Give credit to source Presenting data is your most important and challenging task • Avoid copying a graph from a formal article - they have a different style, e.g., labels are too small • Use color and make lines thick, labels legible • Label axes and annotate important points with arrows and add words • Use tables sparingly - if used highlight important parts`
            },
            {
              id: "sl-u14-figures",
              type: "theory",
              title: "Using Figures Effectively",
              content: `Show the equipment IF it helps as part of your proof - but sparingly, not just because you love it • Photographs give scale and reality - but add labels • Schematics provide concept • Diagrams strip away unnecessary details • ALL OF THESE can be useful in combination Make sure you provide something to show scale, and include a short caption to explain what the audience is looking at.`
            },
            {
              id: "sl-u14-data",
              type: "theory",
              title: "Presenting Data",
              content: `Presenting data is your most important and challenging task • Avoid copying a graph from a formal article - they have a different style, e.g., labels are too small • Use color and make lines thick, labels legible • Label axes and annotate important points with arrows and add words • Use tables sparingly - if used highlight important parts Show the equipment IF it helps as part of your proof - but sparingly, not just because you love it • Photographs give scale and reality - but add labels • Schematics provide concept • Diagrams strip away unnecessary details • ALL OF THESE can be useful in combination Make sure you provide something to show scale, and include a short caption to explain what the audience is looking at.`
            },
            {
              id: "sl-u14-fonts",
              type: "theory",
              title: "Fonts, Colors & Visual Design",
              content: `Remember, your goal is to convey your ideas, so avoid distracting text and effects! • Don't overuse PowerPoint animations and sounds! • Make sure there is good contrast between text and background • Use simple (or no) backgrounds on slides • Eschew weird fonts • Use the same font throughout the talk • Don't use calligraphy or serif fonts • Make all text at least 20 pt • Use San Serif fonts • Use San Aarif font (e.g., Ariel) • Not Sarif font (e.g., Times New Roman) Skinny parts disappear when projected Use “normal” colors • DON'T use red/green or red/blue as contrasting colors • Make sure colors look the way you expect using an LCD projector! • Avoid neon colors and pastels • Don't use many random colors; people expect color to mean something • Strive for easy reading TIPS FOR GIVING A SCIENTIFIC PRESENTATION Pointers for giving the best possible talk: • Maintain eye contact with audience - Don't stare at screen or monitor • Do not read your talk!`
            }
          ]
        }
      ]
    },
    {
      id: "u14-giving",
      title: "3. Giving Your Talk",
      description: "Delivery tips and handling stage fright.",
      color: "duo-teal",
      lessons: [
        {
          id: "les-u14-delivery",
          title: "Delivery Tips",
          description: "How to give the best possible talk.",
          icon: "Mic",
          slides: [
            {
              id: "sl-u14-del1",
              type: "theory",
              title: "Pointers for Giving the Best Talk",
              content: `talk: • Maintain eye contact with audience - Don't stare at screen or monitor • Do not read your talk! • Avoid nervous mannerisms - Pacing, bobbing, waving arms, jingling coins • Use laser pointer or stick directed at screen Don't point directly at overhead on projector Don't block the screen • Train yourself to speak slowly and distinctly - practice! • Avoid “fillers”: “uh”, “like”, “um”, “okay” • Be enthusiastic! If you don't act excited by your results, don't expect the audience to be! • Don't show any material on slides (e.g., figures, equations, text, etc.) you can't explain!! • Rehearse how you'll end your talk Don't end with “Well, I guess that's it...” Don't just stop and let the committee guess that you're done Thank the audience!

The best way to prepare for a talk is to Know Your Material • Practice, practice, practice • Focus on communicating, not performing Humor is good, but don't overdo it • Keep it simple • Prepare key phrases. It's okay to write out material first Write the key point to make for each slide If the slide doesn't have a point, eliminate it!!!`
            },
            {
              id: "sl-u14-del2",
              type: "theory",
              title: "Know Your Material & Practice",
              content: `The best way to prepare for a talk is to Know Your Material • Practice, practice, practice • Focus on communicating, not performing Humor is good, but don't overdo it • Keep it simple • Prepare key phrases. It's okay to write out material first Write the key point to make for each slide If the slide doesn't have a point, eliminate it!!! • Stay on track Small (planned) digression is fine if motivated, but get back on track (shows you are paying attention to audience) • Bring a copy of your slides if giving a PowerPoint talk this will help you practice you can distribute these to interested people • Make appropriate use of the screen: don't underfill the screen, and don't put key information at the edges of the screen.`
            },
            {
              id: "sl-u14-rehearse",
              type: "theory",
              title: "Rehearsing Your Talk",
              content: `Rehearse Your Talk! • A few days before: Practice in front of friends and check timing Rehearse likely questions Solicit feedback about logic and clarity Revise (shorten) • The night before: Go over one more time Put all materials in order (number your slides!) Check everything just before your talk • Check the projector Make sure you know how to turn it on See that it is plugged in Check which way to position your slides Adjust the focus • Check microphones, pointer, other tools • Arrange your slides, notes, and other materials Be able to reach everything without moving Be able to go through your slides without fumbling • Have a watch handy to check the time “Stage Fright”?`
            },
            {
              id: "sl-u14-stagefright",
              type: "theory",
              title: "Stage Fright — Be Prepared",
              content: `how to turn it on See that it is plugged in Check which way to position your slides Adjust the focus • Check microphones, pointer, other tools • Arrange your slides, notes, and other materials Be able to reach everything without moving Be able to go through your slides without fumbling • Have a watch handy to check the time “Stage Fright”? Be Prepared! • Know your subject thoroughly Practice in a big room in front of real people Have all your materials in order Arrive early Familiarize yourself with the equipment • Ask a friend to sit in the middle of the audience and speak primarily to him or her Tell him to look interested and nod frequently Ask her to smile and nod encouragingly whenever she catches your eye For Talks To an Inexpert Audience: • Do not use slang or ‘laboratory’ terms • Choose the simplest word • Don't use acronyms • Speak slowly and distinctly • Present less information than in a talk to an “expert” audience, go into more detail.`
            },
            {
              id: "sl-u14-audience",
              type: "theory",
              title: "Inexpert Audiences & Handling Questions",
              content: `For Talks To an Inexpert Audience: • Do not use slang or ‘laboratory’ terms • Choose the simplest word • Don't use acronyms • Speak slowly and distinctly • Present less information than in a talk to an “expert” audience, go into more detail. Handling questions is an essential part of giving a talk • As part of preparing your talk, try to anticipate questions you might get In each slide, try to identify what the weak points are, what questions you might ask, etc. • Be prepared to repeat simple derivations of equations or estimates presented on your slides • If you don't know the answer?

Say “That's an excellent question. I'm not sure; I'll have to look into it” or “Let's talk about it afterward”`
            },
            {
              id: "sl-u14-del-quiz",
              type: "quiz",
              title: "Delivery Quiz",
              content: "What should you NOT do according to the tips for giving a scientific presentation?",
              options: [
                { id: "A", text: "Maintain eye contact with the audience", isCorrect: false, explanation: "Eye contact is encouraged." },
                { id: "B", text: "Read your talk word for word from notes", isCorrect: true, explanation: "The guide explicitly says 'Do not read your talk!' — talk directly to people as you would in conversation." },
                { id: "C", text: "Be enthusiastic about your results", isCorrect: false, explanation: "The guide says 'Be enthusiastic! If you don't act excited by your results, don't expect the audience to be!'" },
                { id: "D", text: "Thank the audience at the end", isCorrect: false, explanation: "The guide says to thank the audience." }
              ]
            },
            {
              id: "sl-u14-del-fib",
              type: "fill_in_blank",
              title: "Fill in the Blank",
              content: "Avoid 'fillers': 'uh', '___, 'um', 'okay'.",
              blankAnswer: "like"
            }
          ]
        }
      ]
    },
    {
      id: "u14-glossary",
      title: "4. Glossary",
      description: "Key terms from the unit.",
      color: "duo-violet",
      lessons: [
        {
          id: "les-u14-vocab",
          title: "Key Terms",
          description: "Vocabulary from Tips for Scientific Presentations.",
          icon: "BookOpen",
          slides: [
            {
              id: "v-methodology",
              type: "word_card",
              title: "Word Card",
              content: "Vocabulary",
              wordCard: {
                word: "Methodology",
                translation: "The systematic process or set of methods used in scientific research or presentations",
                context: "Used to describe the structured approach to presenting scientific work.",
                example: "Step 4: Create an outline of your talk — this will build in the logical organization of your methodology."
              }
            },
            {
              id: "v-citation",
              type: "word_card",
              title: "Word Card",
              content: "Vocabulary",
              wordCard: {
                word: "Citation",
                translation: "A reference to a published work used to support ideas or acknowledge the source of information",
                context: "Required on the title slide for journal club presentations.",
                example: "Title Slide: Your names and affiliations, paper citation (for JC), venue and date."
              }
            },
            {
              id: "v-journalclub",
              type: "word_card",
              title: "Word Card",
              content: "Vocabulary",
              wordCard: {
                word: "Journal Club",
                translation: "A scientific presentation gathering where members present and discuss published research papers",
                context: "A specific type of scientific presentation where critique and citation summary are required.",
                example: "Journal club presentations require a critique slide — what was wrong with/good about the paper?"
              }
            }
          ]
        }
      ]
    }
  ]
};

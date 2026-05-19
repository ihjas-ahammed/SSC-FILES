import { Section } from '../../types';

export const SEC_U1_SCIENTISTS_IMAGINATION: Section = {
  id: "sec-u1-scientists-imagination",
  title: "Unit 1: Scientists & Imagination",
  description: "Scientists and the Power of Imagination — AH Documentary",
  color: "duo-blue",
  units: [
    {
      id: "u1-intro",
      title: "1. Introduction",
      description: "Context and key ideas from the documentary introduction.",
      color: "duo-blue",
      lessons: [
        {
          id: "les-u1-quote",
          title: "Einstein's Opening Quote",
          description: "The quote that sets the tone for the unit.",
          icon: "Lightbulb",
          slides: [
            {
              id: "sl-u1-q1",
              type: "theory",
              title: "The Quote",
              content: `Introduction "Imagination is more important than knowledge. For knowledge is limited to all we now know and understand, while imagination embraces the entire world, and all there ever will be to know and understand." — Albert Einstein`
            },
            {
              id: "sl-u1-q2",
              type: "theory",
              title: "What the Quote Means",
              content: `The above quote by Einstein aptly summarises the importance of imagination that is boundless compared to knowledge that generally refers to the current understanding in various fields. In a way, imagination leads to knowledge.

Yet, the role of imagination, especially in science, is often sidelined as it is abstract. In scientific studies, imagination plays a crucial role in arriving at discoveries as illustrated through the YouTube video "Scientists and the Power of Imagination," published on Feb 26, 2024.`
            },
            {
              id: "sl-u1-q3",
              type: "quiz",
              title: "Quick Check",
              content: "According to Einstein, what embraces the entire world and all there ever will be to know?",
              options: [
                { id: "A", text: "Knowledge", isCorrect: false, explanation: "Knowledge is described as limited to what we currently know." },
                { id: "B", text: "Imagination", isCorrect: true, explanation: "Einstein says imagination embraces the entire world and all there ever will be to know." },
                { id: "C", text: "Science", isCorrect: false, explanation: "Science is not mentioned in the quote directly." },
                { id: "D", text: "Education", isCorrect: false, explanation: "Education is not the subject of this quote." }
              ]
            }
          ]
        },
        {
          id: "les-u1-intro2",
          title: "Budding Scientists & AI",
          description: "How imagination helps future scientists and the role of AI.",
          icon: "Cpu",
          slides: [
            {
              id: "sl-u1-i1",
              type: "theory",
              title: "Sharpening the Faculty of Imagination",
              content: `The budding scientists need to sharpen the faculty of imagination to achieve success in their goals. The video suggests walking, reading, writing, meditation, and puzzle solving as some of the methods that one can engage in, to become more imaginative.

The ability to think outside the box is projected as essential for growth. The developments in AI technology are envisioned to function as tools to augment human imagination rather than curbing it, as observed currently.

Its efficacy depends on individuals, as to whether one perceives its possibilities and turns it to constructive application or not.`
            },
            {
              id: "sl-u1-i2",
              type: "theory",
              title: "Imagining the Impossible",
              content: `Unfortunately, there is a tendency to limit one's imagination to what is considered to be "possible" but, on the contrary, it is when one imagines the "impossible" that one arrives at a substantial turning point. Education is perceived to provide opportunities for learners to recognise the importance of imagination and to inspire them to engage in activities suggested earlier to emerge as future scientists.`
            },
            {
              id: "sl-u1-i3",
              type: "fill_in_blank",
              title: "Fill in the Blank",
              content: "The video suggests walking, reading, writing, meditation, and ___ solving as some of the methods to become more imaginative.",
              blankAnswer: "puzzle"
            }
          ]
        }
      ]
    },
    {
      id: "u1-transcript-1",
      title: "2. Transcript: Imagination as the Bridge",
      description: "Imagination in scientific discovery — Harvey, Newton, Einstein.",
      color: "duo-teal",
      lessons: [
        {
          id: "les-u1-tx-q",
          title: "The Central Question",
          description: "How does imagination drive scientific breakthroughs?",
          icon: "HelpCircle",
          slides: [
            {
              id: "sl-u1-tx-q1",
              type: "theory",
              title: "Opening Questions from the Transcript",
              content: `Transcript How scientists make groundbreaking discoveries? Could it be that the power of imagination plays a significant role in scientific advancements?`
            },
            {
              id: "sl-u1-tx-q2",
              type: "theory",
              title: "Imagination as Human Cognition",
              content: `Indeed, imagination is not just the fuel of artists and writers, it is a crucial aspect of human cognition, an indispensable tool in the realm of scientific discovery. When we think of imagination, we often picture whimsical fantasies and make-believe.

But in the world of science, imagination serves as the bridge that connects the known to the unknown, the evident to the yet-to-be-discovered.`
            }
          ]
        },
        {
          id: "les-u1-scientists",
          title: "Great Scientists & Imagination",
          description: "Harvey, Newton, and Einstein — imagination in action.",
          icon: "Star",
          slides: [
            {
              id: "sl-u1-harvey",
              type: "theory",
              title: "William Harvey — Blood Circulation",
              content: `Let's take a journey through time and revisit the works of some of history's most renowned scientists. William Harvey, for instance, envisioned the circulation of blood within the human body, a concept that was unheard of in his time.

His imaginative leap paved the way for a new understanding of human physiology. Similarly, Sir Isaac Newton, sitting under an apple tree, was struck by a simple question - why did the apple fall straight down and not sideways or upwards?`
            },
            {
              id: "sl-u1-newton",
              type: "theory",
              title: "Isaac Newton — Law of Gravity",
              content: `His imaginative leap paved the way for a new understanding of human physiology. Similarly, Sir Isaac Newton, sitting under an apple tree, was struck by a simple question - why did the apple fall straight down and not sideways or upwards?

This imaginative curiosity led to the formulation of the law of gravity, a fundamental principle that shaped our understanding of the physical world. And then there was Albert Einstein.

His theory of relativity, a cornerstone of modern physics, was born out of his bold imagination.`
            },
            {
              id: "sl-u1-einstein",
              type: "theory",
              title: "Albert Einstein — Theory of Relativity",
              content: `This imaginative curiosity led to the formulation of the law of gravity, a fundamental principle that shaped our understanding of the physical world. And then there was Albert Einstein.

His theory of relativity, a cornerstone of modern physics, was born out of his bold imagination. He dared to visualize what it would be like to travel at the speed of light, a thought experiment that revolutionized our perception of time and space.

These are but a few examples of how imagination has served as the catalyst for scientific innovation. It is the silent, often overlooked companion of logic and reason, sparking questions and breeding theories that push the boundaries of human knowledge.

As we delve into the history of scientific discoveries, it is clear that the imagination has been a driving force behind many of the world's most incredible advancements. The power of imagination in science is not only about conjuring up novel ideas, but also about envisioning new ways to solve problems, to understand the universe, and to better the human condition.`
            },
            {
              id: "sl-u1-sci-quiz",
              type: "quiz",
              title: "Which Scientist?",
              content: "Which scientist imagined the circulation of blood within the human body?",
              options: [
                { id: "A", text: "Isaac Newton", isCorrect: false, explanation: "Newton formulated the law of gravity." },
                { id: "B", text: "Albert Einstein", isCorrect: false, explanation: "Einstein developed the theory of relativity." },
                { id: "C", text: "William Harvey", isCorrect: true, explanation: "Harvey envisioned blood circulation, reshaping human physiology." },
                { id: "D", text: "Galileo Galilei", isCorrect: false, explanation: "Galileo is associated with astronomy and mechanics." }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "u1-transcript-2",
      title: "3. Transcript: Nurturing Imagination",
      description: "Five activities to foster imagination for scientific thinking.",
      color: "duo-green",
      lessons: [
        {
          id: "les-u1-harness",
          title: "How to Harness Imagination",
          description: "The pivotal question and introduction to five activities.",
          icon: "Zap",
          slides: [
            {
              id: "sl-u1-harness1",
              type: "theory",
              title: "The Pivotal Question",
              content: `But how can we harness the power of imagination for scientific discovery? This question brings us to the pivotal point of nurturing our imagination.

The process is not as elusive as it might sound. In fact, it's quite straightforward and can be achieved through a series of activities that we engage in daily.

Take walking, for instance.`
            },
            {
              id: "sl-u1-walking",
              type: "theory",
              title: "1. Walking — Mind Wandering",
              content: `In fact, it's quite straightforward and can be achieved through a series of activities that we engage in daily. Take walking, for instance.

When we walk, we allow our minds to wander. This wandering, or daydreaming, stimulates our imagination, leading us to form images, ideas, and concepts that are not present to the senses.

These could be the seeds of a new scientific theory, a groundbreaking discovery, or a novel solution to a complex problem. Reading, too, plays a significant role in fostering imagination.`
            },
            {
              id: "sl-u1-reading",
              type: "theory",
              title: "2. Reading — Mental Flexibility",
              content: `These could be the seeds of a new scientific theory, a groundbreaking discovery, or a novel solution to a complex problem. Reading, too, plays a significant role in fostering imagination.

When we read, we step into the shoes of different characters, explore unknown territories and grapple with abstract ideas. This mental flexibility and adaptability are crucial for scientific discovery.

It allows us to see things from different perspectives, question the status quo, and explore the uncharted realms of knowledge. Writing, on the other hand, helps us articulate our thoughts and ideas.

It encourages us to construct coherent narratives, out of our chaotic thoughts, thereby refining our imagination.`
            }
          ]
        },
        {
          id: "les-u1-activities2",
          title: "Writing, Meditation & Puzzle Solving",
          description: "Three more activities that nurture imagination.",
          icon: "Brain",
          slides: [
            {
              id: "sl-u1-writing",
              type: "theory",
              title: "3. Writing — Articulating Thoughts",
              content: `It allows us to see things from different perspectives, question the status quo, and explore the uncharted realms of knowledge. Writing, on the other hand, helps us articulate our thoughts and ideas.

It encourages us to construct coherent narratives, out of our chaotic thoughts, thereby refining our imagination. This ability to articulate is key to scientific discovery.

It enables us to communicate our ideas effectively, engage in meaningful discussions, and contribute to the scientific community. Meditation, in its own way, can also stimulate imagination.`
            },
            {
              id: "sl-u1-meditation",
              type: "theory",
              title: "4. Meditation — Tapping the Subconscious",
              content: `It enables us to communicate our ideas effectively, engage in meaningful discussions, and contribute to the scientific community. Meditation, in its own way, can also stimulate imagination.

By quieting the mind, meditation allows us to tap into our subconscious, where our deepest and most innovative ideas reside. It gives us the clarity and focus needed to sift through these ideas and bring them to the surface.

Puzzle solving, too, can sharpen our imagination. It forces us to think outside the box, look at things from different angles, and find creative solutions to problems.`
            },
            {
              id: "sl-u1-puzzle",
              type: "theory",
              title: "5. Puzzle Solving — Thinking Outside the Box",
              content: `It gives us the clarity and focus needed to sift through these ideas and bring them to the surface. Puzzle solving, too, can sharpen our imagination.

It forces us to think outside the box, look at things from different angles, and find creative solutions to problems. These skills are invaluable in the realm of science, where problems are complex and solutions are not always apparent.

Therefore, nurturing our imagination is not just about creativity. It is also about fostering scientific thinking and problem solving.`
            },
            {
              id: "sl-u1-nurture-quiz",
              type: "quiz",
              title: "Which Activity?",
              content: "Which activity 'quiets the mind' and allows access to the subconscious where innovative ideas reside?",
              options: [
                { id: "A", text: "Writing", isCorrect: false, explanation: "Writing helps articulate thoughts, not quiet the mind." },
                { id: "B", text: "Reading", isCorrect: false, explanation: "Reading fosters flexibility and new perspectives." },
                { id: "C", text: "Meditation", isCorrect: true, explanation: "Meditation quiets the mind, allowing access to the subconscious where innovative ideas reside." },
                { id: "D", text: "Walking", isCorrect: false, explanation: "Walking allows the mind to wander and stimulates daydreaming." }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "u1-transcript-3",
      title: "4. Transcript: Imagination Shapes Reality",
      description: "Imagination's tangible influence on our world.",
      color: "duo-violet",
      lessons: [
        {
          id: "les-u1-reality",
          title: "Imagination Moulds Reality",
          description: "From inventions to scientific visualization.",
          icon: "Globe",
          slides: [
            {
              id: "sl-u1-real1",
              type: "theory",
              title: "The Question: Beyond Discovery?",
              content: `But does imagination only play a role in scientific discovery? Or can it also shape our reality?`
            },
            {
              id: "sl-u1-real2",
              type: "theory",
              title: "A Tangible Influence",
              content: `Let's delve into that thought. Imagination, as abstract as it may seem, has a tangible influence on our perception of the world around us.

It's much more than a mere tool for ideation, or a means to escape reality. It is a powerful force that moulds our reality.

Think about it. Every great invention in human history began as a spark of imagination.

The telephone, the airplane, the Internet, all were once figments of someone's imagination before they became reality. The human mind has this fascinating ability to visualize the non-existent, to dream of the impossible, and then to convert those dreams into tangible, real world entities.

But it's not just about creating physical objects or technological wonders.`
            },
            {
              id: "sl-u1-real3",
              type: "theory",
              title: "Perception of Time, Space & Problem Solving",
              content: `But it's not just about creating physical objects or technological wonders. Our imagination shapes our reality in subtler ways, too.

For instance, our perception of time and space can be influenced by our imagination. When we imagine ourselves in different situations or places, we are essentially creating alternate realities in our minds.

These imagined realities can then impact how we interpret and interact with our actual reality. This is particularly evident in the scientific field.

Scientists often use their imagination to visualize complex concepts or phenomena that they cannot directly observe, like the structure of an atom or the curvature of spacetime. By imagining these concepts, they can gain a deeper understanding and come up with new theories or predictions.

Imagination also plays a crucial role in problem solving. When faced with a complex problem, our minds automatically start generating possible solutions, often coming up with innovative approaches that we wouldn't have considered otherwise.

This ability to think outside the box, to imagine different possibilities, is what drives scientific discovery and technological advancement. So, when we look at it this way, we see that our imagination is not just a tool for scientific discovery.`
            },
            {
              id: "sl-u1-real4",
              type: "theory",
              title: "An Integral Part of Reality",
              content: `This ability to think outside the box, to imagine different possibilities, is what drives scientific discovery and technological advancement. So, when we look at it this way, we see that our imagination is not just a tool for scientific discovery.

It is an integral part of our reality, shaping our perception, influencing our actions, and driving our progress. So, our imagination does not just help us solve problems or make discoveries.

It also shapes our understanding of the world. Imagination is a powerful force, and by harnessing it, we can not only unlock new scientific insights, but also create a reality that is as boundless and as diverse as our minds can conceive.`
            },
            {
              id: "sl-u1-real-fib",
              type: "fill_in_blank",
              title: "Fill in the Blank",
              content: "Imagination is a powerful force, and by harnessing it, we can not only unlock new scientific insights, but also create a reality that is as ___ and as diverse as our minds can conceive.",
              blankAnswer: "boundless"
            }
          ]
        }
      ]
    },
    {
      id: "u1-transcript-4",
      title: "5. Transcript: The Future of Imagination",
      description: "AI, VR, interdisciplinary research, and education.",
      color: "duo-blue",
      lessons: [
        {
          id: "les-u1-future",
          title: "Technology Augmenting Imagination",
          description: "How AI and VR expand scientific imagination.",
          icon: "Cpu",
          slides: [
            {
              id: "sl-u1-fut1",
              type: "theory",
              title: "The Future Question",
              content: `What does the future hold for the role of imagination in science? As we venture forward, the role of imagination in science is set to evolve in fascinating ways.

The advent of emerging technologies and interdisciplinary research is providing a fertile ground for the seeds of imagination to burgeon.`
            },
            {
              id: "sl-u1-fut2",
              type: "theory",
              title: "Artificial Intelligence",
              content: `Consider artificial intelligence, for example. It's not just about machines performing tasks.

It's about machines learning, adapting, and perhaps even imagining. As AI continues to advance, it will undoubtedly serve as a powerful tool to augment our imaginative capabilities, enabling us to explore realms previously out of reach.

Similarly, the rise of virtual and augmented reality technologies is reshaping the landscape of scientific discovery.`
            },
            {
              id: "sl-u1-fut3",
              type: "theory",
              title: "Virtual Reality & Interdisciplinary Research",
              content: `As AI continues to advance, it will undoubtedly serve as a powerful tool to augment our imaginative capabilities, enabling us to explore realms previously out of reach. Similarly, the rise of virtual and augmented reality technologies is reshaping the landscape of scientific discovery.

These platforms offer immersive experiences that can catalyze our creative thinking, allowing us to visualize complex scientific concepts and scenarios in unprecedented ways. Interdisciplinary research is another key player.

By bridging gaps between different fields of study, it fosters a rich cross pollination of ideas, stimulating our imagination in novel and unexpected directions. Imagine the possibilities when a physicist collaborates with a biologist or when a chemist teams up with an artist.

The interplay of diverse perspectives can spark innovative solutions to complex scientific problems. And let us not forget about the role of education in nurturing the scientists of tomorrow.`
            },
            {
              id: "sl-u1-fut4",
              type: "theory",
              title: "Education and the Next Generation",
              content: `The interplay of diverse perspectives can spark innovative solutions to complex scientific problems. And let us not forget about the role of education in nurturing the scientists of tomorrow.

As the world becomes more interconnected, it's vital that we cultivate a learning environment that encourages curiosity, creativity, and, yes, imagination. By doing so, we equip the next generation with the tools they need to tackle the scientific challenges of the future.

So, to answer the question, the future of imagination in science is bright. It's dynamic, it's transformative.

It's a future where the boundaries of what's possible are constantly being redefined. As we look to the future, it is clear that the role of imagination in science will continue to be pivotal, driving new discoveries and advancements.`
            },
            {
              id: "sl-u1-fut-quiz",
              type: "quiz",
              title: "AI and Imagination",
              content: "How does the documentary view the role of AI in relation to human imagination?",
              options: [
                { id: "A", text: "AI will replace human imagination entirely.", isCorrect: false, explanation: "The documentary argues against this view." },
                { id: "B", text: "AI will augment and enhance human imagination.", isCorrect: true, explanation: "AI is envisioned as a tool to amplify, not replace, human imaginative capabilities." },
                { id: "C", text: "AI has no relationship to imagination.", isCorrect: false, explanation: "The text explicitly connects AI development with imagination." },
                { id: "D", text: "AI currently limits imagination.", isCorrect: false, explanation: "The concern exists currently, but the future vision is of augmentation." }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "u1-conclusion",
      title: "6. Conclusion",
      description: "Summary and final reflections from the documentary.",
      color: "duo-orange",
      lessons: [
        {
          id: "les-u1-conclusion",
          title: "Imagination — The Silent Partner",
          description: "Key takeaways from the documentary.",
          icon: "CheckCircle",
          slides: [
            {
              id: "sl-u1-con1",
              type: "theory",
              title: "Imagination as the Driving Force",
              content: `As we have seen, imagination plays a vital role in scientific discovery. It's the silent partner to reason, the spark that lights the torch of innovation.

It's been the driving force behind the groundbreaking work of scientists like William Harvey, Sir Isaac Newton and Albert Einstein. Nurturing imagination is crucial not just for children, but for adults too.

Activities like walking, reading, writing, meditation and puzzle solving can help to foster this vital cognitive function. It's about allowing ourselves the time and the space to think differently, to explore and to question.`
            },
            {
              id: "sl-u1-con2",
              type: "theory",
              title: "Shaping Reality and the Future",
              content: `It's about allowing ourselves the time and the space to think differently, to explore and to question. Imagination also has the power to shape our reality.

It's not just about dreaming up new ideas, but about seeing the world from a different perspective. It's about looking at a problem and seeing not just the obstacle, but the opportunity.

Looking to the future, the role of imagination in science is only set to grow. As we push the boundaries of what we know, it's our ability to imagine that will guide us, helping us to make sense of the unknown and to create new possibilities.`
            },
            {
              id: "sl-u1-con-fib",
              type: "fill_in_blank",
              title: "Fill in the Blank",
              content: "Imagination is the silent partner to reason, the ___ that lights the torch of innovation.",
              blankAnswer: "spark"
            }
          ]
        }
      ]
    },
    {
      id: "u1-glossary",
      title: "7. Glossary",
      description: "Key vocabulary from the unit.",
      color: "duo-violet",
      lessons: [
        {
          id: "les-u1-vocab",
          title: "Key Terms",
          description: "All 8 glossary words from Scientists and the Power of Imagination.",
          icon: "BookOpen",
          slides: [
            {
              id: "v-whimsical",
              type: "word_card",
              title: "Word Card",
              content: "Vocabulary",
              wordCard: {
                word: "Whimsical",
                translation: "Playful and imaginative",
                context: "Used to describe the kind of thinking often associated with imagination.",
                example: "When we think of imagination, we often picture whimsical fantasies and make-believe."
              }
            },
            {
              id: "v-breeding",
              type: "word_card",
              title: "Word Card",
              content: "Vocabulary",
              wordCard: {
                word: "Breeding",
                translation: "To produce or lead to something over a period of time",
                context: "Used to describe how imagination sparks new ideas over time.",
                example: "It is the silent companion of logic and reason, sparking questions and breeding theories."
              }
            },
            {
              id: "v-conjuring",
              type: "word_card",
              title: "Word Card",
              content: "Vocabulary",
              wordCard: {
                word: "Conjuring",
                translation: "To picture in the mind",
                context: "Used to describe the act of mental visualization in science.",
                example: "The power of imagination in science is not only about conjuring up novel ideas."
              }
            },
            {
              id: "v-harness",
              type: "word_card",
              title: "Word Card",
              content: "Vocabulary",
              wordCard: {
                word: "Harness",
                translation: "To control something in order to use its power",
                context: "Used to describe how we can use and direct the power of imagination.",
                example: "But how can we harness the power of imagination for scientific discovery?"
              }
            },
            {
              id: "v-tangible",
              type: "word_card",
              title: "Word Card",
              content: "Vocabulary",
              wordCard: {
                word: "Tangible",
                translation: "Clear, definite, or substantial in effect; from Latin tangibilis meaning 'to touch'",
                context: "Used to describe imagination's concrete influence on reality.",
                example: "Imagination has a tangible influence on our perception of the world around us."
              }
            },
            {
              id: "v-burgeon",
              type: "word_card",
              title: "Word Card",
              content: "Vocabulary",
              wordCard: {
                word: "Burgeon",
                translation: "To grow or expand rapidly",
                context: "Used to describe how ideas flourish in fertile environments.",
                example: "Emerging technologies provide fertile ground for the seeds of imagination to burgeon."
              }
            },
            {
              id: "v-augment",
              type: "word_card",
              title: "Word Card",
              content: "Vocabulary",
              wordCard: {
                word: "Augment",
                translation: "To increase or strengthen",
                context: "Used to describe AI's role in enhancing human imagination.",
                example: "AI will serve as a powerful tool to augment our imaginative capabilities."
              }
            },
            {
              id: "v-immersive",
              type: "word_card",
              title: "Word Card",
              content: "Vocabulary",
              wordCard: {
                word: "Immersive",
                translation: "Seeming to surround the audience so they feel completely involved",
                context: "Used to describe VR and AR experiences that catalyze creative thinking.",
                example: "These platforms offer immersive experiences that can catalyze our creative thinking."
              }
            }
          ]
        }
      ]
    },
    {
      id: "u1-exam",
      title: "8. Exam Preparation",
      description: "Model questions from Section A and B.",
      color: "duo-orange",
      lessons: [
        {
          id: "les-u1-exam",
          title: "Model Questions",
          description: "Section A short-answer and Section B paragraph practice.",
          icon: "PenTool",
          slides: [
            {
              id: "sl-u1-secA",
              type: "theory",
              title: "Section A (2 Marks) — Activities to Nurture Imagination",
              content: `**Question:** Give any four activities suggested in 'Scientists and the Power of Imagination' to nurture imagination.

**Model Answer:** The documentary suggests four activities: (1) **Walking** — allows the mind to wander and daydream, stimulating imagination; (2) **Reading** — fosters mental flexibility and exposes one to new perspectives; (3) **Meditation** — quiets the mind to tap into the subconscious where innovative ideas reside; (4) **Puzzle solving** — forces thinking outside the box and finding creative solutions.`
            },
            {
              id: "sl-u1-secB",
              type: "theory",
              title: "Section B (6 Marks) — Imagination Shapes Reality",
              content: `**Question:** Elucidate how imagination shapes reality, with reference to the documentary.

**Key Points:**
1. Imagination has a **tangible influence** on perception of the world.
2. Every great invention — telephone, airplane, Internet — began as a spark of imagination.
3. Humans can visualize the non-existent and convert dreams into real-world entities.
4. Perception of **time and space** can be influenced by imagination (alternate realities).
5. Scientists visualize concepts they cannot observe — atom structure, curvature of spacetime.
6. Imagination drives **problem solving** and technological advancement.
7. Conclusion: 'Our imagination is not just a tool for scientific discovery. It is an integral part of our reality.'`
            },
            {
              id: "sl-u1-exam-quiz",
              type: "quiz",
              title: "Exam Practice",
              content: "What does the documentary say about imagining the 'impossible'?",
              options: [
                { id: "A", text: "It leads to frustration and should be avoided.", isCorrect: false, explanation: "The text says the opposite." },
                { id: "B", text: "It is when one imagines the impossible that one arrives at a substantial turning point.", isCorrect: true, explanation: "The introduction states: 'it is when one imagines the impossible that one arrives at a substantial turning point.'" },
                { id: "C", text: "It is only possible for trained scientists.", isCorrect: false, explanation: "The text encourages everyone to imagine the impossible." },
                { id: "D", text: "It has no practical value in science.", isCorrect: false, explanation: "The whole documentary argues the opposite." }
              ]
            }
          ]
        }
      ]
    }
  ]
};

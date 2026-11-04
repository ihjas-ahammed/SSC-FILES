import { Section } from '../../types';

export const SEC_U8_MEMORY_LINDEN: Section = {
  id: "sec-u8-memory-linden",
  title: "Unit 8: You Can't Completely Trust Your Memories",
  description: "Autobiographical memory and its adaptive nature — David J. Linden",
  color: "duo-teal",
  units: [
    {
      id: "u8-intro",
      title: "1. Introduction",
      description: "About David Linden and popular science writing.",
      color: "duo-teal",
      lessons: [
        {
          id: "les-u8-author",
          title: "About David J. Linden",
          description: "Neuroscientist and author.",
          icon: "User",
          slides: [
            {
              id: "sl-u8-auth1",
              type: "theory",
              title: "Who is David J. Linden?",
              content: `Unit 8 You Can't Completely Trust Your Memories- But That Doesn't Make Them Any Less Important David Linden Introduction David J. Linden is an American neuroscientist and author known for his research on the cellular substrates of memory storage and his efforts to popularize brain science.

Born in 1961, he grew up in Santa Monica, California. His research primarily focuses on the cellular mechanisms of memory formation, the molecular basis of addiction and the recovery of function after brain injury.`
            },
            {
              id: "sl-u8-auth1-p2",
              type: "theory",
              title: "Who is David J. Linden?",
              content: `In 2010, he was recognized for his scientific contributions as a fellow of the American Association for the Advancement of Science. He served for many years as the chief editor of "Journal of Neurophysiology".

He has authored several popular science books on neuroscience, including: The Accidental Mind (2007), The Compass of Pleasure (2011), Touch (2016) and Unique (2020). Linden currently holds a position as a professor in the Department of Neuroscience at the Johns Hopkins University School of Medicine in Baltimore, Maryland.`
            },
            {
              id: "sl-u8-auth2",
              type: "theory",
              title: "What is Popular Science?",
              content: `Popular Science, commonly referred to as pop sci, is a genre of scientific communication aimed at a general audience. It seeks to present scientific concepts, discoveries and developments in a manner that is both accessible and engaging without relying on technical jargons or specialized knowledge.

Unlike academic scientific literature which is intended for experts in the field, popular science translates complex ideas into language that can be understood by non-specialists. This form of communication plays a vital role in promoting scientific literacy, fostering public interest in science and bridging the gap between the scientific community and society at large.

Prominent figures such as Carl Sagan, Stephen Hawking, and Neil de Grasse Tyson have been instrumental in advancing the field of popular science.`
            },
            {
              id: "sl-u8-auth3",
              type: "theory",
              title: "Popular Science Magazine & the Text",
              content: `"Popular Science" is a long-established American magazine and digital pop sci platform that plays a significant role in communicating complex scientific ideas in a clear and engaging manner. It covers a wide range of topics including space exploration, environmental issues, health, innovation and emerging technologies.

Through articles, videos and interactive contents, "Popular Science" aims to foster curiosity, promote scientific literacy and bridge the gap between researchers and the general public. The text is an excerpt adapted from David J.`
            },
            {
              id: "sl-u8-auth3-p2",
              type: "theory",
              title: "Popular Science Magazine & the Text",
              content: `Linden's Unique: The New Science from Human Individuality published by Basic Books and reprinted in "Popular Science" digital platform. It explores the fascinating and often surprising nature of autobiographical memory.

Drawing on psychological research and evolutionary insights, Linden examines how our memories are not perfect recordings of the past but are instead flexible, emotionally shaped, and influenced by present knowledge and needs. Through examples ranging from everyday experiences to trauma, he highlights the ways in which memory functions less as a historical archive and more as a tool for learning, adaptation and decision-making.

By challenging the assumption that accuracy is the main goal of memory, this excerpt invites readers to rethink how and why we remember.`
            },
            {
              id: "sl-u8-auth-quiz",
              type: "quiz",
              title: "About the Author",
              content: "What is David J. Linden's primary research focus?",
              options: [
                { id: "A", text: "The psychology of decision-making", isCorrect: false, explanation: "Not his primary focus." },
                { id: "B", text: "Cellular mechanisms of memory formation, molecular basis of addiction, and brain injury recovery", isCorrect: true, explanation: "The introduction explicitly states these three areas as his primary research focus." },
                { id: "C", text: "Evolutionary biology and genetics", isCorrect: false, explanation: "Not his field." },
                { id: "D", text: "Artificial intelligence and machine learning", isCorrect: false, explanation: "Not his field." }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "u8-text",
      title: "2. The Text — Memory Distortions",
      description: "Types of memory distortions and how they work.",
      color: "duo-blue",
      lessons: [
        {
          id: "les-u8-sins",
          title: "Sins of Commission",
          description: "How autobiographical memories are distorted.",
          icon: "AlertCircle",
          slides: [
            {
              id: "sl-u8-sin1",
              type: "theory",
              title: "Distortions — Sins of Commission",
              content: `Our autobiographical memories are subject to all kinds of distortions- what psychologist Daniel Schacter cheekily calls "sins of commission." In addition to misattributions of time and the suggestibility of eyewitnesses, there's bias, which is the warping of one's recollection to mold to present beliefs, knowledge, and feelings. For example, after a bad breakup, people's recollections of the early stages of the relationship, previously recalled with pleasure, often turn darker.

Or people will say, "I always knew that candidate X would win the election," even when they had voiced doubts about that outcome beforehand.`
            },
            {
              id: "sl-u8-sin2",
              type: "theory",
              title: "Field Memory vs. Observer Memory",
              content: `Some of the ways autobiographical memory fails are well known. Generally, our memories of recent events are more accurate and detailed than our memories of the distant past.

But there are other, less obvious changes. If I ask you to recall a recent event, you are most likely to imagine it from your own point of view, with the camera, as it were, in your own eyes.`
            },
            {
              id: "sl-u8-sin2-p2",
              type: "theory",
              title: "Field Memory vs. Observer Memory",
              content: `This is called field memory. But if I ask you to recall a memory from your childhood, there is a much greater probability that your point of view will shift to that of an observer; you will see yourself in the scene rather than seeing the event through your own eyes.

Furthermore, if asked to recall the emotional tone of a past event, you are more likely to evoke a field memory, while if asked to recall facts of an event, you are more likely to call forth an observer memory. The key point here is that the way we recall the memory is not set in stone.

It can be strongly influenced by the task at hand.`
            },
            {
              id: "sl-u8-sin3",
              type: "theory",
              title: "Repetition Renders Memory Generic",
              content: `Another time-related phenomenon is that repetition of experience renders memories generic. If you've only been to the beach once, then you are likely to remember many details of that experience.

But if you've been over 50 times, you're unlikely to remember details of visit number 37, unless something emotionally affecting occurred. Perhaps visit number 37 was the day a dead whale washed up on the beach or the day you met your future spouse.`
            },
            {
              id: "sl-u8-sin3-p2",
              type: "theory",
              title: "Repetition Renders Memory Generic",
              content: `Then the details of that day would likely be written into your memory deeply and retained with greater detail and fidelity. Emotions, both positive and negative, are the currency of autobiographical memory.

Emotions cause the brain to store memory in a stronger and more permanent fashion, set down in bold type and italics. This reinforcement of emotional memories is mostly good and sometimes bad.

It's good because emotionally salient events are often the ones you most need to remember later in life. However, in some cases, memory can become pathologically persistent, as when the memory of a traumatic experience- like an assault or a soldier's time in combat is recollected incessantly.`
            },
            {
              id: "sl-u8-sin-quiz",
              type: "quiz",
              title: "Memory Types",
              content: "What is the key difference between field memory and observer memory?",
              options: [
                { id: "A", text: "Field memory is more accurate; observer memory is distorted.", isCorrect: false, explanation: "Both can be accurate or distorted depending on context." },
                { id: "B", text: "Field memory = first-person POV (through your eyes); observer memory = third-person POV (seeing yourself in the scene).", isCorrect: true, explanation: "Field memory is 'through your own eyes'; observer memory is 'watching yourself from outside'." },
                { id: "C", text: "Field memory is for facts; observer memory is for emotions.", isCorrect: false, explanation: "It's actually the reverse — emotional tone evokes field memory; facts evoke observer memory." },
                { id: "D", text: "Field memory applies only to very recent events; observer memory to all others.", isCorrect: false, explanation: "The distinction is more nuanced than just time." }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "u8-adaptive",
      title: "3. Why Memory is Adaptive",
      description: "Memory failures as features, not bugs.",
      color: "duo-green",
      lessons: [
        {
          id: "les-u8-purpose",
          title: "What is Memory For?",
          description: "The evolutionary purpose of memory.",
          icon: "Brain",
          slides: [
            {
              id: "sl-u8-purp1",
              type: "theory",
              title: "The Primary Purpose of Memory",
              content: `If our memories for events are often so inaccurate and changeable, then why do we even have them? What is memory for?

The main answer is that memory allows us to learn: to adjust our behaviour based on individual experience and therefore efficiently find food, avoid predators, find and attract mates, and so on. In other words, memory does for the individual what evolution of the genome does for the species over many generations: it allows us to respond to the environment in a way that increases the chance of surviving and passing genes onto the next generation.`
            },
            {
              id: "sl-u8-purp1-p2",
              type: "theory",
              title: "The Primary Purpose of Memory",
              content: `That is endlessly useful. For example, a new born mouse has an inborn fear of foxes, even if it is the descendant of many generations of lab mice with no exposure to foxes at all.

This is a useful adaptation for mice in the wild, but it is not a good general strategy for dealing with a changing world. It is not possible to encode all useful behavioural responses into the genome in order to have a newborn equipped to deal with every eventuality.`
            },
            {
              id: "sl-u8-purp1-p3",
              type: "theory",
              title: "The Primary Purpose of Memory",
              content: `It's both more efficient and flexible to have animals remember and learn, even if they don't do so perfectly. And there is another benefit.

The act of recollection allows us to mentally time travel to a past event, and this allows us to imagine a future as well as a past. Memory releases our mental life from the tyranny of the present moment.

And imagining a future allows us to make predictions, which is a requirement for decision-making.`
            },
            {
              id: "sl-u8-purp2",
              type: "theory",
              title: "Failures as Features",
              content: `Another answer to the question of what memory is for is that the particular failures of autobiographical memory are actually features rather than bugs. For memory to be useful, it must be updated and integrated with subsequent experience, even if it alters the memory of the original event.

In that way, it's helpful for recollection to render the memory of an event malleable, so that it may be integrated with the present. In most situations, a generic memory compiled from many trips to the beach is more useful in guiding future decisions and behavior than fifty stand-alone, detailed, and accurate beach trip memories.`
            },
            {
              id: "sl-u8-purp2-p2",
              type: "theory",
              title: "Failures as Features",
              content: `The repetition-driven loss of detail allows for the efficient use of the brain's limited memory resources. In other words, it's not surprising that our memories of events are often inaccurate because the particular way in which memories are compromised is often useful.

What's surprising is that we mostly fail to recognize this in our daily lives. We humans all have an inborn tendency to create a plausible story out of memory fragments.

Because of this ongoing narrative construction, we are often confident about the veracity of blurred memories and allow them to form the basis of our core beliefs about ourselves.`
            },
            {
              id: "sl-u8-purp-fib",
              type: "fill_in_blank",
              title: "Fill in the Blank",
              content: "Memory does for the individual what evolution of the ___ does for the species over many generations.",
              blankAnswer: "genome"
            },
            {
              id: "sl-u8-purp-quiz",
              type: "quiz",
              title: "Adaptive Memory",
              content: "Linden argues that the 'failures' of autobiographical memory are actually:",
              options: [
                { id: "A", text: "Flaws that evolution failed to correct.", isCorrect: false, explanation: "Linden argues the opposite." },
                { id: "B", text: "Features rather than bugs — failures that make memory more useful.", isCorrect: true, explanation: "Memory must be malleable and integrated with new experience to remain useful, making 'failures' adaptive." },
                { id: "C", text: "Proof that human memory is inferior to computer memory.", isCorrect: false, explanation: "The text does not make this comparison." },
                { id: "D", text: "Random events that have no adaptive purpose.", isCorrect: false, explanation: "Linden explicitly argues these failures serve adaptive purposes." }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "u8-glossary",
      title: "4. Glossary",
      description: "Key terms from the unit.",
      color: "duo-violet",
      lessons: [
        {
          id: "les-u8-vocab",
          title: "Key Terms",
          description: "Vocabulary from the memory text.",
          icon: "BookOpen",
          slides: [
            {
              id: "v-malleable",
              type: "word_card",
              title: "Word Card",
              content: "Vocabulary",
              wordCard: {
                word: "Malleable",
                translation: "Capable of being shaped; adaptable",
                context: "Used to describe how memory can be reshaped by new experiences.",
                example: "It's helpful for recollection to render the memory of an event malleable, so that it may be integrated with the present."
              }
            },
            {
              id: "v-plausible",
              type: "word_card",
              title: "Word Card",
              content: "Vocabulary",
              wordCard: {
                word: "Plausible",
                translation: "Seeming reasonable and believable",
                context: "Used to describe the stories we construct from memory fragments.",
                example: "We humans all have an inborn tendency to create a plausible story out of memory fragments."
              }
            },
            {
              id: "v-genome",
              type: "word_card",
              title: "Word Card",
              content: "Vocabulary",
              wordCard: {
                word: "Genome",
                translation: "The complete set of genetic material in an organism",
                context: "Used to compare individual memory to species-level adaptation.",
                example: "Memory does for the individual what evolution of the genome does for the species over many generations."
              }
            },
            {
              id: "v-tyranny",
              type: "word_card",
              title: "Word Card",
              content: "Vocabulary",
              wordCard: {
                word: "Tyranny",
                translation: "Cruel, oppressive and unjust use of power",
                context: "Used metaphorically to describe how memory frees us from being trapped in the present moment.",
                example: "Memory releases our mental life from the tyranny of the present moment."
              }
            }
          ]
        }
      ]
    },
    {
      id: "u8-exam",
      title: "5. Exam Preparation",
      description: "Model questions from Section A.",
      color: "duo-orange",
      lessons: [
        {
          id: "les-u8-exam",
          title: "Model Questions",
          description: "Section A practice.",
          icon: "PenTool",
          slides: [
            {
              id: "sl-u8-secA",
              type: "theory",
              title: "Section A (2 Marks) — Field vs. Observer Memory",
              content: `**Question:** What is the difference between field memory and observer memory?

**Model Answer:** **Field memory** is when a person recalls an event from their own point of view — as if seeing through their own eyes. This is more common for recent events and emotional recollections. **Observer memory** is when a person recalls an event from an outside perspective — seeing themselves in the scene. This is more common for childhood memories and factual recollections. Linden notes that the type of memory recalled depends significantly on the task at hand, showing that memory is flexible and not static.`
            },
            {
              id: "sl-u8-secB",
              type: "theory",
              title: "Section B (6 Marks) — Why Memory is Adaptive",
              content: `**Question:** Explain Linden's argument that memory's 'failures' are actually 'features'.

**Key Points:**
1. Memory must be **updated and integrated** with subsequent experience to remain useful.
2. It is better to have a **generic memory** compiled from many beach trips than 50 accurate but separate memories.
3. **Repetition-driven loss of detail** allows efficient use of the brain's limited memory resources.
4. Memory failures allow for **mental time travel** — imagining a future as well as recalling the past.
5. **Emotional reinforcement** — emotions cause stronger, more permanent memories, which is mostly adaptive.
6. Linden concludes: 'The particular way in which memories are compromised is often useful.'`
            }
          ]
        }
      ]
    }
  ]
};

import { Section } from '../../types';

export const SEC_U3_WHATS_EXPECTED: Section = {
  id: "sec-u3-whats-expected",
  title: "Unit 3: \"What's Expected of Us?\"",
  description: "A speculative fiction warning about free will — Ted Chiang (2005)",
  color: "duo-purple",
  units: [
    {
      id: "u3-intro",
      title: "1. Introduction",
      description: "About Ted Chiang and the story's context.",
      color: "duo-purple",
      lessons: [
        {
          id: "les-u3-author",
          title: "About Ted Chiang",
          description: "Author background and literary significance.",
          icon: "User",
          slides: [
            {
              id: "sl-u3-auth1",
              type: "theory",
              title: "Who is Ted Chiang?",
              content: `Introduction Ted Chiang (b.1967 as Chiang Feng-nan) is an American author of speculative fiction. His parents were Chinese immigrants settled in America.

He graduated in Computer Science from Brown University. His debut story Tower of Babylon (1990) won the Nebula Award.`
            },
            {
              id: "sl-u3-auth1-p2",
              type: "theory",
              title: "Who is Ted Chiang?",
              content: `He is employed as a technical writer in Microsoft and settled in Seattle. His collected works include Stories of Your Life and Others (2002), Exhalation (2019).

The short story “Story of Your Life” was adapted into the film Arrival (2016). “It’s by Chiang in the style of an op-ed published in The New York Times, about efforts to reduce inequality through genetic enhancement. He also writes articles on topics related to AI.

The themes of his works centre mostly on concepts like time, space, free will, technology, and human-machine interactions that combine scientific speculation with philosophical depth. His accomplishments include PEN/Malamud Award, Hugo Award, and Locus Award among others.`
            },
            {
              id: "sl-u3-auth2",
              type: "theory",
              title: "Chiang's Themes & Impact",
              content: `Chiang’s works encourage readers to think critically about technology, ethics, and human agency in contemporary society. His stories are particularly valuable for students navigating the challenges of an increasingly digital and algorithm-driven world.

His essay, “Why AI isn’t going to make art” published in The New Yorker stirred a lot of interest among the public. His academic expertise in the field in addition to creativity, authenticates his arguments unlike other writers.`
            },
            {
              id: "sl-u3-auth2-p2",
              type: "theory",
              title: "Chiang's Themes & Impact",
              content: `He warns that in a world that idealises AI, the repercussions of such an approach on society are to be thoroughly analysed. On the one hand, it can prove to be time saving.

Yet, the increasing dependence on such tools and the tendency to consider the matter generated through a few prompts to be original, demand urgent attention. Similarly, as companies utilise these tools to save money, the pertinent question is whether quality is compromised at some level and whether these are studied properly in terms of future impact.

As he states in an interview with Scott Detrow, he employs science fiction as “a way to dramatize thought experiments” that are otherwise difficult to comprehend.`
            },
            {
              id: "sl-u3-auth-quiz",
              type: "quiz",
              title: "About the Author",
              content: "What degree did Ted Chiang earn, and from which university?",
              options: [
                { id: "A", text: "MFA in Creative Writing from Columbia University", isCorrect: false, explanation: "That is Marie Howe's degree." },
                { id: "B", text: "Computer Science from Brown University", isCorrect: true, explanation: "Chiang graduated in Computer Science from Brown University." },
                { id: "C", text: "Physics from MIT", isCorrect: false, explanation: "Not mentioned in the text." },
                { id: "D", text: "Literature from Cornell University", isCorrect: false, explanation: "That is Kim Zarins' background." }
              ]
            }
          ]
        },
        {
          id: "les-u3-context",
          title: "The Story's Context",
          description: "The Predictor device and the story's warning structure.",
          icon: "AlertTriangle",
          slides: [
            {
              id: "sl-u3-ctx1",
              type: "theory",
              title: "The Story and Its Structure",
              content: `for humans who are fast transforming into machines in terms of behaviour. The story, through employing science fiction elements, attempts to alert us to this alarming transformation.

It is structured like a warning from the future. A communication technology appears to have been developed in the future to send even lengthy messages to the past using a process called “negative delay” that is accurate to mega second range.`
            },
            {
              id: "sl-u3-ctx1-p2",
              type: "theory",
              title: "The Story and Its Structure",
              content: `Hence, the message is presented as having been received just over one year back in the past. The technology, in its infancy, is already popular in the present in the form of a small device called Predictor.

Chiang emphasises the harmful impact of technological developments on the world if not handled in a mindful manner. It is leading to a community without freewill who are addicted to the make-belief world that it creates without even realising that it is not real.

The tragedy is that humanity has reached a point where even if one realises the truth, there is nothing one can do to alter it. Hence, the device is employed as a trope to denote the gradual loss of freewill.`
            },
            {
              id: "sl-u3-ctx2",
              type: "theory",
              title: "Symbolic Readings",
              content: `The story, a speculative fiction, forces us to pause and think about our actions before it is too late. On one level, the Predictor could resemble gadgets like smart phones which are addictive in nature and on the other, it can be a symbol that represents human beings themselves.

It resembles a smiling human face (green LED flash) which we find a lot around us and interests everyone but the fact that it appears even before there is a need for it, is something to be pondered on. If a smile is flashed (light blinks), one forms a bond (presses the button) without questioning its credibility.`
            },
            {
              id: "sl-u3-ctx2-p2",
              type: "theory",
              title: "Symbolic Readings",
              content: `The description of the device’s “heart” as consisting of circuits points further towards the human-machine resemblance. The story demands us to question whether what we term as choices are actually imposed on us by the social constructs.

The title of the story aptly refers to this dilemma. It vividly portrays the different stages of a relationship in human life- at first, one is so engrossed in what the relation represents that one feels proud about it and displays it before others.`
            },
            {
              id: "sl-u3-ctx2-p3",
              type: "theory",
              title: "Symbolic Readings",
              content: `By the time the attraction fades and the reality sinks in, one is left to lead a robotic existence. Thus, the self-deception that is gradually becoming a way of life is projected as the ultimate threat to humans.

This is one point where the boundaries that separate the past from the present blur because humans have always engaged in this process of acting, the only difference being in the fact that earlier while we were unaware of what is fake, now we are both aware and open to it.`
            }
          ]
        }
      ]
    },
    {
      id: "u3-text",
      title: "2. The Story — Full Text Analysis",
      description: "Close reading of every paragraph of the story.",
      color: "duo-teal",
      lessons: [
        {
          id: "les-u3-predictor",
          title: "The Predictor Device",
          description: "What the Predictor is and how it works.",
          icon: "Zap",
          slides: [
            {
              id: "sl-u3-open",
              type: "theory",
              title: "Opening Warning",
              content: `By now you’ve probably seen a Predictor; millions of them have been sold by the time you’re reading this. For those who haven’t seen one, it’s a small device, like a remote for opening your car door.

Its only features are a button and a big green LED. The light flashes if you press the button.

Specifically, the light flashes one second before you press the button.`
            },
            {
              id: "sl-u3-pred1",
              type: "theory",
              title: "Description of the Predictor",
              content: `Specifically, the light flashes one second before you press the button. Most people say that when they first try it, it feels like they’re playing a strange game, one where the goal is to press the button after seeing the flash, and it’s easy to play.

But when you try to break the rules, you find that you can’t. If you try to press the button without having seen a flash, the flash immediately appears, and no matter how fast you move, you never push the button until a second has elapsed.`
            },
            {
              id: "sl-u3-pred1-p2",
              type: "theory",
              title: "Description of the Predictor",
              content: `If you wait for the flash, intending to keep from pressing the button afterwards, the flash never appears. No matter what you do, the light always precedes the button press.

There’s no way to fool a Predictor.`
            },
            {
              id: "sl-u3-pred2",
              type: "theory",
              title: "The Negative Time Delay Circuit",
              content: `The heart of each Predictor is a circuit with a negative time delay — it sends a signal back in time. The full implications of the technology will become apparent later, when negative delays of greater than a second are achieved, but that’s not what this warning is about.

The immediate problem is that Predictors demonstrate that there’s no such thing as free will.`
            },
            {
              id: "sl-u3-pred-quiz",
              type: "quiz",
              title: "What does the Predictor demonstrate?",
              content: "What is the central philosophical implication of the Predictor device?",
              options: [
                { id: "A", text: "Humans can predict the future.", isCorrect: false, explanation: "The device predicts, not humans." },
                { id: "B", text: "Free will is an illusion.", isCorrect: true, explanation: "The device demonstrates determinism — every action is predetermined." },
                { id: "C", text: "Time travel is possible for everyone.", isCorrect: false, explanation: "The story uses negative delay as a device, not time travel for humans." },
                { id: "D", text: "Technology will control humanity.", isCorrect: false, explanation: "While implied, the core message is about free will." }
              ]
            }
          ]
        },
        {
          id: "les-u3-freewill",
          title: "Free Will — Arguments & Reality",
          description: "Why arguments alone never convinced people, but demonstration does.",
          icon: "Brain",
          slides: [
            {
              id: "sl-u3-fw1",
              type: "theory",
              title: "Irrefutable Arguments vs. Lived Experience",
              content: `There have always been arguments showing that free will is an illusion, some based on hard physics, others based on pure logic. Most people agree these arguments are irrefutable, but no one ever really accepts the conclusion.

The experience of having free will is too powerful for an argument to overrule. What it takes is a demonstration, and that’s what a Predictor provides.`
            },
            {
              id: "sl-u3-fw2",
              type: "theory",
              title: "Akinetic Mutism — A Cognitive Plague",
              content: `Typically, a person plays with a Predictor compulsively for several days, showing it to friends, trying various schemes to outwit the device. The person may appear to lose interest in it, but no one can forget what it means — over the following weeks, the implications of an immutable future sink in.

Some people, realizing that their choices don’t matter, refuse to make any choices at all. Like a legion of Bartleby the Scriveners, they no longer engage in spontaneous action.`
            },
            {
              id: "sl-u3-fw2-p2",
              type: "theory",
              title: "Akinetic Mutism — A Cognitive Plague",
              content: `Eventually, a third of those who play with a Predictor must be hospitalized because they won’t feed themselves. The end state is akinitic mutism, a kind of waking coma.

They’ll track motion with their eyes, and change position occasionally, but nothing more. The ability to move remains, but the motivation is gone.`
            },
            {
              id: "sl-u3-fw2-p3",
              type: "theory",
              title: "Akinetic Mutism — A Cognitive Plague",
              content: `Before people started playing with Predictors, akinitic mutism was very rare, a result of damage to the anterior cingulate region of the brain. Now it spreads like a cognitive plague.

People used to speculate about a thought that destroys the thinker, some unspeakable Lovecraftian horror, or a Gödel sentence that crashes the human logical system. It turns out that the disabling thought is one that we’ve all encountered: the idea that free will doesn’t exist.

It just wasn’t harmful until you believed it.`
            },
            {
              id: "sl-u3-fw3",
              type: "theory",
              title: "Doctors' Arguments and Patients' Response",
              content: `Doctors try arguing with the patients while they still respond to conversation. We had all been living happy, active lives before, they reason, and we hadn’t had free will then either.

Why should anything change? “No action you took last month was any more freely chosen than one you take today,” a doctor might say. “You can still behave that way now.” The patients invariably respond, “But now I know.” And some of them never say anything again.`
            },
            {
              id: "sl-u3-fw4",
              type: "theory",
              title: "The Automaton Argument — and Why It Fails",
              content: `means that we do have free will. An automaton cannot become discouraged, only a free-thinking entity can.

The fact that some individuals descend into akinitic mutism whereas others do not just highlights the importance of making a choice. Unfortunately, such reasoning is faulty: every form of behaviour is compatible with determinism.

One dynamic system might fall into a basin of attraction and wind up at a fixed point, whereas another exhibits chaotic behaviour indefinitely, but both are completely deterministic.`
            }
          ]
        },
        {
          id: "les-u3-warning",
          title: "The Warning from the Future",
          description: "The narrator's message and the paradox of sending it.",
          icon: "Radio",
          slides: [
            {
              id: "sl-u3-warn1",
              type: "theory",
              title: "The Message",
              content: `the first lengthy message received when circuits with negative delays in the megasecond range are used to build communication devices. Other messages will follow, addressing other issues.

My message to you is this: pretend that you have free will. It’s essential that you behave as if your decisions matter, even though you know that they don’t.`
            },
            {
              id: "sl-u3-warn1-p2",
              type: "theory",
              title: "The Message",
              content: `The reality isn’t important: what’s important is your belief, and believing the lie is the only way to avoid a waking coma. Civilization now depends on self-deception.

Perhaps it always has.`
            },
            {
              id: "sl-u3-warn2",
              type: "theory",
              title: "The Paradox: Why Send It At All?",
              content: `who will descend into akinitic mutism and who won’t. There’s nothing anyone can do about it — you can’t choose the effect the Predictor has on you.

Some of you will succumb and some of you won’t, and my sending this warning won’t alter those proportions. So why did I do it?

Because I had no choice.`
            },
            {
              id: "sl-u3-warn-fib",
              type: "fill_in_blank",
              title: "Fill in the Blank",
              content: "Pretend that you have free will. It's essential that you behave as if your ___ matter, even though you know that they don't.",
              blankAnswer: "decisions"
            }
          ]
        }
      ]
    },
    {
      id: "u3-glossary",
      title: "3. Glossary",
      description: "Key terms from the story.",
      color: "duo-violet",
      lessons: [
        {
          id: "les-u3-vocab",
          title: "Key Terms",
          description: "Vocabulary from What's Expected of Us?",
          icon: "BookOpen",
          slides: [
            {
              id: "v-immutable",
              type: "word_card",
              title: "Word Card",
              content: "Vocabulary",
              wordCard: {
                word: "Immutable",
                translation: "Unchangeable",
                context: "Used to describe a future that cannot be altered.",
                example: "Over the following weeks, the implications of an immutable future sink in."
              }
            },
            {
              id: "v-legion",
              type: "word_card",
              title: "Word Card",
              content: "Vocabulary",
              wordCard: {
                word: "Legion",
                translation: "A large crowd or multitude",
                context: "Used to describe the mass of people who refuse to make choices.",
                example: "Like a legion of Bartleby the Scriveners, they no longer engage in spontaneous action."
              }
            },
            {
              id: "v-determinism",
              type: "word_card",
              title: "Word Card",
              content: "Vocabulary",
              wordCard: {
                word: "Determinism",
                translation: "The theory that everything that happens must happen as it does and could not have happened otherwise",
                context: "The philosophical doctrine underlying the story.",
                example: "Every form of behaviour is compatible with determinism."
              }
            },
            {
              id: "v-automaton",
              type: "word_card",
              title: "Word Card",
              content: "Vocabulary",
              wordCard: {
                word: "Automaton",
                translation: "A machine or person acting mechanically without thinking or feeling",
                context: "Used to contrast with a free-thinking entity.",
                example: "An automaton cannot become discouraged, only a free-thinking entity can."
              }
            },
            {
              id: "v-akinetic",
              type: "word_card",
              title: "Word Card",
              content: "Vocabulary",
              wordCard: {
                word: "Akinetic Mutism",
                translation: "A waking coma — the ability to move remains but motivation is gone",
                context: "The condition that spreads after people use the Predictor.",
                example: "The end state is akinetic mutism, a kind of waking coma."
              }
            }
          ]
        }
      ]
    },
    {
      id: "u3-exam",
      title: "4. Exam Preparation",
      description: "Model questions from Section A and B.",
      color: "duo-orange",
      lessons: [
        {
          id: "les-u3-exam",
          title: "Model Questions",
          description: "Section A and B practice.",
          icon: "PenTool",
          slides: [
            {
              id: "sl-u3-secA",
              type: "theory",
              title: "Section A (2 Marks) — Point of View",
              content: `**Question:** Analyse the relevance of the point of view employed in Chiang's story. Is it a common point of view employed by writers?

**Model Answer:** Chiang employs a **second-person point of view** ('you') combined with a narrator from the future. This is unusual and effective because it directly implicates the reader in the story's warning about free will. Unlike the more common first or third person, this POV creates an **immediate sense of urgency** and blurs the boundary between fiction and reality, making the philosophical message more personally impactful.`
            },
            {
              id: "sl-u3-secB",
              type: "theory",
              title: "Section B (6 Marks) — What does the Predictor symbolise?",
              content: `**Question:** What does the 'Predictor' in Ted Chiang's story symbolise?

**Model Answer:**
1. **Technological determinism** — modern devices anticipate our needs before we know them.
2. **Smartphones and social media** — addictive gadgets that control behaviour.
3. **Social constructs** — choices imposed on individuals without their awareness.
4. **A human face** (green LED smile) — relationships built without critical questioning.
5. **Gradual erosion of free will** — the tragic self-deception becoming a way of life.

The description of the device's 'heart' as consisting of circuits further points to the human-machine resemblance.`
            },
            {
              id: "sl-u3-exam-q",
              type: "quiz",
              title: "Exam Practice",
              content: "Why does the narrator from the future say 'Because I had no choice' at the end of the story?",
              options: [
                { id: "A", text: "The narrator was forced by others to send the warning.", isCorrect: false, explanation: "No one forced the narrator." },
                { id: "B", text: "It demonstrates the paradox — even sending the warning was predetermined by a deterministic universe.", isCorrect: true, explanation: "The ending is a self-referential paradox: if free will is an illusion, then sending the warning itself was predetermined, making the act futile and inevitable simultaneously." },
                { id: "C", text: "The narrator lacked the technology to stop sending it.", isCorrect: false, explanation: "This misses the philosophical point." },
                { id: "D", text: "The narrator wanted to prove free will exists.", isCorrect: false, explanation: "The narrator acknowledges free will is an illusion throughout." }
              ]
            }
          ]
        }
      ]
    }
  ]
};

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
          description: "Leading historian of science at Harvard.",
          icon: "User",
          slides: [
            {
              id: "sl-u10-auth1",
              type: "theory",
              title: "Who is Steven Shapin?",
              content: `Unit 10 An Interview with Steven Shapin Introduction Steven Shapin is a leading American historian of science whose research focuses on the social and cultural dimensions of scientific knowledge. He earned his PhD in the history and sociology of science from the University of Pennsylvania and has taught at institutions such as the University of Edinburgh and the University of California, San Diego.

Currently, he is the Franklin L. Ford Research Professor of the History of Science at Harvard University.

Shapin’s influential works investigate how science is practiced, how it earns trust, and how it is embedded in everyday life. His landmark book Leviathan and the Air-Pump (1985) co-authored with Simon Schaffer, analyses the 17th-century debate between Thomas Hobbes and Robert Boyle, revealing how scientific facts are socially constructed.

In The Scientific Life: A Moral History of a Late Modern Vocation (2008), he examines the modern scientist’s role, motivations and values, challenging stereotypes of scientists as purely objective figures. Widely regarded as a major figure in the sociology and history of science, Shapin has received numerous awards for his scholarship.

His accessible writing and thought-provoking arguments and modern vocation of science, even though “nobility” is not a notion we’re comfortable with any longer and even though modern scientists, of course, view themselves as labourers well worthy of their hire.`
            },
            {
              id: "sl-u10-auth-quiz",
              type: "quiz",
              title: "About the Author",
              content: "What is Steven Shapin's landmark 1985 co-authored book about?",
              options: [
                { id: "A", text: "The life of Galileo Galilei", isCorrect: false, explanation: "That is Brecht's play." },
                { id: "B", text: "The 17th-century debate between Thomas Hobbes and Robert Boyle, showing how scientific facts are socially constructed", isCorrect: true, explanation: "Leviathan and the Air-Pump analyses the Hobbes-Boyle debate to show how scientific facts are socially constructed." },
                { id: "C", text: "The history of the Wellcome Trust", isCorrect: false, explanation: "Not what the book is about." },
                { id: "D", text: "The rise of AI in academic science", isCorrect: false, explanation: "Not what the book is about." }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "u10-q1",
      title: "2. Interview: Science & Virtue",
      description: "From individual virtue to institutional authority.",
      color: "duo-teal",
      lessons: [
        {
          id: "les-u10-virtue",
          title: "The Moral History of Science",
          description: "Three roots of the shift from individual to institutional virtue.",
          icon: "Building",
          slides: [
            {
              id: "sl-u10-q1-q",
              type: "theory",
              title: "Q: Moral Superiority in Science",
              content: `His accessible writing and thought-provoking arguments and modern vocation of science, even though “nobility” is not a notion we’re comfortable with any longer and even though modern scientists, of course, view themselves as labourers well worthy of their hire. Q: Today we bestow that sense of moral superiority not onto the individuals practicing science as much as the institutions writ large where they work- be they Cal Tech, MIT, or your own Harvard University.

What inspired this shift in our thinking? Shapin: It’s true that a modern commonplace represents scientists as morally much the same as anyone else.

Indeed, parts of the book trace the twentieth-century history of this commonplace- for it was not always so.`
            },
            {
              id: "sl-u10-q1-a1",
              type: "theory",
              title: "Three Roots of the Shift",
              content: `Indeed, parts of the book trace the twentieth-century history of this commonplace- for it was not always so. And insofar as we think this, the integrity of science must reside not in individual but in institutional virtues.

Either the scientific community has values which it imposes on individual scientists or the institutions in which scientists work are sites of virtue. The shift from regarding scientists as individually virtuous to thinking of virtue as attached to institutions has many roots.

I can think of three, and each track back to changes occurring in the late nineteenth and twentieth centuries. First, there is secularization: if Nature is no longer God’s Book, then those who study it are no longer made virtuous through that study.

Second, there is the decline of the idea of Genius and the rise of the idea of Method: the genius may be viewed as inspired, while Method may be seen as mechanical, available to essentially anyone who masters and employs it. Third, there is the rise of science as a remunerated job.

So by the early twentieth century, science appears as an extraordinarily authoritative form of culture-but without that authority seeming to have any convincing foundations in the capacities or virtues of individuals. At the same time, late nineteenth- and early twentieth-century American universities were not the cogs-in-the-wheels of State power and economic growth that they are now considered to be; professors were not well paid; and it was plausible strongly to identify science with the cloistered academic life- though, as I indicate, much, perhaps most, science was done in industry from quite early in the twentieth century.`
            }
          ]
        }
      ]
    },
    {
      id: "u10-q2",
      title: "3. Interview: Academia vs. Industry",
      description: "Similarities and differences between academic and industrial science.",
      color: "duo-blue",
      lessons: [
        {
          id: "les-u10-academia",
          title: "Academia and Industry in Science",
          description: "Comparing the two environments for doing science.",
          icon: "Briefcase",
          slides: [
            {
              id: "sl-u10-q2-q",
              type: "theory",
              title: "Q: Academia vs. Industry",
              content: `Q: If, as you say, the modern scientific life can be associated as much with industry as with academia, what should we understand about the similarities and differences between the two sorts of environment for doing science?`
            },
            {
              id: "sl-u10-q2-a1",
              type: "theory",
              title: "The Facts About Industrial Science",
              content: `Shapin: As I indicated, there is a very pronounced tendency to identify science with what’s done in academia- and especially in the great research universities. But the facts suggest otherwise.

At least from early in the twentieth century, the majority of American scientists were employed not by institutions of higher education but by industry and government. And that remains true today.

Yet much modern commentary, especially from academic social scientists, viewed industry as a problematic environment for science. I’m not at all sure that’s right.

If we compare, so to speak, apples with apples, and look at the pure research done in industry and that done in academia, many of the most popular contrasts describe the situation rather poorly. If autonomy is the issue, many industrial scientists from early in the twentieth century enjoyed as much of that as their academic colleagues.

And the same applies to notions of secrecy and openness. A clear contrast of quality between university and industrial science similarly seems not to hold, while a presumption that applied research and development requires less brain-power than pure research is just dogmatic.

But most of all, I am impressed that both industrial and academic scientists seem to want environments in which they can do interesting work and, perhaps, to enjoy a degree of freedom in doing that work. An apparently banal idea, but one which is very widely ignored.`
            },
            {
              id: "sl-u10-q2-a2",
              type: "theory",
              title: "Convergence and 'Business-Like' Universities",
              content: `Many other commentators have also rightly pointed out that academia and industry have for some time been converging in their mores, structures, and conditions for doing science. I agree with that, but I also suggest that there are ways in which some sorts of modern industry can offer more propitious conditions for scientific inquiry than some sorts of universities and colleges.

There are interesting implications here for the contemporary tendency to make universities more “business-like”: we should have a better understanding of how industry now seeks to manage and motivate creative people. If universities, indeed, now see themselves as managing and motivating creative people, they might have much to learn from high-tech and biotech businesses, and academics might then have little to fear: What worries me is just that administrators’ ideas of what it is to be “business-like” misrepresent pertinent business realities.

Q: How much of the success of industrialists working in the private sector comes down to their thirst for profits instead of knowledge?`
            },
            {
              id: "sl-u10-q2-quiz",
              type: "quiz",
              title: "Academia vs. Industry",
              content: "According to Shapin, what do both industrial and academic scientists most want?",
              options: [
                { id: "A", text: "Higher salaries and prestige", isCorrect: false, explanation: "While money is discussed, it's not described as the primary want." },
                { id: "B", text: "Environments where they can do interesting work with some degree of freedom", isCorrect: true, explanation: "Shapin says: 'both industrial and academic scientists seem to want environments in which they can do interesting work and, perhaps, to enjoy a degree of freedom.'" },
                { id: "C", text: "Publication in top academic journals", isCorrect: false, explanation: "Not identified as the primary shared goal." },
                { id: "D", text: "Strict separation between pure and applied research", isCorrect: false, explanation: "Shapin argues this contrast is overstated." }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "u10-q3",
      title: "4. Interview: Money vs. Knowledge",
      description: "Is profit the only driver of industrial science?",
      color: "duo-violet",
      lessons: [
        {
          id: "les-u10-money",
          title: "The Profit Motive in Science",
          description: "Altruism, utopianism, and the knowledge economy.",
          icon: "TrendingUp",
          slides: [
            {
              id: "sl-u10-q3-q",
              type: "theory",
              title: "Q: Profit vs. Knowledge",
              content: `down to their thirst for profits instead of knowledge? It would seem like the almighty dollar is what helps drive their industriousness and the high-tech world in which we now live.`
            },
            {
              id: "sl-u10-q3-a",
              type: "theory",
              title: "The Knowledge Economy & Altruism",
              content: `Shapin: Business is business, and scientists who work in the commercial sector are expected to contribute to profits. Yet a strong contrast between the search for profits and the search for knowledge doesn’t describe industrial science very well in the early twentieth century and describes it less well today.

For one thing, the distinction between knowledge and commercial goods makes less sense in the “knowledge economy” than it once may have done. We now understand that both knowledge and durable goods may each have monetary value.

For another, to say that people working in industry are driven by money may miss as much as it gets right. Scientists who want “interesting work” and good conditions for doing it may find these in industry, while money may be as much a sign that one’s work has succeeded as it is a motive for doing it.

Nor should one neglect aspects of altruism, even utopianism that one can readily find among scientists and engineers working in industry, and, of course, expecting to be rewarded: some pioneers of the internet thought they might make societies more democratic and less authoritarian; many scientists working in biotech reckon their labors might cure dreadful diseases. I should also add that academic scientists who create commercializable intellectual property and who bring in grants are increasingly the apples of university administrators’ eyes and that scientific research with evident commercial potential is much encouraged by both these administrators and by funding agencies.

The problem with the attribution of a “money motive” is not that it’s wrong- in industry or in academia- but that it’s importantly incomplete.`
            }
          ]
        }
      ]
    },
    {
      id: "u10-q4",
      title: "5. Interview: Charisma & Personal Virtue",
      description: "The role of charismatic authority in modern science.",
      color: "duo-orange",
      lessons: [
        {
          id: "les-u10-charisma",
          title: "Charismatic Authority in Science",
          description: "Why personal virtues matter more than ever in entrepreneurial science.",
          icon: "Star",
          slides: [
            {
              id: "sl-u10-q4-q",
              type: "theory",
              title: "Q: Personal Virtue and Charisma",
              content: `virtue, even charismatic authority, in much late modern science and technology, though a popular image of science represents it as a profoundly impersonal practice. What do you mean by the claim that patterns of familiarity and charisma persist?`
            },
            {
              id: "sl-u10-q4-a1",
              type: "theory",
              title: "Uncertainty and Entrepreneurial Science",
              content: `Shapin: They don’t just persist; I argue that there are important areas of contemporary science and technology in which the personal virtues and charismatic authority are more important than they used to be. The key here is the uncertainty attending much scientific inquiry, especially in high-tech and biotech.

If many aspects of the way we live are increasingly governed by rules and routines, scientific inquiry is an inherently uncertain affair. If you knew exactly what you were going to find out, you wouldn’t- properly speaking- be doing research.

But in areas of entrepreneurial science, the uncertainties are even greater than they are in much academic science. How will the science and technology develop?

Will there be a market for these things? Will competitors emerge?

And, importantly, how do you organize and motivate people in entrepreneurial enterprises? Since none of the answers to such things can be looked up in a manual, very often the solution comes embodied in the person who speaks for the organization, whose vision it is, who articulates what is to be done, how, and to what ends.

We are now familiar with the attribution of charisma to such entrepreneurs as Steve Jobs, Craig Venter, and many others. Recognizing someone who possesses charismatic authority is not the same thing as saying that they’re wonderful people, but one ought to take charismatic authority very seriously.`
            },
            {
              id: "sl-u10-q4-a2",
              type: "theory",
              title: "Venture Capitalists — Betting on the Jockey",
              content: `Entrepreneurs are often driven by vision and they embody that vision for those who choose to join and follow them. I spend some time in my book observing entrepreneurs “pitching” their companies to venture capitalists, and I note how often venture capitalists view the personal characteristics of the entrepreneur as about the most certain feature of an investable project.

Technologies may change; markets may change; but the energies, vision, and commitment of the entrepreneur can be as durable, and as pertinent, as anything else in the scene. As venture capitalists often say, they “bet on the jockey, not on the horse”- on people more than on technology.

And they’re being quite hard-headed as and when they do so.`
            }
          ]
        }
      ]
    },
    {
      id: "u10-q5",
      title: "6. Interview: Historical Roots of Modern Science",
      description: "How the present is always linked to the past.",
      color: "duo-teal",
      lessons: [
        {
          id: "les-u10-history",
          title: "The Way We Live Now",
          description: "Deep historical roots of contemporary science.",
          icon: "Clock",
          slides: [
            {
              id: "sl-u10-q5-q",
              type: "theory",
              title: "Q: Deep Historical Roots",
              content: `Q: You claim in your book that a lot of the aspects of modern science that we touched on here have unexpectedly deep historical roots. What do you mean by that?

Shapin: The present is always linked to the past, though when we come to consider contemporary science, technology, and commercial organizations, much rhetoric insists that we’ve never seen anything like this before.`
            },
            {
              id: "sl-u10-q5-a",
              type: "theory",
              title: "The Present Is Always Linked to the Past",
              content: `consider contemporary science, technology, and commercial organizations, much rhetoric insists that we’ve never seen anything like this before. Of course, the present is always different from the past, and historians who insist that “there’s nothing new under the Sun” are usually just being professionally silly.

That said, we will understand “the way we live now” a lot better if we appreciate how topics and sensibilities going back many centuries are a living feature of the contemporary scene. I am a historian, and most of my previous work has dealt with the seventeenth-century Scientific Revolution.

Inevitably, I bring what I have learnt from my previous work to interpreting late modern American science and technology and especially, the texture of contemporary scientific life. We’ve always needed to know something about people in order to know something about the natural world- not just their expertise but also their integrity.

Answers to questions about the people who speak for reality may differ historically, but we still need such answers. The Scientific Life deals with twentieth-century debates over “teamwork”: some people said that scientific knowledge was essentially individualistic; others thought that the modern invention of teamwork was a great contribution to scientific advance.

What are the social and institutional conditions from which knowledge emerges and in which innovation happens? In Antiquity and the early modern period, there was a great debate over the relative virtues of what were called the “active” and the “contemplative” lives.

Did virtue attach to living alone or living in and for society? Did proper knowledge arise from a solitary or a social condition?

Again, the sensibilities are old, even if their contemporary meanings are particular to our circumstances. The Way We Live Now is new and old at the same time.`
            },
            {
              id: "sl-u10-q5-fib",
              type: "fill_in_blank",
              title: "Fill in the Blank",
              content: "We've always needed to know something about people in order to know something about the natural world — not just their expertise but also their ___.",
              blankAnswer: "integrity"
            }
          ]
        }
      ]
    },
    {
      id: "u10-glossary",
      title: "7. Glossary",
      description: "Key terms from the interview.",
      color: "duo-violet",
      lessons: [
        {
          id: "les-u10-vocab",
          title: "Key Terms",
          description: "Vocabulary from An Interview with Steven Shapin.",
          icon: "BookOpen",
          slides: [
            {
              id: "v-ennobling",
              type: "word_card",
              title: "Word Card",
              content: "Vocabulary",
              wordCard: {
                word: "Ennobling",
                translation: "Giving someone a sense of dignity and honour",
                context: "Used to describe how science was historically seen as morally elevating.",
                example: "Science was historically seen as ennobling — those who studied nature were made virtuous through that study."
              }
            },
            {
              id: "v-propitious",
              type: "word_card",
              title: "Word Card",
              content: "Vocabulary",
              wordCard: {
                word: "Propitious",
                translation: "Favourable or likely to lead to success",
                context: "Used to describe conditions favorable for scientific inquiry.",
                example: "Some sorts of modern industry can offer more propitious conditions for scientific inquiry than some sorts of universities."
              }
            },
            {
              id: "v-altruism",
              type: "word_card",
              title: "Word Card",
              content: "Vocabulary",
              wordCard: {
                word: "Altruism",
                translation: "Selfless concern for the well-being of others",
                context: "Present among scientists working in industry who hope their work benefits humanity.",
                example: "One ought not neglect aspects of altruism, even utopianism, that one can find among scientists working in industry."
              }
            },
            {
              id: "v-dogmatic",
              type: "word_card",
              title: "Word Card",
              content: "Vocabulary",
              wordCard: {
                word: "Dogmatic",
                translation: "Insisting that one's opinions are correct without considering other views",
                context: "Used to describe a presumption about pure vs. applied research quality.",
                example: "A presumption that applied research requires less brain-power than pure research is just dogmatic."
              }
            }
          ]
        }
      ]
    }
  ]
};

import { Section } from '../../types';

export const SEC_U2_RULE_OF_ROAD: Section = {
  id: "sec-u2-rule-of-road",
  title: "Unit 2: On The Rule of the Road",
  description: "A.G. Gardiner's essay on liberty, civic sense, and the social contract.",
  color: "duo-orange",
  units: [
    {
      id: "u2-part1-intro",
      title: "1. Introduction & Context",
      description: "Author background and the core paradox of liberty.",
      color: "duo-orange",
      lessons: [
        {
          id: "les-u2-intro",
          title: "The Author & Theme",
          description: "Understanding A.G. Gardiner's perspective.",
          icon: "Map",
          slides: [
            {
              id: "s-u2-hook",
              type: "quiz",
              title: "The Paradox of Freedom",
              content: "If absolutely everyone had the complete freedom to drive on any side of the road at any speed they wanted, what would be the result?",
              options: [
                { id: "A", text: "Ultimate freedom and happiness.", isCorrect: false, explanation: "Without rules, people would crash constantly." },
                { id: "B", text: "Universal chaos where nobody gets anywhere.", isCorrect: true, explanation: "Correct. Absolute individual liberty leads to social anarchy." }
              ]
            },
            {
              id: "s-u2-author",
              type: "theory",
              title: "A.G. Gardiner (Alpha of the Plough)",
              content: `Alfred George Gardiner (1865-1946) was a British journalist, editor, and author. He famously wrote essays under the pen name "Alpha of the Plough".\n\nHe was a social reformer who campaigned for minimum wages, but is best remembered for his graceful, humorous essays that use everyday anecdotes to explore deep philosophical ideas.\n\n*His style is conversational, simple, and relies heavily on humour, irony, and satire.*`
            },
            {
              id: "s-u2-genre",
              type: "theory",
              title: "What are we reading?",
              content: `**Genre:** Personal Reflective Essay\n\n**The Core Argument:** \n"Liberty is not a personal affair only, but a social contract." Gardiner argues that to preserve the liberties of all, the liberties of everybody must be curtailed. We must balance our personal freedom with social responsibility.`
            }
          ]
        }
      ]
    },
    {
      id: "u2-part2-text",
      title: "2. The Essay Text",
      description: "Guided reading of 'On the Rule of the Road'. Complete text included.",
      color: "duo-green",
      lessons: [
        {
          id: "les-u2-tx1",
          title: "The Petrograd Lady & The Policeman",
          description: "The dangers of getting 'liberty-drunk'.",
          icon: "Search",
          slides: [
            {
              id: "s-u2-tx1-1",
              type: "theory",
              title: "Liberty-Drunk",
              content: `> "A stout old lady was walking with her basket down the middle of a street in Petrograd to the great confusion of the traffic and with no small peril to herself. It was pointed out to her that the pavement was the place for foot-passengers, but she replied: 'I’m going to walk where I like. We’ve got liberty now.'"\n\n> "It did not occur to the dear old lady that if liberty entitled the foot-passenger to walk down the middle of the road it also entitled the cab-driver to drive on the pavement, and that the end of such liberty would be universal chaos. Everybody would be getting in everybody else’s way and nobody would get anywhere. Individual liberty would have become social anarchy."`
            },
            {
              id: "s-u2-tx1-2",
              type: "quiz",
              title: "Comprehension Check",
              content: "What does the old lady's attitude in Petrograd represent according to Gardiner?",
              options: [
                { id: "A", text: "A brave stand against oppressive governments.", isCorrect: false, explanation: "Gardiner uses her as an example of misunderstanding liberty." },
                { id: "B", text: "The danger of confusing individual liberty with social anarchy.", isCorrect: true, explanation: "She thinks liberty means doing whatever she wants, which would lead to chaos." }
              ]
            },
            {
              id: "s-u2-tx1-3",
              type: "theory",
              title: "The Symbol of Liberty",
              content: `> "There is a danger of the world getting liberty-drunk in these days like the old lady with the basket, and it is just as well to remind ourselves of what the rule of the road means. It means that in order that the liberties of all may be preserved the liberties of everybody must be curtailed."\n\n> "When the policeman, say, at Piccadilly Circus steps into the middle of the road and puts up his hand, he is the symbol not of tyranny, but of liberty. You may not think so. You may, being in a hurry and seeing your motor-car pulled up by this insolence of office, feel that your liberty has been outraged."`
            },
            {
              id: "s-u2-tx1-4",
              type: "theory",
              title: "The Maelstrom",
              content: `> "How dare this fellow interfere with your free use of the public highway? Then, if you are a reasonable person, you will reflect that if he did not, incidentally, interfere with you he would interfere with no one, and the result would be that Piccadilly Circus would be a maelstrom that you would never cross at all. You have submitted to a curtailment of private liberty in order that you may enjoy a social order which makes your liberty a reality."`
            },
            {
              id: "s-u2-tx1-5",
              type: "fill_in_blank",
              title: "Core Principle",
              content: "In order that the liberties of all may be preserved, the liberties of everybody must be ___.",
              blankAnswer: "curtailed"
            }
          ]
        },
        {
          id: "les-u2-tx2",
          title: "Personal Affairs & The Trombone",
          description: "When does our freedom end?",
          icon: "Music",
          slides: [
            {
              id: "s-u2-tx2-1",
              type: "theory",
              title: "A Social Contract",
              content: `> "Liberty is not a personal affair only, but a social contract. It is an accommodation of interests. In matters which do not touch anybody else’s liberty, of course, I may be as free as I like. If I choose to go down the Strand in a dressing-gown, with long hair and bare feet, who shall say me nay? You have liberty to laugh at me, but I have liberty to be indifferent to you."`
            },
            {
              id: "s-u2-tx2-2",
              type: "theory",
              title: "The Kingdom of Self",
              content: `> "And if I have a fancy for dyeing my hair, or waxing my moustache (which heaven forbid), or wearing a tall hat, a frock-coat and sandals, or going to bed late or getting up early, I shall follow my fancy and ask no man’s permission. I shall not inquire of you whether I may eat mustard with my mutton. I may like mustard with my mutton. And you will not ask me whether you may be a Protestant or a Catholic, whether you may marry the dark lady or the fair lady, whether you may prefer Ella Wheeler Wilcox to Wordsworth, or champagne to shandygaff."`
            },
            {
              id: "s-u2-tx2-3",
              type: "theory",
              title: "Stepping Out of the Kingdom",
              content: `> "In all these and a thousand other details you and I please ourselves and ask no one’s leave. We have a whole kingdom, in which we rule alone, can do what we choose, be wise or ridiculous, harsh or easy, conventional or odd. But directly we step out of that kingdom our personal liberty of action becomes qualified by other people’s liberty."`
            },
            {
              id: "s-u2-tx2-4",
              type: "theory",
              title: "The Trombone",
              content: `> "I might like to practice on the trombone from midnight till three in the morning. If I went on to the top of Helvellyn to do it I could please myself, but if I do it in my bedroom my family will object, and if I do it out in the streets the neighbours will remind me that my liberty to blow the trombone must not interfere with their liberty to sleep in quiet. There are a lot of people in the world, and I have to accommodate my liberty to their liberties."`
            },
            {
              id: "s-u2-tx2-5",
              type: "quiz",
              title: "Analyze the Metaphor",
              content: "Why does Gardiner use the example of playing the trombone at midnight?",
              options: [
                { id: "A", text: "To show that musicians are generally inconsiderate people.", isCorrect: false, explanation: "He is using himself as a hypothetical example." },
                { id: "B", text: "To illustrate the exact boundary where a personal liberty infringes upon a social liberty.", isCorrect: true, explanation: "The noise crosses from his 'kingdom' into his neighbors' ears, destroying their liberty to sleep." }
              ]
            }
          ]
        },
        {
          id: "les-u2-tx3",
          title: "The Train Compartment",
          description: "Lacking the social sense.",
          icon: "Train",
          slides: [
            {
              id: "s-u2-tx3-1",
              type: "theory",
              title: "Forgetting the Contract",
              content: `> "We are all liable to forget this, and unfortunately we are much more conscious of the imperfections of others in this respect than of our own."\n\n> "I got into a railway carriage at a country station the other morning and settled down for what the schoolboys would call an hour’s 'swot' at a Blue-book. I was not reading it for pleasure. The truth is that I never do read Blue-books for pleasure. I read them as a barrister reads a brief, for the very humble purpose of turning an honest penny out of them."`
            },
            {
              id: "s-u2-tx3-2",
              type: "theory",
              title: "The Pompous Voice",
              content: `> "Now, if you are reading a book for pleasure it doesn’t matter what is going on around you. I think I could enjoy 'Tristram Shandy' or 'Treasure Island' in the midst of an earthquake. But when you are reading a thing as a task you need reasonable quiet, and that is what I didn’t get, for at the next station in came a couple of men, one of whom talked to his friend for the rest of the journey in a loud and pompous voice."`
            },
            {
              id: "s-u2-tx3-3",
              type: "theory",
              title: "Someone in Particular",
              content: `> "He was one of those people who remind one of that story of Horne Tooke who, meeting a person of immense swagger in the street, stopped him and said, 'Excuse me, sir, but are you someone in particular?' This gentleman was someone in particular. As I wrestled with clauses and sections, his voice rose like a gale, and his family history, the deeds of his sons in the war, and his criticisms of the generals and the politicians submerged my poor attempts to hang on to my job."`
            },
            {
              id: "s-u2-tx3-4",
              type: "theory",
              title: "The Banal Song",
              content: `> "I shut up the Blue-book, looked out of the window, and listened wearily while the voice thundered on with themes like these: 'Now what French ought to have done...' 'The mistake the Germans made...' 'If only Asquith had...' You know the sort of stuff. I had heard it all before, oh, so often. It was like a barrel-organ groaning out some banal song of long ago."`
            },
            {
              id: "s-u2-tx3-5",
              type: "theory",
              title: "Lacking Social Sense",
              content: `> "If I had asked him to be good enough to talk in a lower tone I daresay he would have thought I was a very rude fellow. It did not occur to him that anybody could have anything better to do than to listen to him, and I have no doubt he left the carriage convinced that everybody in it had, thanks to him, had a very illuminating journey, and would carry away a pleasing impression of his encyclopaedic range. He was obviously a well-intentioned person. The thing that was wrong with him was that he had not the social sense. He was not 'a clubbable man.'" `
            }
          ]
        },
        {
          id: "les-u2-tx4",
          title: "Bullies & Gramophones",
          description: "Protecting the rights of the quiet.",
          icon: "Car",
          slides: [
            {
              id: "s-u2-tx4-1",
              type: "theory",
              title: "The Ticket Office",
              content: `> "A reasonable consideration for the rights or feelings of others is the foundation of social conduct. It is commonly alleged against women that in this respect they are less civilised than men, and I am bound to confess that in my experience it is the woman – the well-dressed woman – who thrusts herself in front of you at the ticket office. The man would not attempt it, partly because he knows the thing would not be tolerated from him, but also because he has been better drilled in the small give-and-take of social relationships..."`
            },
            {
              id: "s-u2-tx4-2",
              type: "theory",
              title: "The Spirit of Prussia",
              content: `> "I believe that the rights of small people and quiet people are as important to preserve as the rights of small nationalities. When I hear the aggressive, bullying horn which some motorists deliberately use, I confess that I feel something boiling up in me which is very like what I felt when Germany came trampling like a bully over Belgium. By what right, my dear sir, do you go along our highways uttering that hideous curse on all who impede your path? Cannot you announce your coming like a gentleman?"`
            },
            {
              id: "s-u2-tx4-3",
              type: "theory",
              title: "The Blatant Gramophone",
              content: `> "And there is the more harmless person who has bought a very blatant gramophone, and on Sunday afternoon sets the thing going, opens the windows and fills the street with 'Keep the Home Fires Burning' or some similar banality. What are the right limits of social behaviour in a matter of this sort? Let us take the trombone as an illustration again."`
            },
            {
              id: "s-u2-tx4-4",
              type: "theory",
              title: "Hazlitt's Trombone",
              content: `> "Hazlitt said that a man who wanted to learn that fearsome instrument was entitled to learn it in his own house, even though he was a nuisance to his neighbours, but it was his business to make the nuisance as slight as possible. He must practise in the attic, and shut the window. He had no right to sit in his front room, open the window, and blow his noise into his neighbours’ ears with the maximum of violence."`
            },
            {
              id: "s-u2-tx4-5",
              type: "theory",
              title: "Trespassing on Peace",
              content: `> "And so with the gramophone. If you like the gramophone you are entitled to have it, but you are interfering with the liberties of your neighbours if you don’t do what you can to limit the noise to your own household. Your neighbours may not like 'Keep the Home Fires Burning.' They may prefer to have their Sunday afternoon undisturbed, and it is as great an impertinence for you to wilfully trespass on their peace as it would be to go, unasked, into their gardens and trample on their flower beds."`
            }
          ]
        },
        {
          id: "les-u2-tx5",
          title: "Compromise & Conclusion",
          description: "The clash of liberties and the sum of life.",
          icon: "CheckCircle",
          slides: [
            {
              id: "s-u2-tx5-1",
              type: "theory",
              title: "The Clash of Liberties",
              content: `> "There are cases, of course, where the clash of liberties seems to defy compromise. My dear old friend X, who lives in a West End square and who is an amazing mixture of good nature and irascibility, flies into a passion when he hears a street piano, and rushes out to order it away. But nearby lives a distinguished lady of romantic picturesque tastes, who dotes on street pianos, and attracts them as wasps are attracted to a jar of jam. Whose liberty in this case should surrender to the other? For the life of me I cannot say."`
            },
            {
              id: "s-u2-tx5-2",
              type: "theory",
              title: "A Judicious Mixture",
              content: `> "I suppose the fact is that we can be neither complete anarchists nor complete Socialists in this complex world – or rather we must be a judicious mixture of both. We have both liberties to preserve – our individual liberty and our social liberty. We must watch the bureaucrat on the one side and warn off the anarchist on the other. I am neither a Marxist, nor a Tolstoyan, but a compromise."`
            },
            {
              id: "s-u2-tx5-3",
              type: "theory",
              title: "The Child's Education",
              content: `> "I shall not permit any authority to say that my child must go to this school or that... These things are personal. But if I proceed to say that my child shall have no education at all, that he shall be brought up as a primeval savage, or at Mr. Fagin’s academy for pickpockets, then Society will politely but firmly tell me that it has no use for primeval savages and a very stern objection to pickpockets, and that my child must have a certain minimum of education whether I like it or not. I cannot have the liberty to be a nuisance to my neighbours or make my child a burden..."`
            },
            {
              id: "s-u2-tx5-4",
              type: "theory",
              title: "The Small Matters",
              content: `> "It is in the small matters of conduct, in the observance of the rule of the road, that we pass judgment upon ourselves, and declare that we are civilised or uncivilised. The great moments of heroism and sacrifice are rare. It is the little habits of commonplace intercourse that make up the great sum of life and sweeten or make bitter the journey."`
            },
            {
              id: "s-u2-tx5-5",
              type: "theory",
              title: "The Final Thought",
              content: `> "I hope my friend in the railway carriage will reflect on this. Then he will not cease, I am sure, to explain to his neighbour where French went wrong and where the Germans went ditto; but he will do it in a way that will permit me to read my Blue-book undisturbed."`
            }
          ]
        }
      ]
    },
    {
      id: "u2-part3-mastery",
      title: "3. Vocabulary & Reflection",
      description: "Master the terminology and reflect on the themes.",
      color: "duo-violet",
      lessons: [
        {
          id: "les-u2-vocab",
          title: "Vocabulary",
          description: "Key terms from the essay.",
          icon: "Type",
          slides: [
            {
              id: "v-u2-1",
              type: "word_card",
              content: "Vocabulary",
              wordCard: {
                word: "Anarchy",
                translation: "A state of disorder due to absence of authority.",
                context: "> \"Individual liberty would have become social anarchy.\"",
                example: "Without the rule of the road, traffic becomes total anarchy."
              }
            },
            {
              id: "v-u2-2",
              type: "word_card",
              content: "Vocabulary",
              wordCard: {
                word: "Maelstrom",
                translation: "A powerful whirlpool in the sea or a river; a situation of state of confused movement or violent turmoil.",
                context: "> \"...the result would be that Piccadilly Circus would be a maelstrom that you would never cross at all.\"",
                example: "The sudden storm turned the peaceful crowd into a maelstrom of panic."
              }
            },
            {
              id: "v-u2-3",
              type: "word_card",
              content: "Vocabulary",
              wordCard: {
                word: "Banal",
                translation: "So lacking in originality as to be obvious and boring.",
                context: "> \"It was like a barrel-organ groaning out some banal song of long ago.\"",
                example: "His comments about the weather were completely banal."
              }
            },
            {
              id: "v-u2-4",
              type: "word_card",
              content: "Vocabulary",
              wordCard: {
                word: "Swot",
                translation: "Hard work, or a person who studies intensely (British slang).",
                context: "> \"...settled down for what the schoolboys would call an hour’s 'swot' at a Blue-book.\"",
                example: "I had to swot all night for my final exams."
              }
            }
          ]
        },
        {
          id: "les-u2-reflect",
          title: "Exam Alignment & Reflection",
          description: "Connect the text to your exams and the real world.",
          icon: "PenTool",
          slides: [
            {
              id: "s-u2-r1",
              type: "quiz",
              title: "Real World Connection",
              content: "Which modern-day action is closest to Gardiner's 'man with the blatant gramophone'?",
              options: [
                { id: "A", text: "Wearing eccentric clothing to a grocery store.", isCorrect: false, explanation: "This is a personal liberty that doesn't infringe on others' senses." },
                { id: "B", text: "Watching TikTok videos loudly on speakerphone on the metro.", isCorrect: true, explanation: "This directly infringes on the peace and liberty of others sharing the space." }
              ]
            },
            {
              id: "s-u2-r2",
              type: "theory",
              title: "Exam Focus: Section A",
              content: `**Examiner Tip:**\nGardiner defines the "Rule of the Road" not just as traffic laws, but as the implicit social contract where we limit our own freedom to preserve everyone's freedom. \n\nIf asked about the **policeman at Piccadilly Circus**, remember he is the symbol of *liberty*, not tyranny, because his interference prevents a "maelstrom" of chaos.`
            },
            {
              id: "s-u2-r3",
              type: "theory",
              title: "Exam Focus: Section B & C",
              content: `**Key Anecdotes to Memorize:**\n1. **The Petrograd Lady:** Represents being "liberty-drunk" and leading to anarchy.\n2. **The Trombone/Gramophone:** Represents the line between personal liberty and social infringement.\n3. **The Railway Carriage Man:** Represents a lack of "social sense" and the importance of civic courtesy.\n\n*Use these examples when answering questions about the distinction between personal and social liberty.*`
            }
          ]
        }
      ]
    }
  ]
};
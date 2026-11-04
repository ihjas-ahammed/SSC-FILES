import { Section } from '../../types';

export const SEC_U13_LIFE_OF_GALILEO: Section = {
  id: "sec-u13-life-of-galileo",
  title: "Unit 13: The Life of Galileo — Scene 13",
  description: "Galileo's book crosses the Italian border — Bertolt Brecht (1937)",
  color: "duo-blue",
  units: [
    {
      id: "u13-intro",
      title: "1. Introduction",
      description: "About Brecht and the play's context.",
      color: "duo-blue",
      lessons: [
        {
          id: "les-u13-brecht",
          title: "About Bertolt Brecht",
          description: "German playwright and his epic theatre style.",
          icon: "Drama",
          slides: [
            {
              id: "sl-u13-brecht1",
              type: "theory",
              title: "Who is Bertolt Brecht?",
              content: `Unit 13 The Life of Galileo - Scene 13 Bertolt Brecht Introduction Bertolt Brecht (1898–1956) was a German playwright, poet and theatre practitioner whose works reshaped modern drama. His sympathies lay with the communist cause and he openly opposed the rising Nazi movement.

In 1933, when the Nazis came to power and banned his writings, Brecht was forced to leave Germany. Throughout his career, Brecht was a man of the theatre.`
            },
            {
              id: "sl-u13-brecht1-p2",
              type: "theory",
              title: "Who is Bertolt Brecht?",
              content: `His plays often attracted criticism for their political pessimism, but they also achieved international recognition for their originality and depth. His famous works include The Life of Galileo, The Threepenny Opera, and Mother Courage and Her Children.

Though his plays frequently explored revolutionary struggle, they were never dry political tracts; instead, they were rich in human experience and emotion. Brecht developed innovative theatrical techniques, most notably the “epic theatre” style, which aimed to make audiences think critically rather than lose themselves in illusion.

To achieve this, he used devices such as placards to announce the subject of each scene, discouraging suspense and encouraging reflection on the social and political implications of the story.`
            },
            {
              id: "sl-u13-brecht-quiz",
              type: "quiz",
              title: "Epic Theatre",
              content: "What was Brecht's 'epic theatre' designed to do?",
              options: [
                { id: "A", text: "Create emotional catharsis so audiences feel for the characters", isCorrect: false, explanation: "That is Aristotelian theatre. Brecht's approach was the opposite." },
                { id: "B", text: "Make audiences think critically rather than lose themselves in illusion", isCorrect: true, explanation: "Brecht used devices like placards to discourage suspense and encourage critical reflection." },
                { id: "C", text: "Entertain large audiences with spectacular effects", isCorrect: false, explanation: "Brecht believed theatre should provoke awareness and social change, not just entertain." },
                { id: "D", text: "Depict historical events as accurately as possible", isCorrect: false, explanation: "While the play uses historical figures, accuracy was not Brecht's primary goal." }
              ]
            }
          ]
        },
        {
          id: "les-u13-play",
          title: "Overview of the Play",
          description: "Full summary of The Life of Galileo.",
          icon: "BookOpen",
          slides: [
            {
              id: "sl-u13-play1",
              type: "theory",
              title: "Galileo's Discoveries & the Church",
              content: `Overview of the Play: The Life of Galileo Bertolt Brecht’s The Life of Galileo chronicles the turbulent career of the renowned mathematician and physicist, Galileo Galilei, against the backdrop of a rapidly changing world and the formidable authority of the Catholic Church. The play opens in Padua in 1609, where Galileo, a passionate and good-humored teacher, is captivated by the dawn of a new scientific age.

He eagerly demonstrates the Copernican system, which posits a sun-centered universe with a moving Earth, to his young pupil, Andrea Sarti. Galileo believes in the “gentle power of reason” and that truth, once proven, cannot be resisted by humanity.`
            },
            {
              id: "sl-u13-play1-p2",
              type: "theory",
              title: "Galileo's Discoveries & the Church",
              content: `He envisions a future where astronomy is discussed in market-places and even the sons of fishwives go to school. Galileo’s life takes a decisive turn with his improvement of the newly invented telescope, which he swiftly converts into a source of income by presenting it to the Republic of Venice as his own invention.

While the Venetian Senate sees it as a profitable tool for navigation and military advantage, Galileo himself points it skyward, making revolutionary astronomical observations. He discovers mountains on the moon, suggesting it is an Earth-like body, and four satellites orbiting Jupiter, directly challenging the Ptolemaic idea of crystal spheres and a single, Earth-centered universe.`
            },
            {
              id: "sl-u13-play1-p3",
              type: "theory",
              title: "Galileo's Discoveries & the Church",
              content: `These findings provide compelling evidence for the Copernican system, leading him to declare, “Heaven abolished”. Seeking more leisure for his research and the “flesh-pots,” Galileo leaves the Republic of Venice for the Florentine Court, hoping for patronage from the Grand Duke of Florence, Cosimo de’ Medici, a former pupil of his.

However, the learned gentlemen of the Florentine University, including a theologian, a philosopher and a mathematician, refuse to look through his telescope, clinging instead to the authority of Aristotle and their established world-view. They dismiss his findings as impossible and unnecessary, prioritizing the “symmetry and beauty” of the Aristotelian cosmos over empirical evidence.

Despite this, his discoveries are later confirmed by Father Christopher Clavius, the astronomer-in-chief at the Papal College in Rome, much to the dismay of many church dignitaries.`
            },
            {
              id: "sl-u13-play2",
              type: "theory",
              title: "Recantation and the Discorsi",
              content: `Ultimately, in 1633, the Inquisition summons Galileo to Rome. Despite the Pope’s initial reluctance to condemn him due to his international prestige, the Cardinal Inquisitor persuades him that Galileo’s ideas are causing “terrible unrest” and eroding faith, thereby undermining both religious and civil authority.

The Pope, unwilling to destroy “mathematical tables,” eventually allows Galileo to be shown the “instruments” of torture. Faced with the threat of physical pain, Galileo publicly recants his teachings on the movement of the Earth.`
            },
            {
              id: "sl-u13-play2-p2",
              type: "theory",
              title: "Recantation and the Discorsi",
              content: `This act devastates his pupils, who initially hail his resistance—when the bell of St. Mark’s delays, only to be crushed by the tolling of the bell announcing his recantation. Andrea famously cries, “Unhappy the land that has no heroes”.

However, the play’s conclusion complicates this judgment. Living under house arrest, Galileo, now old and almost blind, secretly completes his most important work, Discorsi (Dialogues Concerning Two New Sciences).`
            },
            {
              id: "sl-u13-play2-p3",
              type: "theory",
              title: "Recantation and the Discorsi",
              content: `Andrea, visiting him, discovers this and reinterprets Galileo’s recantation not as a betrayal but as a strategic retreat, allowing him to survive and continue his vital scientific work. Yet, Galileo himself offers a harsh self-critique, lamenting his failure to stand firm.

He tells Andrea that he recanted out of fear of physical pain, stating there was no grand plan. He believes his actions set a dangerous precedent, leading scientists to become “inventive dwarfs” who serve authority rather than dedicating their knowledge to human welfare.`
            },
            {
              id: "sl-u13-play2-p4",
              type: "theory",
              title: "Recantation and the Discorsi",
              content: `He asserts that “the only purpose of science is to ease the hardship of human existence” and that scientists have a responsibility to the public. Andrea ultimately smuggles Discorsi out of Italy to Holland, ensuring its publication and the advancement of science.

The play ends with a stark warning that science, if not used “right,” could “fall / Downward to consume us all”. The play examines the conflict between intellectual freedom and institutional power, the responsibility of the scientist and the nature of truth and belief, particularly in times of profound societal change.

Brecht uses Galileo’s story to explore the complexities of human nature, showing him as a man of immense genius interwoven with human weaknesses, such as his love of comfort and his fear of pain.`
            },
            {
              id: "sl-u13-scene-intro",
              type: "theory",
              title: "Scene 13 — Context",
              content: `In the prescribed scene of the chapter, the focus is on the year 1637 when Galileo’s book, Discorsi, is secretly carried across the Italian border. The setting is a small frontier town where Andrea, Galileo’s pupil, waits with his coachman while the frontier guard examines his papers and luggage.

Around them, children are playing and speaking about witches, showing the strong presence of superstition in everyday life. Andrea, meanwhile, keeps reading Galileo’s manuscript, which is hidden safely in his possession.`
            },
            {
              id: "sl-u13-scene-intro-p2",
              type: "theory",
              title: "Scene 13 — Context",
              content: `The frontier guard and the clerk check Andrea’s belongings but fail to recognise the importance of the books he is carrying. They are more concerned with routine work and money than with knowledge.

The children, mocking Andrea, repeat local fears about witches and devils, but Andrea calmly continues with his reading. This contrast shows how ignorance, authority, and superstition stand against the quiet progress of science and reason.`
            },
            {
              id: "sl-u13-scene-intro-p3",
              type: "theory",
              title: "Scene 13 — Context",
              content: `By the end of the scene, Andrea explains to the children that no one can fly through the air on a broomstick and that such a thing would need a machine, which has not yet been invented. He also reminds them that humanity knows very little and is only at the beginning of discovery.

Through this scene, the play highlights Brecht’s central idea: knowledge can be suppressed but not destroyed, and it is the responsibility of future generations to protect and use it wisely.`
            }
          ]
        }
      ]
    },
    {
      id: "u13-scene",
      title: "2. Scene 13 — The Text",
      description: "Full close reading of the prescribed scene.",
      color: "duo-green",
      lessons: [
        {
          id: "les-u13-opening",
          title: "Opening Ballad & Setting",
          description: "The border scene — knowledge vs. authority.",
          icon: "Map",
          slides: [
            {
              id: "sl-u13-ballad",
              type: "theory",
              title: "The Opening Ballad",
              content: `Text Scene 13 1637. GALILEO’S BOOK, THE ‘DISCORSI’, CROSSES THE ITALIAN BORDER The great book o’er the border went And, good folk, that was the end.

But we hope you’ll keep in mind He and I, were left behind. May you now guard Science’ light, Kindle it and use it right, Lest it be a flame to fall Downward to consume us all.`
            },
            {
              id: "sl-u13-setting",
              type: "theory",
              title: "Setting — The Frontier Town",
              content: `A Small Italian Frontier Town Early morning. At the frontier turnpike, children are playing.

Andrea, a coachman beside him, is waiting for his papers to be examined. He is sitting on a little chest and reading Galileo’s manuscript.

The travelling-coach stands at the far side of the barrier. THE CHILDREN singing: Mary, Mary sat her down Had a little old pink gown Gown was shabby and bespattered But when chilly winter came Gown went round her just the same Bespattered don’t mean tattered.`
            },
            {
              id: "sl-u13-children",
              type: "theory",
              title: "The Children's Song",
              content: `THE CHILDREN singing: Mary, Mary sat her down Had a little old pink gown Gown was shabby and bespattered But when chilly winter came Gown went round her just the same Bespattered don’t mean tattered.`
            }
          ]
        },
        {
          id: "les-u13-dialogue",
          title: "Dialogue — Guards & Books",
          description: "Andrea, the frontier guard, and the chest of books.",
          icon: "MessageSquare",
          slides: [
            {
              id: "sl-u13-dlg1",
              type: "theory",
              title: "The Frontier Guard Questions Andrea",
              content: `THE FRONTIER GUARD: Why are you leaving Italy? ANDREA: I am a scholar.

THE FRONTIER GUARD (to the clerk): Write under ‘reason for journey’: scholar. I must search your luggage.`
            },
            {
              id: "sl-u13-dlg1-p2",
              type: "theory",
              title: "The Frontier Guard Questions Andrea",
              content: `He does so. THE FIRST BOY to Andrea: You shouldn’t sit there.

He points to the hut outside which Andrea is sitting. A witch lives inside.`
            },
            {
              id: "sl-u13-dlg1-p3",
              type: "theory",
              title: "The Frontier Guard Questions Andrea",
              content: `THE FIRST BOY: Old Marina is not a witch. THE FIRST BOY: Do you want me to twist your arm?

THE THIRD BOY: She is a witch. She flies through the air every night.`
            },
            {
              id: "sl-u13-dlg1-p4",
              type: "theory",
              title: "The Frontier Guard Questions Andrea",
              content: `THE FIRST BOY: And why can’t she get so much as a jug of milk anywhere in town if she isn’t a witch? THE SECOND BOY: How can she fly through the air?

No one can do that. To Andrea: Can one?`
            },
            {
              id: "sl-u13-dlg1-p5",
              type: "theory",
              title: "The Frontier Guard Questions Andrea",
              content: `THE FIRST BOY referring to the second: That’s Giuseppe. He doesn’t know a thing because he doesn’t go to school because he hasn’t a proper pair of breeches.

THE FRONTIER GUARD: What’s that book? ANDREA without looking up: It’s by the great philosopher Aristotle.`
            },
            {
              id: "sl-u13-dlg1-p6",
              type: "theory",
              title: "The Frontier Guard Questions Andrea",
              content: `THE FRONTIER GUARD suspiciously: What sort of a fellow’s he? ANDREA: He’s dead.

The boys, to mock Andrea as he reads, prance round pretending to read books at the same time. THE FRONTIER GUARD to the clerk: See whether there’s anything about religion in it.

THE CLERK leafing through it: I can find nothing. THE FRONTIER GUARD: There’s little enough point in all this searching!`
            },
            {
              id: "sl-u13-dlg2",
              type: "theory",
              title: "The Chest — Books or Devil's Work?",
              content: `GUARD: There’s little enough point in all this searching! Nobody’s going to show us openly things that he wants to hide.

To Andrea. You must sign that we’ve searched everything.`
            },
            {
              id: "sl-u13-dlg2-p2",
              type: "theory",
              title: "The Chest — Books or Devil's Work?",
              content: `Andrea stands up hesitantly and goes, still reading, into the house with the frontier guard. THE THIRD BOY to the clerk, pointing at the chest: Look, there’s something else, look!

THE CLERK: Wasn’t that there before? THE THIRD BOY: The Devil put it there.`
            },
            {
              id: "sl-u13-dlg2-p3",
              type: "theory",
              title: "The Chest — Books or Devil's Work?",
              content: `It’s a chest. THE SECOND BOY: No, it belongs to the stranger.

THE THIRD BOY: I wouldn’t go in there. She’s bewitched the coachman’s old nags.`
            },
            {
              id: "sl-u13-dlg2-p4",
              type: "theory",
              title: "The Chest — Books or Devil's Work?",
              content: `I looked through that hole in the roof which the snowstorm made and heard them coughing. THE CLERK who has almost reached the chest, hesitates and turns back: Devil’s work, eh?

Well, we can’t examine everything. Or where would we be?

Andrea returns with a jug of milk. He sits down again on the chest and continues to read.`
            },
            {
              id: "sl-u13-dlg3",
              type: "theory",
              title: "Opening the Chest — Thirty-Four Books",
              content: `He sits down again on the chest and continues to read. THE FRONTIER GUARD following him with papers: Close up the boxes again.

Have we everything? CLERK: Everything.`
            },
            {
              id: "sl-u13-dlg3-p2",
              type: "theory",
              title: "Opening the Chest — Thirty-Four Books",
              content: `THE SECOND BOY to Andrea: You’re a scholar. You tell us can one fly through the air?

ANDREA: Wait a moment. THE FRONTIER GUARD: You can pass.`
            },
            {
              id: "sl-u13-dlg3-p3",
              type: "theory",
              title: "Opening the Chest — Thirty-Four Books",
              content: `The luggage is collected by the coachman, Andrea picks up the chest and is about to go. THE FRONTIER GUARD: Stop!

What’s that chest? ANDREA resuming his book: It’s books.`
            },
            {
              id: "sl-u13-dlg3-p4",
              type: "theory",
              title: "Opening the Chest — Thirty-Four Books",
              content: `THE FIRST BOY: It’s bewitched. THE FRONTIER GUARD: Nonsense.

How could she bewitch a chest? THE THIRD BOY: She can if the Devil helps her!`
            },
            {
              id: "sl-u13-dlg3-p5",
              type: "theory",
              title: "Opening the Chest — Thirty-Four Books",
              content: `THE FRONTIER GUARD laughs: That won’t work here. To the Clerk: Open it up.

The chest is opened. THE FRONTIER GUARD morosely: How many are there?`
            },
            {
              id: "sl-u13-dlg3-p6",
              type: "theory",
              title: "Opening the Chest — Thirty-Four Books",
              content: `ANDREA: Thirty-four. THE FRONTIER GUARD to the clerk: How long will you take over them?

THE CLERK who has begun to rummage superficially in the chest: All printed already. You can certainly say goodbye to your breakfast; when am I going to have time to get over to the coachman and collect these arrears of toll money from the selling up of his house if I have to wade through all these books?`
            },
            {
              id: "sl-u13-dlg3-p7",
              type: "theory",
              title: "Opening the Chest — Thirty-Four Books",
              content: `THE FRONTIER GUARD: Yes, we must have the money. He pushes the books with his foot.

Well, what a lot of stuff there must be in them! To the coachman: Get on!`
            },
            {
              id: "sl-u13-dlg3-p8",
              type: "theory",
              title: "Opening the Chest — Thirty-Four Books",
              content: `Andrea, carrying the chest, goes with the coachman across the frontier. On the other side he puts Galileo’s manuscript in his travelling bag.

THE THIRD BOY pointing at the jug which Andrea has left behind: Look! THE FIRST BOY: And the chest has gone!`
            },
            {
              id: "sl-u13-dlg4",
              type: "theory",
              title: "Andrea's Final Words to Giuseppe",
              content: `You see, it was the Devil. ANDREA turning round: No, it was me.

You must learn to open your eyes. The milk is paid for and so is the jug.`
            },
            {
              id: "sl-u13-dlg4-p2",
              type: "theory",
              title: "Andrea's Final Words to Giuseppe",
              content: `The old woman can have it. Yes, and I haven’t yet answered your question, Giuseppe.

One cannot fly through the air on a broomstick. It must at least have a machine on it, and as yet there is no such machine.`
            },
            {
              id: "sl-u13-dlg4-p3",
              type: "theory",
              title: "Andrea's Final Words to Giuseppe",
              content: `Perhaps there never will be, for man is too heavy. But, of course, one cannot tell.

We don’t know nearly enough, Giuseppe. We are really only at the beginning.`
            },
            {
              id: "sl-u13-dlg-quiz",
              type: "quiz",
              title: "The Scene",
              content: "Why don't the frontier guards confiscate the books in the chest?",
              options: [
                { id: "A", text: "They recognize the importance of the books and let them pass.", isCorrect: false, explanation: "The guards have no idea what the books contain." },
                { id: "B", text: "They are more concerned with collecting toll money than reading through thirty-four books.", isCorrect: true, explanation: "The clerk says: 'you can certainly say goodbye to your breakfast; when am I going to have time...if I have to wade through all these books?'" },
                { id: "C", text: "Andrea bribes them to let the books pass.", isCorrect: false, explanation: "No bribe occurs in the scene." },
                { id: "D", text: "The children tell the guards the books are harmless.", isCorrect: false, explanation: "The children actually say the Devil put the chest there." }
              ]
            },
            {
              id: "sl-u13-fib",
              type: "fill_in_blank",
              title: "Fill in the Blank",
              content: "One cannot fly through the air on a broomstick. It must at least have a ___ on it, and as yet there is no such ___.",
              blankAnswer: "machine"
            }
          ]
        }
      ]
    },
    {
      id: "u13-themes",
      title: "3. Themes & Analysis",
      description: "Knowledge, superstition, authority, and Brecht's message.",
      color: "duo-violet",
      lessons: [
        {
          id: "les-u13-themes",
          title: "Key Themes in Scene 13",
          description: "What the scene represents thematically.",
          icon: "Layers",
          slides: [
            {
              id: "sl-u13-th1",
              type: "theory",
              title: "Knowledge vs. Ignorance & Authority",
              content: `**The scene presents a key contrast:**

- **Andrea** represents **knowledge and reason** — he is a scholar carrying Galileo's manuscript.
- **Frontier guards** represent **authority** — concerned only with routine and money, blind to what is important.
- **Children** represent **superstition** — they believe in witches, devils, and broomstick flights.

Brecht shows how **bureaucracy, superstition, and indifference** stand against the quiet progress of science and reason.`
            },
            {
              id: "sl-u13-th2",
              type: "theory",
              title: "Andrea's Final Message",
              content: `**'You must learn to open your eyes.'**

Andrea's final words to the children encapsulate Brecht's central message:

1. **Scientific inquiry over superstition** — there is no witch, there is no devil; there is a traveller with books.
2. **We are only at the beginning** — 'We don't know nearly enough, Giuseppe. We are really only at the beginning.'
3. **Knowledge cannot be destroyed** — the Discorsi crosses the border despite institutional opposition.
4. The **responsibility of future generations** — to protect and use knowledge wisely.`
            },
            {
              id: "sl-u13-th-quiz",
              type: "quiz",
              title: "Brecht's Warning",
              content: "What is Brecht's central warning in the opening ballad of Scene 13?",
              options: [
                { id: "A", text: "Science should be kept secret from governments.", isCorrect: false, explanation: "Not Brecht's message." },
                { id: "B", text: "Knowledge, if not used right, could fall downward to consume us all.", isCorrect: true, explanation: "The ballad ends: 'Lest it be a flame to fall / Downward to consume us all.'" },
                { id: "C", text: "Religious authority will always defeat science.", isCorrect: false, explanation: "The play shows science ultimately survives." },
                { id: "D", text: "Only scholars should have access to scientific knowledge.", isCorrect: false, explanation: "Brecht argues knowledge should be shared widely." }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "u13-glossary",
      title: "4. Glossary",
      description: "Key terms from Scene 13.",
      color: "duo-violet",
      lessons: [
        {
          id: "les-u13-vocab",
          title: "Key Terms",
          description: "Vocabulary from The Life of Galileo — Scene 13.",
          icon: "BookOpen",
          slides: [
            {
              id: "v-turnpike",
              type: "word_card",
              title: "Word Card",
              content: "Vocabulary",
              wordCard: {
                word: "Turnpike",
                translation: "A toll gate — a barrier at which a toll is collected",
                context: "The scene takes place at a frontier turnpike.",
                example: "At the frontier turnpike, children are playing."
              }
            },
            {
              id: "v-manuscript",
              type: "word_card",
              title: "Word Card",
              content: "Vocabulary",
              wordCard: {
                word: "Manuscript",
                translation: "A handwritten or typed work, not yet printed",
                context: "Refers to Galileo's Discorsi, which Andrea is secretly carrying across the border.",
                example: "Andrea is sitting on a little chest and reading Galileo's manuscript."
              }
            },
            {
              id: "v-frontier",
              type: "word_card",
              title: "Word Card",
              content: "Vocabulary",
              wordCard: {
                word: "Frontier",
                translation: "The border or dividing line between two countries",
                context: "The setting of the scene — the Italian border where knowledge attempts to cross.",
                example: "Andrea, carrying the chest, goes with the coachman across the frontier."
              }
            }
          ]
        }
      ]
    }
  ]
};

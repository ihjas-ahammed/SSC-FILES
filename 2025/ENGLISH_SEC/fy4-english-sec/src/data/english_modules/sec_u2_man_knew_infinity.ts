import { Section } from '../../types';

export const SEC_U2_MAN_KNEW_INFINITY: Section = {
  id: "sec-u2-man-knew-infinity",
  title: "Unit 2: The Man Who Knew Infinity",
  description: "The 2015 biopic about mathematician Srinivasa Ramanujan — Dir. Matthew Brown",
  color: "duo-green",
  units: [
    {
      id: "u2-life",
      title: "1. Introduction: Life of Ramanujan",
      description: "Early life, education, and mathematical genius.",
      color: "duo-green",
      lessons: [
        {
          id: "les-u2-early",
          title: "Early Life & Genius",
          description: "Birth, Carr's book, lost scholarship, and clerk years.",
          icon: "User",
          slides: [
            {
              id: "sl-u2-early1",
              type: "theory",
              title: "Birth & Background",
              content: `Introduction Srinivasa Ramanujan FRS (22 December 1887 - 26 April 1920) was a remarkable Indian mathematician of the 20th century who revolutionized number theory, infinite series, and mathematical analysis with his original work. Born in Erode, Tamil Nadu, to a poor Brahmin family, this autodidact received sparse formal education.

At the age of 16, A Synopsis of Elementary Results in Pure and Applied Mathematics (1886) by George Shoobridge Carr awakened the genius in him leading to the formulation of original theorems. Although awarded a scholarship to the University of Madras in 1903, he lost it due to his singular focus on mathematics.

For years he worked without steady income, eventually marrying Janaki Ammal in 1909. His talent caught the attention of government official Ramachandra Rao, who briefly supported him, and later the Madras Port Trust employed him as a clerk.`
            },
            {
              id: "sl-u2-early2",
              type: "theory",
              title: "Cambridge, Hardy & 1729",
              content: `Ramanujan started publishing in 1911, and the mathematicians were amazed by his expertise in continued fractions and new contributions to partition functions. In 1913, letters he wrote to British mathematician G.H.

Hardy earned him a scholarship from the University of Madras and a grant from Trinity College, Cambridge. By the time he arrived in England on April 14, 1914, his English was excellent.

Along with Hardy, he made important contributions to the theory of prime numbers and the theory of modular forms. Together, they also came up with the renowned “Hardy-Ramanujan number” 1729—the lowest number which can be written as the sum of two cubes in two different ways.`
            },
            {
              id: "sl-u2-early3",
              type: "theory",
              title: "Health, Death & Legacy",
              content: `vegetarian food during the First World War, and in 1917 he developed tuberculosis. He returned to India in 1919 but kept on working until he died at the age of 32.

His final paper featured “mock modular forms,” the meaning of which had confounded mathematicians for generations until verified in 2012, and which has possible applications in contemporary physics. Spiritual in the deepest sense, Ramanujan regarded mathematics as a language of the divine and famously declared, “An equation for me has no meaning unless it expresses a thought of God.” In December 2011, the Government of India declared Ramanujan’s birthday as National Mathematics Day, and also celebrated 2012 as the National Mathematical Year.

The life and work of the pioneering mathematician was subsequently depicted in the 2015 biopic The Man Who Knew Infinity directed by Matthew Brown, starring Dev Patel and Jeremy Irons as Ramanujan and Hardy respectively and is based on the homonymous biography by Robert Kanigel, an American author.`
            },
            {
              id: "sl-u2-early-quiz",
              type: "quiz",
              title: "Hardy-Ramanujan Number",
              content: "Why is 1729 known as the Hardy-Ramanujan number?",
              options: [
                { id: "A", text: "It was the year Ramanujan was born.", isCorrect: false, explanation: "Ramanujan was born in 1887." },
                { id: "B", text: "It is the lowest number expressible as the sum of two cubes in two different ways.", isCorrect: true, explanation: "1729 = 1³ + 12³ = 9³ + 10³. This is the Hardy-Ramanujan number." },
                { id: "C", text: "It was the number of theorems in Ramanujan's notebooks.", isCorrect: false, explanation: "Not the significance of 1729." },
                { id: "D", text: "It was Hardy's favourite prime number.", isCorrect: false, explanation: "1729 is not a prime number." }
              ]
            }
          ]
        },
        {
          id: "les-u2-film",
          title: "The Film & Director",
          description: "Matthew Brown's intention and 12-year production.",
          icon: "Film",
          slides: [
            {
              id: "sl-u2-film1",
              type: "theory",
              title: "The Film — Background",
              content: `In an article published in The New York Times on April 28, 2016, Director Matthew Brown reveals his intention behind doing a film about mathematics: “The math was always a subtext for me. It was always the background to a human story.

I was blown away by the story between these two people and what it means for us to be open in society and for people to get past themselves to be able to connect. Because I think that’s the only way that we are able to recognize outliers and encourage talent.” Matthew Brown, the director and screenplay writer, took extreme care to do justice to the story line by presenting it in a realistic manner as a result of which the film took 12 years to complete.`
            },
            {
              id: "sl-u2-film2",
              type: "theory",
              title: "Director's Intention (New York Times Quote)",
              content: `Matthew Brown reveals his intention behind doing a film about mathematics: “The math was always a subtext for me. It was always the background to a human story.

I was blown away by the story between these two people and what it means for us to be open in society and for people to get past themselves to be able to connect. Because I think that’s the only way that we are able to recognize outliers and encourage talent.” Matthew Brown, the director and screenplay writer, took extreme care to do justice to the story line by presenting it in a realistic manner as a result of which the film took 12 years to complete.

The exterior scene shot on the actual Trinity campus, where Hardy is seen carrying an umbrella on a sunny day and is engaged in an argument with Ramanujan, was shot in rainy weather with only an hour to shoot.`
            },
            {
              id: "sl-u2-film3",
              type: "theory",
              title: "The Trinity Campus Scene",
              content: `Matthew Brown, the director and screenplay writer, took extreme care to do justice to the story line by presenting it in a realistic manner as a result of which the film took 12 years to complete. The exterior scene shot on the actual Trinity campus, where Hardy is seen carrying an umbrella on a sunny day and is engaged in an argument with Ramanujan, was shot in rainy weather with only an hour to shoot.

The intensity of the scene that began with a conversation between a believer and an atheist demanded technical experimentation to convey the highpoint in the film as it ends with a surprise - Hardy displaying out of his bag, the hardcopy of Ramanujan’s article that the former got published without the latter’s knowledge. Here, the cinematic brilliance of the director is displayed as the scene soon shifts to India where his wife is distributing offerings to the invited guests at their house to celebrate his achievement while his mother proudly announces the news of his article being published in the London Mathematical Society.

Two parts of the world acknowledge in confluence, the moment when Hardy, the rocket, launches the satellite Ramanujan into the orbit of science! The rest is history....`
            },
            {
              id: "sl-u2-film4",
              type: "theory",
              title: "Ken Ono & Ramanujan's Confession",
              content: `The assistance of Ken Ono, a mathematician, was also sought to ensure authenticity in the portrayal of scenes and dialogue delivery. The story also successfully conveys the protagonist’s connection to India and his family as he desperately confesses to Hardy, “Don’t you know what I have given up to be here.” The scenes depicting Ramanujan following his cultural beliefs in a foreign land are presented in a neutral manner without any judgement or bias.

The moments when Ramanujan gets emotional are rendered so genuinely by the director and the actor that they project the human side of a mathematician which is often said to be “non-existent.”`
            }
          ]
        }
      ]
    },
    {
      id: "u2-themes",
      title: "2. Film Analysis: Themes",
      description: "Key themes — Persistence, Imagination, Racism, Janaki, Title.",
      color: "duo-teal",
      lessons: [
        {
          id: "les-u2-opening",
          title: "Opening & Persistence",
          description: "The film's opening and Ramanujan's self-worth.",
          icon: "Star",
          slides: [
            {
              id: "sl-u2-open",
              type: "theory",
              title: "Opening — Russell Quote & Hardy's Letter",
              content: `Outline of the Movie and Themes The film begins with a quote by the British intellectual Bertrand Russell - “Mathematics, rightly viewed, possesses not only truth but supreme beauty.” At the outset of the movie, as the cast and crew are mentioned, the scene opens with Trinity College, Cambridge, England in 1920 as the setting. Hardy is introduced in the scene as writing a letter wherein, he describes Ramanujan as “the most romantic figure in the recent history of mathematics” and terms his relationship with him as the “one romantic incident of my (Hardy’s) life.” Then, the scene shifts to Madras, India, set in 1914.

Ramanujan’s story unveils through Hardy’s narration. Hardy says, “I did not invent him.

Like other great men, he invented himself.” Ramanujan is seen to be working out a mathematical calculation on the bare ground of the temple premises of his family goddess Namagiri of Namakkal.`
            },
            {
              id: "sl-u2-persist",
              type: "theory",
              title: "Persistence & Individuality — Diamond Quote",
              content: `Persistence and Individuality: Ramanujan is denied employment in British occupied India citing his lack of qualifications. Returning to Victoria Students’ Hostel where he stays with Viswanatha Sastri whom he had tutored previously, he laments - “I’m doomed, like Galileo.

He died in poverty....” He treasures his notebooks filled with original mathematical equations but they were ignored by the society that valued wealth and academic degrees as foremost. When he approaches S.

Narayana Iyer who was the treasurer of the Indian Mathematical Society and chief accountant at the Madras Port Trust office, he is appointed as a clerk there during the period 1912-1914 upon a condition that Ramanujan will share his mathematical knowledge with him every evening. Sir Francis Spring, the Chairman of the Trust, initially doubted his capacity based on his looks and warns him, “Your accounts had better be half as polished as your ego” in reply to Ramanujan’s self-introduction that, “What you might see now is ordinary glass, but I promise you will soon remain to see a diamond.” This interaction perfectly portrays Ramanujan as a man of self-worth and points to the insignificance of money in determining one’s dignity.

Subsequently, he proves himself and wins the support and admiration of these same people who ensure that he ends up in England along with prominent mathematicians of the time.`
            }
          ]
        },
        {
          id: "les-u2-imagination",
          title: "Imagination, Humility & Racism",
          description: "Key film scenes on these themes.",
          icon: "Brain",
          slides: [
            {
              id: "sl-u2-imag",
              type: "theory",
              title: "Imagination & Humility",
              content: `Imagination and Humility: Anna, as Ramanujan lovingly addresses Narayana Iyer, wants him to be recognised on an international level. He states, “...

British, even while they subjugate us, must recognise that our brightest matches theirs.” He instigates Ramanujan to “imagine”, to which he replies, “All I do is imagine.” Elsewhere, during his first trip to England, sitting on a ship when a fellow traveller comments on the distance and asks whether he can imagine that, Ramanujan humbly replies with a self-satisfied smile, “I have known larger numbers.” These pithy statements sum the work of his life and highlights the importance of being original in thoughts in order to invent something new. His criticsisers like Spring later turn out to be his ardent admirers.

Hardy, initially, receives the letter containing Ramanujan’s formulas with reservation regarding its authenticity. He suspects it to have been written by his colleague, another great mathematician John Edensor Littlewood.

The first meeting between Littlewood and Ramanujan against the backdrop of the University is particularly significant for many reasons. It delineates the coloniser-colonised dichotomy as Ramanujan stares at the grand building and Littlewood remarks sarcastically, “Yes.

The intended effect. Don’t be intimidated” and he is quick to add that “Great knowledge often comes from the humblest of origins”, a pointer towards Ramanujan’s own status and also proving Littlewood to be a true genius who is not overruled by ego.

In fact, it is Littlewood, an established mathematician, who initiates the conversation with Ramanujan at first.`
            },
            {
              id: "sl-u2-racism",
              type: "theory",
              title: "Racism at Cambridge",
              content: `The film also raises issues of racism at several levels. Hardy’s proposal to offer a Fellowship to Ramanujan is outvoted at Trinity College.

This was foreseen by Littlewood, “I doubt a dark face will ever grace these walls, let alone become a Fellow”, referring to the feeble chance of Ramanujan occupying a place in the Royal Society amidst legends like Newton. Hardy’s reaction to this is a deliberate silence as if time will prove everything.

Surely enough, the academia finally bestows the coveted Royal Society Fellowship (FRS) itself on Ramanujan. Besides, when Ramanujan attends lectures in order to compensate for his lack of degree, the harsh treatment of the professor is also exposed in a matter-of-fact manner.

Yet the fact that Trinity College permitted the scene to be shot there, points towards readiness to change, a hope for humanity. The director, in an interview in 2016, also notes the interesting fact that the president of the Royal Society, then, was an Indian.`
            },
            {
              id: "sl-u2-title",
              type: "theory",
              title: "Relevance of the Title — Explorers of Infinity",
              content: `There are a few other intellectuals who, in their typical way, sneer at the “uneducated Indian” and from that point the story centres around Hardy’s attempts to reconcile them with Ramanujan and his own struggles with the latter to convince him of the scientific method of research and publication that is based on proofs rather than a “dance with numbers to infinity” as Hardy describes Ramanujan’s way of arriving at formulas. Finally, when Hardy speaks for Ramanujan’s cause to be granted an FRS, he reconsiders this statement he made as he describes the purpose of mathematicians, “We are merely explorers of infinity in the pursuit of absolute perfection.

We do not invent these formulae, they already exist and lie in wait for only the very brightest of minds, like Ramanujan, ever to divine and prove. So, in the end, I have been forced to consider, who are we to question Ramanujan, let alone God?”`
            }
          ]
        },
        {
          id: "les-u2-janaki",
          title: "Janaki Ammal & Conclusion",
          description: "The strong woman behind Ramanujan.",
          icon: "Heart",
          slides: [
            {
              id: "sl-u2-janaki",
              type: "theory",
              title: "Role of Janaki Ammal",
              content: `The film also presents the character of his wife, played by Devika Bhise, as a strong woman who plays a significant role in his success. Despite the restrictions imposed on her by the rigid social set up, she emerges as a woman genuinely interested in his academic ventures and as a person with an outward mindset.

When he proposes to move to England, though she is reluctant in the beginning for fear of social alienation, she agrees upon a condition that he will take her too once situation permits. Despite severe accusations from her mother-in-law, she supports him in achieving his goals.

She continues to write letters to him despite receiving no reply and her reaction, at the point when it is revealed that her letters were hidden without posting by his mother, is presented in a convincing manner. She openly expresses her feelings throughout the story, a trait that required immense courage for a woman living in those times.`
            },
            {
              id: "sl-u2-conclusion",
              type: "theory",
              title: "Conclusion — War, Health & Obituary",
              content: `As the movie progresses, the effects of war and Ramanujan’s failing health are entwined into the narrative that primarily focuses on his growing credibility and persistent efforts to prove his findings. The worsening conditions of his life due to lack of nutrition, emotional support and acceptance in the scientific community coupled with the stress of work and war, lead to his suicide attempt by jumping in front of a London train.

The relationship between Hardy and Ramanujan blossoms amidst these tragic circumstances, each constructively influencing each other. At the end, he returns to India and the one year he spent in his country before his untimely death is shown as snapshots after the scene where Hardy delivers a heart-touching obituary.

Glossary Autodidact : self-taught Homonymous : having the same name/title Biopic : a film that dramatizes the life of a real person (a portmanteau word in English, that is a new word formed by blending the parts of the words “biography” and “picture”)`
            },
            {
              id: "sl-u2-themes-quiz",
              type: "quiz",
              title: "Themes Quiz",
              content: "Littlewood tells Ramanujan 'Great knowledge often comes from the humblest of origins.' What does this statement suggest?",
              options: [
                { id: "A", text: "Littlewood is mocking Ramanujan's poverty.", isCorrect: false, explanation: "The text says Littlewood is proving himself to be a 'true genius who is not overruled by ego.'" },
                { id: "B", text: "It is a pointer toward Ramanujan's own humble status, showing Littlewood's genuine respect and freedom from ego.", isCorrect: true, explanation: "The text explicitly says this statement is 'a pointer towards Ramanujan's own status and also proving Littlewood to be a true genius who is not overruled by ego.'" },
                { id: "C", text: "It is a general philosophical statement with no specific reference.", isCorrect: false, explanation: "The text connects it directly to Ramanujan." },
                { id: "D", text: "Littlewood is speaking about his own background.", isCorrect: false, explanation: "The statement is about Ramanujan." }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "u2-glossary",
      title: "3. Glossary",
      description: "Key terms from the unit.",
      color: "duo-violet",
      lessons: [
        {
          id: "les-u2-vocab",
          title: "Key Terms",
          description: "Vocabulary from The Man Who Knew Infinity.",
          icon: "BookOpen",
          slides: [
            {
              id: "v-autodidact",
              type: "word_card",
              title: "Word Card",
              content: "Vocabulary",
              wordCard: {
                word: "Autodidact",
                translation: "A self-taught person",
                context: "Describes someone who learns without formal instruction.",
                example: "This autodidact received sparse formal education yet revolutionized number theory."
              }
            },
            {
              id: "v-biopic",
              type: "word_card",
              title: "Word Card",
              content: "Vocabulary",
              wordCard: {
                word: "Biopic",
                translation: "A film that dramatizes the life of a real person (portmanteau of 'biography' and 'picture')",
                context: "The Man Who Knew Infinity is a biopic about Ramanujan.",
                example: "The life and work of the pioneering mathematician was depicted in the 2015 biopic The Man Who Knew Infinity."
              }
            },
            {
              id: "v-homonymous",
              type: "word_card",
              title: "Word Card",
              content: "Vocabulary",
              wordCard: {
                word: "Homonymous",
                translation: "Having the same name or title",
                context: "The film is based on a book with the same name.",
                example: "The film is based on the homonymous biography by Robert Kanigel, an American author."
              }
            }
          ]
        }
      ]
    },
    {
      id: "u2-exam",
      title: "4. Exam Preparation",
      description: "Model questions from Section C.",
      color: "duo-orange",
      lessons: [
        {
          id: "les-u2-exam",
          title: "Model Questions",
          description: "Section C essay practice.",
          icon: "PenTool",
          slides: [
            {
              id: "sl-u2-secC",
              type: "theory",
              title: "Section C (10 Marks) — Ramanujan as Scientist and Human",
              content: `**Question:** Compare Ramanujan's role as a scientist with that of a husband/son to illustrate the humane qualities required to contribute to one's society despite challenges.

**Key Points to include:**
1. As a **scientist**: persistence, self-belief, original thinking, dedication to mathematics despite poverty and racism.
2. As a **husband**: promise to Janaki, inability to bring her to England, emotional cost of separation.
3. As a **son**: mother's interference with letters; torn between duty and destiny.
4. **Humane qualities**: courage, sacrifice, humility, emotional vulnerability alongside intellectual genius.
5. **Ramanujan's own words**: 'An equation for me has no meaning unless it expresses a thought of God.'
6. **Conclusion**: Ramanujan's story shows genuine contribution requires personal sacrifice.`
            },
            {
              id: "sl-u2-exam-fib",
              type: "fill_in_blank",
              title: "Fill in the Blank",
              content: "Hardy describes his relationship with Ramanujan as the 'one ___ incident of my life'.",
              blankAnswer: "romantic"
            }
          ]
        }
      ]
    }
  ]
};

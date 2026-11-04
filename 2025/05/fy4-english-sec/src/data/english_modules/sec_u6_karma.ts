import { Section } from '../../types';

export const SEC_U6_KARMA: Section = {
  id: "sec-u6-karma",
  title: "Unit 6: Karma",
  description: "Khushwant Singh's satirical tale of identity, colonial mimicry, and irony.",
  color: "duo-orange",
  units: [
    {
      id: "u6-part1-intro",
      title: "1. Introduction & Context",
      description: "Author background and the core themes.",
      color: "duo-orange",
      lessons: [
        {
          id: "les-u6-intro",
          title: "Author & Theme",
          description: "Understanding Khushwant Singh and post-colonial satire.",
          icon: "User",
          slides: [
            {
              id: "s-u6-hook",
              type: "quiz",
              title: "The Price of Pretension",
              content: "What usually happens when someone tries too hard to be someone they are not?",
              options: [
                { id: "A", text: "They successfully convince everyone and live happily.", isCorrect: false, explanation: "Usually, the facade cracks." },
                { id: "B", text: "They alienate themselves from their roots and risk humiliation.", isCorrect: true, explanation: "This is the exact predicament of Sir Mohan Lal in 'Karma'." }
              ]
            },
            {
              id: "s-u6-author",
              type: "theory",
              title: "The Author: Khushwant Singh",
              content: `**Khushwant Singh (1915–2014)** was one of India's most prominent authors and journalists.\n\nHis short story “Karma”, published in 1989 in *The Collected Stories*, is one of his most celebrated works, showcasing his ability to blend humor with biting social critique.\n\nSingh powerfully critiques the cultural pretensions of the colonial mindset and underscores the importance of self-respect and authenticity.`
            },
            {
              id: "s-u6-genre",
              type: "theory",
              title: "What are we reading?",
              content: `**Genre:** Short Story / Post-Colonial Satire\n\n**The Core Themes:**\n* **Colonial Mimicry:** The blind admiration and imitation of British culture by Indians.\n* **Cultural Alienation:** Disconnecting from one's own heritage.\n* **Karma & Irony:** The idea that actions have inevitable, often ironic, consequences (pride comes before a fall).`
            },
            {
               id: "s-u6-pre-mcq",
               type: "quiz",
               title: "Pre-reading Check",
               content: "Based on the title 'Karma', what kind of ending do you expect for a character who acts arrogantly toward others?",
               options: [
                 { id: "A", text: "They will be rewarded for their superiority.", isCorrect: false, explanation: "That would defy the concept of karma." },
                 { id: "B", text: "They will likely experience a humiliating downfall.", isCorrect: true, explanation: "Exactly. The concept of karma suggests that you reap what you sow." }
               ]
            }
          ]
        }
      ]
    },
    {
      id: "u6-part2-text1",
      title: "2. The Mirror & The Lady",
      description: "Contrasting Sir Mohan and Lachmi.",
      color: "duo-green",
      lessons: [
        {
          id: "les-u6-tx1",
          title: "Sir Mohan's Reflection",
          description: "The waiting room and the mirror.",
          icon: "Search",
          slides: [
            {
              id: "s-u6-tx1-1",
              type: "theory",
              title: "The Indian Mirror",
              content: `> "Sir Mohan Lal looked at himself in the mirror of a first class waiting room at the railway station. The mirror was obviously made in India. The red oxide at its back had come off at several places and long lines of translucent glass cut across its surface. Sir Mohan smiled at the mirror with an air of pity and patronage."`
            },
            {
              id: "s-u6-tx1-2",
              type: "theory",
              title: "Inefficient and Dirty",
              content: `> "‘You are so very much like everything else in this country, inefficient, dirty, indifferent,’ he murmured.\n> \n> The mirror smiled back at Sir Mohan.\n> \n> ‘You are a bit of all right, old chap,’ it said. ‘Distinguished, efficient - even handsome. That neatly-trimmed moustache - the suit from Savile Row with the carnation in the buttonhole - the aroma of eau de cologne, talcum powder and scented soap all about you! Yes, old fellow, you are a bit of all right.’"`
            },
            {
              id: "s-u6-tx1-3",
              type: "quiz",
              title: "Inference",
              content: "What does Sir Mohan's reaction to the mirror reveal about his character?",
              options: [
                { id: "A", text: "He is a proud Indian who wants to improve his country.", isCorrect: false, explanation: "He looks at it with 'pity and patronage', distancing himself from it." },
                { id: "B", text: "He despises his Indian identity and feels superior due to his British manners.", isCorrect: true, explanation: "He contrasts the 'inefficient, dirty' Indian mirror with his own 'Savile Row' English perfection." }
              ]
            },
            {
              id: "s-u6-tx1-4",
              type: "theory",
              title: "A Quick Drink",
              content: `> "Sir Mohan threw out his chest, smoothed his Balliol for the umpteenth time and waved a goodbye to the mirror.\n> \n> He glanced at his watch. There was still time for a quick one.\n> \n> ‘Koi Hai!’\n> \n> A bearer in white livery appeared through a wire gauze door.\n> \n> ‘Ek Chota,’ ordered Sir Mohan, and sank into a large cane chair to drink and ruminate."`
            }
          ]
        },
        {
          id: "les-u6-tx2",
          title: "Lady Lal on the Platform",
          description: "Lachmi's simple ways and isolation.",
          icon: "Search",
          slides: [
            {
              id: "s-u6-tx2-1",
              type: "theory",
              title: "Enter Lachmi",
              content: `> "Outside the waiting room, Sir Mohan Lal’s luggage lay piled along the wall. On a small grey steel trunk, Lachmi, Lady Mohan Lal, sat chewing a betel leaf and fanning herself with a newspaper. She was short and fat and in her middle forties.\n> \n> She wore a dirty white sari with a red border. On one side of her nose glistened a diamond nose-ring, and she had several gold bangles on her arms."`
            },
            {
              id: "s-u6-tx2-2",
              type: "theory",
              title: "The Coolie and the Meal",
              content: `> "She had been talking to the bearer until Sir Mohan had summoned him inside. As soon as he had gone, she hailed a passing railway coolie.\n> ‘Where does the zenana stop?’\n> ‘Right at the end of the platform.’\n> \n> ...Lady Lal opened the brass carrier and took out a bundle of cramped chapatties and some mango pickle. While she ate, the coolie sat opposite her on his haunches drawing lines in the gravel with his finger."`
            },
            {
              id: "s-u6-tx2-3",
              type: "theory",
              title: "The Zenana Inter Class",
              content: `> "‘Are you travelling alone, sister ?’\n> \n> ‘No, I am with my master, brother. He is in the waiting room. He travels first class. He is a vizier and a barrister - and I am only a native woman. I can’t understand English and don’t know their ways, so I keep to my zenana inter class.’"`
            },
            {
              id: "s-u6-tx2-4",
              type: "theory",
              title: "A Distant Marriage",
              content: `> "Lachmi chatted away merrily... Her husband never had any time to spare for her. She lived in the upper storey of the house and he was on the ground floor. He did not like her poor illiterate relatives hanging around his bungalow... He came up to her once in a while at night and stayed for a few minutes. He just ordered her about in anglicised Hindustani, and she obeyed passively. These nocturnal visits had, however, borne no fruit."`
            },
            {
              id: "s-u6-tx2-5",
              type: "quiz",
              title: "Thematic Connection",
              content: "How does the physical separation of Sir Mohan (ground floor) and Lachmi (upper storey) function as a symbol?",
              options: [
                { id: "A", text: "It highlights their differing social classes and cultural identities.", isCorrect: true, explanation: "Sir Mohan aligns with the British elite, while confining his traditional Indian wife out of sight." },
                { id: "B", text: "It shows that they are wealthy enough to have a large house.", isCorrect: false, explanation: "While true, the narrative focus is on their emotional and cultural estrangement." }
              ]
            },
            {
              id: "s-u6-tx2-6",
              type: "theory",
              title: "Boarding the Train",
              content: `> "The signal came down and the clanging of the bell announced the approaching train. Lady Lal hurriedly finished off her meal. She got up, still licking the stone of the pickled mango. She emitted a long, loud belch as she went to the public tap to rinse her mouth and wash her hands... belching and thanking the Gods for the favour of a filling meal.\n> \n> ...She heaved her squat, bulky frame through the door and found a seat by the window... She then opened her betel case and prepared herself two betel leaves..."`
            }
          ]
        }
      ]
    },
    {
      id: "u6-part3-text2",
      title: "3. The Train & The Climax",
      description: "Sangfroid shattered.",
      color: "duo-blue",
      lessons: [
        {
          id: "les-u6-tx3",
          title: "Sangfroid & Scotch",
          description: "Sir Mohan's desire for English company.",
          icon: "Search",
          slides: [
            {
              id: "s-u6-tx3-1",
              type: "theory",
              title: "Tickety-Boo",
              content: `> "The arrival of the train did not disturb Sir Mohan Lal’s sangfroid. He continued to sip his scotch and ordered the bearer to tell him when he had moved the luggage to the first class compartment. Excitement, bustle and hurry were exhibitions of bad breeding, and Sir Mohan was eminently well-bred. He wanted everything ‘tickety-boo’ and orderly. In his five years abroad, Sir Mohan had acquired the manners and attitudes of the upper classes."`
            },
            {
              id: "s-u6-tx3-2",
              type: "theory",
              title: "The Bait for Conversation",
              content: `> "Sir Mohan wondered if he would be travelling alone... His heart warmed at the prospect of an impressive conversation. He never showed any sign of eagerness to talk to the English as most Indians did... He would fold [The Times] in a way in which the name of the paper was visible... Perhaps someone would recognize his Balliol tie... If both The Times and the tie failed, Sir Mohan would ‘Koi Hai’ his bearer to get the Scotch out."`
            },
            {
              id: "s-u6-tx3-3",
              type: "quiz",
              title: "Character Focus",
              content: "What is Sir Mohan's true attitude toward the English?",
              options: [
                { id: "A", text: "He dislikes them but tolerates them for business.", isCorrect: false, explanation: "He actively seeks their company." },
                { id: "B", text: "He idolizes them and desperately craves their validation.", isCorrect: true, explanation: "He uses the newspaper, tie, and Scotch as calculated 'bait' just to get them to talk to him." }
              ]
            },
            {
              id: "s-u6-tx3-4",
              type: "theory",
              title: "Disdain for India",
              content: `> "But could he use the Englishman as a medium to commune with his dear old England? ... Five years of a crowded glorious life. Worth far more than the forty-five in India with his dirty, vulgar countrymen, with sordid details of the road to success, of nocturnal visits to the upper storey and all-too-brief sexual acts with obese old Lachmi, smelling of sweat and raw onions."`
            }
          ]
        },
        {
          id: "les-u6-tx4",
          title: "The Soldiers Arrive",
          description: "Bill and Jim enter the coupe.",
          icon: "Search",
          slides: [
            {
              id: "s-u6-tx4-1",
              type: "theory",
              title: "The Two Soldiers",
              content: `> "Sir Mohan’s thoughts were disturbed by the bearer announcing the installation of the Sahib’s luggage in a first class coupe next to the engine. Sir Mohan walked to his coupe with a studied gait. He was dismayed. The compartment was empty... \n> \n> Sir Mohan looked out of the window down the crowded platform. His face lit up as he saw two English soldiers trudging along, looking in all the compartments for room... Sir Mohan decided to them, even though they were entitled to travel in first and second class."`
            },
            {
              id: "s-u6-tx4-2",
              type: "theory",
              title: "The Encounter",
              content: `> "One of the soldiers came up to the last compartment and stuck his face through the window.\n> ‘Ere, Bill,’ he shouted, ‘one ere.’\n> \n> His companion came up, also looked in, and looked at Sir Mohan.\n> ‘Get the nigger out,’ he muttered to his companion.\n> \n> They opened the door, and turned to the half-smiling, protesting Sir Mohan.\n> ‘Reserved!’ yelled Bill.\n> ‘Janta - Reserved. Army - Fauj,’ exclaimed Jim..."`
            },
            {
              id: "s-u6-tx4-3",
              type: "theory",
              title: "The Oxford Accent Fails",
              content: `> "‘Ek Dum jao - get out!’\n> \n> ‘I say, I say, surely,’ protested Sir Mohan in his Oxford accent. The soldiers paused. It almost sounded like English, but they knew better than to trust their inebriated ears... \n> \n> They picked up Sir Mohan’s suitcase and flung it onto the platform. Then followed his thermos flask, briefcase, bedding and The Times."`
            }
          ]
        },
        {
          id: "les-u6-tx5",
          title: "The Climax",
          description: "The ironic resolution of Karma.",
          icon: "Search",
          slides: [
            {
              id: "s-u6-tx5-1",
              type: "theory",
              title: "The Physical Blow",
              content: `> "Sir Mohan was livid with rage.\n> ‘Preposterous, preposterous,’ he shouted, hoarse with anger.\n> ‘I’ll have you arrested - guard, guard!’\n> \n> Bill and Jim paused again. It did sound like English, but it was too much of the King’s for them.\n> ‘Keep yer ruddy mouth shut!’ And Jim struck Sir Mohan flat on the face."`
            },
            {
              id: "s-u6-tx5-2",
              type: "theory",
              title: "Thrown Out",
              content: `> "The engine gave another short whistle and the train began to move. The soldier's caught Sir Mohan by the arm and flung him out of the train. He reeled backwards, tripped on his bedding, and landed on the suitcase.\n> \n> ‘Toodle-oo!’"`
            },
            {
              id: "s-u6-tx5-3",
              type: "theory",
              title: "The Jet of Red Dribble",
              content: `> "Sir Mohan’s feet were glued to the earth and he lost his speech. He stared at the lighted windows of the train going past him in quickening tempo... \n> \n> In the inter-class zenana compartment was Lachmi, fair and fat, on whose nose the diamond nose-ring glistened against the station lights. Her mouth was bloated with betel saliva which she had been storing up to spit as soon as the train had cleared the station. As the train sped past the lighted part of the platform, Lady Lal spat and sent a jet of red dribble flying across like a dart."`
            },
            {
              id: "s-u6-tx5-4",
              type: "quiz",
              title: "Thematic Irony",
              content: "What is the supreme irony of the story's ending?",
              options: [
                { id: "A", text: "Sir Mohan is thrown out by the very people he idolized, while his traditional wife travels on peacefully.", isCorrect: true, explanation: "His 'Karma' is that his blind worship of the British results in his humiliation by them." },
                { id: "B", text: "Sir Mohan lost his luggage but kept his Balliol tie.", isCorrect: false, explanation: "The true irony lies in the reversal of status and the failure of his cultural mimicry." }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "u6-part4-mastery",
      title: "4. Vocabulary & Mastery",
      description: "Master key terms and reflect on the text.",
      color: "duo-violet",
      lessons: [
        {
          id: "les-u6-vocab",
          title: "Glossary",
          description: "Key words from the text.",
          icon: "Type",
          slides: [
            {
              id: "v-u6-1",
              type: "word_card",
              content: "Vocabulary",
              wordCard: {
                word: "Savile Row",
                translation: "A street in London renowned for its bespoke tailoring for men.",
                context: "> \"...the suit from Savile Row with the carnation in the buttonhole...\"",
                example: "His perfectly fitted suit was undeniably from Savile Row."
              }
            },
            {
              id: "v-u6-2",
              type: "word_card",
              content: "Vocabulary",
              wordCard: {
                word: "Zenana",
                translation: "The part of a house or train reserved for the women of the household.",
                context: "> \"Where does the zenana stop?\"",
                example: "Lady Lal preferred the comfort of the zenana compartment."
              }
            },
            {
              id: "v-u6-3",
              type: "word_card",
              content: "Vocabulary",
              wordCard: {
                word: "Sangfroid",
                translation: "Composure or coolness, especially in trying circumstances.",
                context: "> \"The arrival of the train did not disturb Sir Mohan Lal’s sangfroid.\"",
                example: "He handled the crisis with remarkable sangfroid."
              }
            },
            {
              id: "v-u6-4",
              type: "word_card",
              content: "Vocabulary",
              wordCard: {
                word: "Tickety-boo",
                translation: "In good order; fine.",
                context: "> \"He wanted everything ‘tickety-boo’ and orderly.\"",
                example: "Once the paperwork is signed, everything will be tickety-boo."
              }
            },
            {
              id: "v-u6-5",
              type: "word_card",
              content: "Vocabulary",
              wordCard: {
                word: "Preposterous",
                translation: "Contrary to reason or common sense; utterly absurd or ridiculous.",
                context: "> \"‘Preposterous, preposterous,’ he shouted, hoarse with anger.\"",
                example: "The idea that he would steal the money is simply preposterous."
              }
            }
          ]
        },
        {
          id: "les-u6-exam",
          title: "Model Questions",
          description: "Practice answering in the format of the exam.",
          icon: "Edit3",
          slides: [
            {
              id: "s-u6-qa1",
              type: "theory",
              title: "Section A (2 Marks)",
              content: `**Q: How is Lady Lal portrayed in contrast to her husband?**\n\n**Model Answer:**\nLady Lal (Lachmi) is portrayed as a traditional, simple, and unpretentious Indian woman, contrasting sharply with her husband, Sir Mohan Lal, who is an arrogant, Anglicized snob. While she chews betel leaves, wears a dirty white sari, and happily chats with a coolie, he wears Savile Row suits, sips Scotch, and despises his fellow Indians.`
            },
            {
              id: "s-u6-qc1",
              type: "theory",
              title: "Section C (10 Marks) - Essay Plan",
              content: `**Q: Explore the theme of identity and cultural alienation in Karma. How do the characters embody conflicting ideas of self-worth and tradition?**\n\n**Essay Plan:**\n1. **Intro:** Introduce Khushwant Singh's "Karma" as a post-colonial satire. Define the central conflict: the tension between native Indian identity and adopted British superiority.\n2. **Sir Mohan's Alienation:** Detail his "Savile Row" suit, Oxford accent, and disdain for India ("inefficient, dirty"). He embodies colonial mimicry, deriving self-worth entirely from his proximity to the British.\n3. **Lachmi's Authenticity:** Contrast him with Lachmi, who represents traditional India (betel leaf, zenana, simple food). She is comfortable in her skin, highlighting Sir Mohan's artificiality.\n4. **The Ironic Climax:** Describe how the British soldiers violently reject Sir Mohan despite his Oxford accent ("Get the nigger out"). \n5. **Conclusion:** Summarize how the story punishes cultural alienation. Sir Mohan's "karma" is being humiliated by the very culture he idolized, proving that abandoning one's roots leads to a loss of dignity.`
            }
          ]
        }
      ]
    }
  ]
};
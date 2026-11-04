import { Section } from '../../types';

export const SEC_U14_STIGMA_SHAME: Section = {
  id: "sec-u14-stigma-shame",
  title: "Unit 14: Stigma, Shame and Silence",
  description: "Kalpana Jain's narrative non-fiction on HIV, social ostracization, and resilience.",
  color: "duo-red",
  units: [
    {
      id: "u14-part1-intro",
      title: "1. Introduction & Context",
      description: "Meet the author and understand the context of the HIV epidemic.",
      color: "duo-red",
      lessons: [
        {
          id: "les-u14-intro",
          title: "Author & Theme",
          description: "Understanding Kalpana Jain's investigative journalism.",
          icon: "User",
          slides: [
            {
              id: "s-u14-hook",
              type: "interactive_canvas",
              title: "The Weight of a Diagnosis",
              content: "Which is worse: a terminal physical illness, or the social isolation and moral judgment that society attaches to certain diseases?\n\nIn this unit, we explore how the true burden of an illness often comes not from the virus itself, but from the people around us.",
              interactiveCanvasId: "intersectionality_web"
            },
            {
              id: "s-u14-author",
              type: "theory",
              title: "The Author: Kalpana Jain",
              content: `**Kalpana Jain** is an investigative journalist who has raised her voice for the betterment of public health and social justice. \n\nWorking extensively for *The Times of India* and later at Harvard, she has covered major health issues like Tuberculosis, Malaria, Dengue, and modern-day slavery. Her most profound contribution, however, is her meticulous coverage of the AIDS epidemic.`
            },
            {
              id: "s-u14-context",
              type: "theory",
              title: "Sensitising the Public",
              content: `Jain travelled to various affected parts of India, gathering stories directly from HIV positive individuals. Her goal was to make people aware of this frightening health hazard while simultaneously **sensitising her readers** to the intense social stigma these patients faced.\n\nHer book on AIDS is now part of the curriculum at many Indian universities.`
            },
            {
              id: "s-u14-genre",
              type: "theory",
              title: "What are we reading?",
              content: `**Genre:** Narrative Non-Fiction / Reportage\n\n**The Core Themes:**\n* **Stigma & Moral Superiority:** How society and medical professionals judge patients.\n* **Resilience:** Choosing to survive and ignore hostility rather than giving in to anger.\n* **Isolation:** The profound loneliness of dealing with a "shameful" disease.`
            },
            {
               id: "s-u14-pre-mcq",
               type: "quiz",
               title: "Pre-reading Check",
               content: "What does the term 'stigma' mean in the context of an illness?",
               options: [
                 { id: "A", text: "A physical symptom that appears on the skin.", isCorrect: false, explanation: "Stigma is a social phenomenon, not a physical symptom." },
                 { id: "B", text: "A mark of disgrace associated with a particular circumstance, quality, or person.", isCorrect: true, explanation: "Exactly. It's the negative social judgment that society attaches to the patient." }
               ]
            }
          ]
        }
      ]
    },
    {
      id: "u14-part2-text1",
      title: "2. The Ship's Deck",
      description: "Ashok reflects on his new reality and makes a choice.",
      color: "duo-blue",
      lessons: [
        {
          id: "les-u14-tx1",
          title: "Paper Boats & Desolation",
          description: "A childhood memory contrasts with present despair.",
          icon: "Anchor",
          slides: [
            {
              id: "s-u14-tx1-1",
              type: "theory",
              title: "The Paper Boats",
              content: `> "As a child, Ashok used to watch with glee his paper boats bobbing in the rainwater and then suddenly getting washed away. There was no sense of loss when this happened. All he had to do was to make another boat.\n> \n> Today, standing on the ship’s deck, he was reminded of his child-hood days; he wondered whether like those paper boats his life too would flow away into oblivion. The thought left him desolate and helpless, as never before."`
            },
            {
              id: "s-u14-tx1-2",
              type: "theory",
              title: "An Unfair World",
              content: `> "Overcome by depression, he began brooding: there was no one who really cared for him, no one who would even feel his loss when he was gone. Just knowing about his HIV status had given even the most inept guys amongst his shipmates, a feeling of enormous power, a sense of unreasonable superiority which led them to behave as they liked with him. The more he thought about it, the angrier he got."`
            },
            {
              id: "s-u14-tx1-3",
              type: "theory",
              title: "Roughing Up Emotions",
              content: `> "‘It is truly an unfair world,’ he said to himself. The moment people around you felt you were weaker than them, they went all out to get you. And because he had got HIV, even his friends had arrogated to them-selves the right to play with his feelings, “to rough up” his emotions. Perhaps, another person in his place would not have been able to take these constant humiliations."`
            },
            {
              id: "s-u14-tx1-4",
              type: "quiz",
              title: "Comprehension Check",
              content: "How did Ashok's shipmates react to his HIV status?",
              options: [
                { id: "A", text: "They offered him sympathy and helped him hide it from the commander.", isCorrect: false, explanation: "Unfortunately, they did the opposite." },
                { id: "B", text: "They used it to feel morally superior and constantly humiliated him.", isCorrect: true, explanation: "They abused his vulnerability to exercise 'unreasonable superiority' over him." }
              ]
            }
          ]
        },
        {
          id: "les-u14-tx2",
          title: "Channeling Energy",
          description: "Choosing survival over anger.",
          icon: "Shield",
          slides: [
            {
              id: "s-u14-tx2-1",
              type: "theory",
              title: "A Decision is Made",
              content: `> "For a long time, Ashok intently kept observing the waves as they lashed against the ship. Unpleasant thoughts flashed through his mind as he tried to figure out how he should go about ordering his new life.\n> \n> Soon he realized this was all a matter of how he channelled his energies. They should certainly not be frittered away in anger, he decided."`
            },
            {
              id: "s-u14-tx2-2",
              type: "theory",
              title: "Ignoring the Contempt",
              content: `> "The best way he could deal with the rejection he felt, was to learn to ignore it. Also, if he kept out of everyone’s way, he wouldn’t have to bear the torture of indifference. To survive, he would have to make a habit of pretending not to hear those rude remarks, as well as try not to notice people’s contemptuous attitude towards him."`
            },
            {
              id: "s-u14-tx2-3",
              type: "theory",
              title: "Self-Counseling",
              content: `> "He couldn’t afford to get into any arguments or fights. Only he would be the loser. So, he counselled himself. Above all, he did not want to give others more of an opportunity to express their superiority.\n> \n> In this way he learnt to protect himself early on, starting with the Command Hospital, Pune, where he was sent for testing."`
            },
            {
              id: "s-u14-tx2-4",
              type: "fill_in_blank",
              title: "Vocabulary Check",
              content: "Ashok decided his energies should certainly not be ___ away in anger.",
              blankAnswer: "frittered"
            }
          ]
        }
      ]
    },
    {
      id: "u14-part3-text2",
      title: "3. The Death Sentence",
      description: "Ashok remembers the brutal diagnosis at Pune.",
      color: "duo-orange",
      lessons: [
        {
          id: "les-u14-tx3",
          title: "Surgical Precision",
          description: "The doctor's complete lack of empathy.",
          icon: "Activity",
          slides: [
            {
              id: "s-u14-tx3-1",
              type: "theory",
              title: "Five Brutal Words",
              content: `> "The doctor there had been brutal. He had delivered the news to him like a death sentence. No mincing of words. No trappings of hope. He had looked at him and said, 'You know you are positive.' Just five words, conveyed with surgical precision."`
            },
            {
              id: "s-u14-tx3-2",
              type: "theory",
              title: "Worse Than a Criminal",
              content: `> "It requires great strength of spirit to be able to bear such a sentence - a death sentence that is without appeal. It is worse than being a criminal, who is to be hanged for violating the norms of civil society.\n> \n> Ashok could feel the doctor point the finger at him; he was jeering at him, his eyes mocking him. He seemed to say, you deserve this for what you have done. There can be no sympathy for you. You are condemned to die for your deeds."`
            },
            {
              id: "s-u14-tx3-3",
              type: "quiz",
              title: "Analyze the Tone",
              content: "Why does the narrator compare Ashok's situation to that of a condemned criminal?",
              options: [
                { id: "A", text: "Because the medical diagnosis was delivered not just as a physical fact, but as a moral punishment for perceived 'sins'.", isCorrect: true, explanation: "The doctor's attitude implies Ashok 'deserves this for what you have done,' turning an illness into a crime." },
                { id: "B", text: "Because Ashok had actually broken naval law and was facing a court-martial.", isCorrect: false, explanation: "Ashok broke no laws; the 'crime' is the societal prejudice against HIV." }
              ]
            }
          ]
        },
        {
          id: "les-u14-tx4",
          title: "The Burden of Shame",
          description: "Why HIV is treated differently than other terminal illnesses.",
          icon: "EyeOff",
          slides: [
            {
              id: "s-u14-tx4-1",
              type: "theory",
              title: "A Different Kind of Illness",
              content: `> "Had it been another terminal illness, things would have been so different.\n> \n> He could have reached out to his family. His mother, his sisters, would consult the best doctors and extend their support. In this, he was alone. This was his shame, and he had to hide it. Battling thoughts of early death, he had to continue living, to earn enough for himself and to send some-thing home."`
            },
            {
              id: "s-u14-tx4-2",
              type: "theory",
              title: "Waiting for the Breakdown",
              content: `> "Ashok looked at the doctor. It seemed he was waiting for him to break down, sob uncontrollably and weep his heart out as he admitted his guilt. At this point the doctor would get up, put an arm around him, to offer him solace. Wearing that look of moral superiority Ashok detested, he’d add that atonement for his sins was possible if he did not commit them any-more."`
            },
            {
              id: "s-u14-tx4-3",
              type: "theory",
              title: "Imploding With Laughter",
              content: `> "Moral superiority? Would he be judged only by his HIV status hence-forth? Looking up at the doctor again, he felt his entire body imploding with laughter. Somehow, he managed to control himself. The doctor was watching him. At least for the sake of form, Ashok scolded himself, he should appear to be composed."`
            }
          ]
        },
        {
          id: "les-u14-tx5",
          title: "The Prescription",
          description: "A ridiculous medical note and a referral.",
          icon: "FileText",
          slides: [
            {
              id: "s-u14-tx5-1",
              type: "theory",
              title: "Persisting the Doom",
              content: `> "The doctor believed the message had not registered. He persisted: ‘You are suffering from AIDS. Do you understand? Your life is short. Your immunity will go down. You will get lots of diseases. Eventually you’ll die.’\n> \n> He looked up, quite confident that Ashok must be terrified by now and would beg for mercy. There were no such signs. As Ashok showed no response the doctor wrote on his discharge slip, ‘Not to have sex.’"`
            },
            {
              id: "s-u14-tx5-2",
              type: "theory",
              title: "The Next Best Thing",
              content: `> "Ashok stared in disbelief at this piece of paper. He wanted to hit this man, trying to be a doctor. Being a doctor was all about healing. And here he was trying to hurt him instead. Perhaps this was his way of expressing satisfaction that he belonged to a part of society that could look away even as the virus chose to attack young people.\n> \n> He looked at the doctor again. Hitting him was out. He did the next best thing; he started laughing."`
            },
            {
              id: "s-u14-tx5-3",
              type: "theory",
              title: "Unhinged",
              content: `> "The doctor was taken aback. What was happening to this man; he had never seen an HIV patient behave in this manner. Usually, they would break down, talk about their fears, their family, and their hopeless future. He was convinced the shock of the news had unhinged Ashok.\n> \n> Ashok was referred to a psychiatrist. Ever since the first test, Ashok had been trying to be his own counsellor."`
            },
            {
              id: "s-u14-tx5-4",
              type: "theory",
              title: "Acceptance",
              content: `> "‘So what if I have HIV? I have to accept it. Do I have an option not to?’ he mused. The first step towards living again is acceptance. Life has to move on."`
            }
          ]
        }
      ]
    },
    {
      id: "u14-part4-text3",
      title: "4. The Discovery & Isolation",
      description: "How Ashok found out, and the agony of waiting.",
      color: "duo-violet",
      lessons: [
        {
          id: "les-u14-tx6",
          title: "The Blisters",
          description: "A routine check uncovers a hidden virus.",
          icon: "Search",
          slides: [
            {
              id: "s-u14-tx6-1",
              type: "theory",
              title: "Herpes Zoster",
              content: `> "As Ashok lay on his hospital bed, every detail of the last few days flashed through his mind. He was admitted to the INHS Ashwini Hospital at Mumbai for treatment of a simple infection, herpes zoster... Now, he knew. The HIV virus must have entered his body sometime before. As a result of it, the viral load was high and the infection developed because of his low immunity."`
            },
            {
              id: "s-u14-tx6-2",
              type: "theory",
              title: "The Radio-Operator",
              content: `> "He thought about the time when he had gone to an officer on board to pass on some signals he had received as the ship’s radio-operator. He was wearing a half-sleeved, white shirt. The medical officer who was passing that way happened to notice some blisters that had appeared on his arm. 'Hey, come here,' he had said. 'Open your shirt and let me see. What have you got here?'"`
            },
            {
              id: "s-u14-tx6-3",
              type: "theory",
              title: "Intimidating Set-up",
              content: `> "Ashok hadn’t really bothered about those blisters... But the medical officer ordered him to immediately go to the Naval hospital and get some tests done.\n> \n> Initially, no one told him what they were suspecting... The male nursing assistant would just come, roll up his sleeve, look for his vein and plunge in the needle. So used to this had he grown that just thinking about it set off a throbbing sensation in his arm... How could Ashok think of asking him anything... The entire set-up was so intimidating."`
            }
          ]
        },
        {
          id: "les-u14-tx7",
          title: "Waiting in the Ward",
          description: "The fear of discrimination.",
          icon: "Clock",
          slides: [
            {
              id: "s-u14-tx7-1",
              type: "theory",
              title: "Elisa for HIV",
              content: `> "He recalled how he had checked with all the sailors when he saw the name of a blood test written on the slip attached to his bed: Elisa for HIV... one of the sailors remarked, 'This is the AIDS test,' and his comment had drawn a puzzled look from the rest. 'AIDS, why AIDS?' he sat there, feeling a little stunned. 'What has that got to do with me? I don’t have any STDs.'"`
            },
            {
              id: "s-u14-tx7-2",
              type: "theory",
              title: "Preparing for the Worst",
              content: `> "He was then told there was some problem with his blood; therefore, he had to be sent to the Command Hospital, Pune, to get a Western Blot test done... We had to wait four to five days for the final results.\n> \n> In those five days, Ashok started preparing himself for the worst... Still, he was so confused... He had believed it happened to only those women the prostitutes and men who visit them. May be, he thought, maybe he did not have HIV. After all, he had healthy girl friends. How could he have contracted the virus?"`
            },
            {
              id: "s-u14-tx7-3",
              type: "theory",
              title: "The Isolation Ward",
              content: `> "Those five days were also a preparation for the discrimination that lay ahead. He was kept in an isolation ward, meant just for AIDS patients. There were five others with him. No one would come and visit them. All that they did was play cards to amuse themselves and pass time. The television was kept in a common lounge... But all those in the isolation ward preferred to keep a distance."`
            },
            {
              id: "s-u14-tx7-4",
              type: "quiz",
              title: "Self-Exclusion",
              content: "Why did the patients in the isolation ward choose not to go to the common lounge to watch television?",
              options: [
                { id: "A", text: "Because the hospital rules strictly forbade them from leaving their room.", isCorrect: false, explanation: "While there were boundaries, their primary reason was internal fear." },
                { id: "B", text: "Out of intense fear of being judged, rudely treated, or questioned by other patients.", isCorrect: true, explanation: "They 'preferred to keep a distance' worrying 'What if someone checked them? What if someone was rude to them?'" }
              ]
            }
          ]
        },
        {
          id: "les-u14-tx8",
          title: "Welcome Aboard",
          description: "The inevitable betrayal.",
          icon: "AlertCircle",
          slides: [
            {
              id: "s-u14-tx8-1",
              type: "theory",
              title: "Opening the Umbrella",
              content: `> "Most of those in the isolation ward were suffering from depression. They were worried about their families. Ashok too had similar worries.\n> \n> But he would always tell them, 'There is no point in opening the umbrella before it starts raining.'"`
            },
            {
              id: "s-u14-tx8-2",
              type: "theory",
              title: "Foolish Advice",
              content: `> "Ashok’s mind went back to the doctor’s advice, 'Don’t get married. And never have sex again.' 'How could the doctor think such advice would work?' he wondered. People living with HIV needed to be educated on how to have safe sex. They had to be informed about the need to protect others. People don’t stop having sex after they have tested HIV positive, he thought..."`
            },
            {
              id: "s-u14-tx8-3",
              type: "theory",
              title: "The Betrayal",
              content: `> "Ashok was given a ‘No Abnormalities Detected’ (NAD) certificate by the psychiatrist and discharged.\n> \n> On the way back, he was rehearsing how he would tell his friends about it. Little did he know that the hospital had already sent a letter to his commanding officer, who had then summoned a meeting of the division and announced. 'One sailor tested positive' No guesses were required. Everyone knew.\n> \n> Welcome aboard: to a new world of stigma and shame."`
            }
          ]
        }
      ]
    },
    {
      id: "u14-part5-mastery",
      title: "5. Vocabulary & Exam Prep",
      description: "Master key terms and tackle exam questions.",
      color: "duo-orange",
      lessons: [
        {
          id: "les-u14-vocab",
          title: "Glossary",
          description: "Key words from the text.",
          icon: "Type",
          slides: [
            {
              id: "v-u14-1",
              type: "word_card",
              content: "Vocabulary",
              wordCard: {
                word: "Oblivion",
                translation: "The state of being completely forgotten or destroyed.",
                context: "> \"...he wondered whether like those paper boats his life too would flow away into oblivion.\"",
                example: "The ancient city slowly faded into oblivion beneath the desert sands."
              }
            },
            {
              id: "v-u14-2",
              type: "word_card",
              content: "Vocabulary",
              wordCard: {
                word: "Desolate",
                translation: "Feeling or showing great unhappiness or loneliness; bleak.",
                context: "> \"The thought left him desolate and helpless, as never before.\"",
                example: "After his friends abandoned him, he felt utterly desolate."
              }
            },
            {
              id: "v-u14-3",
              type: "word_card",
              content: "Vocabulary",
              wordCard: {
                word: "Fritter",
                translation: "To waste time, money, or energy on trifling matters.",
                context: "> \"They should certainly not be frittered away in anger, he decided.\"",
                example: "Do not fritter away your potential on useless arguments."
              }
            },
            {
              id: "v-u14-4",
              type: "word_card",
              content: "Vocabulary",
              wordCard: {
                word: "Contemptuous",
                translation: "Showing deep hatred, disapproval, or scorn.",
                context: "> \"...try not to notice people’s contemptuous attitude towards him.\"",
                example: "The doctor gave him a contemptuous glare, judging him instantly."
              }
            },
            {
              id: "v-u14-5",
              type: "word_card",
              content: "Vocabulary",
              wordCard: {
                word: "Mince words",
                translation: "To soften the effect of one's words; to speak indirectly or vaguely.",
                context: "> \"No mincing of words. No trappings of hope.\"",
                example: "She didn't mince words when she told him exactly why he was fired."
              }
            }
          ]
        },
        {
          id: "les-u14-exam",
          title: "Model Questions",
          description: "Practice answering in the format of the exam.",
          icon: "Edit3",
          slides: [
            {
              id: "s-u14-qa1",
              type: "theory",
              title: "Section A (2 Marks) - Model Question",
              content: `**Q: Why did Ashok feel that the doctor's diagnosis was "worse than a death sentence"?**\n\n**Model Answer:**\nAshok felt it was worse than a death sentence because it came accompanied by a profound moral judgment. Unlike other terminal illnesses where a patient receives family support and sympathy, the doctor delivered the news with "surgical precision" and mocking eyes, treating Ashok like a condemned criminal who deserved his fate, thus forcing him to carry the burden of his illness in utter shame and isolation.`
            },
            {
              id: "s-u14-qb1",
              type: "theory",
              title: "Section B (6 Marks) - Model Question",
              content: `**Q: Describe Ashok’s experience in the isolation ward and its psychological impact on the patients.**\n\n**Model Answer:**\nIn the isolation ward at the Command Hospital in Pune, Ashok and five other HIV patients experienced profound social exclusion even before receiving their final test results. They were physically segregated and received no visitors. Psychologically, the stigma was so paralyzing that they imposed self-exclusion upon themselves; out of intense fear of facing rude remarks or contemptuous attitudes from others, they avoided the hospital's general passages and the common television lounge. Instead, they stayed within their boundaries, playing cards to pass the time while battling severe depression and worrying about their families.`
            },
            {
              id: "s-u14-qc1",
              type: "theory",
              title: "Section C (10 Marks) - Essay Plan",
              content: `**Q: "Welcome aboard: to a new world of stigma and shame." Discuss how Kalpana Jain explores the theme of social ostracization of HIV patients in her narrative.**\n\n**Essay Plan:**\n1. **Introduction:** Introduce Kalpana Jain's purpose: sensitising readers to the real horror of the AIDS epidemic—the social stigma. Introduce Ashok's predicament.\n2. **The Medical Establishment's Betrayal:** Discuss the doctor at Pune. Instead of healing, he judges. He delivers the news without empathy, demanding Ashok's psychological breakdown to satisfy his own "moral superiority."\n3. **Self-Exclusion and Fear:** Describe the isolation ward. The patients avoid the common lounge not just because of hospital rules, but because society has taught them to fear "contemptuous attitudes" and public humiliation.\n4. **The Shipmates' Cruelty:** Detail the irony of the ending. Before Ashok can even rehearse his disclosure, the commanding officer announces his status. Ashok's 'friends' use his vulnerability to feel a sense of "unreasonable superiority," roughing up his emotions.\n5. **Conclusion:** Ashok's resilience (deciding not to "fritter" his energy on anger) highlights the tragic reality that for an HIV patient, surviving society's judgment requires more strength than surviving the virus itself.`
            }
          ]
        }
      ]
    }
  ]
};
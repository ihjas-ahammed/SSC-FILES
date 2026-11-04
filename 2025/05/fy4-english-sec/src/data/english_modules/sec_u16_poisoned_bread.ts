import { Section } from '../../types';

export const SEC_U16_POISONED_BREAD: Section = {
  id: "sec-u16-poisoned-bread",
  title: "Unit 16: The Poisoned Bread",
  description: "Bandhu Madhav's powerful Dalit narrative on casteism, dignity, and education.",
  color: "duo-indigo",
  units: [
    {
      id: "u16-part1-intro",
      title: "1. Introduction & Context",
      description: "Meet the author, Bandhu Madhav, and the context of Dalit literature.",
      color: "duo-indigo",
      lessons: [
        {
          id: "les-u16-intro",
          title: "Author & Theme",
          description: "Understanding the pioneers of Dalit literature.",
          icon: "User",
          slides: [
            {
              id: "s-u16-hook",
              type: "interactive_canvas",
              title: "The Price of Submission",
              content: "If a system feeds you, but demands your humanity and dignity in return, is it charity or is it poison?\n\nThis story explores the devastating reality of the caste system and the generational awakening needed to break free from it.",
              interactiveCanvasId: "human_rights_scale"
            },
            {
              id: "s-u16-author",
              type: "theory",
              title: "The Author: Bandhu Madhav",
              content: `**Bandhu Madhav** (1927-1997), also known as Madhay Dadaji Modak, was a renowned Marathi writer and pioneer of Dalit literature. \n\nHis writings focused on raising awareness about the rights and struggles of the Scheduled Castes in India, drawing heavily from his own experiences and the impact of Dr. B.R. Ambedkar’s movement.`
            },
            {
              id: "s-u16-context",
              type: "theory",
              title: "The Translator & Anthology",
              content: `This short story is taken from *Poisoned Bread*, an anthology of Dalit literature translated into English, edited by **Arjun Dangle**.\n\nDangle is an influential Marathi poet, social theorist, and a founding member of the Dalit Panthers—a militant youth organization inspired by the Black Panthers, aimed at asserting Dalit identity and rights.`
            },
            {
              id: "s-u16-genre",
              type: "theory",
              title: "What are we reading?",
              content: `**Genre:** Short Story / Dalit Literature\n\n**The Core Themes:**\n* **Caste Discrimination:** The deep-rooted, humiliating oppression faced by the Mahars.\n* **Generational Divide:** Yetalya's submissive acceptance vs. Mahadeva's educated rebellion.\n* **The Power of Education:** The only tool to reclaim Dalit identity and dismantle systemic "poison."`
            },
            {
              id: "s-u16-pre-mcq",
              type: "quiz",
              title: "Pre-reading Check",
              content: "What does the term 'Dalit literature' primarily focus on?",
              options: [
                { id: "A", text: "Romanticized tales of ancient Indian mythology and kings.", isCorrect: false, explanation: "It is the opposite of romanticized mythology." },
                { id: "B", text: "Narratives showcasing the struggles, oppression, and resistance of the marginalized lower castes.", isCorrect: true, explanation: "It gives voice to the lived experiences and social alienation of the oppressed." }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "u16-part2-text1",
      title: "2. The Confrontation",
      description: "Reading the text: Mahadeva and Yetalya at Bapu Patil's farm.",
      color: "duo-blue",
      lessons: [
        {
          id: "les-u16-tx1",
          title: "The Threshing Floor",
          description: "A humiliating morning encounter.",
          icon: "FileText",
          slides: [
            {
              id: "s-u16-tx1-1",
              type: "theory",
              title: "The Bygone Harvest",
              content: `> "Come harvest time with everyone busy winnowing and sifting, when the birds whirl in the sky, my heart bleeds like a wounded bird as I recall the bygone harvest of twelve years ago, when I had gone to meet my grandfather - Yetalya Aja to us at Kupad.\n>\n> As usual, Grandpa Yetalya took me with him as he went out looking for a job of winnowing and treading out the corn at the threshing floor. As a matter of fact, he intended to beg a cucumber or a marrow or a few peanuts... And by taking me along to assist him he hoped to get a slightly larger share of corn and a few ears of jowar for us."`
            },
            {
              id: "s-u16-tx1-2",
              type: "theory",
              title: "The Landlord's Greeting",
              content: `> "We stopped at a threshing floor. There, tidying a pile of dishevelled ears of corn, was Bapu Patil. Grandpa approached Patil and saluted him with a johar. Acknowledging Grandpa’s salute like a swaggering maharaja, Bapu Patil said coolly,\n>\n> 'What brings you here at such an early hour? Hope you haven’t come here with your mind set on evil. For don’t they say, an encounter with a Mahar in the morning, and you’re doomed for good.'" `
            },
            {
              id: "s-u16-tx1-3",
              type: "theory",
              title: "Grandpa's Submission",
              content: `> "Grandpa displayed no reaction to Bapu Patil’s insolence. On the contrary, he meekly, and with utmost respect said to Patil,\n>\n> 'Why do you say that, Anna? I am your slave. I have come to you on purpose on hearing of the operations at your threshing floor. My lord is our bread-giver and we find it a privilege to beg for our share of corn, master. I am your begging Mahar and feel proud to be so.'" `
            },
            {
              id: "s-u16-tx1-4",
              type: "quiz",
              title: "Comprehension Check",
              content: "How does Grandpa Yetalya react to Bapu Patil's insulting greeting?",
              options: [
                { id: "A", text: "He becomes violently angry and leaves the farm.", isCorrect: false, explanation: "He does the exact opposite." },
                { id: "B", text: "He reacts with extreme meekness, calling himself a slave and expressing pride in being a 'begging Mahar'.", isCorrect: true, explanation: "He has internalized the oppression and believes submissiveness is his duty." }
              ]
            }
          ]
        },
        {
          id: "les-u16-tx2",
          title: "The Sarcasm and the Retort",
          description: "Mahadeva speaks up against injustice.",
          icon: "ShieldAlert",
          slides: [
            {
              id: "s-u16-tx2-1",
              type: "theory",
              title: "Bapu Patil's Taunt",
              content: `> "But Grandpa’s humility had the reverse effect on Bapu Patil, who turned more sarcastic: 'Don’t give me that line, you’re no longer the Mahar-Mangs of the good old days, to beg for your share of the corn. You are now Harijans! You’ve even started claiming equality, so I was told, eating and drinking with us at the city hotels... Now that you’re our peers, tell me, why do you still beg for a share of the corn?'"`
            },
            {
              id: "s-u16-tx2-2",
              type: "theory",
              title: "Blaming the Rain-God",
              content: `> "And yet I could see no adverse effect of Bapu’s taunt on Grandpa... Grandpa said, 'How could you say that, Anna? This Yetalya is certainly not one of those claiming equality. How can one, in that case, account for God’s creating religion and the castes?'\n>\n> 'Come on, don’t you know that the rain-god got enraged because you! the Mahars and Mangs! have profaned religion, and abandoning caste, have defiled Lord Vithoba of Pandharpur. How else can you account for the drying up of the Chandrabhaga river?' Bapu Patil reasoned, to justify his insults."`
            },
            {
              id: "s-u16-tx2-3",
              type: "theory",
              title: "Mahadeva's Outburst",
              content: `> "I could take it no more. I felt my cheeks burning. But I quelled my temper and, cutting Bapu Patil short in the middle of his fiery tirade, burst out, 'Patil, will you kindly tell me what you mean when you accuse us of forgetting religion, abandoning our caste and of polluting god? If a religion can’t tolerate one human being, treating another simply as a human being, what’s the use of such an inhumane religion?'"`
            },
            {
              id: "s-u16-tx2-4",
              type: "theory",
              title: "Questioning the Divine",
              content: `> "'And if our mere touch pollutes the gods, why were the Mahars and Mangs created at all? And who, may I know, who indeed, created them? And would you please tell me the name of the god whom the Mahars and Mangs can claim as their own?'"`
            },
            {
              id: "s-u16-tx2-5",
              type: "quiz",
              title: "Analyze the Retort",
              content: "What is the core logic behind Mahadeva's angry outburst?",
              options: [
                { id: "A", text: "He demands that Bapu Patil pay them money instead of corn.", isCorrect: false, explanation: "He is arguing about theology and human dignity, not payment." },
                { id: "B", text: "He exposes the hypocrisy of a religion that creates human beings only to label their very existence as pollution.", isCorrect: true, explanation: "He points out that an 'inhumane religion' that cannot tolerate basic human equality is useless." }
              ]
            }
          ]
        },
        {
          id: "les-u16-tx3",
          title: "The Hierarchy",
          description: "Bapu Patil's worldview and the threat of violence.",
          icon: "Search",
          slides: [
            {
              id: "s-u16-tx3-1",
              type: "theory",
              title: "The Snot Nosed Brat",
              content: `> "My retort made Bapu Patil wild. I had addressed him simply as 'Patil' whereas the rest of our clan called him 'Anna' or 'elder brother'. And to top it all a Mahar was answering him back. Violent anger shook him and he screamed at me: 'Look at that snot nosed brat! He can’t even keep his nose clean and yet has the audacity to talk back to me! Yetalya, whose good for nothing whelp have you brought with you?'"`
            },
            {
              id: "s-u16-tx3-2",
              type: "theory",
              title: "Grandpa's Panic",
              content: `> "The violent rage of Bapu Patil send grandpa into a panic. Knowing too well that in a fit of temper Bapu Patil was capable even of committing murder, he started shaking violently. In a voice stricken with fear... Grandpa replied, 'He is my eldest daughter’s son, from Sangalwadi. He is too young to know how to speak to his elders. He is city bred and has learnt to read and write.'" `
            },
            {
              id: "s-u16-tx3-3",
              type: "theory",
              title: "A Mahar is a Mahar",
              content: `> "'Need he be so impudent just because he knows how to read and write? And mind you, even if a Mahar or Mang get educated, no one will ever call him a Brahmin. A Mahar is a Mahar even if he passes LLB and becomes a barrister. You should know the story of Chokhamela. Was he let into the temple by Vithoba of Pandharpur? Why, I ask you, has Chokhamela been kept at the foot of the temple? One should always keep to one’s own position.'" `
            },
            {
              id: "s-u16-tx3-4",
              type: "theory",
              title: "Flesh and Blood",
              content: `> "Having been brought up in the city of Sangli, I was a little bolder... I said to Patil: 'What’s this ‘position’ you’re talking about, Patil? And whose position?'\n>\n> At my retort, Patil exploded: '...God intended to have a definite hierarchy when he created the Brahmin, Maratha, the fisherman, the weaver, the Mahar-Mang, the Dhor and the Cobbler in that order... Put everyman in his proper place, as they wisely say. A chappal is never worshipped in place of God, is it?'"`
            },
            {
              id: "s-u16-tx3-5",
              type: "theory",
              title: "Tit-for-Tat",
              content: `> "I was determined to give tit-for-tat.\n>\n> 'So, you think you can treat us like your footwear! but are we really like that? Aren’t we also made of the same flesh and blood as the rest of you? We too are born after nine months in our mother’s womb. Isn’t it logical then,' I ended rhetorically, 'that basically there’s hardly any difference between us?'"`
            }
          ]
        }
      ]
    },
    {
      id: "u16-part3-text2",
      title: "3. The Toil and The Crumbs",
      description: "Hard labor and the ultimate degradation.",
      color: "duo-orange",
      lessons: [
        {
          id: "les-u16-tx4",
          title: "Silenced and Toiling",
          description: "Grandpa begs for peace.",
          icon: "Activity",
          slides: [
            {
              id: "s-u16-tx4-1",
              type: "theory",
              title: "Begging for Bread",
              content: `> "'Yetalya, have you come here to work or to quarrel with me? If you and your grandson are so well-off, why did you come to me to beg? Get lost! A little learning doesn’t entitle that boy to teach me, understand?'\n>\n> At this Grandpa Yetalya literally fell at the feet of Bapu Patil and appealed to him with tears in his eyes: 'Don’t, don’t say that, please. He’s a child. Just a boy...'" `
            },
            {
              id: "s-u16-tx4-2",
              type: "theory",
              title: "The Grubbing-Hoe",
              content: `> "And then turning to me he chided: 'Mahadeva, don’t just stand there gaping at Anna. Pick up that grubbing-hoe and get to work.'\n>\n> I felt helpless and dumbfounded as he handed me the hoe. The next moment I set to work with my head bent low, moving the grubbing-hoe in the heap of corn. Somehow I managed to suppress my anger."`
            },
            {
              id: "s-u16-tx4-3",
              type: "theory",
              title: "Scorching Heat",
              content: `> "Grandpa and me yoked ourselves together and set upon the work at hand. Half-way through, Grandpa said that he would go to Gyanba Patil’s threshing floor to fetch a tripod... and I was left alone to clean up.\n>\n> I was working hard at the threshing floor. The red, hot sun was scorching; Exhaustion and the unbearable heat of the sun made me sweat profusely all over. I was famished but Grandpa had still not returned..."`
            }
          ]
        },
        {
          id: "les-u16-tx5",
          title: "More Humiliation",
          description: "Tuka Magdoom adds fuel to the fire.",
          icon: "Search",
          slides: [
            {
              id: "s-u16-tx5-1",
              type: "theory",
              title: "The Tormentor Returns",
              content: `> "Before the thought had faded, Bapu Patil, now accompanied by Tuka Magdoom, arrived. I was scared stiff. I was lagging behind; there was no trace of Grandpa yet; and here stood my tormentor! 'You, grandson of Yetalya, has your grandfather dropped dead?' shouted Bapu Patil."`
            },
            {
              id: "s-u16-tx5-2",
              type: "theory",
              title: "Adding Fuel to the Fire",
              content: `> "At that, Bapu Patil was extremely furious and started abusing Grandpa in the most humiliating terms... Tuka Magdoom did his faithful bit by aggravating the matter. 'Oh these Mahars are a lousy lot. You will never find them at their work. These good for nothing fellows only know to while away their time.'\n>\n> I could control myself no more. And yet I found myself pleading before Bapu Patil: 'why do you abuse him? Grandpa will be here soon...'" `
            },
            {
              id: "s-u16-tx5-3",
              type: "theory",
              title: "A Threat of Violence",
              content: `> "Unknowingly I had added fuel to the fire... 'This boy is not a boy, he is a devil. I shall give him a hard kick to set him straight.' Tuka Magdoom started laughing like mad. His laughter emboldened Bapu Patil to let loose: '...I’ll give you nothing, ... Get up!'\n>\n> 'Don’t do a harsh thing like that, Anna, you can kick us if you like but please don’t starve us.' Grandpa pleaded with tears in his eyes."`
            }
          ]
        },
        {
          id: "les-u16-tx6",
          title: "The Poisoned Crumbs",
          description: "Collecting the dung-smeared bread.",
          icon: "AlertCircle",
          slides: [
            {
              id: "s-u16-tx6-1",
              type: "theory",
              title: "Empty Handed",
              content: `> "But after we had toiled throughout the day Bapu Patil did not give Grandpa even a few measures of jowar. Grandpa was crestfallen.\n>\n> Dejected, as we left the threshing floor, however, Grandpa could not fail to notice the pen where stale, rancid pieces of bread lay scattered on the ground in front of the oxen. It’s rightly said that as the Chamar has his eye on the chappal, so does the Mahar on stale bread."`
            },
            {
              id: "s-u16-tx6-2",
              type: "theory",
              title: "Foul and Green",
              content: `> "Flies were swarming over the moldering crumbs, which had turned green and foul. Grandpa begged Bapu Patil for those crumbs. The oxen seemed to have refused to eat them. They were smeared with dung and urine.\n>\n> Grandpa collected them all happily and put them neatly into his sackcloth. And he left the place but not before blessing Patil. I followed him with my head hung low. There was a heavy silence between us."`
            },
            {
              id: "s-u16-tx6-3",
              type: "quiz",
              title: "Symbolic Degradation",
              content: "What makes the bread crumbs Grandpa collects particularly degrading?",
              options: [
                { id: "A", text: "They were stale and hard to chew.", isCorrect: false, explanation: "It's worse than just being stale." },
                { id: "B", text: "They were moldy, rejected by animals, and covered in dung and urine.", isCorrect: true, explanation: "Patil starves them of fresh corn, forcing Yetalya to happily accept toxic animal waste, showing the horrific depth of caste degradation." }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "u16-part4-text3",
      title: "4. The Awakening and The End",
      description: "The consequences of the poisoned bread.",
      color: "duo-red",
      lessons: [
        {
          id: "les-u16-tx7",
          title: "The Lion in the Cage",
          description: "Mahadeva argues against the hereditary holding.",
          icon: "Search",
          slides: [
            {
              id: "s-u16-tx7-1",
              type: "theory",
              title: "Mocking the Reward",
              content: `> "'We’ll gulp down the crumbs you collected. Haven’t we got these rotten pieces as a reward for labouring whole day long? A good exchange indeed! Are we any better than cats or dogs? Throw a few crumbs at us and we are happy,' I mocked."`
            },
            {
              id: "s-u16-tx7-2",
              type: "theory",
              title: "Grandpa's Helplessness",
              content: `> "'You said it!' Grandpa exclaimed. 'Mahadeva, will the Mahars and Mangs ever be happy? What a humiliating life we live! Do you think I feel happy about being oppressed by the landlords and the rest of the villagers? I too want to retaliate and have a good fight for the humiliation and injustice they have been piling upon us. But, my boy; I am helpless! I see no end to this suffering,' lamented Grandpa."`
            },
            {
              id: "s-u16-tx7-3",
              type: "theory",
              title: "The Hereditary Land-Right",
              content: `> "'But why should it go on? Even a lion locked in a cage all his life forgets how to hunt. This hereditary land-right has trapped us Mahars for good. How can we dream of doing business independently since we’ve been fed all our lives on the charity of others? what achievement can we ever boast of? All that comes from begging is more begging.'" `
            },
            {
              id: "s-u16-tx7-4",
              type: "fill_in_blank",
              title: "The False Notion",
              content: "Mahadeva says that the crumbs they are given don't sustain them, but rather make them ___.",
              blankAnswer: "slaves"
            },
            {
              id: "s-u16-tx7-5",
              type: "theory",
              title: "A Shift in Perspective",
              content: `> "'When I said we should abandon the land-right, I didn’t mean we should give it up literally. But we must stop begging under the pretext that we are getting our rightful share of corn. And instead of enslaving ourselves to life-long labour in exchange for that right, we must free ourselves from the land bondage and learn to live independently, with a sense of pride... We forget all the while that the crumbs they give us make us slaves'"\n>\n> "'...you are right my boy. I am convinced, you have touched my heart,' said grandpa and threw a few crumbs from his sack to the dogs..."`
            }
          ]
        },
        {
          id: "les-u16-tx8",
          title: "The Illness",
          description: "The physical toll of the caste system.",
          icon: "Activity",
          slides: [
            {
              id: "s-u16-tx8-1",
              type: "theory",
              title: "The Supper",
              content: `> "Grandma came rushing out of the house and shouted at grandpa; 'Have you gone mad? If you give all the food to the dogs what shall we eat?' She collected all the pieces thrown before the dogs and cleaned the mud off them. She then mixed them with dulli and cooked them for supper. At night everyone at home greedily hogged the stuff. With that heavy meal we fell asleep."`
            },
            {
              id: "s-u16-tx8-2",
              type: "theory",
              title: "Agony",
              content: `> "The next morning we woke up to the sound of Grandpa writhing in agony like a poisoned dog. He was vomiting and purging too.\n>\n> ...I could visualise the entire predicament of the Mahar caste. In those frenzied moments, I thought I saw the crumbling, mildewed pieces of bread smeared with dung and urine taken from Bapu Patil’s cow pen floating before my eyes! The share of corn which Grandpa always took as his rightful dole... had caused the vomiting and dysentery."`
            },
            {
              id: "s-u16-tx8-3",
              type: "theory",
              title: "The Doctor's Diagnosis",
              content: `> "The doctor looked surprised as he said, 'That’s it! The mould in the stuff created a toxin. That toxin must have caused this dysentery. It’s a serious case...'\n>\n> Grandpa showed great amazement as he lay in bed: 'What? You say the crumbs had turned to poison? It was in fact poison? Poisoned bread...? Really poison?' Grandpa lost hope... the doctor’s diagnosis was the last straw."`
            }
          ]
        },
        {
          id: "les-u16-tx9",
          title: "Final Words",
          description: "Grandpa's dying realization.",
          icon: "AlertCircle",
          slides: [
            {
              id: "s-u16-tx9-1",
              type: "theory",
              title: "The Ultimate Realization",
              content: `> "Mustering all his strength and with tremendous will power Grandpa uttered a few words: 'Mahadeva, don’t weep, my boy I’m an old thing now. And being so old, I may stop breathing any moment. What can I say to you now? I can only say: never depend on the age-old bread associated with our caste. Get as much education as you can. Take away this accursed bread from the mouths of the Mahars. This poisonous bread will finally kill the very humanness of man...'" `
            },
            {
              id: "s-u16-tx9-2",
              type: "theory",
              title: "The Bleeding Heart",
              content: `> "Amidst the commotion I could still hear Grandpa’s last words: 'This poisonous bread will finally kill the very humanness of man...' The recollection of these words put out my sorrow at the loss of my beloved Aja. Instead I was inflamed by overwhelming fury and disgust that made me want to retaliate.\n>\n> And therefore, when it is harvest time with everyone busy winnowing and sifting... my heart bleeds like a wounded bird as I recall that bygone harvest twelve years old now..."`
            },
            {
              id: "s-u16-tx9-3",
              type: "quiz",
              title: "Theme Connection",
              content: "What does Grandpa's death represent in the narrative?",
              options: [
                { id: "A", text: "A tragic accident with no deeper meaning.", isCorrect: false, explanation: "In Dalit literature, such deaths are profoundly symbolic of systemic murder." },
                { id: "B", text: "The physical and spiritual destruction caused by the caste system, serving as the catalyst for Mahadeva's rebellion.", isCorrect: true, explanation: "His death proves that the 'charity' of the upper castes is literally and metaphorically poison." }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "u16-part5-mastery",
      title: "5. Vocabulary & Exam Prep",
      description: "Master key terms and tackle model questions.",
      color: "duo-violet",
      lessons: [
        {
          id: "les-u16-vocab",
          title: "Glossary",
          description: "Key words from the text.",
          icon: "Type",
          slides: [
            {
              id: "v-u16-1",
              type: "word_card",
              content: "Vocabulary",
              wordCard: {
                word: "Winnowing",
                translation: "Blowing a current of air through grain in order to remove the chaff.",
                context: "> \"...busy winnowing and sifting, when the birds whirl in the sky...\"",
                example: "The farmers were winnowing the harvested wheat."
              }
            },
            {
              id: "v-u16-2",
              type: "word_card",
              content: "Vocabulary",
              wordCard: {
                word: "Johar",
                translation: "A traditional, submissive greeting used by lower castes to address upper castes.",
                context: "> \"Grandpa approached Patil and saluted him with a johar.\"",
                example: "He offered a humble johar to the village landlord."
              }
            },
            {
              id: "v-u16-3",
              type: "word_card",
              content: "Vocabulary",
              wordCard: {
                word: "Impudent",
                translation: "Not showing due respect for another person; impertinent.",
                context: "> \"Need he be so impudent just because he knows how to read and write?\"",
                example: "The landlord punished the impudent boy for speaking back."
              }
            },
            {
              id: "v-u16-4",
              type: "word_card",
              content: "Vocabulary",
              wordCard: {
                word: "Rancid",
                translation: "Smelling or tasting unpleasant as a result of being old and stale.",
                context: "> \"...stale, rancid pieces of bread lay scattered on the ground...\"",
                example: "The butter had been left out for weeks and turned completely rancid."
              }
            },
            {
              id: "v-u16-5",
              type: "word_card",
              content: "Vocabulary",
              wordCard: {
                word: "Mildewed",
                translation: "Coated or tainted with a fungal growth.",
                context: "> \"...the crumbling, mildewed pieces of bread smeared with dung and urine...\"",
                example: "Eating the mildewed food caused severe food poisoning."
              }
            }
          ]
        },
        {
          id: "les-u16-exam",
          title: "Model Questions",
          description: "Practice answering in the format of the exam.",
          icon: "Edit3",
          slides: [
            {
              id: "s-u16-qa1",
              type: "theory",
              title: "Section A (2 Marks) - Model Question",
              content: `**Q: What is the significance of the grandfather's death in the "Poisoned Bread"?**\n\n**Model Answer:**\nGrandpa Yetalya's death is highly significant as it brutally illustrates the toxic reality of the caste system, where the "charity" of the upper castes literally poisons the marginalized. His death acts as a powerful catalyst for his grandson Mahadeva, shifting Yetalya's final worldview from submissive acceptance to a defiant realization that education is the only way to destroy this systemic oppression.`
            },
            {
              id: "s-u16-qb1",
              type: "theory",
              title: "Section B (6 Marks) - Model Question",
              content: `**Q: What does the "poisoned bread" symbolize in the story?**\n\n**Model Answer:**\nIn Bandhu Madhav's story, the "poisoned bread" operates both literally and metaphorically. Literally, it is the moldy, dung-smeared crumbs thrown to the oxen that the landlord forces Yetalya to accept as his wages, the mold of which creates a fatal toxin. Metaphorically, it symbolizes the systemic oppression, humiliation, and deep-rooted injustice of the caste system disguised as "hereditary right" or charity. Mahadeva argues that by accepting these scraps, the Mahars remain enslaved ("like a lion locked in a cage"). Ultimately, the poisoned bread represents the toxic social structure that, as Yetalya realizes on his deathbed, "kills the very humanness of man."`
            }
          ]
        }
      ]
    }
  ]
};
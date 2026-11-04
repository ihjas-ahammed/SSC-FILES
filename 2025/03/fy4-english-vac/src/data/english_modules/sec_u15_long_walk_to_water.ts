import { Section } from '../../types';

export const SEC_U15_LONG_WALK_TO_WATER: Section = {
  id: "sec-u15-long-walk",
  title: "Unit 15: A Long Walk to Water",
  description: "Linda Sue Park's dual narrative of survival, war, and water in South Sudan.",
  color: "duo-blue",
  units: [
    {
      id: "u15-part1-intro",
      title: "1. Introduction & Context",
      description: "Meet the author, the historical context, and the dual narrative structure.",
      color: "duo-blue",
      lessons: [
        {
          id: "les-u15-intro",
          title: "Author & Context",
          description: "Understanding Linda Sue Park and the Sudanese Civil War.",
          icon: "User",
          slides: [
            {
              id: "s-u15-hook",
              type: "interactive_canvas",
              title: "Two Paths, One Crisis",
              content: "Imagine your day being defined by two things: walking half a day just to find water, or running for your life from your classroom because a war just arrived at your doorstep.\n\nIn this chapter, we meet two 11-year-olds separated by time but united by the harsh reality of South Sudan.",
              interactiveCanvasId: "human_rights_scale"
            },
            {
              id: "s-u15-author",
              type: "theory",
              title: "The Author: Linda Sue Park",
              content: `**Linda Sue Park** is a Korean-American author of children's fiction, best known for her Newbery Medal-winning novel *A Single Shard*.\n\nIn 2010, she published *A Long Walk to Water*, a short novel based on the true story of Salva Dut, one of the "Lost Boys of Sudan," seamlessly woven with the fictionalized but highly realistic story of Nya, a young girl struggling with the region's water crisis.`
            },
            {
              id: "s-u15-context",
              type: "theory",
              title: "The Dual Narrative",
              content: `The novel uses a unique **dual narrative** structure:\n\n1. **Nya's Story (2008):** Told in short, present-tense fragments at the beginning of each chapter. It focuses on the grueling daily task of fetching water.\n2. **Salva's Story (1985):** The primary narrative. It follows his life from the day his village is attacked during the Second Sudanese Civil War.`
            },
            {
              id: "s-u15-pre-mcq",
              type: "quiz",
              title: "Pre-reading Check",
              content: "What is a 'dual narrative'?",
              options: [
                { id: "A", text: "A story that has two different endings the reader can choose from.", isCorrect: false, explanation: "That would be a choose-your-own-adventure story." },
                { id: "B", text: "A story told from two different perspectives or timelines.", isCorrect: true, explanation: "Correct! We see the world through Nya in 2008 and Salva in 1985." }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "u15-part2-nya",
      title: "2. Nya's Journey (2008)",
      description: "The reality of fetching water.",
      color: "duo-orange",
      lessons: [
        {
          id: "les-u15-tx1",
          title: "Going Was Easy",
          description: "Nya begins her walk.",
          icon: "Sun",
          slides: [
            {
              id: "s-u15-tx1-1",
              type: "theory",
              title: "Southern Sudan, 2008",
              content: `> "Going was easy.\n> \n> Going, the big plastic container held only air. Tall for her eleven years, Nya could switch the handle from one hand to the other, swing the container by her side, or cradle it in both arms. She could even drag it behind her, bumping it against the ground and raising a tiny cloud of dust with each step."`
            },
            {
              id: "s-u15-tx1-2",
              type: "theory",
              title: "Heat, Time, and Thorns",
              content: `> "There was little weight, going. There was only heat, the sun already baking the air, even though it was long before noon. It would take her half the morning if she didn't stop on the way.\n> \n> Heat. Time. And thorns."`
            },
            {
              id: "s-u15-tx1-3",
              type: "quiz",
              title: "Analyze the Text",
              content: "Why does the narrator say 'Going was easy' for Nya?",
              options: [
                { id: "A", text: "Because the path is paved and shaded from the sun.", isCorrect: false, explanation: "The text mentions 'heat, time, and thorns', meaning the path is difficult." },
                { id: "B", text: "Because the plastic container she is carrying is currently empty (holding only air).", isCorrect: true, explanation: "The implication is that the *return* trip, with a container full of heavy water, will be incredibly difficult." }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "u15-part3-salva-life",
      title: "3. Salva's Life Before the War",
      description: "School, family, and herding cattle.",
      color: "duo-green",
      lessons: [
        {
          id: "les-u15-tx2",
          title: "The School Boy",
          description: "Salva's distraction in class.",
          icon: "BookOpen",
          slides: [
            {
              id: "s-u15-tx2-1",
              type: "theory",
              title: "Southern Sudan, 1985",
              content: `> "Salva sat cross-legged on the bench. He kept his head turned toward the front, hands folded, back perfectly straight. Everything about him was paying attention to the teacher—everything except his eyes and his mind.\n> \n> His eyes kept flicking toward the window, through which he could see the road. The road home. Just a little while longer—a few minutes more— and he would be walking on that road."`
            },
            {
              id: "s-u15-tx2-2",
              type: "theory",
              title: "The Arabic Lesson",
              content: `> "The teacher droned on with the lesson, about the Arabic language. Salva spoke the language of his Dinka tribe at home. But in school he learned Arabic, the official language of the Sudanese government far away, to the north. Eleven years old on his last birthday, Salva was a good student. He already knew the lesson, which was why he was letting his mind wander down the road ahead of his body."`
            },
            {
              id: "s-u15-tx2-3",
              type: "quiz",
              title: "Cultural Context",
              content: "What does the language difference (Dinka at home, Arabic at school) hint at?",
              options: [
                { id: "A", text: "A cultural divide between Salva's local tribe and the central government in the north.", isCorrect: true, explanation: "This divide is the root cause of the civil war that is about to erupt." },
                { id: "B", text: "Salva's desire to travel to the north to become a politician.", isCorrect: false, explanation: "Salva is just learning the 'official' language; he wants to go home and herd cattle." }
              ]
            }
          ]
        },
        {
          id: "les-u15-tx3",
          title: "Family and Herding",
          description: "A successful family and making clay cows.",
          icon: "Users",
          slides: [
            {
              id: "s-u15-tx3-1",
              type: "theory",
              title: "A Lucky Boy",
              content: `> "Salva was well aware of how lucky he was to be able to go to school. He could not attend the entire year, because during the dry season his family moved away from their village. But during the rainy season, he could walk to the school, which was only half an hour from his home.\n> \n> Salva's father was a successful man. He owned many head of cattle and worked as their village's judge—an honored, respected position."`
            },
            {
              id: "s-u15-tx3-2",
              type: "theory",
              title: "Brothers and Sisters",
              content: `> "Salva had three brothers and two sisters. As each boy reached the age of about ten years, he was sent off to school. Salva's older brothers, Ariik and Ring, had gone to school before him; last year, it had been Salva's turn. His two sisters, Akit and Agnath, did not go to school. Like the other girls in the village, they stayed home and learned from their mother how to keep house."`
            },
            {
              id: "s-u15-tx3-3",
              type: "theory",
              title: "Herding the Cattle",
              content: `> "Most of the time, Salva was glad to be able to go to school. But some days he wished he were still back at home herding cattle.\n> \n> He and his brothers, along with the sons of his father's other wives, would walk with the herds to the water holes, where there was good grazing... Before Salva had begun going to school, he had helped look after the entire herd, and his younger brother as well."`
            }
          ]
        },
        {
          id: "les-u15-tx4",
          title: "Aimless Play",
          description: "Clay cows and roasted squirrels.",
          icon: "Sun",
          slides: [
            {
              id: "s-u15-tx4-1",
              type: "theory",
              title: "Clay Cows",
              content: `> "The boys had to keep an eye on the cows, but the cows did not really need much care. That left plenty of time to play.\n> \n> Salva and the other boys made cows out of clay. The more cows you made, the richer you were. But they had to be fine, healthy animals. It took time to make a lump of clay look like a good cow. The boys would challenge each other to see who could make the most and best cows."`
            },
            {
              id: "s-u15-tx4-2",
              type: "theory",
              title: "Hunting and Roasting",
              content: `> "Other times they would practice with their bows and arrows... When one of them managed to kill a ground squirrel or a rabbit, a guinea hen or a grouse, the boys' aimless play halted and there was suddenly a lot of work to do.\n> \n> Some of them gathered wood to build a fire. Others helped clean and dress the animal. Then they roasted it on the fire... There was only enough for each boy to have a few bites, but, oh, how delicious those bites were!"`
            },
            {
              id: "s-u15-tx4-3",
              type: "theory",
              title: "The Bowl of Milk",
              content: `> "Salva swallowed and turned his eyes back toward the teacher. He wished he hadn't recalled those times, because the memories made him hungry....Milk. When he got home, he would have a bowl of fresh milk, which would keep his belly full until suppertime.\n> \n> ...From far off he would see her bright orange headscarf, and he would raise his arm in greeting. By the time he reached the house, she would have gone inside to get his bowl of milk ready for him."`
            }
          ]
        }
      ]
    },
    {
      id: "u15-part4-attack",
      title: "4. The Attack",
      description: "Gunfire erupts and everything changes.",
      color: "duo-red",
      lessons: [
        {
          id: "les-u15-tx5",
          title: "CRACK!",
          description: "The sudden violence.",
          icon: "AlertCircle",
          slides: [
            {
              id: "s-u15-tx5-1",
              type: "theory",
              title: "The Interruption",
              content: `> "CRACK!\n> \n> The noise had come from outside. Was it a gunshot? Or just a car backfiring?\n> \n> The teacher stopped talking for a moment. Every head in the room turned toward the window. Nothing. Silence.\n> \n> The teacher cleared his throat, which drew the boys' attention to the front of the room again. He continued the lesson from where he had left off. Then—"`
            },
            {
              id: "s-u15-tx5-2",
              type: "theory",
              title: "Gunfire",
              content: `> "CRACK! POP-POP-CRACK! ACK-ACK-ACK-ACK-ACK-ACK!\n> \n> Gunfire!\n> \n> 'Everyone, DOWN!' the teacher shouted.\n> \n> Some of the boys moved at once, ducking their heads and hunching over. Others sat frozen; their eyes and mouths open wide. Salva covered his head with his hands and looked from side to side in panic."`
            },
            {
              id: "s-u15-tx5-3",
              type: "theory",
              title: "Into the Bush",
              content: `> "The teacher edged his way along the wall to the window. He took a quick peek outside. The gunfire had stopped, but now people were shouting and running.\n> \n> 'Go quickly, all of you' the teacher said, his voice low and urgent. 'Into the bush. Do you hear me? Not home. Don't run home. They will be going into the villages. Stay away from the villages—run into the bush.'"`
            },
            {
              id: "s-u15-tx5-4",
              type: "quiz",
              title: "Crucial Decision",
              content: "Why did the teacher tell the boys NOT to run home?",
              options: [
                { id: "A", text: "Because their parents wouldn't be home.", isCorrect: false, explanation: "Their parents were likely home, but the villages were the target." },
                { id: "B", text: "Because the armed men were heading into the villages, making homes the most dangerous place to be.", isCorrect: true, explanation: "The teacher knew the bush offered concealment, whereas the villages would be attacked." }
              ]
            }
          ]
        },
        {
          id: "les-u15-tx6",
          title: "The Historical Context",
          description: "Understanding the Sudanese Civil War.",
          icon: "Map",
          slides: [
            {
              id: "s-u15-tx6-1",
              type: "theory",
              title: "The Root of the War",
              content: `> "The war had started two years earlier. Salva did not understand much about it, but he knew that rebels from the southern part of Sudan, where he and his family lived, were fighting against the government, which was based in the north. Most of the people who lived in the north were Muslim, and the government wanted all of Sudan to become a Muslim country—a place where the beliefs of Islam were followed."`
            },
            {
              id: "s-u15-tx6-2",
              type: "theory",
              title: "Fighting for Independence",
              content: `> "But the people in the south were of different religions and did not want to be forced to practice Islam. They began fighting for independence from the north. The fighting was scattered all around southern Sudan, and now the war had come to where Salva lived."`
            },
            {
              id: "s-u15-tx6-3",
              type: "quiz",
              title: "Comprehension Check",
              content: "What was the primary reason the southern rebels were fighting the northern government?",
              options: [
                { id: "A", text: "Over the distribution of cattle and farming lands.", isCorrect: false, explanation: "While resources were an issue, the text highlights religion and independence." },
                { id: "B", text: "To gain independence because they did not want to be forced to practice the government's religion.", isCorrect: true, explanation: "The north wanted all of Sudan to be a Muslim country, which the southern populations resisted." }
              ]
            }
          ]
        },
        {
          id: "les-u15-tx7",
          title: "Away from Home",
          description: "The panic and the flight.",
          icon: "Activity",
          slides: [
            {
              id: "s-u15-tx7-1",
              type: "theory",
              title: "The Thumping Heart",
              content: `> "The boys scrambled to their feet. Some of them were crying. The teacher began hurrying the students out the door.\n> \n> Salva was near the end of the line. He felt his heart beating so hard that its pulse pounded in his throat and ears. He wanted to shout, 'I need to go home! I must go home!' But the words were blocked by the wild thumping in his throat."`
            },
            {
              id: "s-u15-tx7-2",
              type: "theory",
              title: "The Chaos Outside",
              content: `> "When he got to the door, he looked out. Everyone was running—men, children, women carrying babies. The air was full of dust that had been kicked up by all those running feet. Some of the men were shouting and waving guns.\n> \n> Salva saw all this with one glance."`
            },
            {
              id: "s-u15-tx7-3",
              type: "theory",
              title: "The Ending",
              content: `> "Then he was running, too. Running as hard as he could, into the bush.\n> \n> Away from home."`
            }
          ]
        }
      ]
    },
    {
      id: "u15-part5-mastery",
      title: "5. Vocabulary & Exam Prep",
      description: "Master key terms and tackle exam questions.",
      color: "duo-violet",
      lessons: [
        {
          id: "les-u15-vocab",
          title: "Glossary",
          description: "Key words from the text.",
          icon: "Type",
          slides: [
            {
              id: "v-u15-1",
              type: "word_card",
              content: "Vocabulary",
              wordCard: {
                word: "Droned",
                translation: "To speak in a monotonous, dull tone.",
                context: "> \"The teacher droned on with the lesson, about the Arabic language.\"",
                example: "The professor droned on for hours, putting half the class to sleep."
              }
            },
            {
              id: "v-u15-2",
              type: "word_card",
              content: "Vocabulary",
              wordCard: {
                word: "Aimless",
                translation: "Without purpose or direction.",
                context: "> \"...the boys' aimless play halted and there was suddenly a lot of work to do.\"",
                example: "They spent an aimless afternoon wandering around the village."
              }
            },
            {
              id: "v-u15-3",
              type: "word_card",
              content: "Vocabulary",
              wordCard: {
                word: "Bush",
                translation: "Wild, uncultivated, sparsely populated land, especially in Africa.",
                context: "> \"Stay away from the villages—run into the bush.\"",
                example: "The animals retreated deep into the bush to hide from hunters."
              }
            },
            {
              id: "v-u15-4",
              type: "word_card",
              content: "Vocabulary",
              wordCard: {
                word: "Scrambled",
                translation: "Moved hurriedly or clumsily.",
                context: "> \"The boys scrambled to their feet.\"",
                example: "When the bell rang, the students scrambled to pack their bags."
              }
            }
          ]
        },
        {
          id: "les-u15-exam",
          title: "Model Questions",
          description: "Practice answering in the format of the exam.",
          icon: "Edit3",
          slides: [
            {
              id: "s-u15-qb1",
              type: "theory",
              title: "Section B (6 Marks) - Exam Question",
              content: `**Q: Describe the circumstances that force Salva to leave his village.**\n\n**Model Answer:**\nSalva was attending school when the Sudanese Civil War suddenly reached his village in 1985. As his teacher droned on about Arabic, gunfire suddenly erupted outside. The teacher immediately instructed the boys to duck and then ordered them to run directly into the bush, warning them not to go home because the armed rebels would be attacking the villages. The war, fought between the northern government and the southern rebels seeking independence, had finally shattered his peaceful life. In sheer panic, amidst shouting men and crying children, Salva ran into the bush, forced away from his home and family.`
            }
          ]
        }
      ]
    }
  ]
};
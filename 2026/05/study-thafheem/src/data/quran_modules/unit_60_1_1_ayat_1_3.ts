import { Unit } from '../../types';

export const UNIT_60_1_1_AYAT_1_3: Unit = {
  id: "unit-60-1-1",
  title: "Ayat 1-3: The Incident of Hatib",
  description: "TR · WL · WM · TF (A, B, C) · CTX · RFL",
  color: "duo-green",
  lessons:[
    // ── 1. CTX: Context Lesson (Asbab al-Nuzul) ───────────────────────────
    {
      id: "les-60-1-1-ctx",
      title: "Context: The Secret Letter",
      description: "The historical event that triggered these verses",
      icon: "Scroll",
      slides:[
        {
          id: "ctx-warmup",
          type: "quiz",
          title: "Desirable Difficulty",
          content: "Imagine a highly respected general secretly sends his nation's war plans to the enemy. He doesn't hate his own country, but his family is trapped in enemy territory and he wants to buy their safety. What is this act called in Islamic jurisprudence?",
          options:[
            { id: "A", text: "Apostasy (leaving the religion)", isCorrect: false, explanation: "Apostasy requires a complete rejection of faith. This act was driven by worldly fear, not disbelief." },
            { id: "B", text: "Espionage (spying/treason)", isCorrect: true, explanation: "Correct. It is an act of espionage, a major crime, but it does not automatically mean the person has lost their faith in Allah." }
          ]
        },
        {
          id: "ctx-story-1",
          type: "theory",
          title: "The Preparations for Makkah",
          content: "After the Quraish broke the Treaty of Hudaibiyah, the Holy Prophet (PBUH) began secret preparations to march on Makkah. He did not tell anyone the destination except a few close Companions.\n\nHowever, a highly respected Companion named **Hatib bin Abi Balta'a** (who had fought at Badr) wrote a secret letter to the Quraish chiefs, warning them of the impending attack. He gave this letter to a woman leaving Madinah, paying her 10 dinars to smuggle it to Makkah."
        },
        {
          id: "ctx-story-2",
          type: "theory",
          title: "The Interception",
          content: "Allah informed the Prophet (PBUH) about the letter through revelation. The Prophet immediately dispatched Ali, Zubair, and Miqdad bin Aswad.\n\nHe told them: 'Make haste! At Raudah Khakh you will meet a woman carrying a letter from Hatib to the pagans. Seize that letter.'\n\nThey caught the woman, but she denied having it. They threatened to strip and search her if she lied. Seeing no escape, she pulled the letter out from her hair-plait."
        },
        {
          id: "ctx-quiz-1",
          type: "quiz",
          title: "The Motive",
          content: "When Hatib was brought before the Prophet (PBUH) and questioned, what reason did he give for sending the letter?",
          options:[
            { id: "A", text: "He had secretly become a hypocrite and wanted Islam to fail.", isCorrect: false, explanation: "No, he explicitly stated he had not lost his faith." },
            { id: "B", text: "He was not from a strong tribe in Makkah, so he wanted to do the Quraish a favor to ensure they wouldn't harm his vulnerable family left behind.", isCorrect: true, explanation: "Hatib told the truth. He didn't want Islam to lose; he just made a desperate, flawed decision to protect his unprotected family." }
          ]
        },
        {
          id: "ctx-quiz-2",
          type: "quiz",
          title: "The Verdict",
          content: "Umar bin Khattab was furious and asked permission to execute Hatib. How did the Prophet (PBUH) respond?",
          options:[
            { id: "A", text: "He agreed and ordered Hatib's execution for treason.", isCorrect: false, explanation: "Despite the severity of the crime, the Prophet pardoned him." },
            { id: "B", text: "He pardoned him, noting that Hatib had fought at the Battle of Badr, and Allah had looked favorably upon the people of Badr.", isCorrect: true, explanation: "The Prophet accepted his excuse, confirming Hatib was sincere in his faith despite this grave error." }
          ]
        }
      ]
    },

    // ── 2. TR: Translation Lesson ─────────────────────────────────────────
    {
      id: "les-60-1-1-tr",
      title: "Translation: Ayat 1-3",
      description: "Recitation and meaning of the verses",
      icon: "BookOpen",
      slides:[
        {
          id: "tr-ayah-1-part-1",
          type: "ayah",
          title: "Ayah 1 (Part 1)",
          arabicText: "يَا أَيُّهَا الَّذِينَ آمَنُوا لَا تَتَّخِذُوا عَدُوِّي وَعَدُوَّكُمْ أَوْلِيَاءَ",
          translation: "O you who have believed, do not take My enemies and your enemies as allies (friends),",
          transliteration: "Ya ayyuha allatheena amanu la tattakhithoo 'aduwwee wa'aduwwakum awliyaa"
        },
        {
          id: "tr-ayah-1-part-2",
          type: "ayah",
          title: "Ayah 1 (Part 2)",
          arabicText: "تُلْقُونَ إِلَيْهِم بِالْمَوَدَّةِ وَقَدْ كَفَرُوا بِمَا جَاءَكُم مِّنَ الْحَقِّ",
          translation: "extending to them affection while they have disbelieved in what came to you of the truth,",
          transliteration: "tulqoona ilayhim bilmawaddati waqad kafaroo bima jaakum mina alhaqqi"
        },
        {
          id: "tr-ayah-1-part-3",
          type: "ayah",
          title: "Ayah 1 (Part 3)",
          arabicText: "يُخْرِجُونَ الرَّسُولَ وَإِيَّاكُمْ ۙ أَن تُؤْمِنُوا بِاللَّهِ رَبِّكُمْ",
          translation: "driving out the Messenger and yourselves [only] because you believe in Allah, your Lord.",
          transliteration: "yukhrijoona arrasoola waiyyakum an tuminoo billahi rabbikum"
        },
        {
          id: "tr-ayah-1-part-4",
          type: "ayah",
          title: "Ayah 1 (Part 4)",
          arabicText: "تُسِرُّونَ إِلَيْهِم بِالْمَوَدَّةِ وَأَنَا أَعْلَمُ بِمَا أَخْفَيْتُمْ وَمَا أَعْلَنتُمْ",
          translation: "You send them friendly messages secretly, whereas I know full well whatever you conceal and whatever you reveal.",
          transliteration: "tusirroona ilayhim bilmawaddati waana a'lamu bima akhfaytum wama a'lantum"
        },
        {
          id: "tr-ayah-2",
          type: "ayah",
          title: "Ayah 2",
          arabicText: "إِن يَثْقَفُوكُمْ يَكُونُوا لَكُمْ أَعْدَاءً وَيَبْسُطُوا إِلَيْكُمْ أَيْدِيَهُمْ وَأَلْسِنَتَهُم بِالسُّوءِ وَوَدُّوا لَوْ تَكْفُرُونَ",
          translation: "If they overcome you, they will be enemies to you, and will stretch out their hands and their tongues against you with evil, and they wish you would disbelieve.",
          transliteration: "In yathqafookum yakoonoo lakum a'daan wayabsutoo ilaykum aydiyahum waalsinatahum bissooi wawaddoo law takfuroon"
        },
        {
          id: "tr-ayah-3",
          type: "ayah",
          title: "Ayah 3",
          arabicText: "لَن تَنفَعَكُمْ أَرْحَامُكُمْ وَلَا أَوْلَادُكُمْ ۚ يَوْمَ الْقِيَامَةِ يَفْصِلُ بَيْنَكُمْ ۚ وَاللَّهُ بِمَا تَعْمَلُونَ بَصِيرٌ",
          translation: "Never will your relatives or your children benefit you; the Day of Resurrection He will judge (separate) between you. And Allah, of what you do, is Seeing.",
          transliteration: "Lan tanfa'akum arhamukum wala awladukum yawma alqiyamati yafsilu baynakum wallahu bima ta'maloona baseer"
        }
      ]
    },

    // ── 3. WL: Word Learn Lesson ──────────────────────────────────────────
    {
      id: "les-60-1-1-wl",
      title: "Word Learn: Core Vocabulary",
      description: "Deep dive into the roots and morphology",
      icon: "Code",
      slides:[
        {
          id: "wl-awliya",
          type: "word_card",
          content: "",
          wordCard: {
            word: "أَوْلِيَاءَ",
            translation: "Allies / Friends / Protectors",
            context: "Allah commands the believers not to take His enemies as **Awliyaa**.",
            example: "اللَّهُ وَلِيُّ الَّذِينَ آمَنُوا",
            exampleTranslation: "Allah is the ally (Wali) of those who believe.",
            morphology: "**Root:** و - ل - ي (w-l-y) meaning to be near, protect, or govern. <br/>**Singular:** وَلِيّ (Wali). **Plural:** أَوْلِيَاء (Awliyaa)."
          }
        },
        {
          id: "wl-awliya-quiz",
          type: "fill_in_blank",
          title: "Apply the Concept",
          content: "A person who protects you and stands by you in times of war is your ___ (Wali), which makes them part of your Awliyaa.",
          blankAnswer: "ally"
        },
        {
          id: "wl-yathqafukum",
          type: "word_card",
          content: "",
          wordCard: {
            word: "يَثْقَفُوكُمْ",
            translation: "They overcome you / gain the upper hand",
            context: "Allah warns that if the disbelievers **Yathqafukum** (overcome you), they will show no mercy.",
            example: "فَإِمَّا تَثْقَفَنَّهُمْ فِي الْحَرْبِ",
            exampleTranslation: "So if you gain the upper hand over them in war...",
            morphology: "**Root:** ث - ق - ف (th-q-f) meaning to find, catch, or skillfully overcome someone. <br/>**Form:** Present tense verb with attached pronoun 'kum' (you all)."
          }
        },
        {
          id: "wl-yathqafukum-quiz",
          type: "quiz",
          title: "Check Your Understanding",
          content: "The root (th-q-f) involves not just finding someone, but skillfully overpowering them. If the Quraish were to 'Yathqafukum' the Muslims, what would they do?",
          options:[
            { id: "A", text: "They would sign a peace treaty and let them go.", isCorrect: false, explanation: "The verse explicitly says they would stretch out their hands with evil." },
            { id: "B", text: "They would act as brutal enemies and stretch out their hands to harm them.", isCorrect: true, explanation: "Yes, 'Yathqafukum' implies catching the enemy in a vulnerable state, leading to violence." }
          ]
        },
        {
          id: "wl-tusirruna",
          type: "word_card",
          content: "",
          wordCard: {
            word: "تُسِرُّونَ",
            translation: "You conceal / send secretly",
            context: "Hatib was **Tusirruna** (secretly sending) messages to the enemy.",
            example: "يَعْلَمُ السِّرَّ وَأَخْفَى",
            exampleTranslation: "He knows the secret (As-Sirr) and what is even more hidden.",
            morphology: "**Root:** س - ر - ر (s-r-r) meaning secret, hidden, or confidential. <br/>**Noun form:** سِرّ (Sirr - Secret)."
          }
        },
        {
          id: "wl-tusirruna-quiz",
          type: "fill_in_blank",
          title: "Apply the Concept",
          content: "When you whisper a confidential matter to a friend, you are sharing a ___ (Sirr) with them.",
          blankAnswer: "secret"
        }
      ]
    },

    // ── 4. WM: Word Meaning Match ─────────────────────────────────────────
    {
      id: "les-60-1-1-wm",
      title: "Match the Meaning",
      description: "Match all Arabic words from the Ayah",
      icon: "Network",
      slides:[
        {
          id: "wm-match-1",
          type: "match_the_following",
          title: "Ayah 1 & 2 Vocabulary",
          content: "Match the Arabic words to their English meaning.",
          matchPairs:[
            { id: "1", left: "عَدُوِّي", right: "My enemy" },
            { id: "2", left: "أَوْلِيَاءَ", right: "Allies / Friends" },
            { id: "3", left: "بِالْمَوَدَّةِ", right: "With affection" },
            { id: "4", left: "يُخْرِجُونَ", right: "They drive out" },
            { id: "5", left: "أَخْفَيْتُمْ", right: "You concealed" }
          ]
        },
        {
          id: "wm-match-2",
          type: "match_the_following",
          title: "Ayah 2 & 3 Vocabulary",
          content: "Match the Arabic words to their English meaning.",
          matchPairs:[
            { id: "1", left: "يَثْقَفُوكُمْ", right: "They overcome you" },
            { id: "2", left: "وَيَبْسُطُوا", right: "And they stretch out" },
            { id: "3", left: "وَأَلْسِنَتَهُم", right: "And their tongues" },
            { id: "4", left: "أَرْحَامُكُمْ", right: "Your relatives" },
            { id: "5", left: "يَفْصِلُ", right: "He will separate" }
          ]
        },
        {
          id: "wm-timed",
          type: "quiz",
          title: "Quick Fire Translation",
          content: "What does the phrase 'يَفْصِلُ بَيْنَكُمْ' (Yafsilu baynakum) mean in the context of the Day of Judgment?",
          options:[
            { id: "A", text: "He will forgive you both", isCorrect: false, explanation: "Forgive is from 'Ghafara'." },
            { id: "B", text: "He will separate (or judge) between you", isCorrect: true, explanation: "Fasl means to divide, separate, or issue a decisive judgment." },
            { id: "C", text: "He will bring you together", isCorrect: false, explanation: "Bring together is 'Yajma'u'." }
          ]
        }
      ]
    },

    // ── 5. TF-A: Tafheem Lesson (The Incident & Espionage) ────────────────
    {
      id: "les-60-1-1-tfa",
      title: "Tafheem A: The Crime of Espionage",
      description: "Maududi's commentary on Hatib's error",
      icon: "FileText",
      slides:[
        {
          id: "tfa-1",
          type: "theory",
          title: "The Severity of the Act",
          content: "Maududi highlights that Hatib's act was, without a doubt, an act of **espionage** on a critical occasion. It could have caused immense bloodshed and ruined the peaceful conquest of Makkah.\n\nYet, Allah's reprimand in the Quran is addressed to a *believer*, not a hypocrite. Allah says: 'O you who have believed...' instead of declaring his faith void."
        },
        {
          id: "tfa-2",
          type: "fill_in_blank",
          title: "General Rule Derived",
          content: "Even if a person is wholly free from ill-will against Islam and acts out of a dire personal need, doing anything subservient to the interests of disbelief is unbecoming of a ___.",
          blankAnswer: "believer"
        },
        {
          id: "tfa-3",
          type: "quiz",
          title: "The Infallibility of Companions",
          content: "What does this incident teach us about the Sahabah (Companions) of the Prophet?",
          options:[
            { id: "A", text: "They were angels in human form, incapable of sin.", isCorrect: false, explanation: "The incident proves otherwise." },
            { id: "B", text: "They were human and could commit errors due to human weaknesses.", isCorrect: true, explanation: "Maududi points out that the Companions were not innocent of making mistakes. The Quran records their errors to lay down laws for the Ummah, without stripping them of the respect they deserve." }
          ]
        },
        {
          id: "tfa-4",
          type: "quiz",
          title: "Investigation Protocol",
          content: "When Ali and Zubair threatened to strip the woman to find the letter, what legal principle does Maududi extract?",
          options:[
            { id: "A", text: "That women have no rights in an investigation.", isCorrect: false, explanation: "False." },
            { id: "B", text: "That in the investigation of a serious crime, even a female accused can be stripped and searched if required to uncover hidden evidence.", isCorrect: true, explanation: "Maududi states: 'Obviously, if it were not lawful, the three illustrious Companions could not have threatened her thus.' It establishes a precedent for thorough searches." }
          ]
        }
      ]
    },

    // ── 6. TF-B: Tafheem Lesson (Jurisprudence of Spying) ─────────────────
    {
      id: "les-60-1-1-tfb",
      title: "Tafheem B: Jurisprudence",
      description: "Laws regarding a Muslim spy",
      icon: "Scale",
      slides:[
        {
          id: "tfb-1",
          type: "theory",
          title: "Does Spying Make One an Apostate?",
          content: "Maududi states: A Muslim being involved in espionage for the disbelievers **by itself is not a sufficient basis** to conclude he has become an apostate (Murtadd) or a hypocrite.\n\nUnless there is other evidence of disbelief, it is treated as a major crime (treason), but not a nullifier of faith (Kufr)."
        },
        {
          id: "tfb-2",
          type: "quiz",
          title: "Punishing a Muslim Spy",
          content: "Because the Prophet (PBUH) pardoned Hatib specifically due to his participation at Badr, Islamic jurists debated the standard punishment for a Muslim spy. Which of the following is Imam Abu Hanifah's ruling?",
          options:[
            { id: "A", text: "Mandatory death penalty without exception.", isCorrect: false, explanation: "This is closer to Imam Malik's view." },
            { id: "B", text: "Corporal punishment and long imprisonment.", isCorrect: true, explanation: "Imam Abu Hanifah and Imam Auza'i hold that the spy is not put to death, but subjected to severe corporal punishment and jail." }
          ]
        },
        {
          id: "tfb-3",
          type: "quiz",
          title: "Forgiveness of Badr",
          content: "The Prophet said about Hatib: 'Allah may have looked favourably at the people of Badr and said: Do as you please, I have forgiven you.' How do scholars interpret this?",
          options:[
            { id: "A", text: "Veterans of Badr are allowed to commit any sin, including murder, without consequence.", isCorrect: false, explanation: "The Shariah still applied to them." },
            { id: "B", text: "Due to their massive past sacrifice, Allah will mercifully forgive their future errors, so we should not suspect them of hypocrisy.", isCorrect: true, explanation: "It means their core sincerity is proven beyond doubt, so their mistakes are treated as human errors, not treasonous hypocrisy." }
          ]
        },
        {
          id: "tfb-4",
          type: "theory",
          title: "No Secret Trials",
          content: "Maududi highlights that the Prophet did not place Hatib in confinement on mere suspicion. He was given a chance of self-defense, and this was done **publicly**, not in camera.\n\nThis establishes that in Islam, a ruler cannot imprison someone based solely on his own knowledge or suspicion without a fair, open trial."
        }
      ]
    },

    // ── 7. TF-C: Tafheem Lesson (The Hereafter) ───────────────────────────
    {
      id: "les-60-1-1-tfc",
      title: "Tafheem C: Void Relationships",
      description: "Ayah 3 - The Day of Judgment",
      icon: "Infinity",
      slides:[
        {
          id: "tfc-1",
          type: "theory",
          title: "Relationships on the Day of Judgment",
          content: "Ayah 3 states: 'Never will your relatives or your children benefit you; the Day of Resurrection He will separate between you.'\n\nMaududi explains this was a direct address to Hatib's motive. He risked his faith for his family. But on Judgment Day, no one will take the burden of another's sin."
        },
        {
          id: "tfc-2",
          type: "fill_in_blank",
          title: "The Ultimate Reality",
          content: "All worldly relationships and bonds of love will be rendered ___ in the Hereafter.",
          blankAnswer: "void"
        },
        {
          id: "tfc-3",
          type: "quiz",
          title: "The Individual Account",
          content: "What is the core theological lesson from Ayah 3?",
          options:[
            { id: "A", text: "Families will go to heaven together regardless of their actions.", isCorrect: false, explanation: "The verse explicitly says relationships won't benefit you if they lead you to sin." },
            { id: "B", text: "Every person will present himself as an individual and render his own account.", isCorrect: true, explanation: "Therefore, no one should commit a wrong for the sake of fraternity, because no one else will share the punishment." }
          ]
        }
      ]
    },

    // ── 8. RFL: Reflection Lesson ─────────────────────────────────────────
    {
      id: "les-60-1-1-rfl",
      title: "Reflection: Loyalty & Boundaries",
      description: "Applying the lesson of Al-Mumtahinah today",
      icon: "Heart",
      slides:[
        {
          id: "rfl-1",
          type: "theory",
          title: "Balancing Love and Faith",
          content: "Hatib's story is deeply human. He didn't want wealth or power; he just wanted to protect his helpless children. \n\nYet, Allah gently but firmly corrected him. Our love for our family is natural and encouraged in Islam, but it cannot override our loyalty to Allah, His Messenger, and the safety of the Muslim community."
        },
        {
          id: "rfl-2",
          type: "quiz",
          title: "Application Scenario",
          content: "You work in a company. Your relative asks you to illegally leak confidential data to them so they can win a contract and save their failing business. They say, 'We are family, you must help me.' Applying the lesson of Hatib, what do you do?",
          options:[
            { id: "A", text: "Refuse, because loyalty to honesty and your covenant takes precedence over familial pressure.", isCorrect: true, explanation: "A believer cannot commit a betrayal for the sake of a relative. In the Hereafter, that relative cannot save you from Allah's judgment." },
            { id: "B", text: "Help them secretly, hoping no one finds out.", isCorrect: false, explanation: "Allah says in Ayah 1: 'I know full well whatever you conceal and whatever you reveal.'" }
          ]
        },
        {
          id: "rfl-3",
          type: "quiz",
          title: "Spaced Retrieval (from CTX)",
          content: "Let's review: Did Hatib's letter successfully reach the Quraish?",
          options:[
            { id: "A", text: "Yes, but they ignored it.", isCorrect: false, explanation: "It never reached them." },
            { id: "B", text: "No, Allah revealed it to the Prophet, and Ali intercepted it on the road.", isCorrect: true, explanation: "The divine intervention protected the Muslims and stopped the espionage." }
          ]
        }
      ]
    }
  ]
};
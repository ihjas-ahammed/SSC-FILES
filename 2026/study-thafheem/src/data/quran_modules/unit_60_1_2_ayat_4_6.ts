import { Unit } from '../../types';

export const UNIT_60_1_2_AYAT_4_6: Unit = {
  id: "unit-60-1-2",
  title: "Ayat 4-6: Ibrahim's Beautiful Example",
  description: "TR · WL · WM · TF (A, B, C) · RFL",
  color: "duo-blue",
  lessons: [
    // ── 1. TR: Translation Lesson ─────────────────────────────────────────
    {
      id: "les-60-1-2-tr",
      title: "Translation: Ayat 4-6",
      description: "Recitation and meaning of the verses",
      icon: "BookOpen",
      slides: [
        {
          id: "tr-warmup-4",
          type: "quiz",
          title: "Desirable Difficulty",
          content: "We are told that Prophet Ibrahim (AS) is an 'excellent example' for us. Did he completely boycott his polytheist father from the very beginning?",
          options: [
            { id: "A", text: "Yes, he never spoke to him kindly.", isCorrect: false, explanation: "He spoke to his father very respectfully and even promised to pray for his forgiveness initially." },
            { id: "B", text: "No, he promised to pray for him, but later disowned him when it became clear he was an enemy of Allah.", isCorrect: true, explanation: "Correct. This Ayah specifically explains how to handle this exact exception in his story." }
          ]
        },
        {
          id: "tr-ayah-4-part-1",
          type: "ayah",
          title: "Ayah 4 (Part 1)",
          arabicText: "قَدْ كَانَتْ لَكُمْ أُسْوَةٌ حَسَنَةٌ فِي إِبْرَاهِيمَ وَالَّذِينَ مَعَهُ",
          translation: "There is indeed an excellent example for you in Abraham and his Companions",
          transliteration: "Qad kanat lakum uswatun hasanatun fee ibraheema waallatheena ma'ahu"
        },
        {
          id: "tr-ayah-4-part-2",
          type: "ayah",
          title: "Ayah 4 (Part 2)",
          arabicText: "إِذْ قَالُوا لِقَوْمِهِمْ إِنَّا بُرَآءُ مِنكُمْ وَمِمَّا تَعْبُدُونَ مِن دُونِ اللَّهِ",
          translation: "when they said to their people plainly: 'We have nothing to do with you and your gods, whom you worship instead of Allah;",
          transliteration: "ith qaloo liqawmihim inna buraao minkum wamimma ta'budoona min dooni Allahi"
        },
        {
          id: "tr-ayah-4-part-3",
          type: "ayah",
          title: "Ayah 4 (Part 3)",
          arabicText: "كَفَرْنَا بِكُمْ وَبَدَا بَيْنَنَا وَبَيْنَكُمُ الْعَدَاوَةُ وَالْبَغْضَاءُ أَبَدًا حَتَّىٰ تُؤْمِنُوا بِاللَّهِ وَحْدَهُ",
          translation: "we renounce you and there has arisen between us and you enmity and hatred for ever, until you believe in Allah, the One.'",
          transliteration: "kafarna bikum wabada baynana wabaynakumu al'adawatu waalbaghdao abadan hatta tuminoo biAllahi wahdahu"
        },
        {
          id: "tr-ayah-4-part-4",
          type: "ayah",
          title: "Ayah 4 (The Exception)",
          arabicText: "إِلَّا قَوْلَ إِبْرَاهِيمَ لِأَبِيهِ لَأَسْتَغْفِرَنَّ لَكَ وَمَا أَمْلِكُ لَكَ مِنَ اللَّهِ مِن شَيْءٍ",
          translation: "But Abraham's saying this to his father (is excepted); 'I shall certainly pray for your forgiveness, though I have no power to get anything for you from Allah.'",
          transliteration: "illa qawla ibraheema liabeehi laastaghfiranna laka wama amliku laka mina Allahi min shayin"
        },
        {
          id: "tr-ayah-4-part-5",
          type: "ayah",
          title: "Ayah 4 (The Prayer)",
          arabicText: "رَّبَّنَا عَلَيْكَ تَوَكَّلْنَا وَإِلَيْكَ أَنَبْنَا وَإِلَيْكَ الْمَصِيرُ",
          translation: "(And the prayer of Abraham and his companions was:) 'O our Lord, in You alone have we put our trust and to You alone have we turned and to You we shall return finally.",
          transliteration: "rabbana 'alayka tawakkalna wailayka anabna wailayka almaseeru"
        },
        {
          id: "tr-ayah-5",
          type: "ayah",
          title: "Ayah 5",
          arabicText: "رَبَّنَا لَا تَجْعَلْنَا فِتْنَةً لِّلَّذِينَ كَفَرُوا وَاغْفِرْ لَنَا رَبَّنَا ۖ إِنَّكَ أَنتَ الْعَزِيزُ الْحَكِيمُ",
          translation: "O our Lord: make us not a test and trial for those who have disbelieved; and O our Lord, pardon us our errors. You indeed are the All-Mighty, the All-Wise.'",
          transliteration: "rabbana la taj'alna fitnatan lillatheena kafaroo waighfir lana rabbana innaka anta al'azeezu alhakeemu"
        },
        {
          id: "tr-ayah-6",
          type: "ayah",
          title: "Ayah 6",
          arabicText: "لَقَدْ كَانَ لَكُمْ فِيهِمْ أُسْوَةٌ حَسَنَةٌ لِّمَن كَانَ يَرْجُو اللَّهَ وَالْيَوْمَ الْآخِرَ ۚ وَمَن يَتَوَلَّ فَإِنَّ اللَّهَ هُوَ الْغَنِيُّ الْحَمِيدُ",
          translation: "There is certainly in the conduct of those people an excellent example for you and for every such person who is hopeful of Allah and the last Day. But whoever turns away from this (should know that) Allah is All-Sufficient and Self-Praiseworthy.",
          transliteration: "laqad kana lakum feehim uswatun hasanatun liman kana yarjoo Allaha waalyawma alakhira waman yatawalla fainna Allaha huwa alghaniyyu alhameedu"
        }
      ]
    },

    // ── 2. WL: Word Learn Lesson ──────────────────────────────────────────
    {
      id: "les-60-1-2-wl",
      title: "Word Learn: Core Vocabulary",
      description: "Deep dive into Uswah, Bura'ao, and Fitnah",
      icon: "Code",
      slides: [
        {
          id: "wl-uswatun",
          type: "word_card",
          content: "",
          wordCard: {
            word: "أُسْوَةٌ",
            translation: "An Example / A Pattern",
            context: "Allah says there is an **Uswatun Hasanatun** (excellent example) in Ibrahim (AS).",
            example: "لَّقَدْ كَانَ لَكُمْ فِي رَسُولِ اللَّهِ أُسْوَةٌ حَسَنَةٌ",
            exampleTranslation: "There has certainly been for you in the Messenger of Allah an excellent pattern/example.",
            morphology: "**Root:** أ - س - و (a-s-w) meaning to cure, comfort, or to be an example that others follow."
          }
        },
        {
          id: "wl-uswatun-quiz",
          type: "fill_in_blank",
          title: "Apply the Concept",
          content: "Because Ibrahim (AS) established the pattern of prioritizing Allah over everything, he is an ___ (Uswah) for all believers.",
          blankAnswer: "example"
        },
        {
          id: "wl-buraao",
          type: "word_card",
          content: "",
          wordCard: {
            word: "بُرَآءُ",
            translation: "Free from / Disassociated",
            context: "Ibrahim (AS) told his people: 'Inna **Bura'ao** minkum' (We are free from/have nothing to do with you).",
            example: "بَرَاءَةٌ مِّنَ اللَّهِ",
            exampleTranslation: "A declaration of disassociation (Bara'ah) from Allah...",
            morphology: "**Root:** ب - ر - أ (b-r-a) meaning to be free, clear, or innocent. Plural of بَرِيء (Baree')."
          }
        },
        {
          id: "wl-buraao-quiz",
          type: "quiz",
          title: "Check Your Understanding",
          content: "When Ibrahim (AS) said 'We are Bura'ao from you', what was he declaring?",
          options: [
            { id: "A", text: "That he is seeking to start a physical war with them immediately.", isCorrect: false, explanation: "It primarily means a complete severing of spiritual and loyal ties." },
            { id: "B", text: "That he is completely severing his loyalty and association from them and their idols.", isCorrect: true, explanation: "Bara'ah is the concept of Al-Walaa wal-Baraa (Loyalty to Allah, disavowal of Shirk)." }
          ]
        },
        {
          id: "wl-fitnatan",
          type: "word_card",
          content: "",
          wordCard: {
            word: "فِتْنَةً",
            translation: "A Test / A Trial",
            context: "The believers pray: 'O our Lord, make us not a **Fitnatan** for those who disbelieve.'",
            example: "وَالْفِتْنَةُ أَشَدُّ مِنَ الْقَتْلِ",
            exampleTranslation: "And Fitnah (persecution/trial) is worse than killing.",
            morphology: "**Root:** ف - ت - ن (f-t-n) meaning to test, originally referring to the melting of gold and silver to separate the pure metal from the dross."
          }
        }
      ]
    },

    // ── 3. WM: Word Meaning Match ─────────────────────────────────────────
    {
      id: "les-60-1-2-wm",
      title: "Match the Meaning",
      description: "Match all Arabic words from Ayat 4-6",
      icon: "Network",
      slides: [
        {
          id: "wm-match-1",
          type: "match_the_following",
          title: "Ayah 4 Vocabulary (Part 1)",
          content: "Match the Arabic words to their English meaning.",
          matchPairs: [
            { id: "1", left: "أُسْوَةٌ", right: "An example" },
            { id: "2", left: "حَسَنَةٌ", right: "Excellent / Good" },
            { id: "3", left: "بُرَآءُ", right: "Free / Disassociated" },
            { id: "4", left: "تَعْبُدُونَ", right: "You worship" },
            { id: "5", left: "كَفَرْنَا", right: "We renounce / disbelieve" }
          ]
        },
        {
          id: "wm-match-2",
          type: "match_the_following",
          title: "Ayah 4 Vocabulary (Part 2)",
          content: "Match the Arabic words to their English meaning.",
          matchPairs: [
            { id: "1", left: "وَبَدَا", right: "And has arisen / appeared" },
            { id: "2", left: "الْعَدَاوَةُ", right: "Enmity" },
            { id: "3", left: "الْبَغْضَاءُ", right: "Hatred" },
            { id: "4", left: "أَبَدًا", right: "Forever" },
            { id: "5", left: "وَحْدَهُ", right: "Alone / The One" }
          ]
        },
        {
          id: "wm-match-3",
          type: "match_the_following",
          title: "Ayah 5 & 6 Vocabulary",
          content: "Match the Arabic words to their English meaning.",
          matchPairs: [
            { id: "1", left: "تَوَكَّلْنَا", right: "We put our trust" },
            { id: "2", left: "أَنَبْنَا", right: "We have turned" },
            { id: "3", left: "الْمَصِيرُ", right: "The final return" },
            { id: "4", left: "فِتْنَةً", right: "A test / trial" },
            { id: "5", left: "يَتَوَلَّ", right: "Turns away" }
          ]
        }
      ]
    },

    // ── 4. TF: Tafheem Lessons ────────────────────────────────────────────
    {
      id: "les-60-1-2-tfa",
      title: "Tafheem A: The Exception of Ibrahim",
      description: "Maududi's commentary Notes 6 & 7",
      icon: "FileText",
      slides: [
        {
          id: "tfa-1",
          type: "theory",
          title: "Denial of Taghut",
          content: "In Ayah 4, Ibrahim's people are told: 'We reject you'. \n\nMaududi explains (E.N. 6): 'We neither consider you to be in the right nor your religion.' This is the inevitable demand of faith in Allah: the denial of Taghut (Satan / false deities). As stated in Al-Baqarah 256, 'Whoever rejects Taghut and believes in Allah has taken a firm support...'"
        },
        {
          id: "tfa-2",
          type: "theory",
          title: "The Exception in Following Ibrahim",
          content: "Ayah 4 explicitly says Ibrahim is an excellent example, **except** for his saying to his father: 'I will pray for your forgiveness'. \n\nMaududi notes (E.N. 7): 'Believers should not have even this much relationship of love and sympathy with the disbelievers... no Muslim is allowed to pray for the forgiveness of his unbelieving kinsmen.'"
        },
        {
          id: "tfa-3",
          type: "quiz",
          title: "Why Did Ibrahim Pray for Him Then?",
          content: "If it's wrong to pray for the forgiveness of a polytheist, why did Prophet Ibrahim (AS) do it in the first place?",
          options: [
            { id: "A", text: "Because his father was secretly a Muslim.", isCorrect: false, explanation: "His father was an open idolater." },
            { id: "B", text: "It was only to fulfill a promise he had made to his father earlier, but when he realized his father was an enemy of Allah, he disowned him.", isCorrect: true, explanation: "As Surah At-Taubah (114) explains, he prayed to fulfill a promise, but broke off ties upon realizing his father's hostility to Allah." }
          ]
        },
        {
          id: "tfa-4",
          type: "fill_in_blank",
          title: "Principles of Emulation",
          content: "From this exception, Maududi derives a principle: We only follow the acts of the Prophets that they ___ practiced until the end, not the acts they gave up or were forbidden from doing.",
          blankAnswer: "persistently"
        }
      ]
    },
    {
      id: "les-60-1-2-tfb",
      title: "Tafheem B: Becoming a Fitnah",
      description: "Maududi's commentary Notes 8, 9, 10",
      icon: "BrainCircuit",
      slides: [
        {
          id: "tfb-1",
          type: "theory",
          title: "How Believers Become a Trial (Fitnah)",
          content: "In Ayah 5, the prayer is: 'O our Lord, make us not a test and trial (Fitnah) for those who disbelieve.'\n\nMaududi explains (E.N. 8) there are three ways this can happen:\n1. The disbelievers gain the upper hand and think this proves they are 'in the right'.\n2. The persecution becomes so unbearable that believers yield and abandon their Faith.\n3. The believers lose their moral superiority, behaving just like the corrupt society around them."
        },
        {
          id: "tfb-2",
          type: "quiz",
          title: "The Danger of Moral Decay",
          content: "According to point 3 above, why is the moral decay of Muslims considered a 'Fitnah' (trial) for the disbelievers?",
          options: [
            { id: "A", text: "Because it gives the disbelievers an excuse to say 'If Islam were true, its followers wouldn't be this corrupt', keeping them away from the truth.", isCorrect: true, explanation: "When Muslims act badly, disbelievers use it to justify their own disbelief, making the Muslims the 'cause' of their trial." },
            { id: "B", text: "Because the disbelievers will become jealous of the Muslims' wealth.", isCorrect: false, explanation: "It is about the loss of moral superiority, not wealth." }
          ]
        },
        {
          id: "tfb-3",
          type: "theory",
          title: "Allah is Self-Sufficient",
          content: "Ayah 6 ends with: 'But whoever turns away... Allah is All-Sufficient (Al-Ghani) and Self-Praiseworthy (Al-Hameed).'\n\nMaududi explains (E.N. 10): Allah has no need of believers who want to maintain friendly relations with His enemies. His Godhead doesn't require acknowledgment. If people affirm faith, it is for their own good, not Allah's."
        }
      ]
    },

    // ── 5. RFL: Reflection Lesson ─────────────────────────────────────────
    {
      id: "les-60-1-2-rfl",
      title: "Reflection: Embodying the Uswah",
      description: "Applying Ibrahim's reliance and avoiding being a Fitnah",
      icon: "Heart",
      slides: [
        {
          id: "rfl-1",
          type: "theory",
          title: "The Ultimate Statement of Tawakkul",
          content: "Ibrahim (AS) told his father: 'I will pray for you, *but I have no power to get anything for you from Allah*.'\n\nEven as a mighty Prophet, he recognized he possessed zero independent power. All power belongs to Allah. This is the essence of Tawakkul (reliance on Allah), which is followed by the beautiful prayer: 'O our Lord, in You alone have we put our trust...'"
        },
        {
          id: "rfl-2",
          type: "quiz",
          title: "Are We a Fitnah Today?",
          content: "Look at the state of the modern Muslim world. If non-Muslims see us being dishonest in business, fighting each other, and breaking our promises, which part of Ibrahim's prayer are we failing?",
          options: [
            { id: "A", text: "We are actively becoming a 'Fitnah' (trial) for the disbelievers by making Islam look unappealing.", isCorrect: true, explanation: "By displaying terrible character, we become the barrier that prevents others from seeing the truth of Islam." },
            { id: "B", text: "We are failing to pray for their forgiveness.", isCorrect: false, explanation: "Praying for their forgiveness was exactly what the Ayah told us NOT to copy from Ibrahim's early life." }
          ]
        },
        {
          id: "rfl-3",
          type: "quiz",
          title: "Spaced Retrieval (from 60.1.1)",
          content: "In the previous lesson, we learned about Hatib's letter. Why was his action a mistake compared to Ibrahim's standard?",
          options: [
            { id: "A", text: "Hatib stopped believing in Allah.", isCorrect: false, explanation: "Hatib remained a believer." },
            { id: "B", text: "Hatib compromised his loyalty to the believers to protect his family, whereas Ibrahim (AS) severed ties with his own father for the sake of Allah.", isCorrect: true, explanation: "Hatib's fear for his family temporarily clouded his Walā' (loyalty). Ibrahim (AS) demonstrated the perfect Walā' to Allah." }
          ]
        }
      ]
    }
  ]
};
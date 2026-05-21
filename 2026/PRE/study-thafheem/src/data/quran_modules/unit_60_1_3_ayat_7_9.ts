import { Unit } from '../../types';

export const UNIT_60_1_3_AYAT_7_9: Unit = {
  id: "unit-60-1-3",
  title: "Ayat 7-9: Justice and Kindness vs Hostility",
  description: "TR · WL · WM · TF (A, B) · RFL",
  color: "duo-orange",
  lessons: [
    // ── 1. TR: Translation Lesson ─────────────────────────────────────────
    {
      id: "les-60-1-3-tr",
      title: "Translation: Ayat 7-9",
      description: "Recitation and meaning of the verses",
      icon: "BookOpen",
      slides: [
        {
          id: "tr-warmup-7",
          type: "quiz",
          title: "Desirable Difficulty",
          content: "Does Islam teach Muslims to hate all non-Muslims and completely boycott them?",
          options: [
            { id: "A", text: "Yes, Muslims are not allowed to be kind to any non-Muslim.", isCorrect: false, explanation: "This is a common misconception directly refuted by Ayat 8 and 9." },
            { id: "B", text: "No, Islam distinguishes between those who fight Muslims and those who live peacefully. Peaceful non-Muslims must be treated with justice and kindness.", isCorrect: true, explanation: "Correct. Ayat 8 and 9 lay down the fundamental Islamic foreign policy regarding non-Muslims." }
          ]
        },
        {
          id: "tr-ayah-7",
          type: "ayah",
          title: "Ayah 7",
          arabicText: "عَسَى اللَّهُ أَن يَجْعَلَ بَيْنَكُمْ وَبَيْنَ الَّذِينَ عَادَيْتُم مِّنْهُم مَّوَدَّةً ۚ وَاللَّهُ قَدِيرٌ ۚ وَاللَّهُ غَفُورٌ رَّحِيمٌ",
          translation: "It may well be that Allah will place love between you and those whose enmity you have now earned. Allah is All-Powerful, and He is All-Forgiving, All-Merciful.",
          transliteration: "Asa Allahu an yaj'ala baynakum wabayna allatheena 'adaytum minhum mawaddatan waAllahu qadeerun waAllahu ghafoorun raheemun"
        },
        {
          id: "tr-ayah-8-part-1",
          type: "ayah",
          title: "Ayah 8 (Part 1)",
          arabicText: "لَّا يَنْهَاكُمُ اللَّهُ عَنِ الَّذِينَ لَمْ يُقَاتِلُوكُمْ فِي الدِّينِ وَلَمْ يُخْرِجُوكُم مِّن دِيَارِكُمْ",
          translation: "Allah does not forbid you to treat kindly and act equitably towards those who have neither fought you in the matter of religion nor driven you out of your homes.",
          transliteration: "la yanhakumu Allahu 'ani allatheena lam yuqatilookum fee addeeni walam yukhrijookum min diyarikum"
        },
        {
          id: "tr-ayah-8-part-2",
          type: "ayah",
          title: "Ayah 8 (Part 2)",
          arabicText: "أَن تَبَرُّوهُمْ وَتُقْسِطُوا إِلَيْهِمْ ۚ إِنَّ اللَّهَ يُحِبُّ الْمُقْسِطِينَ",
          translation: "Indeed Allah loves the just.",
          transliteration: "an tabarroohum watuqsitoo ilayhim inna Allaha yuhibbu almuqsiteena"
        },
        {
          id: "tr-ayah-9-part-1",
          type: "ayah",
          title: "Ayah 9 (Part 1)",
          arabicText: "إِنَّمَا يَنْهَاكُمُ اللَّهُ عَنِ الَّذِينَ قَاتَلُوكُمْ فِي الدِّينِ وَأَخْرَجُوكُم مِّن دِيَارِكُمْ وَظَاهَرُوا عَلَىٰ إِخْرَاجِكُمْ",
          translation: "He only forbids you to take for friends those who fought you in the matter of religion, and drove you out of your homes, and cooperated with others in your expulsion.",
          transliteration: "innama yanhakumu Allahu 'ani allatheena qatalookum fee addeeni waakhrajookum min diyarikum wathaharoo 'ala ikhrajikum"
        },
        {
          id: "tr-ayah-9-part-2",
          type: "ayah",
          title: "Ayah 9 (Part 2)",
          arabicText: "أَن تَوَلَّوْهُمْ ۚ وَمَن يَتَوَلَّهُمْ فَأُولَٰئِكَ هُمُ الظَّالِمُونَ",
          translation: "Those who take them for friends are indeed the wrongdoers.",
          transliteration: "an tawallawhum waman yatawallahum faolaika humu aththalimoona"
        }
      ]
    },

    // ── 2. WL: Word Learn Lesson ──────────────────────────────────────────
    {
      id: "les-60-1-3-wl",
      title: "Word Learn: Core Vocabulary",
      description: "Deep dive into Mawaddah, Tabarruhum, and Tuqsitu",
      icon: "Code",
      slides: [
        {
          id: "wl-mawaddah",
          type: "word_card",
          content: "",
          wordCard: {
            word: "مَّوَدَّةً",
            translation: "Love / Affection",
            context: "Allah says He may place **Mawaddah** between you and your current enemies.",
            example: "وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً",
            exampleTranslation: "And He placed between you affection and mercy.",
            morphology: "**Root:** و - د - د (w-d-d) meaning to love, wish for, or desire. 'Al-Wadood' is one of Allah's names, meaning The Most Loving."
          }
        },
        {
          id: "wl-tabarruhum",
          type: "word_card",
          content: "",
          wordCard: {
            word: "تَبَرُّوهُمْ",
            translation: "You treat them kindly",
            context: "Allah does not forbid that **Tabarruhum** (you treat kindly) those who didn't fight you.",
            example: "وَبَرًّا بِوَالِدَتِي",
            exampleTranslation: "And (He made me) dutiful/kind (Barran) to my mother.",
            morphology: "**Root:** ب - ر - ر (b-r-r) meaning to be righteous, kind, dutiful. 'Birr' is profound goodness and righteousness."
          }
        },
        {
          id: "wl-tuqsitu",
          type: "word_card",
          content: "",
          wordCard: {
            word: "تُقْسِطُوا",
            translation: "You act equitably / justly",
            context: "And that you **Tuqsitu** towards them, for Allah loves the Muqsiteen (the just).",
            example: "وَأَقْسِطُوا ۖ إِنَّ اللَّهَ يُحِبُّ الْمُقْسِطِينَ",
            exampleTranslation: "And act justly. Indeed, Allah loves those who act justly.",
            morphology: "**Root:** ق - س - ط (q-s-t) meaning to act justly, equitably, or impartially."
          }
        },
        {
          id: "wl-tuqsitu-quiz",
          type: "quiz",
          title: "Apply the Concept",
          content: "Which of the following describes treating a peaceful non-Muslim colleague with 'Birr' (Tabarruhum) and 'Qist' (Tuqsitu)?",
          options: [
            { id: "A", text: "Ignoring them completely so you don't compromise your faith.", isCorrect: false, explanation: "Ignoring them is not Birr or Qist." },
            { id: "B", text: "Paying them fairly for their work, checking on them when they are sick, and speaking to them respectfully.", isCorrect: true, explanation: "This is exactly what Allah encourages regarding peaceful non-Muslims." }
          ]
        }
      ]
    },

    // ── 3. WM: Word Meaning Match ─────────────────────────────────────────
    {
      id: "les-60-1-3-wm",
      title: "Match the Meaning",
      description: "Match all Arabic words from Ayat 7-9",
      icon: "Network",
      slides: [
        {
          id: "wm-match-7",
          type: "match_the_following",
          title: "Ayah 7 Vocabulary",
          content: "Match the Arabic words to their English meaning.",
          matchPairs: [
            { id: "1", left: "عَسَى", right: "It may be / Perhaps" },
            { id: "2", left: "يَجْعَلَ", right: "He will place / make" },
            { id: "3", left: "عَادَيْتُم", right: "You earned enmity" },
            { id: "4", left: "مَّوَدَّةً", right: "Love / Affection" },
            { id: "5", left: "قَدِيرٌ", right: "All-Powerful" }
          ]
        },
        {
          id: "wm-match-8",
          type: "match_the_following",
          title: "Ayah 8 Vocabulary",
          content: "Match the Arabic words to their English meaning.",
          matchPairs: [
            { id: "1", left: "لَّا يَنْهَاكُمُ", right: "He does not forbid you" },
            { id: "2", left: "لَمْ يُقَاتِلُوكُمْ", right: "They did not fight you" },
            { id: "3", left: "يُخْرِجُوكُم", right: "They drove you out" },
            { id: "4", left: "تَبَرُّوهُمْ", right: "You treat them kindly" },
            { id: "5", left: "الْمُقْسِطِينَ", right: "The just / The equitable" }
          ]
        },
        {
          id: "wm-match-9",
          type: "match_the_following",
          title: "Ayah 9 Vocabulary",
          content: "Match the Arabic words to their English meaning.",
          matchPairs: [
            { id: "1", left: "إِنَّمَا", right: "He only" },
            { id: "2", left: "وَظَاهَرُوا", right: "And they cooperated / supported" },
            { id: "3", left: "إِخْرَاجِكُمْ", right: "Your expulsion" },
            { id: "4", left: "أَن تَوَلَّوْهُمْ", right: "That you ally with them" },
            { id: "5", left: "الظَّالِمُونَ", right: "The wrongdoers" }
          ]
        }
      ]
    },

    // ── 4. TF: Tafheem Lessons ────────────────────────────────────────────
    {
      id: "les-60-1-3-tfa",
      title: "Tafheem A: From Enmity to Love",
      description: "Maududi's commentary Notes 11 & 12",
      icon: "FileText",
      slides: [
        {
          id: "tfa-1",
          type: "theory",
          title: "A Prophecy Fulfilled",
          content: "In Ayah 7, Allah consoles the believers who had to painfully sever ties with their pagan relatives: 'It may well be that Allah will place love between you and those whose enmity you have now earned.'\n\nMaududi notes (E.N. 11): When this was revealed, no one knew how it would happen. But mere weeks later, Makkah was conquered. The Quraish entered Islam in large numbers, and the bitter enmity turned back into brotherhood and love."
        },
        {
          id: "tfa-2",
          type: "quiz",
          title: "The Definition of Justice",
          content: "Maududi explains (E.N. 12) that treating peaceful non-Muslims kindly is an act of 'Justice'. Why?",
          options: [
            { id: "A", text: "Because 'Justice' means treating every single person identically, whether they are fighting you or not.", isCorrect: false, explanation: "If you treat the enemy and non-enemy exactly the same, you are actually being unjust." },
            { id: "B", text: "Because Justice demands you do not treat the enemy and the non-enemy alike. You must fulfill the rights of blood and humanity for those who haven't harmed you.", isCorrect: true, explanation: "Correct. A stern attitude is for persecutors; kindness is for the peaceful." }
          ]
        }
      ]
    },
    {
      id: "les-60-1-3-tfb",
      title: "Tafheem B: Asma bint Abu Bakr",
      description: "Maududi's commentary Note 13",
      icon: "Users",
      slides: [
        {
          id: "tfb-1",
          type: "theory",
          title: "The Mother of Asma",
          content: "Maududi (E.N. 13) cites a famous incident to explain these verses. \n\nAsma (the daughter of Abu Bakr) had a mother named Qutaylah bint Abdul Uzza, who was a pagan and remained in Makkah. After the Treaty of Hudaibiyah, Qutaylah came to Madinah to visit Asma and brought gifts."
        },
        {
          id: "tfb-2",
          type: "quiz",
          title: "The Prophet's Verdict",
          content: "Initially, Asma refused to let her mother in or accept her gifts until she asked the Prophet (PBUH) for permission. What did the Prophet say?",
          options: [
            { id: "A", text: "'Send her away, for she worships idols.'", isCorrect: false, explanation: "The Prophet permitted her to treat her mother with kindness." },
            { id: "B", text: "'Yes, treat her as your mother.'", isCorrect: true, explanation: "Because Qutaylah was not a combatant or hostile enemy, she deserved the kindness due to a mother." }
          ]
        },
        {
          id: "tfb-3",
          type: "fill_in_blank",
          title: "Legal Implications",
          content: "From this incident, jurists (like Al-Jassas) derive that a Muslim serving and helping his unbelieving parents or relatives is entirely ___, provided they are not actively hostile to Islam.",
          blankAnswer: "permissible"
        },
        {
          id: "tfb-4",
          type: "theory",
          title: "Charity to Non-Muslims",
          content: "Maududi adds that based on these verses, it is also legally permissible for Muslims to spend their optional charities (Sadaqah) on the indigent among the 'Dhimmis' (non-Muslim citizens of an Islamic state)."
        }
      ]
    },

    // ── 5. RFL: Reflection Lesson ─────────────────────────────────────────
    {
      id: "les-60-1-3-rfl",
      title: "Reflection: The Nuance of Islam",
      description: "Balancing boundaries with universal kindness",
      icon: "Heart",
      slides: [
        {
          id: "rfl-1",
          type: "theory",
          title: "Avoiding Extremes",
          content: "Surah Al-Mumtahinah teaches us to avoid two extremes:\n1. **Compromising our faith** out of love for family (like Hatib almost did).\n2. **Becoming harsh and hateful** to everyone who doesn't share our faith.\n\nAllah draws a crystal clear line: Did they fight you over religion? Did they drive you out? If no, be incredibly kind and deeply just to them."
        },
        {
          id: "rfl-2",
          type: "quiz",
          title: "Real World Application",
          content: "You have a Hindu neighbor who always smiles, shares food on festivals, and respects your prayer times. How should you treat them based on Ayah 8?",
          options: [
            { id: "A", text: "Treat them with 'Birr' (profound kindness) and 'Qist' (justice), returning their good treatment and being a good neighbor.", isCorrect: true, explanation: "They fall squarely into the category of those who have not fought you or driven you out." },
            { id: "B", text: "Maintain a strict distance because Ibrahim (AS) disowned his people.", isCorrect: false, explanation: "Ibrahim disowned those who were actively hostile and trying to burn him in a fire. Peaceful coexistence requires Birr." }
          ]
        },
        {
          id: "rfl-3",
          type: "quiz",
          title: "Spaced Retrieval (from 60.1.2)",
          content: "What is the term used in Ayah 4 for the 'excellent example' set by Ibrahim (AS)?",
          options: [
            { id: "A", text: "Uswatun Hasanatun", isCorrect: true, explanation: "Correct!" },
            { id: "B", text: "Fitnatan", isCorrect: false, explanation: "Fitnah means a test or trial." }
          ]
        }
      ]
    }
  ]
};
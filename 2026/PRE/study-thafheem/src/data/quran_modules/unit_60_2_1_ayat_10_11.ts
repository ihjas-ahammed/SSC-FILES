import { Unit } from '../../types';

export const UNIT_60_2_1_AYAT_10_11: Unit = {
  id: "unit-60-2-1",
  title: "Ayat 10-11: The Migrant Women",
  description: "Examination protocol, marital dissolution laws, and financial settlements.",
  color: "duo-green",
  lessons: [
    // ── 1. CTX: Context Lesson ─────────────────────────────────────────────
    {
      id: "les-60-2-1-ctx",
      title: "Context: The Hudaibiyah Exception",
      description: "Why the Prophet refused to return women",
      icon: "Scroll",
      slides: [
        {
          id: "ctx-warmup",
          type: "quiz",
          title: "Treaty Logic",
          content: "The Treaty of Hudaibiyah stated: 'Whoever comes to Muhammad from the Quraish without permission of his guardian, he will return him.' Why did this clause create a crisis?",
          options: [
            { id: "A", text: "Because Muslim women started escaping Makkah, and returning them to pagan husbands was morally impossible.", isCorrect: true, explanation: "Returning a believer to be persecuted is hard; returning a woman to a pagan husband violates the sanctity of marriage in Islam." },
            { id: "B", text: "Because the Quraish ran out of men.", isCorrect: false, explanation: "It was about the vulnerability of female migrants." }
          ]
        },
        {
          id: "ctx-umm-kulthum",
          type: "theory",
          title: "The Case of Umm Kulthum",
          content: "Umm Kulthum bint Uqbah (from the noble clan of Umayyah) escaped Makkah and trekked to Madinah alone. Her two brothers, Walid and Amarah, chased her and demanded the Prophet (PBUH) hand her back under the treaty terms.\n\nThe Prophet (PBUH) refused. He argued that the treaty used the specific word **'Rajul'** (Man), not 'Insan' (Person). The Quraish were dumbfounded because linguistically, he was correct—they had accidentally excluded women from the treaty terms."
        }
      ]
    },

    // ── 2. TR: Translation Lesson ─────────────────────────────────────────
    {
      id: "les-60-2-1-tr",
      title: "Translation: Ayat 10-11",
      description: "Reading the Divine Decree",
      icon: "BookOpen",
      slides: [
        {
          id: "tr-10-1",
          type: "ayah",
          arabicText: "يَا أَيُّهَا الَّذِينَ آمَنُوا إِذَا جَاءَكُمُ الْمُؤْمِنَاتُ مُهَاجِرَاتٍ فَامْتَحِنُوهُنَّ",
          translation: "O you who have believed, when the believing women come to you as emigrants, examine them.",
          transliteration: "Ya ayyuha allatheena amanu itha jaakumu almu'minatu muhajiratin famtahinoohunna"
        },
        {
          id: "tr-10-2",
          type: "ayah",
          arabicText: "اللَّهُ أَعْلَمُ بِإِيمَانِهِنَّ ۖ فَإِنْ عَلِمْتُمُوهُنَّ مُؤْمِنَاتٍ فَلَا تَرْجِعُوهُنَّ إِلَى الْكُفَّارِ",
          translation: "Allah is most knowing as to their faith. And if you know them to be believers, then do not return them to the disbelievers.",
          transliteration: "Allahu a'lamu bi-eemanihinna fa-in 'alimtumoohunna mu'minatin fala tarji'oohunna ila alkuffari"
        },
        {
          id: "tr-10-3",
          type: "ayah",
          arabicText: "لَا هُنَّ حِلٌّ لَّهُمْ وَلَا هُمْ يَحِلُّونَ لَهُنَّ ۖ وَآتُوهُم مَّا أَنفَقُوا",
          translation: "They are not lawful for them, nor are they (the disbelievers) lawful for them. But give the disbelievers what they have spent [of Mahr].",
          transliteration: "La hunna hillun lahum wala hum yahilloona lahunna waatoohum ma anfaqoo"
        },
        {
          id: "tr-10-4",
          type: "ayah",
          arabicText: "وَلَا جُنَاحَ عَلَيْكُمْ أَن تَنكِحُوهُنَّ إِذَا آتَيْتُمُوهُنَّ أُجُورَهُنَّ",
          translation: "And there is no blame upon you if you marry them when you have given them their due compensation [Mahr].",
          transliteration: "Wala junaha 'alaykum an tankihoohunna itha ataytumoohunna ujoorahunna"
        },
        {
          id: "tr-10-5",
          type: "ayah",
          arabicText: "وَلَا تُمْسِكُوا بِعِصَمِ الْكَوَافِرِ وَاسْأَلُوا مَا أَنفَقْتُمْ وَلْيَسْأَلُوا مَا أَنفَقُوا",
          translation: "And do not hold to marriage bonds with disbelieving women, but ask for what you have spent and let them ask for what they have spent.",
          transliteration: "Wala tumsikoo bi'isami alkawafiri was-aloo ma anfaqtum walyas-aloo ma anfaqoo"
        }
      ]
    },

    // ── 3. WL: Word Learn Lesson ──────────────────────────────────────────
    {
      id: "les-60-2-1-wl",
      title: "Word Learn: Legal Terminology",
      description: "Key terms: Imtihan, Isam, Ujur",
      icon: "Code",
      slides: [
        {
          id: "wl-famtahin",
          type: "word_card",
          wordCard: {
            word: "فَامْتَحِنُوهُنَّ",
            translation: "Then Examine/Test them",
            context: "The command that gives the Surah its name: **Al-Mumtahanah** (The Examined One).",
            example: "إِذَا جَاءَكُمُ ... فَامْتَحِنُوهُنَّ",
            exampleTranslation: "When they come... then examine them.",
            morphology: "**Root:** م - ح - ن (m-h-n). <br/>**Meaning:** To test metals to see purity, or test a person to see their sincerity."
          }
        },
        {
          id: "wl-famtahin-quiz",
          type: "quiz",
          title: "Deep Understanding",
          content: "Why uses the root (m-h-n) which implies testing gold? What is being tested?",
          options: [
            { id: "A", text: "Their knowledge of the Quran.", isCorrect: false, explanation: "New converts wouldn't know much Quran yet." },
            { id: "B", text: "The purity of their motive.", isCorrect: true, explanation: "Just as gold is tested for impurities, their migration was tested to ensure it wasn't for worldly gain (marriage, money) but purely for Allah." }
          ]
        },
        {
          id: "wl-isam",
          type: "word_card",
          wordCard: {
            word: "عِصَمِ",
            translation: "Bonds / Ties / Protection",
            context: "Do not hold onto the **Isam** (marriage bonds) of disbelieving women.",
            example: "وَلَا تُمْسِكُوا بِعِصَمِ الْكَوَافِرِ",
            exampleTranslation: "And do not hold to the bonds of disbelieving women.",
            morphology: "**Root:** ع - ص - م (a-s-m). <br/>**Singular:** 'Ismah. It means a strap or rope used to tie something or protect it."
          }
        },
        {
          id: "wl-ujur",
          type: "word_card",
          wordCard: {
            word: "أُجُورَهُنَّ",
            translation: "Their Dowers (Mahr)",
            context: "Pay them their **Ujur** (dowers) before marrying them.",
            example: "إِذَا آتَيْتُمُوهُنَّ أُجُورَهُنَّ",
            exampleTranslation: "When you have given them their dowers.",
            morphology: "**Root:** أ - ج - ر (a-j-r). Literally 'wages' or 'compensation'. In marriage context, it refers to the mandatory Mahr."
          }
        }
      ]
    },

    // ── 4. WM: Word Meaning Match ─────────────────────────────────────────
    {
      id: "les-60-2-1-wm",
      title: "Match the Meaning",
      description: "Master the vocabulary of Ayah 10",
      icon: "Network",
      slides: [
        {
          id: "wm-match-1",
          type: "match_the_following",
          title: "Verbs of Action",
          matchPairs: [
            { id: "1", left: "جَاءَكُمُ", right: "They come to you" },
            { id: "2", left: "فَامْتَحِنُوهُنَّ", right: "Then examine them" },
            { id: "3", left: "عَلِمْتُمُوهُنَّ", right: "You know them" },
            { id: "4", left: "تَرْجِعُوهُنَّ", right: "Return them" },
            { id: "5", left: "تُمْسِكُوا", right: "Hold on to" }
          ]
        },
        {
          id: "wm-match-2",
          type: "match_the_following",
          title: "Legal Nouns",
          matchPairs: [
            { id: "1", left: "مُهَاجِرَاتٍ", right: "Emigrant women" },
            { id: "2", left: "حِلٌّ", right: "Lawful" },
            { id: "3", left: "أُجُورَهُنَّ", right: "Their dowers" },
            { id: "4", left: "عِصَمِ", right: "Bonds (of marriage)" },
            { id: "5", left: "الْكَوَافِرِ", right: "Disbelieving women" }
          ]
        }
      ]
    },

    // ── 5. TF-A: Tafheem Lesson (The Test) ────────────────────────────────
    {
      id: "les-60-2-1-tfa",
      title: "Tafheem A: The Examination",
      description: "How the Prophet tested women",
      icon: "FileText",
      slides: [
        {
          id: "tfa-1",
          type: "theory",
          title: "Method of Examination",
          content: "How did the Prophet (PBUH) 'examine' the women? Ibn Abbas reports that he would take an oath from them:\n\n'By Allah, I have not left for hatred of my husband.'\n'By Allah, I have not left for desire of a new land.'\n'By Allah, I have not left for seeking worldly gain.'\n'By Allah, I have not left except for the love of Allah and His Messenger.'\n\nThis oath confirmed their motive was purely spiritual migration."
        },
        {
          id: "tfa-2",
          type: "quiz",
          title: "Legal Principle",
          content: "Does the examiner need to know the 'secrets of the heart' to judge a person's faith?",
          options: [
            { id: "A", text: "Yes, the judge must have spiritual insight.", isCorrect: false, explanation: "Only Allah knows the heart." },
            { id: "B", text: "No, we judge based on apparent evidence (oaths and declaration).", isCorrect: true, explanation: "Maududi notes: 'Allah alone knows the truth... Muslims have no means to find out whether they have really believed or not.' We judge by the oath. If they lie, it is between them and Allah." }
          ]
        }
      ]
    },

    // ── 6. TF-B: Tafheem Lesson (Marriage Laws) ───────────────────────────
    {
      id: "les-60-2-1-tfb",
      title: "Tafheem B: Marriage Dissolution",
      description: "The separation of spouses due to faith",
      icon: "Scale",
      slides: [
        {
          id: "tfb-1",
          type: "theory",
          title: "Automatic Annulment",
          content: "Ayah 10 establishes a massive legal shift: **Difference of religion (Islam vs Kufr) dissolves the marriage bond.**\n\n1. If a woman becomes Muslim and emigrates, she is **Haram** (unlawful) for her pagan husband.\n2. If a man becomes Muslim, his pagan wife (unless Jewish/Christian) is unlawful for him.\n\nThis ended the early Islamic practice where marriages survived despite religious differences (like the Prophet's daughter Zainab, whose husband remained pagan for years)."
        },
        {
          id: "tfb-2",
          type: "quiz",
          title: "The Case of Umar (RA)",
          content: "Immediately after this verse was revealed, what did Umar bin Khattab do?",
          options: [
            { id: "A", text: "He tried to convert his pagan wives.", isCorrect: false, explanation: "He realized the bond was severed." },
            { id: "B", text: "He divorced his two pagan wives who had remained in Makkah.", isCorrect: true, explanation: "He complied immediately with 'Do not hold to the bonds of disbelieving women' and severed ties." }
          ]
        },
        {
          id: "tfb-3",
          type: "fill_in_blank",
          title: "Status of the Migrant Woman",
          content: "Once a migrant woman is tested and accepted, she is free to marry a Muslim man, provided he pays her a new ___.",
          blankAnswer: "mahr"
        }
      ]
    },

    // ── 7. TF-C: Tafheem Lesson (Financial Laws) ──────────────────────────
    {
      id: "les-60-2-1-tfc",
      title: "Tafheem C: Financial Justice",
      description: "Returning the wealth of disbelievers",
      icon: "Coins",
      slides: [
        {
          id: "tfc-1",
          type: "theory",
          title: "Returning the Mahr",
          content: "Islam commands justice even with enemies. If a woman flees her pagan husband for Islam, the Muslims must **return the Mahr (dower)** that the husband spent on her.\n\nWhy? Because the marriage ended due to a state law (migration/religion), not his fault. It is unjust for him to lose both his wife and his money."
        },
        {
          id: "tfc-2",
          type: "quiz",
          title: "Reciprocity",
          content: "What if a Muslim woman apostatizes and flees to the disbelievers in Makkah? What does the Ayah say?",
          options: [
            { id: "A", text: "The Muslims should ask for her Mahr back from the disbelievers.", isCorrect: true, explanation: "The verse says: 'Ask for what you have spent.' It is a two-way street." },
            { id: "B", text: "Let her go, wealth implies nothing.", isCorrect: false, explanation: "No, financial rights must be claimed." }
          ]
        },
        {
          id: "tfc-3",
          type: "theory",
          title: "State Compensation",
          content: "Ayah 11 addresses the reality: What if the disbelievers refuse to pay back the Mahr for the women who fled to them?\n\n**Ruling:** The Islamic State must compensate the Muslim husbands from the **War Spoils (Ghanimah/Fai)**. The loss of the individual becomes a debt on the State."
        }
      ]
    }
  ]
};
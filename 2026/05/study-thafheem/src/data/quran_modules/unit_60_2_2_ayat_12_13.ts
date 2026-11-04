import { Unit } from '../../types';

export const UNIT_60_2_2_AYAT_12_13: Unit = {
  id: "unit-60-2-2",
  title: "Ayat 12-13: The Women's Bay'ah",
  description: "The oath of allegiance, conditions of society, and final prohibition.",
  color: "duo-blue",
  lessons: [
    // ── 1. CTX: Context Lesson ─────────────────────────────────────────────
    {
      id: "les-60-2-2-ctx",
      title: "Context: The Victory of Makkah",
      description: "When was this Bay'ah taken?",
      icon: "Scroll",
      slides: [
        {
          id: "ctx-fath",
          type: "theory",
          title: "On the Mount of Safa",
          content: "After the Conquest of Makkah, the men pledged allegiance to the Prophet (PBUH) first. Then, the women of Makkah gathered to take the oath.\n\nThe Prophet (PBUH) sat on Mount Safa, with Umar bin Khattab (RA) sitting lower down to convey his words. The Prophet did not shake hands with women; he accepted their verbal pledge, or sometimes used a vessel of water where they dipped their hands."
        },
        {
          id: "ctx-hind",
          type: "quiz",
          title: "The Dialogue of Hind",
          content: "Hind bint Utbah (wife of Abu Sufyan), who had chewed the liver of Hamza (RA), came to pledge in disguise. When the Prophet mentioned 'Do not steal', she interrupted. What did she say?",
          options: [
            { id: "A", text: "'I have never stolen in my life!'", isCorrect: false, explanation: "" },
            { id: "B", text: "'Abu Sufyan is a stingy man; I take from his wealth to feed our children without him knowing.'", isCorrect: true, explanation: "The Prophet smiled and permitted her to take what is reasonable (Ma'ruf). This incident highlights the practical nature of the pledge." }
          ]
        }
      ]
    },

    // ── 2. TR: Translation Lesson ─────────────────────────────────────────
    {
      id: "les-60-2-2-tr",
      title: "Translation: Ayat 12-13",
      description: "The text of the Pledge",
      icon: "BookOpen",
      slides: [
        {
          id: "tr-12-1",
          type: "ayah",
          arabicText: "يَا أَيُّهَا النَّبِيُّ إِذَا جَاءَكَ الْمُؤْمِنَاتُ يُبَايِعْنَكَ",
          translation: "O Prophet, when the believing women come to you to give you their pledge (Bay'ah),",
          transliteration: "Ya ayyuha annabiyyu itha jaaka almu'minatu yubayi'naka"
        },
        {
          id: "tr-12-2",
          type: "ayah",
          arabicText: "عَلَىٰ أَن لَّا يُشْرِكْنَ بِاللَّهِ شَيْئًا وَلَا يَسْرِقْنَ وَلَا يَزْنِينَ",
          translation: "on the condition that they will not associate anything with Allah, nor steal, nor commit adultery...",
          transliteration: "ala an la yushrikna billahi shayan wala yasriqna wala yazneena"
        },
        {
          id: "tr-12-3",
          type: "ayah",
          arabicText: "وَلَا يَقْتُلْنَ أَوْلَادَهُنَّ وَلَا يَأْتِينَ بِبُهْتَانٍ يَفْتَرِينَهُ بَيْنَ أَيْدِيهِنَّ وَأَرْجُلِهِنَّ",
          translation: "nor kill their children, nor bring a calumny they have forged between their hands and feet,",
          transliteration: "wala yaqtulna awladahunna wala yateena bibuhtanin yaftareenahu bayna aydeehinna wa-arjulihinna"
        },
        {
          id: "tr-12-4",
          type: "ayah",
          arabicText: "وَلَا يَعْصِينَكَ فِي مَعْرُوفٍ ۙ فَبَايِعْهُنَّ وَاسْتَغْفِرْ لَهُنَّ اللَّهَ",
          translation: "and that they will not disobey you in what is right (Ma'ruf). Then accept their pledge and ask Allah for forgiveness for them.",
          transliteration: "wala ya'seenaka fee ma'roofin fabayi'hunna wastaghfir lahunna Allaha"
        },
        {
          id: "tr-13",
          type: "ayah",
          arabicText: "يَا أَيُّهَا الَّذِينَ آمَنُوا لَا تَتَوَلَّوْا قَوْمًا غَضِبَ اللَّهُ عَلَيْهِمْ",
          translation: "O you who believe, do not make friends with a people upon whom is the wrath of Allah...",
          transliteration: "Ya ayyuha allatheena amanu la tatawallaw qawman ghadiba Allahu 'alayhim"
        }
      ]
    },

    // ── 3. WL: Word Learn Lesson ──────────────────────────────────────────
    {
      id: "les-60-2-2-wl",
      title: "Word Learn: Ethics",
      description: "Deep dive: Bay'ah, Buhtan, Ma'ruf",
      icon: "Languages",
      slides: [
        {
          id: "wl-bayah",
          type: "word_card",
          wordCard: {
            word: "يُبَايِعْنَكَ",
            translation: "They pledge allegiance to you",
            context: "The Bay'ah is a contract of loyalty between the leader and the citizen.",
            example: "إِذَا جَاءَكَ الْمُؤْمِنَاتُ يُبَايِعْنَكَ",
            exampleTranslation: "When believing women come to pledge allegiance to you.",
            morphology: "**Root:** ب - ي - ع (b-y-a). Related to 'Bay' (Selling). It implies selling one's will/self to Allah in exchange for Paradise."
          }
        },
        {
          id: "wl-buhtan",
          type: "word_card",
          wordCard: {
            word: "بُهْتَانٍ",
            translation: "Calumny / Slander / Falsehood",
            context: "They pledge not to bring a **Buhtan** (falsehood) concerning their lineage.",
            example: "وَلَا يَأْتِينَ بِبُهْتَانٍ يَفْتَرِينَهُ",
            exampleTranslation: "Nor bring a calumny they have forged.",
            morphology: "**Root:** ب - هـ - ت (b-h-t). Meaning to astound or dumbfound with a lie so massive it leaves one speechless."
          }
        },
        {
          id: "wl-maruf",
          type: "word_card",
          wordCard: {
            word: "مَعْرُوفٍ",
            translation: "What is Good / Recognized / Right",
            context: "Obedience to the Prophet is restricted to what is **Ma'ruf**.",
            example: "وَلَا يَعْصِينَكَ فِي مَعْرُوفٍ",
            exampleTranslation: "And they will not disobey you in what is right.",
            morphology: "**Root:** ع - ر - ف (a-r-f). Literally 'Known'. Virtues that human reason and revelation universally recognize as good."
          }
        }
      ]
    },

    // ── 4. WM: Word Meaning Match ─────────────────────────────────────────
    {
      id: "les-60-2-2-wm",
      title: "Match the Meaning",
      description: "Vocabulary check",
      icon: "Network",
      slides: [
        {
          id: "wm-12-1",
          type: "match_the_following",
          title: "Sins Prohibited",
          matchPairs: [
            { id: "1", left: "لَا يُشْرِكْنَ", right: "Not associate partners" },
            { id: "2", left: "لَا يَسْرِقْنَ", right: "Not steal" },
            { id: "3", left: "لَا يَزْنِينَ", right: "Not commit adultery" },
            { id: "4", left: "لَا يَقْتُلْنَ", right: "Not kill" },
            { id: "5", left: "يَعْصِينَكَ", right: "Disobey you" }
          ]
        },
        {
          id: "wm-13-1",
          type: "match_the_following",
          title: "Final Warning Words",
          matchPairs: [
            { id: "1", left: "لَا تَتَوَلَّوْا", right: "Do not befriend" },
            { id: "2", left: "غَضِبَ", right: "Became angry / Wrath" },
            { id: "3", left: "يَئِسُوا", right: "They despaired" },
            { id: "4", left: "أَصْحَابِ الْقُبُورِ", right: "Inhabitants of graves" }
          ]
        }
      ]
    },

    // ── 5. TF-A: Tafheem Lesson (The Conditions) ──────────────────────────
    {
      id: "les-60-2-2-tfa",
      title: "Tafheem A: The 6 Conditions",
      description: "Analysis of the sins mentioned",
      icon: "List",
      slides: [
        {
          id: "tfa-1",
          type: "theory",
          title: "Why these specific sins?",
          content: "The Bay'ah mentions 6 specific conditions:\n1. No Shirk\n2. No Theft\n3. No Zina (Adultery)\n4. No Killing Children (Infanticide/Abortion)\n5. No Slander (Forging False Lineage)\n6. Obedience in Ma'ruf\n\nMaududi notes these were the prevalent evils in pre-Islamic Arab society, especially among women (e.g., wailing over the dead, mixing lineage)."
        },
        {
          id: "tfa-2",
          type: "quiz",
          title: "Killing Children",
          content: "The prohibition 'Do not kill your children' covers which acts according to Tafheem?",
          options: [
            { id: "A", text: "Only the pre-Islamic practice of burying daughters alive.", isCorrect: false, explanation: "It is broader than just historical female infanticide." },
            { id: "B", text: "Burying daughters alive AND abortion (killing the foetus).", isCorrect: true, explanation: "Maududi explicitly states it covers abortion, which is the modern form of 'killing children' for economic or social reasons." }
          ]
        },
        {
          id: "tfa-3",
          type: "theory",
          title: "Understanding 'Buhtan' (Calumny)",
          content: "The phrase 'forging a calumny between hands and feet' is a specific idiom. It refers to a woman attributing a child to her husband when it is actually from another man (adultery). \n\n'Between hands and feet' refers to the child being born from her body. This crime destroys the family lineage system, which Islam protects fiercely."
        }
      ]
    },

    // ── 6. TF-B: Tafheem Lesson (Rule of Law) ─────────────────────────────
    {
      id: "les-60-2-2-tfb",
      title: "Tafheem B: Obedience in Ma'ruf",
      description: "The constitutional limit of authority",
      icon: "Scale",
      slides: [
        {
          id: "tfb-1",
          type: "theory",
          title: "The Limitation on the Prophet",
          content: "The verse says: 'And they will not disobey you **in what is Ma'ruf (Good)**.'\n\nThis is extraordinary. The Prophet (PBUH) never commands anything but good. Yet, Allah imposed this condition to set a **constitutional precedent** for the Ummah: Obedience to ANY leader is conditional upon their command being 'Ma'ruf' (aligned with Shariah/Goodness)."
        },
        {
          id: "tfb-2",
          type: "quiz",
          title: "Blind Obedience",
          content: "Does Islam allow blind obedience to a ruler or scholar?",
          options: [
            { id: "A", text: "Yes, to maintain unity.", isCorrect: false, explanation: "There is no obedience to the creation in disobedience to the Creator." },
            { id: "B", text: "No, if they command a sin, they must not be obeyed.", isCorrect: true, explanation: "This phrase 'in Ma'ruf' kills the concept of absolute dictatorship in Islam. Even the Prophet's authority was textually tied to 'Righteousness'." }
          ]
        },
        {
          id: "tfb-3",
          type: "theory",
          title: "Mourning Practices",
          content: "Maududi notes that one of the 'Ma'ruf' things the Prophet forbade women from doing was **Niyahah** (Wailing over the dead, tearing clothes, slapping cheeks). This was a major part of Jahiliyya culture that the pledge eradicated."
        }
      ]
    },

    // ── 7. RFL: Reflection Lesson ─────────────────────────────────────────
    {
      id: "les-60-2-2-rfl",
      title: "Reflection: The Living Oath",
      description: "Are we fulfilling the pledge?",
      icon: "Heart",
      slides: [
        {
          id: "rfl-1",
          type: "theory",
          title: "The Daily Bay'ah",
          content: "Though we cannot shake the Prophet's hand (or dip ours in his water bowl), every Muslim effectively takes this pledge by accepting Islam.\n\nAsk yourself: Do I engage in 'social theft'? Do I support 'financial adultery' (interest/riba)? Do I participate in 'cultural wailing' (excessive mourning)? The conditions of Ayah 12 define the character of a believer."
        },
        {
          id: "rfl-2",
          type: "quiz",
          title: "Friendship with the Wrath-Earners",
          content: "Ayah 13 closes the Surah by forbidding friendship with those 'upon whom is Allah's wrath'. Maududi identifies these primarily as the Jews of Madinah who plotted against Islam. How do we apply this?",
          options: [
            { id: "A", text: "We should hate everyone who isn't Muslim.", isCorrect: false, explanation: "Ayah 8 already commanded just and kind treatment of peaceful non-Muslims." },
            { id: "B", text: "We should not take as intimate allies those who actively mock, fight, or subvert our Deen.", isCorrect: true, explanation: "Al-Wala wal-Bara is about protecting the spiritual core of the community from those who wish it harm." }
          ]
        }
      ]
    }
  ]
};
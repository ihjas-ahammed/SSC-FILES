export const practiceUnit3 = {
  id: "sec3_practice",
  title: "تدريبات نهاية الفصل",
  lessons: [
    {
      id: "sec3_prac_l1",
      title: "أ) أكمل الفراغ بكلمة مناسبة",
      isPractice: true,
      slides: [
        {
          type: "fill-blank",
          sentence: "اسْتَقَلَّتِ الْهِنْدُ عَامَ ____.",
          translation: "India gained independence in the year 1947.",
          answer: "1947",
          options: ["1947", "1950", "1962"]
        },
        {
          type: "fill-blank",
          sentence: "قُطُب مِينَار بُرْجٌ رَائِعٌ بُنِيَ عَامَ ____ م.",
          translation: "Qutb Minar is a wonderful tower built in 1193 AD.",
          answer: "1193",
          options: ["1657", "1193", "1947"]
        },
        {
          type: "fill-blank",
          sentence: "أَكْرَاه مَدِينَةٌ ازْدَهَرَتْ فِي عَهْدِ الْحَضَارَةِ ____.",
          translation: "The city of Agra flourished during the Mughal civilization era.",
          answer: "الْمَغُولِيَّةِ",
          options: ["الْمَغُولِيَّةِ", "الْبَرِيطَانِيَّةِ", "الْقَدِيمَةِ"]
        },
        {
          type: "fill-blank",
          sentence: "لِوَاءُ الْهِنْدِ ____ اللَّوْنِ الزَّعْفَرَانِيُّ وَالْأَبْيَضُ وَالْأَخْضَرُ.",
          translation: "The flag of India is tricolor: saffron, white, and green.",
          answer: "مُثَلَّثُ",
          options: ["ثُنَائِيُّ", "مُثَلَّثُ", "رُبَاعِيُّ"]
        },
        {
          type: "fill-blank",
          sentence: "مَدِينَةُ ____ تَشْتَهِرُ بِبَوَّابَةِ الْهِنْدِ.",
          translation: "The city of Mumbai is famous for the Gateway of India.",
          answer: "مُومْبَاي",
          options: ["جَايْبُور", "مُومْبَاي", "كُولْكُوتَا"]
        }
      ]
    },
    {
      id: "sec3_prac_l2",
      title: "ب) الاستيعاب (الجزء الأول)",
      isPractice: true,
      slides: [
        {
          type: "sentence-builder",
          questionType: "comprehension",
          question: "مَا عَاصِمَةُ الْهِنْدِ؟",
          correctOrder: [1, 2],
          blocks: [
            { id: 1, text: "مَدِينَةُ", trans: "City of" },
            { id: 2, text: "دِلْهِي", trans: "Delhi" },
            { id: 3, text: "أَكْرَاه", trans: "Agra" }
          ]
        },
        {
          type: "sentence-builder",
          questionType: "comprehension",
          question: "أَيْنَ تَقَعُ تَاج مَحَل؟",
          correctOrder: [1, 2],
          blocks: [
            { id: 1, text: "فِي", trans: "In" },
            { id: 2, text: "أَكْرَاه", trans: "Agra" },
            { id: 3, text: "دِلْهِي", trans: "Delhi" }
          ]
        },
        {
          type: "sentence-builder",
          questionType: "comprehension",
          question: "مَنْ بَنَى مَنَارَةَ قُطُب؟",
          correctOrder: [1, 2, 3],
          blocks: [
            { id: 1, text: "قُطُب", trans: "Qutb" },
            { id: 2, text: "الدِّين", trans: "Al-Din" },
            { id: 3, text: "أَيْبَك", trans: "Aibak" }
          ]
        },
        {
          type: "sentence-builder",
          questionType: "comprehension",
          question: "مَنْ بَنَى الْمَسْجِدَ الْجَامِعَ بِدِلْهِي؟",
          correctOrder: [1, 2],
          blocks: [
            { id: 1, text: "شَاه", trans: "Shah" },
            { id: 2, text: "جَهَان", trans: "Jahan" },
            { id: 3, text: "أَكْبَر", trans: "Akbar" }
          ]
        },
        {
          type: "sentence-builder",
          questionType: "comprehension",
          question: "فِي أَيِّ لُغَةٍ كَانَ كِتَابُ كَلِيلَة وَدِمْنَة؟",
          correctOrder: [1, 2],
          blocks: [
            { id: 1, text: "اللُّغَةِ", trans: "Language" },
            { id: 2, text: "السَّنْسِكْرِيتِيَّةِ", trans: "Sanskrit" },
            { id: 3, text: "الْعَرَبِيَّةِ", trans: "Arabic" }
          ]
        }
      ]
    },
    {
      id: "sec3_prac_l3",
      title: "ب) الاستيعاب (الجزء الثاني)",
      isPractice: true,
      slides: [
        {
          type: "sentence-builder",
          questionType: "comprehension",
          question: "مَنْ شَاه جَهَان؟",
          correctOrder: [1, 2],
          blocks: [
            { id: 1, text: "مَلِكٌ", trans: "King" },
            { id: 2, text: "مَغُولِيٌّ", trans: "Mughal" },
            { id: 3, text: "بَرِيطَانِيٌّ", trans: "British" }
          ]
        },
        {
          type: "sentence-builder",
          questionType: "comprehension",
          question: "مَتَى بُنِيَتْ بَوَّابَةُ الْهِنْدِ فِي مُومْبَاي؟",
          correctOrder: [1, 2, 3, 4],
          blocks: [
            { id: 1, text: "تِذْكَاراً", trans: "As a memorial" },
            { id: 2, text: "لِقُدُومِ", trans: "for the arrival" },
            { id: 3, text: "جُورْج", trans: "George" },
            { id: 4, text: "الْخَامِسِ", trans: "the Fifth" }
          ]
        },
        {
          type: "sentence-builder",
          questionType: "comprehension",
          question: "إِلَى أَيِّ مَلِكٍ يُنْسَبُ شِعَارُ الْهِنْدِ؟",
          correctOrder: [1, 2],
          blocks: [
            { id: 1, text: "أَشُوكَا", trans: "Ashoka" },
            { id: 2, text: "الْمُعَظَّمِ", trans: "The Great" },
            { id: 3, text: "أَكْبَر", trans: "Akbar" }
          ]
        },
        {
          type: "sentence-builder",
          questionType: "comprehension",
          question: "أَيْنَ تَقَعُ أَرْوَعُ حَدِيقَةِ الْحَيَوَانَاتِ فِي جَنُوبِ الْهِنْدِ؟",
          correctOrder: [1, 2],
          blocks: [
            { id: 1, text: "فِي", trans: "In" },
            { id: 2, text: "مَدْرَاس", trans: "Madras" },
            { id: 3, text: "دِلْهِي", trans: "Delhi" }
          ]
        }
      ]
    },
    {
      id: "sec3_prac_l4",
      title: "ج) صل بين العمودين (أ) و (ب)",
      isPractice: true,
      slides: [
        {
          type: "match",
          pairs: [
            { ar: "كَلِيلَة وَدِمْنَة", en: "كِتَابٌ كُتِبَ أَصْلُهُ بِاللُّغَةِ السَّنْسِكْرِيتِيَّةِ" },
            { ar: "ضَرِيح هُومَايُون", en: "اسْتُوحِيَ تَصْمِيم تَاج مَحَل مِنْ تَصْمِيمِهِ" },
            { ar: "تَاج مَحَل", en: "ضَرِيحُ مُمْتَاز زَوْجَة شَاه جَهَان" }
          ]
        },
        {
          type: "match",
          pairs: [
            { ar: "الْمَسْجِد الْجَامِع", en: "بُنِيَ عَامَ 1657م" },
            { ar: "قُطُب مِينَار", en: "بُنِيَ عَامَ 1193م وَيَبْلُغُ ارْتِفَاعُهُ 83 مِتْراً" }
          ]
        }
      ]
    },
    {
      id: "sec3_prac_l5",
      title: "د/هـ) المفرد والجمع",
      isPractice: true,
      slides: [
        {
          type: "match",
          pairs: [
            { ar: "مَعَالِم", en: "مَعْلَم" },
            { ar: "مَسَاجِد", en: "مَسْجِد" },
            { ar: "أَسَاطِير", en: "أُسْطُورَة" },
            { ar: "مَتَاحِف", en: "مَتْحَف" },
            { ar: "قُصُور", en: "قَصْر" }
          ]
        },
        {
          type: "match",
          pairs: [
            { ar: "مُدُن", en: "مَدِينَة" },
            { ar: "أَضْرِحَة", en: "ضَرِيح" },
            { ar: "أَشْهُر", en: "شَهْر" },
            { ar: "مَبَانِي", en: "مَبْنَى" },
            { ar: "جَامِعَات", en: "جَامِعَة" }
          ]
        }
      ]
    },
    {
      id: "sec3_prac_l6",
      title: "ح) الترجمة إلى الإنجليزية (الجزء الأول)",
      isPractice: true,
      slides: [
        {
          type: "sentence-builder",
          questionType: "ar-to-en",
          question: "فِي أَيَّةِ سَاعَةٍ تَنْتَهِضُ مِنَ النَّوْمِ صَبَاحاً يَا جُونْسُون؟",
          correctOrder: [1, 2, 3, 4, 5, 6],
          blocks: [
            { id: 1, text: "At what time", trans: "فِي أَيَّةِ سَاعَةٍ" },
            { id: 2, text: "do you", trans: "" },
            { id: 3, text: "wake up", trans: "تَنْتَهِضُ مِنَ النَّوْمِ" },
            { id: 4, text: "in", trans: "" },
            { id: 5, text: "the morning,", trans: "صَبَاحاً" },
            { id: 6, text: "Johnson?", trans: "يَا جُونْسُون؟" },
            { id: 7, text: "sleep", trans: "" }
          ]
        },
        {
          type: "sentence-builder",
          questionType: "ar-to-en",
          question: "أَبْتَدِئُ أَعْمَالِي الصَّبَاحِيَّةَ فِي السَّاعَةِ السَّابِعَةِ وَالنِّصْفِ.",
          correctOrder: [1, 2, 3, 4, 5, 6],
          blocks: [
            { id: 1, text: "I start", trans: "أَبْتَدِئُ" },
            { id: 2, text: "my morning", trans: "الصَّبَاحِيَّةَ" },
            { id: 3, text: "activities", trans: "أَعْمَالِي" },
            { id: 4, text: "at", trans: "فِي" },
            { id: 5, text: "seven", trans: "السَّابِعَةِ" },
            { id: 6, text: "thirty.", trans: "وَالنِّصْفِ" },
            { id: 7, text: "nine", trans: "" }
          ]
        },
        {
          type: "sentence-builder",
          questionType: "ar-to-en",
          question: "كَيْفَ تُسَافِرُ إِلَى مَكَانِ عَمَلِكَ؟",
          correctOrder: [1, 2, 3, 4, 5, 6],
          blocks: [
            { id: 1, text: "How", trans: "كَيْفَ" },
            { id: 2, text: "do you", trans: "" },
            { id: 3, text: "travel", trans: "تُسَافِرُ" },
            { id: 4, text: "to", trans: "إِلَى" },
            { id: 5, text: "your", trans: "ـكَ" },
            { id: 6, text: "workplace?", trans: "مَكَانِ عَمَلِ" },
            { id: 7, text: "go", trans: "" }
          ]
        },
        {
          type: "sentence-builder",
          questionType: "ar-to-en",
          question: "أَذْهَبُ أَحْيَاناً بِالسَّيَّارَةِ وَأَحْيَاناً عَلَى الدَّرَّاجَةِ إِنَّهُ لَيْسَ بَعِيداً.",
          correctOrder: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
          blocks: [
            { id: 1, text: "I go", trans: "أَذْهَبُ" },
            { id: 2, text: "sometimes", trans: "أَحْيَاناً" },
            { id: 3, text: "by car", trans: "بِالسَّيَّارَةِ" },
            { id: 4, text: "and", trans: "وَ" },
            { id: 5, text: "sometimes", trans: "أَحْيَاناً" },
            { id: 6, text: "by", trans: "عَلَى" },
            { id: 7, text: "bicycle,", trans: "الدَّرَّاجَةِ" },
            { id: 8, text: "it", trans: "إِنَّهُ" },
            { id: 9, text: "is not", trans: "لَيْسَ" },
            { id: 10, text: "far.", trans: "بَعِيداً" },
            { id: 11, text: "close", trans: "" }
          ]
        }
      ]
    },
    {
      id: "sec3_prac_l7",
      title: "ح) الترجمة إلى الإنجليزية (الجزء الثاني)",
      isPractice: true,
      slides: [
        {
          type: "sentence-builder",
          questionType: "ar-to-en",
          question: "هَلْ تَعْمَلُ فِي مَكْتَبٍ حُكُومِيٍّ؟",
          correctOrder: [1, 2, 3, 4, 5, 6],
          blocks: [
            { id: 1, text: "Do you", trans: "هَلْ" },
            { id: 2, text: "work", trans: "تَعْمَلُ" },
            { id: 3, text: "in", trans: "فِي" },
            { id: 4, text: "a", trans: "" },
            { id: 5, text: "government", trans: "حُكُومِيٍّ" },
            { id: 6, text: "office?", trans: "مَكْتَبٍ" },
            { id: 7, text: "school", trans: "" }
          ]
        },
        {
          type: "sentence-builder",
          questionType: "ar-to-en",
          question: "لَا أَنَا أَعْمَلُ فِي بَنْك.",
          correctOrder: [1, 2, 3, 4, 5, 6],
          blocks: [
            { id: 1, text: "No", trans: "لَا" },
            { id: 2, text: "I", trans: "أَنَا" },
            { id: 3, text: "work", trans: "أَعْمَلُ" },
            { id: 4, text: "in", trans: "فِي" },
            { id: 5, text: "a", trans: "" },
            { id: 6, text: "bank.", trans: "بَنْك" }
          ]
        },
        {
          type: "sentence-builder",
          questionType: "ar-to-en",
          question: "هَلْ هُوَ عَمَلٌ مُمْتِعٌ؟",
          correctOrder: [1, 2, 3],
          blocks: [
            { id: 1, text: "Is it", trans: "هَلْ هُوَ" },
            { id: 2, text: "enjoyable", trans: "مُمْتِعٌ" },
            { id: 3, text: "work?", trans: "عَمَلٌ" },
            { id: 4, text: "boring", trans: "" }
          ]
        },
        {
          type: "sentence-builder",
          questionType: "ar-to-en",
          question: "عَلَمُ الْهِنْدِ مُثَلَّثُ اللَّوْنِ.",
          correctOrder: [1, 2, 3, 4, 5],
          blocks: [
            { id: 1, text: "The flag", trans: "عَلَمُ" },
            { id: 2, text: "of", trans: "" },
            { id: 3, text: "India", trans: "الْهِنْدِ" },
            { id: 4, text: "is", trans: "" },
            { id: 5, text: "tricolor.", trans: "مُثَلَّثُ اللَّوْنِ" },
            { id: 6, text: "beautiful", trans: "" }
          ]
        }
      ]
    },
    {
      id: "sec3_prac_l8",
      title: "ط) الترجمة إلى العربية (الجزء الأول)",
      isPractice: true,
      slides: [
        {
          type: "sentence-builder",
          questionType: "en-to-ar",
          question: "It is holiday tomorrow, it is the new year",
          correctOrder: [1, 2, 3, 4, 5],
          blocks: [
            { id: 1, text: "غَداً", trans: "Tomorrow" },
            { id: 2, text: "عُطْلَةٌ،", trans: "holiday" },
            { id: 3, text: "إِنَّهُ", trans: "it is" },
            { id: 4, text: "الْعَامُ", trans: "year" },
            { id: 5, text: "الْجَدِيدُ", trans: "new" }
          ]
        },
        {
          type: "sentence-builder",
          questionType: "en-to-ar",
          question: "Does every one celebrate it?",
          correctOrder: [1, 2, 3, 4],
          blocks: [
            { id: 1, text: "هَلْ", trans: "Does" },
            { id: 2, text: "يَحْتَفِلُ", trans: "celebrate" },
            { id: 3, text: "بِهِ", trans: "it" },
            { id: 4, text: "الْجَمِيعُ؟", trans: "everyone" }
          ]
        },
        {
          type: "sentence-builder",
          questionType: "en-to-ar",
          question: "Yes the most of the people does.",
          correctOrder: [1, 2, 3, 4],
          blocks: [
            { id: 1, text: "نَعَمْ،", trans: "Yes" },
            { id: 2, text: "مُعْظَمُ", trans: "most of" },
            { id: 3, text: "النَّاسِ", trans: "the people" },
            { id: 4, text: "يَفْعَلُونَ.", trans: "does" }
          ]
        }
      ]
    },
    {
      id: "sec3_prac_l9",
      title: "ط) الترجمة إلى العربية (الجزء الثاني)",
      isPractice: true,
      slides: [
        {
          type: "sentence-builder",
          questionType: "en-to-ar",
          question: "Keralites celebrate Onam.",
          correctOrder: [1, 2, 3, 4],
          blocks: [
            { id: 1, text: "يَحْتَفِلُ", trans: "celebrate" },
            { id: 2, text: "أَهْلُ كِيرَالَا", trans: "Keralites" },
            { id: 3, text: "بِمِهْرَجَانِ", trans: "festival of" },
            { id: 4, text: "أُونَام.", trans: "Onam" }
          ]
        },
        {
          type: "sentence-builder",
          questionType: "en-to-ar",
          question: "And all Indians celebrate Independence Day.",
          correctOrder: [1, 2, 3, 4, 5],
          blocks: [
            { id: 1, text: "وَيَحْتَفِلُ", trans: "And celebrate" },
            { id: 2, text: "جَمِيعُ", trans: "all" },
            { id: 3, text: "الْهُنُودِ", trans: "Indians" },
            { id: 4, text: "بِيَوْمِ", trans: "Day" },
            { id: 5, text: "الِاسْتِقْلَالِ.", trans: "Independence" }
          ]
        }
      ]
    }
  ]
};
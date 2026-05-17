export const practiceUnit = {
  id: "sec1_practice",
  title: "End of Chapter Exercises",
  lessons: [
    {
      id: "sec1_prac_l1",
      title: "Fill in the Blanks",
      isPractice: true,
      slides: [
        {
          type: "fill-blank",
          sentence: "تَقَعُ مَدِينَةُ مُونَّار فِي وِلَايَةِ ____",
          translation: "The city of Munnar is located in the state of Kerala.",
          answer: "كِيرَلَا",
          options: ["كِيرَلَا", "تَامِيل نَادُو", "دِلْهِي"]
        },
        {
          type: "fill-blank",
          sentence: "تُعْرَفُ كِيرَلَا عِنْدَ التُّجَّارِ الْعَرَبِ بِاسْمِ ____",
          translation: "Kerala is known to Arab merchants by the name 'God's Bounty'.",
          answer: "خَيْرِ اللهِ",
          options: ["أَرْضِ الْجَمَالِ", "خَيْرِ اللهِ", "بِلَادِ السِّحْرِ"]
        },
        {
          type: "fill-blank",
          sentence: "يَشْتَهِرُ أَهْلُ كُوتْشِين بِالطِّيبَةِ وَ ____ فِي التَّعَامُلِ",
          translation: "The people of Cochin are famous for their kindness and cheerfulness in dealing.",
          answer: "الْبَشَاشَةِ",
          options: ["الْبَشَاشَةِ", "الْقَسْوَةِ", "الْغَضَبِ"]
        },
        {
          type: "fill-blank",
          sentence: "مِنْ أَبْرَزِ الْمَنَاظِرِ فِي طَرِيقِ مُونَّار ____ الْكَثِيفَةُ",
          translation: "One of the most prominent views on the Munnar road is the dense forests.",
          answer: "الْغَابَاتُ",
          options: ["الْغَابَاتُ", "الصَّحَارِي", "الْمَبَانِي"]
        },
        {
          type: "fill-blank",
          sentence: "وَصَفَ الشَّاعِرُ ابْنُ سَعْدٍ الْأَرْضَ بِأَنَّهَا لَبِسَتْ ____",
          translation: "The poet Ibn Sa'd described the earth as having worn a green robe.",
          answer: "رِدَاءً أَخْضَرًا",
          options: ["رِدَاءً أَبْيَضًا", "رِدَاءً أَخْضَرًا", "ثَوْبًا أَزْرَقًا"]
        }
      ]
    },
    {
      id: "sec1_prac_l2",
      title: "Match the Meanings",
      isPractice: true,
      slides: [
        {
          type: "match",
          pairs: [
            { ar: "كِيرَلَا", en: "معروف باسم خير الله" },
            { ar: "أَمْ جِي رُود", en: "شارع حيوي في كوتشين" },
            { ar: "مُونَّار", en: "أرض الشلالات" }
          ]
        },
        {
          type: "match",
          pairs: [
            { ar: "بْلَاك بَرِي", en: "منتجع في سفح جبل" },
            { ar: "مَطَارُ كُوتْشِين", en: "حديث وجميل" },
            { ar: "خَيْرُ اللهِ", en: "Kerala's ancient name" }
          ]
        }
      ]
    },
    {
      id: "sec1_prac_l3",
      title: "Singular and Plural",
      isPractice: true,
      slides: [
        {
          type: "match",
          pairs: [
            { ar: "جِبَال", en: "جَبَل" },
            { ar: "وِدْيَان", en: "وَادٍ" },
            { ar: "أَكْوَاخ", en: "كُوخ" },
            { ar: "مَسَاجِد", en: "مَسْجِد" }
          ]
        },
        {
          type: "match",
          pairs: [
            { ar: "مُدُن", en: "مَدِينَة" },
            { ar: "مَطَارَات", en: "مَطَار" },
            { ar: "فَنَادِق", en: "فُنْدُق" },
            { ar: "أَشْجَار", en: "شَجَرَة" }
          ]
        }
      ]
    },
    {
      id: "sec1_prac_l4",
      title: "Translate to English",
      isPractice: true,
      slides: [
        {
          type: "sentence-builder",
          questionType: "ar-to-en",
          question: "جَوُّ الْيَوْمِ جَمِيلٌ وَمُمْطِرٌ",
          correctOrder: [1, 2, 3, 4, 5, 6],
          blocks: [
            { id: 1, text: "Today's", trans: "" },
            { id: 2, text: "weather", trans: "جَوُّ" },
            { id: 3, text: "is", trans: "" },
            { id: 4, text: "beautiful", trans: "جَمِيلٌ" },
            { id: 5, text: "and", trans: "وَ" },
            { id: 6, text: "rainy", trans: "مُمْطِرٌ" }
          ]
        },
        {
          type: "sentence-builder",
          questionType: "ar-to-en",
          question: "أُحِبُّ السَّفَرَ إِلَى الْأَمَاكِنِ الْهَادِئَةِ",
          correctOrder: [1, 2, 3, 4, 5],
          blocks: [
            { id: 1, text: "I love", trans: "أُحِبُّ" },
            { id: 2, text: "traveling", trans: "السَّفَرَ" },
            { id: 3, text: "to", trans: "إِلَى" },
            { id: 4, text: "quiet", trans: "الْهَادِئَةِ" },
            { id: 5, text: "places", trans: "الْأَمَاكِنِ" }
          ]
        },
        {
          type: "sentence-builder",
          questionType: "ar-to-en",
          question: "الْهِنْدُ بَلَدٌ وَاسِعٌ مُتَعَدِّدُ الثَّقَافَاتِ",
          correctOrder: [1, 2, 3, 4, 5],
          blocks: [
            { id: 1, text: "India", trans: "الْهِنْدُ" },
            { id: 2, text: "is", trans: "" },
            { id: 3, text: "a vast", trans: "وَاسِعٌ" },
            { id: 4, text: "multicultural", trans: "مُتَعَدِّدُ الثَّقَافَاتِ" },
            { id: 5, text: "country", trans: "بَلَدٌ" }
          ]
        },
        {
          type: "sentence-builder",
          questionType: "ar-to-en",
          question: "نَزَلْنَا فِي فُنْدُقٍ قَرِيبٍ مِنَ الْبَحْرِ",
          correctOrder: [1, 2, 3, 4, 5],
          blocks: [
            { id: 1, text: "We stayed", trans: "نَزَلْنَا" },
            { id: 2, text: "in", trans: "فِي" },
            { id: 3, text: "a hotel", trans: "فُنْدُقٍ" },
            { id: 4, text: "near", trans: "قَرِيبٍ مِنَ" },
            { id: 5, text: "the sea", trans: "الْبَحْرِ" }
          ]
        }
      ]
    },
    {
      id: "sec1_prac_l5",
      title: "Translate to Arabic",
      isPractice: true,
      slides: [
        {
          type: "sentence-builder",
          questionType: "en-to-ar",
          question: "The sky is full of clouds.",
          correctOrder: [1, 2, 3],
          blocks: [
            { id: 1, text: "السَّمَاءُ", trans: "The sky" },
            { id: 2, text: "مَلِيئَةٌ", trans: "is full" },
            { id: 3, text: "بِالْغُيُومِ", trans: "of clouds" }
          ]
        },
        {
          type: "sentence-builder",
          questionType: "en-to-ar",
          question: "They visited the resort yesterday.",
          correctOrder: [1, 2, 3],
          blocks: [
            { id: 1, text: "زَارُوا", trans: "They visited" },
            { id: 2, text: "الْمُنْتَجَعَ", trans: "the resort" },
            { id: 3, text: "أَمْسِ", trans: "yesterday" }
          ]
        },
        {
          type: "sentence-builder",
          questionType: "en-to-ar",
          question: "The tea in India is very delicious.",
          correctOrder: [1, 2, 3, 4, 5],
          blocks: [
            { id: 1, text: "الشَّايُ", trans: "The tea" },
            { id: 2, text: "فِي", trans: "in" },
            { id: 3, text: "الْهِنْدِ", trans: "India" },
            { id: 4, text: "لَذِيذٌ", trans: "delicious" },
            { id: 5, text: "جِدًّا", trans: "very" }
          ]
        },
        {
          type: "sentence-builder",
          questionType: "en-to-ar",
          question: "We met kind people in the village.",
          correctOrder: [1, 2, 3, 4, 5],
          blocks: [
            { id: 1, text: "الْتَقَيْنَا", trans: "We met" },
            { id: 2, text: "بِأَشْخَاصٍ", trans: "people" },
            { id: 3, text: "طَيِّبِينَ", trans: "kind" },
            { id: 4, text: "فِي", trans: "in" },
            { id: 5, text: "الْقَرْيَةِ", trans: "the village" }
          ]
        }
      ]
    },
    {
      id: "sec1_prac_l6",
      title: "Comprehension Check",
      isPractice: true,
      slides: [
        {
          type: "sentence-builder",
          questionType: "comprehension",
          question: "لِمَاذَا سُمِّيَتْ مُونَّار بِهَذَا الاِسْمِ؟",
          correctOrder: [1, 2, 3, 4],
          blocks: [
            { id: 1, text: "لِأَنَّهَا", trans: "Because it is" },
            { id: 2, text: "مُلْتَقَى", trans: "confluence" },
            { id: 3, text: "ثَلَاثَةِ", trans: "three" },
            { id: 4, text: "أَنْهَارٍ", trans: "rivers" }
          ]
        },
        {
          type: "sentence-builder",
          questionType: "comprehension",
          question: "مَا مَعْنَى اسْمِ كِيرَلَا كَمَا سَمَّاهَا الْعَرَبُ الْأَوَائِلُ؟",
          correctOrder: [1, 2, 3, 4],
          blocks: [
            { id: 1, text: "سَمَّاهَا", trans: "Named it" },
            { id: 2, text: "الْعَرَبُ", trans: "the Arabs" },
            { id: 3, text: "خَيْرَ", trans: "Bounty of" },
            { id: 4, text: "اللهِ", trans: "Allah" }
          ]
        },
        {
          type: "sentence-builder",
          questionType: "comprehension",
          question: "مَا الْحَيَوَانُ الْعَجِيبُ الَّذِي رَآهُ الْكَاتِبُ فِي الْمُنْتَزَهِ؟",
          correctOrder: [1, 2, 3],
          blocks: [
            { id: 1, text: "الْمَاعِزُ", trans: "The goat" },
            { id: 2, text: "الْجَبَلِيُّ", trans: "mountain" },
            { id: 3, text: "الْمُخَطَّطُ", trans: "striped" }
          ]
        }
      ]
    }
  ]
};
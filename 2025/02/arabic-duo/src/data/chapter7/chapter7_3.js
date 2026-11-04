export const u8_3 = {
  id: "u8_3",
  title: "Layla from the City",
  lessons: [
    {
      id: "u8_3_l1",
      title: "Layla's Arrival",
      slides: [
        {
          type: "sentence",
          arabic: "مَرَّتِ الْأَيَّامُ، وَفِي يَوْمٍ جَاءَتْ إِلَى الْقَرْيَةِ فَتَاةٌ اسْمُهَا لَيْلَى، وَهِيَ ابْنَةُ أَحَدِ التُّجَّارِ الْكِبَارِ فِي الْمَدِينَةِ.",
          english: "Days passed, and one day a girl named Layla came to the village, and she was the daughter of one of the great merchants in the city.",
          parts: [
            { ar: "مَرَّتِ الْأَيَّامُ،", en: "Days passed," },
            { ar: "وَفِي يَوْمٍ جَاءَتْ إِلَى الْقَرْيَةِ فَتَاةٌ اسْمُهَا لَيْلَى،", en: "and one day a girl named Layla came to the village," },
            { ar: "وَهِيَ ابْنَةُ أَحَدِ التُّجَّارِ الْكِبَارِ فِي الْمَدِينَةِ.", en: "and she was the daughter of one of the great merchants in the city." }
          ]
        },
        {
          type: "vocabulary",
          word: "مَدِينَةٌ",
          transliteration: "Madinah",
          translation: "City",
          example: {
            ar: "جَاءَتْ مِنَ الْمَدِينَةِ",
            en: "She came from the city"
          }
        },
        {
          type: "match",
          pairs: [
            { ar: "أَيَّام", en: "Days" },
            { ar: "ابْنَة", en: "Daughter" },
            { ar: "تُجَّار", en: "Merchants" },
            { ar: "مَدِينَة", en: "City" }
          ]
        },
        {
          type: "fill-blank",
          sentence: "وَهِيَ ابْنَةُ أَحَدِ التُّجَّارِ الْكِبَارِ فِي ____",
          translation: "And she was the daughter of one of the great merchants in the city",
          answer: "الْمَدِينَةِ",
          options: ["الْقَرْيَةِ", "الْمَدِينَةِ", "الْبَلَدِ"]
        }
      ]
    },
    {
      id: "u8_3_l2",
      title: "Layla's Luxury",
      slides: [
        {
          type: "sentence",
          arabic: "كَانَتْ لَيْلَى تَزُورُ الْقَرْيَةَ لِقَضَاءِ عُطْلَةٍ قَصِيرَةٍ عِنْدَ أَقَارِبِهَا. كَانَتْ تَرْتَدِي ثِيَابًا فَاخِرَةً وَفِي يَدِهَا هَاتِفُ جَوَّالٍ ثَمِينٌ، وَتَتَكَلَّمُ كَثِيرًا عَنِ السَّفَرِ وَالْمَطَاعِمِ وَالْمَحَالِّ الرَّاقِيَةِ.",
          english: "Layla was visiting the village to spend a short holiday with her relatives. She was wearing luxurious clothes and in her hand was an expensive mobile phone, and she talked a lot about travel, restaurants, and classy stores.",
          parts: [
            { ar: "كَانَتْ لَيْلَى تَزُورُ الْقَرْيَةَ لِقَضَاءِ عُطْلَةٍ قَصِيرَةٍ عِنْدَ أَقَارِبِهَا.", en: "Layla was visiting the village to spend a short holiday with her relatives." },
            { ar: "كَانَتْ تَرْتَدِي ثِيَابًا فَاخِرَةً", en: "She was wearing luxurious clothes" },
            { ar: "وَفِي يَدِهَا هَاتِفُ جَوَّالٍ ثَمِينٌ،", en: "and in her hand was an expensive mobile phone," },
            { ar: "وَتَتَكَلَّمُ كَثِيرًا عَنِ السَّفَرِ وَالْمَطَاعِمِ وَالْمَحَالِّ الرَّاقِيَةِ.", en: "and she talked a lot about travel, restaurants, and classy stores." }
          ]
        },
        {
          type: "vocabulary",
          word: "ثِيَابٌ",
          transliteration: "Thiyab",
          translation: "Clothes",
          example: {
            ar: "كَانَتْ تَرْتَدِي ثِيَابًا فَاخِرَةً",
            en: "She was wearing luxurious clothes"
          }
        },
        {
          type: "match",
          pairs: [
            { ar: "عُطْلَة", en: "Holiday" },
            { ar: "أَقَارِب", en: "Relatives" },
            { ar: "ثِيَاب", en: "Clothes" },
            { ar: "ثَمِين", en: "Expensive" }
          ]
        },
        {
          type: "sentence-builder",
          questionType: "en-to-ar",
          question: "She was wearing luxurious clothes.",
          correctOrder: [1, 2, 3, 4],
          blocks: [
            { id: 1, text: "كَانَتْ", trans: "She was" },
            { id: 2, text: "تَرْتَدِي", trans: "wearing" },
            { id: 3, text: "ثِيَابًا", trans: "clothes" },
            { id: 4, text: "فَاخِرَةً", trans: "luxurious" }
          ]
        }
      ]
    },
    {
      id: "u8_3_l3",
      title: "Layla's Question",
      slides: [
        {
          type: "sentence",
          arabic: "عِنْدَمَا رَأَتْ لَيْلَى عَائِشَةَ تَعْمَلُ فِي الْحَقْلِ تَحْتَ الشَّمْسِ، تَعَجَّبَتْ وَسَأَلَتْهَا قَائِلَةً: \"كَيْفَ تَسْتَطِيعِينَ أَنْ تَعِيشِي هَكَذَا؟ أَلَيْسَ هَذَا مُتْعِبًا؟ أَلَا تَتَمَنَّيْنَ حَيَاةً مِثْلِي فِي الرَّفَاهِيَّةِ؟\"",
          english: "When Layla saw Aisha working in the field under the sun, she was amazed and asked her saying: 'How can you live like this? Isn't this tiring? Don't you wish for a life like mine in luxury?'",
          parts: [
            { ar: "عِنْدَمَا رَأَتْ لَيْلَى عَائِشَةَ تَعْمَلُ فِي الْحَقْلِ تَحْتَ الشَّمْسِ،", en: "When Layla saw Aisha working in the field under the sun," },
            { ar: "تَعَجَّبَتْ وَسَأَلَتْهَا قَائِلَةً:", en: "she was amazed and asked her saying:" },
            { ar: "\"كَيْفَ تَسْتَطِيعِينَ أَنْ تَعِيشِي هَكَذَا؟", en: "\"How can you live like this?" },
            { ar: "أَلَيْسَ هَذَا مُتْعِبًا؟", en: "Isn't this tiring?" },
            { ar: "أَلَا تَتَمَنَّيْنَ حَيَاةً مِثْلِي فِي الرَّفَاهِيَّةِ؟\"", en: "Don't you wish for a life like mine in luxury?\"" }
          ]
        },
        {
          type: "vocabulary",
          word: "تَعَجَّبَتْ",
          transliteration: "Ta'ajjabat",
          translation: "Was amazed / Surprised",
          example: {
            ar: "تَعَجَّبَتْ مِنْ عَمَلِهَا",
            en: "She was amazed by her work"
          }
        },
        {
          type: "fill-blank",
          sentence: "أَلَا تَتَمَنَّيْنَ حَيَاةً مِثْلِي فِي ____؟",
          translation: "Don't you wish for a life like mine in luxury?",
          answer: "الرَّفَاهِيَّةِ",
          options: ["الرَّفَاهِيَّةِ", "الْفَقْرِ", "الْحَقْلِ"]
        }
      ]
    },
    {
      id: "u8_3_l4",
      title: "Tiredness and Joy",
      slides: [
        {
          type: "sentence",
          arabic: "ابْتَسَمَتْ عَائِشَةُ بِهُدُوءٍ وَمَسَحَتِ الْعَرَقَ عَنْ جَبِينِهَا وَقَالَتْ: \"التَّعَبُ لَا يُخِيفُنِي يَا لَيْلَى، فَهُوَ يَجْعَلُنِي أَشْعُرُ بِأَنَّنِي أَعِيشُ مَعَ السُّرُورِ.\"",
          english: "Aisha smiled calmly, wiped the sweat from her forehead, and said: 'Tiredness doesn't frighten me, Layla, for it makes me feel that I am living with joy.'",
          parts: [
            { ar: "ابْتَسَمَتْ عَائِشَةُ بِهُدُوءٍ وَمَسَحَتِ الْعَرَقَ عَنْ جَبِينِهَا وَقَالَتْ:", en: "Aisha smiled calmly, wiped the sweat from her forehead, and said:" },
            { ar: "\"التَّعَبُ لَا يُخِيفُنِي يَا لَيْلَى،", en: "\"Tiredness doesn't frighten me, Layla," },
            { ar: "فَهُوَ يَجْعَلُنِي أَشْعُرُ بِأَنَّنِي أَعِيشُ مَعَ السُّرُورِ.\"", en: "for it makes me feel that I am living with joy.\"" }
          ]
        },
        {
          type: "vocabulary",
          word: "تَعَبٌ",
          transliteration: "Ta'ab",
          translation: "Fatigue / Tiredness",
          example: {
            ar: "التَّعَبُ لَا يُخِيفُنِي",
            en: "Fatigue does not frighten me"
          }
        },
        {
          type: "match",
          pairs: [
            { ar: "عَرَق", en: "Sweat" },
            { ar: "جَبِين", en: "Forehead" },
            { ar: "تَعَب", en: "Tiredness" },
            { ar: "سُرُور", en: "Joy" }
          ]
        },
        {
          type: "sentence-builder",
          questionType: "ar-to-en",
          question: "التَّعَبُ لَا يُخِيفُنِي يَا لَيْلَى",
          correctOrder: [1, 2, 3, 4, 5],
          blocks: [
            { id: 1, text: "Tiredness", trans: "التَّعَبُ" },
            { id: 2, text: "doesn't", trans: "لَا" },
            { id: 3, text: "frighten me,", trans: "يُخِيفُنِي" },
            { id: 4, text: "Oh", trans: "يَا" },
            { id: 5, text: "Layla", trans: "لَيْلَى" }
          ]
        }
      ]
    },
    {
      id: "u8_3_l5",
      title: "A Clear Conscience",
      slides: [
        {
          type: "sentence",
          arabic: "نَحْنُ هُنَا نَعْمَلُ وَنَأْكُلُ مِنْ تَعَبِ أَيْدِينَا، وَنَنَامُ هَادِئِينَ مُرْتَاحِي الضَّمِيرِ.",
          english: "We work here and eat from the toil of our hands, and sleep calmly with a rested conscience.",
          parts: [
            { ar: "نَحْنُ هُنَا نَعْمَلُ وَنَأْكُلُ مِنْ تَعَبِ أَيْدِينَا،", en: "We work here and eat from the toil of our hands," },
            { ar: "وَنَنَامُ هَادِئِينَ مُرْتَاحِي الضَّمِيرِ.", en: "and sleep calmly with a rested conscience." }
          ]
        },
        {
          type: "vocabulary",
          word: "الضَّمِيرِ",
          transliteration: "Ad-damir",
          translation: "Conscience",
          example: {
            ar: "يَنَامُ مُرْتَاحَ الضَّمِيرِ",
            en: "He sleeps with a rested conscience"
          }
        },
        {
          type: "fill-blank",
          sentence: "وَنَنَامُ هَادِئِينَ مُرْتَاحِي ____",
          translation: "And we sleep calmly with a rested conscience",
          answer: "الضَّمِيرِ",
          options: ["الْجِسْمِ", "الضَّمِيرِ", "الْعَقْلِ"]
        }
      ]
    },
    {
      id: "u8_3_l6",
      title: "Comfort in the Heart",
      slides: [
        {
          type: "sentence",
          arabic: "أَمَّا الْمَالُ فَهُوَ يَأْتِي وَيَذْهَبُ فِي سُبُلِهَا، لَكِنَّ الرَّاحَةَ دَائِمَةٌ فِي الْقَلْبِ لَا تُشْتَرَى وَلَا تُبَاعُ.",
          english: "As for money, it comes and goes in its ways, but comfort is permanent in the heart; it cannot be bought or sold.",
          parts: [
            { ar: "أَمَّا الْمَالُ فَهُوَ يَأْتِي وَيَذْهَبُ فِي سُبُلِهَا،", en: "As for money, it comes and goes in its ways," },
            { ar: "لَكِنَّ الرَّاحَةَ دَائِمَةٌ فِي الْقَلْبِ", en: "but comfort is permanent in the heart;" },
            { ar: "لَا تُشْتَرَى وَلَا تُبَاعُ.", en: "it cannot be bought or sold." }
          ]
        },
        {
          type: "vocabulary",
          word: "رَاحَةٌ",
          transliteration: "Rahah",
          translation: "Comfort",
          example: {
            ar: "الرَّاحَةَ دَائِمَةٌ فِي الْقَلْبِ",
            en: "Comfort is permanent in the heart"
          }
        },
        {
          type: "match",
          pairs: [
            { ar: "مَال", en: "Money" },
            { ar: "سُبُل", en: "Ways" },
            { ar: "دَائِمَة", en: "Permanent" },
            { ar: "تُشْتَرَى", en: "Bought" }
          ]
        },
        {
          type: "sentence-builder",
          questionType: "en-to-ar",
          question: "It cannot be bought or sold.",
          correctOrder: [1, 2, 3, 4],
          blocks: [
            { id: 1, text: "لَا", trans: "not" },
            { id: 2, text: "تُشْتَرَى", trans: "be bought" },
            { id: 3, text: "وَلَا", trans: "or not" },
            { id: 4, text: "تُبَاعُ.", trans: "sold" }
          ]
        }
      ]
    }
  ]
};
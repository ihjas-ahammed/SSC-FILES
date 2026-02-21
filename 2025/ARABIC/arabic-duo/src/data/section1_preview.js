export const previewUnit = {
  id: "sec1_preview",
  title: "Section Preview",
  lessons: [
    {
      id: "sec1_prev_l1",
      title: "Preview 1: Basic Words",
      slides: [
        {
          type: "vocabulary",
          word: "شَلَّالَات",
          transliteration: "Shallalat",
          translation: "Waterfalls",
          example: {
            ar: "أَرْضُ الشَّلَّالَاتِ",
            en: "Land of waterfalls"
          }
        },
        {
          type: "match",
          pairs: [
            { ar: "جِبَال", en: "Mountains" },
            { ar: "مُنْتَجَع", en: "Resort" },
            { ar: "بَشَاشَة", en: "Cheerfulness" },
            { ar: "رِحْلَة", en: "Journey" }
          ]
        },
        {
          type: "sentence-builder",
          questionType: "en-to-ar",
          question: "Nature and Faith",
          correctOrder: [1, 2, 3],
          blocks: [
            { id: 1, text: "الطَّبِيعَةُ", trans: "Nature" },
            { id: 2, text: "وَ", trans: "And" },
            { id: 3, text: "الإِيمَانُ", trans: "Faith" }
          ]
        }
      ]
    },
    {
      id: "sec1_prev_l2",
      title: "Preview 2: Complete the Sentence",
      slides: [
        {
          type: "fill-blank",
          sentence: "حَطَّتْ رِحْلَتُنَا فِي ____ كِيرَلَا",
          translation: "Our flight landed in the state of Kerala",
          correctAnswer: "وِلَايَةِ",
          options: ["مَدِينَةِ", "وِلَايَةِ", "قَرْيَةِ"]
        },
        {
          type: "fill-blank",
          sentence: "مُونَّار هِيَ أَرْضُ ____",
          translation: "Munnar is the land of waterfalls",
          correctAnswer: "الشَّلَّالَاتِ",
          options: ["الأَنْهَارِ", "الشَّلَّالَاتِ", "الأَسْوَاقِ"]
        },
        {
          type: "match",
          pairs: [
            { ar: "شَاي", en: "Tea" },
            { ar: "يَنْسَابُ", en: "Flows" },
            { ar: "نَقَاء", en: "Purity" },
            { ar: "مَطَر", en: "Rain" }
          ]
        }
      ]
    },
    {
      id: "sec1_prev_l3",
      title: "Preview 3: Translate",
      slides: [
        {
          type: "sentence-builder",
          questionType: "ar-to-en",
          question: "رَكِبْنَا سَيَّارَةَ أُجْرَةٍ",
          correctOrder: [1, 2, 3],
          blocks: [
            { id: 1, text: "We took", trans: "رَكِبْنَا" },
            { id: 2, text: "a", trans: "" },
            { id: 3, text: "taxi", trans: "سَيَّارَةَ أُجْرَةٍ" }
          ]
        },
        {
          type: "fill-blank",
          sentence: "سَمَّاهَا الْعَرَبُ ____ اللهِ",
          translation: "The Arabs called it God's Bounty (Khayr Allah)",
          correctAnswer: "خَيْرَ",
          options: ["أَرْضَ", "خَيْرَ", "جَمَالَ"]
        },
        {
          type: "sentence-builder",
          questionType: "en-to-ar",
          question: "The heavy rain",
          correctOrder: [1, 2],
          blocks: [
            { id: 1, text: "الْمَطَرَ", trans: "The rain" },
            { id: 2, text: "الْغَزِيرَ", trans: "The heavy" }
          ]
        },
        {
          type: "sentence-builder",
          questionType: "comprehension",
          question: "أَيْنَ هَبَطَتِ الطَّائِرَةُ؟",
          correctOrder: [1, 2],
          blocks: [
            { id: 1, text: "مَطَارِ", trans: "Airport of" },
            { id: 2, text: "كُوتْشِين", trans: "Cochin" }
          ]
        }
      ]
    }
  ]
};
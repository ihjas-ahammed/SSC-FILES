export const previewUnit3 = {
  id: "sec3_preview",
  title: "Section Preview",
  lessons: [
    {
      id: "sec3_prev_l1",
      title: "Preview 1: History and Legends",
      slides: [
        {
          type: "vocabulary",
          word: "الْأَسَاطِيرِ",
          transliteration: "Al-Asateer",
          translation: "Legends / Myths",
          example: { ar: "هِنْدُ أَرْضُ الْأَسَاطِيرِ", en: "India is the land of legends" }
        },
        {
          type: "match",
          pairs: [
            { ar: "قِصَص", en: "Stories" },
            { ar: "حِكْمَة", en: "Wisdom" },
            { ar: "قَلْعَة", en: "Fort/Castle" },
            { ar: "ضَرِيح", en: "Tomb" }
          ]
        },
        {
          type: "sentence-builder",
          questionType: "ar-to-en",
          question: "الْهِنْدُ أَرْضُ الْحِكْمَةِ",
          correctOrder: [1, 2, 3, 4, 5],
          blocks: [
            { id: 1, text: "India", trans: "الْهِنْدُ" },
            { id: 2, text: "is", trans: "" },
            { id: 3, text: "the land", trans: "أَرْضُ" },
            { id: 4, text: "of", trans: "" },
            { id: 5, text: "wisdom", trans: "الْحِكْمَةِ" }
          ]
        }
      ]
    },
    {
      id: "sec3_prev_l2",
      title: "Preview 2: Famous Landmarks",
      slides: [
        {
          type: "fill-blank",
          sentence: "بُنِيَ تَاج مَحَل فِي مَدِينَةِ ____",
          translation: "Taj Mahal was built in the city of Agra",
          answer: "أَكْرَاه",
          options: ["مَدْرَاس", "أَكْرَاه", "مُومْبَاي"]
        },
        {
          type: "sentence",
          arabic: "دِلْهِي هِيَ عَاصِمَةُ الْهِنْدِ وَمَدِينَةٌ حَافِلَةٌ بِالْمُفَاجَآتِ",
          english: "Delhi is the capital of India and a city full of surprises"
        },
        {
          type: "match",
          pairs: [
            { ar: "عَاصِمَة", en: "Capital" },
            { ar: "مُفَاجَآت", en: "Surprises" },
            { ar: "مُسْتَقِلَّة", en: "Independent" },
            { ar: "مُزْدَحِمَة", en: "Crowded" }
          ]
        }
      ]
    }
  ]
};
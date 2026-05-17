export const previewUnit_ch2 = {
  id: "sec6_preview",
  title: "Section Preview",
  lessons: [
    {
      id: "sec6_prev_l1",
      title: "Preview 1: Core Vocabulary",
      slides: [
        {
          type: "vocabulary",
          word: "إِدْمَان",
          transliteration: "Idman",
          translation: "Addiction",
          example: { ar: "مَرْكَزُ عِلَاجِ الإِدْمَانِ", en: "Addiction treatment center" }
        },
        {
          type: "match",
          pairs: [
            { ar: "إِهْمَال", en: "Neglect" },
            { ar: "تَدْبِير", en: "Management" },
            { ar: "نَفْسَانِي", en: "Psychological" },
            { ar: "النَّشْوَة", en: "Intoxication/Ecstasy" }
          ]
        },
        {
          type: "sentence-builder",
          questionType: "en-to-ar",
          question: "Addiction treatment center",
          correctOrder: [1, 2, 3],
          blocks: [
            { id: 1, text: "مَرْكَزُ", trans: "Center" },
            { id: 2, text: "عِلَاجِ", trans: "treatment" },
            { id: 3, text: "الإِدْمَانِ", trans: "addiction" }
          ]
        }
      ]
    },
    {
      id: "sec6_prev_l2",
      title: "Preview 2: Test Your Sentences",
      slides: [
        {
          type: "fill-blank",
          sentence: "كَانَتْ أُمِّي ____ حَتَّى كَادَتْ تَمُوت.",
          translation: "My mother kept crying until she almost died.",
          answer: "تَبْكِي",
          options: ["تَضْحَكُ", "تَبْكِي", "تَنَامُ"]
        },
        {
          type: "match",
          pairs: [
            { ar: "اكْتِرَاث", en: "Concern/Care" },
            { ar: "مَعَابِد", en: "Temples" },
            { ar: "عَزْم", en: "Determination" },
            { ar: "ارْتِطَام", en: "Collision" }
          ]
        }
      ]
    }
  ]
};
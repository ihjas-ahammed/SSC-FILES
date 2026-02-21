export const previewUnit2 = {
  id: "sec2_preview",
  title: "Section Preview",
  lessons: [
    {
      id: "sec2_prev_l1",
      title: "Core Concepts",
      slides: [
        {
          type: "vocabulary",
          word: "الْبِيئَةُ",
          transliteration: "Al-bee'ah",
          translation: "The Environment",
          example: {
            ar: "حِمَايَةُ الْبِيئَةِ وَاجِبٌ",
            en: "Protecting the environment is a duty"
          }
        },
        {
          type: "match",
          pairs: [
            { ar: "أَرْض", en: "Earth/Land" },
            { ar: "مَاء", en: "Water" },
            { ar: "هَوَاء", en: "Air" },
            { ar: "نَبَاتَات", en: "Plants" }
          ]
        },
        {
          type: "sentence-builder",
          questionType: "en-to-ar",
          question: "Protecting the environment is a duty",
          correctOrder: [1, 2, 3],
          blocks: [
            { id: 1, text: "حِمَايَةُ", trans: "Protecting" },
            { id: 2, text: "الْبِيئَةِ", trans: "Environment" },
            { id: 3, text: "وَاجِبٌ", trans: "Duty" }
          ]
        }
      ]
    },
    {
      id: "sec2_prev_l2",
      title: "Islamic View",
      slides: [
        {
          type: "fill-blank",
          sentence: "الإِنْسَانُ ____ اللهِ فِي الْأَرْضِ",
          translation: "Man is Allah's successor (caliph) on earth",
          correctAnswer: "خَلِيفَةُ",
          options: ["عَدُوُّ", "خَلِيفَةُ", "صَدِيقُ"]
        },
        {
          type: "fill-blank",
          sentence: "نَهَى الْإِسْلَامُ عَنِ ____ فِي الْمَاءِ",
          translation: "Islam forbade extravagance (waste) in water",
          correctAnswer: "الْإِسْرَافِ",
          options: ["الشُّرْبِ", "الْإِسْرَافِ", "اللَّعِبِ"]
        },
        {
          type: "match",
          pairs: [
            { ar: "أَمَانَة", en: "Trust" },
            { ar: "إِفْسَاد", en: "Corruption" },
            { ar: "صَدَقَة", en: "Charity" },
            { ar: "وُضُوء", en: "Ablution" }
          ]
        }
      ]
    }
  ]
};
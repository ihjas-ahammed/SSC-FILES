export const unit8 = {
  id: "u8",
  title: "The National Park",
  lessons: [
    {
      id: "u8_l1",
      title: "Wildlife",
      slides: [
        {
          type: "sentence",
          arabic: "زُرْنَا الْمُنْتَزَهَ الْوَطَنِيَّ.",
          english: "We visited the National Park.",
          parts: [{ ar: "زُرْنَا", en: "We visited" }, { ar: "الْمُنْتَزَهَ الْوَطَنِيَّ.", en: "the National Park." }]
        },
        { type: "vocabulary", word: "الْمُنْتَزَهَ", transliteration: "Al-muntazah", translation: "Park" }
      ]
    },
    {
      id: "u8_l2",
      title: "The Rare Goat",
      slides: [
        {
          type: "sentence",
          arabic: "رَأَيْنَا الْمَاعِزَ الْجَبَلِيَّ الْمُخَطَّطُ.",
          english: "We saw the striped mountain goat.",
          parts: [{ ar: "رَأَيْنَا", en: "We saw" }, { ar: "الْمَاعِزَ الْجَبَلِيَّ الْمُخَطَّطُ.", en: "the striped mountain goat." }]
        },
        { type: "vocabulary", word: "الْمُخَطَّطُ", transliteration: "Al-mukhattatu", translation: "Striped" },
        { type: "fill-blank", sentence: "رَأَيْنَا الْمَاعِزَ الْجَبَلِيَّ ____", answer: "الْمُخَطَّطُ", options: ["الْمُخَطَّطُ", "الْأَسْوَدُ", "الْأَبْيَضُ"] }
      ]
    }
  ]
};
export const unit2 = {
  id: "u2",
  title: "The Three Rivers",
  lessons: [
    {
      id: "u2_l1",
      title: "The Naming",
      slides: [
        {
          type: "sentence",
          arabic: "سُمِّيَتْ بِهَذَا الاِسْمِ لِأَنَّهَا ثَلَاثَةُ أَنْهَارٍ.",
          english: "It was named by this name because it is three rivers.",
          parts: [{ ar: "سُمِّيَتْ بِهَذَا الاِسْمِ", en: "It was named by this name" }, { ar: "لِأَنَّهَا ثَلَاثَةُ أَنْهَارٍ.", en: "because it is three rivers." }]
        },
        { type: "vocabulary", word: "أَنْهَارٍ", transliteration: "Anhar", translation: "Rivers" }
      ]
    },
    {
      id: "u2_l2",
      title: "The Confluence",
      slides: [
        {
          type: "sentence",
          arabic: "تَسِيلُ مِنْ هَذَا الْمُلْتَقِي كَنَهْرٍ وَاحِدٍ.",
          english: "They flow from this meeting point as one river.",
          parts: [{ ar: "تَسِيلُ مِنْ هَذَا الْمُلْتَقِي", en: "They flow from this meeting point" }, { ar: "كَنَهْرٍ وَاحِدٍ.", en: "as one river." }]
        },
        { type: "vocabulary", word: "الْمُلْتَقِي", transliteration: "Al-multaqi", translation: "Meeting point" },
        { type: "fill-blank", sentence: "سُمِّيَتْ بِهَذَا الاِسْمِ لِأَنَّهَا ثَلَاثَةُ ____", answer: "أَنْهَارٍ", options: ["أَنْهَارٍ", "جِبَالٍ", "بِحَارٍ"] }
      ]
    }
  ]
};
// Chapter 9 — Songs of Life (أَغَانِي الْحَيَاةِ) — Poem by Al-Shabbi
export const chapter9Data = {
  "sec9-9": {
    grammarChoices: [
      { question: "سَارَ الشَّاعِرُ ___ الْفَجْرِ", en_translation: "The poet walked ___ dawn", options: ["وَقْتَ", "عَنْ", "مِنْ"], answer: "وَقْتَ", en_options: ["at time of", "about", "from"] },
      { question: "خَرِيرُ النَّهْرِ ___", en_translation: "The gurgling of the river is ___", options: ["سَكْرَانٌ", "سَكْرَانٍ", "سَكْرَانًا"], answer: "سَكْرَانٌ", en_options: ["drunk (nom)", "drunk (gen)", "drunk (acc)"] },
      { question: "جَلَسَتْ بَلْقِيسُ ___ الْعَرْشِ", en_translation: "Bilqis sat ___ the throne", options: ["عَلَى", "فِي", "إِلَى"], answer: "عَلَى", en_options: ["on", "in", "to"] },
      { question: "نَسِيمُ الصُّبْحِ ___ سَجْسَجًا", en_translation: "The morning breeze ___ gently", options: ["يَسْرِي", "تَسْرِي", "نَسْرِي"], answer: "يَسْرِي", en_options: ["flows (m)", "flows (f)", "we flow"] },
      { question: "تَتَفَتَّحُ الأَزْهَارُ ___ الصَّبَاحِ", en_translation: "The flowers bloom ___ morning", options: ["وَقْتَ", "بَعْدَ", "قَبْلَ"], answer: "وَقْتَ", en_options: ["at time of", "after", "before"] },
      { question: "اَلشَّاعِرُ وَصَفَ النَّهَرَ بِأَنَّهُ ___ مِنَ الْجَمَالِ", en_translation: "The poet described the river as ___ with beauty", options: ["سَكْرَانٌ", "نَاعِمٌ", "صَاخِبٌ"], answer: "سَكْرَانٌ", en_options: ["drunk (m)", "soft (m)", "noisy (m)"] }
    ],
    singularPlural: [
      { type: "to_singular", q: "رِيَاضٌ", a: "رَوْضٌ", en: "Gardens → Garden" },
      { type: "to_singular", q: "أَزْهَارٌ", a: "زَهْرَةٌ", en: "Flowers → Flower" },
      { type: "to_plural", q: "نَهَرٌ", a: "أَنْهَارٌ", en: "River → Rivers" },
      { type: "to_plural", q: "كَأْسٌ", a: "كُؤُوسٌ", en: "Cup → Cups" },
      { type: "to_singular", q: "قَصَائِدُ", a: "قَصِيدَةٌ", en: "Poems → Poem" },
      { type: "to_plural", q: "نَجْمٌ", a: "نُجُومٌ", en: "Star → Stars" }
    ],
    fillBlanks: [
      { question: "اسْتَمْتَعَ الشَّاعِرُ بِـ ___ النَّهْرِ", en: "The poet enjoyed the ___ of the river", answer: "خَرِيرِ", options: ["خَرِيرِ", "هُدُوءِ", "حَرَارَةِ"] },
      { question: "تَتَفَتَّحُ ___ فِي الرَّوْضِ وَقْتَ الصَّبَاحِ", en: "The ___ bloom in the garden in the morning", answer: "الأَزْهَارُ", options: ["الْغُيُومُ", "الأَزْهَارُ", "الصُّخُورُ"] },
      { question: "اعْتَلَتْ بَلْقِيسُ ___ اللَّيْلِ", en: "Bilqis ascended the ___ of the night", answer: "عَرْشَ", options: ["عَرْشَ", "بَابَ", "شَجَرَةَ"] },
      { question: "نَسِيمُ الصُّبْحِ يَسْرِي فَوْقَ ___", en: "The morning breeze flows above the ___", answer: "الْبِطَاحِ", options: ["الْجِبَالِ", "الْبِطَاحِ", "السَّمَاءِ"] },
      { question: "شَبَّهَ الشَّاعِرُ الْفَجْرَ بِطَائِرٍ لَهُ ___", en: "The poet likened dawn to a bird with a ___", answer: "جَنَاحٌ", options: ["مِنْقَارٌ", "جَنَاحٌ", "رِيشٌ"] },
      { question: "كَانَتِ الأَقَاحِي تَحْتَسِي ___ اللَّيْلِ", en: "The daisies were sipping the ___ of night", answer: "نَدَى", options: ["ضَوْءَ", "نَدَى", "هَوَاءَ"] }
    ],
    formQuestions: [
      { statement: "سَارَ الشَّاعِرُ فِي الرَّوْضِ.", en_statement: "The poet walked in the garden.", question: "أَيْنَ سَارَ الشَّاعِرُ؟", en_question: "Where did the poet walk?" },
      { statement: "تَتَفَتَّحُ الأَزْهَارُ وَقْتَ الْفَجْرِ.", en_statement: "The flowers bloom at dawn.", question: "مَتَى تَتَفَتَّحُ الأَزْهَارُ؟", en_question: "When do the flowers bloom?" },
      { statement: "اِحْتَسَتِ الأَقَاحِي نَدَى اللَّيْلِ.", en_statement: "The daisies sipped the night dew.", question: "مَاذَا اِحْتَسَتِ الأَقَاحِي؟", en_question: "What did the daisies sip?" },
      { statement: "اَلنَّهَرُ سَكْرَانٌ مِنَ الْجَمَالِ.", en_statement: "The river is drunk with beauty.", question: "بِمَ وَصَفَ الشَّاعِرُ النَّهَرَ؟", en_question: "How did the poet describe the river?" },
      { statement: "جَلَسَتْ بَلْقِيسُ عَلَى عَرْشِ اللَّيْلِ.", en_statement: "Bilqis sat on the throne of night.", question: "أَيْنَ جَلَسَتْ بَلْقِيسُ؟", en_question: "Where did Bilqis sit?" },
      { statement: "نَسِيمُ الصُّبْحِ يَسْرِي سَجْسَجًا فَوْقَ الْبِطَاحِ.", en_statement: "The morning breeze flows gently above the plains.", question: "كَيْفَ يَسْرِي نَسِيمُ الصُّبْحِ؟", en_question: "How does the morning breeze flow?" }
    ],
    shortQA: [
      { q: "فِي أَيِّ وَقْتٍ سَارَ الشَّاعِرُ فِي الرَّوْضِ؟", en_q: "At what time did the poet walk in the garden?", a: "سَارَ الشَّاعِرُ فِي وَقْتِ بُزُوغِ الْفَجْرِ الأَوَّلِ.", en_a: "The poet walked at the time of the first break of dawn.", keywords: ["وَقْتِ الْفَجْرِ"] },
      { q: "كَيْفَ وَصَفَ الشَّاعِرُ صَوْتَ النَّهْرِ؟", en_q: "How did the poet describe the sound of the river?", a: "وَصَفَهُ بِأَنَّهُ خَرِيرٌ سَكْرَانٌ.", en_a: "He described it as a drunken gurgling.", keywords: ["خَرِيرٌ سَكْرَانٌ"] },
      { q: "مَاذَا كَانَتْ تَفْعَلُ أَزْهَارُ الأَقَاحِي؟", en_q: "What were the daisy flowers doing?", a: "كَانَتْ تَحْتَسِي قَطَرَاتِ النَّدَى كَأَنَّهَا خَمْرٌ.", en_a: "They were sipping dew drops as if they were wine.", keywords: ["تَحْتَسِي", "قَطَرَاتِ النَّدَى"] },
      { q: "مَنِ الَّتِي جَلَسَتْ عَلَى عَرْشِ اللَّيْلِ فِي الْقَصِيدَةِ؟", en_q: "Who sat on the throne of night in the poem?", a: "الْمَلِكَةُ بَلْقِيسُ.", en_a: "Queen Bilqis.", keywords: ["الْمَلِكَةُ بَلْقِيسُ"] },
      { q: "مَا الصُّورَةُ الَّتِي رَسَمَهَا الشَّاعِرُ لِلْفَجْرِ؟", en_q: "What image did the poet draw for dawn?", a: "شَبَّهَ الشَّاعِرُ الْفَجْرَ بِطَائِرٍ لَهُ جَنَاحٌ يَنْشُرُ الضَّوْءَ.", en_a: "The poet likened dawn to a bird with a wing that spreads light.", keywords: ["طَائِرٍ", "جَنَاحٌ", "يَنْشُرُ الضَّوْءَ"] },
      { q: "مَنْ هُوَ أَبُو الْقَاسِمِ الشَّابِّي؟", en_q: "Who is Abu Al-Qasim Al-Shabbi?", a: "شَاعِرٌ تُونِسِيٌّ عَظِيمٌ عُرِفَ بِشِعْرِهِ الرُّومَانْسِيِّ وَحُبِّهِ لِلطَّبِيعَةِ وَالْحُرِّيَّةِ.", en_a: "A great Tunisian poet known for his romantic poetry and love of nature and freedom.", keywords: ["تُونِسِيٌّ", "الطَّبِيعَةِ", "الْحُرِّيَّةِ"] }
    ],
    longQA: [
      { q: "اِشْرَحِ الصُّوَرَ الْفَنِّيَّةَ فِي وَصْفِ الشَّاعِرِ لِلْفَجْرِ وَالطَّبِيعَةِ.", en_q: "Explain the artistic imagery in the poet's description of dawn and nature.", a: "شَبَّهَ الشَّاعِرُ الْفَجْرَ بِطَائِرٍ لَهُ جَنَاحٌ، وَاللَّيْلَ بِامْرَأَةٍ غَيْدَاءَ تَمْشِي بِبُطْءٍ. وَشَبَّهَ النَّهَرَ بِالإِنْسَانِ السَّكْرَانِ مِنْ جَمَالِ الطَّبِيعَةِ، وَالأَزْهَارَ بِأَشْخَاصٍ يَشْرَبُونَ خَمْرَ النَّدَى، مِمَّا يُضْفِي عَلَى الطَّبِيعَةِ حَيَاةً إِنْسَانِيَّةً نَابِضَةً.", en_a: "The poet likened dawn to a bird with a wing, and night to an elegant woman walking slowly. He likened the river to a man drunk with nature's beauty, and flowers to people drinking the wine of dew, which gives nature a vibrant human life.", keywords: ["طَائِرٍ", "امْرَأَةٍ غَيْدَاءَ", "الإِنْسَانِ السَّكْرَانِ"] },
      { q: "مَا الْفِكْرَةُ الرَّئِيسِيَّةُ الَّتِي أَرَادَ أَبُو الْقَاسِمِ الشَّابِّي إِيصَالَهَا مِنْ خِلَالِ الْقَصِيدَةِ؟", en_q: "What is the main idea that Abu Al-Qasim Al-Shabbi wanted to convey through the poem?", a: "أَرَادَ إِبْرَازَ سِحْرِ الطَّبِيعَةِ وَقْتَ الْفَجْرِ وَاِنْبِعَاثَ الْحَيَاةِ وَالأَمَلِ. اَلطَّبِيعَةُ فِي نَظَرِهِ حَيَّةٌ وَتَتَفَاعَلُ مَعَ الْكَوْنِ فِي مَشْهَدٍ مَلِيءٍ بِالنَّشْوَةِ وَالْجَمَالِ قَبْلَ بُزُوغِ الشَّمْسِ بِالْكَامِلِ.", en_a: "He wanted to highlight the magic of nature at dawn and the emergence of life and hope. Nature in his eyes is alive and interacts with the universe in a scene full of ecstasy and beauty before the sun fully rises.", keywords: ["سِحْرِ الطَّبِيعَةِ", "اِنْبِعَاثَ الْحَيَاةِ وَالأَمَلِ"] },
      { q: "كَيْفَ وَظَّفَ الشَّاعِرُ أُسْلُوبَ التَّشْخِيصِ فِي الْقَصِيدَةِ؟", en_q: "How did the poet use the technique of personification in the poem?", a: "وَظَّفَ الشَّاعِرُ التَّشْخِيصَ بِإِعْطَاءِ الطَّبِيعَةِ صِفَاتٍ إِنْسَانِيَّةً؛ فَالنَّهَرُ سَكْرَانٌ، وَالأَزْهَارُ تَشْرَبُ، وَبَلْقِيسُ تَجْلِسُ عَلَى عَرْشِ اللَّيْلِ. هَذَا أَضْفَى حَيَاةً وَحَرَكَةً عَلَى الْمَشْهَدِ الطَّبِيعِيِّ.", en_a: "The poet used personification by giving nature human qualities; the river is drunk, the flowers drink, and Bilqis sits on the throne of night. This added life and movement to the natural scene.", keywords: ["التَّشْخِيصَ", "صِفَاتٍ إِنْسَانِيَّةً", "حَيَاةً وَحَرَكَةً"] }
    ]
  }
};

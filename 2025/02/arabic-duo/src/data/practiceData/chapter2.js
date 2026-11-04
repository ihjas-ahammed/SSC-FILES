// Chapter 2 — Drugs (اَلْمُخَدِّرَات)
export const chapter2Data = {
  "sec6-2": {
    grammarChoices: [
      { question: "كَانَتْ أُمِّي ___ طُولَ اللَّيْلِ", en_translation: "My mother was ___ all night", options: ["يَبْكِي", "تَبْكِي", "أَبْكِي"], answer: "تَبْكِي", en_options: ["crying (m)", "crying (f)", "crying (I)"] },
      { question: "تَعَرَّفْتُ ___ رَجُلٍ غَرِيبٍ", en_translation: "I met ___ a strange man", options: ["فِي", "عَنْ", "عَلَى"], answer: "عَلَى", en_options: ["in", "about", "on (met with)"] },
      { question: "أَصْبَحْتُ طَبِيبًا ___ لِعِلَاجِ الْمُدْمِنِينَ", en_translation: "I became a ___ doctor to treat addicts", options: ["نَفْسَانِيًّا", "نَفْسَانِيٌّ", "نَفْسَانِيَّةٌ"], answer: "نَفْسَانِيًّا", en_options: ["psychiatric (acc)", "psychiatric (nom)", "psychiatric (f)"] },
      { question: "اَلْخَطَرُ كَانَ مُتَرَصِّدًا كَالـ ___", en_translation: "The danger was lurking like a ___", options: ["نَمِرٍ", "فَأْرٍ", "عُصْفُورٍ"], answer: "نَمِرٍ", en_options: ["tiger", "mouse", "bird"] },
      { question: "سَكَبَ الرَّجُلُ مَوَادَّ مُنَشِّطَةً فِي ___", en_translation: "The man poured stimulants into ___", options: ["الطَّعَامِ", "الْعَصِيرِ", "الْمَاءِ"], answer: "الْعَصِيرِ", en_options: ["the food", "the juice", "the water"] },
      { question: "دَخَلَ الشَّابُّ مَرْكَزَ عِلَاجِ ___ بَعْدَ شِفَائِهِ", en_translation: "The youth entered the ___ treatment center after his recovery", options: ["الْقَلْبِ", "الإِدْمَانِ", "الْعُيُونِ"], answer: "الإِدْمَانِ", en_options: ["heart", "addiction", "eyes"] }
    ],
    singularPlural: [
      { type: "to_singular", q: "مَعَابِدُ", a: "مَعْبَدٌ", en: "Temples → Temple" },
      { type: "to_singular", q: "مَشْرُوبَاتٌ", a: "مَشْرُوبٌ", en: "Drinks → Drink" },
      { type: "to_plural", q: "خَطَرٌ", a: "أَخْطَارٌ", en: "Danger → Dangers" },
      { type: "to_plural", q: "شَابٌّ", a: "شَبَابٌ", en: "Young man → Youth" },
      { type: "to_singular", q: "مُدْمِنُونَ", a: "مُدْمِنٌ", en: "Addicts → Addict" },
      { type: "to_plural", q: "طَبِيبٌ", a: "أَطِبَّاءُ", en: "Doctor → Doctors" }
    ],
    fillBlanks: [
      { question: "سَكَبَ الرَّجُلُ الْمُخَدِّرَاتِ فِي ___", en: "The man poured the drugs in the ___", answer: "الْعَصِيرِ", options: ["الطَّعَامِ", "الْعَصِيرِ", "الْمَاءِ"] },
      { question: "صَدَمَتْ سَيَّارَةٌ أُمِّي فَأَصْبَحَتْ فِي حَالَةٍ ___", en: "A car hit my mother so she became in a ___ condition", answer: "حَرِجَةٍ", options: ["جَيِّدَةٍ", "حَرِجَةٍ", "عَادِيَّةٍ"] },
      { question: "بِفَضْلِ نَصِيحَةِ أُمِّي، دَخَلْتُ مَرْكَزَ عِلَاجِ ___", en: "Thanks to my mother's advice, I entered a ___ treatment center", answer: "الإِدْمَانِ", options: ["الْقَلْبِ", "الإِدْمَانِ", "الْعُيُونِ"] },
      { question: "اَلرَّجُلُ الْغَرِيبُ كَانَ حُلْوَ ___", en: "The strange man was sweet of ___", answer: "الْمَنْطِقِ", options: ["الْمَنْطِقِ", "الطَّعَامِ", "الشَّكْلِ"] },
      { question: "حَاوَلَ الشَّابُّ أَنْ يَتَوَقَّفَ عَنْ ___ الْمُخَدِّرَاتِ", en: "The youth tried to stop ___ drugs", answer: "تَعَاطِي", options: ["تَعَاطِي", "تَجْرِبَةِ", "بَيْعِ"] },
      { question: "اَلإِدْمَانُ يُدَمِّرُ ___ الشَّبَابِ وَمُسْتَقْبَلَهُمْ", en: "Addiction destroys the ___ and future of youth", answer: "حَيَاةَ", options: ["مَلَابِسَ", "حَيَاةَ", "كُتُبَ"] }
    ],
    formQuestions: [
      { statement: "تَعَاطَى الشَّابُّ الْمُخَدِّرَاتِ.", en_statement: "The youth took drugs.", question: "مَاذَا تَعَاطَى الشَّابُّ؟", en_question: "What did the youth take?" },
      { statement: "صَدَمَتِ السَّيَّارَةُ الأُمَّ.", en_statement: "The car hit the mother.", question: "مَنْ صَدَمَتِ السَّيَّارَةُ؟", en_question: "Who did the car hit?" },
      { statement: "أَصْبَحَ الشَّابُّ طَبِيبًا نَفْسَانِيًّا.", en_statement: "The youth became a psychiatrist.", question: "مَاذَا أَصْبَحَ الشَّابُّ؟", en_question: "What did the youth become?" },
      { statement: "الْتَقَى الْغَرِيبُ بِالشَّابِّ فِي الْمَقْهَى.", en_statement: "The stranger met the youth in the cafe.", question: "أَيْنَ الْتَقَى الْغَرِيبُ بِالشَّابِّ؟", en_question: "Where did the stranger meet the youth?" },
      { statement: "نَصَحَتِ الأُمُّ ابْنَهَا بِتَرْكِ الْمُخَدِّرَاتِ.", en_statement: "The mother advised her son to leave drugs.", question: "بِمَ نَصَحَتِ الأُمُّ ابْنَهَا؟", en_question: "What did the mother advise her son?" },
      { statement: "تَعَافَى الشَّابُّ فِي مَرْكَزِ الْعِلَاجِ.", en_statement: "The youth recovered in the treatment center.", question: "أَيْنَ تَعَافَى الشَّابُّ؟", en_question: "Where did the youth recover?" }
    ],
    shortQA: [
      { q: "لِمَاذَا كَانَتِ الأُمُّ تَبْكِي؟", en_q: "Why was the mother crying?", a: "بِسَبَبِ إِدْمَانِ ابْنِهَا الْوَحِيدِ عَلَى الْمُخَدِّرَاتِ.", en_a: "Because of her only son's addiction to drugs.", keywords: ["إِدْمَانِ", "ابْنِهَا"] },
      { q: "أَيْنَ الْتَقَى الشَّابُّ بِالرَّجُلِ الْغَرِيبِ؟", en_q: "Where did the youth meet the strange man?", a: "اِلْتَقَى بِهِ فِي الْمَقْهَى الَّذِي يَتَرَدَّدُ عَلَيْهِ.", en_a: "He met him in the cafe he frequents.", keywords: ["الْمَقْهَى", "يَتَرَدَّدُ"] },
      { q: "مَاذَا فَعَلَ الْغَرِيبُ لِيُوقِعَ الشَّابَّ فِي الإِدْمَانِ؟", en_q: "What did the stranger do to make the youth fall into addiction?", a: "سَكَبَ مَوَادَّ مُنَشِّطَةً فِي عَصِيرِ الشَّابِّ.", en_a: "He poured stimulants into the youth's juice.", keywords: ["سَكَبَ", "مَوَادَّ مُنَشِّطَةً", "عَصِيرِ"] },
      { q: "مَاذَا أَصْبَحَ الشَّابُّ بَعْدَ تَعَافِيهِ؟", en_q: "What did the youth become after his recovery?", a: "أَصْبَحَ طَبِيبًا نَفْسَانِيًّا لِعِلَاجِ الْمُدْمِنِينَ.", en_a: "He became a psychiatrist treating addicts.", keywords: ["طَبِيبًا نَفْسَانِيًّا", "عِلَاجِ الْمُدْمِنِينَ"] },
      { q: "كَيْفَ كَانَ أُسْلُوبُ الرَّجُلِ الْغَرِيبِ؟", en_q: "What was the strange man's style?", a: "كَانَ حُلْوَ الْمَنْطِقِ، يَتَحَدَّثُ فِي الْعِلْمِ وَالْمَجْتَمَعِ لِيَكْسِبَ ثِقَةَ الشَّابِّ.", en_a: "He was sweet-tongued, spoke about science and society to gain the youth's trust.", keywords: ["حُلْوَ الْمَنْطِقِ", "يَكْسِبَ ثِقَةَ"] },
      { q: "مَا دَوْرُ الأُسْرَةِ فِي مَنْعِ الإِدْمَانِ؟", en_q: "What is the family's role in preventing addiction?", a: "اَلأُسْرَةُ تَحْمِي أَبْنَاءَهَا بِالتَّرْبِيَةِ الصَّالِحَةِ وَالرَّقَابَةِ الْمُسْتَمِرَّةِ وَتَعْزِيزِ الْقِيَمِ الدِّينِيَّةِ.", en_a: "The family protects its children through good upbringing, continuous supervision and reinforcing religious values.", keywords: ["التَّرْبِيَةِ", "الرَّقَابَةِ", "الْقِيَمِ"] }
    ],
    longQA: [
      { q: "كَيْفَ خَدَعَ الرَّجُلُ الْغَرِيبُ الشَّابَّ فِي الْمَقْهَى؟", en_q: "How did the strange man deceive the youth in the cafe?", a: "كَانَ الرَّجُلُ حُلْوَ الْمَنْطِقِ، تَحَدَّثَ مَعَهُ فِي قَضَايَا عِلْمِيَّةٍ وَاجْتِمَاعِيَّةٍ لِيَكْسِبَ ثِقَتَهُ، ثُمَّ دَسَّ الْمُخَدِّرَاتِ سِرًّا فِي عَصِيرِ الشَّابِّ لِيَجْعَلَهُ مُدْمِنًا.", en_a: "The man was sweet-tongued, talked about scientific and social issues to gain his trust, then secretly slipped drugs into the youth's juice to make him addicted.", keywords: ["حُلْوَ الْمَنْطِقِ", "كَسَبَ ثِقَتَهُ", "دَسَّ الْمُخَدِّرَاتِ"] },
      { q: "اِشْرَحْ نُقْطَةَ التَّحَوُّلِ فِي حَيَاةِ الشَّابِّ الْمُدْمِنِ.", en_q: "Explain the turning point in the addicted youth's life.", a: "تَعَرَّضَتْ أُمُّهُ لِحَادِثِ سَيْرٍ أَلِيمٍ وَهِيَ فِي طَرِيقِهَا لِلْبَحْثِ عَنْ عِلَاجٍ لَهُ. عِنْدَمَا رَآهَا فِي الْمُسْتَشْفَى وَسَمِعَ نَصِيحَتَهَا، قَرَّرَ بِحَزْمٍ التَّوْبَةَ وَتَلَقِّي الْعِلَاجِ فِي الْمَرْكَزِ.", en_a: "His mother suffered a painful car accident while on her way to find treatment for him. When he saw her in the hospital and heard her advice, he firmly decided to repent and get treatment at the center.", keywords: ["حَادِثِ سَيْرٍ", "الْمُسْتَشْفَى", "نَصِيحَتَهَا", "التَّوْبَةَ"] },
      { q: "مَا الدُّرُوسُ الْمُسْتَفَادَةُ مِنْ قِصَّةِ الشَّابِّ الْمُدْمِنِ؟", en_q: "What lessons can be learned from the story of the addicted youth?", a: "نَتَعَلَّمُ أَنَّ الصُّحْبَةَ السَّيِّئَةَ خَطَرٌ عَظِيمٌ، وَأَنَّ الثِّقَةَ الزَّائِدَةَ بِالْغُرَبَاءِ تُؤَدِّي إِلَى الْهَلَاكِ. كَمَا نَتَعَلَّمُ أَنَّ حُبَّ الأُمِّ وَتَضْحِيَتَهَا قَدْ يَكُونَانِ سَبَبًا فِي إِنْقَاذِ الإِنْسَانِ مِنَ الْهَاوِيَةِ.", en_a: "We learn that bad company is a great danger, and that excessive trust in strangers leads to destruction. We also learn that a mother's love and sacrifice may be the reason for saving a person from the abyss.", keywords: ["الصُّحْبَةَ السَّيِّئَةَ", "حُبَّ الأُمِّ", "إِنْقَاذِ"] }
    ]
  }
};

// Chapter 5 — Journey to Munnar (رِحْلَةٌ إِلَى مُونَار)
export const chapter5Data = {
  "sec1-5": {
    grammarChoices: [
      { question: "نَسْمَعُ كَثِيرًا ___ الْبِلَادِ الْبَعِيدَةِ", en_translation: "We hear a lot ___ far countries", options: ["فِي", "عَنْ", "بِـ"], answer: "عَنْ", en_options: ["in", "about", "with"] },
      { question: "مُونَارُ ___ أَرْضُ الشَّلَّالَاتِ", en_translation: "Munnar ___ the land of waterfalls", options: ["هِيَ", "هُوَ", "هُمْ"], answer: "هِيَ", en_options: ["is (she/it)", "is (he/it)", "are (they)"] },
      { question: "اَلطَّرِيقُ كَانَ كَـ ___ خَضْرَاءَ", en_translation: "The road was like a green ___", options: ["لَوْحَةٍ", "لَوْحَةٌ", "لَوْحَةً"], answer: "لَوْحَةٍ", en_options: ["painting (gen)", "painting (nom)", "painting (acc)"] },
      { question: "اسْتَأْجَرْنَا ___", en_translation: "We rented a ___", options: ["سَيَّارَةٌ", "سَيَّارَةً", "سَيَّارَةٍ"], answer: "سَيَّارَةً", en_options: ["car (nom)", "car (acc)", "car (gen)"] },
      { question: "سَمَّاهَا التُّجَّارُ الْعَرَبُ بِـ ___", en_translation: "Arab merchants called it ___", options: ["أَرْضِ السِّحْرِ", "خَيْرِ اللهِ", "جَنَّةِ الأَرْضِ"], answer: "خَيْرِ اللهِ", en_options: ["land of magic", "God's Bounty", "earthly paradise"] },
      { question: "نَزَلْنَا فِي فُنْدُقٍ يُطِلُّ عَلَى شَارِعٍ ___", en_translation: "We stayed in a hotel overlooking a ___ street", options: ["حَيَوِيٍّ", "هَادِئٍ", "مُظْلِمٍ"], answer: "حَيَوِيٍّ", en_options: ["vibrant", "quiet", "dark"] }
    ],
    singularPlural: [
      { type: "to_singular", q: "شَلَّالَاتٌ", a: "شَلَّالٌ", en: "Waterfalls → Waterfall" },
      { type: "to_singular", q: "أَكْوَاخٌ", a: "كُوخٌ", en: "Cottages → Cottage" },
      { type: "to_plural", q: "نَهَرٌ", a: "أَنْهَارٌ", en: "River → Rivers" },
      { type: "to_plural", q: "طَرِيقٌ", a: "طُرُقٌ", en: "Road → Roads" },
      { type: "to_singular", q: "غَابَاتٌ", a: "غَابَةٌ", en: "Forests → Forest" },
      { type: "to_plural", q: "جَبَلٌ", a: "جِبَالٌ", en: "Mountain → Mountains" }
    ],
    fillBlanks: [
      { question: "حَطَّتْ رِحْلَتُنَا فِي وِلَايَةِ ___", en: "Our flight landed in the state of ___", answer: "كِيرَالَا", options: ["كِيرَالَا", "دِلْهِي", "آكْرَا"] },
      { question: "سَمَّاهَا التُّجَّارُ الْعَرَبُ بِـ ___", en: "Arab merchants called it ___", answer: "خَيْرِ اللهِ", options: ["أَرْضِ السِّحْرِ", "خَيْرِ اللهِ", "جَنَّةِ الأَرْضِ"] },
      { question: "نَزَلْنَا فِي فُنْدُقٍ يُطِلُّ عَلَى شَارِعٍ ___", en: "We stayed in a hotel overlooking a ___ street", answer: "حَيَوِيٍّ", options: ["حَيَوِيٍّ", "هَادِئٍ", "مُظْلِمٍ"] },
      { question: "رَأَيْنَا الْمَاعِزَ الْجَبَلِيَّ ___", en: "We saw the ___ mountain goat", answer: "الْمُخَطَّطَ", options: ["الأَسْوَدَ", "الْمُخَطَّطَ", "الصَّغِيرَ"] },
      { question: "اَلطَّرِيقُ إِلَى مُونَارَ كَانَ كَلَوْحَةٍ ___ مَلِيئَةٍ بِالْغَابَاتِ", en: "The road to Munnar was like a ___ painting full of forests", answer: "خَضْرَاءَ", options: ["جَمِيلَةٍ", "خَضْرَاءَ", "كَبِيرَةٍ"] },
      { question: "اِشْتَرَى الْمُسَافِرُونَ ___ الْيَدَوِيَّةَ مِنَ السُّوقِ", en: "The travelers bought ___ handicrafts from the market", answer: "الصِّنَاعَاتِ", options: ["الأَطْعِمَةَ", "الصِّنَاعَاتِ", "الْمَلَابِسَ"] }
    ],
    formQuestions: [
      { statement: "تَقَعُ مُونَارُ فِي كِيرَالَا.", en_statement: "Munnar is located in Kerala.", question: "أَيْنَ تَقَعُ مُونَارُ؟", en_question: "Where is Munnar located?" },
      { statement: "سُمِّيَتْ مُونَارُ لِأَنَّهَا مَلْتَقَى ثَلَاثَةِ أَنْهَارٍ.", en_statement: "Munnar was named because it is the meeting point of three rivers.", question: "لِمَاذَا سُمِّيَتْ مُونَارُ بِهَذَا الاِسْمِ؟", en_question: "Why was Munnar named this name?" },
      { statement: "نَزَلْنَا فِي مُنْتَجَعِ بِلَاكَ بِيرِي.", en_statement: "We stayed at the Blackberry Resort.", question: "أَيْنَ نَزَلْتُمْ فِي مُونَارَ؟", en_question: "Where did you stay in Munnar?" },
      { statement: "اِشْتَرَى الْمُسَافِرُونَ الصِّنَاعَاتِ الْيَدَوِيَّةَ.", en_statement: "The travelers bought handicrafts.", question: "مَاذَا اشْتَرَى الْمُسَافِرُونَ؟", en_question: "What did the travelers buy?" },
      { statement: "سَمَّى الْعَرَبُ كِيرَالَا بِخَيْرِ اللهِ.", en_statement: "The Arabs named Kerala as God's Bounty.", question: "مَاذَا أَطْلَقَ الْعَرَبُ عَلَى كِيرَالَا؟", en_question: "What did the Arabs call Kerala?" },
      { statement: "رَأَيْنَا الْمَاعِزَ الْجَبَلِيَّ الْمُخَطَّطَ فِي الْمُنْتَزَهِ.", en_statement: "We saw the striped mountain goat in the park.", question: "مَاذَا رَأَيْتُمْ فِي الْمُنْتَزَهِ الْوَطَنِيِّ؟", en_question: "What did you see in the National Park?" }
    ],
    shortQA: [
      { q: "مَاذَا تَعْنِي كَلِمَةُ مُونَار؟", en_q: "What does the word Munnar mean?", a: "تَعْنِي مَلْتَقَى الأَنْهَارِ الثَّلَاثَةِ.", en_a: "It means the confluence of the three rivers.", keywords: ["مَلْتَقَى", "الأَنْهَارِ الثَّلَاثَةِ"] },
      { q: "مَاذَا أَطْلَقَ الْعَرَبُ الأَوَائِلُ عَلَى كِيرَالَا؟", en_q: "What did the early Arabs call Kerala?", a: "أَطْلَقُوا عَلَيْهَا اسْمَ 'خَيْرِ اللهِ'.", en_a: "They called it 'Khayr Allah' (God's Bounty).", keywords: ["خَيْرِ اللهِ"] },
      { q: "كَيْفَ وَصَفَ الْكَاتِبُ طَرِيقَ مُونَار؟", en_q: "How did the author describe the road to Munnar?", a: "وَصَفَهُ كَأَنَّهُ لَوْحَةٌ خَضْرَاءُ مَلِيئَةٌ بِالْغَابَاتِ الْكَثِيفَةِ وَالشَّلَّالَاتِ.", en_a: "He described it as a green painting full of dense forests and waterfalls.", keywords: ["لَوْحَةٌ خَضْرَاءُ", "غَابَاتٌ", "شَلَّالَاتٌ"] },
      { q: "مَا الْحَيَوَانُ الْعَجِيبُ الَّذِي رَأَوْهُ فِي الْمُنْتَزَهِ الْوَطَنِيِّ؟", en_q: "What wondrous animal did they see in the National Park?", a: "رَأَوُا الْمَاعِزَ الْجَبَلِيَّ الْمُخَطَّطَ الَّذِي لَا يُوجَدُ إِلَّا هُنَاكَ.", en_a: "They saw the striped mountain goat that exists only there.", keywords: ["الْمَاعِزُ الْجَبَلِيُّ", "الْمُخَطَّطُ"] },
      { q: "أَيْنَ تَقَعُ مُونَارُ؟", en_q: "Where is Munnar located?", a: "تَقَعُ مُونَارُ فِي وِلَايَةِ كِيرَالَا جَنُوبَ الْهِنْدِ.", en_a: "Munnar is located in the state of Kerala, southern India.", keywords: ["كِيرَالَا", "جَنُوبَ الْهِنْدِ"] },
      { q: "مَا الَّذِي يُمَيِّزُ الطَّبِيعَةَ فِي مُونَار؟", en_q: "What distinguishes the nature in Munnar?", a: "تَتَمَيَّزُ بِالشَّلَّالَاتِ وَالْجِبَالِ الْخَضْرَاءِ وَالضَّبَابِ الَّذِي يُغَطِّيهَا وَالْغَابَاتِ الْكَثِيفَةِ.", en_a: "It is distinguished by waterfalls, green mountains, covering fog, and dense forests.", keywords: ["الشَّلَّالَاتِ", "الضَّبَابِ", "الْغَابَاتِ"] }
    ],
    longQA: [
      { q: "تَحَدَّثْ عَنْ تَجْرِبَةِ الْكَاتِبِ فِي مَدِينَةِ كُوتْشِين قَبْلَ التَّوَجُّهِ لِمُونَار.", en_q: "Talk about the author's experience in Cochin before heading to Munnar.", a: "أَقَامَ الْكَاتِبُ فِي فُنْدُقٍ مُطِلٍّ عَلَى شَارِعٍ حَيَوِيٍّ، وَاسْتَمْتَعَ بِبَشَاشَةِ النَّاسِ وَنَظَافَةِ الْمَدِينَةِ. زَارَ الْمَسَاجِدَ الْجَمِيلَةَ وَتَذَوَّقَ الطَّعَامَ الْهِنْدِيَّ اللَّذِيذَ قَبْلَ أَنْ يَسْتَأْجِرَ سَيَّارَةً لِلذَّهَابِ إِلَى مُونَار.", en_a: "The author stayed in a hotel overlooking a vibrant street, enjoyed the people's cheerfulness and the city's cleanliness. He visited beautiful mosques and tasted delicious Indian food before renting a car to go to Munnar.", keywords: ["فُنْدُقٍ مُطِلٍّ", "بَشَاشَةِ النَّاسِ", "نَظَافَةِ", "الطَّعَامِ الْهِنْدِيِّ"] },
      { q: "صِفِ الطَّبِيعَةَ فِي مُونَارَ كَمَا رَآهَا الْكَاتِبُ.", en_q: "Describe the nature in Munnar as the author saw it.", a: "مُونَارُ هِيَ أَرْضُ الشَّلَّالَاتِ وَالْجِبَالِ الْخَضْرَاءِ السَّاحِرَةِ. يُغَطِّيهَا الضَّبَابُ وَتَتَدَفَّقُ الْمِيَاهُ مِنْ صُخُورِهَا. اَلْخُضْرَةُ فِيهَا لَا تَنْتَهِي، وَتَمْنَحُ الزَّائِرَ شُعُورًا بِأَنَّهُ فِي جَنَّةٍ مِنْ جَنَّاتِ الأَرْضِ.", en_a: "Munnar is the land of waterfalls and enchanting green mountains. Fog covers it and water flows from its rocks. The greenery there never ends, giving the visitor a feeling of being in an earthly paradise.", keywords: ["الشَّلَّالَاتِ", "الْجِبَالِ الْخَضْرَاءِ", "يُغَطِّيهَا الضَّبَابُ", "جَنَّةٍ مِنْ جَنَّاتِ الأَرْضِ"] },
      { q: "مَا أَبْرَزُ مَا رَآهُ الْكَاتِبُ فِي الرِّحْلَةِ إِلَى مُونَار؟", en_q: "What were the most notable things the author saw in his trip to Munnar?", a: "رَأَى الْكَاتِبُ مَنَاظِرَ الطَّبِيعَةِ الْخَلَّابَةَ عَلَى الطَّرِيقِ، وَشَلَّالَاتٍ رَائِعَةً، وَالْمَاعِزَ الْجَبَلِيَّ الْمُخَطَّطَ النَّادِرَ فِي الْمُنْتَزَهِ الْوَطَنِيِّ. كَمَا اسْتَمْتَعَ بِمَزَارِعِ الشَّايِ وَالصِّنَاعَاتِ الْيَدَوِيَّةِ.", en_a: "The author saw spectacular natural scenery along the road, wonderful waterfalls, and the rare striped mountain goat in the National Park. He also enjoyed tea plantations and handicrafts.", keywords: ["الطَّبِيعَةِ الْخَلَّابَةَ", "الشَّلَّالَاتِ", "الْمَاعِزِ الْمُخَطَّطِ", "مَزَارِعِ الشَّايِ"] }
    ]
  }
};

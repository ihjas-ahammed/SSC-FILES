// Chapter 1 — Tourism (اَلسِّيَاحَة)
export const chapter1Data = {
  "sec5-1": {
    grammarChoices: [
      { question: "اَلسِّيَاحَةُ ___ لِلاِقْتِصَادِ", en_translation: "Tourism is ___ for the economy", options: ["مُهِمٌّ", "مُهِمَّةٌ", "مُهِمَّاتٌ"], answer: "مُهِمَّةٌ", en_options: ["important (m)", "important (f)", "important (pl)"] },
      { question: "تَفْتَحُ اَلسِّيَاحَةُ أَبْوَابَ ___", en_translation: "Tourism opens the doors of ___", options: ["التَّعَلُّمِ", "النَّوْمِ", "الأَكْلِ"], answer: "التَّعَلُّمِ", en_options: ["learning", "sleep", "eating"] },
      { question: "يَجِبُ عَلَى الدَّوْلَةِ تَحْسِينُ ___ التَّحْتِيَّةِ", en_translation: "The state must improve the infra___", options: ["الْمَبْنَى", "الْبِنْيَةِ", "الْمَدِينَةِ"], answer: "الْبِنْيَةِ", en_options: ["building", "structure", "city"] },
      { question: "اَلسَّفَرُ يَمْنَحُ الْإِنْسَانَ ___ جَدِيدَةً", en_translation: "Travel grants a person a new ___", options: ["فُرْصَةً", "فُرَصًا", "فِرَاصًا"], answer: "فُرْصَةً", en_options: ["opportunity (acc)", "opportunities", "wrong plural"] },
      { question: "اَلسِّيَاحَةُ رَكِيزَةٌ فِي ___ الاِقْتِصَادِ", en_translation: "Tourism is a pillar in ___ the economy", options: ["بِنَاءِ", "هَدْمِ", "إِغْلَاقِ"], answer: "بِنَاءِ", en_options: ["building", "demolishing", "closing"] },
      { question: "يَجِبُ عَلَى الْمُوَاطِنِ إِحْسَانُ التَّعَامُلِ مَعَ ___", en_translation: "The citizen must treat ___ well", options: ["السَّائِحِ", "التَّاجِرِ", "الطَّالِبِ"], answer: "السَّائِحِ", en_options: ["the tourist", "the merchant", "the student"] }
    ],
    singularPlural: [
      { type: "to_singular", q: "رَكَائِزُ", a: "رَكِيزَةٌ", en: "Pillars → Pillar" },
      { type: "to_singular", q: "شُعُوبٌ", a: "شَعْبٌ", en: "Peoples → People" },
      { type: "to_plural", q: "دَوْلَةٌ", a: "دُوَلٌ", en: "State → States" },
      { type: "to_plural", q: "سَائِحٌ", a: "سُيَّاحٌ", en: "Tourist → Tourists" },
      { type: "to_singular", q: "أَنْوَاعٌ", a: "نَوْعٌ", en: "Types → Type" },
      { type: "to_plural", q: "ثَقَافَةٌ", a: "ثَقَافَاتٌ", en: "Culture → Cultures" }
    ],
    fillBlanks: [
      { question: "اَلسِّيَاحَةُ هِيَ ___ تَعْكِسُ حَضَارَةَ الشُّعُوبِ", en: "Tourism is a ___ reflecting the civilization of peoples", answer: "مِرْآةٌ", options: ["صُورَةٌ", "نَافِذَةٌ", "مِرْآةٌ"] },
      { question: "اَلسِّيَاحَةُ تُسَاهِمُ فِي ___ أَعْدَادٍ كَبِيرَةٍ مِنَ النَّاسِ", en: "Tourism contributes to ___ large numbers of people", answer: "تَشْغِيلِ", options: ["تَعْطِيلِ", "تَشْغِيلِ", "طَرْدِ"] },
      { question: "اَلْحَضَارَةُ لَيْسَتْ بِالْبِنَايَاتِ الْعَالِيَةِ بَلْ هِيَ ___ الْمُوَاطِنِينَ", en: "Civilization is not high buildings but the ___ of citizens", answer: "أَخْلَاقُ", options: ["أَمْوَالُ", "أَخْلَاقُ", "مَلَابِسُ"] },
      { question: "مِنْ أَنْوَاعِ السِّيَاحَةِ، اَلسِّيَاحَةُ الـ ___ لِزِيَارَةِ الأَمَاكِنِ الْمُقَدَّسَةِ", en: "Among tourism types is ___ tourism for visiting holy places", answer: "دِينِيَّةُ", options: ["تِجَارِيَّةُ", "دِينِيَّةُ", "تَرْفِيهِيَّةُ"] },
      { question: "يَجِبُ أَلَّا يَسْتَغِلَّ الْمُوَاطِنُ ___", en: "The citizen must not exploit ___", answer: "السَّائِحَ", options: ["السَّائِحَ", "التَّاجِرَ", "الزَّمِيلَ"] },
      { question: "مَوَاسِمُ السِّيَاحَةِ تُعَزِّزُ ___ وَالاِسْتِثْمَارَ", en: "Tourism seasons promote ___ and investment", answer: "التِّجَارَةَ", options: ["الزِّرَاعَةَ", "التِّجَارَةَ", "الصِّنَاعَةَ"] }
    ],
    formQuestions: [
      { statement: "نَعَمْ، اَلسِّيَاحَةُ مُهِمَّةٌ لِلاِقْتِصَادِ.", en_statement: "Yes, tourism is important for the economy.", question: "هَلِ السِّيَاحَةُ مُهِمَّةٌ لِلاِقْتِصَادِ؟", en_question: "Is tourism important for the economy?" },
      { statement: "تُقَرِّبُ السِّيَاحَةُ الشُّعُوبَ مِنْ بَعْضِهَا.", en_statement: "Tourism brings peoples closer to each other.", question: "مَاذَا تُقَرِّبُ السِّيَاحَةُ؟", en_question: "What does tourism bring closer?" },
      { statement: "يَجِبُ عَلَى الدَّوْلَةِ تَحْسِينُ الْبِنْيَةِ التَّحْتِيَّةِ.", en_statement: "The state must improve the infrastructure.", question: "مَاذَا يَجِبُ عَلَى الدَّوْلَةِ أَنْ تُحَسِّنَ؟", en_question: "What must the state improve?" },
      { statement: "اَلْحَضَارَةُ هِيَ أَخْلَاقُ الْمُوَاطِنِينَ.", en_statement: "Civilization is the morals of citizens.", question: "مَا هِيَ الْحَضَارَةُ؟", en_question: "What is civilization?" },
      { statement: "تُوَفِّرُ السِّيَاحَةُ فُرَصَ الْعَمَلِ لِلشَّعْبِ.", en_statement: "Tourism provides job opportunities for the people.", question: "مَاذَا تُوَفِّرُ السِّيَاحَةُ لِلشَّعْبِ؟", en_question: "What does tourism provide for the people?" },
      { statement: "دَعَا الْقُرْآنُ الْكَرِيمُ إِلَى السَّيْرِ فِي الأَرْضِ.", en_statement: "The Holy Quran called for traveling the earth.", question: "إِلَامَ دَعَا الْقُرْآنُ الْكَرِيمُ؟", en_question: "What did the Holy Quran call for?" }
    ],
    shortQA: [
      { q: "مَا هِيَ السِّيَاحَةُ؟", en_q: "What is tourism?", a: "هِيَ رَكِيزَةٌ فِي بِنَاءِ الاِقْتِصَادِ وَمِرْآةٌ تَعْكِسُ حَضَارَةَ الشُّعُوبِ.", en_a: "It is a pillar in building the economy and a mirror reflecting the civilization of peoples.", keywords: ["رَكِيزَةٌ", "الاِقْتِصَادِ", "مِرْآةٌ"] },
      { q: "اُذْكُرْ نَوْعَيْنِ مِنْ أَنْوَاعِ السِّيَاحَةِ.", en_q: "Mention two types of tourism.", a: "اَلسِّيَاحَةُ التَّرْفِيهِيَّةُ وَالسِّيَاحَةُ الدِّينِيَّةُ.", en_a: "Recreational tourism and religious tourism.", keywords: ["التَّرْفِيهِيَّةُ", "الدِّينِيَّةُ"] },
      { q: "مَا هُوَ دَوْرُ الْمُوَاطِنِ تُجَاهَ السَّائِحِ؟", en_q: "What is the citizen's role towards the tourist?", a: "أَنْ يُحْسِنَ التَّعَامُلَ مَعَ السَّائِحِ وَلَا يَسْتَغِلَّهُ.", en_a: "To treat the tourist well and not exploit him.", keywords: ["يُحْسِنَ التَّعَامُلَ", "لَا يَسْتَغِلَّهُ"] },
      { q: "إِلَامَ دَعَا الْقُرْآنُ الْكَرِيمُ فِي الأَرْضِ؟", en_q: "What did the Holy Quran call for on earth?", a: "دَعَا إِلَى التَّأَمُّلِ وَالسَّيْرِ فِي الأَرْضِ لِلتَّعَلُّمِ.", en_a: "It called for contemplation and traveling the earth to learn.", keywords: ["التَّأَمُّلِ", "السَّيْرِ"] },
      { q: "مَا دَوْرُ الدَّوْلَةِ فِي تَطْوِيرِ السِّيَاحَةِ؟", en_q: "What is the state's role in developing tourism?", a: "تَحْسِينُ الطُّرُقِ وَالْمَوَاصِلَاتِ وَتَرْمِيمُ الأَمَاكِنِ التَّارِيخِيَّةِ.", en_a: "Improving roads, transportation, and restoring historical places.", keywords: ["الطُّرُقِ", "الْمَوَاصِلَاتِ", "تَرْمِيمُ"] },
      { q: "كَيْفَ تُسَاهِمُ السِّيَاحَةُ اجْتِمَاعِيًّا؟", en_q: "How does tourism contribute socially?", a: "تَفْتَحُ أَبْوَابَ التَّعَلُّمِ وَتُقَرِّبُ بَيْنَ الشُّعُوبِ وَتَنْشُرُ ثَقَافَتَهُمْ.", en_a: "It opens doors for learning, brings peoples closer and spreads their culture.", keywords: ["أَبْوَابَ التَّعَلُّمِ", "تُقَرِّبُ", "ثَقَافَتَهُمْ"] }
    ],
    longQA: [
      { q: "اِشْرَحْ أَهَمِّيَّةَ السِّيَاحَةِ اقْتِصَادِيًّا وَاجْتِمَاعِيًّا.", en_q: "Explain the economic and social importance of tourism.", a: "اِقْتِصَادِيًّا، اَلسِّيَاحَةُ تُوَفِّرُ فُرَصَ الْعَمَلِ وَتُحَسِّنُ الْبِنْيَةَ التَّحْتِيَّةَ وَتَدْعَمُ التِّجَارَةَ وَالاِسْتِثْمَارَ. وَاجْتِمَاعِيًّا، تَفْتَحُ أَبْوَابَ التَّعَلُّمِ وَتُقَرِّبُ بَيْنَ الشُّعُوبِ وَتَنْشُرُ ثَقَافَتَهُمْ.", en_a: "Economically, tourism provides job opportunities, improves infrastructure, and supports trade and investment. Socially, it opens doors for learning, brings peoples closer, and spreads their culture.", keywords: ["فُرَصَ الْعَمَلِ", "الْبِنْيَةَ التَّحْتِيَّةَ", "تُقَرِّبُ"] },
      { q: "بَيِّنْ وَاجِبَاتِ الدَّوْلَةِ وَالْمُجْتَمَعِ لِتَطْوِيرِ السِّيَاحَةِ.", en_q: "Explain the duties of the state and society to develop tourism.", a: "يَجِبُ عَلَى الدَّوْلَةِ تَحْسِينُ الطُّرُقِ وَالْمَوَاصِلَاتِ وَتَرْمِيمُ الأَمَاكِنِ التَّارِيخِيَّةِ، بَيْنَمَا يَجِبُ عَلَى الْمُجْتَمَعِ التَّحَلِّي بِالأَخْلَاقِ الْحَسَنَةِ مَعَ الزُّوَّارِ لِتَكْوِينِ صُورَةٍ مُشْرِفَةٍ.", en_a: "The state must improve roads, transportation, and restore historical places, while society must adopt good morals with visitors to form an honorable image.", keywords: ["تَحْسِينُ الطُّرُقِ", "تَرْمِيمُ", "الأَخْلَاقِ الْحَسَنَةِ"] },
      { q: "مَا الَّذِي يُمَيِّزُ السِّيَاحَةَ الدِّينِيَّةَ عَنِ السِّيَاحَةِ التَّرْفِيهِيَّةِ؟", en_q: "What distinguishes religious tourism from recreational tourism?", a: "اَلسِّيَاحَةُ الدِّينِيَّةُ تَهْدِفُ إِلَى زِيَارَةِ الأَمَاكِنِ الْمُقَدَّسَةِ وَأَدَاءِ الشَّعَائِرِ الدِّينِيَّةِ كَالْحَجِّ وَالْعُمْرَةِ، بَيْنَمَا تَهْدِفُ السِّيَاحَةُ التَّرْفِيهِيَّةُ إِلَى الاِسْتِمْتَاعِ بِمَنَاظِرِ الطَّبِيعَةِ وَالتَّرْوِيحِ عَنِ النَّفْسِ.", en_a: "Religious tourism aims to visit holy places and perform religious rites like Hajj and Umrah, while recreational tourism aims to enjoy natural scenery and relax.", keywords: ["الأَمَاكِنِ الْمُقَدَّسَةِ", "الشَّعَائِرِ الدِّينِيَّةِ", "الاِسْتِمْتَاعِ"] }
    ]
  }
};

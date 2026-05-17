// Chapter 4 — India: Land of Wisdom (اَلْهِنْدُ أَرْضُ الْحِكْمَةِ)
export const chapter4Data = {
  "sec3-4": {
    grammarChoices: [
      { question: "اَلْهِنْدُ أُمَّةٌ ___ لِلُّغَاتِ", en_translation: "India is a nation ___ of languages", options: ["مُتَعَدِّدَةٌ", "مُتَعَدِّدٌ", "تَعَدُّدٌ"], answer: "مُتَعَدِّدَةٌ", en_options: ["multiple (f)", "multiple (m)", "multiplicity"] },
      { question: "شُيِّدَتْ مَدِينَةُ جَايْبُور ___ أَسْوَارٍ زَهْرِيَّةٍ", en_translation: "The city of Jaipur was built ___ pink walls", options: ["مِنْ", "فِي", "إِلَى"], answer: "مِنْ", en_options: ["from/with", "in", "to"] },
      { question: "تَاجُ مَحَلَّ هُوَ ___ عَالَمِيَّةٌ", en_translation: "Taj Mahal is a global ___", options: ["أُعْجُوبَةٌ", "قَصْرٌ", "مَبْنًى"], answer: "أُعْجُوبَةٌ", en_options: ["wonder", "palace", "building"] },
      { question: "اَلْعَلَمُ الْهِنْدِيُّ يَحْتَوِي ___ دَوْلَابٍ أَزْرَقَ", en_translation: "The Indian flag contains ___ a blue wheel", options: ["عَلَى", "فِي", "مِنْ"], answer: "عَلَى", en_options: ["on/contains", "in", "from"] },
      { question: "نَالَتِ الْهِنْدُ اسْتِقْلَالَهَا عَامَ ___", en_translation: "India gained independence in the year ___", options: ["1950", "1947", "1857"], answer: "1947", en_options: ["1950", "1947", "1857"] },
      { question: "تَاجُ مَحَلَّ بُنِيَ تَذْكَارًا لِـ ___", en_translation: "Taj Mahal was built as a memorial to ___", options: ["الإِمْبِرَاطُورِ", "الْمَلِكَةِ مُمْتَازَ", "الشَّعْبِ"], answer: "الْمَلِكَةِ مُمْتَازَ", en_options: ["the emperor", "Queen Mumtaz", "the people"] }
    ],
    singularPlural: [
      { type: "to_singular", q: "قُرُونٌ", a: "قَرْنٌ", en: "Centuries → Century" },
      { type: "to_singular", q: "مَتَاحِفُ", a: "مَتْحَفٌ", en: "Museums → Museum" },
      { type: "to_plural", q: "لَوْنٌ", a: "أَلْوَانٌ", en: "Color → Colors" },
      { type: "to_plural", q: "أُسْطُورَةٌ", a: "أَسَاطِيرُ", en: "Legend → Legends" },
      { type: "to_singular", q: "جَامِعَاتٌ", a: "جَامِعَةٌ", en: "Universities → University" },
      { type: "to_plural", q: "حِكْمَةٌ", a: "حِكَمٌ", en: "Wisdom → Wisdoms" }
    ],
    fillBlanks: [
      { question: "اَلْهِنْدُ أَرْضُ الْحِكْمَةِ وَ ___", en: "India is the land of wisdom and ___", answer: "الأَسَاطِيرِ", options: ["التِّكْنُولُوجْيَا", "الأَسَاطِيرِ", "الأَسْلِحَةِ"] },
      { question: "تُرْجِمَ كِتَابُ كَلِيلَةَ وَدِمْنَةَ مِنَ اللُّغَةِ ___", en: "Kalila and Dimna was translated from the ___ language", answer: "السَّنْسَكْرِيتِيَّةِ", options: ["الْعَرَبِيَّةِ", "الإِنْجِلِيزِيَّةِ", "السَّنْسَكْرِيتِيَّةِ"] },
      { question: "نَالَتِ الْهِنْدُ اسْتِقْلَالَهَا عَامَ ___", en: "India gained independence in the year ___", answer: "1947", options: ["1950", "1947", "1857"] },
      { question: "تُسَمَّى جَايْبُور بِالْمَدِينَةِ ___", en: "Jaipur is called the ___ City", answer: "الزَّهْرِيَّةِ", options: ["الْحَمْرَاءِ", "الزَّهْرِيَّةِ", "الْبَيْضَاءِ"] },
      { question: "تَضُمُّ الْهِنْدُ حَوَالَيْ ___ جَامِعَةً", en: "India has about ___ universities", answer: "900", options: ["500", "900", "100"] },
      { question: "شِعَارُ الْهِنْدِ الْوَطَنِيُّ هُوَ أَرْبَعَةُ ___", en: "India's national emblem is four ___", answer: "أُسُودٍ", options: ["نُمُورٍ", "أُسُودٍ", "أَفْيَالٍ"] }
    ],
    formQuestions: [
      { statement: "تُوجَدُ بَوَّابَةُ الْهِنْدِ فِي مُومْبَايَ.", en_statement: "The Gateway of India is located in Mumbai.", question: "أَيْنَ تُوجَدُ بَوَّابَةُ الْهِنْدِ؟", en_question: "Where is the Gateway of India located?" },
      { statement: "شِعَارُ الْهِنْدِ هُوَ أَرْبَعَةُ أُسُودٍ.", en_statement: "India's emblem is four lions.", question: "مَا هُوَ شِعَارُ الْهِنْدِ الْوَطَنِيُّ؟", en_question: "What is India's national emblem?" },
      { statement: "بَنَى شَاهَ جَهَانَ تَاجَ مَحَلَّ.", en_statement: "Shah Jahan built the Taj Mahal.", question: "مَنْ بَنَى تَاجَ مَحَلَّ؟", en_question: "Who built the Taj Mahal?" },
      { statement: "فِي دِلْهِي جَامِعَاتٌ إِسْلَامِيَّةٌ كَبِيرَةٌ.", en_statement: "In Delhi there are large Islamic universities.", question: "مَاذَا يُوجَدُ فِي دِلْهِي؟", en_question: "What is in Delhi?" },
      { statement: "سُمِّيَتِ الْهِنْدُ أَرْضَ الْحِكْمَةِ.", en_statement: "India was called the land of wisdom.", question: "بِمَ سُمِّيَتِ الْهِنْدُ؟", en_question: "What was India called?" },
      { statement: "نَالَتِ الْهِنْدُ اسْتِقْلَالَهَا عَامَ 1947.", en_statement: "India gained independence in 1947.", question: "مَتَى نَالَتِ الْهِنْدُ اسْتِقْلَالَهَا؟", en_question: "When did India gain independence?" }
    ],
    shortQA: [
      { q: "مَا هِيَ عَاصِمَةُ الْهِنْدِ؟", en_q: "What is the capital of India?", a: "دِلْهِي هِيَ عَاصِمَةُ الْهِنْدِ وَتَجْمَعُ بَيْنَ الْقَدِيمِ وَالْحَدِيثِ.", en_a: "Delhi is the capital of India, blending the old and the new.", keywords: ["دِلْهِي", "عَاصِمَةُ"] },
      { q: "لِمَاذَا بَنَى شَاهَ جَهَانَ تَاجَ مَحَلَّ؟", en_q: "Why did Shah Jahan build the Taj Mahal?", a: "بَنَاهُ تَذْكَارًا لِحُبِّهِ الْعَمِيقِ لِزَوْجَتِهِ الْمَلِكَةِ مُمْتَازَ.", en_a: "He built it as a memorial to his deep love for his wife Queen Mumtaz.", keywords: ["تَذْكَارًا لِحُبِّهِ", "الْمَلِكَةِ مُمْتَازَ"] },
      { q: "بِمَ تَشْتَهِرُ مَدِينَةُ مُومْبَايَ؟", en_q: "What is the city of Mumbai famous for?", a: "تَشْتَهِرُ بِكَوْنِهَا الْعَاصِمَةَ التِّجَارِيَّةَ وَأَكْبَرَ مُنْتِجٍ لِلأَفْلَامِ السِّينِمَائِيَّةِ وَبَوَّابَةَ الْهِنْدِ.", en_a: "It is famous for being the commercial capital, the largest film producer, and the Gateway of India.", keywords: ["التِّجَارِيَّةَ", "الأَفْلَامَ", "بَوَّابَةَ الْهِنْدِ"] },
      { q: "مَاذَا يَرْمُزُ شِعَارُ الْهِنْدِ؟", en_q: "What does the emblem of India symbolize?", a: "يَرْمُزُ إِلَى الْقُوَّةِ، وَمَكْتُوبٌ تَحْتَهُ: الصِّدْقُ دَائِمًا هُوَ الظَّافِرُ.", en_a: "It symbolizes strength, and beneath it is written: Truth alone always triumphs.", keywords: ["الْقُوَّةِ", "الصِّدْقُ"] },
      { q: "كَمْ جَامِعَةً تَضُمُّ الْهِنْدُ؟", en_q: "How many universities does India have?", a: "تَضُمُّ حَوَالَيْ 900 جَامِعَةٍ، مِنْهَا 30 جَامِعَةً تُدَرِّسُ اللُّغَةَ الْعَرَبِيَّةَ.", en_a: "It has about 900 universities, of which 30 teach the Arabic language.", keywords: ["900 جَامِعَةٍ", "اللُّغَةَ الْعَرَبِيَّةَ"] },
      { q: "مَا الَّذِي يَمِيزُ مَدِينَةَ جَايْبُور؟", en_q: "What distinguishes the city of Jaipur?", a: "تُسَمَّى الْمَدِينَةَ الزَّهْرِيَّةَ لِأَنَّهَا شُيِّدَتْ مِنْ أَسْوَارٍ زَهْرِيَّةٍ تُعَدُّ مِنْ عَجَائِبِ الْعَالَمِ.", en_a: "It is called the Pink City because it was built with pink walls considered among world wonders.", keywords: ["الزَّهْرِيَّةَ", "الأَسْوَارِ"] }
    ],
    longQA: [
      { q: "تَكَلَّمْ عَنِ الْجَامِعَاتِ وَالتَّعْلِيمِ الْعَالِي فِي الْهِنْدِ.", en_q: "Talk about universities and higher education in India.", a: "تَضُمُّ الْهِنْدُ حَوَالَيْ 900 جَامِعَةٍ، مِنْهَا 30 جَامِعَةً تُدَرِّسُ اللُّغَةَ الْعَرَبِيَّةَ. مِنْ أَشْهَرِهَا فِي دِلْهِي: جَامِعَةُ جَوَاهَرَ لَالَ نِهْرُو، وَالْجَامِعَةُ الْمِلِّيَّةُ الإِسْلَامِيَّةُ. وَهُنَاكَ جَامِعَاتٌ كُبْرَى أُخْرَى كَجَامِعَةِ عَلِيكَرَهَ وَعُثْمَانِيَّةَ تُسَاهِمُ فِي التَّطَوُّرِ الْعِلْمِيِّ.", en_a: "India has about 900 universities, of which 30 teach Arabic. The most famous in Delhi are Jawaharlal Nehru University and Jamia Millia Islamia. Other major universities like Aligarh and Osmania contribute to scientific development.", keywords: ["900 جَامِعَةٍ", "اللُّغَةَ الْعَرَبِيَّةَ", "جَوَاهَرَ لَالَ نِهْرُو", "عَلِيكَرَهَ"] },
      { q: "صِفْ مَنَاخَ الْهِنْدِ وَمَوَاسِمَهُ.", en_q: "Describe India's climate and seasons.", a: "يَتَمَيَّزُ مَنَاخُ الْهِنْدِ بِثَلَاثَةِ مَوَاسِمَ: اَلشِّتَاءُ (نُوفَمْبِر إِلَى مَارِس) تَتَسَاقَطُ فِيهِ الثُّلُوجُ شَمَالًا، وَالصَّيْفُ (أَبْرِيل إِلَى يُونْيُو) حَيْثُ تَشْتَدُّ الْحَرَارَةُ، وَمَوْسِمُ الأَمْطَارِ (الرِّيَاحُ الْمَوْسِمِيَّةُ/مُونْسُون) الَّذِي تَهْطُلُ فِيهِ الأَمْطَارُ بِغَزَارَةٍ عَلَى السَّوَاحِلِ.", en_a: "India's climate has three seasons: Winter (Nov to Mar) with snow in the north, Summer (Apr to Jun) with intense heat, and the Rainy season (Monsoon) with heavy rains along the coasts.", keywords: ["اَلشِّتَاءُ", "الصَّيْفُ", "مَوْسِمُ الأَمْطَارِ", "مُونْسُون"] },
      { q: "مَا أَبْرَزُ الأَمَاكِنِ السِّيَاحِيَّةِ فِي الْهِنْدِ؟", en_q: "What are the most prominent tourist sites in India?", a: "مِنْ أَبْرَزِ الأَمَاكِنِ تَاجُ مَحَلَّ فِي آكْرَا، وَهُوَ مِنْ عَجَائِبِ الدُّنْيَا السَّبْعِ، وَبَوَّابَةُ الْهِنْدِ فِي مُومْبَايَ، وَالْمَدِينَةُ الزَّهْرِيَّةُ جَايْبُور، فَضْلًا عَنِ الْمَسَاجِدِ وَالْجَامِعَاتِ الإِسْلَامِيَّةِ فِي دِلْهِي.", en_a: "The most prominent places include the Taj Mahal in Agra (one of the Seven Wonders), the Gateway of India in Mumbai, the Pink City of Jaipur, as well as Islamic mosques and universities in Delhi.", keywords: ["تَاجُ مَحَلَّ", "بَوَّابَةُ الْهِنْدِ", "جَايْبُور"] }
    ]
  }
};

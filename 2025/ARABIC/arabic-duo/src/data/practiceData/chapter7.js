// Chapter 7 — A Contented Life (عِيشَةٌ رَاضِيَةٌ)
export const chapter7Data = {
  "sec8-7": {
    grammarChoices: [
      { question: "كَانَتْ عَائِشَةُ فَتَاةً ___", en_translation: "Aisha was a ___ girl", options: ["بَسِيطَةً", "بَسِيطَةٌ", "بَسِيطَةٍ"], answer: "بَسِيطَةً", en_options: ["simple (acc)", "simple (nom)", "simple (gen)"] },
      { question: "مَنْ يَعْمَلُ بِصِدْقٍ يَعِيشُ ___", en_translation: "Whoever works honestly lives ___", options: ["رَاضِيًا", "رَاضٍ", "رَاضِيَةٌ"], answer: "رَاضِيًا", en_options: ["satisfied (acc)", "satisfied (nom gen)", "satisfied (f)"] },
      { question: "اَلْفَتَاةُ الَّتِي جَاءَتْ مِنَ الْمَدِينَةِ ___ لَيْلَى", en_translation: "The girl who came from the city ___ Layla", options: ["اسْمُهَا", "اسْمُهُ", "اسْمُهُمْ"], answer: "اسْمُهَا", en_options: ["her name", "his name", "their name"] },
      { question: "لَمْ ___ لَيْلَى الْهُدُوءَ فِي الْمَدِينَةِ", en_translation: "Layla did not ___ quietness in the city", options: ["تَجِدْ", "تَجِدُ", "تَجِدِ"], answer: "تَجِدْ", en_options: ["find (jussive)", "find (indicative)", "find (other)"] },
      { question: "اَلأَرْضُ مِثْلُ الْقَلْبِ إِذَا سَقَيْنَاهَا ___ أَعْطَتْنَا خُبْزًا", en_translation: "The earth is like the heart, if we water it with ___ it gives us bread", options: ["حُبًّا", "مَاءً", "دَمًا"], answer: "حُبًّا", en_options: ["love", "water", "blood"] },
      { question: "عَائِشَةُ تَسْتَيْقِظُ قَبْلَ ___ الشَّمْسِ", en_translation: "Aisha wakes up before the ___ of the sun", options: ["غُرُوبِ", "طُلُوعِ", "غِيَابِ"], answer: "طُلُوعِ", en_options: ["setting", "rising", "disappearance"] }
    ],
    singularPlural: [
      { type: "to_singular", q: "نُجُومٌ", a: "نَجْمٌ", en: "Stars → Star" },
      { type: "to_singular", q: "أَقَارِبُ", a: "قَرِيبٌ", en: "Relatives → Relative" },
      { type: "to_plural", q: "قَرْيَةٌ", a: "قُرًى", en: "Village → Villages" },
      { type: "to_plural", q: "ضَمِيرٌ", a: "ضَمَائِرُ", en: "Conscience → Consciences" },
      { type: "to_singular", q: "حُقُولٌ", a: "حَقْلٌ", en: "Fields → Field" },
      { type: "to_plural", q: "فَرَحٌ", a: "أَفْرَاحٌ", en: "Joy → Joys" }
    ],
    fillBlanks: [
      { question: "اَلرَّاحَةُ الدَّائِمَةُ فِي ___ لَا تُشْتَرَى بِالْمَالِ", en: "Permanent comfort in the ___ cannot be bought with money", answer: "الْقَلْبِ", options: ["الْبَنْكِ", "الْقَلْبِ", "السُّوقِ"] },
      { question: "عَائِشَةُ تَسْتَيْقِظُ قَبْلَ ___ الشَّمْسِ", en: "Aisha wakes up before the ___ of the sun", answer: "طُلُوعِ", options: ["غُرُوبِ", "طُلُوعِ", "غِيَابِ"] },
      { question: "اَلرِّضَا يَجْعَلُ الْحَيَاةَ ___ فِي أَبْسَطِ الظُّرُوفِ", en: "Contentment makes life ___ in the simplest circumstances", answer: "جَمِيلَةً", options: ["صَعْبَةً", "جَمِيلَةً", "مُمِلَّةً"] },
      { question: "عَادَتْ لَيْلَى إِلَى الْمَدِينَةِ بِنَظْرَةٍ ___ لِلْحَيَاةِ", en: "Layla returned to the city with a ___ outlook on life", answer: "مُخْتَلِفَةٍ", options: ["مُخْتَلِفَةٍ", "حَزِينَةٍ", "قَدِيمَةٍ"] },
      { question: "قَالَتْ عَائِشَةُ: اَلأَرْضُ مِثْلُ ___ تُعْطِي مَا تَأْخُذُ", en: "Aisha said: The earth is like a ___ that gives what it takes", answer: "الْقَلْبِ", options: ["الإِنَاءِ", "الْقَلْبِ", "الشَّجَرَةِ"] },
      { question: "السَّعَادَةُ لَيْسَتْ فِي الثَّرْوَةِ بَلْ فِي رَاحَةِ ___", en: "Happiness is not in wealth but in peace of ___", answer: "الضَّمِيرِ", options: ["الضَّمِيرِ", "الْبَدَنِ", "الْعَقْلِ"] }
    ],
    formQuestions: [
      { statement: "تَعِيشُ عَائِشَةُ فِي قَرْيَةٍ بَسِيطَةٍ.", en_statement: "Aisha lives in a simple village.", question: "أَيْنَ تَعِيشُ عَائِشَةُ؟", en_question: "Where does Aisha live?" },
      { statement: "لَيْلَى ابْنَةُ تَاجِرٍ غَنِيٍّ.", en_statement: "Layla is the daughter of a rich merchant.", question: "مَنْ هِيَ لَيْلَى؟", en_question: "Who is Layla?" },
      { statement: "اَلْعَمَلُ يَجْلِبُ السُّرُورَ.", en_statement: "Work brings joy.", question: "مَاذَا يَجْلِبُ الْعَمَلُ؟", en_question: "What does work bring?" },
      { statement: "السَّعَادَةُ فِي رَاحَةِ الضَّمِيرِ.", en_statement: "Happiness is in peace of conscience.", question: "أَيْنَ تَكْمُنُ السَّعَادَةُ؟", en_question: "Where does happiness lie?" },
      { statement: "قَالَتْ عَائِشَةُ: اَلرَّاحَةُ فِي الْقَلْبِ لَا تُشْتَرَى بِالْمَالِ.", en_statement: "Aisha said: Comfort in the heart cannot be bought with money.", question: "مَاذَا قَالَتْ عَائِشَةُ عَنِ الرَّاحَةِ؟", en_question: "What did Aisha say about comfort?" },
      { statement: "عَادَتْ لَيْلَى بِنَظْرَةٍ مُخْتَلِفَةٍ لِلْحَيَاةِ.", en_statement: "Layla returned with a different outlook on life.", question: "بِمَ عَادَتْ لَيْلَى مِنَ الْقَرْيَةِ؟", en_question: "With what did Layla return from the village?" }
    ],
    shortQA: [
      { q: "مَا هِيَ صِفَاتُ عَائِشَةَ؟", en_q: "What are Aisha's traits?", a: "فَتَاةٌ بَسِيطَةٌ، رَقِيقَةُ الْقَلْبِ، تُحِبُّ الزِّرَاعَةَ وَالرِّضَا.", en_a: "A simple girl, tender-hearted, loves farming and contentment.", keywords: ["بَسِيطَةٌ", "رَقِيقَةُ الْقَلْبِ", "الرِّضَا"] },
      { q: "لِمَاذَا تَعَجَّبَتْ لَيْلَى مِنْ حَيَاةِ عَائِشَةَ؟", en_q: "Why was Layla amazed by Aisha's life?", a: "لِأَنَّ عَائِشَةَ كَانَتْ سَعِيدَةً رَغْمَ فَقْرِهَا وَتَعَبِهَا فِي الْحَقْلِ.", en_a: "Because Aisha was happy despite her poverty and fatigue in the field.", keywords: ["سَعِيدَةً", "فَقْرِهَا وَتَعَبِهَا"] },
      { q: "مَاذَا قَالَتْ عَائِشَةُ عَنِ الأَرْضِ؟", en_q: "What did Aisha say about the earth?", a: "قَالَتْ: اَلأَرْضُ مِثْلُ الْقَلْبِ، إِذَا سَقَيْنَاهَا حُبًّا أَعْطَتْنَا خُبْزًا.", en_a: "She said: The earth is like the heart, if we water it with love it gives us bread.", keywords: ["الْقَلْبِ", "حُبًّا", "خُبْزًا"] },
      { q: "مَا الدَّرْسُ الَّذِي تَعَلَّمَتْهُ لَيْلَى؟", en_q: "What lesson did Layla learn?", a: "تَعَلَّمَتْ أَنَّ السَّعَادَةَ وَالرَّاحَةَ فِي الرِّضَا وَلَيْسَ فِي الْمَالِ.", en_a: "She learned that happiness and comfort are in contentment, not in money.", keywords: ["الرِّضَا", "لَيْسَ فِي الْمَالِ"] },
      { q: "كَيْفَ كَانَتْ يَوْمِيَّةُ عَائِشَةَ فِي الْقَرْيَةِ؟", en_q: "What was Aisha's daily routine in the village?", a: "كَانَتْ تَسْتَيْقِظُ قَبْلَ طُلُوعِ الشَّمْسِ وَتَعْمَلُ فِي الْحَقْلِ بِجِدٍّ وَنَشَاطٍ.", en_a: "She used to wake up before sunrise and work in the field with diligence and energy.", keywords: ["قَبْلَ طُلُوعِ الشَّمْسِ", "الْحَقْلِ", "جِدٍّ"] },
      { q: "مَا الْفَرْقُ بَيْنَ رَاحَةِ عَائِشَةَ وَرَاحَةِ لَيْلَى؟", en_q: "What is the difference between Aisha's comfort and Layla's comfort?", a: "رَاحَةُ عَائِشَةَ رَاحَةُ الضَّمِيرِ وَالرِّضَا، أَمَّا لَيْلَى فَتَبْحَثُ عَنِ الرَّاحَةِ فِي الثَّرَاءِ وَالرَّفَاهِيَةِ.", en_a: "Aisha's comfort is peace of conscience and contentment, while Layla seeks comfort in wealth and luxury.", keywords: ["رَاحَةُ الضَّمِيرِ", "الثَّرَاءِ", "الرَّفَاهِيَةِ"] }
    ],
    longQA: [
      { q: "قَارِنْ بَيْنَ حَيَاةِ عَائِشَةَ فِي الْقَرْيَةِ وَحَيَاةِ لَيْلَى فِي الْمَدِينَةِ.", en_q: "Compare Aisha's life in the village and Layla's life in the city.", a: "عَائِشَةُ تَعِيشُ فِي قَرْيَةٍ بَسِيطَةٍ، تَعْمَلُ بِجِدٍّ فِي الْحَقْلِ وَتَشْعُرُ بِالرِّضَا وَالطُّمَأْنِينَةِ. أَمَّا لَيْلَى فَتَعِيشُ فِي الْمَدِينَةِ حَيَاةَ الرَّفَاهِيَةِ وَاللِّبَاسِ الْفَاخِرِ، لَكِنَّهَا تَفْتَقِدُ الْهُدُوءَ الْحَقِيقِيَّ وَرَاحَةَ الضَّمِيرِ الَّتِي وَجَدَتْهَا عِنْدَ عَائِشَةَ.", en_a: "Aisha lives in a simple village, works hard in the field, and feels contentment and peace of mind. Layla lives in the city a life of luxury and fine clothes, but lacks the true quietness and peace of conscience she found with Aisha.", keywords: ["الرِّضَا", "الطُّمَأْنِينَةِ", "الرَّفَاهِيَةِ", "رَاحَةَ الضَّمِيرِ"] },
      { q: "اِشْرَحْ مَقُولَةَ عَائِشَةَ: 'اَلرَّاحَةُ دَائِمَةٌ فِي الْقَلْبِ لَا تُشْتَرَى بِالْمَالِ'.", en_q: "Explain Aisha's saying: 'Comfort is permanent in the heart; it cannot be bought with money'.", a: "يَعْنِي أَنَّ الْمَالَ زَائِلٌ وَيُصْرَفُ فِي سُبُلٍ مُخْتَلِفَةٍ، وَلَا يَسْتَطِيعُ شِرَاءَ السَّعَادَةِ الْحَقِيقِيَّةِ. اَلسَّعَادَةُ تَنْبُعُ مِنَ الْقَنَاعَةِ وَالرِّضَا الدَّاخِلِيِّ وَرَاحَةِ الضَّمِيرِ بَعْدَ الْعَمَلِ الشَّرِيفِ.", en_a: "It means money is transient and spent in various ways, and cannot buy true happiness. Happiness stems from contentment, inner satisfaction, and a clear conscience after honest work.", keywords: ["الْمَالَ زَائِلٌ", "السَّعَادَةُ تَنْبُعُ مِنَ الْقَنَاعَةِ", "رَاحَةِ الضَّمِيرِ"] },
      { q: "مَا الْقِيَمُ الَّتِي تُرَسِّخُهَا قِصَّةُ عَائِشَةَ وَلَيْلَى؟", en_q: "What values does the story of Aisha and Layla instill?", a: "تُرَسِّخُ الْقِصَّةُ قِيَمَ الرِّضَا وَالْقَنَاعَةِ وَالْعَمَلِ بِجِدٍّ، وَأَنَّ السَّعَادَةَ لَا تَأْتِي مِنَ الثَّرْوَةِ بَلْ مِنَ الرَّاحَةِ الدَّاخِلِيَّةِ وَرَاحَةِ الضَّمِيرِ.", en_a: "The story instills values of contentment, satisfaction, and hard work, and that happiness comes not from wealth but from inner peace and peace of conscience.", keywords: ["الرِّضَا", "الْقَنَاعَةِ", "الرَّاحَةِ الدَّاخِلِيَّةِ"] }
    ]
  }
};

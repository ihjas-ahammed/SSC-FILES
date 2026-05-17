// Chapter 3 — Night Rain (مَطَرُ اللَّيْلِ) — Poem
export const chapter3Data = {
  "sec7-3": {
    grammarChoices: [
      { question: "مَطَرُ اللَّيْلِ مِثْلُ اِمْرَأَةٍ ___", en_translation: "Night rain is like a ___ woman", options: ["مَجْنُونَةٍ", "مَجْنُونٍ", "عَاقِلَةٍ"], answer: "مَجْنُونَةٍ", en_options: ["mad (f)", "mad (m)", "sane (f)"] },
      { question: "يَنْزَلِقُ الْمَطَرُ ___ الْمُسْتَشْفَى", en_translation: "The rain slides ___ the hospital", options: ["عَنْ", "فِي", "إِلَى"], answer: "إِلَى", en_options: ["from", "in", "to"] },
      { question: "يَأْتِي الْمَطَرُ كَصَدِيقٍ ___", en_translation: "The rain comes as a ___ friend", options: ["مُوَاسٍ", "مُوَاسِيَانِ", "مُوَاسِيَةٍ"], answer: "مُوَاسٍ", en_options: ["comforting (m)", "comforting (dual)", "comforting (f)"] },
      { question: "اَلشَّاعِرَةُ ___ عَلَى السَّرِيرِ", en_translation: "The poetess is ___ on the bed", options: ["وَحِيدٌ", "وَحِيدَةٌ", "وَحِيدَاتٌ"], answer: "وَحِيدَةٌ", en_options: ["alone (m)", "alone (f)", "alone (pl)"] },
      { question: "شَبَّهَتِ الشَّاعِرَةُ الْمَطَرَ ___ امْرَأَةٍ", en_translation: "The poetess likened the rain ___ a woman", options: ["مِثْلَ", "بِـ", "فِي"], answer: "بِـ", en_options: ["like (adv)", "by/like (prep)", "in"] },
      { question: "يَمُدُّ الْمَطَرُ إِصْبَعَهُ ___ مِنَ النَّافِذَةِ", en_translation: "The rain extends its finger ___ through the window", options: ["الدَّافِئَةَ", "الْبَارِدَةَ", "الطَّوِيلَةَ"], answer: "الْبَارِدَةَ", en_options: ["the warm", "the cold", "the long"] }
    ],
    singularPlural: [
      { type: "to_singular", q: "أَسِرَّةٌ", a: "سَرِيرٌ", en: "Beds → Bed" },
      { type: "to_singular", q: "آلَامٌ", a: "أَلَمٌ", en: "Pains → Pain" },
      { type: "to_plural", q: "لَيْلٌ", a: "لَيَالٍ", en: "Night → Nights" },
      { type: "to_plural", q: "نَافِذَةٌ", a: "نَوَافِذُ", en: "Window → Windows" },
      { type: "to_singular", q: "قَصَائِدُ", a: "قَصِيدَةٌ", en: "Poems → Poem" },
      { type: "to_plural", q: "دَمْعَةٌ", a: "دُمُوعٌ", en: "Tear → Tears" }
    ],
    fillBlanks: [
      { question: "مَطَرُ اللَّيْلِ كَعَوِيلٍ ___", en: "Night rain is like a ___ wail", answer: "طَوِيلٍ", options: ["قَصِيرٍ", "طَوِيلٍ", "صَغِيرٍ"] },
      { question: "اَلْمَطَرُ يُشَارِكُ الشَّاعِرَةَ ___ فِي السَّرِيرِ", en: "The rain shares the poetess's ___ in bed", answer: "أَلَمَهَا", options: ["فَرَحَهَا", "طَعَامَهَا", "أَلَمَهَا"] },
      { question: "فَكِلَانَا ___ فِي اللَّيْلِ", en: "For both of us are ___ in the night", answer: "وَحِيدٌ", options: ["سَعِيدٌ", "وَحِيدٌ", "نَائِمٌ"] },
      { question: "يَمُدُّ الْمَطَرُ إِصْبَعَهُ ___ مِنْ خِلَالِ النَّافِذَةِ", en: "The rain extends its ___ finger through the window", answer: "الْبَارِدَةَ", options: ["الدَّافِئَةَ", "الْبَارِدَةَ", "الْمَكْسُورَةَ"] },
      { question: "اَلشَّاعِرَةُ تَسْمَعُ صُرَاخَ أُمٍّ ___", en: "The poetess hears the screams of a ___ mother", answer: "مَرِيضَةٍ", options: ["سَعِيدَةٍ", "مَرِيضَةٍ", "نَائِمَةٍ"] },
      { question: "فِي الْمَاضِي كَانَ الْمَطَرُ يَمْنَحُهَا ___", en: "In the past the rain used to grant her ___", answer: "الْفَرَحَ", options: ["الْحُزْنَ", "الْفَرَحَ", "النَّوْمَ"] }
    ],
    formQuestions: [
      { statement: "شَبَّهَتِ الشَّاعِرَةُ الْمَطَرَ بِالْمَرْأَةِ الْمَجْنُونَةِ.", en_statement: "The poetess likened the rain to a mad woman.", question: "بِمَ شَبَّهَتِ الشَّاعِرَةُ الْمَطَرَ؟", en_question: "To what did the poetess liken the rain?" },
      { statement: "يَأْتِي الْمَطَرُ لِيُوَاسِيَ الشَّاعِرَةَ.", en_statement: "The rain comes to comfort the poetess.", question: "لِمَاذَا يَأْتِي الْمَطَرُ؟", en_question: "Why does the rain come?" },
      { statement: "تَسْمَعُ الشَّاعِرَةُ صُرَاخَ أُمٍّ مَرِيضَةٍ.", en_statement: "The poetess hears the screams of a sick mother.", question: "مَاذَا تَسْمَعُ الشَّاعِرَةُ؟", en_question: "What does the poetess hear?" },
      { statement: "اَلْمَطَرُ هُوَ شَاهِدٌ عَلَى حُزْنِ الشَّاعِرَةِ.", en_statement: "The rain is a witness to the poetess's sorrow.", question: "مَنْ هُوَ الشَّاهِدُ عَلَى حُزْنِ الشَّاعِرَةِ؟", en_question: "Who is the witness to the poetess's sorrow?" },
      { statement: "تَرْقُدُ الشَّاعِرَةُ وَحِيدَةً عَلَى سَرِيرِ الْمَرَضِ.", en_statement: "The poetess lies alone on the sickbed.", question: "أَيْنَ تَرْقُدُ الشَّاعِرَةُ؟", en_question: "Where is the poetess lying?" },
      { statement: "كَانَ الْمَطَرُ فِي الْمَاضِي يُهَدْهِدُهَا لِتَنَامَ.", en_statement: "In the past, the rain used to lull her to sleep.", question: "مَاذَا كَانَ الْمَطَرُ يَفْعَلُ فِي الْمَاضِي؟", en_question: "What did the rain do in the past?" }
    ],
    shortQA: [
      { q: "كَيْفَ وَصَفَتِ الشَّاعِرَةُ مَطَرَ اللَّيْلِ فِي الْبِدَايَةِ؟", en_q: "How did the poetess describe the night rain at the beginning?", a: "وَصَفَتْهُ كَأَنَّهُ اِمْرَأَةٌ مَجْنُونَةٌ تَبْكِي وَتَضْحَكُ بِلَا سَبَبٍ.", en_a: "She described it as if it were a mad woman crying and laughing without reason.", keywords: ["اِمْرَأَةٌ مَجْنُونَةٌ", "تَبْكِي وَتَضْحَكُ"] },
      { q: "أَيْنَ تَرْقُدُ الشَّاعِرَةُ فِي الْقَصِيدَةِ؟", en_q: "Where is the poetess lying in the poem?", a: "تَرْقُدُ وَحِيدَةً عَلَى سَرِيرِ الْمَرَضِ فِي الْمُسْتَشْفَى.", en_a: "She is lying alone on a sickbed in the hospital.", keywords: ["سَرِيرِ الْمَرَضِ", "الْمُسْتَشْفَى"] },
      { q: "مَا هُوَ الدَّوْرُ الإِيجَابِيُّ لِلْمَطَرِ فِي الْقَصِيدَةِ؟", en_q: "What is the positive role of the rain in the poem?", a: "يَأْتِي كَصَدِيقٍ عَزِيزٍ يُوَاسِيهَا وَيَمْسَحُ حُزْنَهَا.", en_a: "It comes as a dear friend consoling her and wiping her sorrow.", keywords: ["صَدِيقٍ عَزِيزٍ", "يُوَاسِيهَا"] },
      { q: "بِمَ تَشْعُرُ الشَّاعِرَةُ فِي نِهَايَةِ الْقَصِيدَةِ؟", en_q: "What does the poetess feel at the end of the poem?", a: "تَشْعُرُ بِالتَّوَحُّدِ مَعَ الْمَطَرِ، فَكِلَاهُمَا وَحِيدٌ وَحَزِينٌ.", en_a: "She feels unified with the rain, for both are alone and sad.", keywords: ["التَّوَحُّدِ", "وَحِيدٌ وَحَزِينٌ"] },
      { q: "مَاذَا كَانَ الْمَطَرُ يَفْعَلُ فِي الْمَاضِي لِلشَّاعِرَةِ؟", en_q: "What did the rain used to do for the poetess in the past?", a: "كَانَ يُهَدْهِدُهَا وَيَمْنَحُهَا الْفَرَحَ وَالرَّاحَةَ.", en_a: "It used to lull her and bring her joy and comfort.", keywords: ["يُهَدْهِدُهَا", "الْفَرَحَ", "الرَّاحَةَ"] },
      { q: "مَا الَّذِي سَمِعَتْهُ الشَّاعِرَةُ مِنَ الْجَنَاحِ الْمُجَاوِرِ؟", en_q: "What did the poetess hear from the adjacent ward?", a: "سَمِعَتْ آهَاتِ وَصُرَاخَ أُمٍّ مَرِيضَةٍ تَتَعَذَّبُ.", en_a: "She heard the sighs and screams of a suffering sick mother.", keywords: ["آهَاتِ", "صُرَاخَ أُمٍّ مَرِيضَةٍ"] }
    ],
    longQA: [
      { q: "تَحَدَّثْ عَنِ التَّحَوُّلِ فِي نَظْرَةِ الشَّاعِرَةِ لِلْمَطَرِ بَيْنَ الْمَاضِي وَالْحَاضِرِ.", en_q: "Talk about the shift in the poetess's view of the rain between past and present.", a: "فِي الْمَاضِي كَانَ الْمَطَرُ يَمْنَحُهَا الْفَرَحَ وَيُهَدْهِدُهَا لِتَنَامَ بِسَعَادَةٍ. أَمَّا الآنَ، فِي الْحَاضِرِ وَفِي الْمُسْتَشْفَى، أَصْبَحَ الْمَطَرُ شَاهِدًا عَلَى أَلَمِهَا وَحُزْنِهَا الشَّدِيدِ، يَبْكِي مَعَهَا فِي وَحْدَتِهَا.", en_a: "In the past, the rain brought her joy and lulled her to sleep happily. Now, in the present and in the hospital, the rain has become a witness to her intense pain and sorrow, crying with her in her solitude.", keywords: ["الْمَاضِي", "الْفَرَحَ", "الْحَاضِرِ", "شَاهِدًا عَلَى أَلَمِهَا"] },
      { q: "كَيْفَ عَبَّرَتِ الشَّاعِرَةُ عَنِ الْمُعَانَاةِ دَاخِلَ الْمُسْتَشْفَى؟", en_q: "How did the poetess express the suffering inside the hospital?", a: "عَبَّرَتْ عَنْ ذَلِكَ بِسَمَاعِهَا آهَاتِ وَصَرَخَاتِ أُمٍّ تَتَعَذَّبُ فِي الْجَنَاحِ الْمُجَاوِرِ، مِمَّا زَادَ مِنْ أَلَمِهَا وَجَعَلَهَا تَضَعُ يَدَيْهَا عَلَى أُذُنَيْهَا وَتَبْكِي، وَالْمَطَرُ يَدْخُلُ كَعَوِيلٍ طَوِيلٍ يُشَارِكُهَا هَذَا الأَلَمَ.", en_a: "She expressed it by hearing sighs and screams of a suffering mother in the adjacent ward, which increased her pain, making her put her hands over her ears and cry, while the rain enters like a long wail sharing this pain.", keywords: ["آهَاتٍ وَصَرَخَاتٍ", "تَتَعَذَّبُ", "عَوِيلٍ طَوِيلٍ"] },
      { q: "اِشْرَحِ الصُّورَةَ الفَنِّيَّةَ فِي تَشْبِيهِ الشَّاعِرَةِ لِلْمَطَرِ.", en_q: "Explain the artistic image in the poetess's simile of the rain.", a: "شَبَّهَتِ الشَّاعِرَةُ الْمَطَرَ بِالْمَرْأَةِ الْمَجْنُونَةِ الَّتِي تَبْكِي وَتَضْحَكُ دُونَ سَبَبٍ، وَهَذَا يَعْكِسُ طَبِيعَةَ الْمَطَرِ الْمُتَقَلِّبَةَ. كَمَا شَبَّهَتْهُ بِالصَّدِيقِ الَّذِي يُوَاسِي فِي الأَحْزَانِ.", en_a: "The poetess likened the rain to a mad woman who cries and laughs without reason, reflecting the rain's unpredictable nature. She also likened it to a friend who consoles in sorrows.", keywords: ["الْمَرْأَةِ الْمَجْنُونَةِ", "تَبْكِي وَتَضْحَكُ", "الصَّدِيقِ الْمُوَاسِي"] }
    ]
  }
};

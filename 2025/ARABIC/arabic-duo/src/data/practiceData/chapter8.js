// Chapter 8 — The Stranger (اَلْغَرِيبُ)
export const chapter8Data = {
  "sec4-8": {
    grammarChoices: [
      { question: "سَمِعْتُ الْكَلْبَ ___ فِي الظَّلَامِ", en_translation: "I heard the dog ___ in the dark", options: ["يَنْبَحُ", "يَنْبَحُونَ", "تَنْبَحُ"], answer: "يَنْبَحُ", en_options: ["barking (m.s)", "barking (pl)", "barking (f)"] },
      { question: "دَخَلَ هَمَّامٌ الْبَيْتَ ___", en_translation: "Hammam entered the house ___", options: ["صَامِتًا", "صَامِتٌ", "صَامِتٍ"], answer: "صَامِتًا", en_options: ["silently (acc)", "silently (nom)", "silently (gen)"] },
      { question: "___ رُقَيَّةُ الرَّجُلَ مِنَ الْكِلَابِ", en_translation: "Ruqayya ___ the man from the dogs", options: ["أَنْقَذَتْ", "أَنْقَذَ", "أَنْقَذُوا"], answer: "أَنْقَذَتْ", en_options: ["saved (f)", "saved (m)", "saved (pl)"] },
      { question: "لَمْ ___ الرَّجُلُ طَرِيقَ الْقَرْيَةِ", en_translation: "The man did not ___ the village road", options: ["يَعْرِفْ", "يَعْرِفُ", "يَعْرِفِ"], answer: "يَعْرِفْ", en_options: ["know (jussive)", "know (indicative)", "know (other)"] },
      { question: "رَافَقَ هَمَّامٌ الرَّجُلَ فِي ___ ثُمَّ قَتَلَهُ", en_translation: "Hammam accompanied the man in the ___ then killed him", options: ["الصَّبَاحِ", "اللَّيْلِ", "الظُّهْرِ"], answer: "الصَّبَاحِ", en_options: ["morning", "night", "noon"] },
      { question: "اَلْحَمَامَةُ الْبَيْضَاءُ تَرْمُزُ لِـ ___", en_translation: "The white dove symbolizes ___", options: ["الْحَرْبِ", "السَّلَامِ", "الْحُزْنِ"], answer: "السَّلَامِ", en_options: ["war", "peace", "sorrow"] }
    ],
    singularPlural: [
      { type: "to_singular", q: "بَنَادِقُ", a: "بُنْدُقِيَّةٌ", en: "Rifles → Rifle" },
      { type: "to_singular", q: "أَكْوَاخٌ", a: "كُوخٌ", en: "Huts → Hut" },
      { type: "to_plural", q: "غَرِيبٌ", a: "غُرَبَاءُ", en: "Stranger → Strangers" },
      { type: "to_plural", q: "حَمَامَةٌ", a: "حَمَائِمُ", en: "Dove → Doves" },
      { type: "to_singular", q: "كِلَابٌ", a: "كَلْبٌ", en: "Dogs → Dog" },
      { type: "to_plural", q: "جَرِيمَةٌ", a: "جَرَائِمُ", en: "Crime → Crimes" }
    ],
    fillBlanks: [
      { question: "كَانَتِ الْكِلَابُ ___ لِأَنَّهَا لَا تُحِبُّ الْغُرَبَاءَ", en: "The dogs were ___ because they don't like strangers", answer: "مَسْعُورَةً", options: ["أَلِيفَةً", "مَسْعُورَةً", "صَغِيرَةً"] },
      { question: "رَأَى هَمَّامٌ الْغَرِيبَ وَقَرَّرَ أَنْ يَسْرِقَ ___", en: "Hammam saw the stranger and decided to steal his ___", answer: "نُقُودَهُ", options: ["سَيَّارَتَهُ", "نُقُودَهُ", "ثِيَابَهُ"] },
      { question: "أَطْلَقَتْ رُقَيَّةُ النَّارَ مِنَ ___", en: "Ruqayya fired from the ___", answer: "الْبُنْدُقِيَّةِ", options: ["النَّافِذَةِ", "الْبُنْدُقِيَّةِ", "السَّيَّارَةِ"] },
      { question: "اَلْحَمَامَةُ الْبَيْضَاءُ تَرْمُزُ لِـ ___", en: "The white dove symbolizes ___", answer: "السَّلَامِ", options: ["الْحَرْبِ", "السَّلَامِ", "الْحُزْنِ"] },
      { question: "ضَلَّ الرَّجُلُ طَرِيقَهُ فِي ___ وَاضْطُرَّ لِطَلَبِ النَّجْدَةِ", en: "The man lost his way in the ___ and was forced to seek help", answer: "الظَّلَامِ", options: ["الصَّحْرَاءِ", "الظَّلَامِ", "الْجَبَلِ"] },
      { question: "قَدَّمَتْ رُقَيَّةُ لِلْغَرِيبِ الطَّعَامَ وَ ___", en: "Ruqayya offered the stranger food and ___", answer: "الْقَهْوَةَ", options: ["الْمَاءَ", "الْقَهْوَةَ", "الشَّايَ"] }
    ],
    formQuestions: [
      { statement: "قَتَلَ هَمَّامٌ الرَّجُلَ الْغَرِيبَ.", en_statement: "Hammam killed the strange man.", question: "مَنْ قَتَلَ الرَّجُلَ الْغَرِيبَ؟", en_question: "Who killed the strange man?" },
      { statement: "ضَلَّ الرَّجُلُ طَرِيقَهُ فِي اللَّيْلِ.", en_statement: "The man lost his way in the night.", question: "مَتَى ضَلَّ الرَّجُلُ طَرِيقَهُ؟", en_question: "When did the man lose his way?" },
      { statement: "أَحْضَرَتْ رُقَيَّةُ الطَّعَامَ لِلْغَرِيبِ.", en_statement: "Ruqayya brought food for the stranger.", question: "مَاذَا أَحْضَرَتْ رُقَيَّةُ لِلْغَرِيبِ؟", en_question: "What did Ruqayya bring for the stranger?" },
      { statement: "قَتَلَتْ رُقَيَّةُ زَوْجَهَا لِتَنْتَقِمَ لِلْعَدَالَةِ.", en_statement: "Ruqayya killed her husband to avenge justice.", question: "لِمَاذَا قَتَلَتْ رُقَيَّةُ زَوْجَهَا؟", en_question: "Why did Ruqayya kill her husband?" },
      { statement: "رَافَقَ هَمَّامٌ الْغَرِيبَ فِي الصَّبَاحِ.", en_statement: "Hammam accompanied the stranger in the morning.", question: "مَتَى رَافَقَ هَمَّامٌ الْغَرِيبَ؟", en_question: "When did Hammam accompany the stranger?" },
      { statement: "ظَهَرَتِ الْحَمَامَةُ الْبَيْضَاءُ فِي نِهَايَةِ الْقِصَّةِ.", en_statement: "The white dove appeared at the end of the story.", question: "مَتَى ظَهَرَتِ الْحَمَامَةُ الْبَيْضَاءُ؟", en_question: "When did the white dove appear?" }
    ],
    shortQA: [
      { q: "لِمَاذَا جَاءَ الرَّجُلُ الْغَرِيبُ إِلَى الْكُوخِ؟", en_q: "Why did the strange man come to the hut?", a: "لِأَنَّهُ ضَلَّ الطَّرِيقَ فِي الظَّلَامِ وَكَانَتِ الْكِلَابُ تُطَارِدُهُ.", en_a: "Because he lost his way in the dark and dogs were chasing him.", keywords: ["ضَلَّ الطَّرِيقَ", "تُطَارِدُهُ"] },
      { q: "كَيْفَ تَصَرَّفَتْ رُقَيَّةُ مَعَ الْغَرِيبِ فِي اللَّيْلِ؟", en_q: "How did Ruqayya act with the stranger at night?", a: "أَنْقَذَتْهُ مِنَ الْكِلَابِ، وَقَدَّمَتْ لَهُ الطَّعَامَ وَالْقَهْوَةَ وَأَكْرَمَتْهُ كَضَيْفٍ.", en_a: "She saved him from the dogs, offered him food and coffee, and honored him as a guest.", keywords: ["أَنْقَذَتْهُ", "قَدَّمَتِ الطَّعَامَ"] },
      { q: "مَا الْجَرِيمَةُ الَّتِي اِرْتَكَبَهَا هَمَّامٌ؟", en_q: "What crime did Hammam commit?", a: "رَافَقَ الْغَرِيبَ فِي الصَّبَاحِ وَقَتَلَهُ لِيَسْرِقَ أَمْوَالَهُ.", en_a: "He accompanied the stranger in the morning and killed him to steal his money.", keywords: ["قَتَلَهُ", "لِيَسْرِقَ أَمْوَالَهُ"] },
      { q: "مَاذَا فَعَلَتْ رُقَيَّةُ عِنْدَمَا عَلِمَتْ بِخِيَانَةِ زَوْجِهَا؟", en_q: "What did Ruqayya do when she learned of her husband's betrayal?", a: "أَخَذَتِ الْبُنْدُقِيَّةَ وَأَطْلَقَتْ عَلَيْهِ النَّارَ اِنْتِقَامًا لِلْعَدَالَةِ.", en_a: "She took the rifle and shot him in revenge for justice.", keywords: ["الْبُنْدُقِيَّةَ", "اِنْتِقَامًا"] },
      { q: "مَا الدَّلَالَةُ الرَّمْزِيَّةُ لِلْحَمَامَةِ الْبَيْضَاءِ؟", en_q: "What is the symbolic significance of the white dove?", a: "تَرْمُزُ إِلَى السَّلَامِ وَالطَّهَارَةِ وَانْتِصَارِ الْعَدَالَةِ عَلَى الشَّرِّ.", en_a: "It symbolizes peace, purity, and the triumph of justice over evil.", keywords: ["السَّلَامِ", "الطَّهَارَةِ", "الْعَدَالَةِ"] },
      { q: "مَا صِفَاتُ هَمَّامٍ كَمَا تَكْشِفُهَا الْقِصَّةُ؟", en_q: "What are Hammam's traits as revealed by the story?", a: "هَمَّامٌ شَخْصٌ قَاسٍ وَطَمَّاعٌ، خَانَ الثِّقَةَ وَلَمْ يَحْتَرِمْ حَقَّ الضِّيَافَةِ.", en_a: "Hammam is a cruel and greedy person who betrayed trust and did not respect the right of hospitality.", keywords: ["قَاسٍ", "طَمَّاعٌ", "خَانَ الثِّقَةَ"] }
    ],
    longQA: [
      { q: "حَلِّلْ شَخْصِيَّةَ 'هَمَّام' مِنْ خِلَالِ أَحْدَاثِ الْقِصَّةِ.", en_q: "Analyze the character 'Hammam' through the events of the story.", a: "هَمَّامٌ شَخْصِيَّةٌ قَاسِيَةٌ وَطَمَّاعَةٌ. تَظَاهَرَ بِالْهُدُوءِ عِنْدَمَا الْتَقَى بِالْغَرِيبِ فِي اللَّيْلِ، لَكِنَّهُ خَطَّطَ لِقَتْلِهِ طَمَعًا فِي مَالِهِ. لَمْ يَحْتَرِمْ حَقَّ الضِّيَافَةِ وَخَانَ الثِّقَةَ، مِمَّا يَعْكِسُ شَرًّا عَمِيقًا فِي نَفْسِهِ.", en_a: "Hammam is a cruel and greedy character. He pretended to be calm when he met the stranger at night, but planned to kill him out of greed for his money. He didn't respect hospitality and betrayed trust, reflecting a deep evil in his soul.", keywords: ["قَاسِيَةٌ", "طَمَّاعَةٌ", "خَانَ الثِّقَةَ"] },
      { q: "مَا الدَّلَالَةُ الرَّمْزِيَّةُ لِظُهُورِ الْحَمَامَةِ الْبَيْضَاءِ فِي نِهَايَةِ الْقِصَّةِ؟", en_q: "What is the symbolic significance of the white dove appearing at the end of the story?", a: "اَلْحَمَامَةُ الْبَيْضَاءُ تَرْمُزُ إِلَى السَّلَامِ وَالطَّهَارَةِ. ظَهَرَتْ بَعْدَ أَنْ قَتَلَتْ رُقَيَّةُ زَوْجَهَا الشِّرِّيرَ لِتُؤَكِّدَ أَنَّ الْعَدَالَةَ قَدْ تَحَقَّقَتْ وَأَنَّ الأَرْضَ تَطَهَّرَتْ مِنَ الشَّرِّ.", en_a: "The white dove symbolizes peace and purity. It appeared after Ruqayya killed her evil husband to confirm that justice had been served and the earth was cleansed of evil.", keywords: ["السَّلَامِ وَالطَّهَارَةِ", "الْعَدَالَةِ", "تَطَهَّرَتْ مِنَ الشَّرِّ"] },
      { q: "كَيْفَ تُجَسِّدُ شَخْصِيَّةُ رُقَيَّةَ قِيَمَ الشَّهَامَةِ وَالنَّخْوَةِ؟", en_q: "How does Ruqayya's character embody the values of nobility and chivalry?", a: "رُقَيَّةُ أَنْقَذَتِ الْغَرِيبَ مِنَ الْكِلَابِ وَأَكْرَمَتْهُ، ثُمَّ لَمَّا عَلِمَتْ بِجَرِيمَةِ زَوْجِهَا لَمْ تَصْمُتْ بَلْ أَقْدَمَتْ عَلَى الاِنْتِقَامِ لِلْعَدَالَةِ، مُجَسِّدَةً قِيَمَ الشَّجَاعَةِ وَالنَّخْوَةِ.", en_a: "Ruqayya saved the stranger from the dogs and honored him. When she learned of her husband's crime, she did not remain silent but avenged justice, embodying values of courage and chivalry.", keywords: ["أَنْقَذَتِ الْغَرِيبَ", "أَكْرَمَتْهُ", "الاِنْتِقَامِ لِلْعَدَالَةِ", "الشَّجَاعَةِ"] }
    ]
  }
};

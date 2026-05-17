// Chapter 6 — Quran and the Environment (اَلْقُرْآنُ وَالْبِيئَةُ)
export const chapter6Data = {
  "sec2-6": {
    grammarChoices: [
      { question: "اَلْبِيئَةُ هِيَ ___ يُحِيطُ بِالإِنْسَانِ", en_translation: "The environment is ___ surrounds man", options: ["كُلُّ مَا", "أَيْنَمَا", "كَيْفَمَا"], answer: "كُلُّ مَا", en_options: ["everything that", "wherever", "however"] },
      { question: "خَلَقَ اللهُ الإِنْسَانَ وَجَعَلَهُ ___ فِي الأَرْضِ", en_translation: "Allah created man and made him a ___ on earth", options: ["خَلِيفَةً", "خَلِيفَةٌ", "خَلِيفَةٍ"], answer: "خَلِيفَةً", en_options: ["successor (acc)", "successor (nom)", "successor (gen)"] },
      { question: "يَجِبُ عَلَيْنَا ___ الإِسْرَافَ فِي الْمَاءِ", en_translation: "We must ___ wasting water", options: ["تَجَنُّبُ", "مُمَارَسَةُ", "زِيَادَةُ"], answer: "تَجَنُّبُ", en_options: ["avoid", "practice", "increase"] },
      { question: "لَا تَتْرُكِ الأَرْضَ ___", en_translation: "Do not leave the land ___", options: ["جَدْبَاءَ", "جَدْبَاءُ", "جَدْبَاءِ"], answer: "جَدْبَاءَ", en_options: ["barren (acc)", "barren (nom)", "barren (gen)"] },
      { question: "إِمَاطَةُ الأَذَى عَنِ الطَّرِيقِ مِنَ ___", en_translation: "Removing harm from the path is part of ___", options: ["الإِيمَانِ", "الْكُفْرِ", "الْعَمَلِ"], answer: "الإِيمَانِ", en_options: ["faith", "disbelief", "work"] },
      { question: "نَهَى النَّبِيُّ عَنِ التَّبَوُّلِ فِي الْمَاءِ ___", en_translation: "The Prophet forbade urinating in ___ water", options: ["الْجَارِي", "النَّظِيفِ", "الرَّاكِدِ"], answer: "الرَّاكِدِ", en_options: ["flowing", "clean", "stagnant"] }
    ],
    singularPlural: [
      { type: "to_singular", q: "أَجْيَالٌ", a: "جِيلٌ", en: "Generations → Generation" },
      { type: "to_singular", q: "أَشْجَارٌ", a: "شَجَرَةٌ", en: "Trees → Tree" },
      { type: "to_plural", q: "ثَرْوَةٌ", a: "ثَرَوَاتٌ", en: "Wealth → Wealth/Resources" },
      { type: "to_plural", q: "طَرِيقٌ", a: "طُرُقٌ", en: "Path → Paths" },
      { type: "to_singular", q: "مَوَارِدُ", a: "مَوْرِدٌ", en: "Resources → Resource" },
      { type: "to_plural", q: "بِيئَةٌ", a: "بِيئَاتٌ", en: "Environment → Environments" }
    ],
    fillBlanks: [
      { question: "اَلْبِيئَةُ فِي الإِسْلَامِ ___ يَجِبُ الْمُحَافَظَةُ عَلَيْهَا", en: "The environment in Islam is a ___ that must be preserved", answer: "أَمَانَةٌ", options: ["لُعْبَةٌ", "أَمَانَةٌ", "مُشْكِلَةٌ"] },
      { question: "نَهَى النَّبِيُّ عَنِ التَّبَوُّلِ فِي الْمَاءِ ___", en: "The Prophet forbade urinating in ___ water", answer: "الرَّاكِدِ", options: ["الْجَارِي", "النَّظِيفِ", "الرَّاكِدِ"] },
      { question: "إِمَاطَةُ الأَذَى عَنِ الطَّرِيقِ مِنَ ___", en: "Removing harm from the path is part of ___", answer: "الإِيمَانِ", options: ["الإِيمَانِ", "الْكُفْرِ", "الْعَمَلِ"] },
      { question: "أَوَّلُ مَصْدَرٍ لِلأُكْسِجِينِ هُوَ ___", en: "The primary source of oxygen is ___", answer: "النَّبَاتُ", options: ["النَّبَاتُ", "الْحَيَوَانُ", "الْحَجَرُ"] },
      { question: "مَنْ يَزْرَعُ شَجَرَةً فَكُلُّ مَا يُؤْكَلُ مِنْهَا يُعْتَبَرُ لَهُ ___", en: "Whoever plants a tree, whatever is eaten from it is considered ___ for him", answer: "صَدَقَةً", options: ["تِجَارَةً", "صَدَقَةً", "عَمَلًا"] },
      { question: "سُمِّيَتْ بَعْضُ السُّوَرِ بِأَسْمَاءِ ___ مِنَ الطَّبِيعَةِ", en: "Some Surahs were named after ___ from nature", answer: "الْحَيَوَانَاتِ", options: ["الْبِلَادِ", "الْحَيَوَانَاتِ", "الأَنْبِيَاءِ"] }
    ],
    formQuestions: [
      { statement: "اَلْبِيئَةُ أَمَانَةٌ فِي الإِسْلَامِ.", en_statement: "The environment is a trust in Islam.", question: "كَيْفَ يَنْظُرُ الإِسْلَامُ إِلَى الْبِيئَةِ؟", en_question: "How does Islam view the environment?" },
      { statement: "اَلْمَاءُ أَسَاسُ الْحَيَاةِ.", en_statement: "Water is the basis of life.", question: "مَا هُوَ أَسَاسُ الْحَيَاةِ؟", en_question: "What is the basis of life?" },
      { statement: "نَهَى النَّبِيُّ عَنِ الإِسْرَافِ.", en_statement: "The Prophet forbade wastefulness.", question: "عَمَّ نَهَى النَّبِيُّ؟", en_question: "What did the Prophet forbid?" },
      { statement: "سُمِّيَتْ بَعْضُ السُّوَرِ بِأَسْمَاءِ الْحَيَوَانَاتِ.", en_statement: "Some Surahs were named after animals.", question: "بِمَ سُمِّيَتْ بَعْضُ السُّوَرِ فِي الْقُرْآنِ؟", en_question: "What were some Surahs named after in the Quran?" },
      { statement: "جَعَلَ اللهُ الإِنْسَانَ خَلِيفَةً فِي الأَرْضِ.", en_statement: "Allah made man a successor on earth.", question: "مَاذَا جَعَلَ اللهُ الإِنْسَانَ فِي الأَرْضِ؟", en_question: "What did Allah make man on earth?" },
      { statement: "إِمَاطَةُ الأَذَى عَنِ الطَّرِيقِ مِنَ الإِيمَانِ.", en_statement: "Removing harm from the path is part of faith.", question: "مِمَّ تُعَدُّ إِمَاطَةُ الأَذَى عَنِ الطَّرِيقِ؟", en_question: "What is removing harm from the path considered part of?" }
    ],
    shortQA: [
      { q: "مَا مَفْهُومُ الْبِيئَةِ فِي الإِسْلَامِ؟", en_q: "What is the concept of environment in Islam?", a: "اَلْبِيئَةُ أَمَانَةٌ وَمِلْكِيَّةٌ عَامَّةٌ يَجِبُ الْحِفَاظُ عَلَى ثَرَوَاتِهَا.", en_a: "The environment is a trust and public property whose wealth must be preserved.", keywords: ["أَمَانَةٌ", "مِلْكِيَّةٌ عَامَّةٌ"] },
      { q: "مَاذَا قَالَ النَّبِيُّ ﷺ عَنْ إِمَاطَةِ الأَذَى؟", en_q: "What did the Prophet say about removing harm?", a: "قَالَ: إِمَاطَةُ الأَذَى عَنِ الطَّرِيقِ مِنَ الإِيمَانِ.", en_a: "He said: Removing harm from the path is a part of faith.", keywords: ["مِنَ الإِيمَانِ"] },
      { q: "اُذْكُرِ اثْنَتَيْنِ مِنَ السُّوَرِ الَّتِي سُمِّيَتْ بِأَسْمَاءِ الْحَيَوَانَاتِ.", en_q: "Mention two Surahs named after animals.", a: "سُورَةُ الْبَقَرَةِ وَسُورَةُ النَّمْلِ.", en_a: "Surat Al-Baqarah (The Cow) and Surat An-Naml (The Ant).", keywords: ["الْبَقَرَةِ", "النَّمْلِ"] },
      { q: "مَا فَضْلُ مَنْ يَزْرَعُ شَجَرَةً فِي الإِسْلَامِ؟", en_q: "What is the virtue of planting a tree in Islam?", a: "كُلُّ مَا يُؤْكَلُ مِنْ هَذِهِ الشَّجَرَةِ يُعْتَبَرُ لَهُ صَدَقَةً.", en_a: "Whatever is eaten from this tree is considered charity for him.", keywords: ["صَدَقَةً"] },
      { q: "لِمَ جَعَلَ اللهُ الإِنْسَانَ خَلِيفَةً فِي الأَرْضِ؟", en_q: "Why did Allah make man a successor on earth?", a: "لِيُصْلِحَ وَيُعَمِّرَ الأَرْضَ وَيُحَافِظَ عَلَى ثَرَوَاتِهَا الطَّبِيعِيَّةِ.", en_a: "To reform, inhabit and preserve its natural resources.", keywords: ["لِيُصْلِحَ", "يُعَمِّرَ", "يُحَافِظَ"] },
      { q: "مَا تَوْجِيهَاتُ النَّبِيِّ ﷺ لِلْحِفَاظِ عَلَى الثَّرْوَةِ الْمَائِيَّةِ؟", en_q: "What are the Prophet's directives to preserve water resources?", a: "حَذَّرَ مِنَ الإِسْرَافِ فِي الْمَاءِ حَتَّى أَثْنَاءَ الْوُضُوءِ، وَنَهَى عَنْ تَلْوِيثِ الْمِيَاهِ.", en_a: "He warned against wasting water even during ablution, and forbade polluting water.", keywords: ["الإِسْرَافِ", "تَلْوِيثِ الْمِيَاهِ"] }
    ],
    longQA: [
      { q: "بَيِّنِ الْعَلَاقَةَ بَيْنَ تَعَالِيمِ الْقُرْآنِ وَالْمُحَافَظَةِ عَلَى الْبِيئَةِ.", en_q: "Explain the relationship between Quranic teachings and environmental preservation.", a: "اَلْقُرْآنُ أَمَرَ بِالإِصْلَاحِ وَنَهَى عَنِ الإِفْسَادِ فِي الأَرْضِ. حَثَّ عَلَى التَّفَكُّرِ فِي الْمَخْلُوقَاتِ كَالْمَاءِ وَالْحَيَوَانَاتِ، وَجَعَلَ الإِنْسَانَ خَلِيفَةً مَسْؤُولًا عَنْ حِمَايَةِ هَذِهِ الْمَوَارِدِ الطَّبِيعِيَّةِ وَعَدَمِ اسْتِنْزَافِهَا أَوْ تَلْوِيثِهَا.", en_a: "The Quran commanded reform and forbade corruption on earth. It urged reflecting on creations like water and animals, and made man a responsible caliph to protect these natural resources from depletion or pollution.", keywords: ["الإِصْلَاحِ", "خَلِيفَةً", "الْمَوَارِدِ الطَّبِيعِيَّةِ"] },
      { q: "مَا تَوْجِيهَاتُ النَّبِيِّ ﷺ لِلْحِفَاظِ عَلَى الثَّرْوَةِ الْمَائِيَّةِ؟", en_q: "What are the Prophet's directives to preserve water resources?", a: "حَذَّرَ مِنَ الإِسْرَافِ فِي الْمَاءِ حَتَّى أَثْنَاءَ الْوُضُوءِ (لَا يَتَجَاوَزُ ثَلَاثَ غَسَلَاتٍ). كَمَا نَهَى عَنْ تَلْوِيثِ الْمِيَاهِ عَبْرَ مَنْعِ التَّبَوُّلِ فِي الْمَاءِ الرَّاكِدِ وَالتَّنَفُّسِ فِي إِنَاءِ الشُّرْبِ.", en_a: "He warned against wasting water even during ablution (not exceeding three washes). He also forbade polluting water by prohibiting urinating in stagnant water and breathing into a drinking vessel.", keywords: ["الإِسْرَافِ", "تَلْوِيثِ الْمِيَاهِ", "الْمَاءِ الرَّاكِدِ"] },
      { q: "كَيْفَ يُمْكِنُ لِلْمُجْتَمَعِ الإِسْلَامِيِّ أَنْ يُطَبِّقَ تَعَالِيمَ الإِسْلَامِ فِي حِمَايَةِ الْبِيئَةِ؟", en_q: "How can Islamic society apply Islamic teachings in protecting the environment?", a: "يُمْكِنُ لِلْمُجْتَمَعِ الإِسْلَامِيِّ تَطْبِيقُ ذَلِكَ بِزِرَاعَةِ الأَشْجَارِ، وَتَرْشِيدِ اسْتِهْلَاكِ الْمَاءِ، وَالْمُحَافَظَةِ عَلَى نَظَافَةِ الْبِيئَةِ، وَإِمَاطَةِ الأَذَى عَنِ الطُّرُقِ، مُسْتَلْهِمًا مِنَ التَّعَالِيمِ النَّبَوِيَّةِ.", en_a: "Islamic society can do this by planting trees, rationalizing water consumption, maintaining environmental cleanliness, and removing harm from roads, inspired by prophetic teachings.", keywords: ["زِرَاعَةِ الأَشْجَارِ", "تَرْشِيدِ اسْتِهْلَاكِ الْمَاءِ", "التَّعَالِيمِ النَّبَوِيَّةِ"] }
    ]
  }
};

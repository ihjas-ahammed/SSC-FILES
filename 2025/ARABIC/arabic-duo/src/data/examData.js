// Comprehensive Exam Data Structured by Chapter (Section)
// Ensures minimum equal count of questions for every mode per chapter

export const examDataBySection = {
  // Chapter 1: Tourism (السياحة)
  "sec5-1": {
    grammarChoices: [
      { question: "السياحة ___ للاقتصاد", en_translation: "Tourism is ___ for the economy", options: ["مهم", "مهمة", "مهمات"], answer: "مهمة", en_options: ["important (m)", "important (f)", "important (pl)"] },
      { question: "تفتح السياحة أبواب ___", en_translation: "Tourism opens the doors of ___", options: ["التعلم", "النوم", "الأكل"], answer: "التعلم", en_options: ["learning", "sleep", "eating"] },
      { question: "يجب على الدولة تحسين ___ التحتية", en_translation: "The state must improve the infra___", options: ["المبنى", "البنية", "المدينة"], answer: "البنية", en_options: ["building", "structure", "city"] },
      { question: "السفر يمنح الإنسان ___ جديدة", en_translation: "Travel grants a person a new ___", options: ["فرصة", "فرص", "فراص"], answer: "فرصة", en_options: ["opportunity", "opportunities", "opportunities (wrong plural)"] }
    ],
    singularPlural: [
      { type: "to_singular", q: "ركائز", a: "ركيزة", en: "Pillars -> Pillar" },
      { type: "to_singular", q: "شعوب", a: "شعب", en: "Peoples -> People" },
      { type: "to_plural", q: "دولة", a: "دول", en: "State -> States" },
      { type: "to_plural", q: "سائح", a: "سياح", en: "Tourist -> Tourists" }
    ],
    fillBlanks: [
      { question: "السياحة هي ___ تعكس حضارة الشعوب", en: "Tourism is a ___ reflecting the civilization of peoples", answer: "مرآة", options: ["صورة", "نافذة", "مرآة"] },
      { question: "السياحة تساهم في ___ أعداد كبيرة من الناس", en: "Tourism contributes to ___ large numbers of people", answer: "تشغيل", options: ["تعطيل", "تشغيل", "طرد"] },
      { question: "الحضارة ليست بالبنايات العالية بل هي ___ المواطنين", en: "Civilization is not high buildings but the ___ of citizens", answer: "أخلاق", options: ["أموال", "أخلاق", "ملابس"] },
      { question: "من أنواع السياحة، السياحة الـ ___ لزيارة الأماكن المقدسة", en: "Among types of tourism is ___ tourism to visit sacred places", answer: "دينية", options: ["تجارية", "دينية", "ترفيهية"] }
    ],
    formQuestions: [
      { statement: "نعم، السياحة مهمة للاقتصاد.", en_statement: "Yes, tourism is important for the economy.", question: "هل السياحة مهمة للاقتصاد؟", en_question: "Is tourism important for the economy?" },
      { statement: "تقرب السياحة الشعوب من بعضها.", en_statement: "Tourism brings peoples closer to each other.", question: "ماذا تقرب السياحة؟", en_question: "What does tourism bring closer?" },
      { statement: "يجب على الدولة تحسين البنية التحتية.", en_statement: "The state must improve the infrastructure.", question: "ماذا يجب على الدولة أن تحسن؟", en_question: "What must the state improve?" },
      { statement: "الحضارة هي أخلاق المواطنين.", en_statement: "Civilization is the morals of citizens.", question: "ما هي الحضارة؟", en_question: "What is civilization?" }
    ],
    shortQA: [
      { q: "ما هي السياحة؟", en_q: "What is tourism?", a: "هي ركيزة في بناء الاقتصاد ومرآة تعكس حضارة الشعوب.", en_a: "It is a pillar in building the economy and a mirror reflecting the civilization of peoples.", keywords: ["ركيزة", "الاقتصاد", "مرآة"] },
      { q: "اذكر نوعين من أنواع السياحة.", en_q: "Mention two types of tourism.", a: "السياحة الترفيهية والسياحة الدينية.", en_a: "Recreational tourism and religious tourism.", keywords: ["الترفيهية", "الدينية"] },
      { q: "ما هو دور المواطن تجاه السائح؟", en_q: "What is the citizen's role towards the tourist?", a: "أن يحسن التعامل مع السائح ولا يستغله.", en_a: "To treat the tourist well and not exploit him.", keywords: ["يحسن التعامل", "لا يستغله"] },
      { q: "إلام دعا القرآن الكريم في الأرض؟", en_q: "What did the Holy Quran call for on earth?", a: "دعا إلى التأمل والسير في الأرض للتعلم.", en_a: "It called for contemplation and traveling in the earth to learn.", keywords: ["التأمل", "السير"] }
    ],
    longQA: [
      { q: "اشرح أهمية السياحة اقتصادياً واجتماعياً.", en_q: "Explain the economic and social importance of tourism.", a: "اقتصادياً، السياحة توفر فرص العمل وتحسن البنية التحتية وتدعم التجارة والاستثمار. واجتماعياً، تفتح أبواب التعلم وتقرب بين الشعوب وتنشر ثقافتهم.", en_a: "Economically, tourism provides job opportunities, improves infrastructure, and supports trade and investment. Socially, it opens doors for learning, brings peoples closer, and spreads their culture.", keywords: ["فرص العمل", "البنية التحتية", "تقرب بين الشعوب"] },
      { q: "بين واجبات الدولة والمجتمع لتطوير السياحة.", en_q: "Explain the duties of the state and society to develop tourism.", a: "يجب على الدولة تحسين الطرق والمواصلات وترميم الأماكن التاريخية، بينما يجب على المجتمع التحلي بالأخلاق الحسنة مع الزوار لتكوين صورة مشرفة.", en_a: "The state must improve roads and transport and restore historical places, while society must have good morals with visitors to form an honorable image.", keywords: ["تحسين الطرق", "ترميم", "الأخلاق الحسنة"] }
    ]
  },

  // Chapter 2: Drugs (المخدرات)
  "sec6-2": {
    grammarChoices: [
      { question: "كانت أمي ___ طوال الليل", en_translation: "My mother was ___ all night", options: ["يبكي", "تبكي", "أبكي"], answer: "تبكي", en_options: ["crying (m)", "crying (f)", "crying (I)"] },
      { question: "تعرفت ___ رجل غريب", en_translation: "I met ___ a strange man", options: ["في", "عن", "على"], answer: "على", en_options: ["in", "about", "on (met with)"] },
      { question: "أصبحت طبيباً ___ لعلاج المدمنين", en_translation: "I became a ___ doctor to treat addicts", options: ["نفسانياً", "نفساني", "نفسانية"], answer: "نفسانياً", en_options: ["psychiatric (acc)", "psychiatric (nom)", "psychiatric (f)"] },
      { question: "الخطر كان مترصداً كالـ ___", en_translation: "The danger was lurking like a ___", options: ["نمر", "فأر", "عصفور"], answer: "نمر", en_options: ["tiger", "mouse", "bird"] }
    ],
    singularPlural: [
      { type: "to_singular", q: "معابد", a: "معبد", en: "Temples -> Temple" },
      { type: "to_singular", q: "مشروبات", a: "مشروب", en: "Drinks -> Drink" },
      { type: "to_plural", q: "خطر", a: "أخطار", en: "Danger -> Dangers" },
      { type: "to_plural", q: "شاب", a: "شباب", en: "Youth (singular) -> Youth (plural)" }
    ],
    fillBlanks: [
      { question: "سَكَبَ الرجل المخدرات في ___", en: "The man poured the drugs in the ___", answer: "العصير", options: ["الطعام", "العصير", "الماء"] },
      { question: "صدمت سيارة أمي فأصبحت في حالة ___", en: "A car hit my mother so she became in a ___ condition", answer: "حرجة", options: ["جيدة", "حرجة", "عادية"] },
      { question: "بفضل نصيحة أمي، دخلت مركز علاج ___", en: "Thanks to my mother's advice, I entered a ___ treatment center", answer: "الإدمان", options: ["القلب", "الإدمان", "العيون"] },
      { question: "الرجل الغريب كان حلو ___", en: "The strange man was sweet of ___", answer: "المنطق", options: ["المنطق", "الطعام", "الشكل"] }
    ],
    formQuestions: [
      { statement: "تعاطى الشاب المخدرات.", en_statement: "The youth took drugs.", question: "ماذا تعاطى الشاب؟", en_question: "What did the youth take?" },
      { statement: "صدمت السيارة الأم.", en_statement: "The car hit the mother.", question: "من صدمت السيارة؟", en_question: "Who did the car hit?" },
      { statement: "أصبح الشاب طبيباً نفسانياً.", en_statement: "The youth became a psychiatrist.", question: "ماذا أصبح الشاب؟", en_question: "What did the youth become?" },
      { statement: "التقى الغريب بالشاب في المقهى.", en_statement: "The stranger met the youth in the cafe.", question: "أين التقى الغريب بالشاب؟", en_question: "Where did the stranger meet the youth?" }
    ],
    shortQA: [
      { q: "لماذا كانت الأم تبكي؟", en_q: "Why was the mother crying?", a: "بسبب إدمان ابنها الوحيد على المخدرات.", en_a: "Because of her only son's addiction to drugs.", keywords: ["إدمان", "ابنها"] },
      { q: "أين التقى الشاب بالرجل الغريب؟", en_q: "Where did the youth meet the strange man?", a: "التقى به في المقهى الذي يتردد عليه.", en_a: "He met him in the cafe he frequents.", keywords: ["المقهى", "يتردد"] },
      { q: "ماذا فعل الغريب ليوقع الشاب في الإدمان؟", en_q: "What did the stranger do to make the youth fall into addiction?", a: "سكب مواد منشطة في عصير الشاب.", en_a: "He poured stimulants into the youth's juice.", keywords: ["سكب", "مواد منشطة", "عصير"] },
      { q: "ماذا أصبح الشاب بعد تعافيه؟", en_q: "What did the youth become after his recovery?", a: "أصبح طبيباً نفسانياً لعلاج المدمنين.", en_a: "He became a psychiatrist treating addicts.", keywords: ["طبيباً نفسانياً", "علاج المدمنين"] }
    ],
    longQA: [
      { q: "كيف خدع الرجل الغريب الشاب في المقهى؟", en_q: "How did the strange man deceive the youth in the cafe?", a: "كان الرجل حلو المنطق، تحدث معه في قضايا علمية واجتماعية لكسب ثقته، ثم دس المخدرات سراً في عصير الشاب ليجعله مدمناً.", en_a: "The man was sweet-tongued, talked with him about scientific and social issues to gain his trust, then secretly slipped drugs into the youth's juice to make him addicted.", keywords: ["حلو المنطق", "كسب ثقته", "دس المخدرات"] },
      { q: "اشرح نقطة التحول في حياة الشاب المدمن.", en_q: "Explain the turning point in the addicted youth's life.", a: "تعرضت أمه لحادث سير أليم وهي في طريقها للبحث عن علاج له. عندما رآها في المستشفى وسمع نصيحتها، قرر بحزم التوبة وتلقي العلاج في المركز.", en_a: "His mother suffered a painful traffic accident while on her way to find treatment for him. When he saw her in the hospital and heard her advice, he firmly decided to repent and get treatment at the center.", keywords: ["حادث سير", "المستشفى", "نصيحتها", "التوبة"] }
    ]
  },

  // Chapter 3: Night Rain (مطر الليل)
  "sec7-3": [
    {
      grammarChoices: [
        { question: "مطر الليل مثل امرأة ___", en_translation: "Night rain is like a ___ woman", options: ["مجنونة", "مجنون", "عاقلة"], answer: "مجنونة", en_options: ["mad (f)", "mad (m)", "sane (f)"] },
        { question: "ينزلق المطر ___ المستشفى", en_translation: "The rain slides ___ the hospital", options: ["عن", "في", "إلى"], answer: "إلى", en_options: ["from", "in", "to"] },
        { question: "يأتي المطر كصديق ___", en_translation: "The rain comes as a ___ friend", options: ["مواسٍ", "مواسيان", "مواسية"], answer: "مواسٍ", en_options: ["comforting (m)", "comforting (dual)", "comforting (f)"] },
        { question: "الشاعرة ___ على السرير", en_translation: "The poetess is ___ on the bed", options: ["وحيد", "وحيدة", "وحيدات"], answer: "وحيدة", en_options: ["alone (m)", "alone (f)", "alone (pl)"] }
      ],
      singularPlural: [
        { type: "to_singular", q: "أسرة", a: "سرير", en: "Beds -> Bed" },
        { type: "to_singular", q: "آلام", a: "ألم", en: "Pains -> Pain" },
        { type: "to_plural", q: "ليل", a: "ليالي", en: "Night -> Nights" },
        { type: "to_plural", q: "نافذة", a: "نوافذ", en: "Window -> Windows" }
      ],
      fillBlanks: [
        { question: "مطر الليل كعويل ___", en: "Night rain is like a ___ wail", answer: "طويل", options: ["قصير", "طويل", "صغير"] },
        { question: "المطر يشارك الشاعرة ___ في السرير", en: "The rain shares the poetess's ___ in bed", answer: "ألمها", options: ["فرحها", "طعامها", "ألمها"] },
        { question: "فكلانا ___ في الليل", en: "For both of us are ___ in the night", answer: "وحيد", options: ["سعيد", "وحيد", "نائم"] },
        { question: "يمد المطر إصبعه ___ من خلال النافذة", en: "The rain extends its ___ finger through the window", answer: "الباردة", options: ["الدافئة", "الباردة", "المكسورة"] }
      ],
      formQuestions: [
        { statement: "شبهت الشاعرة المطر بالمرأة المجنونة.", en_statement: "The poetess likened the rain to a mad woman.", question: "بم شبهت الشاعرة المطر؟", en_question: "To what did the poetess liken the rain?" },
        { statement: "يأتي المطر ليواسي الشاعرة.", en_statement: "The rain comes to comfort the poetess.", question: "لماذا يأتي المطر؟", en_question: "Why does the rain come?" },
        { statement: "تسمع الشاعرة صراخ أم مريضة.", en_statement: "The poetess hears the screams of a sick mother.", question: "ماذا تسمع الشاعرة؟", en_question: "What does the poetess hear?" },
        { statement: "المطر هو شاهد على حزن الشاعرة.", en_statement: "The rain is a witness to the poetess's sorrow.", question: "من هو الشاهد على حزن الشاعرة؟", en_question: "Who is the witness to the poetess's sorrow?" }
      ],
      shortQA: [
        { q: "كيف وصفت الشاعرة مطر الليل في البداية؟", en_q: "How did the poetess describe the night rain at the beginning?", a: "وصفته كأنه امرأة مجنونة تبكي وتضحك بلا سبب.", en_a: "She described it as if it were a mad woman crying and laughing without reason.", keywords: ["امرأة مجنونة", "تبكي وتضحك"] },
        { q: "أين ترقد الشاعرة في القصيدة؟", en_q: "Where is the poetess lying in the poem?", a: "ترقد وحيدة على سرير المرض في المستشفى.", en_a: "She is lying alone on a sickbed in the hospital.", keywords: ["سرير المرض", "المستشفى"] },
        { q: "ما هو دور المطر الإيجابي في القصيدة؟", en_q: "What is the positive role of the rain in the poem?", a: "يأتي كصديق عزيز يواسيها ويمسح حزنها.", en_a: "It comes as a dear friend consoling her and wiping her sorrow.", keywords: ["صديق عزيز", "يواسيها"] },
        { q: "بم تشعر الشاعرة في نهاية القصيدة؟", en_q: "What does the poetess feel at the end of the poem?", a: "تشعر بالتوحد مع المطر، فكلاهما وحيد وحزين.", en_a: "She feels unified with the rain, for both are alone and sad.", keywords: ["التوحد", "وحيد وحزين"] }
      ],
      longQA: [
        { q: "تحدث عن التحول في نظرة الشاعرة للمطر بين الماضي والحاضر.", en_q: "Talk about the shift in the poetess's view of the rain between the past and present.", a: "في الماضي كان المطر يمنحها الفرح ويهدهدها لتنام بسعادة. أما الآن، في الحاضر وفي المستشفى، أصبح المطر شاهداً على ألمها وحزنها الشديد، يبكي معها في وحدتها.", en_a: "In the past, the rain brought her joy and lulled her to sleep happily. Now, in the present and in the hospital, the rain has become a witness to her intense pain and sorrow, crying with her in her solitude.", keywords: ["الماضي", "الفرح", "الحاضر", "شاهد على ألمها"] },
        { q: "كيف عبرت الشاعرة عن المعاناة داخل المستشفى؟", en_q: "How did the poetess express the suffering inside the hospital?", a: "عبرت عن ذلك بسماعها آهات وصرخات أم تتعذب في الجناح المجاور، مما زاد من ألمها وجعلها تضع يديها على أذنيها وتبكي، والمطر يدخل كعويل طويل يشاركها هذا الألم.", en_a: "She expressed it by hearing the sighs and screams of a suffering mother in the adjacent ward, which increased her pain, making her put her hands over her ears and cry, while the rain enters like a long wail sharing this pain.", keywords: ["آهات وصرخات", "تتعذب", "عويل طويل"] }
      ]
    }
  ],

  // Chapter 4: India Wisdom (الهند أرض الحكمة)
  "sec3-4": {
    grammarChoices: [
      { question: "الهند أمة ___ للغات", en_translation: "India is a nation ___ of languages", options: ["متعددة", "متعدد", "تعدد"], answer: "متعددة", en_options: ["multiple (f)", "multiple (m)", "multiplicity"] },
      { question: "شيدت مدينة جايبور ___ أسوار زهرية", en_translation: "The city of Jaipur was built ___ pink walls", options: ["من", "في", "إلى"], answer: "من", en_options: ["from/with", "in", "to"] },
      { question: "تاج محل هو ___ عالمية", en_translation: "Taj Mahal is a global ___", options: ["أعجوبة", "قصر", "مبنى"], answer: "أعجوبة", en_options: ["wonder", "palace", "building"] },
      { question: "العلم الهندي يحتوي ___ دولاب أزرق", en_translation: "The Indian flag contains ___ a blue wheel", options: ["على", "في", "من"], answer: "على", en_options: ["on/contains", "in", "from"] }
    ],
    singularPlural: [
      { type: "to_singular", q: "قرون", a: "قرن", en: "Centuries -> Century" },
      { type: "to_singular", q: "متاحف", a: "متحف", en: "Museums -> Museum" },
      { type: "to_plural", q: "لون", a: "ألوان", en: "Color -> Colors" },
      { type: "to_plural", q: "أسطورة", a: "أساطير", en: "Legend -> Legends" }
    ],
    fillBlanks: [
      { question: "الهند أرض الحكمة و ___", en: "India is the land of wisdom and ___", answer: "الأساطير", options: ["التكنولوجيا", "الأساطير", "الأسلحة"] },
      { question: "تُرجم كتاب كليلة ودمنة من اللغة ___", en: "The book Kalila and Dimna was translated from the ___ language", answer: "السنسكريتية", options: ["العربية", "الإنجليزية", "السنسكريتية"] },
      { question: "نالت الهند استقلالها عام ___", en: "India gained independence in the year ___", answer: "1947", options: ["1950", "1947", "1857"] },
      { question: "تسمى جايبور بالمدينة ___", en: "Jaipur is called the ___ City", answer: "الزهرية", options: ["الحمراء", "الزهرية", "البيضاء"] }
    ],
    formQuestions: [
      { statement: "توجد بوابة الهند في مومباي.", en_statement: "The Gateway of India is located in Mumbai.", question: "أين توجد بوابة الهند؟", en_question: "Where is the Gateway of India located?" },
      { statement: "شعار الهند هو أربعة أسود.", en_statement: "India's emblem is four lions.", question: "ما هو شعار الهند الوطني؟", en_question: "What is India's national emblem?" },
      { statement: "بنى شاه جهان تاج محل.", en_statement: "Shah Jahan built the Taj Mahal.", question: "من بنى تاج محل؟", en_question: "Who built the Taj Mahal?" },
      { statement: "في دلهي جامعات إسلامية كبيرة.", en_statement: "In Delhi there are large Islamic universities.", question: "ماذا يوجد في دلهي؟", en_question: "What is in Delhi?" }
    ],
    shortQA: [
      { q: "ما هي عاصمة الهند؟", en_q: "What is the capital of India?", a: "دلهي هي عاصمة الهند وتجمع بين القديم والحديث.", en_a: "Delhi is the capital of India, blending the old and the new.", keywords: ["دلهي", "عاصمة"] },
      { q: "لماذا بنى شاه جهان تاج محل؟", en_q: "Why did Shah Jahan build the Taj Mahal?", a: "بناه تذكاراً لحبه العميق لزوجته الملكة ممتاز.", en_a: "He built it as a memorial to his deep love for his wife Queen Mumtaz.", keywords: ["تذكاراً لحبه", "الملكة ممتاز"] },
      { q: "بم تشتهر مدينة مومباي؟", en_q: "What is the city of Mumbai famous for?", a: "تشتهر بكونها العاصمة التجارية وأكبر منتج للأفلام السينمائية وبوابة الهند.", en_a: "It is famous for being the commercial capital, the largest producer of cinematic films, and the Gateway of India.", keywords: ["التجارية", "الأفلام", "بوابة الهند"] },
      { q: "ماذا يرمز شعار الهند (الأسود الأربعة)؟", en_q: "What does the emblem of India (the four lions) symbolize?", a: "يرمز إلى القوة، ومكتوب تحته: الصدق دائماً هو الظافر.", en_a: "It symbolizes strength, and beneath it is written: Truth alone always triumphs.", keywords: ["القوة", "الصدق"] }
    ],
    longQA: [
      { q: "تكلم عن الجامعات والتعليم العالي في الهند.", en_q: "Talk about universities and higher education in India.", a: "تضم الهند حوالي 900 جامعة، منها 30 جامعة تدرس اللغة العربية. من أشهرها في دلهي: جامعة جواهر لال نهرو، والجامعة الملية الإسلامية. وهناك جامعات كبرى أخرى كجامعة عليكره وعثمانية تساهم في التطور العلمي.", en_a: "India has about 900 universities, of which 30 teach the Arabic language. The most famous in Delhi are Jawaharlal Nehru University and Jamia Millia Islamia. There are other major universities like Aligarh and Osmania contributing to scientific development.", keywords: ["900 جامعة", "اللغة العربية", "جواهر لال نهرو", "عليكره"] },
      { q: "صف مناخ الهند ومواسمه.", en_q: "Describe India's climate and seasons.", a: "يتميز مناخ الهند بثلاثة مواسم: الشتاء (نوفمبر إلى مارس) تتساقط فيه الثلوج شمالاً، والصيف (أبريل إلى يونيو) حيث تشتد الحرارة، وموسم الأمطار (الرياح الموسمية/مونسون) الذي تهطل فيه الأمطار بغزارة على السواحل.", en_a: "India's climate is characterized by three seasons: Winter (Nov to Mar) with snow in the north, Summer (Apr to Jun) with intense heat, and the Rainy season (Monsoon) with heavy rains along the coasts.", keywords: ["الشتاء", "الصيف", "موسم الأمطار", "مونسون"] }
    ]
  },

  // Chapter 5: Munnar (رحلة إلى مونار)
  "sec1-5": {
    grammarChoices: [
      { question: "نسمع كثيراً ___ البلاد البعيدة", en_translation: "We hear a lot ___ far countries", options: ["في", "عن", "بـ"], answer: "عن", en_options: ["in", "about", "with"] },
      { question: "مونار ___ أرض الشلالات", en_translation: "Munnar ___ the land of waterfalls", options: ["هي", "هو", "هم"], answer: "هي", en_options: ["is (she/it)", "is (he/it)", "are (they)"] },
      { question: "الطريق كان ___ خضراء", en_translation: "The road was like a green ___", options: ["لوحةٍ", "لوحةٌ", "لوحةً"], answer: "لوحةٍ", en_options: ["painting (genitive)", "painting (nom)", "painting (acc)"] },
      { question: "استأجرنا ___", en_translation: "We rented a ___", options: ["سيارةٌ", "سيارةً", "سيارةٍ"], answer: "سيارةً", en_options: ["car (nom)", "car (acc)", "car (gen)"] }
    ],
    singularPlural: [
      { type: "to_singular", q: "شلالات", a: "شلال", en: "Waterfalls -> Waterfall" },
      { type: "to_singular", q: "أكواخ", a: "كوخ", en: "Cottages -> Cottage" },
      { type: "to_plural", q: "نهر", a: "أنهار", en: "River -> Rivers" },
      { type: "to_plural", q: "طريق", a: "طرق", en: "Road -> Roads" }
    ],
    fillBlanks: [
      { question: "حطت رحلتنا في ولاية ___", en: "Our flight landed in the state of ___", answer: "كيرلا", options: ["كيرلا", "دلهي", "أغرا"] },
      { question: "سماها التجار العرب بـ ___", en: "Arab merchants called it ___", answer: "خير الله", options: ["أرض السحر", "خير الله", "جنة الأرض"] },
      { question: "نزلنا في فندق يطل على شارع ___", en: "We stayed in a hotel overlooking a ___ street", answer: "حيوي", options: ["حيوي", "هادئ", "مظلم"] },
      { question: "رأينا الماعز الجبلي ___", en: "We saw the ___ mountain goat", answer: "المخطط", options: ["الأسود", "المخطط", "الصغير"] }
    ],
    formQuestions: [
      { statement: "تقع مونار في كيرلا.", en_statement: "Munnar is located in Kerala.", question: "أين تقع مونار؟", en_question: "Where is Munnar located?" },
      { statement: "سميت مونار لأنها ملتقى ثلاثة أنهار.", en_statement: "Munnar was named because it is the meeting point of three rivers.", question: "لماذا سميت مونار بهذا الاسم؟", en_question: "Why was Munnar named this name?" },
      { statement: "نزلنا في منتجع بلاك بري.", en_statement: "We stayed at the Blackberry Resort.", question: "أين نزلتم في مونار؟", en_question: "Where did you stay in Munnar?" },
      { statement: "اشترى المسافرون الصناعات اليدوية.", en_statement: "The travelers bought handicrafts.", question: "ماذا اشترى المسافرون؟", en_question: "What did the travelers buy?" }
    ],
    shortQA: [
      { q: "ماذا تعني كلمة مونار؟", en_q: "What does the word Munnar mean?", a: "تعني ملتقى الأنهار الثلاثة.", en_a: "It means the confluence of the three rivers.", keywords: ["ملتقى", "الأنهار الثلاثة"] },
      { q: "ماذا أطلق العرب الأوائل على كيرلا؟", en_q: "What did the early Arabs call Kerala?", a: "أطلقوا عليها اسم 'خير الله'.", en_a: "They called it 'Khayr Allah' (God's Bounty).", keywords: ["خير الله"] },
      { q: "كيف وصف الكاتب طريق مونار؟", en_q: "How did the author describe the road to Munnar?", a: "وصفه كأنه لوحة خضراء مليئة بالغابات الكثيفة والشلالات.", en_a: "He described it as a green painting full of dense forests and waterfalls.", keywords: ["لوحة خضراء", "غابات", "شلالات"] },
      { q: "ما الحيوان العجيب الذي رأوه في المنتزه الوطني؟", en_q: "What wondrous animal did they see in the National Park?", a: "رأوا الماعز الجبلي المخطط الذي لا يوجد إلا هناك.", en_a: "They saw the striped mountain goat that exists only there.", keywords: ["الماعز الجبلي", "المخطط"] }
    ],
    longQA: [
      { q: "تحدث عن تجربة الكاتب في مدينة كوتشين قبل التوجه لمونار.", en_q: "Talk about the author's experience in Cochin before heading to Munnar.", a: "أقام الكاتب في فندق مطل على شارع حيوي، واستمتع ببشاشة الناس ونظافة المدينة. زار المساجد الجميلة وتذوق الطعام الهندي اللذيذ قبل أن يستأجر سيارة للذهاب إلى مونار.", en_a: "The author stayed in a hotel overlooking a vibrant street, enjoyed the people's cheerfulness and the city's cleanliness. He visited beautiful mosques and tasted delicious Indian food before renting a car to go to Munnar.", keywords: ["فندق مطل", "بشاشة الناس", "نظافة", "الطعام الهندي"] },
      { q: "صف الطبيعة في مونار كما رآها الكاتب.", en_q: "Describe the nature in Munnar as the author saw it.", a: "مونار هي أرض الشلالات والجبال الخضراء الساحرة. يغطيها الضباب وتتدفق المياه من صخورها. الخضرة فيها لا تنتهي، وتمنح الزائر شعوراً بأنه في جنة من جنات الأرض.", en_a: "Munnar is the land of waterfalls and enchanting green mountains. Fog covers it and water flows from its rocks. The greenery there never ends, giving the visitor a feeling of being in an earthly paradise.", keywords: ["الشلالات", "الجبال الخضراء", "يغطيها الضباب", "جنة من جنات الأرض"] }
    ]
  },

  // Chapter 6: Quran & Env (القرآن والبيئة)
  "sec2-6": {
    grammarChoices: [
      { question: "البيئة هي ___ يحيط بالإنسان", en_translation: "The environment is ___ surrounds man", options: ["كل ما", "أينما", "كيفما"], answer: "كل ما", en_options: ["everything that", "wherever", "however"] },
      { question: "خلق الله الإنسان وجعله ___ في الأرض", en_translation: "Allah created man and made him a ___ on earth", options: ["خليفةً", "خليفةٌ", "خليفةٍ"], answer: "خليفةً", en_options: ["successor (acc)", "successor (nom)", "successor (gen)"] },
      { question: "يجب علينا ___ الإسراف في الماء", en_translation: "We must ___ wasting water", options: ["تجنب", "ممارسة", "زيادة"], answer: "تجنب", en_options: ["avoid", "practice", "increase"] },
      { question: "لا تترك الأرض ___", en_translation: "Do not leave the land ___", options: ["جدباءَ", "جدباءٌ", "جدباءٍ"], answer: "جدباءَ", en_options: ["barren (acc)", "barren (nom)", "barren (gen)"] }
    ],
    singularPlural: [
      { type: "to_singular", q: "أجيال", a: "جيل", en: "Generations -> Generation" },
      { type: "to_singular", q: "أشجار", a: "شجرة", en: "Trees -> Tree" },
      { type: "to_plural", q: "ثروة", a: "ثروات", en: "Wealth -> Wealths/Resources" },
      { type: "to_plural", q: "طريق", a: "طرق", en: "Path/Road -> Paths" }
    ],
    fillBlanks: [
      { question: "البيئة في الإسلام ___ يجب المحافظة عليها", en: "The environment in Islam is a ___ that must be preserved", answer: "أمانة", options: ["لعبة", "أمانة", "مشكلة"] },
      { question: "نهى النبي عن التبول في الماء ___", en: "The Prophet forbade urinating in ___ water", answer: "الراكد", options: ["الجاري", "النظيف", "الراكد"] },
      { question: "إماطة الأذى عن الطريق من ___", en: "Removing harm from the path is part of ___", answer: "الإيمان", options: ["الإيمان", "الكفر", "العمل"] },
      { question: "أول مصدر للأكسجين هو ___", en: "The primary source of oxygen is ___", answer: "النبات", options: ["النبات", "الحيوان", "الحجر"] }
    ],
    formQuestions: [
      { statement: "البيئة أمانة في الإسلام.", en_statement: "The environment is a trust in Islam.", question: "كيف ينظر الإسلام إلى البيئة؟", en_question: "How does Islam view the environment?" },
      { statement: "الماء أساس الحياة.", en_statement: "Water is the basis of life.", question: "ما هو أساس الحياة؟", en_question: "What is the basis of life?" },
      { statement: "نهى النبي عن الإسراف.", en_statement: "The Prophet forbade wastefulness.", question: "عن ماذا نهى النبي؟", en_question: "What did the Prophet forbid?" },
      { statement: "سميت بعض السور بأسماء الحيوانات.", en_statement: "Some Surahs were named after animals.", question: "بم سميت بعض السور في القرآن؟", en_question: "What were some Surahs named after in the Quran?" }
    ],
    shortQA: [
      { q: "ما مفهوم البيئة في الإسلام؟", en_q: "What is the concept of environment in Islam?", a: "البيئة أمانة وملكية عامة يجب الحفاظ على ثرواتها.", en_a: "The environment is a trust and public property whose wealth must be preserved.", keywords: ["أمانة", "ملكية عامة"] },
      { q: "ماذا قال النبي ﷺ عن إماطة الأذى؟", en_q: "What did the Prophet say about removing harm?", a: "قال: إماطة الأذى عن الطريق من الإيمان.", en_a: "He said: Removing harm from the path is a part of faith.", keywords: ["من الإيمان"] },
      { q: "اذكر اثنتين من السور التي سميت بأسماء الحيوانات.", en_q: "Mention two Surahs named after animals.", a: "سورة البقرة وسورة النمل.", en_a: "Surat Al-Baqarah (The Cow) and Surat An-Naml (The Ant).", keywords: ["البقرة", "النمل"] },
      { q: "ما فضل من يزرع شجرة في الإسلام؟", en_q: "What is the virtue of planting a tree in Islam?", a: "كل ما يُؤكل من هذه الشجرة يُعتبر له صدقة.", en_a: "Whatever is eaten from this tree is considered charity for him.", keywords: ["صدقة"] }
    ],
    longQA: [
      { q: "بيّن العلاقة بين تعاليم القرآن والمحافظة على البيئة.", en_q: "Explain the relationship between Quranic teachings and environmental preservation.", a: "القرآن أمر بالإصلاح ونهى عن الإفساد في الأرض. حث على التفكير في المخلوقات كالماء والحيوانات، وجعل الإنسان خليفة مسؤولاً عن حماية هذه الموارد الطبيعية وعدم استنزافها أو تلويثها.", en_a: "The Quran commanded reform and forbade corruption on earth. It urged reflecting on creations like water and animals, and made man a responsible caliph to protect these natural resources from depletion or pollution.", keywords: ["الإصلاح", "خليفة", "الموارد الطبيعية"] },
      { q: "ما هي توجيهات النبي ﷺ للحفاظ على الثروة المائية؟", en_q: "What are the Prophet's directives to preserve water resources?", a: "حذر من الإسراف في الماء حتى أثناء الوضوء (لا تتجاوز ثلاث غسلات). كما نهى عن تلويث المياه عبر منع التبول في الماء الراكد والتنفس في إناء الشرب.", en_a: "He warned against wasting water even during ablution (not exceeding three washes). He also forbade polluting water by prohibiting urinating in stagnant water and breathing into a drinking vessel.", keywords: ["الإسراف", "تلويث المياه", "الماء الراكد"] }
    ]
  },

  // Chapter 7: Satisfied Life (عيشة راضية)
  "sec8-7": {
    grammarChoices: [
      { question: "كانت عائشة فتاة ___", en_translation: "Aisha was a ___ girl", options: ["بسيطةً", "بسيطةٌ", "بسيطةٍ"], answer: "بسيطةً", en_options: ["simple (acc)", "simple (nom)", "simple (gen)"] },
      { question: "من يعمل بصدق يعيش ___", en_translation: "Whoever works honestly lives ___", options: ["راضياً", "راضي", "راضية"], answer: "راضياً", en_options: ["satisfied (acc)", "satisfied (nom)", "satisfied (f)"] },
      { question: "الفتاة التي جاءت من المدينة ___ ليلى", en_translation: "The girl who came from the city ___ Layla", options: ["اسمها", "اسمه", "اسمهم"], answer: "اسمها", en_options: ["her name", "his name", "their name"] },
      { question: "لم ___ ليلى الهدوء في المدينة", en_translation: "Layla did not ___ quietness in the city", options: ["تجدْ", "تجدُ", "تجدِ"], answer: "تجدْ", en_options: ["find (jussive)", "find (indicative)", "find (gen)"] }
    ],
    singularPlural: [
      { type: "to_singular", q: "نجوم", a: "نجم", en: "Stars -> Star" },
      { type: "to_singular", q: "أقارب", a: "قريب", en: "Relatives -> Relative" },
      { type: "to_plural", q: "قرية", a: "قرى", en: "Village -> Villages" },
      { type: "to_plural", q: "ضمير", a: "ضمائر", en: "Conscience -> Consciences" }
    ],
    fillBlanks: [
      { question: "الراحة الدائمة في ___ لا تشترى بالمال", en: "Permanent comfort in the ___ cannot be bought with money", answer: "القلب", options: ["البنك", "القلب", "السوق"] },
      { question: "عائشة تستيقظ قبل ___ الشمس", en: "Aisha wakes up before the ___ of the sun", answer: "طلوع", options: ["غروب", "طلوع", "غياب"] },
      { question: "الرضا يجعل الحياة ___ في أبسط الظروف", en: "Contentment makes life ___ in the simplest circumstances", answer: "جميلة", options: ["صعبة", "جميلة", "مملة"] },
      { question: "عادت ليلى إلى المدينة بنظرة ___ للحياة", en: "Layla returned to the city with a ___ outlook on life", answer: "مختلفة", options: ["مختلفة", "حزينة", "قديمة"] }
    ],
    formQuestions: [
      { statement: "تعيش عائشة في قرية بسيطة.", en_statement: "Aisha lives in a simple village.", question: "أين تعيش عائشة؟", en_question: "Where does Aisha live?" },
      { statement: "ليلى ابنة تاجر غني.", en_statement: "Layla is the daughter of a rich merchant.", question: "من هي ليلى؟", en_question: "Who is Layla?" },
      { statement: "العمل يجلب السرور.", en_statement: "Work brings joy.", question: "ماذا يجلب العمل؟", en_question: "What does work bring?" },
      { statement: "السعادة في راحة الضمير.", en_statement: "Happiness is in peace of conscience.", question: "أين تكمن السعادة؟", en_question: "Where does happiness lie?" }
    ],
    shortQA: [
      { q: "ما هي صفات عائشة؟", en_q: "What are Aisha's traits?", a: "فتاة بسيطة، رقيقة القلب، تحب الزراعة والرضا.", en_a: "A simple girl, tender-hearted, loves farming and contentment.", keywords: ["بسيطة", "رقيقة القلب", "الرضا"] },
      { q: "لماذا تعجبت ليلى من حياة عائشة؟", en_q: "Why was Layla amazed by Aisha's life?", a: "لأن عائشة كانت سعيدة رغم فقرها وتعبها في الحقل.", en_a: "Because Aisha was happy despite her poverty and fatigue in the field.", keywords: ["سعيدة", "فقرها وتعبها"] },
      { q: "ماذا قالت عائشة عن الأرض؟", en_q: "What did Aisha say about the earth?", a: "قالت: الأرض مثل القلب، إذا سقيناها حباً أعطتنا خبزاً.", en_a: "She said: The earth is like the heart, if we water it with love it gives us bread.", keywords: ["القلب", "حباً", "خبزاً"] },
      { q: "ما الدرس الذي تعلمته ليلى؟", en_q: "What lesson did Layla learn?", a: "تعلمت أن السعادة والراحة في الرضا وليس في المال.", en_a: "She learned that happiness and comfort are in contentment, not in money.", keywords: ["الرضا", "ليس في المال"] }
    ],
    longQA: [
      { q: "قارن بين حياة عائشة في القرية وحياة ليلى في المدينة.", en_q: "Compare Aisha's life in the village and Layla's life in the city.", a: "عائشة تعيش في قرية بسيطة، تعمل بجد في الحقل وتشعر بالرضا والطمأنينة. أما ليلى فتعيش في المدينة حياة الرفاهية واللباس الفاخر، لكنها تفتقد للهدوء الحقيقي وراحة الضمير التي وجدتها عند عائشة.", en_a: "Aisha lives in a simple village, works hard in the field, and feels contentment and peace of mind. Layla lives in the city a life of luxury and fine clothes, but she lacks the true quietness and peace of conscience she found with Aisha.", keywords: ["القرية بسيطة", "الرضا", "الرفاهية", "راحة الضمير"] },
      { q: "اشرح مقولة عائشة: 'الراحة دائمة في القلب لا تشترى بالمال'.", en_q: "Explain Aisha's saying: 'Comfort is permanent in the heart; it cannot be bought with money'.", a: "يعني أن المال زائل ويُصرف في سبل مختلفة، ولا يستطيع شراء السعادة الحقيقية. السعادة تنبع من القناعة والرضا الداخلي وراحة الضمير بعد العمل الشريف.", en_a: "It means money is transient and spent in various ways, and cannot buy true happiness. Happiness stems from contentment, inner satisfaction, and a clear conscience after honest work.", keywords: ["المال زائل", "السعادة تنبع من القناعة", "راحة الضمير"] }
    ]
  },

  // Chapter 8: The Stranger (الغريب)
  "sec4-8": {
    grammarChoices: [
      { question: "سمعت الكلب ___ في الظلام", en_translation: "I heard the dog ___ in the dark", options: ["ينبح", "ينبحون", "تنبح"], answer: "ينبح", en_options: ["barking (m)", "barking (pl)", "barking (f)"] },
      { question: "دخل همام البيت ___", en_translation: "Hammam entered the house ___", options: ["صامتاً", "صامتٌ", "صامتٍ"], answer: "صامتاً", en_options: ["silently (acc)", "silently (nom)", "silently (gen)"] },
      { question: "___ رقية الرجل من الكلاب", en_translation: "Ruqayya ___ the man from the dogs", options: ["أنقذت", "أنقذ", "أنقذوا"], answer: "أنقذت", en_options: ["saved (f)", "saved (m)", "saved (pl)"] },
      { question: "لم ___ الرجل طريق القرية", en_translation: "The man did not ___ the village road", options: ["يعرفْ", "يعرفُ", "يعرفِ"], answer: "يعرفْ", en_options: ["know (jussive)", "know (indicative)", "know (gen)"] }
    ],
    singularPlural: [
      { type: "to_singular", q: "بنادق", a: "بندقية", en: "Rifles -> Rifle" },
      { type: "to_singular", q: "أكواخ", a: "كوخ", en: "Huts -> Hut" },
      { type: "to_plural", q: "غريب", a: "غرباء", en: "Stranger -> Strangers" },
      { type: "to_plural", q: "حمامة", a: "حمائم", en: "Dove -> Doves" }
    ],
    fillBlanks: [
      { question: "كانت الكلاب ___ لأنها لا تحب الغرباء", en: "The dogs were ___ because they don't like strangers", answer: "مسعورة", options: ["أليفة", "مسعورة", "صغيرة"] },
      { question: "رأى همام الغريب وقرر أن يسرق ___", en: "Hammam saw the stranger and decided to steal his ___", answer: "نقوده", options: ["سيارته", "نقوده", "ثيابه"] },
      { question: "أطلقت رقية النار من ___", en: "Ruqayya fired the gun from the ___", answer: "البندقية", options: ["النافذة", "البندقية", "السيارة"] },
      { question: "الحمامة البيضاء ترمز لـ ___", en: "The white dove symbolizes ___", answer: "السلام", options: ["الحرب", "السلام", "الحزن"] }
    ],
    formQuestions: [
      { statement: "قتل همام الرجل الغريب.", en_statement: "Hammam killed the strange man.", question: "من قتل الرجل الغريب؟", en_question: "Who killed the strange man?" },
      { statement: "ضَلَّ الرجل طريقه في الليل.", en_statement: "The man lost his way in the night.", question: "متى ضل الرجل طريقه؟", en_question: "When did the man lose his way?" },
      { statement: "أحضرت رقية الطعام للغريب.", en_statement: "Ruqayya brought food for the stranger.", question: "ماذا أحضرت رقية للغريب؟", en_question: "What did Ruqayya bring for the stranger?" },
      { statement: "قتلت رقية زوجها لتنتقم للعدالة.", en_statement: "Ruqayya killed her husband to avenge justice.", question: "لماذا قتلت رقية زوجها؟", en_question: "Why did Ruqayya kill her husband?" }
    ],
    shortQA: [
      { q: "لماذا جاء الرجل الغريب إلى الكوخ؟", en_q: "Why did the strange man come to the hut?", a: "لأنه ضل الطريق في الظلام وكانت الكلاب تطارده.", en_a: "Because he lost his way in the dark and dogs were chasing him.", keywords: ["ضل الطريق", "تطارده"] },
      { q: "كيف تصرفت رقية مع الغريب في الليل؟", en_q: "How did Ruqayya act with the stranger at night?", a: "أنقذته من الكلاب، وقدمت له الطعام والقهوة وأكرمته كضيف.", en_a: "She saved him from the dogs, offered him food and coffee, and honored him as a guest.", keywords: ["أنقذته", "قدمت الطعام"] },
      { q: "ما الجريمة التي ارتكبها همام؟", en_q: "What crime did Hammam commit?", a: "رافق الغريب في الصباح وقتله ليسرق أمواله.", en_a: "He accompanied the stranger in the morning and killed him to steal his money.", keywords: ["قتله", "ليسرق أمواله"] },
      { q: "ماذا فعلت رقية عندما علمت بخيانة زوجها؟", en_q: "What did Ruqayya do when she learned of her husband's betrayal?", a: "أخذت البندقية وأطلقت عليه النار انتقاماً للعدالة.", en_a: "She took the rifle and shot him in revenge for justice.", keywords: ["البندقية", "انتقاماً"] }
    ],
    longQA: [
      { q: "حلل شخصية 'همام' من خلال أحداث القصة.", en_q: "Analyze the character 'Hammam' through the events of the story.", a: "همام شخصية قاسية وطماعة. تظاهر بالهدوء عندما التقى بالغريب في الليل، لكنه خطط لقتله طمعاً في ماله. لم يحترم حق الضيافة وخان الثقة، مما يعكس شراً عميقاً في نفسه.", en_a: "Hammam is a cruel and greedy character. He pretended to be calm when he met the stranger at night, but planned to kill him out of greed for his money. He didn't respect hospitality and betrayed trust, reflecting a deep evil in his soul.", keywords: ["قاسية", "طماعة", "خان الثقة"] },
      { q: "ما الدلالة الرمزية لظهور الحمامة البيضاء في نهاية القصة؟", en_q: "What is the symbolic significance of the white dove appearing at the end of the story?", a: "الحمامة البيضاء ترمز إلى السلام والطهارة. ظهرت بعد أن قتلت رقية زوجها الشرير لتؤكد أن العدالة قد تحققت وأن الأرض تطهرت من الشر.", en_a: "The white dove symbolizes peace and purity. It appeared after Ruqayya killed her evil husband to confirm that justice had been served and the earth was cleansed of evil.", keywords: ["السلام والطهارة", "العدالة", "تطهرت من الشر"] }
    ]
  },

  // Chapter 9: Songs of Life (أغاني الحياة)
  "sec9-9": {
    grammarChoices: [
      { question: "سار الشاعر ___ الفجر", en_translation: "The poet walked ___ dawn", options: ["وقت", "عن", "من"], answer: "وقت", en_options: ["at time of", "about", "from"] },
      { question: "خرير النهر ___", en_translation: "The gurgling of the river is ___", options: ["سكرانٌ", "سكرانٍ", "سكراناً"], answer: "سكرانٌ", en_options: ["drunk (nom)", "drunk (gen)", "drunk (acc)"] },
      { question: "جلست بلقيس ___ العرش", en_translation: "Bilqis sat ___ the throne", options: ["على", "في", "إلى"], answer: "على", en_options: ["on", "in", "to"] },
      { question: "نسيم الصبح ___ سجسجاً", en_translation: "The morning breeze ___ gently", options: ["يسري", "تسري", "نسري"], answer: "يسري", en_options: ["flows (m)", "flows (f)", "we flow"] }
    ],
    singularPlural: [
      { type: "to_singular", q: "رياض", a: "روض", en: "Gardens -> Garden" },
      { type: "to_singular", q: "أزهار", a: "زهرة", en: "Flowers -> Flower" },
      { type: "to_plural", q: "نهر", a: "أنهار", en: "River -> Rivers" },
      { type: "to_plural", q: "كأس", a: "كؤوس", en: "Cup -> Cups" }
    ],
    fillBlanks: [
      { question: "استمتع الشاعر بـ ___ النهر", en: "The poet enjoyed the ___ of the river", answer: "خرير", options: ["خرير", "هدوء", "حرارة"] },
      { question: "تتفتح ___ في الروض وقت الصباح", en: "The ___ bloom in the garden in the morning", answer: "الأزهار", options: ["الغيوم", "الأزهار", "الصخور"] },
      { question: "اعتلت بلقيس ___ الليل", en: "Bilqis ascended the ___ of the night", answer: "عرش", options: ["عرش", "باب", "شجرة"] },
      { question: "نسيم الصبح يسري فوق ___", en: "The morning breeze flows above the ___", answer: "البطاح", options: ["الجبال", "البطاح", "السماء"] }
    ],
    formQuestions: [
      { statement: "سار الشاعر في الروض.", en_statement: "The poet walked in the garden.", question: "أين سار الشاعر؟", en_question: "Where did the poet walk?" },
      { statement: "تتفتح الأزهار وقت الفجر.", en_statement: "The flowers bloom at dawn.", question: "متى تتفتح الأزهار؟", en_question: "When do the flowers bloom?" },
      { statement: "احتست الأقاحي ندى الليل.", en_statement: "The daisies sipped the night dew.", question: "ماذا احتست الأقاحي؟", en_question: "What did the daisies sip?" },
      { statement: "النهر سكران من الجمال.", en_statement: "The river is drunk with beauty.", question: "بم وصف الشاعر النهر؟", en_question: "How did the poet describe the river?" }
    ],
    shortQA: [
      { q: "في أي وقت سار الشاعر في الروض؟", en_q: "At what time did the poet walk in the garden?", a: "سار الشاعر في وقت بزوغ الفجر الأول.", en_a: "The poet walked at the time of the first break of dawn.", keywords: ["وقت الفجر"] },
      { q: "كيف وصف الشاعر صوت النهر؟", en_q: "How did the poet describe the sound of the river?", a: "وصفه بأنه خرير سكران.", en_a: "He described it as a drunken gurgling.", keywords: ["خرير سكران"] },
      { q: "ماذا كانت تفعل أزهار الأقاحي؟", en_q: "What were the daisy flowers doing?", a: "كانت تحتسي قطرات الندى كأنها خمر.", en_a: "They were sipping dew drops as if they were wine.", keywords: ["تحتسي", "قطرات الندى"] },
      { q: "من التي جلست على عرش الليل في القصيدة؟", en_q: "Who sat on the throne of night in the poem?", a: "الملكة بلقيس.", en_a: "Queen Bilqis.", keywords: ["الملكة بلقيس"] }
    ],
    longQA: [
      { q: "اشرح الصور الفنية في وصف الشاعر للفجر والطبيعة.", en_q: "Explain the artistic imagery in the poet's description of dawn and nature.", a: "شبه الشاعر الفجر بطائر له جناح، والليل بامرأة غيداء تمشي ببطء. وشبه النهر بالإنسان السكران من جمال الطبيعة، والأزهار بأشخاص يشربون خمر الندى، مما يضفي على الطبيعة حياة إنسانية نابضة.", en_a: "The poet likened dawn to a bird with a wing, and night to an elegant woman walking slowly. He likened the river to a man drunk with nature's beauty, and flowers to people drinking the wine of dew, which gives nature a vibrant human life.", keywords: ["طائر", "امرأة غيداء", "الإنسان السكران"] },
      { q: "ما الفكرة الرئيسية التي أراد أبو القاسم الشابي إيصالها من خلال القصيدة؟", en_q: "What is the main idea that Abu Al-Qasim Al-Shabbi wanted to convey through the poem?", a: "أراد إبراز سحر الطبيعة وقت الفجر وانبعاث الحياة والأمل. الطبيعة في نظره حية وتتفاعل مع الكون في مشهد مليء بالنشوة والجمال قبل بزوغ الشمس بالكامل.", en_a: "He wanted to highlight the magic of nature at dawn and the emergence of life and hope. Nature in his eyes is alive and interacts with the universe in a scene full of ecstasy and beauty before the sun fully rises.", keywords: ["سحر الطبيعة", "انبعاث الحياة والأمل"] }
    ]
  }
};

// Merged global defaults to satisfy missing mappings if any
export const grammarChoices = [];
export const singularPlural = [];
export const fillBlanks = [];
export const formQuestions = [];
export const shortQA = [];
export const longQA = [];
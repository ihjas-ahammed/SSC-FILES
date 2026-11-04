export interface ExamQuestion {
  id: string;
  section: 'A' | 'B' | 'C';
  question: string;
  marks: number;
  wordLimit: string;
  modelAnswer: string;
  examinerTips?: string;
}

export interface UnitExam {
  unitId: string;
  title: string;
  description: string;
  questions: ExamQuestion[];
}

export const EXAM_MODULES: UnitExam[] = [
  {
    unitId: 'sec-u1',
    title: 'Unit 1: UN Cooperation Frameworks (SDGs)',
    description: 'Questions on the 2030 Agenda and universal human rights.',
    questions: [
      {
        id: 'u1-a1',
        section: 'A',
        question: 'Expand UDHR and describe its significance.',
        marks: 2,
        wordLimit: 'Max 3 sentences',
        modelAnswer: 'UDHR stands for the Universal Declaration of Human Rights. Adopted by the UN in 1948, it is a milestone document that established, for the first time, fundamental human rights to be universally protected. It forms the foundation for modern international human rights law and global agendas like the SDGs.',
        examinerTips: 'Always explicitly state the full form first, then provide a 1-2 sentence explanation of its historical or legal impact.'
      },
      {
        id: 'u1-a2',
        section: 'A',
        question: 'What is the core principle of the 2030 Agenda for Sustainable Development?',
        marks: 2,
        wordLimit: 'Max 3 sentences',
        modelAnswer: 'The core principle of the 2030 Agenda is "Leave No One Behind" (LNOB). It emphasizes eradicating poverty, ending discrimination, and ensuring that the most marginalized and vulnerable populations are prioritized in global development efforts.',
        examinerTips: 'Highlight the exact phrase "Leave No One Behind" as it is the central theme of the document.'
      }
    ]
  },
  {
    unitId: 'sec-u2',
    title: 'Unit 2: On The Rule of the Road',
    description: 'Questions on Liberty, Social Contract, and Civic Conduct.',
    questions: [
      {
        id: 'u2-a1',
        section: 'A',
        question: 'How, according to AG Gardiner can order be maintained in a society?',
        marks: 2,
        wordLimit: 'Max 3 sentences',
        modelAnswer: 'According to A.G. Gardiner, order is maintained through a social contract where individual liberties are mutually curtailed to preserve the liberties of all. By obeying laws, like the rule of the road, citizens prevent universal chaos and ensure that everyone can enjoy their freedom safely.',
        examinerTips: 'Use the key phrase "curtailment of private liberty" or "accommodation of interests".'
      },
      {
        id: 'u2-a2',
        section: 'A',
        question: 'What does the policeman at Piccadilly Circus symbolize?',
        marks: 2,
        wordLimit: 'Max 3 sentences',
        modelAnswer: 'The policeman stepping into the road and putting up his hand symbolizes liberty, not tyranny. By temporarily interfering with one person\'s free use of the highway, he prevents a "maelstrom" of chaos, ensuring that everyone\'s liberty to cross the road becomes a reality.',
        examinerTips: 'Contrast "tyranny" with "liberty" to show you understand Gardiner\'s central paradox.'
      },
      {
        id: 'u2-b1',
        section: 'B',
        question: 'Differentiate between personal liberty and social liberty with examples from the essay.',
        marks: 6,
        wordLimit: 'Max 100 words',
        modelAnswer: 'Personal liberty applies to matters that do not touch anybody else\'s freedom. Gardiner illustrates this with examples like dyeing one\'s hair, wearing a dressing-gown on the Strand, or eating mustard with mutton; in this kingdom, the individual rules alone. Social liberty begins when one\'s actions affect others. For instance, playing the trombone at midnight on top of Helvellyn is a personal liberty, but doing it in a residential street infringes on the neighbors\' liberty to sleep. Therefore, social liberty requires an accommodation of interests, where personal freedom is qualified by the rights of others to maintain harmony.',
        examinerTips: 'Provide at least one example for personal liberty (hair, mustard) and one for social liberty (trombone, gramophone).'
      },
      {
        id: 'u2-c1',
        section: 'C',
        question: '"Liberty is not a personal affair only, but a social contract." Discuss this statement with reference to A.G. Gardiner\'s essay.',
        marks: 10,
        wordLimit: 'Max 200 words',
        modelAnswer: `In "On the Rule of the Road," A.G. Gardiner brilliantly argues that absolute individual freedom is an illusion that leads to social anarchy. He asserts that "Liberty is not a personal affair only, but a social contract," meaning true freedom requires mutual compromise.

Gardiner opens with the anecdote of a stout old lady in Petrograd walking down the middle of the road, claiming her "liberty." He points out that if her liberty entitles her to block traffic, it entitles the cab-driver to drive on the pavement, resulting in universal chaos. To prevent this, society establishes "rules of the road"—laws that curtail extreme private liberty to guarantee functional social liberty. 

While individuals have absolute sovereignty in purely personal choices—like their diet, religion, or fashion—their freedom becomes "qualified" the moment it intersects with another's. Playing a blatant gramophone on a Sunday afternoon or boasting loudly in a train carriage are instances where individuals fail to recognize this social contract, acting as bullies who trample on the rights of quiet people. 

Ultimately, Gardiner concludes that civilization is defined by our conduct in these small matters. By accommodating our liberties to others, we uphold a social order that makes everyone's liberty a reality.`,
        examinerTips: 'Include the Petrograd lady anecdote. Clearly define the "social contract" as the curtailment of private liberty for collective freedom. Mention "small matters of conduct".'
      }
    ]
  },
  {
    unitId: 'sec-u3',
    title: 'Unit 3: Humanities v/s Science',
    description: 'Questions on Dr. S. Radhakrishnan’s educational philosophy.',
    questions: [
      {
        id: 'u3-a1',
        section: 'A',
        question: 'What are the three obstacles which stand in the way of national development?',
        marks: 2,
        wordLimit: 'Max 3 sentences',
        modelAnswer: 'According to Dr. S. Radhakrishnan, the three major obstacles to national development are ignorance, disease, and poverty. He emphasizes that out of these, ignorance is the primary root, and removing it will naturally help diminish the other two.',
        examinerTips: 'List all three exactly as stated in the text. Highlight "ignorance" as the major one.'
      },
      {
        id: 'u3-a2',
        section: 'A',
        question: 'What is the meaning of the Upanisadic phrase "Tat tvam asi"?',
        marks: 2,
        wordLimit: 'Max 3 sentences',
        modelAnswer: '"Tat tvam asi" translates to "That art thou" (You are that). Radhakrishnan uses it to explain that every human individual is a spark of the Divine, which forms the spiritual basis for treating everyone with compassion and a democratic spirit.',
        examinerTips: 'Provide the literal translation and briefly mention its relevance to compassion.'
      },
      {
        id: 'u3-b1',
        section: 'B',
        question: 'Analyse the predicament of Science without a moral compass.',
        marks: 6,
        wordLimit: 'Max 100 words',
        modelAnswer: 'Dr. Radhakrishnan argues that while science and technology grant humanity unprecedented power, they lack inherent moral direction. Without the moral compass provided by the Humanities, technological education becomes "imperfect, lop-sided and deficient." Science enables us to control the forces of nature, giving us the power to either "bring about paradise on earth" or, by pressing a button, "destroy continents." Without studying humanities to understand human nature, ideals, and compassion, individuals become mere "mechanical robots." Thus, the predicament is a dangerous disproportion: our knowledge of nature rapidly increases while our wisdom to use it ethically diminishes.',
        examinerTips: 'Quote the phrases "destroy continents", "mechanical robots", or "lop-sided and deficient".'
      },
      {
        id: 'u3-c1',
        section: 'C',
        question: 'Examine how Dr. S. Radhakrishnan advocates for the integration of Humanities and Science to create a holistic educational system.',
        marks: 10,
        wordLimit: 'Max 200 words',
        modelAnswer: `In his essay, Dr. S. Radhakrishnan vehemently opposes the separation of scientific and humanistic studies, arguing that a holistic educational system requires both. He acknowledges that science is absolutely essential to eradicate the nation's primary obstacles: ignorance, disease, and poverty. However, he warns that an exclusively technological education is "lop-sided and deficient."

Science provides humanity with immense power—the ability to either build a paradise or "destroy continents." Yet, it is the humanities that provide the wisdom to use this power ethically. Radhakrishnan asserts that universities must not merely produce "mechanical robots" or "technicians," but whole individuals equipped with compassion and a "truly democratic spirit." The humanities teach us about our inner nature, impulses, and ideals, acting as the moral compass for scientific application.

Furthermore, he refutes William Blake's notion that science is the "tree of death" and art the "tree of life." Radhakrishnan insists that Truth is indivisible; science and humanities are simply different approaches to the same ultimate reality. Therefore, to prevent a society where knowledge increases while wisdom diminishes, educational systems must treat sciences and humanities as deeply complementary, shaping individuals who are both technically competent and deeply humane.`,
        examinerTips: 'Structure: 1. Acknowledge the need for science (eradicating poverty). 2. Explain the danger of science alone (power without wisdom). 3. Explain the role of humanities (compassion). 4. Mention the indivisibility of Truth (refuting Blake).'
      }
    ]
  },
  {
    unitId: 'sec-u4',
    title: 'Unit 4: I am a Cat',
    description: 'Questions on satire, narrative perspective, and Meiji-era Japan.',
    questions: [
      {
        id: 'u4-a1',
        section: 'A',
        question: 'What is the significance of the film\'s title I am a Cat?',
        marks: 2,
        wordLimit: 'Max 3 sentences',
        modelAnswer: 'The title "I am a Cat" highlights the unique narrative perspective of the film, where human society is observed through the detached, critical eyes of an unnamed feline. This outsider viewpoint allows for a humorous and objective satire of the pretensions, follies, and superficial Westernization of intellectuals in Meiji-era Japan.',
        examinerTips: 'Mention the "outsider perspective" and how it acts as a tool for "satire" against human follies.'
      },
      {
        id: 'u4-b1',
        section: 'B',
        question: 'How does the film satirize the intellectuals of Meiji-era Japan through its characters?',
        marks: 6,
        wordLimit: 'Max 100 words',
        modelAnswer: 'The film uses the detached perspective of a cat to expose the absurdities and pretensions of Meiji-era intellectuals. Mr. Kushami, the master, embodies the frustrated, ineffective scholar—lazy, complaining, and full of lofty ideas but incapable of practical action. His friend Meitei represents the superficial embrace of Western culture, constantly bombarding others with fabricated or misquoted Western philosophy to appear superior. By contrasting these pretentious, self-satisfied human characters with the simple, objective observations of the cat, the film brilliantly mocks the gap between their high-minded ideals and mundane, chaotic reality.',
        examinerTips: 'Use Kushami and Meitei as your primary examples. Highlight the contrast between their self-importance and their actual foolishness.'
      }
    ]
  },
  {
    unitId: 'sec-u5-self-unseeing',
    title: 'Unit 5: The Self-Unseeing',
    description: 'Questions on Thomas Hardy, nostalgia, and memory.',
    questions: [
      {
        id: 'u5-b1',
        section: 'B',
        question: 'Comment on the central theme of The Self-Unseeing?',
        marks: 6,
        wordLimit: 'Max 100 words',
        modelAnswer: 'The central theme of Thomas Hardy’s "The Self-Unseeing" is the human tendency to overlook the profound beauty and happiness of the present moment, only to realize its value in retrospect. Through a reflective memory of his childhood home, the speaker contrasts the physical decay of the present—the "footworn and hollowed" floor—with the vibrant warmth of the past, where his mother smiled by the fire and his father joyfully played music. Despite the scene glowing with "blessings," the final line, "Yet we were looking away!", highlights the tragedy of being oblivious ("unseeing") to our own joy while it is occurring.',
        examinerTips: 'Make sure to explain the meaning of the title "Self-Unseeing" in relation to the final line "Yet we were looking away!"'
      }
    ]
  },
  {
    unitId: 'sec-u6-karma',
    title: 'Unit 6: Karma',
    description: 'Questions on post-colonial satire and identity.',
    questions: [
      {
        id: 'u6-a1',
        section: 'A',
        question: 'How is Lady Lal portrayed in contrast to her husband?',
        marks: 2,
        wordLimit: 'Max 3 sentences',
        modelAnswer: 'Lady Lal (Lachmi) is portrayed as a traditional, simple, and unpretentious Indian woman, contrasting sharply with her husband, Sir Mohan Lal, who is an arrogant, Anglicized snob. While she chews betel leaves, wears a dirty white sari, and happily chats with a coolie, he wears Savile Row suits, sips Scotch, and despises his fellow Indians.',
        examinerTips: 'Highlight physical differences (sari vs suit) and behavioral differences (chatting with coolie vs desiring English company).'
      },
      {
        id: 'u6-c1',
        section: 'C',
        question: 'Explore the theme of identity and cultural alienation in Karma. How do the characters embody conflicting ideas of self-worth and tradition?',
        marks: 10,
        wordLimit: 'Max 200 words',
        modelAnswer: `Khushwant Singh’s "Karma" is a sharp post-colonial satire that explores the tragicomic consequences of cultural alienation. The story centres on Sir Mohan Lal, an Anglicized Indian who derives his entire self-worth from mimicking British culture. Armed with an Oxford accent, a Savile Row suit, and a copy of The Times, he views his native country as "inefficient, dirty, [and] indifferent." By entirely rejecting his heritage, he renders himself culturally homeless.

This artificiality is starkly contrasted by his wife, Lachmi. She represents authentic, traditional India. She wears a simple sari, chews betel leaves, and converses freely with the working class. Though Sir Mohan confines her to the upper storey of their house to hide his "vulgar" roots, Lachmi remains comfortable in her own skin, unbothered by pretensions.

The climax brutally shatters Sir Mohan's constructed identity. Despite his flawless English and sophisticated bait, the British soldiers see him only as a "nigger" and violently throw him off the train. His ultimate "karma" is the profound irony that the culture he sacrificed his dignity to emulate completely rejects him. Through these conflicting characters, Singh demonstrates that true self-worth cannot be built on the imitation of one's oppressors.`,
        examinerTips: 'Use the term "colonial mimicry". Structure the essay by comparing Sir Mohan\'s artificiality with Lachmi\'s authenticity, and conclude with the irony of the soldiers\' rejection.'
      }
    ]
  },
  {
    unitId: 'sec-u7-in-the-name-of-science',
    title: 'Unit 7: In the Name of Science',
    description: 'Questions on scientific temper and Antony van Leeuwenhoek.',
    questions: [
      {
        id: 'u7-b1',
        section: 'B',
        question: 'How did Antony\'s experiments challenge the common scientific beliefs of his time?',
        marks: 6,
        wordLimit: 'Max 100 words',
        modelAnswer: 'Antony van Leeuwenhoek challenged the widely accepted belief of spontaneous generation—the idea that living things like insects simply appeared from nonliving matter like mud or rotting flesh. Through empirical experiments, such as keeping lice in a black sock to observe them laying eggs, he proved that young insects are created from parents like themselves. Additionally, by scraping his own teeth and examining the plaque, he discovered a completely invisible world of "animalcules." By relying on direct observation and physical testing rather than assumed knowledge, his fearless curiosity overturned established dogma and laid the foundation for modern microbiology.',
        examinerTips: 'Explicitly mention "spontaneous generation" and give at least one example of his experiments (lice in the sock or the tooth plaque).'
      }
    ]
  },
  {
    unitId: 'sec-u8-boy-who-harnessed-wind',
    title: 'Unit 8: The Boy Who Harnessed the Wind',
    description: 'Questions on innovation, resilience, and scientific temper.',
    questions: [
      {
        id: 'u8-a1',
        section: 'A',
        question: 'Why was William Kamkwamba forced to leave school?',
        marks: 2,
        wordLimit: 'Max 3 sentences',
        modelAnswer: 'William was forced to leave school because his parents could no longer afford to pay his tuition fees. A severe drought and subsequent famine had devastated his family\'s farming income, making continued formal education financially impossible.',
        examinerTips: 'Directly mention the "inability to pay tuition fees" and connect it briefly to the "drought/famine" affecting their farming income.'
      }
    ]
  },
  {
    unitId: 'sec-u9',
    title: 'Unit 9: The Yellow Wallpaper',
    description: 'Questions on Charlotte Perkins Gilman\'s feminist classic.',
    questions: [
      {
        id: 'u9-a1',
        section: 'A',
        question: 'What role does John, the narrator\'s husband, play in her mental decline?',
        marks: 2,
        wordLimit: 'Max 3 sentences',
        modelAnswer: 'John, acting as both her husband and physician, strictly enforces the "rest cure," dismissing her legitimate concerns as a "slight hysterical tendency." By isolating her in the nursery and forbidding her from writing or engaging in any intellectual stimulation, he inadvertently accelerates her psychological breakdown. His condescending control drives her to project her feelings of entrapment onto the yellow wallpaper.',
        examinerTips: 'Mention his dual role as husband and physician, and use the term "rest cure". Explain that his dismissal of her feelings causes her isolation.'
      },
      {
        id: 'u9-b1',
        section: 'B',
        question: 'What does the "yellow wallpaper" symbolize in the story?',
        marks: 6,
        wordLimit: 'Max 100 words',
        modelAnswer: 'The yellow wallpaper symbolizes the oppressive, patriarchal structures of 19th-century domestic life that confined women. Initially, the narrator finds the pattern merely ugly and confusing, reflecting her frustration with her prescribed idleness and her husband\'s condescension. As her mental state deteriorates due to the enforced isolation of the "rest cure," she begins to see a woman trapped behind a sub-pattern of "bars." These bars represent her own imprisonment by her husband\'s medical authority. By the story\'s climax, she completely identifies with the trapped woman, tearing down the paper to "free" her, signifying her total, albeit tragic, rejection of societal norms.',
        examinerTips: 'Focus on the transition from "ugly pattern" to "bars." Connect the trapped woman to the narrator\'s own confinement.'
      },
      {
        id: 'u9-c1',
        section: 'C',
        question: 'Examine The Yellow Wallpaper as a critique of 19th-century patriarchal medicine and the "rest cure".',
        marks: 10,
        wordLimit: 'Max 200 words',
        modelAnswer: `Charlotte Perkins Gilman's "The Yellow Wallpaper" serves as a scathing indictment of 19th-century patriarchal medicine, specifically targeting the "rest cure" prescribed for women diagnosed with "hysteria." The narrator's husband, John, embodies the arrogant medical establishment. He dismisses her creative impulses and intuition, insisting that absolute idleness is the cure for her "temporary nervous depression." 

The story illustrates how this infantilization strips the narrator of her autonomy. Confined to a former nursery with barred windows, she is forbidden from writing—the very outlet that could alleviate her mental distress. John's insistence that he knows better than she does about her own mind reflects the broader societal assumption that women were emotionally fragile and intellectually inferior.

Denied intellectual stimulation, the narrator's mind turns inward, obsessing over the room's hideous yellow wallpaper. The rest cure, intended to heal, instead catalyzes her descent into madness. The woman she eventually sees creeping behind the paper's "bars" is a projection of her own trapped psyche. Ultimately, the story suggests that the true cause of women's "nervous disorders" during this era was not biological fragility, but the suffocating confinement of patriarchal domesticity and misguided medical authority.`,
        examinerTips: 'Structure your essay around John as a symbol of the medical establishment. Discuss how the "rest cure" causes, rather than cures, madness.'
      }
    ]
  },
  {
    unitId: 'sec-u10-dont-be-beautiful',
    title: 'Unit 10: Don\'t Be Beautiful',
    description: 'Questions on Nikita Gill’s feminist poem.',
    questions: [
      {
        id: 'u10-a1',
        section: 'A',
        question: 'How does the poem "Don\'t Be Beautiful" reflect on society\'s obsession with physical appearance?',
        marks: 2,
        wordLimit: 'Max 3 sentences',
        modelAnswer: 'The poem challenges the conventional societal expectation that a girl\'s primary value lies in being physically "beautiful". Instead, Nikita Gill urges women to reject this superficial standard and prioritize intellectual, emotional, and active depth—like being intelligent, witty, angry, and adventurous.',
        examinerTips: 'Mention the rejection of societal standards and list a few of the alternatives Gill suggests (e.g., intelligent, witty).'
      }
    ]
  },
  {
    unitId: 'sec-u11-biology-of-gender',
    title: 'Unit 11: The Biology of Gender',
    description: 'Questions on Epigenetics and Gender Fluidity.',
    questions: [
      {
        id: 'u11-a1',
        section: 'A',
        question: 'What is "epigenetics" according to Karissa Sanbonmatsu?',
        marks: 2,
        wordLimit: 'Max 3 sentences',
        modelAnswer: 'Epigenetics is the study of how environmental and experiential factors—such as trauma or diet—influence gene expression without altering the underlying DNA sequence. Sanbonmatsu explains this through the formation of DNA "knots" that serve as molecular markers, turning specific genes on or off.',
        examinerTips: 'Ensure you clearly distinguish epigenetics from changing the DNA sequence itself. Mention "gene expression" or "DNA knots".'
      },
      {
        id: 'u11-b1',
        section: 'B',
        question: 'How does the temporal gap in fetal development explain the divergence of biological sex and gender identity?',
        marks: 6,
        wordLimit: 'Max 100 words',
        modelAnswer: 'Sanbonmatsu explains that biological processes unfold at different stages during fetal development. Specifically, the physical differentiation of genitals occurs in the first trimester, whereas the sexual differentiation of the brain occurs later, during the second trimester. Because these two critical developmental processes are separated by a "temporal gap," they can be influenced by different hormonal and epigenetic signals. This gap creates the biological possibility for variations in gender identity, scientifically demonstrating why an individual\'s biological sex at birth may naturally diverge from their brain\'s gender identity.',
        examinerTips: 'Mention the 1st trimester (genitals) vs. 2nd trimester (brain). Conclude that this gap allows for different developmental signals.'
      }
    ]
  },
  {
    unitId: 'sec-u12-empowerment-un',
    title: 'Unit 12: UN Women Strategy',
    description: 'Questions on Systemic Barriers and UN Frameworks.',
    questions: [
      {
        id: 'u12-a1',
        section: 'A',
        question: 'What are some systemic barriers that prevent full participation of women and girls with disabilities?',
        marks: 2,
        wordLimit: 'Max 3 sentences',
        modelAnswer: 'Women and girls with disabilities encounter compounded systemic barriers including legal gaps, physical inaccessibility, lack of communicational resources, and deeply rooted attitudinal prejudices. These discriminatory norms exclude them from education, employment, and political participation, pushing them to the extreme margins of society.',
        examinerTips: 'List the types of barriers (legal, physical, attitudinal) and their result (exclusion/marginalization).'
      },
      {
        id: 'u12-c1',
        section: 'C',
        question: 'Examine how international normative frameworks and global agendas contribute to the inclusion and empowerment of women and girls with disabilities.',
        marks: 10,
        wordLimit: 'Max 200 words',
        modelAnswer: `International normative frameworks, such as the Convention on the Rights of Persons with Disabilities (CRPD) and the Convention on the Elimination of All Forms of Discrimination Against Women (CEDAW), provide legally binding architectures to protect vulnerable groups. When integrated with the 2030 Agenda's core principle of "Leave No One Behind", these frameworks mandate member states to actively dismantle systemic barriers.

They contribute to empowerment by shifting the paradigm from viewing women with disabilities as objects of charity to recognizing them as active rights-holders. Frameworks compel governments to gather disaggregated data, ensuring that the unique, intersecting struggles of these women are made visible in public policy. 

Furthermore, UN Cooperation Frameworks require national development plans to prioritize inclusive education, accessible healthcare, and protection from gender-based violence. By embedding these standards into national laws and holding governments accountable through international monitoring, global agendas create a structural foundation for equal participation, ensuring that women and girls with disabilities can claim their fundamental human rights and agency in society.`,
        examinerTips: 'Structure your essay: 1. Name the frameworks (CRPD, CEDAW, 2030 Agenda). 2. Explain the paradigm shift (charity to rights-holders). 3. Detail practical applications (data, policy, healthcare). 4. Conclude with accountability.'
      }
    ]
  },
  {
    unitId: 'sec-u13-factories',
    title: 'Unit 13: Factories are Eyesores',
    description: 'Questions on industrialization, nature, and art.',
    questions: [
      {
        id: 'u13-a1',
        section: 'A',
        question: 'Why does the poet call factories "eyesores"?',
        marks: 2,
        wordLimit: 'Max 3 sentences',
        modelAnswer: 'The poet refers to factories as "eyesores" because their tall, gaunt structures and the continuous belching of black smoke ruin the natural beauty of the landscape. They stand as ugly, polluting blots against the sky that destroy environmental aesthetics and subject workers to a grim, acrid environment.',
        examinerTips: 'Mention both the visual ugliness ("gaunt structures", "blots on the landscape") and the pollution ("black smoke").'
      }
    ]
  },
  {
    unitId: 'sec-u14-stigma-shame',
    title: 'Unit 14: Stigma, Shame, and Silence',
    description: 'Questions on HIV stigma, social ostracization, and resilience.',
    questions: [
      {
        id: 'u14-a1',
        section: 'A',
        question: 'Why did Ashok feel that the doctor\'s diagnosis was "worse than a death sentence"?',
        marks: 2,
        wordLimit: 'Max 3 sentences',
        modelAnswer: 'Ashok felt it was worse than a death sentence because it came accompanied by a profound moral judgment. Unlike other terminal illnesses where a patient receives family support and sympathy, the doctor delivered the news with mocking eyes, treating Ashok like a condemned criminal who deserved his fate and isolating him in shame.',
        examinerTips: 'Focus on the "moral judgment" and "lack of family support/sympathy" compared to other terminal diseases.'
      },
      {
        id: 'u14-b1',
        section: 'B',
        question: 'Describe Ashok’s experience in the isolation ward and its psychological impact on the patients.',
        marks: 6,
        wordLimit: 'Max 100 words',
        modelAnswer: 'In the isolation ward at the Command Hospital in Pune, Ashok and five other HIV patients experienced profound social exclusion even before receiving their final test results. They were physically segregated and received no visitors. Psychologically, the stigma was so paralyzing that they imposed self-exclusion upon themselves; out of intense fear of facing rude remarks or contemptuous attitudes from others, they avoided the hospital\'s general passages and the common television lounge. Instead, they stayed within their boundaries, playing cards to pass the time while battling severe depression and worrying about their families.',
        examinerTips: 'Mention their physical segregation, the lack of visitors, and most importantly, their "self-exclusion" out of fear of judgment (e.g., avoiding the TV lounge).'
      }
    ]
  },
  {
    unitId: 'sec-u15-long-walk',
    title: 'Unit 15: A Long Walk to Water',
    description: 'Questions on Salva, Nya, and survival.',
    questions: [
      {
        id: 'u15-b1',
        section: 'B',
        question: 'Describe the circumstances that force Salva to leave his village.',
        marks: 6,
        wordLimit: 'Max 100 words',
        modelAnswer: 'Salva was attending school when the Sudanese Civil War suddenly reached his village in 1985. As his teacher droned on about Arabic, gunfire erupted outside. The teacher immediately instructed the boys to duck and then ordered them to run directly into the bush, warning them not to go home because the armed rebels would be attacking the villages. The war, fought between the northern government and the southern rebels seeking independence, had finally shattered his peaceful life. In sheer panic, amidst shouting men and crying children, Salva ran into the bush, forced away from his home and family.',
        examinerTips: 'Mention the setting (school/Arabic class), the sudden gunfire, the teacher\'s specific instruction (run into the bush, NOT home), and the context of the war (rebels attacking villages).'
      }
    ]
  },
  {
    unitId: 'sec-u16',
    title: 'Unit 16: The Poisoned Bread',
    description: 'Questions on Bandhu Madhav’s short story, Dalit identity, and social injustice.',
    questions: [
      {
        id: 'u16-a1',
        section: 'A',
        question: 'What is the significance of the grandfather\'s death in the "Poisoned Bread"?',
        marks: 2,
        wordLimit: 'Max 3 sentences',
        modelAnswer: 'Grandpa Yetalya\'s death is highly significant as it brutally illustrates the toxic reality of the caste system, where the "charity" of the upper castes literally poisons the marginalized. His death acts as a powerful catalyst for his grandson Mahadeva, shifting Yetalya\'s final worldview from submissive acceptance to a defiant realization that education is the only way to destroy this systemic oppression.',
        examinerTips: 'Mention that it acts as a "catalyst" for Mahadeva and demonstrates the literal and metaphorical toxicity of the caste system.'
      },
      {
        id: 'u16-b1',
        section: 'B',
        question: 'What does the "poisoned bread" symbolize in the story?',
        marks: 6,
        wordLimit: 'Max 100 words',
        modelAnswer: 'In Bandhu Madhav\'s story, the "poisoned bread" operates both literally and metaphorically. Literally, it refers to the moldy, dung-smeared crumbs thrown to the oxen that the landlord forces Yetalya to accept as wages, the mold of which creates a fatal toxin. Metaphorically, it symbolizes the systemic oppression, humiliation, and deep-rooted injustice of the caste system disguised as a "hereditary right" or charity. Mahadeva points out that accepting these scraps keeps them enslaved ("like a lion locked in a cage"). Ultimately, the poisoned bread represents the toxic social structure that, as Yetalya realizes on his deathbed, "kills the very humanness of man."',
        examinerTips: 'Explain both the literal meaning (toxic moldy crumbs) and the metaphorical meaning (the toxic caste system disguised as charity that kills human dignity).'
      }
    ]
  }
];

// Maps each module ID to the unitIds that belong to it.
// Used by ExamQuestionsPage and PracticePage to auto-switch content.
export const MODULE_EXAM_MAP: Record<string, string[]> = {
  'module-1-human-rights': ['sec-u1', 'sec-u2', 'sec-u3', 'sec-u4', 'sec-u5-self-unseeing'],
  'module-2-ethics': ['sec-u6-karma', 'sec-u7-in-the-name-of-science', 'sec-u8-boy-who-harnessed-wind', 'sec-u9'],
  'module-3-gender': ['sec-u10-dont-be-beautiful', 'sec-u11-biology-of-gender', 'sec-u12-empowerment-un'],
  'module-4-mindfulness': ['sec-u13-factories', 'sec-u14-stigma-shame', 'sec-u15-long-walk', 'sec-u16'],
};
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
    description: 'Questions on Global Agendas, UDHR, and systemic inclusion.',
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
      },
      {
        id: 'u1-b1',
        section: 'B',
        question: 'What are some systemic barriers that prevent full participation of women and girls with disabilities?',
        marks: 6,
        wordLimit: 'Max 100 words',
        modelAnswer: 'Women and girls with disabilities face intersecting and compounded forms of discrimination. Systemic barriers include inaccessible physical environments, lack of inclusive educational and healthcare facilities, and discriminatory laws. Socially, they endure deep-rooted stigma, negative stereotypes, and a higher risk of gender-based violence. Furthermore, there is a severe lack of representation in decision-making processes, meaning their specific needs are often overlooked in policy design. To achieve full participation, frameworks must actively dismantle these institutional and attitudinal barriers through targeted inclusive policies.',
        examinerTips: 'Ensure you address both physical/institutional barriers and social/attitudinal barriers. Use the term "intersectionality" if possible.'
      },
      {
        id: 'u1-c1',
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
  }
];
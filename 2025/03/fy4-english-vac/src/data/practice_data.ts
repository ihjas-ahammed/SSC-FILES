import { PracticeQuestion } from '../types';

export interface ModulePractice {
  moduleId: string;
  title: string;
  questions: PracticeQuestion[];
}

export const MODULE_PRACTICE: ModulePractice[] = [
  {
    moduleId: 'module-1-human-rights',
    title: 'Module I: Human Rights',
    questions: [
      {
        id: 'm1-q1',
        conceptTag: 'UN & Human Rights',
        question: 'What does UDHR stand for?',
        options: [
          { id: 'A', text: 'Universal Declaration of Human Rights', isCorrect: true, explanation: 'UDHR stands for the Universal Declaration of Human Rights, adopted by the UN in 1948.' },
          { id: 'B', text: 'United Declaration of Human Rights', isCorrect: false, explanation: 'The correct full form uses "Universal", not "United".' },
          { id: 'C', text: 'Universal Department of Human Resources', isCorrect: false, explanation: 'That is not related to international human rights law.' },
          { id: 'D', text: 'United Development for Human Rights', isCorrect: false, explanation: 'UDHR stands for Universal Declaration of Human Rights.' }
        ]
      },
      {
        id: 'm1-q2',
        conceptTag: 'UN & Human Rights',
        question: 'In which year was the UDHR adopted by the United Nations?',
        options: [
          { id: 'A', text: '1945', isCorrect: false, explanation: 'The UN was founded in 1945, but the UDHR was adopted three years later.' },
          { id: 'B', text: '1948', isCorrect: true, explanation: 'The UDHR was adopted by the UN General Assembly on 10 December 1948.' },
          { id: 'C', text: '1950', isCorrect: false, explanation: 'The UDHR was adopted in 1948, not 1950.' },
          { id: 'D', text: '1955', isCorrect: false, explanation: 'The UDHR was adopted in 1948.' }
        ]
      },
      {
        id: 'm1-q3',
        conceptTag: 'Rule of the Road',
        question: 'According to A.G. Gardiner, what is the core principle that makes liberty possible in society?',
        options: [
          { id: 'A', text: 'Total individual freedom without restriction', isCorrect: false, explanation: 'Gardiner argues total individual freedom leads to chaos.' },
          { id: 'B', text: 'A social contract where individual liberty is mutually curtailed', isCorrect: true, explanation: 'Gardiner argues liberty is sustained through a social contract — a mutual curtailment of individual freedoms.' },
          { id: 'C', text: 'Government enforcement of strict laws', isCorrect: false, explanation: 'Gardiner focuses on the social contract, not mere government enforcement.' },
          { id: 'D', text: 'Religious and moral codes of conduct', isCorrect: false, explanation: 'Gardiner uses civic examples like traffic rules, not religious codes.' }
        ]
      },
      {
        id: 'm1-q4',
        conceptTag: 'Rule of the Road',
        question: 'What does the policeman at Piccadilly Circus symbolize in Gardiner\'s essay?',
        options: [
          { id: 'A', text: 'Tyranny of government', isCorrect: false, explanation: 'Gardiner says the policeman symbolizes liberty, not tyranny.' },
          { id: 'B', text: 'Liberty, not tyranny', isCorrect: true, explanation: 'By stopping one person briefly, he prevents chaos and guarantees everyone\'s freedom to cross safely.' },
          { id: 'C', text: 'The inefficiency of traffic management', isCorrect: false, explanation: 'The policeman is used as a positive symbol of the social contract, not inefficiency.' },
          { id: 'D', text: 'Absolute personal freedom', isCorrect: false, explanation: 'The policeman represents the necessary limits on personal freedom that guarantee collective liberty.' }
        ]
      },
      {
        id: 'm1-q5',
        conceptTag: 'Humanities vs Science',
        question: 'What are the three obstacles to national development according to Dr. S. Radhakrishnan?',
        options: [
          { id: 'A', text: 'Corruption, laziness, and war', isCorrect: false, explanation: 'He identifies ignorance, disease, and poverty as the three obstacles.' },
          { id: 'B', text: 'Ignorance, disease, and poverty', isCorrect: true, explanation: 'Radhakrishnan explicitly names these three as the major obstacles to national development.' },
          { id: 'C', text: 'Illiteracy, pollution, and inequality', isCorrect: false, explanation: 'While related, these are not his exact three named obstacles.' },
          { id: 'D', text: 'War, famine, and disease', isCorrect: false, explanation: 'He identifies ignorance, disease, and poverty.' }
        ]
      },
      {
        id: 'm1-q6',
        conceptTag: 'Humanities vs Science',
        question: 'Radhakrishnan warns that universities should not produce "mechanical robots." What does he mean?',
        options: [
          { id: 'A', text: 'Robots should not be used in education', isCorrect: false, explanation: 'This is a metaphor, not a literal statement about robots.' },
          { id: 'B', text: 'Graduates who are technically skilled but lack compassion and humanistic values', isCorrect: true, explanation: 'He means graduates who are technically skilled but lack the humanistic values, compassion, and democratic spirit taught by the Humanities.' },
          { id: 'C', text: 'Students who study too much mathematics', isCorrect: false, explanation: 'It refers to moral and humanistic deficiency, not over-specialization in maths.' },
          { id: 'D', text: 'Graduates who cannot find employment', isCorrect: false, explanation: 'The phrase critiques moral deficiency, not unemployment.' }
        ]
      },
      {
        id: 'm1-q7',
        conceptTag: 'I Am a Cat',
        question: 'What is the unique narrative device used in "I Am a Cat"?',
        options: [
          { id: 'A', text: 'First-person narration by a child', isCorrect: false, explanation: 'The narrator is a cat, not a child.' },
          { id: 'B', text: 'The story is told from the perspective of an unnamed cat', isCorrect: true, explanation: 'A cat narrates the story, providing a detached, satirical outsider view of human society.' },
          { id: 'C', text: 'An omniscient third-person narrator', isCorrect: false, explanation: 'The narrator is a cat, using first-person perspective.' },
          { id: 'D', text: 'Multiple unreliable narrators', isCorrect: false, explanation: 'The sole narrator is an unnamed cat.' }
        ]
      },
      {
        id: 'm1-q8',
        conceptTag: 'I Am a Cat',
        question: 'What era of Japanese society does "I Am a Cat" satirize?',
        options: [
          { id: 'A', text: 'The Tokugawa (Edo) period', isCorrect: false, explanation: 'The satire targets the Meiji era, not the Edo period.' },
          { id: 'B', text: 'The Meiji era', isCorrect: true, explanation: 'The work satirizes the intellectuals and their superficial embrace of Western culture during Japan\'s Meiji modernization era.' },
          { id: 'C', text: 'Post-World War II Japan', isCorrect: false, explanation: 'The work was written in 1905–1906, during the Meiji era.' },
          { id: 'D', text: 'Contemporary 21st-century Japan', isCorrect: false, explanation: 'The work is set in the early 20th century during the Meiji era.' }
        ]
      },
      {
        id: 'm1-q9',
        conceptTag: 'The Self-Unseeing',
        question: 'What is the central theme of Thomas Hardy\'s poem "The Self-Unseeing"?',
        options: [
          { id: 'A', text: 'The joy of homecoming after a long journey', isCorrect: false, explanation: 'The poem is about retrospective realization, not joyful homecoming.' },
          { id: 'B', text: 'The human tendency to overlook happiness in the present moment', isCorrect: true, explanation: 'Hardy reflects on how we are blind to our own happiness while experiencing it, realising its value only in retrospect.' },
          { id: 'C', text: 'The beauty of the English countryside', isCorrect: false, explanation: 'Nature is a backdrop, but the central theme is the tragedy of not appreciating the present.' },
          { id: 'D', text: 'The pain of losing a parent', isCorrect: false, explanation: 'While his parents feature, the theme is about being "unseeing" to happiness in the moment.' }
        ]
      },
      {
        id: 'm1-q10',
        conceptTag: 'The Self-Unseeing',
        question: 'What does the final line "Yet we were looking away!" convey in "The Self-Unseeing"?',
        options: [
          { id: 'A', text: 'The family was watching a distant horizon', isCorrect: false, explanation: 'The line is metaphorical, not literal.' },
          { id: 'B', text: 'The tragedy of being oblivious to joy as it happens', isCorrect: true, explanation: 'It conveys the poignant irony of failing to be fully present and aware of one\'s own happiness while it is occurring.' },
          { id: 'C', text: 'They were ashamed of each other', isCorrect: false, explanation: 'There is no shame implied; it is about missed awareness, not shame.' },
          { id: 'D', text: 'The scene was too bright to look at directly', isCorrect: false, explanation: 'The line is a metaphor for emotional blindness to happiness, not a physical act.' }
        ]
      },
      {
        id: 'm1-q11',
        conceptTag: 'UN & Human Rights',
        question: 'What is the core principle of the UN\'s 2030 Agenda for Sustainable Development?',
        options: [
          { id: 'A', text: '"Economic Growth First"', isCorrect: false, explanation: 'The 2030 Agenda\'s core principle focuses on inclusion, not just economic growth.' },
          { id: 'B', text: '"Leave No One Behind" (LNOB)', isCorrect: true, explanation: '"Leave No One Behind" is the central principle, emphasizing the prioritization of the most marginalized populations.' },
          { id: 'C', text: '"Peace before Prosperity"', isCorrect: false, explanation: 'This is not the stated core principle of the 2030 Agenda.' },
          { id: 'D', text: '"Technology for All"', isCorrect: false, explanation: 'While SDG goals include technology access, the core principle is "Leave No One Behind".' }
        ]
      },
      {
        id: 'm1-q12',
        conceptTag: 'Humanities vs Science',
        question: 'What is the meaning of the Upanishadic phrase "Tat tvam asi" as used by Radhakrishnan?',
        options: [
          { id: 'A', text: '"Knowledge is power"', isCorrect: false, explanation: '"Tat tvam asi" translates to "That art thou," not "Knowledge is power".' },
          { id: 'B', text: '"That art thou" — every human is a spark of the Divine', isCorrect: true, explanation: 'The phrase means "That art thou" and is used to argue that every human is divine, forming the basis for compassion and equality.' },
          { id: 'C', text: '"The universe is one"', isCorrect: false, explanation: 'While related philosophically, the phrase specifically means "That art thou" in context.' },
          { id: 'D', text: '"Truth alone triumphs"', isCorrect: false, explanation: '"Satyameva Jayate" means "Truth alone triumphs." "Tat tvam asi" means "That art thou."' }
        ]
      }
    ]
  },
  {
    moduleId: 'module-2-ethics',
    title: 'Module II: Ethics & Temper',
    questions: [
      {
        id: 'm2-q1',
        conceptTag: 'Karma',
        question: 'Who is the author of the short story "Karma"?',
        options: [
          { id: 'A', text: 'R.K. Narayan', isCorrect: false, explanation: 'The author of "Karma" is Khushwant Singh, not R.K. Narayan.' },
          { id: 'B', text: 'Khushwant Singh', isCorrect: true, explanation: '"Karma" is a satirical short story by Khushwant Singh.' },
          { id: 'C', text: 'Mulk Raj Anand', isCorrect: false, explanation: 'The author is Khushwant Singh.' },
          { id: 'D', text: 'Vikram Seth', isCorrect: false, explanation: 'The author of "Karma" is Khushwant Singh.' }
        ]
      },
      {
        id: 'm2-q2',
        conceptTag: 'Karma',
        question: 'How does Sir Mohan Lal dress at the railway station?',
        options: [
          { id: 'A', text: 'In traditional Indian attire', isCorrect: false, explanation: 'Sir Mohan wears Western clothes to signal his anglicization.' },
          { id: 'B', text: 'In a Savile Row suit with polished shoes and The Times', isCorrect: true, explanation: 'He sports a Savile Row suit, polished shoes, and carries The Times as symbols of his anglicized identity.' },
          { id: 'C', text: 'In a white khadi kurta', isCorrect: false, explanation: 'That describes a nationalist, not the anglicized Sir Mohan.' },
          { id: 'D', text: 'In a military uniform', isCorrect: false, explanation: 'He is a lawyer, not a soldier; he wears a Savile Row suit.' }
        ]
      },
      {
        id: 'm2-q3',
        conceptTag: 'Karma',
        question: 'What is the central irony of "Karma"?',
        options: [
          { id: 'A', text: 'Lachmi becomes a British citizen', isCorrect: false, explanation: 'Lachmi remains authentically Indian throughout.' },
          { id: 'B', text: 'Sir Mohan, who adores British culture, is violently rejected by British soldiers', isCorrect: true, explanation: 'Despite his complete anglicization, British soldiers see him as a "nigger" and throw him off the train — a brutal rejection of the very culture he worshipped.' },
          { id: 'C', text: 'The train crashes', isCorrect: false, explanation: 'There is no train crash; the irony lies in Sir Mohan\'s humiliating rejection.' },
          { id: 'D', text: 'Sir Mohan speaks only Hindi in the end', isCorrect: false, explanation: 'The irony is his rejection by the British, not a language change.' }
        ]
      },
      {
        id: 'm2-q4',
        conceptTag: 'In the Name of Science',
        question: 'Which long-held scientific belief did Leeuwenhoek disprove through his experiments?',
        options: [
          { id: 'A', text: 'The geocentric model of the solar system', isCorrect: false, explanation: 'Leeuwenhoek focused on microbiology, not astronomy.' },
          { id: 'B', text: 'Spontaneous generation — that life arises from non-living matter', isCorrect: true, explanation: 'He disproved spontaneous generation by showing that insects come from parents like themselves, not from mud or rotting matter.' },
          { id: 'C', text: 'The flat earth theory', isCorrect: false, explanation: 'That was a separate scientific debate, not linked to Leeuwenhoek.' },
          { id: 'D', text: 'The belief that the heart pumps blood', isCorrect: false, explanation: 'That was William Harvey\'s discovery; Leeuwenhoek focused on microscopy and microorganisms.' }
        ]
      },
      {
        id: 'm2-q5',
        conceptTag: 'In the Name of Science',
        question: 'What remarkable discovery did Leeuwenhoek make by scraping his own teeth?',
        options: [
          { id: 'A', text: 'That teeth are made of calcium', isCorrect: false, explanation: 'He discovered something far more significant through microscopy.' },
          { id: 'B', text: 'A world of microscopic "animalcules" (microorganisms)', isCorrect: true, explanation: 'He found tiny living creatures in dental plaque, proving the existence of the microscopic world.' },
          { id: 'C', text: 'That bacteria cause tooth decay', isCorrect: false, explanation: 'He discovered microorganisms existed, not the mechanism of tooth decay specifically.' },
          { id: 'D', text: 'That the human mouth contains no living organisms', isCorrect: false, explanation: 'He found the opposite — an invisible world of living "animalcules".' }
        ]
      },
      {
        id: 'm2-q6',
        conceptTag: 'Boy Who Harnessed the Wind',
        question: 'What inspired William Kamkwamba to build a windmill?',
        options: [
          { id: 'A', text: 'His father asked him to build one', isCorrect: false, explanation: 'William\'s inspiration came from books he found in the library, not a family request.' },
          { id: 'B', text: 'A science textbook he found in the local library showing windmills', isCorrect: true, explanation: 'After leaving school, William visited the library and found a textbook with windmills, inspiring him to replicate the idea for his village.' },
          { id: 'C', text: 'A documentary he watched on television', isCorrect: false, explanation: 'His family had no electricity, so there was no television; it was a library book.' },
          { id: 'D', text: 'His science teacher in school', isCorrect: false, explanation: 'He had left school by then; his inspiration came from a library book.' }
        ]
      },
      {
        id: 'm2-q7',
        conceptTag: 'Boy Who Harnessed the Wind',
        question: 'What was the primary reason for William Kamkwamba\'s family\'s financial ruin?',
        options: [
          { id: 'A', text: 'His father\'s gambling debts', isCorrect: false, explanation: 'The family\'s ruin was caused by natural disaster, not gambling.' },
          { id: 'B', text: 'A severe drought and subsequent famine', isCorrect: true, explanation: 'A devastating drought wiped out their crops, causing a famine that destroyed the family\'s farming income.' },
          { id: 'C', text: 'Government taxation', isCorrect: false, explanation: 'The crisis was caused by drought and famine, not taxation.' },
          { id: 'D', text: 'A flood that destroyed their farmland', isCorrect: false, explanation: 'It was a drought (lack of water), not a flood.' }
        ]
      },
      {
        id: 'm2-q8',
        conceptTag: 'The Yellow Wallpaper',
        question: 'Who is the author of "The Yellow Wallpaper"?',
        options: [
          { id: 'A', text: 'Virginia Woolf', isCorrect: false, explanation: 'The author is Charlotte Perkins Gilman, not Virginia Woolf.' },
          { id: 'B', text: 'Charlotte Perkins Gilman', isCorrect: true, explanation: '"The Yellow Wallpaper" (1892) is a feminist classic by Charlotte Perkins Gilman.' },
          { id: 'C', text: 'Kate Chopin', isCorrect: false, explanation: 'Kate Chopin wrote "The Awakening"; this story is by Charlotte Perkins Gilman.' },
          { id: 'D', text: 'Sylvia Plath', isCorrect: false, explanation: 'Sylvia Plath wrote "The Bell Jar"; this story is by Charlotte Perkins Gilman.' }
        ]
      },
      {
        id: 'm2-q9',
        conceptTag: 'The Yellow Wallpaper',
        question: 'What "cure" does John prescribe for the narrator\'s nervous condition?',
        options: [
          { id: 'A', text: 'Travel and adventure', isCorrect: false, explanation: 'The prescribed treatment is the opposite — total rest and isolation.' },
          { id: 'B', text: 'The "rest cure" — complete idleness and isolation', isCorrect: true, explanation: 'John prescribes the "rest cure": complete isolation, no writing, no intellectual stimulation, and total inactivity.' },
          { id: 'C', text: 'Reading and creative writing', isCorrect: false, explanation: 'Writing is exactly what is forbidden under the rest cure.' },
          { id: 'D', text: 'Medication and hospital treatment', isCorrect: false, explanation: 'The treatment is the rest cure — isolation and forced idleness, not hospitalization.' }
        ]
      },
      {
        id: 'm2-q10',
        conceptTag: 'The Yellow Wallpaper',
        question: 'What does the woman trapped behind the yellow wallpaper\'s "bars" represent?',
        options: [
          { id: 'A', text: 'A ghost haunting the old mansion', isCorrect: false, explanation: 'The trapped woman is a psychological projection, not a ghost.' },
          { id: 'B', text: 'The narrator\'s own imprisoned psyche under patriarchal confinement', isCorrect: true, explanation: 'The woman represents the narrator\'s own trapped self, imprisoned by the rest cure and patriarchal control.' },
          { id: 'C', text: 'The previous owner of the house', isCorrect: false, explanation: 'The trapped woman is a projection of the narrator\'s own mental state.' },
          { id: 'D', text: 'John\'s controlling nature made visible', isCorrect: false, explanation: 'While related, the woman more directly represents the narrator\'s own imprisoned consciousness.' }
        ]
      },
      {
        id: 'm2-q11',
        conceptTag: 'Karma',
        question: 'The story\'s title "Karma" refers to:',
        options: [
          { id: 'A', text: 'An Indian city', isCorrect: false, explanation: '"Karma" is a philosophical concept, not a place name.' },
          { id: 'B', text: 'The ironic justice Sir Mohan receives — he is rejected by the British culture he worshipped', isCorrect: true, explanation: 'Sir Mohan\'s "karma" is being violently thrown off the train by the very British soldiers he idolized, a fitting ironic retribution.' },
          { id: 'C', text: 'Lachmi\'s traditional Indian values', isCorrect: false, explanation: 'The title refers to Sir Mohan\'s ironic fate, not Lachmi\'s values.' },
          { id: 'D', text: 'A Hindu religious ceremony', isCorrect: false, explanation: '"Karma" here refers to the law of cause and effect / ironic retribution in Sir Mohan\'s story.' }
        ]
      },
      {
        id: 'm2-q12',
        conceptTag: 'In the Name of Science',
        question: 'What was Leeuwenhoek\'s background before becoming a scientist?',
        options: [
          { id: 'A', text: 'He was a trained physician', isCorrect: false, explanation: 'He had no formal scientific training.' },
          { id: 'B', text: 'He was a draper (cloth merchant) with no formal scientific training', isCorrect: true, explanation: 'Leeuwenhoek was a self-taught draper whose curiosity and lens-grinding skill led him to revolutionary discoveries.' },
          { id: 'C', text: 'He was a university professor', isCorrect: false, explanation: 'He had no formal education or university position.' },
          { id: 'D', text: 'He was an architect', isCorrect: false, explanation: 'He was a draper (cloth merchant) by trade.' }
        ]
      }
    ]
  },
  {
    moduleId: 'module-3-gender',
    title: 'Module III: Gender & Society',
    questions: [
      {
        id: 'm3-q1',
        conceptTag: 'Don\'t Be Beautiful',
        question: 'Who is the author of the poem "Don\'t Be Beautiful"?',
        options: [
          { id: 'A', text: 'Sylvia Plath', isCorrect: false, explanation: 'The poem is by Nikita Gill, a contemporary British-Indian poet.' },
          { id: 'B', text: 'Nikita Gill', isCorrect: true, explanation: '"Don\'t Be Beautiful" is a modern feminist poem by Nikita Gill.' },
          { id: 'C', text: 'Kamala Das', isCorrect: false, explanation: 'The author is Nikita Gill, not Kamala Das.' },
          { id: 'D', text: 'Maya Angelou', isCorrect: false, explanation: 'The poem is by Nikita Gill.' }
        ]
      },
      {
        id: 'm3-q2',
        conceptTag: 'Don\'t Be Beautiful',
        question: 'What does Nikita Gill urge women to "be" instead of just beautiful?',
        options: [
          { id: 'A', text: 'Obedient and modest', isCorrect: false, explanation: 'Gill challenges conventional feminine expectations, not reinforces them.' },
          { id: 'B', text: 'Intelligent, witty, brave, angry, and adventurous', isCorrect: true, explanation: 'She urges women to prioritize intellect, wit, courage, righteous anger, and adventurousness over physical beauty.' },
          { id: 'C', text: 'Physically strong and athletic', isCorrect: false, explanation: 'Her vision is about inner depth and intellectual qualities, not just physical strength.' },
          { id: 'D', text: 'Wealthy and independent', isCorrect: false, explanation: 'The poem focuses on intellectual and emotional depth, not financial independence.' }
        ]
      },
      {
        id: 'm3-q3',
        conceptTag: 'Biology of Gender',
        question: 'What is epigenetics, as explained by Karissa Sanbonmatsu?',
        options: [
          { id: 'A', text: 'The study of evolution and natural selection', isCorrect: false, explanation: 'Epigenetics is about gene expression, not evolution.' },
          { id: 'B', text: 'The study of how environment influences gene expression without changing DNA', isCorrect: true, explanation: 'Epigenetics examines how factors like trauma or diet affect gene expression through DNA "knots" without altering the genetic sequence.' },
          { id: 'C', text: 'The mapping of the human genome', isCorrect: false, explanation: 'Genome mapping is genomics; epigenetics is about how genes are expressed.' },
          { id: 'D', text: 'The study of hereditary diseases', isCorrect: false, explanation: 'While related, epigenetics specifically focuses on gene expression mechanisms, not hereditary diseases alone.' }
        ]
      },
      {
        id: 'm3-q4',
        conceptTag: 'Biology of Gender',
        question: 'Why does the "temporal gap" in fetal development matter for gender identity?',
        options: [
          { id: 'A', text: 'It causes physical deformities', isCorrect: false, explanation: 'The temporal gap explains gender identity variation, not physical deformities.' },
          { id: 'B', text: 'Genitals develop in trimester 1 and the brain in trimester 2, so different hormonal signals can influence each', isCorrect: true, explanation: 'Since physical sex differentiation and brain differentiation occur at different times, they can be influenced by different hormonal/epigenetic signals, explaining why biological sex and brain gender may diverge.' },
          { id: 'C', text: 'It determines eye and hair color', isCorrect: false, explanation: 'The temporal gap relates to sex differentiation, not features like eye color.' },
          { id: 'D', text: 'It explains why twins are identical', isCorrect: false, explanation: 'This concept relates to gender identity development, not twin formation.' }
        ]
      },
      {
        id: 'm3-q5',
        conceptTag: 'Biology of Gender',
        question: 'According to Sanbonmatsu, where does gender identity primarily reside?',
        options: [
          { id: 'A', text: 'In social and cultural conditioning alone', isCorrect: false, explanation: 'Sanbonmatsu provides a biological basis, not just a social one.' },
          { id: 'B', text: 'In the brain, which develops separately from physical sex characteristics', isCorrect: true, explanation: 'Her research shows gender identity is neurological — it resides in the brain\'s structure, which develops at a different time from genitals.' },
          { id: 'C', text: 'In the chromosomes exclusively', isCorrect: false, explanation: 'Epigenetic and developmental factors beyond chromosomes determine gender identity.' },
          { id: 'D', text: 'In early childhood socialization', isCorrect: false, explanation: 'While socialization matters, Sanbonmatsu focuses on the biological basis in fetal brain development.' }
        ]
      },
      {
        id: 'm3-q6',
        conceptTag: 'UN Women Strategy',
        question: 'What does CEDAW stand for?',
        options: [
          { id: 'A', text: 'Convention on Economic Development and Women\'s Welfare', isCorrect: false, explanation: 'CEDAW stands for Convention on the Elimination of All Forms of Discrimination Against Women.' },
          { id: 'B', text: 'Convention on the Elimination of All Forms of Discrimination Against Women', isCorrect: true, explanation: 'CEDAW is a key international treaty protecting women\'s rights globally.' },
          { id: 'C', text: 'Center for Equality, Development, and Women\'s Action', isCorrect: false, explanation: 'CEDAW is Convention on the Elimination of All Forms of Discrimination Against Women.' },
          { id: 'D', text: 'Cooperative of Empowered and Disabled African Women', isCorrect: false, explanation: 'CEDAW stands for Convention on the Elimination of All Forms of Discrimination Against Women.' }
        ]
      },
      {
        id: 'm3-q7',
        conceptTag: 'UN Women Strategy',
        question: 'What systemic barriers prevent women and girls with disabilities from full participation in society?',
        options: [
          { id: 'A', text: 'Only physical inaccessibility', isCorrect: false, explanation: 'The barriers are multiple and compounded.' },
          { id: 'B', text: 'Legal gaps, physical inaccessibility, lack of communication, and attitudinal prejudices', isCorrect: true, explanation: 'Women with disabilities face compounded discrimination from multiple systemic barriers including legal, physical, communicational, and attitudinal factors.' },
          { id: 'C', text: 'Only financial poverty', isCorrect: false, explanation: 'The barriers are structural and multifaceted, not only financial.' },
          { id: 'D', text: 'Language barriers alone', isCorrect: false, explanation: 'Multiple barriers — legal, attitudinal, physical — compound to exclude women with disabilities.' }
        ]
      },
      {
        id: 'm3-q8',
        conceptTag: 'UN Women Strategy',
        question: 'What paradigm shift do the CRPD and CEDAW together promote regarding women with disabilities?',
        options: [
          { id: 'A', text: 'From rights-holders to charity recipients', isCorrect: false, explanation: 'The shift is the opposite — from charity to rights.' },
          { id: 'B', text: 'From objects of charity to active rights-holders', isCorrect: true, explanation: 'These frameworks shift the paradigm from viewing disabled women as passive recipients of charity to recognizing them as active bearers of rights.' },
          { id: 'C', text: 'From local governance to international control', isCorrect: false, explanation: 'The shift is about the status of women, not governance structures.' },
          { id: 'D', text: 'From medical models to economic models', isCorrect: false, explanation: 'The primary shift is about rights recognition, from a charity/medical model to a rights-based framework.' }
        ]
      },
      {
        id: 'm3-q9',
        conceptTag: 'Don\'t Be Beautiful',
        question: 'The poem "Don\'t Be Beautiful" primarily challenges:',
        options: [
          { id: 'A', text: 'The fashion industry\'s pricing', isCorrect: false, explanation: 'The poem challenges societal expectations, not industry economics.' },
          { id: 'B', text: 'The societal expectation that a woman\'s primary value lies in physical appearance', isCorrect: true, explanation: 'Gill challenges the reductive idea that women\'s worth is defined by beauty, urging them to cultivate deeper qualities.' },
          { id: 'C', text: 'Traditional gender roles in household work', isCorrect: false, explanation: 'The poem focuses on the social pressure of physical beauty standards, not household roles.' },
          { id: 'D', text: 'The media\'s portrayal of violence', isCorrect: false, explanation: 'The poem focuses on beauty standards and women\'s inner worth.' }
        ]
      },
      {
        id: 'm3-q10',
        conceptTag: 'Biology of Gender',
        question: 'What are the molecular markers Sanbonmatsu refers to that influence gene expression?',
        options: [
          { id: 'A', text: 'Blood type markers', isCorrect: false, explanation: 'Sanbonmatsu refers to DNA "knots" or chemical modifications, not blood type markers.' },
          { id: 'B', text: 'DNA "knots" or chemical modifications that turn genes on or off', isCorrect: true, explanation: 'These epigenetic "knots" or modifications are triggered by environment/experience and change which genes are active.' },
          { id: 'C', text: 'Chromosomal mutations', isCorrect: false, explanation: 'Epigenetic markers don\'t involve mutations to the DNA sequence itself.' },
          { id: 'D', text: 'Antibody markers in the blood', isCorrect: false, explanation: 'Epigenetic markers are modifications to DNA structure, not antibodies.' }
        ]
      }
    ]
  },
  {
    moduleId: 'module-4-mindfulness',
    title: 'Module IV: Mindfulness & Society',
    questions: [
      {
        id: 'm4-q1',
        conceptTag: 'Factories are Eyesores',
        question: 'Why does the poet refer to factories as "eyesores"?',
        options: [
          { id: 'A', text: 'They are too expensive to build', isCorrect: false, explanation: 'The poet\'s criticism is aesthetic and environmental, not economic.' },
          { id: 'B', text: 'Their ugly structures and black smoke ruin the natural landscape', isCorrect: true, explanation: 'The poem criticizes factories for their gaunt, ugly appearance and constant pollution that destroys natural beauty.' },
          { id: 'C', text: 'They block sunlight from nearby homes', isCorrect: false, explanation: 'While related to obstruction, the key criticism is their visual ugliness and smoke pollution.' },
          { id: 'D', text: 'Workers dislike working in them', isCorrect: false, explanation: 'The poem focuses on their visual impact on the landscape, not worker satisfaction.' }
        ]
      },
      {
        id: 'm4-q2',
        conceptTag: 'Factories are Eyesores',
        question: 'What does the poem "Factories are Eyesores" lament about industrialization?',
        options: [
          { id: 'A', text: 'The unemployment caused by machines', isCorrect: false, explanation: 'The poem focuses on environmental and aesthetic destruction, not unemployment.' },
          { id: 'B', text: 'The destruction of natural beauty and the environment by industrial pollution', isCorrect: true, explanation: 'The poem mourns how factories mar the landscape with ugly structures and acrid smoke, destroying natural harmony.' },
          { id: 'C', text: 'The exploitation of child labor', isCorrect: false, explanation: 'While a valid critique of industrialism, this is not the poem\'s specific focus.' },
          { id: 'D', text: 'The economic inequality caused by factory owners', isCorrect: false, explanation: 'The lament is about environmental and aesthetic destruction, not economic inequality.' }
        ]
      },
      {
        id: 'm4-q3',
        conceptTag: 'Stigma, Shame, and Silence',
        question: 'Why did Ashok feel the doctor\'s HIV diagnosis was "worse than a death sentence"?',
        options: [
          { id: 'A', text: 'Because HIV had no treatment at all', isCorrect: false, explanation: 'While treatment was limited, the "worse than death" feeling was about moral judgment, not just medical hopelessness.' },
          { id: 'B', text: 'Because it came with moral judgment and social shame, unlike other terminal illnesses', isCorrect: true, explanation: 'Ashok felt that HIV brought stigma, mockery, and social condemnation — a moral verdict on top of a medical one — unlike other fatal diseases that receive sympathy.' },
          { id: 'C', text: 'Because his family immediately abandoned him', isCorrect: false, explanation: 'The immediate reaction described is the doctor\'s contempt, not family abandonment.' },
          { id: 'D', text: 'Because he was sent to prison', isCorrect: false, explanation: 'He was sent to an isolation ward, not prison.' }
        ]
      },
      {
        id: 'm4-q4',
        conceptTag: 'Stigma, Shame, and Silence',
        question: 'What was the most psychologically damaging aspect of the isolation ward for Ashok?',
        options: [
          { id: 'A', text: 'The lack of food', isCorrect: false, explanation: 'The psychological damage came from social isolation and stigma, not physical deprivation.' },
          { id: 'B', text: 'Self-imposed social exclusion due to fear of others\' contempt', isCorrect: true, explanation: 'The patients avoided common areas — like the TV lounge — out of dread of contemptuous remarks, imposing isolation upon themselves beyond the physical segregation.' },
          { id: 'C', text: 'Painful medical procedures', isCorrect: false, explanation: 'The psychological impact was from social stigma and self-exclusion, not medical pain.' },
          { id: 'D', text: 'The noise from other patients', isCorrect: false, explanation: 'The key impact was shame-driven self-isolation.' }
        ]
      },
      {
        id: 'm4-q5',
        conceptTag: 'A Long Walk to Water',
        question: 'Where was Salva when gunfire first erupted and changed his life?',
        options: [
          { id: 'A', text: 'At home with his family', isCorrect: false, explanation: 'Salva was at school when the war reached his village, which is why he couldn\'t return home.' },
          { id: 'B', text: 'At school during an Arabic lesson', isCorrect: true, explanation: 'Salva was in school during an Arabic class when gunfire erupted outside, and his teacher told him to run into the bush.' },
          { id: 'C', text: 'In the market buying food', isCorrect: false, explanation: 'He was at school when the violence started.' },
          { id: 'D', text: 'Herding cattle in the fields', isCorrect: false, explanation: 'He was in school during an Arabic lesson when the war reached his village.' }
        ]
      },
      {
        id: 'm4-q6',
        conceptTag: 'A Long Walk to Water',
        question: 'What instruction did Salva\'s teacher give when gunfire erupted?',
        options: [
          { id: 'A', text: '"Run home immediately to your families"', isCorrect: false, explanation: 'The teacher explicitly warned them NOT to go home, as rebels were attacking villages.' },
          { id: 'B', text: '"Run into the bush and do NOT go home"', isCorrect: true, explanation: 'The teacher warned that rebels were attacking villages, so running home would be dangerous; he told them to flee into the bush instead.' },
          { id: 'C', text: '"Hide under your desks until it is safe"', isCorrect: false, explanation: 'He told them to run out into the bush, not hide in the classroom.' },
          { id: 'D', text: '"Go to the army camp for protection"', isCorrect: false, explanation: 'He told them to flee into the bush, away from the fighting.' }
        ]
      },
      {
        id: 'm4-q7',
        conceptTag: 'The Poisoned Bread',
        question: 'Who is the author of "The Poisoned Bread"?',
        options: [
          { id: 'A', text: 'Mulk Raj Anand', isCorrect: false, explanation: 'The story is by Bandhu Madhav (translated by Jayant Karve and Philip Engblom).' },
          { id: 'B', text: 'Bandhu Madhav', isCorrect: true, explanation: '"The Poisoned Bread" is a Dalit short story by Bandhu Madhav, a Marathi writer.' },
          { id: 'C', text: 'B.R. Ambedkar', isCorrect: false, explanation: 'B.R. Ambedkar was a jurist and activist; the story was written by Bandhu Madhav.' },
          { id: 'D', text: 'R.K. Narayan', isCorrect: false, explanation: 'The author is Bandhu Madhav.' }
        ]
      },
      {
        id: 'm4-q8',
        conceptTag: 'The Poisoned Bread',
        question: 'What does the "poisoned bread" symbolize metaphorically in the story?',
        options: [
          { id: 'A', text: 'The physical danger of spoiled food', isCorrect: false, explanation: 'The bread is also a metaphor, not just a literal object.' },
          { id: 'B', text: 'The toxic caste system disguised as charity, which kills human dignity', isCorrect: true, explanation: 'The moldy bread given as "wages" represents the caste system\'s oppressive charity — a toxic gift that strips the Dalit community of dignity and freedom.' },
          { id: 'C', text: 'The generosity of landlords toward workers', isCorrect: false, explanation: 'It represents the opposite — the humiliation and dehumanization disguised as generosity.' },
          { id: 'D', text: 'Hunger and poverty in rural India', isCorrect: false, explanation: 'While related to poverty, the metaphor specifically represents caste oppression disguised as charity.' }
        ]
      },
      {
        id: 'm4-q9',
        conceptTag: 'The Poisoned Bread',
        question: 'What realization does the grandfather (Yetalya) reach on his deathbed?',
        options: [
          { id: 'A', text: 'That the landlord was not responsible for his death', isCorrect: false, explanation: 'Yetalya\'s realization is about education and resistance, not forgiving the landlord.' },
          { id: 'B', text: 'That the caste system kills human dignity, and education is the only way to destroy it', isCorrect: true, explanation: 'In his final moments, Yetalya understands that submission to caste oppression is fatal and urges his grandson Mahadeva to pursue education as liberation.' },
          { id: 'C', text: 'That they should move to the city', isCorrect: false, explanation: 'His realization is about education as liberation from caste oppression, not migration.' },
          { id: 'D', text: 'That traditional life is best', isCorrect: false, explanation: 'He realizes the opposite — that the "traditional" caste order kills dignity and must be fought through education.' }
        ]
      },
      {
        id: 'm4-q10',
        conceptTag: 'A Long Walk to Water',
        question: 'Whose alternating perspective does "A Long Walk to Water" follow alongside Salva\'s?',
        options: [
          { id: 'A', text: 'Salva\'s mother', isCorrect: false, explanation: 'The alternating perspective is Nya\'s, a young girl from South Sudan.' },
          { id: 'B', text: 'Nya, a young girl who walks hours daily for water in 2008', isCorrect: true, explanation: 'The novel alternates between Salva\'s 1985 refugee journey and Nya\'s 2008 daily struggle to fetch water for her family.' },
          { id: 'C', text: 'A UN aid worker', isCorrect: false, explanation: 'The alternating narrative follows Nya, not an aid worker.' },
          { id: 'D', text: 'Salva\'s uncle', isCorrect: false, explanation: 'The uncle features in Salva\'s story; the alternating perspective belongs to Nya.' }
        ]
      },
      {
        id: 'm4-q11',
        conceptTag: 'Stigma, Shame, and Silence',
        question: 'Where were Ashok and the other HIV patients held while awaiting final test results?',
        options: [
          { id: 'A', text: 'A general hospital ward in Mumbai', isCorrect: false, explanation: 'They were at the Command Hospital in Pune, not a general ward in Mumbai.' },
          { id: 'B', text: 'The isolation ward of the Command Hospital in Pune', isCorrect: true, explanation: 'Ashok and five other HIV-positive patients were placed in a separate isolation ward at the Command Hospital in Pune.' },
          { id: 'C', text: 'A government quarantine camp', isCorrect: false, explanation: 'They were in an isolation ward of the Command Hospital in Pune.' },
          { id: 'D', text: 'A special clinic in New Delhi', isCorrect: false, explanation: 'The location is the Command Hospital in Pune.' }
        ]
      },
      {
        id: 'm4-q12',
        conceptTag: 'Factories are Eyesores',
        question: 'The poem "Factories are Eyesores" can be read as a critique of:',
        options: [
          { id: 'A', text: 'Socialism and communism', isCorrect: false, explanation: 'The poem critiques industrial pollution and environmental degradation, not political ideologies.' },
          { id: 'B', text: 'Unchecked industrialization that sacrifices nature for profit', isCorrect: true, explanation: 'The poem critiques the environmental cost of industrial progress — the destruction of landscape beauty for economic production.' },
          { id: 'C', text: 'The laziness of factory workers', isCorrect: false, explanation: 'The critique is aimed at industrialization and its environmental impact, not the workers.' },
          { id: 'D', text: 'Religious opposition to modern technology', isCorrect: false, explanation: 'The poem is an environmental/aesthetic critique, not a religious one.' }
        ]
      }
    ]
  }
];

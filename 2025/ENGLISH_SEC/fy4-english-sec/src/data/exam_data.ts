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

export const MODULE_EXAM_MAP: Record<string, string[]> = {
  'module-1-scientific-attitude': ['model-qp'],
  'module-2-scientific-language': ['model-qp'],
  'module-3-scientific-imagination': ['model-qp'],
  'module-4-scientific-presentations': ['model-qp'],
};

export const EXAM_MODULES: UnitExam[] = [
  {
    unitId: 'model-qp',
    title: 'Model Question Paper — ENG4FS111(2)',
    description: 'IV Semester B.Sc. (CUFYUGP) Degree Examinations, March 2026. Contemporary Language Skills for Sciences. Max Time: 1.5 Hours | Max Marks: 50.',
    questions: [
      // Section A — Answer all. Each question carries 2 marks. (Ceiling: 16 marks)
      {
        id: 'secA-q1',
        section: 'A',
        question: 'Give any four activities suggested in "Scientists and the Power of Imagination" to nurture imagination.',
        marks: 2,
        wordLimit: 'Max 4 sentences',
        modelAnswer: 'The documentary suggests the following four activities to nurture imagination: (1) Walking — allows the mind to wander and stimulates daydreaming, which can be the seed of a new scientific theory; (2) Reading — fosters mental flexibility and exposes one to different perspectives; (3) Meditation — quiets the mind to tap into the subconscious where innovative ideas reside; and (4) Puzzle solving — sharpens the ability to think outside the box and find creative solutions to complex problems.',
        examinerTips: 'Name four specific activities from the five listed (walking, reading, writing, meditation, puzzle solving). Brief explanations add value but are not strictly required.'
      },
      {
        id: 'secA-q2',
        section: 'A',
        question: 'Explain the significance of the opening line of the poem, "Singularity."',
        marks: 2,
        wordLimit: 'Max 4 sentences',
        modelAnswer: 'The opening line "Do you sometimes want to wake up to the singularity we once were?" is a rhetorical question that establishes the poem\'s central theme of longing. It evokes the cosmological singularity — the pre-Big Bang state where all matter was compressed into a single point — as a metaphor for unity. The phrase "wake up" implies humanity is in a deep slumber, unaware of its shared cosmic origins. The line expresses a yearning for a world before poverty, illness, loneliness, and social divisions — a world of primordial oneness.',
        examinerTips: 'Mention the rhetorical question, the cosmic allusion (Stephen Hawking\'s singularity), and the theme of longing or unity. Connect it to the poem\'s broader meditation on separation.'
      },
      {
        id: 'secA-q3',
        section: 'A',
        question: 'Analyse the relevance of the point of view employed in Chiang\'s story. Is it a common point of view employed by writers?',
        marks: 2,
        wordLimit: 'Max 4 sentences',
        modelAnswer: 'Ted Chiang employs a second-person point of view ("you") combined with a voice transmitted from the future, which is unusual in fiction. This perspective directly implicates the reader, creating an immediate sense of urgency and personal responsibility regarding the warning about free will. Unlike the more common first-person or third-person narratives, this POV blurs the line between fiction and reality, making the philosophical message personally impactful. While the second-person is used by some writers (notably in "choose-your-own-adventure" fiction and some experimental narratives), it is not a commonly employed point of view in serious literary fiction.',
        examinerTips: 'Identify the second-person POV and its effect; compare to common POVs (first/third person); comment on how unusual it is.'
      },
      {
        id: 'secA-q4',
        section: 'A',
        question: 'What is the distinctiveness of the structure of Bacon\'s essay?',
        marks: 2,
        wordLimit: 'Max 3 sentences',
        modelAnswer: 'Bacon\'s essay "Of the Interpretation of Nature and the Empire of Man" is distinctively structured as a series of numbered aphorisms — short, compact, self-contained philosophical statements rather than a flowing narrative. Each aphorism stands independently as a complete thought, allowing readers to reference specific ideas easily. This form condenses complex philosophical ideas into memorable statements and reflects Bacon\'s empirical approach: ordered, systematic, and universally applicable.',
        examinerTips: 'Key term: "aphorism." Emphasize the numbered, self-contained structure as the main distinctive feature.'
      },
      {
        id: 'secA-q5',
        section: 'A',
        question: 'List two qualities of an effective scientific presentation.',
        marks: 2,
        wordLimit: 'Max 3 sentences',
        modelAnswer: 'Two qualities of an effective scientific presentation are: (1) Clarity — the presenter uses simple, well-labeled visuals with minimal text, ensuring the audience understands the key ideas without confusion; and (2) Organization — the presentation follows a logical structure (introduction, methods, results, summary) where each slide conveys one main idea and transitions guide the audience naturally from one point to the next.',
        examinerTips: 'From Units 14 and 15. Any two well-explained qualities are acceptable: clarity, organization, audience engagement, effective use of visuals, confident delivery, etc.'
      },
      {
        id: 'secA-q6',
        section: 'A',
        question: 'What is the role of collaboration in team presentations?',
        marks: 2,
        wordLimit: 'Max 3 sentences',
        modelAnswer: 'Collaboration plays a crucial role in team presentations by enabling each team member to contribute their unique expertise, resulting in more structured and comprehensive presentations. It ensures content accuracy, visual consistency, and a balanced distribution of responsibilities. Additionally, collaboration encourages problem-solving, improves communication among team members, and ultimately produces a more professional and impactful final presentation.',
        examinerTips: 'From Unit 16. Key points: expertise sharing, division of roles, problem-solving, consistency.'
      },
      {
        id: 'secA-q7',
        section: 'A',
        question: 'Identify one suggestion for reducing back-and-forth snag in team presentations.',
        marks: 2,
        wordLimit: 'Max 3 sentences',
        modelAnswer: 'One effective suggestion for reducing back-and-forth snag is to work in the cloud. When all team members use a cloud-based platform, everyone always works on the most up-to-date version of the presentation. This eliminates the inefficiency of exchanging email attachments, waiting for approvals, and managing conflicting versions — significantly streamlining the collaboration process.',
        examinerTips: 'Any one of the six tips from Unit 16 is acceptable: Shared Library, Cloud work, Assign tasks, Content management, Real-time feedback, Seamless sharing.'
      },
      {
        id: 'secA-q8',
        section: 'A',
        question: 'Which elements contribute to the success and appeal of a science podcast?',
        marks: 2,
        wordLimit: 'Max 4 sentences',
        modelAnswer: 'A science podcast\'s success depends on several key elements. First, clear and accessible language that avoids jargon ensures the content reaches a broad audience. Second, engaging storytelling through narratives, anecdotes, and expert interviews makes science relatable and interesting. Third, technical precision — high audio quality, balanced sound, and smooth editing — enhances the listening experience. Finally, strategic promotion through social media and academic networks builds a loyal listener base.',
        examinerTips: 'From Unit 5. Cover at least 2–3 elements: language clarity, storytelling, technical quality, promotion, audience targeting.'
      },
      {
        id: 'secA-q9',
        section: 'A',
        question: 'What is the difference between field memory and observer memory?',
        marks: 2,
        wordLimit: 'Max 3 sentences',
        modelAnswer: 'Field memory is the recall of an event from one\'s own point of view — as if seeing through one\'s own eyes — and is more common for recent events and emotional recollections. Observer memory is the recall of an event from an outside perspective, where one sees oneself in the scene, and is more common for childhood memories and factual recollections. Linden notes that the type of memory evoked depends on the task at hand, demonstrating that memory is flexible and context-dependent rather than fixed.',
        examinerTips: 'From Unit 8. Define both types clearly and note when each is more commonly evoked.'
      },
      {
        id: 'secA-q10',
        section: 'A',
        question: 'What was the ancient Greek philosophical perspective on seeking knowledge, as explained by Shapin?',
        marks: 2,
        wordLimit: 'Max 3 sentences',
        modelAnswer: 'According to Shapin, ancient Greek philosophy debated between the "active life" and the "contemplative life" as paths to knowledge. The active life held that knowledge and virtue arose from engagement with society, while the contemplative life valued solitary reflection and pure reason. Shapin argues that these ancient sensibilities persist in contemporary debates about individualism versus teamwork in scientific communities.',
        examinerTips: 'From Unit 10. Reference the "active vs. contemplative life" distinction. Connecting to the contemporary relevance earns full marks.'
      },
      // Section B — Answer all. Each question carries 6 marks. (Ceiling: 24 marks)
      {
        id: 'secB-q11',
        section: 'B',
        question: 'How does Scene 13 of Brecht\'s The Life of Galileo show the tension between scientific truth and its public presentation? Give two specific examples.',
        marks: 6,
        wordLimit: 'Around 200 words',
        modelAnswer: 'Scene 13 of Brecht\'s The Life of Galileo dramatizes the tension between the advance of scientific knowledge and the obstacles to its public dissemination through institutional authority and popular superstition.\n\nExample 1 — The Frontier Guards: The guards examine Andrea\'s luggage at the border but fail to recognize the significance of Galileo\'s Discorsi, the revolutionary scientific work he is smuggling. The clerk is more concerned about collecting toll money than examining books. When the chest is finally opened, the guards dismiss the contents carelessly. This exemplifies how bureaucratic authority, driven by routine and financial interest, is blind to the true value of knowledge and actively (though unintentionally) suppresses its dissemination.\n\nExample 2 — The Children and Superstition: The children in the scene debate whether the old woman is a witch who flies on a broomstick. When Giuseppe asks Andrea if anyone can fly through the air, Andrea responds patiently: "One cannot fly through the air on a broomstick. It must at least have a machine on it, and as yet there is no such machine." This contrast between superstition and rational scientific thinking illustrates the broader struggle science faces in reaching the public. Andrea\'s patient engagement with the children represents the responsibility of scientists to educate and enlighten, even in the face of widespread ignorance.\n\nThrough these examples, Brecht suggests that knowledge, once created, must overcome both institutional indifference and popular superstition to reach the people who need it.',
        examinerTips: 'Provide two clear, specific examples from the scene. Each example should include a quote or specific reference, followed by analysis of what it reveals about the tension.'
      },
      {
        id: 'secB-q12',
        section: 'B',
        question: 'Explain three practical tips that can make a scientific presentation effective.',
        marks: 6,
        wordLimit: 'Around 180 words',
        modelAnswer: '1. Know Your Audience (Step 1 from Unit 14): Identifying the audience\'s level of expertise is the first step in preparing an effective presentation. For a non-expert audience, simpler language and more background context are needed; for experts, technical depth is appropriate. This ensures that the content is pitched at the right level and that every slide is relevant.\n\n2. Use Figures and Visuals Effectively: Graphs, diagrams, and images should be used to illustrate key points. All elements must be clearly labeled (both axes of graphs, captions, source credits) and sized for visibility from the back of the room. Visuals enrich slides, promote audience interest, and help explain complex ideas quickly.\n\n3. Practice Delivery: Rehearsing the talk in front of others — checking timing, anticipating questions, and refining transitions — is essential for confident delivery. Speakers should maintain eye contact, speak slowly and clearly, avoid filler words ("uh", "um"), and be enthusiastic about their results. Practice also prepares presenters for the question-and-answer session.',
        examinerTips: 'Any three well-explained tips from Units 14 or 15 are acceptable. Each tip should be explained (not just named) for full credit.'
      },
      {
        id: 'secB-q13',
        section: 'B',
        question: 'Analyse David Hume\'s critique of inductive reasoning.',
        marks: 6,
        wordLimit: 'Around 180 words',
        modelAnswer: 'David Hume (1711–1776), the Scottish philosopher, challenged the philosophical foundation of inductive reasoning through what is now called the "Problem of Induction." Science relies on induction — drawing general conclusions from repeated specific observations. For example, observing that the sun has risen every day leads to the conclusion that it will rise tomorrow.\n\nHume\'s critique has three steps:\n1. We rely on induction because it has worked successfully in the past.\n2. However, the justification that induction is reliable because it has worked in the past is itself an inductive argument — this creates circular reasoning.\n3. Therefore, there is no purely rational (non-circular) justification for inductive reasoning.\n\nNo matter how many times a pattern repeats, there is no logical guarantee it will continue. One contrary instance — like the discovery of black swans when only white swans had previously been observed — is sufficient to falsify any inductive generalization.\n\nHume\'s critique reveals a fundamental philosophical vulnerability in the scientific method: science is practically successful but lacks an absolute rational foundation for its core reasoning process.',
        examinerTips: 'Explain the Problem of Induction clearly: circular reasoning, the impossibility of guaranteeing future patterns from past ones. The "black swan" example is a bonus.'
      },
      {
        id: 'secB-q14',
        section: 'B',
        question: 'Consider the structure of the article on aphantasia to bring out the characteristics of presenting a scientific concept.',
        marks: 6,
        wordLimit: 'Around 180 words',
        modelAnswer: 'Zarins\' article on aphantasia demonstrates several key characteristics of effective scientific writing for a general audience:\n\n1. Personal Anecdote as Opening: The article opens with Zarins\' own childhood experience of trying to get to Narnia via a stone circle — immediately grounding an abstract neurological condition in a relatable, human story that draws the reader in.\n\n2. Clear Definition and Context: The technical term "aphantasia" is introduced with its year of coinage (2015), the person who coined it (Adam Zeman), and its prevalence (2% of people). This establishes credibility while remaining accessible.\n\n3. Cultural Anchoring through Literature: Using familiar cultural references (The Chronicles of Narnia, Lord of the Rings) helps readers understand how the condition affects reading experience.\n\n4. Quoted Evidence: A blogger\'s first-person account provides experiential data, making the abstract neurological condition concrete.\n\n5. Practical Application: The article concludes with actionable tips for writers, demonstrating that effective science communication connects knowledge to practical outcomes.\n\n6. Broader Implications: By linking aphantasia to neurodiversity and inclusion, the article situates the scientific concept within a wider social and ethical context.',
        examinerTips: 'Identify 4–6 structural characteristics with reference to the text. Both form (structure) and function (effect) should be addressed.'
      },
      {
        id: 'secB-q15',
        section: 'B',
        question: 'What does the \'Predictor\' in Ted Chiang\'s story symbolise?',
        marks: 6,
        wordLimit: 'Around 180 words',
        modelAnswer: 'The Predictor in Ted Chiang\'s "What\'s Expected of Us?" functions as a multivalent symbol with several layers of meaning:\n\n1. Determinism and the Absence of Free Will: At the most literal level, the Predictor is a device with a negative time delay that demonstrates — through a physical demonstration rather than an argument — that free will is an illusion. Every action is predetermined, and no attempt to outwit the device succeeds.\n\n2. Smartphone and Digital Technology: The Predictor resembles a smartphone remote — a small, addictive device that flashes (like notifications) before we even consciously need it. It represents how modern technology anticipates and controls human behavior before the user is fully aware.\n\n3. Social Constructs: The story asks whether what we call "choices" are actually predetermined by social expectations — the title "What\'s Expected of Us?" captures this ambiguity.\n\n4. The Human Face: The green LED flash is described as resembling a smile — pointing to how humans form bonds (press the button) in response to social signals without questioning their authenticity.\n\n5. Self-Deception: Ultimately, the Predictor symbolises the civilization-wide self-deception that the narrator warns is the only way to avoid psychological collapse.',
        examinerTips: 'Name and explain at least 3 symbolic readings. Full marks require connecting each symbolic reading to a specific textual detail or theme.'
      },
      // Section C — Answer any one. Each question carries 10 marks. (1x10 = 10 marks)
      {
        id: 'secC-q16',
        section: 'C',
        question: 'Design a model scientific presentation on any one contemporary scientific issue. Explain how you would apply the principles of clarity, audience engagement and collaboration.',
        marks: 10,
        wordLimit: 'Around 400 words',
        modelAnswer: 'Topic: Climate Change and the Role of Carbon Capture Technology\n\nTitle Slide: "Turning the Tide: Carbon Capture as a Climate Solution"\n\nStructure of the Presentation:\n\n1. Introduction (~6 minutes, 4–5 slides)\n- Opening with a compelling statistic: "CO₂ levels have crossed 420 ppm for the first time in human history."\n- Outline slide: Problem → Science → Solutions → Future\n- Background: The greenhouse effect, sources of CO₂, consequences of inaction\n\n2. Methods (~6 minutes, 2–3 slides)\n- How carbon capture works: Direct Air Capture (DAC), post-combustion capture, bio-energy carbon capture (BECCS)\n- Simple diagrams with labeled components\n\n3. Key Results (~9 minutes, 4–5 slides)\n- Current scale of deployment (Mt CO₂/year)\n- Cost reduction trends\n- Limitations and challenges\n\n4. Summary and Conclusion (~1 minute)\n- What carbon capture can and cannot do\n- Policy recommendations\n\nApplying the Three Principles:\n\nClarity: Each slide will carry only one key idea, supported by well-labeled graphs and diagrams. Technical jargon like "amine scrubbing" will be explained on-screen with an analogy ("like a sponge absorbing CO₂"). Font will be minimum 20pt San Serif throughout.\n\nAudience Engagement: The presentation will open with an interactive question: "How many of you know what 420 ppm of CO₂ means for our planet?" Eye contact will be maintained throughout. The audience will be told what to look at in each data slide: "Focus on the blue line — it shows the cost dropping by 50% in a decade." The Q&A session will be invited at the end.\n\nCollaboration: For a team presentation, roles will be divided — one presenter for background and methods, one for results, one for conclusion and Q&A. All team members will work in a shared cloud-based platform (Google Slides) to maintain a consistent design template. Tasks will be assigned on specific slides using comments and tags. A group rehearsal will be held two days before the presentation to check timing, transitions, and question preparation.',
        examinerTips: 'Award marks for: (1) clear topic choice, (2) logical structure with named sections, (3) application of clarity (visuals, language, slide design), (4) audience engagement techniques, (5) team collaboration strategy. A good answer demonstrates integration of all three principles, not just listing tips.'
      },
      {
        id: 'secC-q17',
        section: 'C',
        question: 'Compare Ramanujan\'s role as a scientist with that of a husband/son to illustrate the humane qualities required to contribute to one\'s society despite challenges.',
        marks: 10,
        wordLimit: 'Around 400 words',
        modelAnswer: 'Srinivasa Ramanujan\'s life, as depicted in the biopic "The Man Who Knew Infinity," offers a profound illustration of how a person can contribute to society through scientific genius while simultaneously navigating the deeply personal demands of familial and marital life. The two roles — scientist and family man — reveal the humane qualities that underpin his extraordinary contribution.\n\nRamanujan as a Scientist:\nAs a scientist, Ramanujan demonstrated exceptional self-belief, persistence, and originality. Born into poverty and denied formal employment due to lack of academic qualifications, he refused to let social barriers define him. His declaration — "What you might see now is ordinary glass, but I promise you will soon remain to see a diamond" — encapsulates his unwavering conviction in his own potential. Collaborating with G.H. Hardy, he contributed foundational work in number theory, modular forms, and the celebrated Hardy-Ramanujan number (1729). He worked tirelessly even through illness, completing his final paper on "mock modular forms" just before his death at 32. His scientific contributions required intellectual courage, humility (in accepting Hardy\'s method of proofs), and an almost spiritual dedication: "An equation for me has no meaning unless it expresses a thought of God."\n\nRamanujan as a Husband and Son:\nAs a husband, Ramanujan made a promise to Janaki that he would bring her to England once the situation permitted. Despite being unable to fulfill this, her letters reached him (or should have) as emotional sustenance. The revelation that his mother had hidden Janaki\'s letters from him adds a layer of tragedy — a man caught between filial duty and marital commitment. Janaki\'s resilience and open support for his academic goals, even against social expectations and her mother-in-law\'s accusations, shows that his contributions were not made in isolation but were supported by her quiet courage.\n\nAs a son, Ramanujan remained deeply connected to his cultural identity and family in India. His mother\'s pride at his article being published in the London Mathematical Society — celebrated with offerings to guests — shows how his personal success was intertwined with his family\'s honor.\n\nHumane Qualities Required:\nRamanujan\'s story illustrates that contributing to society requires not only intellectual brilliance but also sacrifice, emotional vulnerability, and the courage to prioritize a larger purpose even at personal cost. His ability to maintain cultural and familial identity while navigating racism and professional challenges in England demonstrates resilience. The film ultimately argues that scientific progress is inseparable from the human stories that surround it.',
        examinerTips: 'Award marks for: (1) discussion of Ramanujan as scientist with specific examples, (2) discussion as husband/son with specific examples, (3) identification of humane qualities (sacrifice, resilience, courage, humility, faith), (4) integration of both roles in conclusion. Full marks require textual evidence and analytical depth.'
      }
    ]
  }
];

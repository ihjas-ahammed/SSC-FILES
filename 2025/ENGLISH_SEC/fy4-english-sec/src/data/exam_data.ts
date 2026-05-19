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
  'module-1-scientific-attitude': ['mod1-model-qp'],
  'module-2-scientific-language': ['mod2-model-qp'],
  'module-3-scientific-imagination': ['mod3-model-qp'],
  'module-4-scientific-presentations': ['mod4-model-qp'],
};

// Common section descriptions used in headings
const SECTION_HEADER = 'IV Semester B.Sc. (CUFYUGP) Degree Examinations · Contemporary Language Skills for Sciences (ENG4FS111(2)). Max Time: 1.5 Hours | Max Marks: 50.';

export const EXAM_MODULES: UnitExam[] = [
  // ──────────────────────────────────────────────────────────────────────────
  // MODULE I — Scientific Attitude (Units 1-4)
  // ──────────────────────────────────────────────────────────────────────────
  {
    unitId: 'mod1-model-qp',
    title: 'Module I Model Paper — Scientific Attitude',
    description: `${SECTION_HEADER} Covers Units 1–4: Scientists & Imagination, Man Who Knew Infinity, What's Expected of Us?, Singularity.`,
    questions: [
      // ─── Section A — 10 × 2 marks (ceiling 16) ───
      {
        id: 'm1-secA-q1',
        section: 'A',
        question: 'Give any four activities suggested in "Scientists and the Power of Imagination" to nurture imagination.',
        marks: 2,
        wordLimit: 'Max 4 sentences',
        modelAnswer: 'The documentary suggests: (1) Walking — allows the mind to wander and stimulates daydreaming; (2) Reading — fosters mental flexibility and exposes one to new perspectives; (3) Meditation — quiets the mind to access the subconscious where innovative ideas reside; and (4) Puzzle solving — forces thinking outside the box and finding creative solutions.',
        examinerTips: 'Name four of the five activities (walking, reading, writing, meditation, puzzle solving). A short reason for each adds value but is not required.'
      },
      {
        id: 'm1-secA-q2',
        section: 'A',
        question: 'Explain the significance of the opening line of the poem "Singularity."',
        marks: 2,
        wordLimit: 'Max 4 sentences',
        modelAnswer: 'The opening line — "Do you sometimes want to wake up to the singularity we once were?" — is a rhetorical question alluding to the cosmological singularity (the pre-Big-Bang point of unity). The phrase "wake up" suggests humanity is in a deep slumber, unaware of its shared origin. The line establishes the poem\'s central theme: a longing for cosmic oneness in a world fractured by separation, poverty and loneliness.',
        examinerTips: 'Mention the rhetorical question, the Hawking allusion, and the theme of longing or unity.'
      },
      {
        id: 'm1-secA-q3',
        section: 'A',
        question: 'Analyse the relevance of the point of view employed in Chiang\'s story. Is it a common point of view employed by writers?',
        marks: 2,
        wordLimit: 'Max 4 sentences',
        modelAnswer: 'Ted Chiang uses a second-person point of view ("you") combined with a voice transmitted backward in time. This unusual perspective directly implicates the reader, creating urgency around the warning about free will. It is NOT a common literary POV — it appears mainly in choose-your-own-adventure fiction and experimental narratives, which is why its use here is striking.',
        examinerTips: 'Identify second-person POV + the future-to-past transmission + the rarity of the form.'
      },
      {
        id: 'm1-secA-q4',
        section: 'A',
        question: 'What is the Hardy–Ramanujan number, and why is it significant?',
        marks: 2,
        wordLimit: 'Max 3 sentences',
        modelAnswer: '1729 is known as the Hardy–Ramanujan number. It is the smallest positive integer expressible as the sum of two cubes in two different ways: 1³ + 12³ = 9³ + 10³ = 1729. The number became famous after Ramanujan\'s spontaneous remark to Hardy during a hospital visit in Cambridge.',
        examinerTips: 'State both decompositions explicitly to secure full marks.'
      },
      {
        id: 'm1-secA-q5',
        section: 'A',
        question: 'What medical condition is induced in some users of the Predictor in Chiang\'s story?',
        marks: 2,
        wordLimit: 'Max 3 sentences',
        modelAnswer: 'The Predictor induces "akinetic mutism," a waking coma. Affected patients can track motion with their eyes but lose all motivation — they will not even feed themselves. The condition follows from the realisation that free will is an illusion.',
        examinerTips: 'Name the condition correctly: akinetic mutism (not depression, not amnesia).'
      },
      {
        id: 'm1-secA-q6',
        section: 'A',
        question: 'How does the documentary view the role of AI in relation to human imagination?',
        marks: 2,
        wordLimit: 'Max 3 sentences',
        modelAnswer: 'The documentary frames AI not as a replacement for human imagination but as a tool to AUGMENT it. AI is envisioned to extend our imaginative capabilities into realms previously out of reach. Its efficacy, however, depends on the user\'s perception and constructive application.',
        examinerTips: 'Use the word "augment" — it is the documentary\'s own term.'
      },
      {
        id: 'm1-secA-q7',
        section: 'A',
        question: 'Identify the Walt Whitman line that Marie Howe incorporates into "Singularity" and its significance.',
        marks: 2,
        wordLimit: 'Max 3 sentences',
        modelAnswer: 'Howe incorporates Whitman\'s line "For every atom belonging to me as good belongs to you" from "Song of Myself." The allusion strengthens the poem\'s theme of cosmic and atomic unity, suggesting that the matter of one body is indistinguishable from the matter of every other body in the universe.',
        examinerTips: 'Quote the line correctly; name the source poem (Song of Myself).'
      },
      {
        id: 'm1-secA-q8',
        section: 'A',
        question: 'How does Janaki contribute to Ramanujan\'s journey as depicted in the biopic?',
        marks: 2,
        wordLimit: 'Max 4 sentences',
        modelAnswer: 'Janaki, Ramanujan\'s wife, supports his academic ambition with quiet courage despite social pressure and her mother-in-law\'s opposition. She accepts the separation when he leaves for Cambridge, anticipating his promise to bring her abroad. Her letters — though intercepted by his mother — represent the emotional anchor he needs. Janaki shows that genius depends on familial support, not isolation.',
        examinerTips: 'Mention: separation, intercepted letters, social pressure, and emotional sustenance.'
      },
      {
        id: 'm1-secA-q9',
        section: 'A',
        question: 'List two great inventions the documentary cites as having begun as "sparks of imagination."',
        marks: 2,
        wordLimit: 'Max 3 sentences',
        modelAnswer: 'The documentary cites the telephone, the airplane and the Internet as inventions that began as "figments of someone\'s imagination" before becoming reality. Each was first an imagined possibility — long before it was a working machine — illustrating that the human mind visualises the non-existent and then materialises it.',
        examinerTips: 'Name any two of the three (telephone / airplane / Internet).'
      },
      {
        id: 'm1-secA-q10',
        section: 'A',
        question: 'What is the central message of the documentary\'s conclusion regarding imagination?',
        marks: 2,
        wordLimit: 'Max 4 sentences',
        modelAnswer: 'The conclusion frames imagination as the silent partner of reason — the spark that lights the torch of innovation. It must be nurtured in children AND adults through walking, reading, writing, meditation and puzzle solving. As we push the boundaries of the known, the future of science will rest on our ability to imagine and shape new possibilities.',
        examinerTips: 'Capture both the "silent partner" framing and the call to nurture imagination across ages.'
      },

      // ─── Section B — 5 × 6 marks (ceiling 24) ───
      {
        id: 'm1-secB-q11',
        section: 'B',
        question: 'Elucidate how imagination shapes reality, with reference to the documentary.',
        marks: 6,
        wordLimit: 'Around 150 words',
        modelAnswer: 'According to the documentary, imagination has a tangible influence on reality far beyond ideation. Every great human invention — the telephone, the airplane, the Internet — began as a spark of imagination before becoming a physical entity. Beyond technology, imagination shapes our perception of time and space: by imagining ourselves in alternate situations, we create realities that change how we interact with the actual world. Scientists rely on imagination to visualise concepts they cannot observe directly, such as atomic structure or the curvature of spacetime, allowing them to formulate new theories and predictions. Imagination also drives problem-solving by generating innovative paths that pure logic cannot anticipate. The documentary concludes that imagination "is not just a tool for scientific discovery" but "an integral part of our reality, shaping our perception, influencing our actions, and driving our progress."',
        examinerTips: 'Hit four points: (1) inventions, (2) perception of time/space, (3) scientific visualisation, (4) problem-solving. End with the documentary\'s thesis statement.'
      },
      {
        id: 'm1-secB-q12',
        section: 'B',
        question: 'Discuss how Ramanujan\'s collaboration with G.H. Hardy reveals the humane qualities required to contribute to science.',
        marks: 6,
        wordLimit: 'Around 150 words',
        modelAnswer: 'Ramanujan\'s collaboration with Hardy illustrates that scientific genius requires more than intellectual brilliance — it requires humility, faith, persistence and openness to critique. Ramanujan arrived at Cambridge with thousands of intuitive theorems, many derived without formal proofs. Hardy, a rigorous formalist, insisted on proofs to integrate Ramanujan\'s work into the established mathematical canon. Their tension dramatises two paradigms: Ramanujan\'s intuitive, almost spiritual approach ("An equation for me has no meaning unless it expresses a thought of God") versus Hardy\'s strict empiricism. Crucially, neither dominates: Ramanujan accepts Hardy\'s method without losing his originality, and Hardy yields to Ramanujan\'s vision. Their friendship — born across cultural, religious and class divides — produced foundational work in number theory, modular forms, and the famous 1729 anecdote. The biopic argues that mutual respect, openness, and patience are humane qualities indispensable to scientific progress.',
        examinerTips: 'Pair Ramanujan\'s intuition with Hardy\'s rigour; cite one quote and one collaboration outcome.'
      },
      {
        id: 'm1-secB-q13',
        section: 'B',
        question: 'What does the Predictor in Ted Chiang\'s story symbolise?',
        marks: 6,
        wordLimit: 'Around 150 words',
        modelAnswer: 'The Predictor is a multivalent symbol. (1) Determinism: it physically demonstrates the absence of free will — the green LED flashes one second before the user presses the button, and no strategy of resistance succeeds. (2) Smartphone and digital control: the small, addictive device anticipates the user, evoking how modern technology pre-empts human behaviour before the user is conscious of choosing. (3) Social conditioning: the title "What\'s Expected of Us?" extends the device into a metaphor for social roles that pre-script our "decisions." (4) A human face: the green LED is described as resembling a smile, pointing to how humans bond in response to social cues without questioning their authenticity. (5) Self-deception: the narrator\'s closing plea — "Pretend that you have free will" — turns the Predictor into a symbol of the civilisational lie required to avoid psychological collapse.',
        examinerTips: 'Provide 3-5 symbolic readings, each anchored in a detail from the story.'
      },
      {
        id: 'm1-secB-q14',
        section: 'B',
        question: 'Analyse the central theme of Marie Howe\'s "Singularity" — longing for cosmic unity.',
        marks: 6,
        wordLimit: 'Around 150 words',
        modelAnswer: 'Marie Howe\'s "Singularity" frames the universe\'s pre-Big-Bang state as an emotional homeland to which we secretly long to return. Drawing on Stephen Hawking\'s cosmological singularity — the infinitely dense point in which all matter was once one — Howe poses a rhetorical question: "Do you sometimes want to wake up to the singularity we once were?" The poem\'s longing is for a time before "I" and "you," before poverty, illness, and ecological harm, before the divisions that define modern life. Howe weaves Whitman\'s line — "For every atom belonging to me as good belongs to you" — into the poem to suggest that this oneness is not lost but obscured. The free-verse form mirrors the dissolution of borders. Ultimately the poem is both an elegy for human disconnection and a meditation on the cosmological fact that we are, atom by atom, made of each other.',
        examinerTips: 'Mention Hawking, the Whitman allusion, the rhetorical opening, and the elegiac tone.'
      },
      {
        id: 'm1-secB-q15',
        section: 'B',
        question: 'How does the documentary envision the future of imagination in science? Discuss with reference to AI, VR, interdisciplinary research and education.',
        marks: 6,
        wordLimit: 'Around 150 words',
        modelAnswer: 'The documentary projects a bright, transformative future for imagination in science. (1) Artificial intelligence will not replace human imagination but augment it — enabling exploration of realms previously out of reach. (2) Virtual and augmented reality will offer immersive experiences that allow scientists to visualise complex concepts in unprecedented ways. (3) Interdisciplinary research — physicists working with biologists, chemists with artists — will produce cross-pollination of ideas, sparking innovative solutions to complex scientific problems. (4) Education will play a pivotal role in nurturing the scientists of tomorrow by cultivating environments that encourage curiosity, creativity and imagination. Together, these forces will redefine what is possible. The documentary closes with the assertion that the boundaries of the possible "are constantly being redefined" and that imagination will remain the pivotal driver of new discoveries.',
        examinerTips: 'Address all four: AI, VR, interdisciplinary work, education. Mention "augment" explicitly.'
      },

      // ─── Section C — 2 × 10 marks (answer one) ───
      {
        id: 'm1-secC-q16',
        section: 'C',
        question: 'Compare Ramanujan\'s role as a scientist with that of a husband/son to illustrate the humane qualities required to contribute to one\'s society despite challenges.',
        marks: 10,
        wordLimit: 'Around 250 words',
        modelAnswer: 'Srinivasa Ramanujan\'s life, as depicted in "The Man Who Knew Infinity," shows how scientific contribution and humane character are inseparable.\n\nAs a scientist, Ramanujan exhibited exceptional self-belief and originality. Born into poverty in Erode and denied employment for lack of formal qualifications, he refused to let social barriers define him: "What you might see now is ordinary glass, but I promise you will soon remain to see a diamond." His collaboration with G.H. Hardy at Cambridge produced foundational work in number theory and modular forms. He worked through illness — completing his paper on "mock modular forms" weeks before his death at 32. Crucial qualities: intellectual courage, humility (in accepting Hardy\'s insistence on proofs), and an almost devotional dedication — "An equation for me has no meaning unless it expresses a thought of God."\n\nAs a husband, Ramanujan promised Janaki he would bring her to England — a promise his health did not permit him to keep. Janaki\'s letters were intercepted by his mother, adding a layer of tragedy to his isolation. As a son, he remained tied to his cultural identity; his mother celebrated his publication in the London Mathematical Society with offerings.\n\nHumane qualities revealed: persistence, sacrifice, fidelity to one\'s vocation, emotional vulnerability, and the courage to navigate racism and exile while honouring family. Ramanujan\'s story argues that scientific genius is not solitary — it is sustained by the quiet labour and love of others.',
        examinerTips: 'Award marks for (1) scientist with specific examples, (2) husband/son with specific examples, (3) named humane qualities, (4) integrated conclusion.'
      },
      {
        id: 'm1-secC-q17',
        section: 'C',
        question: '"Imagination is the silent partner of reason." Discuss this claim with reference to the documentary "Scientists and the Power of Imagination" AND Marie Howe\'s "Singularity."',
        marks: 10,
        wordLimit: 'Around 250 words',
        modelAnswer: 'The documentary "Scientists and the Power of Imagination" and Marie Howe\'s "Singularity" both argue, in different forms, that imagination is the silent partner of reason — the unseen force that makes new understanding possible.\n\nThe documentary frames imagination as the catalyst of all scientific discovery. William Harvey envisioned blood circulation before it could be observed; Isaac Newton asked why the apple fell DOWN rather than sideways; Einstein imagined riding a beam of light. None of these breakthroughs began with data — they began with a leap of vision. The documentary insists that imagination "serves as the bridge that connects the known to the unknown," and that it must be nurtured by walking, reading, writing, meditation and puzzle-solving. The future of science depends on protecting this capacity in the next generation.\n\nMarie Howe\'s "Singularity" complements this argument from the side of poetry. Howe imagines the cosmological singularity — Hawking\'s pre-Big-Bang point of unity — as an emotional homeland. By weaving Whitman\'s line, "For every atom belonging to me as good belongs to you," she imagines human bodies as continuous with the cosmos. Here imagination does the work of metaphysics: it lets us SEE what physics alone can only describe.\n\nTogether, the texts argue that reason and imagination are not opposed faculties but partners. Reason verifies what imagination first dares to envision. To dismiss imagination as decorative — in science or in society — is to cut off the very source from which discoveries, inventions, and meaningful lives emerge.',
        examinerTips: 'Quote at least one phrase from each text. End with a synthesis sentence linking the two.'
      },
    ]
  },

  // ──────────────────────────────────────────────────────────────────────────
  // MODULE II — Scientific Language (Units 5-8)
  // ──────────────────────────────────────────────────────────────────────────
  {
    unitId: 'mod2-model-qp',
    title: 'Module II Model Paper — Scientific Language',
    description: `${SECTION_HEADER} Covers Units 5–8: Worldwide Effort, Science Vocabulary, Scientific Reasoning (Hume), Memory (Linden).`,
    questions: [
      // Section A
      {
        id: 'm2-secA-q1',
        section: 'A',
        question: 'What is the global campaign launched by Jeremy Farrar, and what is its purpose?',
        marks: 2,
        wordLimit: 'Max 3 sentences',
        modelAnswer: 'Jeremy Farrar launched the campaign "Together Science Can." Its purpose is to encourage global scientific collaboration, especially in addressing health and pandemic challenges that no single nation can solve alone.',
        examinerTips: 'Name the campaign exactly. Don\'t confuse it with a podcast title.'
      },
      {
        id: 'm2-secA-q2',
        section: 'A',
        question: 'Explain the "explore-before-explain" approach in science vocabulary instruction.',
        marks: 2,
        wordLimit: 'Max 3 sentences',
        modelAnswer: 'The "explore-before-explain" approach exposes students to vocabulary in context first — through demonstrations, experiments and stories — and only afterwards provides formal definitions. This builds conceptual grounding before the abstract label is introduced, making the term memorable and meaningful.',
        examinerTips: 'Use the phrase "explore-before-explain" verbatim.'
      },
      {
        id: 'm2-secA-q3',
        section: 'A',
        question: 'List three elements that contribute to the success and appeal of a science podcast.',
        marks: 2,
        wordLimit: 'Max 3 sentences',
        modelAnswer: 'Three elements are: (1) accessible, jargon-free language that reaches a broad audience; (2) engaging storytelling through narratives, anecdotes and expert interviews; (3) high technical quality — clean audio, balanced sound and smooth editing — which sustains listener attention.',
        examinerTips: 'Any three of: language clarity, storytelling, technical quality, promotion, audience targeting.'
      },
      {
        id: 'm2-secA-q4',
        section: 'A',
        question: 'What is the difference between field memory and observer memory?',
        marks: 2,
        wordLimit: 'Max 3 sentences',
        modelAnswer: 'Field memory is recall of an event from one\'s own point of view — as if seeing through one\'s own eyes — and is more common for recent and emotional events. Observer memory is recall from an outside perspective, in which one sees oneself in the scene, and is more common for childhood and factual recollections.',
        examinerTips: 'Define both terms and note when each commonly appears.'
      },
      {
        id: 'm2-secA-q5',
        section: 'A',
        question: 'State David Hume\'s Problem of Induction in one or two sentences.',
        marks: 2,
        wordLimit: 'Max 3 sentences',
        modelAnswer: 'Hume\'s Problem of Induction is that we justify inductive reasoning by saying it has worked in the past — but that justification is itself an inductive argument, making the reasoning circular. No finite number of confirming observations can guarantee a future outcome, while a single counterexample can refute a general rule.',
        examinerTips: 'Mention the circularity AND the role of a counterexample.'
      },
      {
        id: 'm2-secA-q6',
        section: 'A',
        question: 'Why does David Linden call the failures of autobiographical memory "features, not bugs"?',
        marks: 2,
        wordLimit: 'Max 4 sentences',
        modelAnswer: 'Linden argues that the so-called failures of memory — distortion, blending, fading — exist because memory is not designed to be a static record. It is designed to integrate new experience with old so that the past serves future decisions. A generic, flexible memory compiled from many experiences is more useful than 50 isolated accurate recordings.',
        examinerTips: 'Focus on usefulness for future decisions, not on emotional vividness.'
      },
      {
        id: 'm2-secA-q7',
        section: 'A',
        question: 'Name two effective strategies for teaching scientific vocabulary, as discussed in the unit.',
        marks: 2,
        wordLimit: 'Max 3 sentences',
        modelAnswer: 'Two effective strategies are: (1) the "explore-before-explain" approach — exposing students to terms in context before defining them; and (2) using multiple modalities (visuals, narratives, hands-on activities) so that the term is anchored to a concept rather than memorised in isolation.',
        examinerTips: 'Other valid strategies: word walls, concept maps, frequent retrieval practice.'
      },
      {
        id: 'm2-secA-q8',
        section: 'A',
        question: 'How does the "black swan" example illustrate Hume\'s critique of induction?',
        marks: 2,
        wordLimit: 'Max 3 sentences',
        modelAnswer: 'For centuries, Europeans observed only white swans and concluded "all swans are white" — a textbook inductive generalisation. The discovery of black swans in Australia falsified that conclusion overnight. The example shows that any number of confirming observations is logically insufficient: one contrary instance refutes the universal rule.',
        examinerTips: 'Tie the example back to Hume\'s circular reasoning.'
      },
      {
        id: 'm2-secA-q9',
        section: 'A',
        question: 'List two ways autobiographical memory can fail, according to Linden.',
        marks: 2,
        wordLimit: 'Max 3 sentences',
        modelAnswer: 'Two failures are: (1) distortion — memories are reshaped each time they are retrieved, blending in details from later experience; and (2) source confusion — we may remember a fact correctly but misattribute where, when, or from whom we learned it. Linden frames both as adaptive features that allow memory to remain useful.',
        examinerTips: 'Other valid answers: blending, fading, confabulation, false memory.'
      },
      {
        id: 'm2-secA-q10',
        section: 'A',
        question: 'Why is accessible language critical to the success of a science podcast?',
        marks: 2,
        wordLimit: 'Max 3 sentences',
        modelAnswer: 'Accessible language ensures the podcast reaches a broad audience beyond specialists. Jargon-heavy delivery alienates listeners and limits the social impact of scientific work. Clear, plain language paired with vivid examples makes complex ideas legible without sacrificing accuracy.',
        examinerTips: 'Mention reach AND retention.'
      },

      // Section B
      {
        id: 'm2-secB-q11',
        section: 'B',
        question: 'Analyse David Hume\'s critique of inductive reasoning.',
        marks: 6,
        wordLimit: 'Around 150 words',
        modelAnswer: 'David Hume (1711–1776), the Scottish philosopher, articulated what is now known as the Problem of Induction. Science relies on induction: from many specific observations, scientists draw general conclusions. For example, observing that the sun has risen every day, we infer it will rise tomorrow. Hume\'s critique has three steps: (1) we trust induction because it has worked in the past; (2) the claim that induction is reliable BECAUSE it has worked is itself an inductive argument — which is circular; (3) therefore, there is no purely rational justification for inductive reasoning. No matter how many times a pattern repeats, one counterexample — like the discovery of black swans after centuries of white-swan observations — refutes any inductive generalisation. Hume\'s critique reveals a deep philosophical vulnerability: science is pragmatically successful but lacks an absolute rational foundation for its core reasoning process.',
        examinerTips: 'Explain the three steps clearly; cite the black swan example; close with practical implication.'
      },
      {
        id: 'm2-secB-q12',
        section: 'B',
        question: 'Explain Linden\'s argument that memory is a tool for future decision-making, not a record of the past.',
        marks: 6,
        wordLimit: 'Around 150 words',
        modelAnswer: 'David Linden argues that autobiographical memory evolved not to preserve facts but to support useful decisions. Each time a memory is retrieved, it is reconstructed — incorporating new context and discarding details that have lost relevance. This flexibility produces what Linden calls "generic memories": compressed summaries of many similar events. A generic memory of "what happens at restaurants" is more useful for ordering dinner tomorrow than fifty perfectly preserved recordings of past meals. Field memory (first-person) and observer memory (third-person) emerge as the brain repurposes the same event for different cognitive tasks. The so-called "failures" — distortion, blending, fading, confabulation — are features of this design. The trade-off, Linden concedes, is that human memory is unreliable as legal testimony. But the design serves a future-facing brain: it equips us to anticipate, not to archive.',
        examinerTips: 'Emphasise the future-oriented function; pair field/observer memory with the generic-memory concept.'
      },
      {
        id: 'm2-secB-q13',
        section: 'B',
        question: 'Discuss four elements that make a science podcast successful and reach a broad audience.',
        marks: 6,
        wordLimit: 'Around 150 words',
        modelAnswer: 'A successful science podcast relies on several reinforcing elements. (1) Accessible language: jargon is replaced by plain speech and concrete analogies so that non-specialists can follow without prior training. (2) Engaging storytelling: narratives, anecdotes and expert interviews give abstract data emotional shape — the listener cares because they meet a person, not a paper. (3) Technical quality: clean audio recording, balanced sound levels, smooth editing and clear pacing keep the listener\'s ear. A muffled or noisy episode loses an audience regardless of content. (4) Strategic promotion: social-media excerpts, partnerships with academic networks, and visible release schedules build a loyal listener base. Together these elements explain how a campaign like Jeremy Farrar\'s "Together Science Can" can reach audiences that scientific journals never touch. The podcast format democratises science by treating the listener as a person, not a peer reviewer.',
        examinerTips: 'Use the four elements as labelled paragraphs to make them visible to the examiner.'
      },
      {
        id: 'm2-secB-q14',
        section: 'B',
        question: 'Compare the traditional "front-loaded" approach to vocabulary teaching with the "explore-before-explain" approach.',
        marks: 6,
        wordLimit: 'Around 150 words',
        modelAnswer: 'The traditional approach front-loads vocabulary: definitions are introduced at the start of a unit, followed by reading and activities that exemplify the new terms. Students often memorise meanings without anchors, leading to brittle understanding and rapid forgetting. The "explore-before-explain" approach reverses this order. Students are first exposed to phenomena, demonstrations, or texts in which the target terms appear in natural context. They are asked to observe, question and discuss before any formal definition is offered. Only after meaningful engagement does the teacher crystallise the term — by which point the students already have a mental "hook" for the new label. The comparison reveals a deeper pedagogical principle: vocabulary is not a separable skill but the language of thought itself. Words attached to lived experience are durable; words memorised in isolation evaporate. Explore-before-explain treats vocabulary as the outcome of understanding, not the prerequisite.',
        examinerTips: 'Contrast in structure: front-loaded definition first vs. explore-first definition last.'
      },
      {
        id: 'm2-secB-q15',
        section: 'B',
        question: 'Why does Hume\'s argument matter for the practice of science today?',
        marks: 6,
        wordLimit: 'Around 150 words',
        modelAnswer: 'Hume\'s Problem of Induction continues to matter because it reframes how scientists should hold their conclusions: provisionally, not absolutely. Modern science has absorbed this lesson through Karl Popper\'s principle of falsifiability — a theory is scientific only if it can be refuted by evidence. Practically, this changes laboratory culture: experiments are designed to test predictions that COULD fail, peer review searches for counterexamples, and replication studies treat past success as no guarantee of present truth. Hume\'s argument also disciplines public communication: a single black-swan event (a failed vaccine batch, a contradictory dataset) can rationally overturn an apparent consensus. Yet Hume does not invalidate science — he clarifies its character. Inductive practice succeeds pragmatically; it is humanity\'s most successful method for navigating an uncertain world. What Hume removes is the illusion of absolute certainty, replacing it with the more honest, more powerful idea of well-tested provisional knowledge.',
        examinerTips: 'Link Hume to Popper\'s falsifiability; offer a concrete contemporary implication.'
      },

      // Section C
      {
        id: 'm2-secC-q16',
        section: 'C',
        question: '"Words decide whether science reaches a society." Discuss this claim with reference to the texts on science podcasts and vocabulary instruction.',
        marks: 10,
        wordLimit: 'Around 250 words',
        modelAnswer: 'The claim that "words decide whether science reaches a society" is supported by both the unit on science podcasts and the unit on science vocabulary instruction — though the texts approach the problem from different ends of the listener\'s journey.\n\nThe podcast unit treats words as a public bridge. Jeremy Farrar\'s "Together Science Can" campaign succeeds because its language is accessible: it replaces jargon with concrete analogy and pairs facts with story. Without this linguistic care, even Nobel-quality research dies in archives. The unit identifies four reinforcing elements — accessible language, engaging storytelling, high audio production, and strategic promotion — but the first is foundational. A scientifically perfect podcast in opaque language is unheard; an imperfect podcast in clear language is shared.\n\nThe vocabulary unit treats words as a private foundation. In classrooms, the "explore-before-explain" approach inverts the traditional sequence: students experience phenomena before they meet labels. The lesson is that vocabulary is not decoration on understanding — it IS understanding. A student who memorises "photosynthesis" without a sensory anchor has nothing; a student who has watched a leaf turn toward light, and then learned the word, owns it.\n\nTogether, the two texts argue a single thesis: scientific knowledge is socially real only when it can be said. Words decide reach. Inside the classroom, words decide whether a future scientist can think. Outside the laboratory, words decide whether the public can act on what scientists know. A society that neglects scientific language — at either end — produces neither scientists nor an informed citizenry.',
        examinerTips: 'Award marks for: linking BOTH texts, defining the role of words at each scale, and a unified conclusion.'
      },
      {
        id: 'm2-secC-q17',
        section: 'C',
        question: 'Examine David Hume\'s challenge to inductive reasoning and explain why science continues to work in practice despite this critique.',
        marks: 10,
        wordLimit: 'Around 250 words',
        modelAnswer: 'David Hume\'s challenge to induction is both devastating and clarifying. As a Scottish philosopher of the 18th century, Hume noticed that science depends fundamentally on generalising from observed patterns: the sun has risen every day, so it will rise tomorrow. But the justification for this leap — that induction has worked in the past — is itself an inductive claim. The argument is circular, and no purely rational guarantee can rescue it. A single counterexample, like the discovery of black swans after centuries of white-swan observations, can falsify any universal rule.\n\nDespite this, science continues to succeed in practice for two reasons. (1) Falsifiability: under Karl Popper\'s reframing, scientific theories are valued not because they CAN be proven but because they can be tested and potentially refuted. The strength of a theory is the boldness of the predictions it risks. (2) Pragmatic success: while no inductive claim is logically certain, well-tested claims have repeatedly enabled humans to predict eclipses, design vaccines, and land machines on Mars. Pragmatism — what works, works — is humanity\'s most reliable method for navigating uncertainty.\n\nHume\'s critique therefore does not destroy science; it disciplines it. The scientific attitude requires holding conclusions provisionally, designing experiments that could fail, and welcoming counterexamples instead of resisting them. The cost is the illusion of absolute certainty; the gain is intellectual honesty. The black swan, far from being a threat, is the figure that keeps scientific reasoning alive — always ready to revise, always alert to the possibility of being wrong.',
        examinerTips: 'Required: three-step problem + black swan + Popper + practical example.'
      },
    ]
  },

  // ──────────────────────────────────────────────────────────────────────────
  // MODULE III — Scientific Imagination (Units 9-12)
  // ──────────────────────────────────────────────────────────────────────────
  {
    unitId: 'mod3-model-qp',
    title: 'Module III Model Paper — Scientific Imagination',
    description: `${SECTION_HEADER} Covers Units 9–12: Bacon, Steven Shapin, Aphantasia, Galactic Portraits.`,
    questions: [
      // Section A
      {
        id: 'm3-secA-q1',
        section: 'A',
        question: 'What is the distinctiveness of the structure of Bacon\'s essay?',
        marks: 2,
        wordLimit: 'Max 3 sentences',
        modelAnswer: 'Bacon\'s essay "Of the Interpretation of Nature and the Empire of Man" is distinctively structured as a series of numbered aphorisms — short, compact, self-contained philosophical statements. Each aphorism stands as a complete thought, allowing readers to reference specific ideas directly. The form reflects Bacon\'s empirical approach: ordered, systematic, and universally applicable.',
        examinerTips: 'Key word: "aphorism." Emphasise the numbered, self-contained structure.'
      },
      {
        id: 'm3-secA-q2',
        section: 'A',
        question: 'What does Steven Shapin mean by "bet on the jockey, not the horse"?',
        marks: 2,
        wordLimit: 'Max 3 sentences',
        modelAnswer: 'Shapin uses the metaphor to describe how venture capitalists make investment decisions. They trust the entrepreneur\'s character, vision and commitment more than the underlying technology — because technologies and markets change, but a determined entrepreneur is more durable. The line captures how science is also an economy of trust.',
        examinerTips: 'Don\'t take it literally — it is a metaphor about VC investment philosophy.'
      },
      {
        id: 'm3-secA-q3',
        section: 'A',
        question: 'Define aphantasia and identify the person who coined the term.',
        marks: 2,
        wordLimit: 'Max 3 sentences',
        modelAnswer: 'Aphantasia is the inability to voluntarily form mental images — the absence of the "mind\'s eye." Adam Zeman, a British neurologist, coined the term in 2015 to describe this condition, which affects approximately 2% of the population.',
        examinerTips: 'Give the term, the year (2015), the coiner (Adam Zeman), and the prevalence (~2%).'
      },
      {
        id: 'm3-secA-q4',
        section: 'A',
        question: 'What is ekphrasis?',
        marks: 2,
        wordLimit: 'Max 3 sentences',
        modelAnswer: 'Ekphrasis is the literary description of, or response to, a visual work of art. It uses words to recreate or interpret an image so vividly that the artwork lives in the reader\'s imagination. In "Galactic Portraits," poems respond to Hubble Space Telescope images of distant galaxies.',
        examinerTips: 'A precise one-line definition + an example earns full marks.'
      },
      {
        id: 'm3-secA-q5',
        section: 'A',
        question: 'What was the ancient Greek philosophical perspective on seeking knowledge, as explained by Shapin?',
        marks: 2,
        wordLimit: 'Max 3 sentences',
        modelAnswer: 'According to Shapin, ancient Greek philosophy debated two paths to knowledge: the "active life," which held that knowledge and virtue arose from engagement with society, and the "contemplative life," which valued solitary reflection and pure reason. Shapin argues that these ancient sensibilities persist in current debates about individualism versus teamwork in science.',
        examinerTips: 'Name both lives — active and contemplative — and link to the contemporary issue.'
      },
      {
        id: 'm3-secA-q6',
        section: 'A',
        question: 'Why does Bacon use the aphoristic form rather than a continuous essay?',
        marks: 2,
        wordLimit: 'Max 3 sentences',
        modelAnswer: 'Bacon chooses the aphoristic form because it mirrors his empirical method: compact, ordered, citable, and resistant to rhetorical inflation. Each aphorism makes a specific claim that can be examined on its own, just as an experimental observation can. The form also makes ideas memorable and easy to reference.',
        examinerTips: 'Tie form to method (empiricism).'
      },
      {
        id: 'm3-secA-q7',
        section: 'A',
        question: 'How does Zarins open his article on aphantasia?',
        marks: 2,
        wordLimit: 'Max 3 sentences',
        modelAnswer: 'Zarins opens with a personal anecdote from his childhood — recalling his attempt to reach Narnia by visiting a stone circle. This intimate, relatable image immediately grounds an abstract neurological condition in a vivid human story and draws the reader in before any technical content begins.',
        examinerTips: 'Note: anecdote + cultural allusion (Narnia) + warm tone.'
      },
      {
        id: 'm3-secA-q8',
        section: 'A',
        question: 'What approximate prevalence does aphantasia have in the population?',
        marks: 2,
        wordLimit: 'Max 2 sentences',
        modelAnswer: 'Aphantasia is estimated to affect approximately 2% of the population. The figure was established in early research by Adam Zeman\'s team following the 2015 coining of the term.',
        examinerTips: 'State both the figure (2%) and the source (Zeman\'s research).'
      },
      {
        id: 'm3-secA-q9',
        section: 'A',
        question: 'How do Hubble images function as "portraits" in "Galactic Portraits"?',
        marks: 2,
        wordLimit: 'Max 3 sentences',
        modelAnswer: 'The Hubble images are treated as portraits of cosmic subjects — galaxies and nebulae become sitters posed for the telescope\'s gaze. The poems read each image as a face, a body, a presence with its own history. The frame transforms scientific imagery into a human encounter, blending astronomy with intimate observation.',
        examinerTips: 'Mention the metaphor (galaxy = sitter) and the effect (intimacy).'
      },
      {
        id: 'm3-secA-q10',
        section: 'A',
        question: 'What term did Adam Zeman coin, and in what year?',
        marks: 2,
        wordLimit: 'Max 2 sentences',
        modelAnswer: 'Adam Zeman coined the term "aphantasia" in 2015. The term names the absence of voluntary mental imagery — the inability to "see" with the mind\'s eye.',
        examinerTips: 'Year (2015), term (aphantasia), brief definition.'
      },

      // Section B
      {
        id: 'm3-secB-q11',
        section: 'B',
        question: 'Consider the structure of the article on aphantasia to bring out the characteristics of presenting a scientific concept.',
        marks: 6,
        wordLimit: 'Around 150 words',
        modelAnswer: 'Zarins\' article demonstrates several characteristics of effective scientific writing for a general audience. (1) Personal anecdote as opening: he recalls his childhood attempt to reach Narnia through a stone circle, grounding an abstract neurological condition in a relatable human moment. (2) Clear definition with context: the term "aphantasia" is introduced with the year of coinage (2015), the coiner (Adam Zeman), and prevalence (~2%) — establishing credibility while remaining accessible. (3) Cultural anchoring: literary references like The Chronicles of Narnia and Lord of the Rings help readers grasp how the condition shapes reading experience. (4) Quoted lived testimony: a blogger\'s first-person account makes the condition tangible. (5) Practical application: the article ends with concrete tips for writers, showing that effective science communication leads to action. (6) Broader implications: by framing aphantasia within neurodiversity and inclusion, the article situates a single scientific concept inside a wider ethical conversation.',
        examinerTips: 'Identify 4-6 structural features with both form (what) and function (effect).'
      },
      {
        id: 'm3-secB-q12',
        section: 'B',
        question: 'Analyse the use of aphorism as a philosophical form in Bacon\'s essay.',
        marks: 6,
        wordLimit: 'Around 150 words',
        modelAnswer: 'Bacon\'s use of aphorism is not stylistic ornament — it is a philosophical method. An aphorism is a short, compact, self-contained statement that captures a single idea in its most condensed form. By choosing this form, Bacon mirrors his empirical approach in three ways. First, the discrete structure resembles an experimental observation: each aphorism is testable on its own, just as a data point stands independently. Second, the numbered ordering invites cross-reference and accumulation — readers can build a system from atomic claims, exactly as scientists accumulate knowledge through repeated, citable experiments. Third, the form resists rhetorical inflation: a continuous essay can hide weak reasoning behind eloquence, but an aphorism either stands or falls on its own terms. The choice of form thereby enacts the empirical claim it contains. Bacon\'s essay does not just argue for systematic, evidence-based reasoning; it performs that argument at every level of its design.',
        examinerTips: 'Connect form (aphorism) to content (empiricism) at three distinct points.'
      },
      {
        id: 'm3-secB-q13',
        section: 'B',
        question: 'Discuss Steven Shapin\'s view of how venture capital evaluates scientific projects.',
        marks: 6,
        wordLimit: 'Around 150 words',
        modelAnswer: 'Steven Shapin\'s study of venture capital reveals a counterintuitive truth: investors do not primarily evaluate technologies, they evaluate people. His most-quoted line — "Bet on the jockey, not the horse" — captures this. Technologies pivot; markets shift; lab data turns out to be incomplete. But an entrepreneur\'s character — their persistence, their honesty in describing risks, their adaptability under pressure — is more durable across these changes. A trustworthy founder will respond to bad data; an excellent technology in the hands of an untrustworthy founder will be wasted. Shapin\'s broader insight is that science itself, as a social institution, runs on similar economies of trust. Peer reviewers extend credit to reputations; collaborators choose partners by character; institutions invest in researchers, not only in projects. The interview thereby reframes science: it is not a pure meritocracy of data but a network of human judgements in which the credibility of persons does work that no instrument can do.',
        examinerTips: 'Cite the jockey metaphor and extend it to science as a "trust economy."'
      },
      {
        id: 'm3-secB-q14',
        section: 'B',
        question: 'Explain how ekphrasis brings together poetry and astronomy in "Galactic Portraits."',
        marks: 6,
        wordLimit: 'Around 150 words',
        modelAnswer: 'In "Galactic Portraits," ekphrasis becomes the meeting point of two disciplines that rarely speak the same language. Astronomy gives us images of unimaginable scale — galaxies, nebulae, the deep field of the early universe — but these images, on their own, can feel inert to a non-specialist reader. Poetry, working through ekphrasis, treats each Hubble image as a sitter for a portrait: a face, a posture, a presence with its own history. The poet reads the image with the same care a critic might read a Vermeer, but the subject is a billion-year-old gas cloud. The effect is doubled. The poetry expands by absorbing cosmic scale; astronomy gains a human voice that translates measurement into wonder. The form argues, by its very existence, that art and science are not separate cultures but two languages for the same act of attention. To look closely IS to imagine — at any scale.',
        examinerTips: 'Define ekphrasis, then show how each side (poetry, astronomy) is changed by the encounter.'
      },
      {
        id: 'm3-secB-q15',
        section: 'B',
        question: 'What does Shapin\'s distinction between the "active life" and the "contemplative life" mean for contemporary science?',
        marks: 6,
        wordLimit: 'Around 150 words',
        modelAnswer: 'Shapin revives an ancient Greek distinction: the active life valued engagement with the polis as the source of virtue and knowledge; the contemplative life valued withdrawal, solitary reflection and pure reason. Both sensibilities persist in modern science. The contemplative life echoes in the image of the lone genius — Einstein writing alone, Ramanujan filling notebooks — and in valuing single-author papers, theoretical depth, and intellectual independence. The active life echoes in the rise of team science, large collaborations like CERN, open data initiatives, and grant frameworks that prioritise societal impact. Shapin\'s point is not that one mode is better; it is that contemporary debates about teamwork versus individualism, applied versus fundamental research, and university versus industry science all replay this ancient argument. The most productive scientific communities tend to blend the two: time for contemplation AND structures for collaboration. Knowing the lineage clarifies what is actually at stake in policy choices today.',
        examinerTips: 'Name both lives, give modern examples of each, and resist taking sides.'
      },

      // Section C
      {
        id: 'm3-secC-q16',
        section: 'C',
        question: '"Science is also an economy of trust." Discuss this claim with reference to Steven Shapin\'s interview, and explain how trust shapes scientific work.',
        marks: 10,
        wordLimit: 'Around 250 words',
        modelAnswer: 'Steven Shapin\'s interview reframes science as an economy of trust — a network of human judgements where credibility, not just data, decides what counts as knowledge.\n\nShapin\'s most-quoted line — "Bet on the jockey, not the horse" — captures the principle as it operates in venture capital. Investors fund founders, not technologies, because technologies change. The entrepreneur\'s character, persistence and honesty in describing risk are more durable than any single product. The same logic applies inside science. Peer reviewers extend credit to authors with established reputations; collaborators choose partners by character before competence; institutions hire researchers on perceived trustworthiness over specific findings. A laboratory cannot replicate every claim it reads; it must take many claims on the credit of the people who reported them.\n\nThis economy of trust has costs and benefits. It accelerates work — researchers can build on others\' results without testing every step — but it can also entrench inequalities: established names receive easier credit than newcomers, and biases against under-represented researchers create distorted citation patterns. Shapin\'s historical perspective adds depth: the ancient Greek distinction between the active and contemplative life shows that science has always negotiated between collective trust and solitary judgement.\n\nThe practical lesson is that scientific integrity is not only about data — it is about the disciplines of honesty, transparency, and credit-giving that sustain the network. A scientific culture without trust is unworkable; a scientific culture with blind trust is unsafe. The art is calibrating the two — and the calibration is, finally, a humane and ethical achievement, not a technical one.',
        examinerTips: 'Cite the jockey metaphor, give two concrete examples of trust at work, name a risk, and conclude with an ethical point.'
      },
      {
        id: 'm3-secC-q17',
        section: 'C',
        question: 'Examine how Bacon\'s aphoristic form serves his empirical philosophy. Use specific examples from the essay.',
        marks: 10,
        wordLimit: 'Around 250 words',
        modelAnswer: 'Bacon\'s aphoristic form is not stylistic decoration — it is the philosophical method enacted in prose. Three properties of the aphorism mirror three properties of empirical thought, and together they reshape what philosophical writing can do.\n\nFirst, an aphorism is compact: a single claim made in its most condensed form. This mirrors the scientific observation, which records a single phenomenon precisely and resists rhetorical inflation. When Bacon writes that "Man, being the servant and interpreter of Nature, can do and understand so much and so much only as he has observed in fact or in thought of the course of nature," the claim is one testable proposition. A continuous essay could blur this; the aphorism preserves it.\n\nSecond, an aphorism is self-contained. Each numbered statement stands on its own, just as each experimental result must hold independently of the personality or rhetoric of the experimenter. Readers can cite Aphorism III without committing to Aphorism VII — exactly as scientists cite papers piece by piece rather than as continuous arguments.\n\nThird, an aphorism is orderable. Bacon\'s numbering invites accumulation: a reader can construct a system from atomic claims, just as a researcher builds knowledge from accumulated experiments. The form encodes empiricism as a method of incremental assembly rather than synthetic vision.\n\nThus Bacon\'s essay performs its philosophy: empiricism is not only argued but enacted. The reader who follows the numbered structure is trained, by the form itself, in the discipline of observing, recording, and combining individual truths. The argument and the form become the same thing — which is what makes the essay foundational to modern scientific method.',
        examinerTips: 'Three properties of aphorism mapped to three properties of empiricism + one cited line + a synthesis sentence.'
      },
    ]
  },

  // ──────────────────────────────────────────────────────────────────────────
  // MODULE IV — Scientific Presentations (Units 13-16)
  // ──────────────────────────────────────────────────────────────────────────
  {
    unitId: 'mod4-model-qp',
    title: 'Module IV Model Paper — Scientific Presentations',
    description: `${SECTION_HEADER} Covers Units 13–16: The Life of Galileo Scene 13, Presentation Tips, Scientific Presentations, Team Presentations.`,
    questions: [
      // Section A
      {
        id: 'm4-secA-q1',
        section: 'A',
        question: 'List two qualities of an effective scientific presentation.',
        marks: 2,
        wordLimit: 'Max 3 sentences',
        modelAnswer: 'Two qualities of an effective scientific presentation are (1) Clarity — simple, well-labelled visuals with minimal text so the audience grasps the key idea without confusion; and (2) Organisation — a logical structure (introduction, methods, results, summary) in which each slide conveys one main idea and transitions guide the audience.',
        examinerTips: 'Other valid pairs: audience engagement, effective visuals, confident delivery.'
      },
      {
        id: 'm4-secA-q2',
        section: 'A',
        question: 'What is the role of collaboration in team presentations?',
        marks: 2,
        wordLimit: 'Max 3 sentences',
        modelAnswer: 'Collaboration in team presentations allows each member to contribute their unique expertise, producing a more structured, accurate and comprehensive result. It ensures visual consistency, balanced responsibility, and clearer division of roles. Collaboration also enables real-time problem solving and stronger audience engagement during delivery.',
        examinerTips: 'Cover at least three: expertise, roles, consistency, problem-solving.'
      },
      {
        id: 'm4-secA-q3',
        section: 'A',
        question: 'Identify one suggestion for reducing back-and-forth snag in team presentations.',
        marks: 2,
        wordLimit: 'Max 3 sentences',
        modelAnswer: 'One effective suggestion is to work in the cloud — having all team members operate on a single shared cloud-based platform. Everyone always sees the most up-to-date version, eliminating email attachments, version conflicts and approval delays. This single change significantly streamlines collaboration.',
        examinerTips: 'Any of the six tips is acceptable: Shared Library, Cloud work, Assign tasks, Content management, Real-time feedback, Seamless sharing.'
      },
      {
        id: 'm4-secA-q4',
        section: 'A',
        question: 'What does Andrea smuggle across the border in Scene 13 of Brecht\'s The Life of Galileo?',
        marks: 2,
        wordLimit: 'Max 3 sentences',
        modelAnswer: 'Andrea Sarti smuggles Galileo\'s Discorsi — the Dialogues Concerning Two New Sciences — across the Italian border. The manuscript is hidden in a chest. Its safe passage outside Italy is essential because the Church has banned its dissemination there.',
        examinerTips: 'Name the work exactly (Discorsi / Dialogues Concerning Two New Sciences).'
      },
      {
        id: 'm4-secA-q5',
        section: 'A',
        question: 'How many main points should a 20–30 minute scientific talk convey, and why?',
        marks: 2,
        wordLimit: 'Max 3 sentences',
        modelAnswer: 'A 20–30 minute scientific talk should convey only 2–3 main points. The audience cannot absorb more in the available time, and attempting to convey 5–7 ideas dilutes attention so that none lands. The "less is more" principle guides effective scientific speaking.',
        examinerTips: 'State both the number (2-3) and the principle ("less is more").'
      },
      {
        id: 'm4-secA-q6',
        section: 'A',
        question: 'What does the witch debate among the children in Scene 13 reveal?',
        marks: 2,
        wordLimit: 'Max 4 sentences',
        modelAnswer: 'The children debate whether an old woman can fly on a broomstick like a witch, while Andrea patiently corrects them: "One cannot fly through the air on a broomstick. It must at least have a machine on it, and as yet there is no such machine." The exchange dramatises the gap between popular superstition and rational scientific thinking. It also represents the scientist\'s responsibility — to educate and enlighten the next generation, even against the inertia of widespread belief.',
        examinerTips: 'Quote Andrea\'s line and link it to Brecht\'s wider claim about science vs. superstition.'
      },
      {
        id: 'm4-secA-q7',
        section: 'A',
        question: 'List two purposes of the final slide in a scientific presentation.',
        marks: 2,
        wordLimit: 'Max 3 sentences',
        modelAnswer: 'The final slide serves two main purposes: (1) it acknowledges collaborators, funding bodies, and sources of data, giving formal credit; and (2) it invites questions, marking the transition to the Q&A session. A good final slide also lists references and a contact address for follow-up.',
        examinerTips: 'Mention acknowledgements + Q&A invitation.'
      },
      {
        id: 'm4-secA-q8',
        section: 'A',
        question: 'According to the 2021 survey, what percentage of people cited collaboration as their biggest challenge in creating presentations?',
        marks: 2,
        wordLimit: 'Max 2 sentences',
        modelAnswer: 'Just under 20% of people surveyed in 2021 cited collaboration as their biggest challenge when creating a new presentation. This makes collaborative friction one of the most significant barriers to producing effective team decks.',
        examinerTips: 'Be precise: "just under 20%", not "50%" or "33%".'
      },
      {
        id: 'm4-secA-q9',
        section: 'A',
        question: 'Name two filler words a presenter should avoid, and explain why.',
        marks: 2,
        wordLimit: 'Max 3 sentences',
        modelAnswer: 'Two filler words to avoid are "uh" and "um." They are markers of hesitation that erode the audience\'s confidence in the speaker. A confident pause is more effective than a filler — it signals deliberation rather than uncertainty.',
        examinerTips: 'Other valid fillers: "like", "you know", "basically".'
      },
      {
        id: 'm4-secA-q10',
        section: 'A',
        question: 'What is the "less is more" principle in scientific presentations?',
        marks: 2,
        wordLimit: 'Max 3 sentences',
        modelAnswer: '"Less is more" is the principle that fewer, well-chosen elements produce a stronger presentation than many crowded ones. A short talk should aim for 2-3 main points, each slide should carry ONE idea, and visual minimalism (clean axes, clear labels, generous whitespace) improves comprehension. The reduction is what makes the message land.',
        examinerTips: 'Apply the principle at the level of points, slides, AND design.'
      },

      // Section B
      {
        id: 'm4-secB-q11',
        section: 'B',
        question: 'How does Scene 13 of Brecht\'s The Life of Galileo show the tension between scientific truth and its public presentation? Give two specific examples.',
        marks: 6,
        wordLimit: 'Around 150 words',
        modelAnswer: 'Scene 13 dramatises the obstacles knowledge must overcome to reach the people. Example 1 — the frontier guards: Andrea attempts to smuggle Galileo\'s Discorsi across the Italian border. The guards focus on collecting tolls, not on inspecting the chest\'s contents. When the chest is finally opened, the books are dismissed as ordinary. Bureaucratic indifference — driven by routine and financial interest — blocks the dissemination of truth as effectively as outright censorship. Example 2 — the children and superstition: village children debate whether an old woman flies on a broomstick. Andrea answers patiently: "One cannot fly through the air on a broomstick. It must at least have a machine on it, and as yet there is no such machine." This exchange reveals the parallel struggle against popular superstition. Together, the two examples argue Brecht\'s thesis: science must outrun both indifferent authority and entrenched belief if it is to serve society.',
        examinerTips: 'Give TWO specific examples, each anchored by a quote or detail, with analysis of what each reveals.'
      },
      {
        id: 'm4-secB-q12',
        section: 'B',
        question: 'Explain three practical tips that can make a scientific presentation effective.',
        marks: 6,
        wordLimit: 'Around 150 words',
        modelAnswer: '(1) Know your audience. Step 1 of effective preparation is identifying the audience\'s level of expertise. A talk to non-specialists requires simpler language and more background; a talk to experts can dive into technical depth. Pitching wrong wastes the audience\'s attention. (2) Use figures and visuals effectively. Graphs, diagrams, and images must be clearly labelled — both axes on every graph, captions on every figure, source credits on every image — and sized so the back row can read them. Visuals promote engagement and explain complex relationships faster than prose. (3) Rehearse delivery. Practice in front of others to test timing, anticipate questions, refine transitions, and remove fillers like "uh" and "um." Confident delivery — eye contact, measured pace, audible enthusiasm — turns a competent talk into a memorable one. Together, audience-fit + clear visuals + rehearsed delivery form the practical core of every successful presentation.',
        examinerTips: 'Name three tips AND explain each. Naming alone risks losing marks.'
      },
      {
        id: 'm4-secB-q13',
        section: 'B',
        question: 'Discuss the six tips for reducing back-and-forth snag in team presentations.',
        marks: 6,
        wordLimit: 'Around 150 words',
        modelAnswer: 'Unit 16 identifies six tips to reduce the collaborative friction that nearly 20% of presenters cite as their biggest challenge. (1) Shared library: a central repository of approved templates, icons and brand assets prevents teams from re-inventing slides each project. (2) Work in the cloud: a live shared deck eliminates emailed attachments, version conflicts and "which file is final?" confusion. (3) Assign tasks: explicit ownership of each slide or section prevents work duplication and unattended gaps. (4) Content management: structured review cycles — outline → first draft → review → final — keep the deck moving forward rather than orbiting in revisions. (5) Real-time feedback: in-line comments, mentions and synchronous edits surface issues as they appear rather than at the eleventh hour. (6) Seamless sharing: a one-link distribution model ensures every stakeholder, including last-minute additions, sees the current version. Together, the six tips transform collaboration from an avoidable cost into a competitive advantage.',
        examinerTips: 'Name and briefly explain all six. Word the explanation as a benefit, not a description.'
      },
      {
        id: 'm4-secB-q14',
        section: 'B',
        question: 'How does Brecht\'s epic theatre relate to the public dissemination of scientific knowledge?',
        marks: 6,
        wordLimit: 'Around 150 words',
        modelAnswer: 'Bertolt Brecht\'s epic theatre is designed to break emotional immersion and force the audience into critical thought. Where conventional drama invites the spectator to identify with the hero, epic theatre uses devices — narration, songs, projected captions, direct address — to remind viewers that they are watching a constructed argument. This form is uniquely suited to dramatising scientific knowledge for the public. Science cannot afford the passivity of pure emotional response; it requires the audience to weigh evidence, question authority, and revise belief. In The Life of Galileo, Brecht stages exactly this tension: Andrea must outwit indifferent guards (institutional power) and patient ignorance (popular superstition) to bring the Discorsi out of Italy. The play does not simply tell us science is hard to disseminate; it makes the audience experience that difficulty. The form thereby trains its viewer in the very critical attitude that responsible scientific citizenship requires.',
        examinerTips: 'Name "epic theatre" and connect Brecht\'s formal choices to scientific dissemination.'
      },
      {
        id: 'm4-secB-q15',
        section: 'B',
        question: 'Why is identifying the audience the first step in preparing a scientific presentation?',
        marks: 6,
        wordLimit: 'Around 150 words',
        modelAnswer: 'Identifying the audience is Step 1 because every later choice depends on it. Audience expertise determines vocabulary: a non-specialist talk replaces "amine scrubbing" with "a chemical sponge for CO₂," while an expert talk can use the technical term directly. Audience interest determines emphasis: an industry audience cares about cost and scalability, an academic audience cares about novelty and rigour, a public audience cares about consequences and ethics. Audience time-budget determines depth: a 10-minute conference talk surfaces only one key result; an hour-long invited lecture can develop methods and limitations. Audience expectations determine framing: a peer-review forum demands data and caveats; a TED-style stage demands narrative and stakes. Without audience analysis, the presenter risks pitching the talk wrong — either over the listener\'s head or beneath their interest. Step 1 protects every subsequent investment of time. It is the difference between a talk that lands and a talk that scatters.',
        examinerTips: 'Cover four dimensions: vocabulary, emphasis, depth, framing.'
      },

      // Section C
      {
        id: 'm4-secC-q16',
        section: 'C',
        question: 'Design a model scientific presentation on any one contemporary scientific issue. Explain how you would apply the principles of clarity, audience engagement and collaboration.',
        marks: 10,
        wordLimit: 'Around 250 words',
        modelAnswer: 'Topic: Climate Change and Carbon Capture Technology\nTitle slide: "Turning the Tide: Carbon Capture as a Climate Solution"\n\nStructure (25 minutes total):\n• Introduction (5 min, 4 slides): open with the headline stat — "CO₂ has crossed 420 ppm for the first time in human history" — and outline the talk: Problem → Science → Solutions → Future.\n• Methods (6 min, 3 slides): explain Direct Air Capture (DAC), post-combustion capture, and bio-energy carbon capture (BECCS) with labelled diagrams.\n• Results (10 min, 5 slides): current deployment in Mt CO₂/year, cost-reduction trends, limitations and challenges.\n• Conclusion + Q&A (4 min, 2 slides): what carbon capture can and cannot do; policy recommendations; acknowledgements; questions invited.\n\nApplying the three principles:\n\nClarity: Each slide carries ONE idea. Technical terms like "amine scrubbing" are explained on-screen with an analogy ("a chemical sponge for CO₂"). Fonts at 24pt sans-serif; every graph has both axes labelled.\n\nAudience engagement: Open with an interactive prompt — "How many of you know what 420 ppm of CO₂ means for our planet?" Maintain eye contact, use voice modulation, and tell the audience what to look at on each data slide ("Focus on the blue line — costs drop by half in a decade.").\n\nCollaboration: For a team delivery, roles are split — one presenter for context/methods, one for results, one for policy + Q&A. All work in a shared cloud deck (Google Slides), with assigned slide ownership and a group rehearsal 48 hours before the event.',
        examinerTips: 'Award marks for: clear topic, named structure with slide counts/times, explicit application of EACH principle, team plan in the collaboration section.'
      },
      {
        id: 'm4-secC-q17',
        section: 'C',
        question: 'Discuss the principles of clarity, organisation and engagement in scientific presentations, drawing examples from Units 14, 15 and 16.',
        marks: 10,
        wordLimit: 'Around 250 words',
        modelAnswer: 'Effective scientific presentations rest on three reinforcing principles: clarity, organisation and engagement. Each is addressed across Units 14, 15 and 16, and each succeeds only when the other two are in place.\n\nClarity is achieved at the level of language, slide design and rehearsal. Unit 14 insists that 20–30 minute talks convey only 2–3 main points — the "less is more" principle — and that every slide carry a single idea. Unit 15 extends this to slide design: minimum 24pt fonts, both axes of every graph labelled, one caption per figure. Without clarity, the listener\'s attention scatters, and even the strongest data fails to land.\n\nOrganisation is the architecture of the talk. Unit 14 prescribes the classical sequence — introduction, methods, results, summary — and warns against transitions that lose the audience. Unit 15 adds that the final slide should perform two acts: acknowledge collaborators and invite questions. Organisation is invisible when it works and unmistakable when it fails — a disorganised talk is one that the audience cannot summarise after the fact.\n\nEngagement is how a presenter turns a competent talk into a memorable one. Unit 14 stresses eye contact, modulated pace, audible enthusiasm, and the elimination of fillers ("uh", "um"). Unit 16 adds the collaborative dimension: a team presentation with assigned roles, shared cloud editing and group rehearsal engages more reliably than a soloist working in isolation.\n\nThe three principles converge on a single conviction: scientific presentation is a designed act of attention, and its design is the speaker\'s moral responsibility to the audience.',
        examinerTips: 'Address all three principles with at least one example each from the relevant unit; close with a synthesis sentence.'
      },
    ]
  },
];

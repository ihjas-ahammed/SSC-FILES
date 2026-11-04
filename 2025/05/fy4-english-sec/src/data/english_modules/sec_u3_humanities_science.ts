import { Section } from '../../types';

export const SEC_U3_HUMANITIES_SCIENCE: Section = {
  id: "sec-u3-humanities-science",
  title: "Unit 3: Humanities v/s Science",
  description: "Dr. S. Radhakrishnan's essay on the holistic integration of knowledge and morals.",
  color: "duo-blue",
  units: [
    {
      id: "u3-part1-intro",
      title: "1. Introduction & Context",
      description: "Author background and the philosophical setup.",
      color: "duo-blue",
      lessons: [
        {
          id: "les-1-3-intro",
          title: "The Author & Theme",
          description: "Understanding Dr. S. Radhakrishnan's perspective.",
          icon: "BookOpen",
          slides: [
            {
              id: "s-hook",
              type: "quiz",
              title: "The Ultimate Question",
              content: "Imagine a society with the most advanced technology in the universe, but absolutely no understanding of art, compassion, or ethics. What would happen to it?",
              options: [
                { id: "A", text: "It would thrive forever due to pure logic and efficiency.", isCorrect: false, explanation: "Without compassion or ethics, power usually leads to tyranny and self-destruction." },
                { id: "B", text: "It would likely destroy itself.", isCorrect: true, explanation: "Correct. This is exactly what Dr. S. Radhakrishnan argues: Science without Humanities is dangerous." }
              ]
            },
            {
              id: "s-author",
              type: "theory",
              title: "Dr. S. Radhakrishnan",
              content: `Dr. Sarvepalli Radhakrishnan (1888-1975) was one of India's most profound thinkers, a great teacher, and a public intellectual.\n\nHe served as the first Vice President (1952-1962) and the second President of India (1962-1967). Before entering politics, he was elected to Oxford's prestigious Spalding Professorship in Eastern Religions and Ethics.\n\n*Fun Fact: India observes his birthday, September 5th, as Teacher's Day!*`
            },
            {
              id: "s-genre",
              type: "theory",
              title: "What are we reading?",
              content: `**Genre:** Philosophical / Argumentative Essay\n\n**The Core Argument:** \nRadhakrishnan argues that while Science is absolutely essential for removing poverty, disease, and ignorance, it is inadequate on its own. It must be paired with the Humanities (literature, philosophy, arts) to give humans a moral compass and a "truly democratic spirit". Truth, he argues, is indivisible.`
            }
          ]
        }
      ]
    },
    {
      id: "u3-part2-text",
      title: "2. The Text Analysis",
      description: "Guided reading of the core essay arguments. Every paragraph and bullet from the original essay is included here.",
      color: "duo-green",
      lessons: [
        {
          id: "les-1-3-tx1",
          title: "Obstacles & Technology",
          description: "The barriers to development and the limits of tech.",
          icon: "Search",
          slides: [
            {
              id: "s-tx1-1",
              type: "theory",
              title: "The Three Obstacles",
              content: `> "The three obstacles which stand in the way of national development are ignorance, disease and poverty. Of these, the major obstacle is ignorance. If we are able to remove ignorance from men's minds, their poverty also will diminish, their disease also will be eliminated. That is very essential."\n\nRadhakrishnan states that curing ignorance is the root solution to a nation's physical and economic struggles.`
            },
            {
              id: "s-tx1-2",
              type: "theory",
              title: "Lop-Sided Education",
              content: `> "People nowadays are greatly attracted by technological education and naturally, too. But we should also remember that technological education without the complement of humanistic studies will be imperfect, lop-sided and deficient. It is possible for us, by the control we have obtained over the forces of nature, to bring about paradise on earth. It is equally possible for us, by pressing a button, to destroy continents."\n\nScience gives us unprecedented power, but without the arts and humanities, we risk self-destruction.`
            },
            {
              id: "s-tx1-3",
              type: "quiz",
              title: "Comprehension Check",
              content: "According to the passage, what happens if we pursue technological education without humanistic studies?",
              options: [
                { id: "A", text: "Education becomes too expensive.", isCorrect: false, explanation: "He critiques its moral and intellectual balance, not cost." },
                { id: "B", text: "Education becomes imperfect, lop-sided, and deficient.", isCorrect: true, explanation: "Correct! We gain immense power (to 'destroy continents') without the wisdom to use it properly." }
              ]
            },
            {
              id: "s-tx1-4",
              type: "theory",
              title: "Five-Year Plans & Illiteracy",
              content: `> "We have been trying to achieve through our Five-Year Plans a kind of economic development, which will lead to the spread of education, the removal of illiteracy, the lowering of the incidence of disease and the elimination as much as possible of poverty."\n\n"We have men and women energetic and eager to do their best, and we have vast natural resources also. In spite of all these things, what is it that prevents us from achieving something great and glorious here?"`
            },
            {
              id: "s-tx1-5",
              type: "theory",
              title: "Lack of Proper Education",
              content: `> "is the lack of proper education, in quality as well as in quantity. When we look at the country and the vast problems which it is facing, it is the educated men-men who have competence and skill, who have a sense of direction, who have a social purpose - it is such people who will be able to transform our societies."\n\n"The industrial growth of our country requires a large number of scientists, technicians and engineers."`
            }
          ]
        },
        {
          id: "les-1-3-tx2",
          title: "The Role of Humanities",
          description: "Why we need art and compassion.",
          icon: "Compass",
          slides: [
            {
              id: "s-tx2-1",
              type: "theory",
              title: "The Function of Universities",
              content: `> "The function of the universities is not merely to send out technically skilled and professionally competent men, but it is their duty to produce in them the quality of compassion, the quality which enables the individuals to treat one another in a truly democratic spirit."\n\n"Our religions have proclaimed from the very beginning that each human individual is to be regarded as a spark of the Divine."`
            },
            {
              id: "s-tx2-2",
              type: "theory",
              title: "Tat tvam asi",
              content: `> "Tat tvam asi, that art thou, is the teaching of the Upanisads."\n\nNational education does not mean that subjects like physics and chemistry... change with the boundaries of nations. It means that there is a national heritage, a tradition of values into which the students should be initiated.`
            },
            {
              id: "s-tx2-3",
              type: "fill_in_blank",
              title: "Complete the Argument",
              content: "The function of universities is to produce the quality of ___, enabling individuals to treat one another in a democratic spirit.",
              blankAnswer: "compassion"
            },
            {
              id: "s-tx2-4",
              type: "theory",
              title: "Humanities & Human Nature",
              content: `> "Humanities again are important because they tell us about our own nature; how we have to grow from day to day. What the impulses are, what the ideals and aspirations are, these are the things that we have to learn from the humanities."\n\n"Whether it is sciences or humanities... they touch only the periphery of the reality... Mere sciences, natural or social, are not enough."`
            },
            {
              id: "s-tx2-5",
              type: "theory",
              title: "Technological Education Without Humanities",
              content: `> "Technological education without the complement of humanistic studies will be imperfect, lop-sided and deficient."\n\n"Humanistic training and technological study must be regarded as complementary to each other. They should not be regarded as divorced or as separated from each other."`
            }
          ]
        },
        {
          id: "les-1-3-tx3",
          title: "Knowledge vs. Wisdom",
          description: "Truth is indivisible.",
          icon: "BrainCircuit",
          slides: [
            {
              id: "s-tx3-1",
              type: "theory",
              title: "Refuting Blake",
              content: `> "It is wrong to think, as once upon a time Blake said, 'the tree of life is sustained by art, the tree of death by science.' It is a misleading conception... Truth is indivisible. Whether it is historical truth, literary truth, or scientific truth, the approaches may be different, but ultimately what we do is exactly the same."`
            },
            {
              id: "s-tx3-2",
              type: "theory",
              title: "The Disproportion",
              content: `> "There is a general criticism levelled against us that where our knowledge of nature is increasing our wisdom is diminishing... There is disproportion between the growth of wisdom and the increase of knowledge. It is that disparity that has impressed many people."\n\n"Knowledge is knowing how to press the button. Wisdom is knowing whether to press it."`
            },
            {
              id: "s-tx3-3",
              type: "theory",
              title: "Knowledge and Wisdom",
              content: `> "Most of us think that we are scientists because we press a button... But we do not know how these things function... We know only how to press a button and get something done. That is, we live on the surface of human life-robots, mechanics, technicians. We do not know what the depths of these things indicate..."`
            },
            {
              id: "s-tx3-4",
              type: "theory",
              title: "Search for Truth",
              content: `> "There is, however, no incompatibility between the findings of science and the doctrines of religion. The search of truth is their common goal... Since God is Truth, satya svarupa, the quest of Truth is the quest of God."\n\n"Science does not suggest the omnipotence of matter. It suggests the supremacy of the spirit of man..."`
            }
          ]
        },
        {
          id: "les-1-3-tx4",
          title: "Additional Key Arguments",
          description: "Every remaining paragraph and bullet from the original essay.",
          icon: "Book",
          slides: [
            {
              id: "s-tx4-1",
              type: "theory",
              title: "Education Should Shape a Whole Man (Page 41)",
              content: `> "Education should shape a whole man, not a partially developed 'consumer' or 'technician'... But it is from the humanities that we acquire our sense of values and social obligations."\n\n"The young men and women coming out of universities should be experts in science and technology, at the same time, they should also be committed to serve the suffering millions."`
            },
            {
              id: "s-tx4-2",
              type: "theory",
              title: "Science and Religion (Page 41)",
              content: `> "Science and religion need not be counterposed because both have a common goal: the quest for truth."\n\n"Knowledge is not confined within national boundaries or religious sects. Therefore we should practise religious tolerance and undertake international collective research projects..."`
            },
            {
              id: "s-tx4-3",
              type: "theory",
              title: "Humanities Clarify Life's Meaning (Page 41)",
              content: `> "The study of humanities is bound to clarify our concept of life's meaning... Science without humanities in our education, and knowledge without wisdom in our life, can be disastrous. Hence, we should draw inspiration from Indian cultural values..."`
            },
            {
              id: "s-tx4-4",
              type: "theory",
              title: "Attacking National Problems (Page 37)",
              content: `> "It is necessary that if we want to attack the problems which our country faces - poverty, malnutrition, disease... it is necessary for us to care for the poor... We must develop these things, we must develop science and technology... human beings must feel that they are rational human beings with dignity..."`
            },
            {
              id: "s-tx4-5",
              type: "theory",
              title: "Spiritual Inadequacy & Self-Knowledge (Page 40)",
              content: `> "There is some spiritual inadequacy... If we live today, it is not because of our great industrial progress... We live today because there are still people who illustrate for the commonality the path of spirituality... the greatest science is the knowledge of your own self."`
            },
            {
              id: "s-tx4-6",
              type: "theory",
              title: "Central Theme & Outline (Page 40)",
              content: `> "Dr. Radhakrishnan's central theme is the disproportionate importance given to technical subjects... We face the enormous challenge of removing poverty, disease and ignorance... In order to use it for constructive purposes we need an educational system which regards sciences and humanities as complementary."`
            },
            {
              id: "s-tx4-7",
              type: "theory",
              title: "Knowledge and Power (Page 34)",
              content: `> "Knowledge and power are two aspects of science which should be spread among people... Since the humanities teach us about our nature... they are equally vital."`
            }
          ]
        }
      ]
    },
    {
      id: "u3-part3-mastery",
      title: "3. Vocabulary & Exam Prep",
      description: "Master key terms and tackle university questions.",
      color: "duo-orange",
      lessons: [
        {
          id: "les-1-3-vocab",
          title: "Glossary & Words",
          description: "Key vocabulary from the text.",
          icon: "Type",
          slides: [
            {
              id: "v-lopsided",
              type: "word_card",
              content: "Vocabulary",
              wordCard: {
                word: "Lop-sided",
                translation: "Disproportionate; unevenly balanced.",
                context: "> \"technological education without the complement of humanistic studies will be imperfect, lop-sided and deficient.\"",
                example: "A curriculum with only math and no reading is lop-sided.",
                exampleTranslation: "It lacks balance."
              }
            },
            {
              id: "v-obscurantism",
              type: "word_card",
              content: "Vocabulary",
              wordCard: {
                word: "Obscurantism",
                translation: "The practice of deliberately preventing facts from becoming known.",
                context: "> \"...obscurantism, superstition and such other things which have weighed us down for centuries must be removed...\"",
                example: "The dictator used obscurantism to keep the public unaware of the truth.",
                exampleTranslation: "Hiding the facts to maintain control."
              }
            },
            {
              id: "v-omnipotence",
              type: "word_card",
              content: "Vocabulary",
              wordCard: {
                word: "Omnipotence",
                translation: "The quality of having unlimited or very great power.",
                context: "> \"Science does not suggest the omnipotence of matter.\"",
                example: "Nature's omnipotence is clear during a massive hurricane.",
                exampleTranslation: "Absolute power."
              }
            },
            {
              id: "v-fiveyear",
              type: "word_card",
              content: "Vocabulary",
              wordCard: {
                word: "Five-Year Plans",
                translation: "A series of national development programmes implemented by the Government of India from 1951 to 2017.",
                context: "> \"We have been trying to achieve through our Five-Year Plans a kind of economic development...\"",
                example: "India's Five-Year Plans focused on economic growth, education and poverty removal.",
                
              }
            },
            {
              id: "v-piety",
              type: "word_card",
              content: "Vocabulary",
              wordCard: {
                word: "Piety",
                translation: "The quality of being religious or reverent.",
                context: "Used in the context of religious tolerance and spiritual outlook.",
                example: "True piety leads to compassion for all beings."
              }
            },
            {
              id: "v-humanism",
              type: "word_card",
              content: "Vocabulary",
              wordCard: {
                word: "Humanism",
                translation: "A rationalist outlook or system of thought attaching prime importance to human rather than divine or supernatural matters.",
                context: "Central to Radhakrishnan's advocacy for humanities in education.",
                example: "Humanism emphasises compassion and democratic spirit."
              }
            },
            {
              id: "v-blake",
              type: "word_card",
              content: "Vocabulary",
              wordCard: {
                word: "William Blake (1757-1823)",
                translation: "English romantic poet and visionary. He condemned the evils consequent on industrial progress (dark satanic mills).",
                context: "> \"Radhakrishnan attributes these evils not to science but to its wrong use.\"",
                example: "Blake's 'tree of death by science' is refuted in the essay."
              }
            },
            {
              id: "v-tattvamasi",
              type: "word_card",
              content: "Vocabulary",
              wordCard: {
                word: "Tat tvam asi",
                translation: "Thou art that: one of the four mahavakyas of upanishadic wisdom.",
                context: "> \"That art thou, is the teaching of the Upanisads.\"",
                example: "It teaches that every human is a spark of the Divine."
              }
            },
            {
              id: "v-members",
              type: "word_card",
              content: "Vocabulary",
              wordCard: {
                word: "\"We are members one of another.\"",
                translation: "The Bible, Ephesians 4.23.",
                context: "Emphasises unity and compassion in a democratic society.",
                example: "Putting away falsehood, let us all speak the truth to our neighbors..."
              }
            },
            {
              id: "v-njanam",
              type: "word_card",
              content: "Vocabulary",
              wordCard: {
                word: "njanam vijnana sahitam",
                translation: "Knowledge combined with realization. Vijnanam refers to practical experience.",
                context: "> \"The Bhagavad Gita, 9.1: knowledge combined with realization.\"",
                example: "We should aim at wisdom as well as knowledge."
              }
            },
            {
              id: "v-tirukkural",
              type: "word_card",
              content: "Vocabulary",
              wordCard: {
                word: "Tirukkural",
                translation: "One of the most revered ancient works in the Tamil language... providing a guide for human morals and betterment in life.",
                context: "Claimed by Jainism, Buddhism and Hinduism as teaching universal humanism.",
                example: "It teaches a universal humanism."
              }
            }
          ]
        },
        {
          id: "les-1-3-questions",
          title: "Exam Questions (A, B, C)",
          description: "Practice answering in the format of the exam.",
          icon: "Edit3",
          slides: [
            {
              id: "s-q-secA-1",
              type: "theory",
              title: "Section A (2 Marks)",
              content: `Q: What are the three obstacles in the way of national development according to Radhakrishnan?\n\nModel Answer:\nAccording to Dr. S. Radhakrishnan, the three major obstacles to national development are ignorance, disease, and poverty. He emphasizes that out of these, ignorance is the primary obstacle, and removing it will naturally help diminish the other two.`
            },
            {
              id: "s-q-secA-2",
              type: "theory",
              title: "Section A (2 Marks)",
              content: `Q: What does the Upanisadic phrase 'Tat tvam asi' mean?\n\nModel Answer:\n'Tat tvam asi' translates to 'That art thou' (You are that). Radhakrishnan uses it to explain that every human individual is a spark of the Divine, which forms the basis for treating everyone with compassion and a democratic spirit.`
            },
            {
              id: "s-q-secB",
              type: "quiz",
              title: "Section B (6 Marks) - Builder",
              content: "Q: Analyse the predicament of science without a moral compass as described in the essay. \n\nWhich of the following makes the best opening sentence for this 100-word paragraph?",
              options: [
                { id: "A", text: "Science is bad because it creates atom bombs that destroy continents.", isCorrect: false, explanation: "Too simplistic. Radhakrishnan explicitly states he does NOT believe science is devoid of moral values; it's the *application* that requires morals." },
                { id: "B", text: "Dr. Radhakrishnan argues that while science provides humanity with immense power, without the moral compass provided by the Humanities, this power risks becoming destructive.", isCorrect: true, explanation: "Excellent opening. It addresses the tension between power (science) and direction (humanities)." }
              ]
            },
            {
              id: "s-q-secC",
              type: "theory",
              title: "Section C (10 Marks) - Essay Plan",
              content: `Q: Examine the tension between scientific knowledge and moral responsibility in the essay.\n\nEssay Plan:\n1. Intro: Radhakrishnan's premise: Science gives power; Humanities give direction. Truth is indivisible.\n2. The Risk of Science: It can "bring about paradise" or "destroy continents." Point out the fear of producing "mechanical robots".\n3. The Role of Humanities: Universities must produce "compassion" and a "democratic spirit" to guide scientific power ethically.\n4. Conclusion: A "whole man" needs both. Discard Blake's idea that science is the "tree of death"—they must work together.`
            }
          ]
        }
      ]
    }
  ]
};
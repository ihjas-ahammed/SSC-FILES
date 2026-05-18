import { Section } from '../../types';

export const SEC_U11_BIOLOGY_OF_GENDER: Section = {
  id: "sec-u11-biology-of-gender",
  title: "Unit 11: The Biology of Gender",
  description: "Karissa Sanbonmatsu explores how epigenetics and DNA shape gender identity.",
  color: "duo-blue",
  units: [
    {
      id: "u11-part1-intro",
      title: "1. Introduction & Context",
      description: "Meet the author, her scientific background, and the TED context.",
      color: "duo-blue",
      lessons: [
        {
          id: "les-u11-intro",
          title: "Author & Context",
          description: "Karissa Sanbonmatsu's journey from astrophysics to epigenetics.",
          icon: "User",
          slides: [
            {
              id: "s-u11-hook",
              type: "interactive_canvas",
              title: "Is Biology Destiny?",
              content: "We are often taught that biology is fixed at birth—that our DNA is a rigid blueprint.\n\nBut what if DNA actually 'listens' to your experiences, trauma, and environment? Use the slider below to see how environmental stress changes gene expression through Epigenetics.",
              interactiveCanvasId: "dna_epigenetics"
            },
            {
              id: "s-u11-author-1",
              type: "theory",
              title: "The Author: Karissa Sanbonmatsu",
              content: `**Karissa Y. Sanbonmatsu** is an American structural biologist from Los Alamos National Laboratory. \n\nShe transitioned from Plasma Physics to questions on the nature of life, leveraging supercomputers in 2002 to conduct groundbreaking biological simulations. In 2005, she performed the first atomistic simulation of the ribosome, identifying its "accommodation corridor."`
            },
            {
              id: "s-u11-author-2",
              type: "theory",
              title: "A Personal Journey",
              content: `In a 2014 TEDx Talk, Sanbonmatsu discussed her research on epigenetics and publicly came out as a transgender woman.\n\nLater, in November 2018, she presented a TED talk at TEDWomen titled **"The Biology of Gender, from DNA to the Brain,"** where she explored topics such as epigenetics, the impact of trauma and diet on DNA, and how her personal journey inspired her to investigate the connection between epigenetics and gender identity.`
            },
            {
              id: "s-u11-genre",
              type: "theory",
              title: "What are we reading?",
              content: `**Genre:** Scientific/Expository Essay (TED Talk Adaptation)\n\n**The Core Theme:**\nSanbonmatsu critically examines the complexity of gender identity through genetics, neuroscience, and epigenetics. She argues that gender is neither fixed nor purely social, but a fluid, dynamic interplay between genes, brain, body, and lived experience.`
            },
            {
              id: "s-u11-pre-mcq",
              type: "quiz",
              title: "Pre-reading Check",
              content: "What does the field of 'epigenetics' primarily study?",
              options: [
                { id: "A", text: "How to completely alter an individual's core DNA sequence.", isCorrect: false, explanation: "Epigenetics does NOT change the underlying DNA sequence." },
                { id: "B", text: "How environmental factors influence gene expression without changing the DNA sequence.", isCorrect: true, explanation: "Exactly. It's about how genes are turned 'on' or 'off' based on experience." }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "u11-part2-text",
      title: "2. The Text: Beyond the Binary",
      description: "Reading the text: Chromosomes, Brain Mosaics, and Epigenetics.",
      color: "duo-violet",
      lessons: [
        {
          id: "les-u11-tx1",
          title: "Challenging Assumptions",
          description: "Chromosomes and the patchwork brain.",
          icon: "Search",
          slides: [
            {
              id: "s-u11-tx1-1",
              type: "theory",
              title: "Beyond XX and XY",
              content: `> "Karissa Sanbonmatsu's talk critically examines the complexity of gender identity through the lenses of genetics, neuroscience, and epigenetics. \n> \n> She begins by challenging traditional assumptions that equate womanhood solely with XX chromosomes, pointing out that chromosomal variations such as mosaics (e.g., XX, XY, and XXX combinations) exist."`
            },
            {
              id: "s-u11-tx1-2",
              type: "theory",
              title: "The Brain Mosaic",
              content: `> "Similarly, cultural expectations of femininity, such as marriage and childbearing, fail to capture the essence of gender identity. \n> \n> Sanbonmatsu introduces recent neuroscientific findings that reveal the human brain as a patchwork mosaic, comprising both male-typical and female-typical features rather than fitting into rigid binary categories."`
            },
            {
              id: "s-u11-tx1-3",
              type: "theory",
              title: "Undermining Simplistic Notions",
              content: `> "This evidence undermines simplistic notions of sexual dimorphism and calls for a deeper scientific understanding of what constitutes gender."`
            },
            {
              id: "s-u11-tx1-4",
              type: "quiz",
              title: "Comprehension Check",
              content: "What does the term 'patchwork mosaic' describe in Sanbonmatsu's talk?",
              options: [
                { id: "A", text: "The human brain, containing a mix of both male-typical and female-typical features.", isCorrect: true, explanation: "Neuroscience reveals that brains don't fit perfectly into a strict binary; they are a mosaic of features." },
                { id: "B", text: "The structure of DNA molecules.", isCorrect: false, explanation: "DNA structure is a double helix. The 'mosaic' refers to brain features and chromosomal variations." }
              ]
            }
          ]
        },
        {
          id: "les-u11-tx2",
          title: "Epigenetics & Fetal Development",
          description: "How DNA 'knots' and the timing of development shape identity.",
          icon: "Activity",
          slides: [
            {
              id: "s-u11-tx2-1",
              type: "theory",
              title: "The Role of Epigenetics",
              content: `> "Central to her discussion is the concept of epigenetics, which explores how environmental and experiential factors influence gene expression without altering the DNA sequence. \n> \n> Sanbonmatsu explains that DNA within cells undergoes structural modifications, forming “knots” that serve as molecular markers of experience. These modifications regulate whether specific genes are expressed, shaping physiological and psychological outcomes."`
            },
            {
              id: "s-u11-tx2-2",
              type: "theory",
              title: "Trauma and Identity Formation",
              content: `> "For instance, traumatic experiences and stress can cause DNA to coil in ways that silence genes involved in stress reduction, leading to long-term behavioral and emotional effects. \n> \n> Sanbonmatsu highlights that such epigenetic programming plays a crucial role in identity formation, including gender identity, by influencing brain development at critical prenatal stages."`
            },
            {
              id: "s-u11-tx2-3",
              type: "fill_in_blank",
              title: "Vocabulary Check",
              content: "DNA undergoes modifications forming '___' that serve as molecular markers of experience, turning genes on or off.",
              blankAnswer: "knots"
            },
            {
              id: "s-u11-tx2-4",
              type: "theory",
              title: "The Temporal Gap",
              content: `> "Building on this, she addresses how biological processes unfold during fetal development, noting that the differentiation of genitals occurs in the first trimester, while brain sexual differentiation occurs in the second trimester.\n> \n> This temporal gap allows for variations in gender identity, suggesting that biological sex and gender identity can diverge."`
            },
            {
              id: "s-u11-tx2-5",
              type: "quiz",
              title: "Understanding Development",
              content: "How does the 'temporal gap' in fetal development explain gender diversity?",
              options: [
                { id: "A", text: "Because the genitals develop in the first trimester and the brain in the second, they can experience different hormonal/epigenetic signals.", isCorrect: true, explanation: "This gap in timing means the body and brain differentiation processes aren't strictly locked together." },
                { id: "B", text: "Because DNA stops replicating after the first trimester.", isCorrect: false, explanation: "DNA replicates throughout life. The gap is in the timing of tissue differentiation." }
              ]
            }
          ]
        },
        {
          id: "les-u11-tx3",
          title: "Simulations & Personal Narrative",
          description: "Bridging supercomputers and human experience.",
          icon: "Monitor",
          slides: [
            {
              id: "s-u11-tx3-1",
              type: "theory",
              title: "Supercomputer Simulations",
              content: `> "To better understand these processes, Sanbonmatsu and her team at Los Alamos National Laboratory employ high-performance computing to simulate gene structures and epigenetic changes at an atomic level.\n> \n> These simulations represent one of the largest biomolecular studies to date and are providing unprecedented insights into how hormonal and epigenetic signals guide cellular decisions during development."`
            },
            {
              id: "s-u11-tx3-2",
              type: "theory",
              title: "A Personal Journey",
              content: `> "Sanbonmatsu concludes by connecting scientific inquiry with her personal narrative as a transgender woman, emphasizing both the challenges and resilience associated with her journey. \n> \n> She advocates for social acceptance, mental health support, and inclusivity, while asserting that gender identity emerges from a dynamic interplay of biology, experience, and societal context."`
            },
            {
              id: "s-u11-tx3-3",
              type: "theory",
              title: "Biology is Fluid",
              content: `> "Her research reframes gender as neither fixed nor purely social, but as a complex phenomenon deeply rooted in molecular processes and human diversity. She blends science and humanity. \n> \n> Biology is not destiny, she reminds us—it is fluid, responsive, and complex. Gender is not just something written in our chromosomes, but something shaped by a beautiful and intricate interplay between genes, brain, body, and lived experience."`
            },
            {
              id: "s-u11-tx3-4",
              type: "theory",
              title: "Celebrating Diversity",
              content: `> "She reminds us that rather than forcing people into narrow categories, we should celebrate the diversity of gender as a reflection of the richness of human biology."`
            }
          ]
        }
      ]
    },
    {
      id: "u11-part3-mastery",
      title: "3. Vocabulary & Exam Prep",
      description: "Master key scientific terms and answer model questions.",
      color: "duo-orange",
      lessons: [
        {
          id: "les-u11-vocab",
          title: "Scientific Glossary",
          description: "Key biological terms from the text.",
          icon: "Type",
          slides: [
            {
              id: "v-u11-1",
              type: "word_card",
              content: "Vocabulary",
              wordCard: {
                word: "Chromosomes",
                translation: "Thread-like structures in cells that carry genetic information (DNA).",
                context: "Traditional assumptions equate womanhood solely with XX chromosomes.",
                example: "Humans typically have 46 chromosomes in each cell."
              }
            },
            {
              id: "v-u11-2",
              type: "word_card",
              content: "Vocabulary",
              wordCard: {
                word: "Mosaics",
                translation: "In biology, an organism or tissue made up of cells with different genetic makeup.",
                context: "Chromosomal variations such as mosaics (e.g., XX, XY, and XXX combinations) exist.",
                example: "The neuroscientific findings reveal the human brain as a patchwork mosaic."
              }
            },
            {
              id: "v-u11-3",
              type: "word_card",
              content: "Vocabulary",
              wordCard: {
                word: "Dimorphism",
                translation: "The occurrence of two distinct forms in one species, often male and female differences.",
                context: "This evidence undermines simplistic notions of sexual dimorphism.",
                example: "Sexual dimorphism in birds often results in males having brighter plumage."
              }
            },
            {
              id: "v-u11-4",
              type: "word_card",
              content: "Vocabulary",
              wordCard: {
                word: "Epigenetics",
                translation: "The study of how environmental factors affect gene expression without changing DNA sequence.",
                context: "Central to her discussion is the concept of epigenetics...",
                example: "Epigenetics explains how trauma can physically alter how your genes behave."
              }
            }
          ]
        },
        {
          id: "les-u11-exam",
          title: "Model Questions",
          description: "Practice answering in the format of the university exam.",
          icon: "Edit3",
          slides: [
            {
              id: "s-u11-qa1",
              type: "theory",
              title: "Section A (2 Marks) - Model Question",
              content: `**Q: What is "epigenetics" according to Karissa Sanbonmatsu?**\n\n**Model Answer:**\nEpigenetics is the study of how environmental and experiential factors—such as trauma or diet—influence gene expression without altering the underlying DNA sequence. Sanbonmatsu explains this through the formation of DNA "knots" that serve as molecular markers, turning specific genes on or off.`
            },
            {
              id: "s-u11-qb1",
              type: "theory",
              title: "Section B (6 Marks) - Model Question",
              content: `**Q: How does the temporal gap in fetal development explain the divergence of biological sex and gender identity?**\n\n**Model Answer:**\nSanbonmatsu explains that biological processes unfold at different stages during fetal development. Specifically, the physical differentiation of genitals occurs in the first trimester, whereas the sexual differentiation of the brain occurs later, during the second trimester. Because these two critical developmental processes are separated by a "temporal gap," they can be influenced by different hormonal and epigenetic signals. This gap creates the biological possibility for variations in gender identity, scientifically demonstrating why an individual's biological sex at birth may naturally diverge from their brain's gender identity.`
            }
          ]
        }
      ]
    }
  ]
};
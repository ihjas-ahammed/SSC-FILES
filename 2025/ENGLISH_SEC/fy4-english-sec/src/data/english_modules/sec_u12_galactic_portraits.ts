import { Section } from '../../types';

export const SEC_U12_GALACTIC_PORTRAITS: Section = {
  id: "sec-u12-galactic-portraits",
  title: "Unit 12: Galactic Portraits as Ekphrasis",
  description: "Poetry responding to James Webb Space Telescope images — Sudeep Sen",
  color: "duo-teal",
  units: [
    {
      id: "u12-intro",
      title: "1. Introduction",
      description: "About Sudeep Sen and Ekphrasis.",
      color: "duo-teal",
      lessons: [
        {
          id: "les-u12-intro",
          title: "About Sudeep Sen & Ekphrasis",
          description: "Poet and the literary concept.",
          icon: "Feather",
          slides: [
            {
              id: "u12-author",
              type: "theory",
              title: "Who is Sudeep Sen?",
              content: `**Sudeep Sen** is a noted contemporary Indian poet, editor, and translator.\n\n- Prize-winning books include *Postmarked India* (HarperCollins), *Rain, Aria, Fractals* (London Magazine Editions), *EroText* (Penguin Random House), *Anthropocene* (Pippa Rann).\n- Edited *The HarperCollins Book of English Poetry*.\n- Awarded the **Senior Fellowship** by the Government of India.\n- First Asian invited to speak and read at the **Nobel Laureate Festival**.`
            },
            {
              id: "u12-ekphrasis",
              type: "theory",
              title: "What is Ekphrasis?",
              content: `**Ekphrasis** = using words to describe or respond to a work of art so vividly that it comes alive in the reader's imagination.\n\n- Originated in **ancient Greece** — poets wrote about paintings or sculptures.\n- An **ekphrastic response** = a writer/poet's act of responding to artwork through language.\n- Instead of just viewing an image, they **transform it into words, emotions, and ideas**.\n\nIn this unit: Sen responds to photographs from the **James Webb Space Telescope (JWST)** with creative non-fiction and poetry.`
            },
            {
              id: "u12-jwst",
              type: "theory",
              title: "The James Webb Space Telescope",
              content: `**JWST** — launched in 2021, first images released July 12, 2022.\n\nThe world's **largest and most powerful** space telescope.\n\nSen draws a historical lineage of telescopes:\n- **1608–09**: Hans Lipperhey and Thomas Harriot (first telescopes skyward).\n- **Galileo Galilei** — improved the telescope; "father of observational astronomy."\n- **JWST** — the latest development, revealing previously unseen cosmic images.`
            }
          ]
        }
      ]
    },
    {
      id: "u12-text",
      title: "2. The Poems",
      description: "Analysis of Sen's ekphrastic responses.",
      color: "duo-blue",
      lessons: [
        {
          id: "les-u12-poems",
          title: "Four Cosmic Responses",
          description: "Sen's responses to four JWST images.",
          icon: "Star",
          slides: [
            {
              id: "u12-smacs",
              type: "theory",
              title: "SMACS 0723 — Galaxy Cluster",
              content: `*(A galaxy cluster as it existed 4.6 billion years ago)*\n\n> "The drama of galactic portraiture – its telescopic image revealing a deep black canvas speckled with gold, saffron, orange sprinkles... At the flick of a shutter, 4.6 billion years of stories tumble forth – the past is brought to the present by a phalanx of hexagonal gold-mirror panels. **We have travelled backwards in time, despite being present in the present.**"\n\n**Key idea:** Science enables **temporal travel** — seeing the past in the present.`
            },
            {
              id: "u12-nebulae",
              type: "theory",
              title: "Southern Ring Nebula & Stephan's Quintet",
              content: `**Southern Ring Nebula** *(a shell of gas expelled by a dying star)*:\n> "Stars die too – in their 'dying throes, [they] shake, pulsate, and at the end, poof!' Births – equally dramatic, tectonic."\n\n**Stephan's Quintet** *(five galaxies)*:\n> "Five galaxies glow in a single frame – their spectacular amoeba-shapes... Gravitational interaction – sweeping tails of gas, dust, stars... grand ectopic formations of violence and beauty."\n\n**Key idea:** Science reveals beauty in **cosmic violence and death**.`
            },
            {
              id: "u12-carina",
              type: "theory",
              title: "Carina Nebula",
              content: `**Carina Nebula** *(birthplace and graveyard for the Milky Way's largest stars)*:\n\n> "What lies beyond these dramatic amber cosmic cliffs of Carina... a nebula displaying a deep rumbling space-show... Utter magnificence, fluorescent – the glowing black, blue, red, orange, yellow – a drunken swirl of psychedelia..."\n\n**Sen's reflection:**\n> "And, to know that these Webb images are only a beginning of a long road of epochal discoveries that will study every phase of the 13.8 billion years of cosmic history, stirs anticipation. A true marvel, an **extraordinary time machine**."`
            },
            {
              id: "u12-science-art",
              type: "theory",
              title: "Where Science Meets Art",
              content: `Sen's essay illustrates the **interdisciplinary meeting point** between science and art:\n\n- Carl Sagan's documentaries changed Sen's views of outer and inner cosmoses.\n- X-ray digital plates at a Teleradiology Centre appeared as **stunning art** — fractals in human organs.\n- Donne wrote *The Sun Rising* after viewing cosmos through the Galilean telescope.\n\n**Conclusion:** Scientific advancements don't just change what we know — they **alter how we perceive beauty**, inspiring new poetry, music, and art.`
            }
          ]
        }
      ]
    },
    {
      id: "u12-glossary",
      title: "3. Glossary",
      description: "Key terms from the unit.",
      color: "duo-violet",
      lessons: [
        {
          id: "les-u12-vocab",
          title: "Key Terms",
          description: "Vocabulary from Galactic Portraits as Ekphrasis.",
          icon: "BookOpen",
          slides: [
            {
              id: "v-ekphrasis",
              type: "word_card",
              content: "Vocabulary",
              wordCard: {
                word: "Ekphrasis",
                translation: "A literary description or commentary on a visual work of art",
                context: "The literary form used by Sen to respond to JWST images.",
                example: "Sen's poems are ekphrastic responses to the first photographs from the James Webb Space Telescope."
              }
            },
            {
              id: "v-nebula",
              type: "word_card",
              content: "Vocabulary",
              wordCard: {
                word: "Nebula",
                translation: "A massive cloud of gas and dust in outer space, often the birthplace of stars",
                context: "Key astronomical image responded to in the essay.",
                example: "The Carina Nebula is the birthplace and graveyard for the Milky Way's largest stars."
              }
            },
            {
              id: "v-fractals",
              type: "word_card",
              content: "Vocabulary",
              wordCard: {
                word: "Fractals",
                translation: "Complex geometric patterns self-similar at different scales, found in nature",
                context: "Used to describe patterns in both human anatomy and galactic structures.",
                example: "The beauty we see on the galactic scale is replicated at the microscopic level — fractals in human organs."
              }
            }
          ]
        }
      ]
    }
  ]
};

import { Unit } from '../../types';

export const UNIT_60_1_SUMMARY: Unit = {
  id: "unit-60-1-summary",
  title: "Section 60.1 Summary",
  description: "Comprehensive Review of Ayat 1-9",
  color: "duo-orange",
  lessons: [
    {
      id: "les-sum-60-1-1",
      title: "Recap: Hatib's Incident (Ayat 1-3)",
      description: "Review of loyalty and espionage",
      icon: "Scroll",
      slides: [
        {
          id: "sum-1-ayah",
          type: "ayah",
          title: "The Core Command",
          arabicText: "يَا أَيُّهَا الَّذِينَ آمَنُوا لَا تَتَّخِذُوا عَدُوِّي وَعَدُوَّكُمْ أَوْلِيَاءَ",
          translation: "O you who have believed, do not take My enemies and your enemies as allies..."
        },
        {
          id: "sum-1-tafheem",
          type: "quiz",
          title: "Tafheem Recall",
          content: "Did Hatib's act of espionage automatically make him an apostate (Murtadd)?",
          options: [
            { id: "A", text: "No, it is a major sin but does not constitute disbelief if the core faith remains.", isCorrect: true, explanation: "He retained his faith, and the Quran addressed him as a believer." },
            { id: "B", text: "Yes, espionage immediately cancels faith.", isCorrect: false, explanation: "Jurists agree it is treason, but not necessarily Kufr (disbelief)." }
          ]
        },
        {
          id: "sum-1-reflect",
          type: "quiz",
          title: "Reflection Recall",
          content: "Why does Ayah 3 remind us of the Day of Resurrection?",
          options: [
            { id: "A", text: "To remind us that committing sins for the sake of family is futile, because family won't save us on Judgment Day.", isCorrect: true, explanation: "Every soul will bear its own burden." },
            { id: "B", text: "To show that all families go to heaven together.", isCorrect: false, explanation: "Relationships won't benefit you if they led you to sin." }
          ]
        }
      ]
    },
    {
      id: "les-sum-60-1-2",
      title: "Recap: Ibrahim's Example (Ayat 4-6)",
      description: "Review of Uswah and Fitnah",
      icon: "Star",
      slides: [
        {
          id: "sum-2-ayah",
          type: "ayah",
          title: "The Beautiful Example",
          arabicText: "قَدْ كَانَتْ لَكُمْ أُسْوَةٌ حَسَنَةٌ فِي إِبْرَاهِيمَ وَالَّذِينَ مَعَهُ",
          translation: "There is indeed an excellent example (Uswatun Hasanatun) for you in Abraham and his Companions..."
        },
        {
          id: "sum-2-tafheem",
          type: "quiz",
          title: "Tafheem Recall: The Exception",
          content: "We are told to follow everything Ibrahim did in this Ayah, EXCEPT one thing. What was the exception?",
          options: [
            { id: "A", text: "His physical migration to another land.", isCorrect: false, explanation: "Migration is a Sunnah." },
            { id: "B", text: "His prayer for the forgiveness of his polytheist father.", isCorrect: true, explanation: "He only did this due to a prior promise, but stopped once he realized his father was Allah's enemy." }
          ]
        },
        {
          id: "sum-2-vocab",
          type: "fill_in_blank",
          title: "Vocabulary Recall",
          content: "The believers pray: 'O our Lord, make us not a ___ (Fitnah) for those who disbelieve.'",
          blankAnswer: "test"
        }
      ]
    },
    {
      id: "les-sum-60-1-3",
      title: "Recap: Justice & Kindness (Ayat 7-9)",
      description: "Review of treating non-Muslims",
      icon: "Scale",
      slides: [
        {
          id: "sum-3-ayah",
          type: "ayah",
          title: "The Rule of Justice",
          arabicText: "لَّا يَنْهَاكُمُ اللَّهُ عَنِ الَّذِينَ لَمْ يُقَاتِلُوكُمْ فِي الدِّينِ... أَن تَبَرُّوهُمْ وَتُقْسِطُوا إِلَيْهِمْ",
          translation: "Allah does not forbid you from those who do not fight you because of religion... to deal justly and kindly with them."
        },
        {
          id: "sum-3-tafheem",
          type: "quiz",
          title: "Tafheem Recall",
          content: "Which historical incident perfectly illustrated Ayah 8?",
          options: [
            { id: "A", text: "Hatib's letter to the Quraish.", isCorrect: false, explanation: "That was the context for Ayat 1-3." },
            { id: "B", text: "Asma bint Abu Bakr receiving her pagan mother and treating her kindly.", isCorrect: true, explanation: "The Prophet confirmed that serving a non-hostile pagan parent is permissible." }
          ]
        },
        {
          id: "sum-3-match",
          type: "match_the_following",
          title: "Final Vocabulary Challenge",
          content: "Match the key terms from Section 60.1",
          matchPairs: [
            { id: "1", left: "أُسْوَةٌ حَسَنَةٌ", right: "Excellent example" },
            { id: "2", left: "فِتْنَةً", right: "A test / trial" },
            { id: "3", left: "تَبَرُّوهُمْ", right: "You treat them kindly" },
            { id: "4", left: "تُقْسِطُوا", right: "You act equitably" },
            { id: "5", left: "مَّوَدَّةً", right: "Love / Affection" }
          ]
        }
      ]
    }
  ]
};
import { Unit } from '../../types';

export const UNIT_60_2_4_SURAH_SUMMARY: Unit = {
  id: "unit-60-2-4",
  title: "Surah Al-Mumtahinah: Final Review",
  description: "Comprehensive Module Wrap-up",
  color: "duo-violet",
  lessons: [
    {
      id: "surah-sum-1",
      title: "Surah Theme & Vocab",
      description: "The Big Picture",
      icon: "Trophy",
      slides: [
        {
          id: "theme",
          type: "theory",
          title: "Surah Theme",
          content: "The theme of Surah Al-Mumtahinah is **Al-Wala wal-Bara** (Loyalty and Disassociation). It teaches that faith is the strongest bond, and while we must treat peaceful people with justice, we cannot share secrets or loyalty with those who fight Allah and His Messenger."
        },
        {
          id: "vocab-match",
          type: "match_the_following",
          title: "Surah Keywords",
          content: "Match the words you've learned throughout the module.",
          matchPairs: [
            { id: "1", left: "أَوْلِيَاءَ", right: "Allies" },
            { id: "2", left: "مُهَاجِرَاتٍ", right: "Emigrants" },
            { id: "3", left: "أُجُورَهُنَّ", right: "Their Mahr" },
            { id: "4", left: "مَعْرُوفٍ", right: "Recognized Good" }
          ]
        }
      ]
    },
    {
      id: "surah-sum-2",
      title: "Final Exam",
      description: "Testing all Tafheem facts",
      icon: "Award",
      slides: [
        {
          id: "final-1",
          type: "quiz",
          title: "Hatib's Motivation",
          content: "According to Maududi, why did Hatib write the letter?",
          options: [
            { id: "a", text: "To protect his family who lacked tribal support in Makkah.", isCorrect: true, explanation: "Correct." }
          ]
        },
        {
          id: "final-2",
          type: "fill_in_blank",
          title: "The Examinee",
          content: "The title of the Surah, Al-Mumtahinah, means the ___ Woman.",
          blankAnswer: "Examined"
        }
      ]
    }
  ]
};
import { Unit } from '../../types';

export const UNIT_60_2_3_SECTION_SUMMARY: Unit = {
  id: "unit-60-2-3",
  title: "Section 60.2 Summary",
  description: "Testing & The Pledge",
  color: "duo-orange",
  lessons: [
    {
      id: "sum-60-2-1",
      title: "Summary Ayah 10-11",
      description: "Legal status of migrants",
      icon: "CheckCircle",
      slides: [
        {
          id: "s1",
          type: "ayah",
          arabicText: "فَلَا تَرْجِعُوهُنَّ إِلَى الْكُفَّارِ",
          translation: "...do not return them to the disbelievers."
        },
        {
          id: "s2",
          type: "quiz",
          title: "Fact Check",
          content: "True or False: If a migrant woman was found to be a believer, the Prophet was commanded to return her to Makkah to fulfill the treaty.",
          options: [
            { id: "f", text: "False", isCorrect: true, explanation: "Believing women were forbidden to be returned to hostile kuffar." }
          ]
        }
      ]
    },
    {
      id: "sum-60-2-2",
      title: "Summary Ayah 12-13",
      description: "Bay'ah & Loyalty",
      icon: "CheckCircle",
      slides: [
        {
          id: "s3",
          type: "ayah",
          arabicText: "وَلَا يَعْصِينَكَ فِي مَعْرُوفٍ",
          translation: "...and they will not disobey you in what is good."
        }
      ]
    }
  ]
};
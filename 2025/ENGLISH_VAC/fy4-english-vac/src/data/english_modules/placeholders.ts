import { Section } from '../../types';

// Helper to quickly generate placeholders for syllabus units
const createPlaceholder = (id: string, title: string, desc: string): Section => ({
  id,
  title,
  description: desc,
  color: "duo-gray",
  units: [
    {
      id: `${id}-u1`,
      title: "Coming Soon",
      description: "Under construction",
      color: "duo-gray",
      lessons: [
        {
          id: `${id}-l1`,
          title: "Overview",
          description: "Pending implementation",
          icon: "Lock",
          slides: [
            { 
              id: "s1", 
              type: "theory", 
              title: "Coming Soon", 
              content: "This unit will be unlocked and updated shortly." 
            }
          ]
        }
      ]
    }
  ]
});

// Module 1 Placeholders
export const SEC_U1 = createPlaceholder("sec-u1", "Unit 1: Integrating Human Rights...", "UNSDG Document");
export const SEC_U2 = createPlaceholder("sec-u2", "Unit 2: On The Rule of the Road", "by A.G. Gardiner");
export const SEC_U4 = createPlaceholder("sec-u4", "Unit 4: I am a Cat", "Dir. Kon Ichikawa");

// Module 2 Placeholders
export const SEC_U5 = createPlaceholder("sec-u5", "Unit 5: The Self-Unseeing", "by Thomas Hardy");
export const SEC_U6 = createPlaceholder("sec-u6", "Unit 6: Karma", "by Khushwant Singh");
export const SEC_U7 = createPlaceholder("sec-u7", "Unit 7: In the Name of Science", "by Lori Alexander");
export const SEC_U8 = createPlaceholder("sec-u8", "Unit 8: The Boy Who Harnessed the Wind", "Dir. Chiwetel Ejiofo");

// Module 3 Placeholders
export const SEC_U9 = createPlaceholder("sec-u9", "Unit 9: The Yellow Wallpaper", "by Charlotte Perkins Gilman");
export const SEC_U10 = createPlaceholder("sec-u10", "Unit 10: Don't be Beautiful", "by Nikita Gill");
export const SEC_U11 = createPlaceholder("sec-u11", "Unit 11: The Biology of Gender", "by Karissa Sanbonmatsu");
export const SEC_U12 = createPlaceholder("sec-u12", "Unit 12: Empowerment of Women...", "UN Women");

// Module 4 Placeholders
export const SEC_U13 = createPlaceholder("sec-u13", "Unit 13: Factories are Eyesores", "by Baldoon Dhingra");
export const SEC_U14 = createPlaceholder("sec-u14", "Unit 14: Stigma Shame and Silence", "by Kalpana Jain");
export const SEC_U15 = createPlaceholder("sec-u15", "Unit 15: A Long Walk to Water", "by Linda Sue Park");
export const SEC_U16 = createPlaceholder("sec-u16", "Unit 16: The Poisoned Bread", "by Bandhu Madhav");
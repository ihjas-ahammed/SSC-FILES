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

// Module 4 Placeholders
export const SEC_U16 = createPlaceholder("sec-u16", "Unit 16: The Poisoned Bread", "by Bandhu Madhav");
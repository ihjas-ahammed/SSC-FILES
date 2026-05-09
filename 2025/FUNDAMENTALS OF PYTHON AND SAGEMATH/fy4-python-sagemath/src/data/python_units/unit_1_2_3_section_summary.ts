import { Unit } from '../../types';

export const UNIT_1_2_3_SECTION_SUMMARY: Unit = {
  id: 'unit-1-2-3-section-summary',
  title: 'Section Summary',
  description: 'Consolidation of Array Programming and Vectorization.',
  color: 'duo-blue',
  lessons:[
    {
      id: 'l123-1-summary',
      title: 'Review: Arrays & Shapes',
      description: 'A look back at Unit 5.',
      icon: 'BookOpen',
      slides:[
        {
          id: 'l123-1-s1',
          type: 'theory',
          title: 'NumPy Paradigm',
          content: 'Python Lists are arrays of pointers to disparate objects in memory, which is slow. **NumPy Arrays** are contiguous blocks of homogeneous memory, which is fast.\n\nYou learned to generate them procedurally using `np.arange()` (which excludes the stop boundary based on step size) and `np.linspace()` (which includes the stop boundary based on node count), and you manipulated their geometry using `reshape()` without altering the underlying data.'
        }
      ]
    },
    {
      id: 'l123-2-summary',
      title: 'Review: Vectorized Logic',
      description: 'A look back at Unit 6.',
      icon: 'BookOpen',
      slides:[
        {
          id: 'l123-2-s1',
          type: 'theory',
          title: 'Mathematical Broadcast',
          content: 'The core efficiency of NumPy lies in **Vectorization**. By passing arrays directly into native `np` math functions, you bypass the Python interpreter\'s looping overhead, executing the mathematics at C-level speeds.\n\nFor logic that doesn\'t exist natively in NumPy, you learned to construct Python `def` functions and wrap them in `np.vectorize()` to grant them the same array-broadcasting superpower.'
        }
      ]
    }
  ]
};
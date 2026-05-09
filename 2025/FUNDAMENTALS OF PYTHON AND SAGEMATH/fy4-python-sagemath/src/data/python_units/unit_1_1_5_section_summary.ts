import { Unit } from '../../types';

export const UNIT_1_1_5_SECTION_SUMMARY: Unit = {
  id: 'unit-1-1-5-section-summary',
  title: 'Section Summary',
  description: 'Consolidation of Introductory Python paradigms.',
  color: 'duo-blue',
  lessons:[
    {
      id: 'lesson-summary-1',
      title: 'Review: Basics & Typed Data',
      description: 'A look back at Unit 1.',
      icon: 'BookOpen',
      slides:[
        {
          id: 'sum-1-s1',
          type: 'theory',
          title: 'Dynamic Typing & Operators',
          content: 'Python strips away explicit type declarations (`int x = 5`), deferring to the Interpreter to assess types dynamically at runtime. This fluidity allows rapid development but places the onus on the programmer to understand **Type Casting** (e.g., preventing errors when concatenating strings and integers) and strict adherence to **Operator Precedence** (PEMDAS equivalent in Python).'
        }
      ]
    },
    {
      id: 'lesson-summary-2',
      title: 'Review: Memory & Mutability',
      description: 'A look back at Unit 2.',
      icon: 'BookOpen',
      slides:[
        {
          id: 'sum-2-s1',
          type: 'theory',
          title: 'Data Structures',
          content: 'The dividing line between Python data structures is **Mutability**. \n\nStrings and Tuples are locked in memory (Immutable) — you can slice them to read, but you cannot overwrite an index. \n\nLists, however, are Mutable arrays of references, allowing dynamic memory updates (`a[0] = "new"`).'
        }
      ]
    },
    {
      id: 'lesson-summary-3',
      title: 'Review: Control Flow',
      description: 'A look back at Unit 3.',
      icon: 'BookOpen',
      slides:[
        {
          id: 'sum-3-s1',
          type: 'theory',
          title: 'Algorithmic Control',
          content: 'Control structures allow non-linear code execution. \n\n`if/elif/else` controls boolean-based branching. \n`while` loops continue until a condition degrades to False. \n`for` loops exhaust a finite sequence (like a List or `range()` object). \n\nAll of these structural blocks are strictly delimited by a colon `:` and standardized whitespace indentation.'
        }
      ]
    },
    {
      id: 'lesson-summary-4',
      title: 'Review: Modular Abstraction',
      description: 'A look back at Unit 4.',
      icon: 'BookOpen',
      slides:[
        {
          id: 'sum-4-s1',
          type: 'theory',
          title: 'Functions & Matrices',
          content: 'To prevent code duplication, logic is abstracted into `def` functions. Variables within have local scope unless defined otherwise. \n\nWe also introduced `import` protocols for leveraging libraries, File I/O for saving state, and utilized nested List arrays `[[x,y], [a,b]]` to map mathematical matrices into computational memory.'
        }
      ]
    }
  ]
};
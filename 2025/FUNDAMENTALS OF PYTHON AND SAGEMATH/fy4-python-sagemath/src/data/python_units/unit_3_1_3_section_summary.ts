import { Unit } from '../../types';

export const UNIT_3_1_3_SECTION_SUMMARY: Unit = {
  id: 'unit-3-1-3-section-summary',
  title: 'Section Summary',
  description: 'Consolidating SymPy and Symbolic Computing.',
  color: 'duo-blue',
  lessons:[
    {
      id: 'l313-1-summary',
      title: 'Review: Symbolic Representation',
      description: 'A look back at Unit 11.',
      icon: 'BookOpen',
      slides:[
        {
          id: 'l313-1-s1',
          type: 'theory',
          title: 'The Symbolic Paradigm',
          content: 'Unlike standard Python programming where variables map directly to memory addresses holding binary floats, **SymPy** forces Python to treat variables mathematically.\n\nBy explicitly declaring `x = sp.symbols(\'x\')`, you construct an abstract expression tree. This allows operations like `sp.expand()`, `sp.factor()`, and `sp.collect()` to manipulate the algebraic structure without ever evaluating it to a physical number.'
        }
      ]
    },
    {
      id: 'l313-2-summary',
      title: 'Review: Calculus & Precision',
      description: 'A look back at Units 12 & 13.',
      icon: 'BookOpen',
      slides:[
        {
          id: 'l313-2-s1',
          type: 'theory',
          title: 'Exact Analytical Math',
          content: 'With the algebraic tree constructed, SymPy can perform exact mathematical operations like `sp.diff()` and `sp.integrate()` using algorithmic calculus rules.\n\nOnly at the absolute final stage of your script should you ever collapse the exact symbolic tree into a numerical approximation, using the `.evalf()` method to generate a highly precise floating-point number.'
        }
      ]
    }
  ]
};
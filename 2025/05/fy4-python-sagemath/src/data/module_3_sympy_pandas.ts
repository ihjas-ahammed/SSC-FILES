import { Module } from '../types';
import { SECTION_3_1_SYMPY } from './section_3_1_sympy';
import { SECTION_3_2_PANDAS } from './section_3_2_pandas';

export const MODULE_3_SYMPY_PANDAS: Module = {
  id: 'module-3-sympy-pandas',
  title: 'Module III: Introduction to SymPy and Pandas',
  description: 'Symbolic computation with SymPy and data analysis with Pandas.',
  sections:[
    SECTION_3_1_SYMPY,
    SECTION_3_2_PANDAS
  ],
  moduleSummary:[
    {
      id: 'mod-sum-sympy-1',
      type: 'theory',
      title: 'Mental Model: Exact vs Approximate',
      content: 'In standard Python and NumPy, numbers are evaluated immediately into binary floating-point representations. **SymPy** flips this paradigm, keeping variables abstract and un-evaluated, preserving absolute mathematical precision until you explicitly request a numeric evaluation via `.evalf()`.'
    },
    {
      id: 'mod-sum-sympy-2',
      type: 'theory',
      title: 'Mental Model: Analytical Calculus',
      content: 'By representing equations as expression trees instead of numeric arrays, SymPy is able to perform analytical calculus — taking infinite precision derivatives (`sp.diff()`), evaluating bounds over infinity (`sp.oo`), and solving integrals (`sp.integrate()`) symbolically just like a human mathematician.'
    },
    {
      id: 'mod-sum-pandas-1',
      type: 'theory',
      title: 'Mental Model: Relational Alignment',
      content: 'While SymPy handles abstract algebra, **Pandas** tackles the chaotic reality of tabular data. The defining characteristic of a Pandas Series or DataFrame is **Automatic Index Alignment**. When you manipulate data, Pandas matches row labels and column headers, intelligently filling missing gaps with `NaN` rather than throwing size mismatch errors.'
    },
    {
      id: 'mod-sum-pandas-2',
      type: 'theory',
      title: 'Mental Model: Aggregation Pipelines',
      content: 'With Pandas, you moved away from manually iterating through data. You learned to construct highly efficient aggregation pipelines: filtering via conditional masks or `.query()`, aggregating categories via `.groupby()`, and collapsing dimensions using mathematical reductions like `.sum()` and `.mean()`.'
    }
  ]
};
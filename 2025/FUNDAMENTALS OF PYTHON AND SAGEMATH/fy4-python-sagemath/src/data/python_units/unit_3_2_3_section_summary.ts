import { Unit } from '../../types';

export const UNIT_3_2_3_SECTION_SUMMARY: Unit = {
  id: 'unit-3-2-3-section-summary',
  title: 'Section Summary',
  description: 'Consolidating Pandas tabular data analysis.',
  color: 'duo-blue',
  lessons:[
    {
      id: 'l323-1-summary',
      title: 'Review: Series & DataFrames',
      description: 'A look back at Unit 14 & 15.',
      icon: 'BookOpen',
      slides:[
        {
          id: 'l323-1-s1',
          type: 'theory',
          title: 'The Tabular Paradigm',
          content: 'While NumPy relies on strict, unlabelled mathematical matrices, **Pandas** bridges the gap to messy, real-world data.\n\nThe 1D **Series** and 2D **DataFrame** introduce explicit *labels* (Index and Columns). The most powerful feature of this paradigm is **Auto-Alignment**: Pandas will mathematically align data based on matching row/column labels, safely injecting `NaN` where data is missing, rather than crashing.'
        }
      ]
    },
    {
      id: 'l323-2-summary',
      title: 'Review: Data Pipelines',
      description: 'A look back at Unit 16.',
      icon: 'BookOpen',
      slides:[
        {
          id: 'l323-2-s1',
          type: 'theory',
          title: 'Pipelines and Grouping',
          content: 'You learned to construct analytical pipelines. Instead of looping over rows, you perform vectorized queries: filtering with `df[df["Col"] == val]`, grouping classifications with `.groupby()`, and immediately collapsing data into metrics via aggregations like `.sum()` and `.mean()`. \n\nPandas also integrates directly with Matplotlib, allowing you to plot these aggregations instantaneously via `df.plot()`.'
        }
      ]
    }
  ]
};
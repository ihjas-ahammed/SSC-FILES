import { Unit } from '../../types';

export const UNIT_3_2_1_PANDAS_STRUCTURES: Unit = {
  id: 'unit-3-2-1-pandas-structures',
  title: '321: Pandas Data Structures',
  description: 'Series, DataFrames, indexing, and tabular data manipulation.',
  color: 'duo-blue',
  lessons:[
    // L1: Series
    {
      id: 'l321-1-theory',
      title: 'L1: Pandas Series',
      description: '1D arrays with explicit index labels.',
      icon: 'ListOrdered',
      slides:[
        {
          id: 'l321-1-s1',
          type: 'quiz',
          title: 'Priming: Arrays vs Tabular Data',
          content: 'NumPy arrays are incredibly fast but have one major limitation when dealing with real-world data like spreadsheets. What do you think it is?',
          options:[
            { id: 'a', text: 'They cannot be used for mathematical operations.', isCorrect: false, explanation: 'NumPy is explicitly designed for mathematical operations.' },
            { id: 'b', text: 'They only support numerical indices (0, 1, 2) and cannot hold heterogeneous data easily.', isCorrect: true, explanation: 'Real-world data has row labels (like dates or names) and column headers. Pandas was built on top of NumPy to provide this spreadsheet-like structure.' }
          ]
        },
        {
          id: 'l321-1-s2',
          type: 'theory',
          title: 'Pandas Series',
          content: 'A Pandas **Series** is a one-dimensional array of elements. Unlike a NumPy array, a Series has an explicit **index**.\n\n```python\nimport pandas as pd\nser = pd.Series([4, 12, 55, 100])\n```\nIf not specified, the index defaults to integers ranging from 0 to N-1. \n\nYou can think of a Series as a fixed-length, ordered dictionary, mapping index values to data values: `pd.Series([10, 20], index=["a", "b"])`.'
        },
        {
          id: 'l321-1-s3',
          type: 'quiz',
          title: 'Concept Check: Duplicate Indices',
          content: 'Unlike a Python Dictionary, can a Pandas Series contain duplicate index labels (e.g., two rows both labeled "a")?',
          options:[
            { id: 'a', text: 'Yes, Pandas indices can contain duplicate labels.', isCorrect: true, explanation: 'Unlike dictionaries which require unique keys, Pandas allows duplicate index labels. Operations on that label will return all matching rows.' },
            { id: 'b', text: 'No, an index must be strictly unique.', isCorrect: false, explanation: 'Pandas does not enforce uniqueness on the index by default.' }
          ]
        },
        {
          id: 'l321-1-s4',
          type: 'python_example',
          title: 'Interactive Sandbox: Series Alignment',
          content: 'Notice what happens when you add two Series with misaligned indices: Pandas aligns the data by the index label! Missing labels become `NaN`.',
          code: "import pandas as pd\n\ns1 = pd.Series([10, 20, 30], index=[0, 1, 2])\ns2 = pd.Series([12, 13, 14], index=[1, 2, 3])\n\n# Watch the NaN propagate!\nprint(s1 + s2)"
        }
      ]
    },
    // L2: Reindexing and Name attributes
    {
      id: 'l321-2-definition',
      title: 'L2: Reindexing & Names',
      description: 'Altering indices and handling NaN.',
      icon: 'Tag',
      slides:[
        {
          id: 'l321-2-s1',
          type: 'theory',
          title: 'Handling Indices and Missing Data',
          content: 'You can alter the number of indices using `.reindex()`. New indices will be filled with `NaN` (Not a Number).\n\n*   `pd.isnull(ser)` tests for NaN values.\n*   `ser.dropna()` drops labels with missing data.\n\nFurthermore, the Series object itself and its index can have a name attribute:\n`s.name = "ages"`\n`s.index.name = "names"`'
        },
        {
          id: 'l321-2-s2',
          type: 'fill_in_blank',
          title: 'Syntax Drill',
          content: 'To remove any rows containing `NaN` from a Series `s`, you call the method `s.___()`',
          blankAnswer: 'dropna'
        }
      ]
    },
    // L3: DataFrame Theory
    {
      id: 'l321-3-theory',
      title: 'L3: Pandas DataFrame',
      description: '2D tabular data structures.',
      icon: 'Grid',
      slides:[
        {
          id: 'l321-3-s1',
          type: 'theory',
          title: 'The DataFrame',
          content: 'A **DataFrame** represents a tabular, spreadsheet-like data structure containing an ordered collection of columns. Each column can be a different data type.\n\nIt has both a row index and a column index. You can think of a DataFrame as a dictionary of Series all sharing the same index.'
        }
      ]
    },
    // L4: From NumPy Array
    {
      id: 'l321-4-example',
      title: 'L4: DataFrame from NumPy',
      description: 'Converting arrays to DataFrames.',
      icon: 'ArrowRightCircle',
      slides:[
        {
          id: 'l321-4-s1',
          type: 'example_q',
          title: 'Problem: Matrix to DataFrame',
          content: 'Given a 2D NumPy array of shape 5x4, how do we convert it into a Pandas DataFrame with explicit column names ["A", "B", "C", "D"] and row labels?'
        },
        {
          id: 'l321-4-s2',
          type: 'solution',
          title: 'Algorithmic Tracing',
          content: 'Construct the DataFrame.',
          interactiveSteps:[
            {
              prompt: 'First, generate the 5x4 NumPy array.',
              options:[
                { id: 'a', text: 'data = np.arange(20).reshape(5, 4)', isCorrect: true, explanation: 'This creates a 2D matrix of numbers 0-19.' }
              ]
            },
            {
              prompt: 'Next, wrap it in the DataFrame constructor.',
              options:[
                { id: 'a', text: 'df = pd.DataFrame(data, columns=["A", "B", "C", "D"], index=["a", "b", "c", "d", "e"])', isCorrect: true, explanation: 'Pass the data, the column headers, and the row indices.' }
              ]
            }
          ]
        },
        {
          id: 'l321-4-s3',
          type: 'python_example',
          title: 'Interactive Sandbox',
          content: 'Test the DataFrame creation.',
          code: "import numpy as np\nimport pandas as pd\n\ndata = np.arange(20).reshape(5,4)\ndf = pd.DataFrame(data, columns=['A', 'B', 'C', 'D'], index=['a', 'b', 'c', 'd', 'e'])\n\nprint(df)"
        }
      ]
    },
    // L5: From Dictionary of Series
    {
      id: 'l321-5-example',
      title: 'L5: From Dictionary of Series',
      description: 'Combining independent Series.',
      icon: 'Combine',
      slides:[
        {
          id: 'l321-5-s1',
          type: 'theory',
          title: 'Dictionaries to DataFrames',
          content: 'A DataFrame can be created by combining Pandas Series objects, each forming a column. \n\nWe create a Python Dictionary where the **keys** are the column names, and the **values** are the Series objects.\n\n`d = { "one": s1, "two": s2 }`\n`df = pd.DataFrame(d)`'
        },
        {
          id: 'l321-5-s2',
          type: 'quiz',
          title: 'Alignment Check',
          content: 'If `s1` has an index `["a", "b"]` and `s2` has an index `["b", "c"]`, what happens when combined into a DataFrame?',
          options:[
            { id: 'a', text: 'The DataFrame takes the union of the indices["a", "b", "c"]. Missing values become NaN.', isCorrect: true, explanation: 'Pandas auto-aligns data. Row "a" will have NaN in column "two", and row "c" will have NaN in column "one".' },
            { id: 'b', text: 'It throws a size mismatch error.', isCorrect: false, explanation: 'Unlike strictly typed arrays, Pandas dynamically aligns and fills missing data.' }
          ]
        }
      ]
    },
    // L6: CSV I/O
    {
      id: 'l321-6-theory',
      title: 'L6: Loading & Saving CSVs',
      description: 'Working with comma-separated values.',
      icon: 'FileSpreadsheet',
      slides:[
        {
          id: 'l321-6-s1',
          type: 'theory',
          title: 'CSV Files',
          content: 'Most of the time, Pandas is used for analyzing data stored in files. \n\n*   **Saving:** `df.to_csv("data.csv")`\n*   **Loading:** `df = pd.read_csv("data.csv")`\n\nWhen reading a CSV, Pandas automatically adds a new numeric index column. To avoid this and use an existing column in the file as the index, specify `index_col`:\n`pd.read_csv("data.csv", index_col="I")`'
        },
        {
          id: 'l321-6-s2',
          type: 'python_example',
          title: 'Interactive Sandbox: CSV Mock',
          content: 'Because we are in a browser, we use `io.StringIO` to simulate reading a CSV file from your hard drive.',
          code: "import pandas as pd\nimport io\n\n# Simulating a CSV file in memory\ncsv_data = '''I,A,B,C,D\na,0,1,2,3\nb,4,5,6,7\n'''\n\n# Read the simulated file, setting column 'I' as the index\ndf = pd.read_csv(io.StringIO(csv_data), index_col='I')\n\nprint(df)"
        }
      ]
    },
    // L7: Column and Row Operations
    {
      id: 'l321-7-theory',
      title: 'L7: Indexing, Slicing & Queries',
      description: 'Selecting subsets of data.',
      icon: 'Search',
      slides:[
        {
          id: 'l321-7-s1',
          type: 'theory',
          title: 'Column & Row Selection',
          content: '**Columns:**\nSelect a column as a Series: `df["A"]`\nCreate a column: `df["E"] = df.A + df.B`\nDelete a column: `del df["A"]` or `df.pop("A")`\n\n**Rows:**\nExtract by label name: `df.loc["b"]`\nExtract by row number: `df.iloc[1]`\nSlice rows: `df[1:3]`\nConditional selection: `df.query("A > 10")` or `df[df["A"] > 10]`'
        },
        {
          id: 'l321-7-s2',
          type: 'quiz',
          title: 'Concept Check: loc vs iloc',
          content: 'If you want to extract the 5th row of a DataFrame, regardless of what its string label is, which method do you use?',
          options:[
            { id: 'a', text: 'df.iloc[4]', isCorrect: true, explanation: '`iloc` stands for "integer location". The 5th row is at index 4.' },
            { id: 'b', text: 'df.loc[4]', isCorrect: false, explanation: '`loc` looks for the exact label "4". If the rows are labeled with letters, this will fail.' }
          ]
        },
        {
          id: 'l321-7-s3',
          type: 'fill_in_blank',
          title: 'Syntax Drill',
          content: 'To filter a DataFrame `df` returning only rows where column B is exactly 5, you can use: `df.query("B ___ 5")`',
          blankAnswer: '=='
        }
      ]
    }
  ]
};
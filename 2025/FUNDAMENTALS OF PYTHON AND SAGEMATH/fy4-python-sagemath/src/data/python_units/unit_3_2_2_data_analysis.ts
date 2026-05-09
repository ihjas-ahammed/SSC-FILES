import { Unit } from '../../types';

export const UNIT_3_2_2_DATA_ANALYSIS: Unit = {
  id: 'unit-3-2-2-data-analysis',
  title: '322: Data Analysis',
  description: 'Applying Pandas to real-world datasets.',
  color: 'duo-violet',
  lessons:[
    {
      id: 'l322-1-theory',
      title: 'L8: Practical Pandas',
      description: 'From loading to insights.',
      icon: 'BarChart',
      slides:[
        {
          id: 'l322-1-s1',
          type: 'theory',
          title: 'Data Science Workflow',
          content: 'The standard Pandas workflow involves:\n1. **Ingestion:** Loading data via `read_csv`.\n2. **Cleaning:** Dropping NaNs or setting correct `index_col` variables.\n3. **Analysis:** Using `.sum()`, `.mean()`, `.groupby()`, or `.query()` to extract insights.\n4. **Visualization:** Chaining `.plot()` directly onto the DataFrame to interface with Matplotlib automatically.'
        }
      ]
    },
    {
      id: 'l322-2-example',
      title: 'L9: Temperature Data Analysis',
      description: 'Plotting time-series data.',
      icon: 'Thermometer',
      slides:[
        {
          id: 'l322-2-s1',
          type: 'example_q',
          title: 'Problem: Climate Plot',
          content: 'Given a CSV of monthly average temperatures from 1901 to 2017, how can we plot the temperature variations for specific months (e.g., MAY and FEB) over the years?'
        },
        {
          id: 'l322-2-s2',
          type: 'solution',
          title: 'Algorithmic Tracing',
          content: 'Construct the plotting pipeline.',
          interactiveSteps:[
            {
              prompt: 'When reading the CSV, which column should be set as the index so the X-axis plots correctly as time?',
              options:[
                { id: 'a', text: "index_col='YEAR'", isCorrect: true, explanation: 'Setting the year as the index ensures Matplotlib uses it for the X-axis.' }
              ]
            },
            {
              prompt: 'How do you select multiple columns (MAY and FEB) simultaneously and plot them?',
              options:[
                { id: 'a', text: "df[['MAY', 'FEB']].plot()", isCorrect: true, explanation: 'Pass a list of column names `[\'MAY\', \'FEB\']` to the DataFrame indexer, then chain `.plot()`.' },
                { id: 'b', text: "df['MAY', 'FEB'].plot()", isCorrect: false, explanation: 'You need double brackets: outer brackets for indexing, inner brackets for the list of columns.' }
              ]
            }
          ]
        },
        {
          id: 'l322-2-s3',
          type: 'python_example',
          title: 'Interactive Sandbox: Temperature',
          content: 'Plotting a subset of columns. (Using mock CSV data for the sandbox).',
          code: "import pandas as pd\nimport matplotlib.pyplot as plt\nimport io\n\n# Mocking temperature data\ncsv_data = '''YEAR,JAN,FEB,MAY\n1901,20.5,22.1,30.2\n1902,21.0,23.5,31.5\n1903,19.8,21.9,29.8\n1904,20.1,22.0,30.5\n'''\n\ndf = pd.read_csv(io.StringIO(csv_data), index_col='YEAR')\n\n# Plot specific columns\ndf[['MAY', 'FEB']].plot(marker='o')\nplt.title('Average Temperatures')\nplt.ylabel('Temp (C)')\nprint('Rendering plot...')\n# The plot appears below automatically."
        }
      ]
    },
    {
      id: 'l322-3-example',
      title: 'L10: Electoral Bond Data',
      description: 'Grouping and aggregating complex datasets.',
      icon: 'Briefcase',
      slides:[
        {
          id: 'l322-3-s1',
          type: 'example_q',
          title: 'Problem: Financial Grouping',
          content: 'Suppose we have a dataset of political donations. We want to find out the top 5 parties that received the highest total amount of money from a specific firm (e.g., "Megha Eng").'
        },
        {
          id: 'l322-3-s2',
          type: 'solution',
          title: 'Algorithmic Tracing',
          content: 'Build the analytical query.',
          interactiveSteps:[
            {
              prompt: 'First, filter the DataFrame for rows containing the firm. Which string method works best?',
              options:[
                { id: 'a', text: ".str.contains('Megha Eng')", isCorrect: true, explanation: 'This method allows substring matching inside a Series of strings.' }
              ]
            },
            {
              prompt: 'Next, to sum the "Amount" per "Party", we use the groupby function. What is the correct syntax?',
              options:[
                { id: 'a', text: "df.groupby('Party')['Amount'].sum()", isCorrect: true, explanation: 'Group by the Party column, extract the Amount column, and apply the sum aggregation.' }
              ]
            },
            {
              prompt: 'Finally, how do we get the top 5 results?',
              options:[
                { id: 'a', text: ".nlargest(5)", isCorrect: true, explanation: 'This returns the top 5 highest values in the Series.' }
              ]
            }
          ]
        },
        {
          id: 'l322-3-s3',
          type: 'python_example',
          title: 'Interactive Sandbox: Bond Data',
          content: 'Test the grouping and aggregation pipeline.',
          code: "import pandas as pd\nimport io\n\ncsv_data = '''Firm,Party,Amount\nMegha Eng,Party A,100\nOther Corp,Party A,500\nMegha Eng,Party B,200\nMegha Eng,Party A,300\nMegha Eng,Party C,50\n'''\n\ndf = pd.read_csv(io.StringIO(csv_data))\n\n# 1. Filter by firm\nfirm_df = df[df['Firm'].str.contains('Megha Eng', na=False)]\n\n# 2. Group by party, sum, and sort\nresult = firm_df.groupby('Party')['Amount'].sum().nlargest(5)\n\nprint('Total received from Megha Eng:\\n')\nprint(result)"
        }
      ]
    }
  ]
};
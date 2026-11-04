# Python for Data Analysis: unit → book map

Books used, by module (from the syllabus book references):
- Module I (Python core): Nageswara Rao, *Core Python Programming* (Book 1) and Eric Matthes, *Python Crash Course* (Book 2, Chapter 8, functions). Both downloaded from BOOKS5.
- Module II and III (pandas, visualisation): Thareja (Book 4) is not on disk or in BOOKS5. Substitute: Wes McKinney, *Python for Data Analysis* (on disk).
- Module IV (data file formats, Jupyter): the syllabus cites Nageswara Rao, *Machine Learning in Data Science using Python* (Book 3, chapter 12). Not on disk or in BOOKS5. The machine-learning part is covered with Géron, *Hands-On Machine Learning* (on disk), chapter 2. Data-format and Jupyter units use McKinney.

Page offsets: Core Python PDF = printed + 27 (checked: printed 53 = PDF 80). Matthes PDF = printed + 33 (checked: printed 134 = PDF 167). The Matthes edition on disk has chapter 8 at printed 133, while the syllabus gives pages 129–140, so units are cut by content.

## Module 1 — Python core (items 1–5)

| Unit | Syllabus content | Source | PDF pp | File |
|---|---|---|---|---|
| 1 | Variables, operators, numeric types, lists | Core Python ch. 3 (printed 46–62) and ch. 4 (printed 73–87) | 73–89; 100–114 | module-1/unit-1-datatypes-operators-lists.pdf |
| 2 | Tuples, sets, dictionaries; input and file operations | Core Python ch. 3 sets/tuples/mapping (printed 59–64); ch. 17 Files in Python (printed 441–451) | 86–91; 468–478 | module-1/unit-2-tuples-sets-dicts-files.pdf |
| 3 | Conditional and control statements | Core Python ch. 6 Control Statements (printed 117–139) | 144–166 | module-1/unit-3-control-statements.pdf |
| 4 | Functions: define, arguments, return values | Matthes ch. 8 Functions (printed 133–147) | 166–180 | module-1/unit-4-functions.pdf |
| 5 | NumPy arrays: creation, access, operations | Core Python ch. 7 Arrays in Python (printed 151–174) | 178–201 | module-1/unit-5-numpy-arrays.pdf |

The earlier McKinney Module I files are kept in `superseded-m1-mckinney/`.

## Module 2 — pandas dataframe (items 6–10)

| Unit | Syllabus content | Source | File |
|---|---|---|---|
| 6 | DataFrame creation | McKinney ch. 5 (5.1) | module-2/unit-6-dataframe-creation.pdf |
| 7, 18 | Attributes, pivot, sort; loc and iloc | McKinney ch. 5 (5.2) | module-2/unit-7-18-dataframe-attributes-pivot-sort-loc-iloc.pdf |
| 8 | Missing data | McKinney ch. 7 (7.1) | module-2/unit-8-missing-data.pdf |
| 9 | Statistical values, count, mode, covariance | McKinney ch. 5 (5.3) | module-2/unit-9-statistical-values-count-mode-covariance.pdf |
| 10 | Aggregation, grouping, wrangling, merging | McKinney ch. 7.2, 8.2, 10 | module-2/unit-10-aggregation-grouping-wrangling-merging.pdf |

## Module 3 — Visualisation (items 11–16)

| Unit | Syllabus content | Source | File |
|---|---|---|---|
| 11–12 | Bar chart, histogram, box plot, scatter | McKinney ch. 9.1–9.2 | module-3/unit-11-12-bar-histogram-box-scatter-matplotlib.pdf |
| 13–16 | Correlation, seaborn, heatmap, categorical plots | McKinney ch. 9.2 | module-3/unit-13-16-correlation-seaborn-heatmap-categorical.pdf |

## Module 4 — Data file formats and Jupyter (items 17–19)

| Unit | Syllabus content | Source | File |
|---|---|---|---|
| 17 | Series, DataFrames, csv and other formats | McKinney ch. 6.1 | module-4/unit-17-series-dataframes-data-file-formats.pdf |
| ML reference (no syllabus unit number; replaces Rao, Book 3) | Machine-learning reference for module IV (replaces Rao, Book 3) | Géron ch. 2 "End-to-End ML Project", pages 65–80 (get the data, data structure) | module-4/ml-reference-geron-chapter-2-get-data-data-structure.pdf |
| 19 | Jupyter notebooks, Anaconda, Colab | McKinney ch. 2.2 (IPython) | module-4/unit-19-jupyter-notebooks-ipython.pdf |

Syllabus: `syllabus.pdf` (copied from `SSC-V2/SEM5/PHY/PYTHON_FOR_DATA_ANALYSIS.pdf`).

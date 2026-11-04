/* Practice quizzes, one per unit. Answers are checked against Python 3 behaviour. Added after each unit's examples. */
(function () {
  const Q = {
  u1: [
    {q:'What does type(3.0) return?',o:['int','float','complex','str'],a:1,why:'3.0 has a decimal point, so it is a float.'},
    {q:'After a = [1, 2] and b = a, what happens to a when you run b.append(3)?',o:['a is unchanged','a is [1, 2, 3]','a raises an error','a is a copy'],a:1,why:'b and a are two names for one list, so the change shows in both.'},
    {q:'What is the value of 7 // 2?',o:['3.5','3','4','2'],a:1,why:'// is floor division. It gives the whole part of the quotient.'},
    {q:'What does int("1c2", 16) return?',o:['1c2','450','194','28'],a:1,why:'1c2 in base 16 equals 1×256 + 12×16 + 2 = 450.'},
    {q:'What is the value of True + True?',o:['True','2','1','Error'],a:1,why:'True counts as 1, so the sum is 2.'}
  ],
  u2: [
    {q:'Which type keeps its order and cannot be changed?',o:['list','tuple','set','dict'],a:1,why:'A tuple is a read-only sequence.'},
    {q:'What does set([1, 1, 2]) contain?',o:['[1, 1, 2]','{1, 2}','{1, 1, 2}','(1, 2)'],a:1,why:'A set holds each value once and has no order.'},
    {q:'Which open mode deletes the old contents of a file?',o:['r','a','w','x+'],a:2,why:'w writes a new file. It removes the old data first.'},
    {q:'After d = {10: "Kamal"} and del d[10], what is len(d)?',o:['0','1','10','Error'],a:0,why:'del removes the key and its value.'},
    {q:'Which statement closes a file automatically?',o:['close()','with open(...)','flush()','end'],a:1,why:'A with block closes the file when the block ends.'}
  ],
  u3: [
    {q:'What does range(30, 40, 2) produce?',o:['30 to 40','30, 32, 34, 36, 38','30, 31, 32','40, 38, 36'],a:1,why:'It starts at 30 and steps by 2. The stop value 40 is not included.'},
    {q:'What does break do in a loop?',o:['Skips one item','Leaves the loop','Restarts the loop','Pauses'],a:1,why:'break ends the loop. continue skips to the next item.'},
    {q:'What does 7 % 2 give?',o:['3','1','0','3.5'],a:1,why:'% gives the remainder of the division.'},
    {q:'What is printed by "for n in [4, 7]: print(n % 2 == 0)"?',o:['True then False','False then True','True then True','False then False'],a:0,why:'4 is even, so True. 7 is odd, so False.'},
    {q:'What must a loop body do so that a while loop ends?',o:['Print a value','Change the tested variable','Use a for loop','Import math'],a:1,why:'If the tested variable never changes, the loop never ends.'}
  ],
  u4: [
    {q:'Which keyword starts a function?',o:['func','function','def','fn'],a:2,why:'Python uses def.'},
    {q:'What does a function return if it has no return statement?',o:['0','None','""','Error'],a:1,why:'Python returns None when there is no return value.'},
    {q:'Which call uses a keyword argument?',o:['describe("Ravi", 25)','describe(name="Ravi", age=25)','describe("Ravi" 25)','describe[name]'],a:1,why:'A keyword argument has the form name=value.'},
    {q:'What does a default value do?',o:['It is required','It is used when no value is passed','It is always ignored','It makes the argument a list'],a:1,why:'A default is the value used when the caller leaves the argument out.'},
    {q:'What does a function get when a list is passed and the function changes it?',o:['A copy of the list','The same list, changed','Nothing changes','An error'],a:1,why:'Lists are passed by reference, so the change is seen by the caller.'}
  ],
  u5: [
    {q:'Which library gives n-dimensional arrays?',o:['array','numpy','math','random'],a:1,why:'numpy makes arrays of any dimension. The array module only makes one-dimensional arrays.'},
    {q:'What does np.linspace(0, 10, 5) return?',o:['[0, 5, 10]','[0, 2.5, 5, 7.5, 10]','[0, 2, 4, 6, 8]','[0, 10]'],a:1,why:'It makes 5 equal points from 0 to 10, both ends included.'},
    {q:'What is the shape of np.zeros((2, 3))?',o:['(3, 2)','(2, 3)','(6,)','(2,)'],a:1,why:'Two rows and three columns.'},
    {q:'Which function gives the sum of a NumPy array a?',o:['a.total()','a.sum()','sum.a()','a.add()'],a:1,why:'a.sum() adds all the elements.'},
    {q:'What does a[1, 2] give for a = np.array([[1,2,3],[4,5,6]])?',o:['2','5','6','4'],a:2,why:'Row 1 (second row) and column 2 (third column) give 6.'}
  ],
  u6: [
    {q:'What is a pandas DataFrame?',o:['A single list','A table with labelled rows and columns','A dictionary only','A plot'],a:1,why:'A DataFrame is a two-dimensional table.'},
    {q:'What is the index of pd.Series([4, 7], index=["a", "b"])?',o:['[0, 1]','["a", "b"]','[4, 7]','["4", "7"]'],a:1,why:'The index is the labels you gave.'},
    {q:'What does pd.DataFrame({"x": [1, 2]}) make?',o:['One row, two columns','Two rows, one column named x','A list','An error'],a:1,why:'Each key is a column. Each list gives the values down the rows.'},
    {q:'Which command gives the number of rows and columns?',o:['df.size','df.shape','df.len','df.count()'],a:1,why:'df.shape gives (rows, columns).'},
    {q:'What does df.loc["y", "b"] select?',o:['The row at position 1','The value in row label y, column b','The column b only','Nothing'],a:1,why:'loc uses labels.'}
  ],
  u7: [
    {q:'What is the difference between loc and iloc?',o:['loc uses labels, iloc uses positions','loc uses positions, iloc uses labels','They are the same','iloc only works on Series'],a:0,why:'loc uses labels. iloc uses positions starting at 0.'},
    {q:'Which expression keeps rows where b is greater than 4?',o:['df[b > 4]','df[df["b"] > 4]','df.b > 4','df.filter(4)'],a:1,why:'The condition is built on the column, then used to select rows.'},
    {q:'What does df.drop("y") do?',o:['Removes row y','Removes column y','Sorts by y','Renames y'],a:0,why:'drop removes the given labels from the index (rows) by default.'},
    {q:'Which operator joins two conditions so that both must be true?',o:['&','and only','|','+'],a:0,why:'Use & for and, and | for or, with each condition in brackets.'},
    {q:'What does df.pivot(...) do?',o:['Deletes rows','Turns values into a table with new rows and columns','Sorts the index','Makes a plot'],a:1,why:'pivot reshapes long data into a table.'}
  ],
  u8: [
    {q:'What value does pandas use for a missing number?',o:['0','NaN','None only','-1'],a:1,why:'NaN means not a number, and marks a missing value.'},
    {q:'Which method finds missing values?',o:['isna()','find_missing()','empty()','null()'],a:0,why:'isna() gives True where a value is missing.'},
    {q:'What does s.dropna() return?',o:['The missing values','A series with the missing values removed','A series of zeros','An error'],a:1,why:'dropna removes missing entries.'},
    {q:'What does s.fillna(0) do?',o:['Removes zeros','Replaces missing values with 0','Counts zeros','Sorts the values'],a:1,why:'fillna replaces missing values with the given value.'}
  ],
  u9: [
    {q:'Which method gives the middle value of a column?',o:['mean()','median()','mode()','var()'],a:1,why:'The median is the middle value when the values are sorted.'},
    {q:'What does s.value_counts() return?',o:['The sum','How often each value occurs','The unique values as a list','The mean'],a:1,why:'value_counts counts the occurrences of each value.'},
    {q:'Covariance near zero means what?',o:['The columns are identical','There is little linear relation','The columns are negative','The mean is zero'],a:1,why:'A covariance near zero shows little linear relation.'},
    {q:'What does s.unique() return for ["a","b","a"]?',o:['["a","b","a"]','["a","b"]','2','["a"]'],a:1,why:'unique returns each value once, in the order it first appears.'}
  ],
  u10: [
    {q:'What does df.groupby("key")["val"].sum() give?',o:['One total per group','One total for the whole table','A new table','An error'],a:0,why:'groupby splits rows by key, then applies the function to each group.'},
    {q:'Which merge keeps every row of the left table?',o:['inner','left','outer only','cross'],a:1,why:'A left merge keeps all left rows and fills the rest with NaN.'},
    {q:'What does pd.concat([a, b]) do?',o:['Joins on a column','Stacks the rows of a above b','Adds the columns','Multiplies them'],a:1,why:'concat stacks tables. merge joins them on keys.'},
    {q:'What does ignore_index=True do in concat?',o:['Deletes the index','Makes a new index from 0','Ignores missing values','Sorts the rows'],a:1,why:'It gives the result a fresh index.'}
  ],
  u11: [
    {q:'Which module draws plots in Python?',o:['matplotlib.pyplot','numpy.plot','pandas.draw','random.plot'],a:0,why:'matplotlib.pyplot is the usual drawing module.'},
    {q:'What does a histogram show?',o:['One point per pair of values','How many values fall in each bin','The order of values','Only the mean'],a:1,why:'A histogram counts the values in bins.'},
    {q:'Which plot shows the median and the quartiles?',o:['bar chart','box plot','scatter plot','pie chart'],a:1,why:'A box plot shows the median, the quartiles and the outliers.'}
  ],
  u13: [
    {q:'What does a correlation of -1 mean?',o:['Perfect positive relation','No relation','Perfect negative relation','The mean is -1'],a:2,why:'A value of -1 means that one column falls as the other rises.'},
    {q:'What does plt.imshow draw?',o:['A bar chart','A grid of coloured cells','A line','A pie'],a:1,why:'imshow draws a matrix of values as coloured cells, a heatmap.'},
    {q:'Which plot compares groups by their values?',o:['categorical plot','pie only','histogram only','scatter only'],a:0,why:'A categorical plot shows one value for each group.'}
  ],
  u12: [
    {q:'Which argument of plt.hist sets the number of bins?',o:['bins','count','size','n_bins'],a:0,why:'bins sets the number of bars in the histogram.'},
    {q:'What does a box plot show in the middle of the box?',o:['The mean','The median','The maximum','The sum'],a:1,why:'The line inside the box is the median.'},
    {q:'Which function draws one point for each pair of values?',o:['plt.plot','plt.scatter','plt.bar','plt.pie'],a:1,why:'scatter draws separate markers. marker and s change them.'}
  ],
  u14: [
    {q:'What does a colour palette do in seaborn?',o:['Sets the figure size','Sets the colours of the plot','Sorts the data','Saves the file'],a:1,why:'A palette gives the colours used for the groups.'},
    {q:'Which seaborn plot shows one variable as a smooth curve?',o:['kdeplot','heatmap','pairplot only','barplot'],a:0,why:'kdeplot draws a kernel density estimate, a smooth density curve.'},
    {q:'Which seaborn function is for a histogram with a smooth curve over it?',o:['histplot with kde=True','scatterplot','catplot','lineplot only'],a:0,why:'kde=True adds the density curve to the histogram.'}
  ],
  u15: [
    {q:'Which plot shows two variables together with their densities?',o:['jointplot','pie','boxplot','barplot'],a:0,why:'jointplot draws two variables and their distributions.'},
    {q:'What does a hexbin plot count?',o:['The number of points in each hexagon','The mean of each column','The rows','The labels'],a:0,why:'Each hexagon is coloured by the count of points inside it.'},
    {q:'What does a violin plot show?',o:['Only the mean','The shape of the distribution of each group','Only the maximum','A map'],a:1,why:'A violin plot is a box plot with the density shown as its outline.'}
  ],
  u16: [
    {q:'What does a bar plot show by default in seaborn?',o:['The count of rows','The mean of each category with a confidence interval','The median only','The variance'],a:1,why:'sns.barplot estimates the mean for each category.'},
    {q:'What does cmap set in a heatmap?',o:['The colour map','The chart title','The axis labels','The file type'],a:0,why:'cmap chooses the colour scale of the heatmap.'},
    {q:'What does pd.crosstab do?',o:['Joins two tables','Counts how often each pair of values occurs','Sorts a table','Draws a map'],a:1,why:'crosstab makes a table of counts for two columns.'}
  ],
  u18: [
    {q:'What does df.iloc[0] select?',o:['The row with label 0','The first row by position','The column named 0','The first value only'],a:1,why:'iloc uses positions, so 0 is the first row.'},
    {q:'What does df.loc[\'b\', \'x\'] return?',o:['The value in row b, column x','Row 0','Column b','An error always'],a:0,why:'loc uses labels for the row and the column.'},
    {q:'Which slice gives the rows at positions 1 and 2 (not 3)?',o:['df.iloc[1:3]','df.iloc[1:2]','df.iloc[1,3]','df.loc[1:3]'],a:0,why:'iloc slices exclude the stop position.'}
  ],
  u17: [
    {q:'Which pandas function reads a CSV file?',o:['pd.open_csv','pd.read_csv','pd.load','pd.csv'],a:1,why:'read_csv reads comma-separated text into a DataFrame.'},
    {q:'What does index=False do in to_csv?',o:['Writes the index as a column','Does not write the index','Deletes the file','Sorts the file'],a:1,why:'It stops pandas from writing the row numbers.'},
    {q:'Which argument changes the separator for a tab-separated file?',o:['delimiter="\\\\t" only','sep="\\\\t"','tab=True','split="\\\\t"'],a:1,why:'sep sets the character between values.'}
  ],
  u19: [
    {q:'Which key runs a cell in Jupyter?',o:['Enter','Shift+Enter','Tab','Esc'],a:1,why:'Shift+Enter runs the cell and moves to the next one.'},
    {q:'What does ? after an object name do in IPython?',o:['Deletes it','Shows its help','Prints its type only','Makes a copy'],a:1,why:'? opens the help for an object.'},
    {q:'Which key stops running code?',o:['Ctrl-C','Ctrl-Z','Ctrl-A','Ctrl-L'],a:0,why:'Ctrl-C interrupts the running code.'}
  ]
  };
  window.PY_QUIZ = Q;
  // attach each quiz to its station, after the station body
  (window.STATIONS || []).forEach(function (st) {
    const qs = Q[st.id];
    if (!qs || !qs.length) return;
    st.body += omr('Practice · ' + st.short, qs);
  });
})();

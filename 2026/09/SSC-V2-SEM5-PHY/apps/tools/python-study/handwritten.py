# Examples written by hand where the book's code is not in a form the extractor reads:
#  - unit 4: Matthes ch. 8 (functions) listings
#  - module V: the open-ended module of the syllabus (five examples)
UNIT4 = [
 ("Greet a user (docstring, one argument)", '''def greet_user(username):
    """Display a simple greeting."""
    print("Hello, " + username.title() + "!")

greet_user('jesse')'''),
 ("Positional arguments", '''def describe_pet(animal_type, pet_name):
    """Display information about a pet."""
    print("\\nI have a " + animal_type + ".")
    print("My " + animal_type + "'s name is " + pet_name.title() + ".")

describe_pet('hamster', 'harry')
describe_pet('dog', 'willie')'''),
 ("Keyword arguments (order does not matter)", '''def describe_pet(animal_type, pet_name):
    print("\\nI have a " + animal_type + ".")
    print("My " + animal_type + "'s name is " + pet_name.title() + ".")

describe_pet(animal_type='hamster', pet_name='harry')
describe_pet(pet_name='harry', animal_type='hamster')'''),
 ("Default values", '''def describe_pet(pet_name, animal_type='dog'):
    print("\\nI have a " + animal_type + ".")
    print("My " + animal_type + "'s name is " + pet_name.title() + ".")

describe_pet(pet_name='willie')
describe_pet('harry', 'hamster')'''),
 ("Return a neatly formatted name", '''def get_formatted_name(first_name, last_name):
    """Return a full name, neatly formatted."""
    full_name = first_name + ' ' + last_name
    return full_name.title()

musician = get_formatted_name('jimi', 'hendrix')
print(musician)'''),
 ("Optional middle name (default empty string)", '''def get_formatted_name(first_name, last_name, middle_name=''):
    """Return a full name, neatly formatted."""
    if middle_name:
        full_name = first_name + ' ' + middle_name + ' ' + last_name
    else:
        full_name = first_name + ' ' + last_name
    return full_name.title()

print(get_formatted_name('jimi', 'hendrix'))
print(get_formatted_name('john', 'hooker', 'lee'))'''),
 ("Return a dictionary", '''def build_person(first_name, last_name, age=None):
    """Return a dictionary of information about a person."""
    person = {'first': first_name, 'last': last_name}
    if age:
        person['age'] = age
    return person

musician = build_person('jimi', 'hendrix', age=27)
print(musician)
print(build_person('john', 'hooker'))'''),
 ("Function with a loop (a list of names, no keyboard input)", '''def get_formatted_name(first_name, last_name):
    """Return a full name, neatly formatted."""
    return (first_name + ' ' + last_name).title()

names = [('jimi', 'hendrix'), ('janis', 'joplin'), ('john', 'lee')]
for first, last in names:
    print("\\nHello, " + get_formatted_name(first, last) + "!")'''),
 ("Modify a list in a function", '''def greet_users(names):
    """Print a simple greeting to each user in the list."""
    for name in names:
        print("Hello, " + name.title() + "!")

usernames = ['hannah', 'ty', 'margot']
greet_users(usernames)'''),
 ("Pass a copy of a list (slice)", '''def greet_users(names):
    for name in names:
        print("Hello, " + name.title() + "!")

usernames = ['hannah', 'ty', 'margot']
greet_users(usernames[:])
print(usernames)'''),
]

MODULE_V = [
 ("Ex 1 · Pendulum data to a CSV file (Length and Period)", '''import numpy as np
import pandas as pd

rng = np.random.default_rng(0)
length = np.repeat([0.2, 0.4, 0.6, 0.8, 1.0], 4)          # metres
period = 2 * np.pi * np.sqrt(length / 9.81) + rng.normal(0, 0.01, length.size)

df = pd.DataFrame({'Length': length, 'Period': period.round(3)})
df.to_csv('pendulum.csv', index=False)
print(open('pendulum.csv').read()[:200])'''),
 ("Ex 2 · Mean period for each length, with a regression line", '''import pandas as pd
import seaborn as sns
import matplotlib.pyplot as plt

df = pd.read_csv('pendulum.csv')
means = df.groupby('Length', as_index=False)['Period'].mean()
print(means.round(3))
sns.regplot(x='Length', y='Period', data=df)
plt.title('Period against length')'''),
 ("Ex 3 · Hooke's law: spring constant for each material", '''import pandas as pd

force_ext = pd.DataFrame({'Material': ['steel'] * 3 + ['brass'] * 3,
                          'Force': [1.0, 2.0, 3.0, 1.0, 2.0, 3.0],
                          'Extension': [0.5, 1.0, 1.5, 0.8, 1.6, 2.4]})
materials = pd.DataFrame({'Material': ['steel', 'brass'], 'Density': [7.85, 8.5]})

merged = pd.merge(force_ext, materials, on='Material')
k = merged.groupby(['Material', 'Density']).apply(lambda g: g['Force'].sum() / g['Extension'].sum())
print(k.round(3))'''),
 ("Ex 4 · Histogram, bar chart and scatter plot with pandas", '''import numpy as np
import pandas as pd
import matplotlib.pyplot as plt

rng = np.random.default_rng(2)
s = pd.Series(rng.normal(size=200))
fig, ax = plt.subplots(1, 3, figsize=(12, 3.5))
s.plot.hist(bins=15, ax=ax[0], title='Histogram')
pd.Series([3, 7, 5], index=['a', 'b', 'c']).plot.bar(ax=ax[1], title='Bar chart')
ax[2].scatter(s[:50], s[50:100], s=12)
ax[2].set_title('Scatter plot')'''),
 ("Ex 5 · Force against extension with seaborn regplot", '''import pandas as pd
import seaborn as sns
import matplotlib.pyplot as plt

df = pd.DataFrame({'Force': [1, 2, 3, 4, 5], 'Extension': [0.52, 1.01, 1.49, 2.03, 2.52]})
sns.regplot(x='Extension', y='Force', data=df)
plt.title("Hooke's law: force against extension")'''),
]

# Corrected code for programs whose layout text was damaged by page headers or wrapped captions.
# Key: (unit id, program number in the book). Each is checked to parse (python3 -c "ast.parse").
PROGRAM_FIX = {
 ('u1', 4): '''elements = [10, 20, 0, 40, 15]
x = bytes(elements)
for i in x:
    print(i)''',
 ('u2', 2): '''with open('myfile.txt', 'w') as f:
    f.write('Python files\\nsecond line\\n')
f = open('myfile.txt', 'r')
str = f.read()
print(str)
f.close()''',
 ('u2', 5): '''f = open('myfile.txt', 'a+')
for text in ['first appended line', 'second appended line']:
    f.write(text + "\\n")
f.seek(0, 0)
print('The file contents are: ')
str = f.read()
print(str)
f.close()''',
 ('u2', 7): '''import os
with open('myfile.txt', 'w') as f:
    f.write('one two\\nthree\\n')
fname = 'myfile.txt'
if os.path.isfile(fname):
    f = open(fname, 'r')
cl = cw = cc = 0
for line in f:
    words = line.split()
    cl += 1
    cw += len(words)
    cc += len(line)
f.close()
print('No. of lines: ', cl)
print('No. of words: ', cw)
print('No. of characters: ', cc)''',
 ('u3', 11): '''m, n = 3, 12
x = m
if x % 2 != 0:
    x = x + 1
while x >= m and x <= n:
    print(x)
    x += 2''',
 ('u3', 14): '''for i in range(1, 10, 2):
    print(i)''',
 ('u3', 17): '''lst = [10, 20, 30, 40, 50]
sum = 0
for i in lst:
    print(i)
    sum += i
print('Sum= ', sum)''',
 ('u3', 25): '''x = 0
while x < 10:
    x += 1
    if x > 5:
        continue
    print('x= ', x)
print("Out of loop")''',
 ('u5', 6): '''from array import *
x = array('i', [10, 20, 30, 40, 50])
n = len(x)
i = 0
while i < n:
    print(x[i], end=' ')
    i += 1''',
 ('u5', 10): '''from array import *
marks = [int(num) for num in '50 60 70 66 72'.split(' ')]
sum = 0
for x in marks:
    print(x)
    sum += x
print('Total marks: ', sum)
n = len(marks)
percent = sum / n
print('Percentage: ', percent)''',
 ('u5', 12): '''from array import *
x = array('i', [])
n = 5
for i in range(n):
    x.append(10 * (i + 1))
print('Original array: ', x)
search = 30
for i in range(len(x)):
    if x[i] == search:
        print('Found at position', i)
        break''',
}

# Syllabus unit 13 demonstration: sonometer data (mass against length squared) and its correlation matrix.
UNIT13_DEMO = [
 ("Syllabus demo · sonometer: mass against length², and the correlation matrix", '''import numpy as np
import pandas as pd
import matplotlib.pyplot as plt

length = np.array([0.50, 0.60, 0.70, 0.80, 0.90, 1.00])      # m
mass = np.array([0.10, 0.15, 0.20, 0.27, 0.33, 0.41])         # kg
df = pd.DataFrame({'mass': mass, 'length_sq': length ** 2, 'length': length})
print(df.corr().round(3))
plt.scatter(df['length_sq'], df['mass'])
plt.xlabel('length squared (m²)'); plt.ylabel('mass (kg)')
plt.title('Sonometer: mass against length²')'''),
]

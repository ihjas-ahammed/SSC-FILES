import { Unit } from '../../types';

export const UNIT_1_1_2_DATA_STRUCTURES: Unit = {
  id: 'unit-1-1-2-data-structures',
  title: '112: Data Structures & Input',
  description: 'Strings, Lists, Mutable vs Immutable, and reading I/O.',
  color: 'duo-green',
  lessons:[
    // Lesson 8: Strings
    {
      id: 'lesson-8-strings',
      title: 'L8: Python Strings',
      description: 'Understanding strings as sequences.',
      icon: 'Type',
      slides:[
        {
          id: 'l8-s1',
          type: 'theory',
          title: 'Strings as Sequences',
          content: 'A String is a sequence of characters. The individual elements of a String can be accessed by indexing. \n\nIndices start at `0`. You can also use negative indexing, where `-1` represents the last character, `-2` the second to last, etc.'
        },
        {
          id: 'l8-s2',
          type: 'python_example',
          title: 'Interactive: string1.py',
          content: 'Notice how indexing extracts characters.',
          code: "s = 'hello world'\nprint(s[0])\nprint(s[1])\nprint(s[-1])"
        }
      ]
    },
    // Lesson 10: Slicing
    {
      id: 'lesson-10-slicing',
      title: 'L10: Slicing Sequences',
      description: 'Extracting substrings using[a:b].',
      icon: 'Scissors',
      slides:[
        {
          id: 'l10-s1',
          type: 'theory',
          title: 'String Slicing',
          content: 'Part of a String can be extracted using the slicing operation. Indexing `s[a:b]` extracts elements from `s[a]` up to `s[b-1]`.\n\nIf the index on the left side of the colon is skipped `s[:b]`, slicing starts from the first element (index 0). If the index on the right side is skipped `s[a:]`, slicing ends with the last element.'
        },
        {
          id: 'l10-s2',
          type: 'solution',
          title: 'Tracing Slices',
          content: "Given `a = 'hello world'`...",
          interactiveSteps:[
            {
              prompt: "What does `a[3:5]` output?",
              options:[
                { id: 'a', text: "'lo'", isCorrect: true, explanation: "Extracts index 3 ('l') and index 4 ('o'). Stops before index 5." }
              ]
            },
            {
              prompt: "What does `a[6:]` output?",
              options:[
                { id: 'a', text: "'world'", isCorrect: true, explanation: "Starts at index 6 ('w') to the end." }
              ]
            }
          ]
        }
      ]
    },
    // Lesson 11: Python Lists
    {
      id: 'lesson-11-lists',
      title: 'L11: Python Lists',
      description: 'Flexible, comma-separated collections.',
      icon: 'List',
      slides:[
        {
          id: 'l11-s1',
          type: 'theory',
          title: 'Lists',
          content: 'A List is defined by enclosing elements inside a pair of square brackets `[ ]`, separated by commas. It is much more flexible than a String; individual elements can be of any type, even another list.'
        },
        {
          id: 'l11-s2',
          type: 'python_example',
          title: 'Interactive: list1.py',
          content: 'Lists can be indexed, sliced, added, and multiplied exactly like strings.',
          code: "a =[2.3, 3.5, 234]\nprint(a[0])\na[1] = 'haha'\nprint(a)"
        }
      ]
    },
    // Lesson 13: Mutable vs Immutable
    {
      id: 'lesson-13-mutable',
      title: 'L13: Mutable vs Immutable',
      description: 'The critical difference in memory handling.',
      icon: 'Lock',
      slides:[
        {
          id: 'l13-s1',
          type: 'theory',
          title: 'Mutable and Immutable Types',
          content: 'There is one major difference between String and List types: **List is mutable but String is not.**\n\nWe can change the value of an element in a list (`a[1] = 5`), add new elements, and remove existing ones. This is NOT possible with Strings (`s[2] = "a"` will throw a TypeError).\n\n*Note: Tuples `(1, 2, 3)` are similar to lists but are Immutable.*'
        },
        {
          id: 'l13-s2',
          type: 'quiz',
          title: 'Concept Check',
          content: 'Which of the following operations will throw a TypeError?',
          options: [
            { id: 'a', text: "my_str = 'hello'; my_str[0] = 'H'", isCorrect: true, explanation: 'Strings are immutable. You cannot assign to a specific index.' },
            { id: 'b', text: "my_list = [1, 2]; my_list[0] = 5", isCorrect: false, explanation: 'Lists are mutable. This works perfectly.' }
          ]
        }
      ]
    },
    // Lesson 14: Keyboard Input
    {
      id: 'lesson-14-input',
      title: 'L14: Keyboard Input',
      description: 'Reading dynamic data from the user.',
      icon: 'Keyboard',
      slides:[
        {
          id: 'l14-s1',
          type: 'theory',
          title: 'The input() Function',
          content: 'The `input(\'prompt\')` function reads String type data from the keyboard. \n\nBecause it always returns a String, if you need a number, you must cast it: `int()`, `float()`, or `eval()`. The `eval()` function evaluates a string as a Python expression.'
        },
        {
          id: 'l14-s2',
          type: 'solution',
          title: 'Tracing Input Conversions',
          content: 'Trace how data shifts through casting.',
          interactiveSteps:[
            {
              prompt: "If a user enters `5` into `s = input()`, what happens if you run `print(s * 2)`?",
              options:[
                { id: 'a', text: "'55'", isCorrect: true, explanation: "Because `input()` returns a String, multiplying '5' by 2 repeats it." },
                { id: 'b', text: "10", isCorrect: false, explanation: "You must cast the input to an integer first to get mathematical multiplication." }
              ]
            },
            {
              prompt: "How do you achieve mathematical multiplication (10)?",
              options:[
                { id: 'a', text: "a = float(s); print(a * 2)", isCorrect: true, explanation: "Casting the string '5' to a float makes it a number." }
              ]
            }
          ]
        }
      ]
    },
    // Lesson 16: Syntax & Indentation
    {
      id: 'lesson-16-syntax',
      title: 'L16: Syntax & Indentation',
      description: 'Delimiting blocks of code in Python.',
      icon: 'AlignLeft',
      slides:[
        {
          id: 'l16-s1',
          type: 'theory',
          title: 'Colon & Indentation',
          content: 'Python has a relatively uncluttered visual layout. \n\n**Python uses indentation to delimit blocks of code** (rather than curly braces `{}` used in C++ or Java). \n\n**Rule:** The line *before* any indented block must end with a colon `:` character.\n\n*Warning:* Mixing spaces and tabs can create bugs that are hard to track. Stick to standard 4 spaces.'
        },
        {
          id: 'l16-s2',
          type: 'fill_in_blank',
          title: 'Syntax Drill',
          content: 'The line before an indented code block must end with a ___ symbol.',
          blankAnswer: ':'
        }
      ]
    }
  ]
};
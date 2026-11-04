import { Unit } from '../../types';

export const UNIT_1_1_1_BASICS: Unit = {
  id: 'unit-1-1-1-basics',
  title: '111: Basics & Variables',
  description: 'Python environments, dynamic typing, and operator precedence.',
  color: 'duo-blue',
  lessons:[
    // Lesson 1 (Theory): 2.1 Getting Started with Python
    {
      id: 'lesson-1-getting-started',
      title: 'L1: Getting Started with Python',
      description: 'Understanding the Python Interpreter and IDEs.',
      icon: 'Terminal',
      slides:[
        {
          id: 'l1-s1',
          type: 'quiz',
          title: 'Priming: The Interpreter',
          content: 'Before we dive in: What is the fundamental difference between Python and a compiled language like C++?',
          options:[
            { id: 'a', text: 'Python translates code line-by-line at runtime.', isCorrect: true, explanation: 'Exactly. Python is interpreted, meaning it reads and executes source code sequentially via an Interpreter.' },
            { id: 'b', text: 'Python converts all code to machine language before running.', isCorrect: false, explanation: 'This describes a compiled language.' }
          ]
        },
        {
          id: 'l1-s2',
          type: 'theory',
          title: 'The Python Interpreter',
          content: 'Python is a simple, high-level language with a clean syntax. \n\n**Two Modes of Using Python:**\n1. **Interactive Mode:** If you type `python3` in a terminal without arguments, you enter the interpreter shell, marked by the `>>>` prompt. It acts as an immediate calculator.\n2. **Script Mode:** You enter source code in a text editor (like Geany or Gedit), save it with a `.py` extension, and execute it via `python3 filename.py`.'
        },
        {
          id: 'l1-s3',
          type: 'quiz',
          title: 'Concept Check: Execution',
          content: 'Which mode is best suited for writing large programs with loops and conditional logic?',
          options:[
            { id: 'a', text: 'Interactive Mode (>>>)', isCorrect: false, explanation: 'Interactive mode is difficult for multi-line loops as it evaluates immediately.' },
            { id: 'b', text: 'Script Mode (.py files)', isCorrect: true, explanation: 'Saving to a file allows you to write, edit, and execute complex logic blocks effortlessly.' }
          ]
        },
        {
          id: 'l1-s4',
          type: 'python_example',
          title: 'Interactive Sandbox: The Shell',
          content: 'Simulate the `>>>` interactive shell. Print a basic mathematical calculation below.',
          code: 'print(5 + 10)'
        },
        {
          id: 'l1-s5',
          type: 'fill_in_blank',
          title: 'Syntax Drill',
          content: 'When saving a script in a text editor, the file must be saved with the .___ extension.',
          blankAnswer: 'py'
        }
      ]
    },
    // Lesson 2 (Example): hello.py
    {
      id: 'lesson-2-hello-py',
      title: 'L2: hello.py',
      description: 'Your first Python program.',
      icon: 'Code',
      slides:[
        {
          id: 'l2-s1',
          type: 'example_q',
          title: 'Problem: hello.py',
          content: 'Write the customary Python program to display the words `Hello World` on the computer screen. How is this invoked from a GNU/Linux terminal?'
        },
        {
          id: 'l2-s2',
          type: 'solution',
          title: 'Scaffolded Solution',
          content: 'Let us build the execution step-by-step.',
          interactiveSteps:[
            {
              prompt: 'What is the correct syntax to output the string to the screen in Python 3?',
              options:[
                { id: 'a', text: "print('Hello World')", isCorrect: true, explanation: 'In Python 3, print is a function and requires parentheses.' },
                { id: 'b', text: "print 'Hello World'", isCorrect: false, explanation: 'This is valid in Python 2, but throws a syntax error in Python 3.' }
              ]
            },
            {
              prompt: 'Assuming you saved the file as `hello.py`, what command do you type at the terminal `$ ` prompt?',
              options:[
                { id: 'a', text: 'python3 hello.py', isCorrect: true, explanation: 'Correct. You call the interpreter and pass the filename.' },
                { id: 'b', text: 'run hello.py', isCorrect: false, explanation: 'You must invoke the Python interpreter.' }
              ]
            }
          ]
        },
        {
          id: 'l2-s3',
          type: 'quiz',
          title: 'Logic Analysis',
          content: 'Why must `Hello World` be enclosed in quotes (single or double)?',
          options:[
            { id: 'a', text: 'To tell the interpreter it is a String literal, not a variable name.', isCorrect: true, explanation: 'Without quotes, Python will look for variables named `Hello` and `World`.' },
            { id: 'b', text: 'Because print() only accepts quoted arguments.', isCorrect: false, explanation: 'print() can accept variables, integers, etc., without quotes.' }
          ]
        }
      ]
    },
    // Lesson 3 (Theory): 2.2 Variables and Data Types
    {
      id: 'lesson-3-variables',
      title: 'L3: Variables & Types',
      description: 'Dynamic data typing and memory assignment.',
      icon: 'Type',
      slides:[
        {
          id: 'l3-s1',
          type: 'quiz',
          title: 'Priming: Variables',
          content: 'In languages like C++, you must declare `int x = 10;`. How do you think Python handles this?',
          options:[
            { id: 'a', text: 'You just type x = 10', isCorrect: true, explanation: 'Python uses Dynamic Data Typing. It deduces the type based on the value assigned.' },
            { id: 'b', text: 'You must declare Type x = 10', isCorrect: false, explanation: 'Python handles typing dynamically.' }
          ]
        },
        {
          id: 'l3-s2',
          type: 'theory',
          title: 'Dynamic Data Typing',
          content: 'Python supports numeric types (`int`, `float`, `complex`) and sequences (`str`, `list`, `tuple`, `dict`). \n\n**Dynamic Typing:** You do not explicitly declare the type of a variable. The type is decided by the value assigned to it. If required, types can be cast explicitly, e.g., `y = float(3)`.\n\n**Comments:** Anything after a `#` sign in a line is ignored by the interpreter. Multi-line comments are enclosed within three single quotes `\'\'\'`.'
        },
        {
          id: 'l3-s3',
          type: 'quiz',
          title: 'Concept Check: Overriding',
          content: 'If you run `x = 10` and on the next line run `x = "Hello"`, what happens?',
          options:[
            { id: 'a', text: 'Python throws a Type Error.', isCorrect: false, explanation: 'Because of dynamic typing, the type of a variable can change during execution.' },
            { id: 'b', text: 'x successfully becomes a String.', isCorrect: true, explanation: 'Python treats variables as labeled envelopes. You can take out an integer and put in a string.' }
          ]
        }
      ]
    },
    // Lesson 4 (Example): first.py
    {
      id: 'lesson-4-first-py',
      title: 'L4: first.py',
      description: 'Tracing variable states and the type() function.',
      icon: 'Activity',
      slides:[
        {
          id: 'l4-s1',
          type: 'example_q',
          title: 'Problem: Type Tracing',
          content: 'Write a script that assigns an integer, a float, a complex number, and a string to the same variable `x`, sequentially printing the value and its type using `type(x)`.'
        },
        {
          id: 'l4-s2',
          type: 'solution',
          title: 'Algorithmic Tracing',
          content: 'Build the trace logic.',
          interactiveSteps:[
            {
              prompt: 'First, assign the integer 10 to `x`.',
              options:[
                { id: 'a', text: 'x = 10', isCorrect: true, explanation: 'Correct.' }
              ]
            },
            {
              stepText: "`print(x, type(x))` outputs `10 <class 'int'>`"
            },
            {
              prompt: 'Next, override `x` with the float 10.4.',
              options:[
                { id: 'a', text: 'x = 10.4', isCorrect: true, explanation: 'Correct.' }
              ]
            },
            {
              stepText: "`print(x, type(x))` outputs `10.4 <class 'float'>`"
            },
            {
              prompt: 'Now, assign the complex number 3 + 4j to `x`.',
              options:[
                { id: 'a', text: 'x = 3 + 4j', isCorrect: true, explanation: 'In Python, `j` is used for the imaginary component.' }
              ]
            },
            {
              stepText: "`print(x, type(x))` outputs `(3+4j) <class 'complex'>`"
            }
          ]
        },
        {
          id: 'l4-s3',
          type: 'python_example',
          title: 'Interactive Sandbox: first.py',
          content: 'Experiment with type coercion and the `type()` function.',
          code: "x = 10\nprint(x, type(x))\n\nx = 3 + 4j\nprint(x, type(x))\n\nx = 'I am a String'\nprint(x, type(x))"
        }
      ]
    },
    // Lesson 5 (Theory): 2.3 Operators and their Precedence
    {
      id: 'lesson-5-operators',
      title: 'L5: Operators & Precedence',
      description: 'Mathematical rules of evaluation.',
      icon: 'Calculator',
      slides:[
        {
          id: 'l5-s1',
          type: 'quiz',
          title: 'Priming: Precedence',
          content: 'In the expression `2 + 3 * 4`, what is evaluated first?',
          options:[
            { id: 'a', text: '2 + 3', isCorrect: false, explanation: 'Multiplication has higher precedence than addition.' },
            { id: 'b', text: '3 * 4', isCorrect: true, explanation: 'Standard arithmetic precedence applies in Python.' }
          ]
        },
        {
          id: 'l5-s2',
          type: 'theory',
          title: 'Operators and Precedence',
          content: 'Python supports arithmetic, logical, and bitwise operators. \n\n**Precedence:** If you want addition to be done before multiplication, enforce it using parentheses: `(2 + 3) * 4`. Whenever there is ambiguity in evaluation, use parentheses.\n\n**Key Operators:**\n*   `**` : Exponentiation (highest arithmetic precedence)\n*   `/` : Floating point division\n*   `//` : Integer (floor) division\n*   `%` : Modulus (remainder)'
        },
        {
          id: 'l5-s3',
          type: 'numerical',
          title: 'Execution Test',
          content: 'What is the output of `5 // 2`?',
          numericAnswer: 2,
          numericTolerance: 0
        },
        {
          id: 'l5-s4',
          type: 'fill_in_blank',
          title: 'Syntax Drill',
          content: 'The operator used to find the remainder of a division is the ___ symbol.',
          blankAnswer: '%'
        }
      ]
    },
    // Lesson 6 (Example): oper.py
    {
      id: 'lesson-6-oper-py',
      title: 'L6: oper.py',
      description: 'Applying operators to Strings and Ints.',
      icon: 'Activity',
      slides:[
        {
          id: 'l6-s1',
          type: 'example_q',
          title: 'Problem: oper.py',
          content: 'Evaluate how Python handles operators dynamically. What happens if you add a string to a string? What if you multiply a string by an integer?'
        },
        {
          id: 'l6-s2',
          type: 'solution',
          title: 'Tracing Operator Overloading',
          content: 'Let us predict the outputs.',
          interactiveSteps:[
            {
              prompt: "Given `s = 'Hello '`, what is the output of `print(s + s)`?",
              options:[
                { id: 'a', text: 'Hello Hello', isCorrect: true, explanation: 'The + operator concatenates strings.' },
                { id: 'b', text: 'Error', isCorrect: false, explanation: 'Strings can be added together.' }
              ]
            },
            {
              prompt: "Given `s = 'Hello '`, what is the output of `print(3 * s)`?",
              options:[
                { id: 'a', text: 'Hello Hello Hello', isCorrect: true, explanation: 'The * operator repeats strings.' },
                { id: 'b', text: 'Error', isCorrect: false, explanation: 'Strings can be multiplied by integers.' }
              ]
            }
          ]
        },
        {
          id: 'l6-s3',
          type: 'quiz',
          title: 'Logic Error',
          content: "What happens if you try to execute `'Hello' + 3`?",
          options:[
            { id: 'a', text: 'Hello3', isCorrect: false, explanation: 'Python does not implicitly cast integers to strings for concatenation.' },
            { id: 'b', text: 'Type Error', isCorrect: true, explanation: 'You cannot add a String to an Integer directly. You must explicitly cast it: `"Hello" + str(3)`.' }
          ]
        },
        {
          id: 'l6-s4',
          type: 'python_example',
          title: 'Interactive Sandbox: oper.py',
          content: 'Run the code below to see floating vs integer division.',
          code: 'print(5 / 2)\nprint(5 // 2)'
        }
      ]
    },
    // Lesson 7 (Table): Table 2.1
    {
      id: 'lesson-7-operator-table',
      title: 'L7: Reference - Operator Precedence',
      description: 'Table 2.1 mapping.',
      icon: 'List',
      slides:[
        {
          id: 'l7-s1',
          type: 'theory',
          title: 'Table 2.1: Python Operators',
          content: 'Operators from highest to lowest precedence:\n\n1. `x[index]` (Subscription)\n2. `**` (Exponentiation)\n3. `+x, -x, ~x` (Positive, Negative, Bitwise NOT)\n4. `*, /, //, %` (Multiply, divide, integer divide, remainder)\n5. `+, -` (Add, Subtract)\n6. `<<, >>` (Bitwise Shifting)\n7. `&` (Bitwise AND)\n8. `^, |` (Bitwise XOR, OR)\n9. `<, <=, >, >=, !=, ==` (Comparisons)\n10. `in, not in` (Membership)\n11. `not x, and, or` (Boolean Logic)'
        },
        {
          id: 'l7-s2',
          type: 'quiz',
          title: 'Precedence Check',
          content: 'Which evaluates first: `in` (Membership) or `==` (Comparison)?',
          options:[
            { id: 'a', text: 'Comparison (==)', isCorrect: true, explanation: 'Comparisons evaluate before Membership tests.' },
            { id: 'b', text: 'Membership (in)', isCorrect: false, explanation: 'Membership is lower precedence.' }
          ]
        }
      ]
    }
  ]
};
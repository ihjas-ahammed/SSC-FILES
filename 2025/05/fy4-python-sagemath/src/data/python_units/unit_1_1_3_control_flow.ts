import { Unit } from '../../types';

export const UNIT_1_1_3_CONTROL_FLOW: Unit = {
  id: 'unit-1-1-3-control-flow',
  title: '113: Control Flow',
  description: 'Loops, Conditionals, and breaking execution flow.',
  color: 'duo-red',
  lessons:[
    {
      id: 'lesson-17-while',
      title: 'L17: The While Loop',
      description: 'Iterating until a condition becomes false.',
      icon: 'RotateCw',
      slides:[
        {
          id: 'l17-s1',
          type: 'theory',
          title: 'Iteration: while loops',
          content: 'The `while` loop evaluates the logical expression in front of it. If it is True, the body of the while loop (the indented lines below) is executed. \n\nThe process repeats until the condition becomes False. You must have a statement inside the body that modifies the condition, otherwise the program will run in an infinite loop.'
        },
        {
          id: 'l17-s2',
          type: 'python_example',
          title: 'Table Generation',
          content: 'Trace the execution of this basic while loop.',
          code: "x = 1\nwhile x <= 5:\n    print(x * 8)\n    x = x + 1\nprint('Done')"
        }
      ]
    },
    {
      id: 'lesson-18-for',
      title: 'L18: The For Loop',
      description: 'Iterating over sequences.',
      icon: 'ListOrdered',
      slides:[
        {
          id: 'l18-s1',
          type: 'theory',
          title: 'Iteration: for loops',
          content: 'Python `for` loops iterate over a sequence data type like a String, List, or Tuple. During each iteration, one member of the data is assigned to the loop variable.\n\nTo construct for loops that execute a fixed number of times, we use the `range(start, stop, step)` function. Note: the `stop` value is excluded.'
        },
        {
          id: 'l18-s2',
          type: 'solution',
          title: 'Tracing range()',
          content: 'Understanding the range object.',
          interactiveSteps:[
            {
              prompt: "What sequence does `range(5, 51, 5)` generate?",
              options:[
                { id: 'a', text: '5, 10, 15 ... 50', isCorrect: true, explanation: 'Starts at 5, steps by 5, stops BEFORE 51.' },
                { id: 'b', text: '5, 10, 15 ... 55', isCorrect: false, explanation: 'The stop value is excluded.' }
              ]
            }
          ]
        }
      ]
    },
    {
      id: 'lesson-20-if',
      title: 'L20: Conditional Execution',
      description: 'Branching logic with if, elif, and else.',
      icon: 'GitBranch',
      slides:[
        {
          id: 'l20-s1',
          type: 'theory',
          title: 'If, Elif, and Else',
          content: 'Python implements conditional execution using the `if`, `elif`, and `else` keywords. \n\nThe indentation levels of `if` and the corresponding `elif` and `else` must be kept exactly the same.'
        },
        {
          id: 'l20-s2',
          type: 'python_example',
          title: 'Conditional Branching',
          content: 'Experiment with changing the value of x.',
          code: "x = 15\nif x > 10:\n    print('Bigger Number')\nelif x < 10:\n    print('Smaller Number')\nelse:\n    print('Same Number')"
        }
      ]
    },
    {
      id: 'lesson-22-break',
      title: 'L22: Break and Continue',
      description: 'Modifying standard loop traversal.',
      icon: 'SkipForward',
      slides:[
        {
          id: 'l22-s1',
          type: 'theory',
          title: 'Modify loops: break and continue',
          content: 'We can use the `break` statement to terminate a loop entirely if some condition is met.\n\nThe `continue` statement is used to skip the rest of the current block and immediately go back to the top of the loop for the next iteration.'
        },
        {
          id: 'l22-s2',
          type: 'quiz',
          title: 'Loop Hijacking',
          content: 'If a loop encounters a `continue` statement, does the loop exit entirely?',
          options:[
            { id: 'a', text: 'No, it just skips the rest of the current iteration.', isCorrect: true, explanation: 'Correct. Only `break` exits the loop entirely.' },
            { id: 'b', text: 'Yes, it breaks the loop.', isCorrect: false, explanation: 'That is the function of the `break` statement.' }
          ]
        }
      ]
    }
  ]
};
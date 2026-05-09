import { Module } from '../types';
import { SECTION_1_1_INTRODUCTORY_PYTHON } from './section_1_1_introductory_python';

export const MODULE_1_PYTHON_SAGEMATH: Module = {
  id: 'module-1-python-sagemath',
  title: 'Module I: Introductory Python & Arrays',
  description: 'Fundamentals of Python and SageMath — starting with Python basics, data structures, and arrays.',
  sections: [SECTION_1_1_INTRODUCTORY_PYTHON],
  moduleSummary:[
    {
      id: 'mod-sum-py-1',
      type: 'theory',
      title: 'Mental Model: The Interpreter',
      content: '**Unit 1: Basics & Variables** establishes the core mental model of Python as an interpreted, dynamically typed language. Unlike compiled languages (C++), the Python interpreter executes code line-by-line, determining data types at runtime based on the assigned value. This enables rapid prototyping but requires an understanding of operator precedence and dynamic overrides.',
    },
    {
      id: 'mod-sum-py-2',
      type: 'theory',
      title: 'Mental Model: Data Structures in Memory',
      content: '**Unit 2: Data Structures & Input** draws the critical line between *Mutable* (Lists) and *Immutable* (Strings, Tuples) objects. You learned that slicing extracts data predictably via `[start:stop]`, and that standard keyboard inputs return strings, necessitating explicit type-casting (e.g., `eval()`, `float()`) for mathematical operations.',
    },
    {
      id: 'mod-sum-py-3',
      type: 'theory',
      title: 'Mental Model: Execution Flow',
      content: "**Unit 3: Control Flow** shifts the paradigm from linear execution to algorithmic branching. You mapped condition-based logic (`if/elif/else`), unbounded loops waiting for a state change (`while`), and finite traversal over sequences (`for`). You also learned to hijack this flow directly using `break` and `continue`.",
    },
    {
      id: 'mod-sum-py-4',
      type: 'theory',
      title: 'Mental Model: Abstraction & Matrices',
      content: '**Unit 4: Functions & Matrices** scales up your architecture. By encapsulating logic within `def` blocks, you achieved modularity. We introduced library imports (`math`), external data persistence (File I/O), and utilized nested loops mapped to List-of-Lists structures to simulate Mathematical Matrices in pure Python ($cA = c\\sum A_{ij}$).',
    },
  ],
};
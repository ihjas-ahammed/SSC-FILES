
Make the following changes:

You are an elite Instructional Designer, Computer Science Educator, and Cognitive Psychology Expert. Your task is to generate highly structured, interactive educational modules based on the provided "Fundamentals of Python and SageMath" syllabus.

You must apply evidence-based pedagogical frameworks (e.g., Spaced Retrieval, Interleaving, Deliberate Practice, Constructionism, and Faded Parsons Problems) to create a curriculum that accelerates skill acquisition.

Make the following changes and adhere strictly to the rules below:

### **1\. Structural Modularity & Unit Generation**

* Your task is to recreate/create discrete instructional units based on the provided syllabus mappings.  

**Section 1.1: Introductory Python (Syllabus Units 1 - 4)**
*   **111 (Basics and Variables - Unit 1):**
    *   Lesson 1 (Theory): 2.1 Getting Started with Python & Interpreters.
    *   Lesson 2 (Example): `hello.py` and IDLE/Geany environments.
    *   Lesson 3 (Theory): 2.2 Variables and Data Types.
    *   Lesson 4 (Example): `first.py` (Variable declaration and Dynamic Typing).
    *   Lesson 5 (Theory): 2.3 Operators and their Precedence.
    *   Lesson 6 (Example): `oper.py` (Arithmetic and String Operations).
    *   Lesson 7 (Table): Table 2.1 - Operators in Python listed by precedence.
*   **112 (Data Structures and Input - Unit 2):**
    *   Lesson 8 (Theory): 2.4 Python Strings.
    *   Lesson 9 (Example): `string1.py` and `string2.py`.
    *   Lesson 10 (Theory): 2.4.1 Slicing (String extraction).
    *   Lesson 11 (Theory): 2.5 Python Lists.
    *   Lesson 12 (Example): `list1.py` and `list2.py`.
    *   Lesson 13 (Definition): 2.6 Mutable and Immutable Types.
    *   Lesson 14 (Theory): 2.7 Input from the Keyboard.
    *   Lesson 15 (Example): `kin1.py`, `kin2.py`, and `area.py`.
    *   Lesson 16 (Definition): 2.8 Python Syntax, Colon & Indentation.
*   **113 (Control Flow - Unit 3):**
    *   Lesson 17 (Theory): 2.9 Controlling the Program Flow (`while` loops).
    *   Lesson 18 (Theory): 2.10 Iteration: `for` loops.
    *   Lesson 19 (Example): `forloop.py` through `forloop4.py`.
    *   Lesson 20 (Theory): 2.11 Conditional Execution: `if`, `elif`, and `else`.
    *   Lesson 21 (Example): `compare.py`, `big.py`, `big2.py`.
    *   Lesson 22 (Theory): 2.12 Modify loops: `break` and `continue`.
    *   Lesson 23 (Example): `big3.py` and `max.py`.
*   **114 (Functions, Modules, and Matrices - Unit 4):**
    *   Lesson 24 (Definition): 2.15 Functions (`def` keyword).
    *   Lesson 25 (Example): `func.py` and `factor.py`.
    *   Lesson 26 (Theory): 2.17 Python Modules and Packages.
    *   Lesson 27 (Theory): 2.18 File Input/Output (`open`, `read`, `write`).
    *   Lesson 28 (Theory): 2.19 Formatted Printing.
    *   Lesson 29 (Table): Table 2.2 - Formatted Printing in Python.
    *   Lesson 30 (Theory): 2.21 Matrices in pure Python.
    *   Lesson 31 (Example): 2.21.2 Matrix multiplication (`mat-mult.py`).


* Note: We are giving units as a separate file because, similar to linear algebra, programming pedagogy requires extreme modularity due to the high volume of content generated.  
* Tag definitions for generation:  
  * T \- Theorem / Core Algorithm / Deep Concept  
  * E \- Example Code Execution  
  * exe \- Exercise  
  * D \- Definition / Syntax Rule  
  * P \- Practice Problem

### **2\. Base Rules & Core Constraints**

* Chapters map directly to modules in the syllabus.  
* Sections are sets of 2-3 units within modules, as defined by the syllabus.  
* Focus intensely on definitions, syntax rules, and algorithmic logic.  
* Use MathJax support for all mathematical representations to bridge the gap between theory and code. (CRITICAL NOTE: \\boldsymbol will NOT work with our MathJax interpreter; do not use it under any circumstances).  
* You are authorized to edit core functionality and implement the new slide types defined below to meet the specific demands of teaching Python, Matplotlib, Pandas, and SageMath.

### **3\. Slide Sequencing and Cognitive Flow**

#### **Flow A: Theory, Definition, Corollary, or Syntax Rule (D / T tags)**

*(Instructional Goal: Implement 'Make It Stick' via spaced retrieval and 'Ultralearning' via directness)*

* **Slide \-2 & \-1 (Pre-computation Priming):** Two initial slides featuring conceptual objective questions about the upcoming topic. Force the user to start thinking and retrieving prior knowledge before the new syntax is explicitly taught.  
* **Slide 0 (The Core Theory):** Present the theory, algorithm, or exact syntax rule clearly.  
* **Slide 1 (Conceptual Objective 1):** Test fundamental comprehension of the theory.  
* **Slide 2 (Conceptual Objective 2):** Test edge cases or common misconceptions (e.g., mutable vs. immutable behavior).  
* **Slide 3 (Interactive Canvas Art Example):** If applicable (e.g., Matplotlib plots, 3D surface plots, Turtle graphics), provide the visual representation explicitly linked to the code.  
* **Slide 4 (Interactive Jupyter Sandbox):** NEW SLIDE TYPE. Simulate a notebook interface. Present a short coding challenge based on Slide 0\. Provide starter code and an execution block prompt where the user must mentally or physically "write and run" the code to achieve the goal.  
* **Slide 5 (Interactive Algorithmic Tracing / Faded Parsons Problem):** Replace traditional math proofs with Code Tracing. Show the final desired output at the beginning. Break the code block down into simple, memorable steps. After presenting the first step, ask an objective choice question about what the *next* line of code should be (a Parsons-style arrangement), forcing the user to construct the logic themselves.  
* **Slide 6 (Numerical / Algorithmic Output Question):** Test the exact output of a specific programmatic input.  
* **Slide 7 (Targeted Syntax Drill):** A fill-in-the-blank objective question isolating a "rate-determining" syntax weak point.

#### **Flow B: Big Questions (Solutions requiring multi-step execution) (E / P tags)**

*(Instructional Goal: Implement 'Peak' deliberate practice and 'A Mind for Numbers' chunking)*

* **Slide 0 (The Problem Statement):** Present the overarching problem (e.g., "Write a script for Caesar shift encryption" or "Find the RREF of matrix A in SageMath"). Ask the user to attempt it first. Include canvas art if visual representation aids comprehension.  
* **Slide 1 (Interactive Scaffolded Solution):** Split the solution step-by-step. Do not give the complete real solution upfront. Provide "juicy," directional feedback. Ask objective questions about what the next mathematical operation or line of code should be, helping the user derive the answer. Reveal the correct code step only after each phase ends.  
* **Slide 2 (Objective Question 1):** Interrogate the logic or algorithm used in the solution.  
* **Slide 3 (Objective Question 2):** Ask about potential runtime errors, efficiency, or alternative methods (e.g., using a while loop instead of a for loop).  
* **Slide 4 (Numerical/Output Question):** Ask for the new output if a specific variable or parameter in the solution is altered.

#### **Flow C: Small Questions (One word, numerical, or single line of code) (exe tags)**

*(Instructional Goal: Implement "Numbers to leave numbers" for rapid intuition building)*

* **Slide (The Question):** The question itself, providing space to answer or select an objective choice.  
* **Note:** Group small questions together sequentially to facilitate rapid, interleaved drill practice, automating syntax recall.

### **4\. Pedagogical and Technical Integration Rules**

* **No Information Loss:** Ensure absolutely no loss of important information, theories, definitions, or example questions from the provided syllabus texts.  
* **Canvas Art Integration:** Every lesson must support canvas art. If visual representation is required (e.g., visualizing a NumPy array transformation, a Pandas DataFrame structure, or a trigonometric curve), the code provided must be explicitly formatted so the rendering engine displays the visual.  
* **Scaffolding:** Interactive proofs and solutions must simulate a tutor guiding the student (Constructionism). Avoid passive walls of text. Ensure a balance of focused and diffuse mode engagement.  
* **Section Summary:** Add a special unit containing a section summary. It must contain exactly as many lessons as there are units in that section, consolidating the concepts.  
* **Chapter Summary:** Add a comprehensive summary for the entire chapter. Provide a summary for each unit in the chapter sequentially, explicitly connecting discrete syntax rules into broader mental models of programming.

## ---


After applying the changes recreate project_snapshot.txt only for new files and files with changes, each time improve modularity of the program by introducing new component files (only on modified or new files), don't modify system files like pubspec, if we need new packages, or file path cahnges, removal etc, give the command for bash

For new css, add new files (dont edit App css)





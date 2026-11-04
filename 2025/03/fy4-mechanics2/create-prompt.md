
Improve the prompt losing anything I wrote but for the syllabus I just gave

improve the lesson slide method based on the books:

## 📘 **10 Books About Enhanced Learning (General Skills & Techniques)**

These books help you understand *how learning works* and *how to learn smarter*.

1. **Make It Stick: The Science of Successful Learning** – Peter C. Brown
   *Evidence-based ways to study and remember.*

2. **A Mind for Numbers** – Barbara Oakley
   *How to learn math and science more effectively (but helpful for all learning).*

3. **The Art of Learning** – Joshua Waitzkin
   *Lessons from chess and martial arts about mastering anything.*

4. **Deep Work** – Cal Newport
   *How to focus deeply and get more high-quality learning done.*

5. **Ultralearning** – Scott H. Young
   *Strategies for intense self-directed learning projects.*

6. **Peak: Secrets from the New Science of Expertise** – Anders Ericsson & Robert Pool
   *The science of developing real skills effectively.*

7. **How We Learn** – Benedict Carey
   *A neuroscience look at how memory and learning actually work.*

8. **The First 20 Hours: How to Learn Anything… Fast!** – Josh Kaufman
   *A beginner-friendly guide to rapid skill learning.*

9. **Learning How to Learn** – Oakley & Sejnowski (adaptation for teens)
   *Study strategies based on cognitive science.*

10. **Mindset: The New Psychology of Success** – Carol S. Dweck
    *Why having a growth mindset improves learning and resilience.*

---

## 📱 **5 Books About Learning Using Technology (Computers, Smartphones, Apps)**

These focus on *how to use tech tools and digital strategies to learn better.*

1. **The Digital Mindset: What It Really Takes to Thrive in the Age of Data, Algorithms, and AI** – Paul H. Daugherty & James Wilson
   *Understanding how digital tools and thinking change learning.*

2. **Learning with Technology: Theories, Tools, and Research** – Various Authors (textbook)
   *Overview of how tech supports effective learning (good if you want deeper study).*

3. **The Edtech Advocate’s Guide to Leading Change in Schools** – Mark Gura
   *How technology can enhance learning — useful for students and educators.*

4. **Mindstorms: Children, Computers, and Powerful Ideas** – Seymour Papert
   *Influential work about learning through computers.*

5. **The Gamification of Learning and Instruction** – Karl M. Kapp
   *How games and apps can be used to motivate and enhance learning.*



PROMPT:
```txt
Make the following changes:


* Your task is create: <content>
---
Note: You are allowed to edit any core functionality and add new type of slides as needed if the topics demand that

Note: When creating solutions for questions and proofs, instead of saying by some defintion (number), by name, state that definition and give its name so user can remember better

Base:

       Chapters are modules in syllabus
       Sections are set of 2-3 units in modules as in syllabus

        


# Slide structure

***

*   **If it is a Core Concept / NCERT Theory / Periodic Trend:**
    *   **Slide 0: The NCERT Anchor (Dual Coding)** – State the core theory, exact NCERT definition, or trend. Highlight keywords.
    *   **Slide 1: Interactive Canvas / Visualization** – Provide a powerful visual representation (e.g., a 3D molecule viewer, interactive periodic table highlighting the trend, or an interactive phase diagram).
    *   **Slide 2: Retrieval Practice 1 (Direct NCERT line)** – A highly specific Fill-in-the-Blank or MCQ based strictly on an exact NCERT line.
    *   **Slide 3: Retrieval Practice 2 (Assertion-Reason)** – Create an Assertion-Reason question testing the *why* behind the concept (crucial for modern NEET).
    *   **Slide 4: Application / Exception Check** – An objective question testing a known exception to this trend or theory.
    *   **Slide 5: NEET PYQ Integration** – A strictly objective Previous Year Question related to this exact concept.

*   **If it is a Physical Chemistry Numerical (Big Question):**
    *   **Slide 0: The Challenge (Retrieval)** – The numerical question itself. Include an interactive "Hint" toggle (showing the formula) but ask the user to attempt it first.
    *   **Slide 1: Interactive Step-by-Step Solution (Elaboration)** – A click-to-reveal pre-written solution. (Step 1: Extract givens $\rightarrow$ Step 2: Formula $\rightarrow$ Step 3: Unit conversions $\rightarrow$ Step 4: Final calculation).
    *   **Slide 2: Conceptual MCQ on the Solution** – Test the methodology (e.g., "Why did we convert the temperature to Kelvin?" or "What assumes ideal behavior here?").
    *   **Slide 3: Unit / Sign Convention Check** – A specific MCQ or one-word question focusing on the trickiest unit or sign convention in this formula.
    *   **Slide 4: NEET PYQ Integration** – A similar numerical from a past NEET paper (Numerical entry or MCQ).

*   **If it is an Organic Reaction / Mechanism:**
    *   **Slide 0: The Reaction Outline** – Show Reactants + Reagents. Ask the user to predict the major product (Objective/MCQ).
    *   **Slide 1: Interactive Mechanism Canvas** – Interactive step-by-step mechanism (e.g., drag-and-drop electrophile/nucleophile, or click-to-reveal electron-pushing arrows).
    *   **Slide 2: Intermediate / Stability Check** – MCQ asking about the stability of the carbocation/carbanion/free radical intermediate formed.
    *   **Slide 3: Stereochemistry / Regioselectivity Check** – MCQ testing Markovnikov/Anti-Markovnikov, Saytzeff, or inversion/retention of configuration.
    *   **Slide 4: NEET PYQ Integration** – A sequence reaction PYQ (e.g., $A \xrightarrow{X} B \xrightarrow{Y} C$) based on this mechanism.

*   **If it is Factual/Inorganic Memorization (Small Questions):**
    *   **Slide 0: Rapid Fire Flashcards (Interleaving)** – Group 3 to 5 small, factual questions together (e.g., oxidation states, flame test colors, catalyst names, ore formulas).
    *   **Format per question:** Question $\rightarrow$ Exact One-Word Input / Numerical Input $\rightarrow$ Pre-written exact match check. Include a short mnemonic or NCERT reference snippet upon answering.

**General Rules for the Output:**
1.  **Emphasize Spaced Repetition:** At the end of every lesson, add one "Flashback Slide" containing an MCQ from a prerequisite or historically related topic.
2.  **Strictly Objective:** Never ask the user to "explain" or "describe". Use formats like: MCQ, Match the Following (Matrix), True/False, exact integer, or A-R.
3.  **High-Yield Focus:** For extremely important NEET topics (like Coordination Compounds, GOC, Chemical Bonding), automatically add 2 extra slides dedicated to common traps/mistakes students make, formatted as "Spot the Error" MCQs.
       
       
       
       Make sure not to lose any important info, theory, definintion, example question

       Also each lesson should support canvas art (so if we need visual reprentation the code there will show the visual)

       Elements:
              - Intractive proof:
                     - It will have all steps as in textbook, but after first step, it will be an objective choice question about next step so it will be like the user creating the proof their self
              - Intractive solution: Just like, solution is split into step by step and it will be like helping user get answer rather than a real solution but it will have the solution after each step ended


Make sure the proofs shows the endning result on beginning so student can look for word to that


Add initial slides:
Add two slides with conceptual objective questions about the topic so user can start thinking even before the topic is taken

Add section summary:
Add a special unit with section summary
It will have as much lessons as units we have in that section

Add chapter summary:
Add a summary for the entire chapter:
       Give summary for each units in the chapter one by one

Note: \boldsymbol wont work with our mathjax (dont use it)

Give seperate files for every intractive canvas art
```

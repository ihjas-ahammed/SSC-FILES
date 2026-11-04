
Improve the prompt losing anything I wrote but for thafheemul quran
It is supposed to help the user understand and memorize everything about the topic with details from Thafheem

Like here, a module will be a Surath
a section will be a set of Ayath from the Surath (like verses from same time)
a unit will be each Ayath and it will have:
   - Lesson of the translation of entire sentences (splitted into slides for easy read, with text to speech)
   - Lesson of match the following word meanings for all words in the verse
   - Lesson of Questions based on Thafheem (about every facts mentioned in Thafheem), (fill in blank and match the following)

Also add more based on ideas you may get ffrom these books

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


* Your task is to create units..
*   **411:** D1 E1 E2 T1 (4 lessons)
*   **412:** D2 T2 E3 (3 lessons)
*   **413:** T3 (1 lesson)
*   **414:** E4 P1 P2 (3 lessons)
in 7.1

Note: this time we are giving units also seperate file because in linear algebra we have to be too modular because there is a lot to generate


T- Theorem
E- Example
exe- execrcise
D- definition
P- practice problem



Note: You are allowed to edit any core functionality and add new type of slides as needed if the topics demand that

Base:

       Chapters are modules in syllabus
       Sections are set of 2-3 units in modules as in syllabus

        
        As for linear algebra, You have to focus on the definitions, use mathjax support, a lesson will be like this:
              - If it is a theory, defintion or corallory etc
                     Slide 0: Theory itself
                     Slide 1: Conceptual objective question 1
                     Slide 2: Conceptual objective question 2
                     Slide 3: Intractive Canvas Art Example (if possible)
                     Slide 4: Intractive Proof (if any, in simple steps easy to remember)
                     Slide 5: A numerical question (if possible)
                     Slide 6: A fill in the blank about same theory (objective)
              - If it is a big question (solution needs steps):
                     Slide 0: The question it self (ask user to try it), include canvas art if needed
                     Slide 1: Intractive Solution
                     Slide 2: Objective question about solution 1
                     Slide 3: Objective question about soultion 2
                     Slide 4: Numarical question (if possible)
              - If it is a small question (one word or numerical):
                     Slide: The question it self (with space to answer or objective)
                Note: Group small questions together

              - For important topics which need more focus, add extra slides
              
              

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
```

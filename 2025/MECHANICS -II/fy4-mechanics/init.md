Make the following changes:

       You are given an template project (on real analysis) and a part of one of the chapters we want process and the entire syllabus to identify Sections(Modules) and Units
       I want you to create an app in the style of Duolingo to help learn the topics in chapters like this, named DuoFY4 - Mechanics 

       You are supposed to create the initial version with all units in section 1 of chapter 1 (but still support more than one sections and chapters, later we populate it)
       like I said, the study tools have this heirarchy:
                - Chapters > Sections > Units > Lessons > Lesson Slides (Theory, Questions etc)

       Chapters are modules in syllabus4
       Sections are set of 2-3 units in modules as in syllabus

        
        As for mechanics, You have to focus on the definitions, use mathjax support, a lesson will be like this:
              - If it is a theory,
                     Slide 1: Theory itself
                     Slide 2: Example
                     Slide 3: Proof (if any, in simple steps easy to remember)
                     Slide 4: A numerical question (if possible)
                     Slide 5, An objective question with four options
                     Slide 7: A fill in the blank about same theory
              - For defintions remove the 2 and 3 as we dont need them
              - If it is an example question, show the question, tell user to try it their selves, then on next slide there will be the solution, after that ask 3-5 omr questions about the solutions as each slides

       Make sure not to lose any important info, theory, definintion, example question

       Also each lesson should support canvas art (so if we need visual reprentation the code there will show the visual)



        For now create the first unit of first section by taking refernce from given image, give speerate files like section1.. section1_1 for data saving modularity

        by finishing each section the users progress is tracked (unit, lesson level)

        Use a black glassy theme
 

After applying the changes recreate project_snapshot.txt only for new files and files with changes, each time improve modularity of the program by introducing new component files (only on modified or new files), don't modify system files like pubspec, if we need new packages, or file path cahnges, removal etc, give the command for bash

For new css, add new files (dont edit App css)



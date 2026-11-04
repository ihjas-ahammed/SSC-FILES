Create an application like duolingo but based on the reference book and syllabus:

The sections will be the modules
Each topic in module will be units
Each lessons will be the content as in reference book


Note: for now, give small content
but make sure to follow the support for following features:

- in lesson screen, make it have custom widgets (so I can give content based on topic like extra graphics and unique games to learn)
- support with latest latex in react
- Optimize for touch screen and mobile view, (also responsive enough for desktop)
- Add advanced progress tracking with XP just as in duolingo but with infinite hearts (use localstorage)

Intractive Proofs:
                - For mathematical level proofs, make it intractive to be working on memory:
                        Instead of directly writing the proof, show initial step, then show two or more possibilities to next step with only one correct, so user can keep finding and selecting the currect steps and by end of it show the entire proof, it will be like the user found the proof and therefore better memory

Give seperate files for each units so I can populate each seperately with a better model

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





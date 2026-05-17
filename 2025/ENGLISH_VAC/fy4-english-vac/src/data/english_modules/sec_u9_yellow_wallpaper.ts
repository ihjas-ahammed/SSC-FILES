import { Section } from '../../types';

export const SEC_U9_YELLOW_WALLPAPER: Section = {
  id: "sec-u9-yellow-wallpaper",
  title: "Unit 9: The Yellow Wallpaper",
  description: "Charlotte Perkins Gilman's chilling critique of the patriarchal 'rest cure'.",
  color: "duo-orange",
  units: [
    {
      id: "u9-part1-intro",
      title: "1. Introduction & Context",
      description: "Background on Charlotte Perkins Gilman and patriarchal medicine.",
      color: "duo-orange",
      lessons: [
        {
          id: "les-u9-intro",
          title: "Author & Context",
          description: "Understanding Gilman's feminist legacy and the 'rest cure'.",
          icon: "User",
          slides: [
            {
              id: "s-u9-hook",
              type: "interactive_canvas",
              title: "The Descent into Madness",
              content: "In the 19th century, doctors believed that intellectual stimulation could 'exhaust' a woman's reproductive organs. The prescribed cure? Total, mind-numbing idleness.\n\nUse the slider below to see what months of forced isolation does to a creative mind.",
              interactiveCanvasId: "yellow_wallpaper"
            },
            {
              id: "s-u9-author",
              type: "theory",
              title: "Charlotte Perkins Gilman",
              content: `**Charlotte Perkins Gilman (1860–1935)** was a pioneering American writer, feminist theorist, and social reformer.\n\nAfter giving birth to her daughter, Gilman suffered from severe postpartum depression. She was prescribed an infamous "rest cure" by Dr. Silas Weir Mitchell, which required her to live a domestic life, avoid all intellectual activity, and "never touch pen, brush, or pencil again."\n\nThis devastating experience directly inspired *The Yellow Wallpaper*.`
            },
            {
              id: "s-u9-genre",
              type: "theory",
              title: "What are we reading?",
              content: `**Genre:** Psychological Horror / Feminist Fiction\n\n**The Core Themes:**\n* **Patriarchal Medicine:** How male doctors infantilized women and dismissed their mental health.\n* **Autonomy & Expression:** The destructive consequences of suppressing female creativity.\n* **Symbolism:** The yellow wallpaper as a physical manifestation of domestic confinement.`
            },
            {
               id: "s-u9-pre-mcq",
               type: "quiz",
               title: "Pre-reading Check",
               content: "Based on the concept of the 'rest cure', what effect do you think absolute idleness will have on the highly imaginative narrator?",
               options: [
                 { id: "A", text: "It will help her mind recover by removing stress.", isCorrect: false, explanation: "Without an outlet, an active mind turns on itself." },
                 { id: "B", text: "It will cause her mind to invent its own chaotic, obsessive stimulation.", isCorrect: true, explanation: "Exactly. Deprived of work, she fixates on the only thing she can study: the wallpaper." }
               ]
            }
          ]
        }
      ]
    },
    {
      id: "u9-part2-text1",
      title: "2. The Rest Cure",
      description: "The narrator is confined to the atrocious nursery.",
      color: "duo-blue",
      lessons: [
        {
          id: "les-u9-tx1",
          title: "The Haunted House",
          description: "A colonial mansion and a practical husband.",
          icon: "Search",
          slides: [
            {
              id: "s-u9-tx1-1",
              type: "theory",
              title: "The Ancestral Hall",
              content: `> "It is very seldom that mere ordinary people like John and myself secure ancestral halls for the summer. \n>\n> A colonial mansion, a hereditary estate, I would say a haunted house, and reach the height of romantic felicity—but that would be asking too much of fate!\n>\n> Still I will proudly declare that there is something queer about it. Else, why should it be let so cheaply? And why have stood so long untenanted? John laughs at me, of course, but one expects that in marriage."`
            },
            {
              id: "s-u9-tx1-2",
              type: "theory",
              title: "Practical John",
              content: `> "John is practical in the extreme. He has no patience with faith, an intense horror of superstition, and he scoffs openly at any talk of things not to be felt and seen and put down in figures.\n>\n> John is a physician, and PERHAPS—(I would not say it to a living soul, of course, but this is dead paper and a great relief to my mind)—PERHAPS that is one reason I do not get well faster.\n>\n> You see he does not believe I am sick!"`
            },
            {
              id: "s-u9-tx1-3",
              type: "quiz",
              title: "Inference Check",
              content: "What does the narrator mean when she suggests John's profession is the reason she does not get well faster?",
              options: [
                { id: "A", text: "He works too much and ignores her entirely.", isCorrect: false, explanation: "He controls her entirely, he doesn't ignore her." },
                { id: "B", text: "As a highly rational doctor, he dismisses her emotional suffering because it cannot be 'felt and seen and put down in figures'.", isCorrect: true, explanation: "John invalidates her lived experience because it isn't a visible, physical illness." }
              ]
            }
          ]
        },
        {
          id: "les-u9-tx2",
          title: "Forbidden to Work",
          description: "The strict prescription of idleness.",
          icon: "Search",
          slides: [
            {
              id: "s-u9-tx2-1",
              type: "theory",
              title: "The Prescription",
              content: `> "And what can one do? If a physician of high standing, and one’s own husband, assures friends and relatives that there is really nothing the matter with one but temporary nervous depression—a slight hysterical tendency—what is one to do?\n>\n> My brother is also a physician, and also of high standing, and he says the same thing. So I take phosphates or phosphites—whichever it is—tonics, and journeys, and air, and exercise, and am ply forbidden to 'work' until I am well again."`
            },
            {
              id: "s-u9-tx2-2",
              type: "theory",
              title: "Sly Writing",
              content: `> "Personally, I disagree with their ideas. Personally, I believe that congenial work, with excitement and change, would do me good. But what is one to do?\n>\n> I did write for a while in spite of them; but it DOES exhaust me a good deal—having to be so sly about it, or else meet with heavy opposition."`
            },
            {
              id: "s-u9-tx2-3",
              type: "theory",
              title: "The Delicious Garden",
              content: `> "I sometimes fancy that in my condition if I had less opposition and more society and stimulus—but John says the very worst thing I can do is to think about my condition, and I confess it always makes me feel bad. So I will let it alone and talk about the house.\n>\n> The most beautiful place! ... There is a DELICIOUS garden! I never saw such a garden—large and shady, full of box-bordered paths, and lined with long grape-covered arbors with seats under them."`
            }
          ]
        },
        {
          id: "les-u9-tx3",
          title: "The Atrocious Nursery",
          description: "Moving into the barred room.",
          icon: "Search",
          slides: [
            {
              id: "s-u9-tx3-1",
              type: "theory",
              title: "Neglecting Self-Control",
              content: `> "I get unreasonably angry with John sometimes. I’m sure I never used to be so sensitive. I think it is due to this nervous condition. But John says if I feel so, I shall neglect proper self-control; so I take pains to control myself—before him, at least, and that makes me very tired.\n>\n> He is very careful and loving, and hardly lets me stir for two beds, and no near room for him if he took another. He said there was only one window and not room for two beds, and no near room for him if he took another."`
            },
            {
              id: "s-u9-tx3-2",
              type: "theory",
              title: "The Schedule",
              content: `> "I have a schedule prescription for each hour in the day; he takes all care from me, and so I feel basely ungrateful not to value it more.\n>\n> He said we came here solely on my account, that I was to have perfect rest and all the air I could get. 'Your exercise depends on your strength, my dear,' said he, 'and your food somewhat on your appetite; but air you can absorb all the time.' So we took the nursery at the top of the house."`
            },
            {
              id: "s-u9-tx3-3",
              type: "theory",
              title: "Barred Windows",
              content: `> "It is a big, airy room, the whole floor nearly, with windows that look all ways, and air and sunshine galore. It was nursery first and then playroom and gymnasium, I should judge; for the windows are barred for little children, and there are rings and things in the walls.\n>\n> The paint and paper look as if a boy’s school had used it. It is stripped off—the paper—in great patches all around the head of my bed... I never saw a worse paper in my life."`
            },
            {
              id: "s-u9-tx3-4",
              type: "quiz",
              title: "Symbolism Check",
              content: "What do the 'barred windows' and the fact that the room is a 'nursery' symbolize about the narrator's situation?",
              options: [
                { id: "A", text: "That John is protecting her from a dangerous outside world.", isCorrect: false, explanation: "While John claims he is protecting her, the symbols point to her lack of freedom." },
                { id: "B", text: "That she is being imprisoned and infantilized (treated like a child) by her husband and society.", isCorrect: true, explanation: "Placing an adult woman in a barred nursery perfectly symbolizes how the patriarchy infantilizes women." }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "u9-part3-text2",
      title: "3. The Yellow Wallpaper",
      description: "The pattern begins to take hold of her mind.",
      color: "duo-green",
      lessons: [
        {
          id: "les-u9-tx4",
          title: "Optic Horror",
          description: "Describing the grotesque pattern.",
          icon: "Search",
          slides: [
            {
              id: "s-u9-tx4-1",
              type: "theory",
              title: "No Reason to Suffer",
              content: `> "I am glad my case is not serious! But these nervous troubles are dreadfully depressing. John does not know how much I really suffer. He knows there is no REASON to suffer, and that satisfies him.\n>\n> Of course it is only my nervousness. It does weigh on me so not to do my duty in any way!... There comes John, and I must put this away, he hates to have me write a word."`
            },
            {
              id: "s-u9-tx4-2",
              type: "theory",
              title: "A Revolting Color",
              content: `> "No wonder the children hated it! I should hate it myself if I had to live in this room for long. It is a dull yet lurid orange in some places, a sickly sulphur tint in others.\n>\n> The color is repellent, almost revolting: a smouldering unclean yellow, strangely faded by the slow-turning sunlight."`
            },
            {
              id: "s-u9-tx4-3",
              type: "theory",
              title: "Wallowing Seaweeds",
              content: `> "One of those sprawling flamboyant patterns committing every artistic sin. It is dull enough to confuse the eye in following, pronounced enough to constantly irritate and provoke for a little distance they suddenly commit suicide—plunge off at outrageous angles, destroy themselves in unheard of contradictions.\n>\n> But, on the other hand, they connect diagonally, and the sprawling outlines run off in great slanting waves of optic horror, like a lot of wallowing seaweeds in full chase."`
            }
          ]
        },
        {
          id: "les-u9-tx5",
          title: "A Comparative Burden",
          description: "John laughs at her fancies.",
          icon: "Search",
          slides: [
            {
              id: "s-u9-tx5-1",
              type: "theory",
              title: "Columns of Futility",
              content: `> "The whole thing goes horizontally, too, at least it seems so, and I exhaust myself in trying to distinguish the order of its going in that direction.\n>\n> Looked at in one way each breadth stands alone, the bloated curves and flourishes—a kind of “debased Romanesque” with delirium tremens—go waddling up and down in isolated columns of futility."`
            },
            {
              id: "s-u9-tx5-2",
              type: "theory",
              title: "The Laughing Husband",
              content: `> "I meant to be such a help to John, such a real rest and comfort, and here I am a comparative burden already! ... It is fortunate Mary is so good with the baby. Such a dear baby! And yet I CANNOT be with him, it makes me so nervous.\n>\n> I suppose John never was nervous in his life. He laughs at me so about this wall-paper! At first he meant to repaper the room, but afterwards he said that I was letting it get the better of me, and that nothing was worse for a nervous patient than to give way to such fancies."`
            },
            {
              id: "s-u9-tx5-3",
              type: "theory",
              title: "Refusing to Leave",
              content: `> "He said that after the wall-paper was changed it would be the heavy bedstead, and then the barred windows, and then that gate at the head of the stairs, and so on... 'Then do let us go downstairs,' I said, 'there are such pretty rooms there.'\n>\n> Then he took me in his arms and called me a blessed little goose, and said he would go down to the cellar, if I wished, and have it whitewashed into the bargain."`
            },
            {
              id: "s-u9-tx5-4",
              type: "quiz",
              title: "Analysis",
              content: "When John calls her a 'blessed little goose', what tone is he using?",
              options: [
                { id: "A", text: "Condescending and infantilizing.", isCorrect: true, explanation: "He treats her like a silly child, dismissing her genuine discomfort." },
                { id: "B", text: "Respectful and egalitarian.", isCorrect: false, explanation: "The term 'little goose' is dismissive and belittling." }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "u9-part4-text3",
      title: "4. The Eyes in the Wall",
      description: "The pattern begins to watch her.",
      color: "duo-orange",
      lessons: [
        {
          id: "les-u9-tx6",
          title: "Vicious Influence",
          description: "The pattern comes alive.",
          icon: "Search",
          slides: [
            {
              id: "s-u9-tx6-1",
              type: "theory",
              title: "Story-Making",
              content: `> "I always fancy I see people walking in these numerous paths and arbors, but John has cautioned me not to give way to fancy in the least. He says that with my imaginative power and habit of story-making, a nervous weakness like mine is sure to lead to all manner of excited fancies, and that I ought to use my will and good sense to check the tendency. So I try.\n>\n> I think sometimes that if I were only well enough to write a little it would relieve the press of ideas and rest me. But I find I get pretty tired when I try."`
            },
            {
              id: "s-u9-tx6-2",
              type: "theory",
              title: "Bulbous Eyes",
              content: `> "I wish I could get well faster. But I must not think about that. This paper looks to me as if it KNEW what a vicious influence it had!\n>\n> There is a recurrent spot where the pattern lolls like a broken neck and two bulbous eyes stare at you upside down. I get positively angry with the impertinence of it and the everlastingness. Up and down and sideways they crawl, and those absurd, unblinking eyes are everywhere. There is one place where two breadths didn’t match, and the eyes go all up and down the line, one a little higher than the other."`
            },
            {
              id: "s-u9-tx6-3",
              type: "theory",
              title: "Inanimate Expressions",
              content: `> "I never saw so much expression in an inanimate thing before, and we all know how much expression they have! I used to lie awake as a child and get more entertainment and terror out of blank walls and plain furniture than most children could find in a toy store.\n>\n> I remember what a kindly wink the knobs of our big, old bureau used to have, and there was one chair that always seemed like a strong friend."`
            }
          ]
        },
        {
          id: "les-u9-tx7",
          title: "The Sub-Pattern",
          description: "A dim shape skulks behind.",
          icon: "Search",
          slides: [
            {
              id: "s-u9-tx7-1",
              type: "theory",
              title: "A Stricken Room",
              content: `> "The wall-paper, as I said before, is torn off in spots, and it sticketh closer than a brother—they must have had perseverance as well as hatred. Then the floor is scratched and gouged and splintered, the plaster itself is dug out here and there, and this great heavy bed which is all we found in the room, looks as if it had been through the wars.\n>\n> But I don’t mind it a bit—only the paper."`
            },
            {
              id: "s-u9-tx7-2",
              type: "theory",
              title: "Jennie the Housekeeper",
              content: `> "There comes John’s sister. Such a dear girl as she is, and so careful of me! I must not let her find me writing. She is a perfect and enthusiastic housekeeper, and hopes for no better profession. I verily believe she thinks it is the writing which made me sick!\n>\n> But I can write when she is out, and see her a long way off from these windows."`
            },
            {
              id: "s-u9-tx7-3",
              type: "theory",
              title: "The Skulking Figure",
              content: `> "This wall-paper has a kind of sub-pattern in a different shade, a particularly irritating one, for you can only see it in certain lights, and not clearly then.\n>\n> But in the places where it isn’t faded and where the sun is just so—I can see a strange, provoking, formless sort of figure, that seems to skulk about behind that silly, and conspicuous front design.\n>\n> There’s sister on the stairs!"`
            },
            {
              id: "s-u9-tx7-4",
              type: "quiz",
              title: "Psychological Projection",
              content: "As the narrator's isolation deepens, she begins to see a 'figure that seems to skulk about' behind the main pattern. What is happening psychologically?",
              options: [
                { id: "A", text: "She is projecting her own feelings of entrapment onto the wallpaper.", isCorrect: true, explanation: "The figure trapped behind the pattern represents her own trapped psyche." },
                { id: "B", text: "She is developing a keen eye for interior design.", isCorrect: false, explanation: "This is a manifestation of her declining mental state." }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "u9-part5-text4",
      title: "5. A Prisoner's Despair",
      description: "A failed plea to leave the house.",
      color: "duo-blue",
      lessons: [
        {
          id: "les-u9-tx8",
          title: "Gymnastics of the Eye",
          description: "Trying to follow the pointless pattern.",
          icon: "Search",
          slides: [
            {
              id: "s-u9-tx8-1",
              type: "theory",
              title: "Crying Alone",
              content: `> "Well, the Fourth of July is over! The people are gone, and I am tired out... John says if I don’t pick up faster he shall send me to Weir Mitchell in the fall. But I don’t want to go there at all. I had a friend who was in his hands once, and she says he is just like John and my brother, only more so!\n>\n> ...I cry at nothing, and cry most of the time. Of course I don’t when John is here, or anybody else, but when I am alone."`
            },
            {
              id: "s-u9-tx8-2",
              type: "theory",
              title: "Pointless Pattern",
              content: `> "I’m getting really fond of the room in spite of the wall-paper. Perhaps BECAUSE of the wall-paper. It dwells in my mind so! I lie here on this great immovable bed—it is nailed down, I believe—and follow that pattern about by the hour. It is as good as gymnastics, I assure you."`
            },
            {
              id: "s-u9-tx8-3",
              type: "theory",
              title: "Defiance of Law",
              content: `> "I know a little of the principle of design, and I know this thing was not arranged on any laws of radiation, or alternation, or repetition, or symmetry, or anything else that I ever heard of.\n>\n> They have used a horizontal breadth for a frieze, and that adds wonderfully to the confusion... the interminable grotesques seem to form around a common centre and rush off in headlong plunges of equal distraction."`
            }
          ]
        },
        {
          id: "les-u9-tx9",
          title: "The Moonlight Plea",
          description: "A desperate attempt to escape.",
          icon: "Search",
          slides: [
            {
              id: "s-u9-tx9-1",
              type: "theory",
              title: "Losing Strength",
              content: `> "I don’t know why I should write this: I don’t want to. I don’t feel able. And I know John would think it absurd. But I MUST say what I feel and think in some way—it is such a relief!\n>\n> Half the time now I am awfully lazy... John says I mustn’t lose my strength, and has me take cod liver oil and lots of tonics and things, to say nothing of ale and wine and rare meat."`
            },
            {
              id: "s-u9-tx9-2",
              type: "theory",
              title: "A Vain Attempt",
              content: `> "I tried to have a real earnest reasonable talk with him the other day, and tell him how I wish he would let me go and make a visit to Cousin Henry and Julia. But he said I wasn’t able to go, nor able to stand it after I got there; and I did not make out a very good case for myself, for I was crying before I had finished.\n>\n> And dear John gathered me up in his arms, and just carried me upstairs and laid me on the bed, and sat by me and read to me till it tired my head."`
            },
            {
              id: "s-u9-tx9-3",
              type: "theory",
              title: "The Moonlight Watches",
              content: `> "It is so hard to talk with John about my case, because he is so wise, and because he loves me so. But I tried last night. It was moonlight. The moon shines in all around just as the sun does.\n>\n> John was asleep and I hated to waken him, so I kept still and watched the moonlight on that undulating wall-paper till I felt creepy. The faint figure behind seemed to shake the pattern, just as if she wanted to get out."`
            },
            {
              id: "s-u9-tx9-4",
              type: "theory",
              title: "The Rejection",
              content: `> "I told him that I really was not gaining here, and that I wished he would take me away.\n>\n> 'Why darling!' said he, 'our lease will be up in three weeks, and I can’t see how to leave before... Of course if you were in any danger, I could and would, but you really are better, dear, whether you can see it or not. I am a doctor, dear, and I know.'\n>\n> 'I don’t weigh a bit more,' said I... 'and my appetite may be better in the evening when you are here, but it is worse in the morning when you are away!'" `
            },
            {
              id: "s-u9-tx9-5",
              type: "theory",
              title: "Silenced",
              content: `> "'Better in body perhaps—' I began, and stopped short, for he sat up straight and looked at me with such a stern, reproachful look that I could not say another word.\n>\n> 'My darling,' said he, 'I beg of you, for my sake and for our child’s sake, as well as for your own, that you will never for one instant let that idea enter your mind! There is nothing so dangerous, so fascinating, to a temperament like yours. It is a false and foolish fancy.'" `
            }
          ]
        }
      ]
    },
    {
      id: "u9-part6-text5",
      title: "6. The Woman and the Bars",
      description: "The pattern turns into a prison.",
      color: "duo-orange",
      lessons: [
        {
          id: "les-u9-tx10",
          title: "Bars by Moonlight",
          description: "Seeing the woman clearly.",
          icon: "Search",
          slides: [
            {
              id: "s-u9-tx10-1",
              type: "theory",
              title: "Torturing Pattern",
              content: `> "The color is hideous enough, and unreliable enough, and infuriating enough, but the pattern is torturing. You think you have mastered it, but just as you get well underway in following, it turns a back-somersault and there you are. It slaps you in the face, knocks you down, and tramples upon you. It is like a bad dream.\n>\n> The outside pattern is a florid arabesque, reminding one of a fungus."`
            },
            {
              id: "s-u9-tx10-2",
              type: "theory",
              title: "Becoming Bars",
              content: `> "There is one marked peculiarity about this paper, a thing nobody seems to notice but myself, and that is that it changes as the light changes... By moonlight—the moon shines in all night when there is a moon—I wouldn’t know it was the same paper.\n>\n> At night in any kind of light, in twilight, candle light, lamplight, and worst of all by moonlight, it becomes bars! The outside pattern I mean, and the woman behind it is as plain as can be."`
            },
            {
              id: "s-u9-tx10-3",
              type: "fill_in_blank",
              title: "The Ultimate Symbol",
              content: "At night, by moonlight, the outside pattern of the wallpaper becomes ___.",
              blankAnswer: "bars"
            }
          ]
        },
        {
          id: "les-u9-tx11",
          title: "Paranoia and The Smell",
          description: "A creeping, yellow odor.",
          icon: "Search",
          slides: [
            {
              id: "s-u9-tx11-1",
              type: "theory",
              title: "Cultivating Deceit",
              content: `> "I lie down ever so much now. John says it is good for me, and to sleep all I can... It is a very bad habit I am convinced, for you see I don’t sleep. And that cultivates deceit, for I don’t tell them I’m awake—O no!\n>\n> The fact is I am getting a little afraid of John. He seems very queer sometimes, and even Jennie has an inexplicable look. It strikes me occasionally, just as a scientific hypothesis,—that perhaps it is the paper!"`
            },
            {
              id: "s-u9-tx11-2",
              type: "theory",
              title: "Catching Them",
              content: `> "I have watched John when he did not know I was looking... and I’ve caught him several times LOOKING AT THE PAPER! And Jennie too. I caught Jennie with her hand on it once.\n>\n> ...She said that the paper stained everything it touched, that she had found yellow smooches on all my clothes and John’s, and she wished we would be more careful! Did not that sound innocent? But I know she was studying that pattern..."`
            },
            {
              id: "s-u9-tx11-3",
              type: "theory",
              title: "The Yellow Smell",
              content: `> "It is the strangest yellow, that wall-paper! It makes me think of all the yellow things I ever saw—not beautiful ones like buttercups, but old foul, bad yellow things.\n>\n> But there is something else about that paper—the smell!... It creeps all over the house. I find it hovering in the dining-room, skulking in the parlor, hiding in the hall, lying in wait for me on the stairs."`
            },
            {
              id: "s-u9-tx11-4",
              type: "theory",
              title: "Shaking the Bars",
              content: `> "The front pattern DOES move—and no wonder! The woman behind shakes it! Sometimes I think there are a great many women behind, and sometimes only one, and she crawls around fast, and her crawling shakes it all over.\n>\n> Then in the very bright spots she keeps still, and in the very shady spots she just takes hold of the bars and shakes them hard. And she is all the time trying to climb through. But nobody could climb through that pattern—it strangles so; I think that is why it has so many heads."`
            }
          ]
        }
      ]
    },
    {
      id: "u9-part7-text6",
      title: "7. The Breakout",
      description: "The chilling climax.",
      color: "duo-violet",
      lessons: [
        {
          id: "les-u9-tx12",
          title: "Creeping by Daylight",
          description: "Total identification with the trapped woman.",
          icon: "Search",
          slides: [
            {
              id: "s-u9-tx12-1",
              type: "theory",
              title: "I've Seen Her",
              content: `> "I think that woman gets out in the daytime! And I’ll tell you why—privately—I’ve seen her! I can see her out of every one of my windows!\n>\n> It is the same woman, I know, for she is always creeping, and most women do not creep by daylight. I see her in that long shaded lane, creeping up and down. I see her here in those dark grape arbores, creeping all around the garden."`
            },
            {
              id: "s-u9-tx12-2",
              type: "theory",
              title: "The Last Day",
              content: `> "Hurrah! This is the last day, but it is enough. John is to stay in town over night, and won’t be out until this evening.\n>\n> Jennie wanted to sleep with me—the sly thing! but I told her I should undoubtedly rest better for a night all alone. That was clever, for really I wasn’t alone a bit! As soon as it was moonlight and that poor thing began to crawl and shake the pattern, I got up and ran to help her."`
            },
            {
              id: "s-u9-tx12-3",
              type: "theory",
              title: "Peeling the Paper",
              content: `> "I pulled and she shook, I shook and she pulled, and before morning we had peeled off yards of that paper.\n>\n> ...I told her [Jennie] merrily that I did it out of pure spite at the vicious thing. She laughed and said she wouldn’t mind doing it herself, but I must not get tired. How she betrayed herself that time!\n>\n> But I am here, and no person touches this paper but me—not ALIVE!"`
            }
          ]
        },
        {
          id: "les-u9-tx13",
          title: "The Climax",
          description: "Out at last.",
          icon: "Search",
          slides: [
            {
              id: "s-u9-tx13-1",
              type: "theory",
              title: "Locked In",
              content: `> "I have locked the door and thrown the key down into the front path. I don’t want to go out, and I don’t want to have anybody come in, till John comes. I want to astonish him.\n>\n> I’ve got a rope up here that even Jennie did not find. If that woman does get out, and tries to get away, I can tie her!"`
            },
            {
              id: "s-u9-tx13-2",
              type: "theory",
              title: "Desperation",
              content: `> "This bed will NOT move! I tried to lift and push it until I was lame, and then I got so angry I bit off a little piece at one corner—but it hurt my teeth.\n>\n> ...I don’t like to LOOK out of the windows even—there are so many of those creeping women, and they creep so fast. I wonder if they all come out of that wall-paper as I did?"`
            },
            {
              id: "s-u9-tx13-3",
              type: "quiz",
              title: "The Shift in Identity",
              content: "What does the phrase 'I wonder if they all come out of that wall-paper as I did?' reveal?",
              options: [
                { id: "A", text: "She believes she was the woman trapped in the wallpaper all along.", isCorrect: true, explanation: "She has completely lost her original identity and merged with the hallucination." },
                { id: "B", text: "She is realizing that the wallpaper is just paper.", isCorrect: false, explanation: "She has completely succumbed to the psychosis." }
              ]
            },
            {
              id: "s-u9-tx13-4",
              type: "theory",
              title: "John at the Door",
              content: `> "Why there’s John at the door! It is no use, young man, you can’t open it! How he does call and pound! Now he’s crying for an axe.\n>\n> 'John dear!' said I in the gentlest voice, 'the key is down by the front steps, under a plantain leaf!' ... he got it of course, and came in. He stopped short by the door.\n>\n> 'What is the matter?' he cried. 'For God’s sake, what are you doing!'" `
            },
            {
              id: "s-u9-tx13-5",
              type: "theory",
              title: "Creeping Over Him",
              content: `> "I kept on creeping just the same, but I looked at him over my shoulder.\n>\n> 'I’ve got out at last,' said I, 'in spite of you and Jane. And I’ve pulled off most of the paper, so you can’t put me back!'\n>\n> Now why should that man have fainted? But he did, and right across my path by the wall, so that I had to creep over him every time!"`
            }
          ]
        }
      ]
    },
    {
      id: "u9-part8-mastery",
      title: "8. Vocabulary & Exam Prep",
      description: "Master key terms and tackle exam questions.",
      color: "duo-orange",
      lessons: [
        {
          id: "les-u9-vocab",
          title: "Glossary",
          description: "Key words from the text.",
          icon: "Type",
          slides: [
            {
              id: "v-u9-1",
              type: "word_card",
              content: "Vocabulary",
              wordCard: {
                word: "Felicity",
                translation: "Intense happiness.",
                context: "> \"...and reach the height of romantic felicity...\"",
                example: "She smiled with complete felicity."
              }
            },
            {
              id: "v-u9-2",
              type: "word_card",
              content: "Vocabulary",
              wordCard: {
                word: "Atrocious",
                translation: "Horrifyingly wicked or of a very poor quality.",
                context: "> \"I am sitting by the window now, up in this atrocious nursery...\"",
                example: "The wallpaper's design was absolutely atrocious."
              }
            },
            {
              id: "v-u9-3",
              type: "word_card",
              content: "Vocabulary",
              wordCard: {
                word: "Querulous",
                translation: "Complaining in a petulant or whining manner.",
                context: "> \"I’m getting dreadfully fretful and querulous.\"",
                example: "The prolonged rest cure made her understandably querulous."
              }
            },
            {
              id: "v-u9-4",
              type: "word_card",
              content: "Vocabulary",
              wordCard: {
                word: "Derision",
                translation: "Contemptuous ridicule or mockery.",
                context: "> \"...and waddling fungus growths just shriek with derision!\"",
                example: "Her ideas were met with derision by the patriarchal medical establishment."
              }
            }
          ]
        },
        {
          id: "les-u9-exam",
          title: "Model Questions",
          description: "Practice answering in the format of the exam.",
          icon: "Edit3",
          slides: [
            {
              id: "s-u9-qa1",
              type: "theory",
              title: "Section A (2 Marks) - Model Question",
              content: `**Q: What role does John, the narrator's husband, play in her mental decline?**\n\n**Model Answer:**\nJohn, acting as both her husband and physician, strictly enforces the "rest cure," dismissing her legitimate concerns as a "slight hysterical tendency." By isolating her in the nursery and forbidding her from writing or engaging in any intellectual stimulation, he inadvertently accelerates her psychological breakdown, driving her to project her feelings of entrapment onto the yellow wallpaper.`
            },
            {
              id: "s-u9-qc1",
              type: "theory",
              title: "Section C (10 Marks) - Essay Outline",
              content: `**Q: Examine The Yellow Wallpaper as a critique of 19th-century patriarchal medicine and the "rest cure".**\n\n**Essay Outline:**\n1. **Introduction:** Introduce Gilman's purpose—to indict the "rest cure" prescribed for women diagnosed with "hysteria." John embodies the arrogant medical establishment.\n2. **Infantilization:** The prescription of total idleness strips the narrator of autonomy. Being locked in a barred "nursery" symbolizes how society treated women as children.\n3. **Suppression of Expression:** John forbids her to write. Without an intellectual outlet, her mind turns inward and obsesses over the wallpaper.\n4. **Descent into Madness:** The rest cure *causes* her madness rather than curing it. The woman behind the "bars" of the wallpaper is a projection of her own trapped psyche.\n5. **Conclusion:** Tearing down the paper is a tragic rejection of societal norms. The story proves that women's "nervous disorders" were often caused by suffocating domesticity and misguided male medical authority.`
            }
          ]
        }
      ]
    }
  ]
};
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";


export default function Blog() {
  // Palette A mapping (soft pastel)
  const categoryColor = {
    Anxiety: "bg-red-200",
    Relationships: "bg-blue-200",
    "Self-Care": "bg-yellow-200",
    Depression: "bg-rose-200",
    Digital: "bg-purple-200",
    Stress: "bg-orange-200",
    Grief: "bg-slate-200",
    Isolation: "bg-green-200",
    "Life Transitions": "bg-teal-200",
    "Older Adults": "bg-emerald-200",
    Music: "bg-indigo-200",
    Wellness: "bg-yellow-200"
  };

  const posts = [
    // 1 — Emotional hangover
    {
      id: 1,
      category: "Anxiety",
      title: "Dealing With An Emotional Hangover",
      minutes: "6 min read",
      image: "blog1.png",
      content:
`Emotional hangover, much like being hungover from drinking the night before, is when a person feels physically and emotionally drained in the morning following an emotionally taxing situation.

This could mean getting into a fight with somebody that you might have built a strong relationship with, feeling like you failed at something that you had been working so hard to achieve, or even a positive event that stimulates intense emotions. Unfortunately, this can be the start of many mental health problems – instead of recognizing an emotional hangover, one might feel that they are simply just being lazy and not doing anything useful. However, it’s important to acknowledge that these emotions are valid, and what can help are remedies to help overcome these dreadful emotional hangovers.

But how do I know when I’m experiencing an emotional hangover? Well, if you ever feel unusually lethargic and are for some reason having negative feelings about yourself or a particular situation, you may want to consider the possibility.  Some additional symptoms are muscle tension, headaches or other physical ailments, feelings of guilt or remorse, sadness, fatigue, irritability, and feeling drained or burned out (Gillis 2023).

Once you have better understood the cause of your feelings,  it is important to learn how to cope healthily. According to Charlies Health, there are a few simple steps that you should incorporate in your daily life:

1. Prioritize your self care. Everyone deserves a little time to themselves where they focus on improving their wellbeing on a journey to increasing their self confidence. One method I find helpful for self care is wearing a face mask to help feel rejuvenated and more awake. If you do not have access to store bought/ready made face masks, you can always make a simple homemade mask with three simple ingredients (turmeric, water, and honey). 
   
   Some other habits you could incorporate are deep breathing or physical exercises, journaling (which can be extremely helpful when you are keeping a lot of emotions bottled up), listening to music you love, taking a hot shower or a bubble bath, eating healthy food/not skipping meals, and most importantly, staying hydrated (Ladarer 2023).

2. Stay active consistently. Physical exercise is extremely important because not only will it motivate you to get out of bed, but it will also help boost bodily hormones, which can boost mood and reduce anxiety

3. Surround yourself with people that care about you and can uplift you depending on what might’ve caused those negative emotions. Remember, you can only be successful and motivated when you surround yourself with the people that want the best for you. This includes your family, friends, and even the mentors you choose to make a rapport with.

4. Be patient with yourself. Give yourself time to recover and work on yourself. Remember that everyday is a new day and you will constantly be learning, but sometimes in order to grow you need to learn to not be frustrated with yourself. Along with this, if you are recovering from a traumatic event, and you feel like you need more help, do not try fixing it by yourself. Make sure to seek help if you need it and use the support of the people that you trust with your feelings.

`
    },

    // 2 — Academic pressure 
    {
      id: 2,
      category: "Stress",
      title: "Overcoming Academic Pressure for a Healthy Lifestyle",
      minutes: "4 min read",
      image: "blog2.png",
      content:
`
Take a campfire for example. The more stressors you add to it, the bigger the flames grow. Sometimes the fire can even get out of control when there are other unplanned forces acting on it. This is much like the human body and mind; the more negative thoughts we feed ourselves, the harder it is to control our mental health. Often, in an academic setting, especially in an overtly competitive one, it is hard to control our thoughts and emotions because we are constantly led to compare ourselves to the people who may be more successful or doing better than us.

However, it is important to first understand that every person is different, and every person has their own path to follow. Just because we feel lost, it does not mean we are not doing enough. And while it is important to always try our best, it is also important not to starve ourselves of the fun we should be able to experience. Additionally, when it comes to managing school work and extracurriculars, it really all comes down to one question: How effectively am I using my time and balancing it between an academic and home life balance? Many times it is hard to maintain this because people feel overstimulated by the amount they think they have to accomplish in the little time they have given themselves. What they do not realize is that it is in their hands to manage their academic pressures and stress in a way that does not cause them to overwork themselves.

According to the Harvard Division of Education, some tips that are recommended for managing stress in high school include keeping a journal to write down daily thoughts as an emotional outlet, exercising daily in order to help produce endorphins and reduce the possibility of negative mental health effects, eating regularly and not skipping meals, getting enough sleep to have energy for other activities, doing relaxation exercises (such as deep breathing, visualization, or meditating), and limiting caffeinated drinks. It is extremely important to keep a consistent schedule with the above habits in order to improve daily focus and prevent the scope for distractions. This will help improve productivity, making it easier to finish the days’ work in a timely manner and in turn, leaving time for other activities.

According to the Pacific Teen Treatment, research also shows that extracurriculars can actually have a positive impact on mental health because they act as healthy outlets for stress. While it is important to not take on more extracurriculars than one can manage, doing activities that we are actually passionate about and allowing us to be surrounded by minds that think alike, can provide a way to divert our focus away from school pressures. Additionally, demonstrating success in the extracurricular environment such as mastering a piece on an instrument can contribute to improving confidence and self esteem because it allows us to prove to ourselves that we are capable of achieving what we work towards. This also teaches people time management as doing so requires a person to pre plan their days and create a schedule (ex: completing homework in the morning on a Saturday, volunteering from 2-4, attending dance practice from 4:30 - 6, studying for a science test the next day, and still managing to attend family dinner at 7:30).

One of the most important parts of reducing stress in an academic setting is also making sure to maintain strong social connections. This means that no matter how busy one might be, it is important to still make time, even if it’s only a few minutes, to talk to somebody, be it a family member, a friend, or even a trusted adult. It is important to talk about topics that are not related to work but topics that allow one to have a leisure conversation. These types of positive conversations also contribute to destressing by helping boost happiness through a positive environment. Therefore, no matter how hard balancing a particular aspect of life might be, I urge us all to continue maintaining positive relationships to help create a positive mental health.

In conclusion, maintaining a consistent daily schedule, indulging in extracurriculars that exercise our passions, and maintaining strong relationships can all help one overcome academic pressure by implementing a healthier lifestyle, reducing the flames in the fire.

`
    },

    // 3 — Mindfulness 
    {
      id: 3,
      category: "Wellness",
      title: "Practicing Mindfulness: Living in the Moment",
      minutes: "5 min read",
      image: "blog3.png",
      content:
`
Do you ever find yourself dreading Sunday nights because you just cannot wait another five days to enjoy the weekend again? You might even be able to relate to something as minute as randomly cringing at something you might have said 7 years ago on a random day at a park. You would be lying if you said that experiencing these feelings which tend to take your mind off the task at hand, don’t make you a little less happy. In fact, research shows that occurrences like these happen nearly half the time and tend to make people consistently less happy (Guardian).

This is a crucial issue because it causes people to fear what might happen next and even prevent them from trying new experiences. In many cases, this is even the cause of academic burnout as students are constantly pressured to think about what they need to do next to perform up to par.

According to Arlin Cuncik, here are some tips to follow in order to practice living in the moment.

1. Notice your surroundings: It’s important to take time out of your day to actually look around and observe what’s going on around you.

2. Focus on one thing at a time: You can actually be more productive when fully focusing on one task rather than trying to multitask at all at once.

3. Be grateful for what you have now: When you constantly think about wanting something you don’t have, you don’t take the time out of your day to appreciate what you actually do have. 

       We challenge you to try this daily routine: Take an empty jar, a writing utensil, and a few sticky notes. Everyday before you go to bed, write down something you are grateful for on the sticky note and drop it in the jar. Then, set a time, perhaps a month later or even a year later, to remove all the sticky notes and read them to yourself. You will realize how happy you can be with what you do have rather than feeling bad about something you wish you had.

4. Show Acceptance: It is also important to accept the way things may go and stop trying to think about what could have gone better in a certain situation. It is important to understand that you cannot change what may have happened. Additionally, constantly replaying the same situation over and over in your head can negatively impact your mood and eventually your mental health.

5. Practice meditation: Meditating will allow you to focus on yourself, specifically on your thoughts and feelings.

        Even if it is for 5-10 minutes, close your eyes and focus on the moment. Try not to let your thoughts wander, especially to stressful thoughts and feelings.
        While doing so, also incorporate some deep breathing that consist of slow breaths	. That way, while focusing on your breath, you can focus on yourself. This even allows you to have more control over the task at hand.

6. Find positive social support: Find people that will bring you up and listen to you. Find people that will make you happy and allow you to be the true version of yourself. Hanging out with these people will only help you open up more and give you an avenue to destress in the moment.

7. Be mindful of everything you do: Last but not least, it is important to be aware of how often you indulge in certain activities, especially if they create lethargic tendencies. Spending too long on activities such as scrolling on the phone or watching TV can inevitably decrease attention span and reduce cognitive thinking, which is one of the many reasons our minds tend to wander when completing certain tasks.

These are just a few that are really important, but you may find something more helpful than how somebody else finds a certain strategy. You may not even like a certain strategy that works for another person. It’s like studying for an exam. Writing the information out may help one person effectively memorize information while another person might need to play games using the information to help them better prepare. Just like this, people may experience the issue described in this blog at completely different levels. This means, each person should be able to find what works for them and what helps them stay focused.

`
    },

    // 4–15: additional posts 
    {
      id: 4,
      category: "Self-Care",
      title: "How to Gain Confidence in 24 Hours",
      minutes: "4 min read",
      image: "blog4.png",
      content:
`
Confidence isn’t something you wake up with every morning—at least not for most people. In fact, a sudden drop in confidence can feel a lot like an emotional fog drifting into your day. One moment you feel fine, and the next you’re questioning every choice you’ve ever made, spiraling into self-doubt, and convincing yourself that everyone else has life figured out except you.

But confidence doesn’t have to be a long-term project. While building lifelong confidence takes time, there are ways to give yourself a meaningful boost in just 24 hours. And no—this isn’t about faking it till you make it. It’s about resetting your mindset, grounding yourself, and tapping into the version of you that you’ve always had inside.

So how do I know when I need a “confidence reset”?
If you’ve ever felt unusually insecure for no clear reason, avoided tasks you normally handle well, or felt a wave of self-criticism after a mistake that didn’t deserve that much power, you may be due for a quick confidence recharge. Some additional signs include mental fatigue, overthinking, irritability, fear of judgment, perfectionism, procrastination, and that awful sense of being “less than.” These feelings are valid—and also reversible.

Once you’ve recognized that your confidence has dipped, the next step is learning the healthiest ways to rebuild it. According to mental-health educators and researchers, there are several simple habits you can use to boost your confidence in just one day:

Start by grounding yourself.
Just like emotional recovery, confidence begins internally. Spend at least five minutes in a quiet, distraction-free space. You can try deep breathing, stretching, or simply sitting with your eyes closed. What this does is help regulate your nervous system—because when you feel physically calmer, your brain becomes more receptive to positive self-belief.
One grounding method that works surprisingly well is mirror talk. Yes, it might feel awkward at first, but telling yourself something kind (“I’m capable,” “I deserve good things,” “I am safe”) can help interrupt negative self-talk patterns.

Complete a small “win” as soon as you can.
Confidence grows from action. It doesn’t have to be big—just something that makes you feel capable. Make your bed, organize your desk, go on a short walk, or finish a task you’ve been avoiding. Small accomplishments signal to your brain that you can follow through, and that momentum adds up quickly.

Take care of your body.
Your mental strength is tied deeply to how your body feels. Some habits that make an immediate difference include:

    - Drinking water first thing in the morning

    - Eating a nourishing meal instead of skipping

    - Taking a warm shower to feel refreshed

    - Doing any form of physical activity—this boosts dopamine and serotonin, chemicals tied to confidence and motivation

If you enjoy self-care, try something that makes you feel physically restored. A face mask, a skincare routine, or even putting on an outfit you feel good in can shift your mindset more than you’d expect.

Limit the voices that make you doubt yourself.
The people you interact with play a major role in how you see yourself. For the next 24 hours, surround yourself with people who uplift you—friends who hype you up, family who supports you, or mentors who remind you of your strengths.

Equally important: distance yourself from sources of comparison.
This might mean reducing time on social media, muting accounts that make you feel insecure, or taking a break from conversations that drain you. You can only thrive when you allow positivity and support into your space.

Speak to yourself with patience.
Confidence doesn’t return instantly just because you want it to. Give yourself compassion as you rebuild. You are learning, growing, and doing the best you can with what you have. Mistakes do not define you, but how you respond to them does.

And if your lack of confidence stems from something deeper like trauma, burnout, or long-term self-esteem struggles, remember that you don’t have to handle it alone. Reach out to someone you trust or seek professional support if needed. Asking for help is, in itself, an act of confidence.
A 24-hour confidence boost isn’t about becoming the most self-assured person overnight. It’s about giving yourself the tools to feel grounded, worthy, and capable today—and letting those small steps build over time. You deserve to feel confident in who you are, not someday, but right now.

`
    },
    
    {
      id: 5,
      category: "Digital",
      title: "From Doom Scrolling to Doing Something: Your 24-Hour Reset",
      minutes: "4 min read",
      image: "blog5.png",
      content:
`
We’ve all been there: you pick up your phone “just to check something,” and suddenly it’s an hour later. Your brain feels foggy, your shoulders tense, and somehow you’re in a worse mood than when you started. This, unfortunately, is the trap of doom scrolling—an easy habit to fall into and a hard one to break.

Doom scrolling happens when we consume endless negative or anxiety-inducing content, usually without even realizing it. Whether it’s the news, social media drama, or random posts that spark comparison, the result is the same: mental exhaustion, emotional overwhelm, and a sense that everything in life is spiraling. Many people mistake this feeling for laziness or lack of discipline, but in reality, doom scrolling is a coping mechanism for stress, boredom, or avoidance.

So how do you know when you’re doom scrolling? If you ever find yourself feeling unusually lethargic after being on your phone, losing track of time, or feeling more anxious or insecure the longer you scroll, you might want to consider that the content isn’t serving you. Some additional signs include trouble focusing, eye strain, guilt after using your phone, irritability, comparison fatigue, or feeling “mentally drained” for no clear reason.

Once you’ve recognized the habit, the next step is finding healthier, more fulfilling activities that you can gravitate toward instead. According to mental-health educators and behavioral experts, replacing doom scrolling isn’t about cutting technology entirely—it’s about choosing activities that refresh your mind rather than drain it. Here are a few simple strategies and alternatives that you can incorporate into your daily routine:

Do a quick mindfulness reset.
Instead of diving deeper into the algorithm, step away for a moment and ground yourself. Try deep breathing, a short meditation, or even closing your eyes for 60 seconds. This helps reset your nervous system and redirects your attention back to the present moment.

One grounding trick we find helpful is using the “5-4-3-2-1 method”—identify five things you can see, four things you can touch, three things you can hear, two you can smell, and one you can taste. It’s calming, quick, and pulls you out of the doom-scroll spiral.

Pick up a physical activity.
Movement is one of the fastest ways to interrupt a scrolling habit. You don’t need a full workout—just stretch, take a walk, do a five-minute yoga flow, or put on music and dance around your room. Physical activity releases mood-boosting hormones and reduces anxiety, making you feel more energized and less tempted to reach for your phone again.

Do something creative.
Creativity is one of the best antidotes to passive consumption. Try journaling, sketching, coloring, baking, crocheting, or making something with your hands. When you shift from consuming content to creating something—even something small—your brain feels more engaged and satisfied.

If you don’t know where to start, journaling is one of the easiest options. A simple prompt like “How am I feeling right now?” can help you process emotions you may have been numbing with your phone.

Organize or clean a small area.
Instead of scrolling, choose a tiny task you can finish quickly: reorganize your desk, make your bed, wipe down your countertop, or declutter your backpack. These small wins give you a sense of accomplishment and help reset your environment, making your mind feel clearer.

Read or listen to something nourishing.
If you still want stimulation, choose something uplifting or educational—like a podcast, an audiobook, or a physical book. Unlike doom scrolling, intentional reading gives your brain a sense of direction, not chaos.

Connect with someone who uplifts you.
Sometimes doom scrolling happens because we feel lonely or overwhelmed. Replacing screen time with real connection can make a huge difference. Call a friend, talk to a family member, or spend time with someone who brings positivity and support into your life.

Go outside.
Fresh air works wonders. Step outside for a few minutes, sit in the sun, or take a short walk. Being in nature lowers stress levels, boosts serotonin, and helps reset your attention. Even looking at greenery or the sky for a moment can soothe your mind.

Be patient with yourself.
Breaking the doom-scroll habit doesn’t happen instantly. You’re not “weak” or “undisciplined”—you’re human, and you’re navigating a world designed to keep you glued to your screen. Give yourself grace as you practice choosing healthier alternatives. Some days you’ll slip back into scrolling, and that’s okay. What matters is that you’re learning to recognize the habit and take steps to redirect your focus.

Replacing doom scrolling with intentional, nourishing activities is a powerful way to protect your mental health, improve your mood, and reconnect with the world around you. You deserve to spend your time on things that actually make you feel fulfilled—not drained.
`
    },

    {
      id: 6,
      category: "Music",
      title: "The Rhythm Behind Our Minds: How Music Shapes the Way We Function",
      minutes: "3 min read",
      image: "blog6.png",
      content:
`
Music is one of the few things in life that can change our mood within seconds. One moment you’re feeling overwhelmed, and the next, a single chord or lyric brings you comfort, clarity, or even motivation. But music isn’t just entertainment—it’s a powerful tool that influences how we think, feel, and function every single day.

Whether it’s your go-to playlist for studying, a song you replay because it reminds you of someone, or the background noise you use to calm your mind, music constantly interacts with your emotional and psychological world. Yet most people don’t realize just how much it impacts their mental health.

So how do you know when music is affecting the way you function? If you ever notice your mood shifting when a certain song comes on—feeling suddenly nostalgic, energized, calmer, or more focused—that’s your brain responding to music’s emotional cues. Some additional signs include feeling physically relaxed, experiencing a boost in energy, improved concentration, reduced stress, or even tears forming unexpectedly. These reactions are normal, and they highlight the deep connection between music and emotional regulation.

Once you understand the psychology behind music, you can actually use it in healthier, intentional ways. Mental-health experts often refer to music as a therapeutic tool because of its ability to ground your emotions, reduce anxiety, and provide an outlet for expression. Here are a few ways music influences how we function—and how you can use it to support your mental wellbeing:

Music helps regulate your emotions.
When you’re overwhelmed, a calming song can slow your breathing and heart rate. When you’re sad, a comforting melody can make you feel understood. When you’re unmotivated, upbeat music can spark the drive you thought you lost. Music works almost like a mirror—it helps process emotions you might not have words for yet.

One helpful strategy is creating “mood playlists” based on what your mind needs: one for relaxation, one for motivation, one for emotional release. Having them ready makes it easier to choose music that helps rather than intensifies negative feelings.

It boosts your focus and productivity.
Music can activate parts of your brain linked to attention and memory. This is why many people study better with soft background music or instrumental tracks. When chosen intentionally, music reduces distractions and helps your mind settle into a productive rhythm.

If you’re prone to doom scrolling or procrastination, switching from silence to gentle music can shift your brain into “doing mode” instead of escaping mode.

It lowers stress and anxiety levels.
Certain genres—like acoustic, lo-fi, classical, or ambient—actually help lower cortisol, the body’s stress hormone. Music provides a sense of predictability and safety, which is crucial for calming an anxious mind. Even singing along releases tension and improves breathing, acting as a natural stress reliever.

It strengthens memory and personal identity.
Have you ever heard a song and immediately remembered a moment, a person, or a version of yourself from years ago? Music anchors memories. It helps remind you who you are, what you’ve overcome, and what you value. This connection can be grounding during times when you feel disconnected or lost.

It provides a sense of companionship.
In loneliness or emotional distress, music can make you feel less isolated. Lyrics can give language to experiences you never knew how to express. A song can validate feelings you thought were too complicated, too heavy, or too embarrassing to say out loud.

For many people, music becomes a safe space—a place where emotion is allowed, welcomed, and understood.

Be intentional with your listening.
It’s important to recognize the type of music you turn to when you’re struggling. Some songs uplift you, while others may bring you deeper into sadness or negative thinking. Being mindful about what you listen to—especially during stressful periods—can make a significant difference in your mental wellbeing.

Music isn’t a cure-all, but it is a powerful companion. When used thoughtfully, it can help you cope, motivate you to keep going, and bring clarity to emotional experiences that feel overwhelming. Your playlists can be a form of self-care, a therapeutic tool, and a source of strength on difficult days.

Music plays a role in how we function because it speaks directly to the parts of ourselves we often don’t show. It’s more than sound—it’s connection, memory, expression, and emotional healing.
`
    },

    {
      id: 7,
      category: "Life Transitions",
      title: "Understanding Postpartum Depression: Healing After Birth",
      minutes: "5 min read",
      image: "blog7.png",
      content:
`
Bringing a new life into the world is often described as one of the most beautiful experiences imaginable. But for many parents, it’s also an emotionally complex time, filled with uncertainty, exhaustion, and sometimes a heaviness that feels impossible to shake. This heaviness could be postpartum depression, a condition that affects a significant number of new parents but is often misunderstood or overlooked.

Postpartum depression (PPD) is more than the occasional “baby blues” that fade after a few days. It’s a persistent mood disorder that can appear within the first few weeks or even months after giving birth. Parents with PPD may feel intense sadness, irritability, guilt, or a sense of disconnection from their baby or themselves. Unfortunately, many people believe they must “push through” or “just be grateful,” which can make them feel isolated and ashamed.

So how do you know if what you’re experiencing is more than normal stress or tiredness? Some common symptoms of PPD include persistent sadness, frequent crying, fatigue beyond typical newborn exhaustion, anxiety, difficulty bonding with your baby, changes in appetite or sleep patterns, feelings of worthlessness or guilt, and even thoughts of harming yourself or your baby. These symptoms are valid and deserve attention—they are not a sign of weakness or failure.

Once you’ve acknowledged what’s happening, it’s important to take steps toward recovery. According to mental-health professionals, PPD can be managed and treated with the right support and care. Here are a few approaches that can help:

Prioritize self-care without guilt.
Self-care after giving birth is not optional—it’s essential. This can include basic activities like getting enough rest, eating nourishing meals, hydrating, and taking short breaks when someone else can care for the baby. Even small moments, like a warm shower, a cup of tea, or five minutes of deep breathing, can help regulate emotions and restore energy.

Seek professional support.
PPD is treatable, and you don’t have to face it alone. A therapist, counselor, or doctor can provide guidance, therapy, or medication if needed. Postpartum support groups—either in person or online—also offer understanding, validation, and practical tips from people who have experienced the same challenges.

Communicate openly with loved ones.
Sharing your feelings with someone you trust can relieve isolation and lighten emotional burdens. Whether it’s a partner, family member, or friend, speaking about your struggles can make you feel seen and supported. You might also consider involving your support network in small tasks like feeding, diaper changes, or household chores, which can provide space for recovery.

Engage in gentle movement.
Physical activity—even light movement like walking or stretching—can help boost mood and reduce anxiety. Your body has gone through a major change, so it’s important to listen to it and start slowly. Movement paired with mindful breathing can also reinforce a sense of control and well-being.

Allow yourself to feel, without judgment.
PPD can bring waves of emotion that may feel overwhelming or confusing. Rather than pushing them aside, try to acknowledge these feelings without judgment. Journaling, expressing emotions through art or music, or simply sitting with your thoughts for a few minutes can help process them safely.

Remember: experiencing postpartum depression does not define you as a parent. Healing is a process, and each step—no matter how small—is meaningful. Recovery is possible, and reaching out for support is a courageous, important part of the journey.

Postpartum depression is common, real, and treatable. With awareness, support, and self-care, parents can navigate this challenging chapter and find their way back to joy, connection, and emotional balance. If you or someone you know may be experiencing PPD, know that help is available—and you deserve it.
`
    },
    
    {
      id: 8,
      category: "Stress",
      title: "Managing Stress: Finding Calm in a Hectic World",
      minutes: "4 min read",
      image: "blog8.png",
      content:
`
Stress is something most of us experience daily. Deadlines, responsibilities, relationships, and the constant buzz of modern life can leave our minds feeling overwhelmed and our bodies tense. While a certain amount of stress can motivate us to get things done, chronic stress can harm our mental and physical health, affecting sleep, focus, mood, and overall well-being.

Stress doesn’t always look the same for everyone. Some people feel it physically, with tight muscles, headaches, or stomach issues. Others feel it emotionally, with irritability, anxiety, or difficulty concentrating. Often, it’s a combination of both, leaving you feeling drained, anxious, or stuck in a loop of worry. Recognizing stress is the first step toward managing it effectively.

Once you understand your stressors, there are practical strategies you can use to reduce tension and restore balance. According to mental-health experts, incorporating small, intentional habits into your day can make a big difference. Here are some effective approaches:

Prioritize self-care.
Self-care isn’t indulgent—it’s essential for stress management. Simple habits like drinking enough water, eating balanced meals, getting adequate sleep, and taking short breaks throughout the day can help your mind and body recharge. Even a five-minute deep-breathing exercise or a short walk outside can provide immediate relief.

Practice mindfulness and meditation.
Mindfulness helps you stay present, preventing your thoughts from spiraling into worry about the past or future. Meditation, guided breathing, or even paying attention to your senses while doing daily tasks can reduce anxiety and improve emotional regulation. Apps, YouTube videos, or quiet reflection can all provide a space to practice mindfulness.

Move your body.
Physical activity is one of the most effective stress relievers. Exercise releases endorphins, improves sleep, and reduces tension. This doesn’t have to mean an intense workout—stretching, walking, dancing, or yoga are all helpful ways to relieve built-up stress and refresh your mind.

Connect with others.
Sharing your feelings with trusted friends, family, or mentors can help lighten the emotional load. Social support provides perspective, reassurance, and comfort. Even a quick check-in call or text can remind you that you’re not facing stress alone.

Organize and prioritize.
Sometimes stress arises from feeling overwhelmed by tasks or responsibilities. Make a list, break tasks into smaller steps, and focus on one thing at a time. Setting realistic goals and celebrating small accomplishments can restore a sense of control and reduce anxiety.

Engage in relaxing or creative activities.
Hobbies, music, journaling, art, or reading can provide a mental escape and help process emotions. These activities give your brain space to unwind, reset, and approach challenges with clarity and calm.

Practice patience with yourself.
Managing stress is a journey, not a one-time fix. Some days will feel easier, and others harder. Give yourself compassion and permission to step back, breathe, and recover when needed. Progress is not always linear, and self-kindness is a powerful tool for resilience.

Stress is an inevitable part of life, but it doesn’t have to control you. By practicing self-care, mindfulness, movement, connection, and patience, you can navigate life’s challenges with more ease, clarity, and emotional balance. Managing stress isn’t about eliminating it completely—it’s about learning to respond to it in ways that support your well-being.
`
    },

    {
      id: 9,
      category: "Older Adults",
      title: "Navigating the Teenage Years: Parenting with Patience and Understanding",
      minutes: "4 min read",
      image: "blog9.png",
      content:
`
Parenting a teenager can feel like walking a tightrope. One day your child seems sweet, responsible, and communicative. The next, they’re moody, distant, or frustrated by everything. It’s a period filled with growth, experimentation, and emotional ups and downs—not just for teens, but for parents too.

Adolescence is a critical stage of development. Teens are learning to form their identities, navigate social pressures, and manage intense emotions. These changes can make them seem unpredictable, argumentative, or even rebellious. While these behaviors can be frustrating, they’re also a normal part of growing up—and they highlight the importance of empathy, patience, and support from parents.

So how do you know when your parenting approach might need adjustment? If you notice that arguments feel constant, communication feels one-sided, or your teen is withdrawing, these may be signs that more intentional strategies are needed. Other indicators include mood swings, changes in sleep or appetite, risk-taking behaviors, or signs of stress or anxiety. Recognizing these patterns is the first step toward fostering a healthier parent-teen relationship.

Once you’ve acknowledged the challenges, here are some practical ways to support your teen while maintaining your own mental well-being:

Prioritize open communication.
Teenagers crave independence but still need guidance. Encourage honest, judgment-free conversations. Ask questions that invite reflection rather than interrogation, and listen more than you speak. Even a simple “How was your day?” followed by genuine attention can make a huge difference.

Set boundaries with empathy.
Rules are important, but so is flexibility. Let your teen understand the “why” behind expectations and involve them in discussions when appropriate. Clear boundaries provide safety, while empathy and explanation build trust and respect.

Encourage healthy coping strategies.
Teens experience big emotions, and not all of them know how to manage stress effectively. Encourage activities that boost emotional well-being, such as journaling, exercise, music, creative projects, or talking to a trusted adult. Modeling healthy coping strategies yourself also sets a powerful example.

Celebrate small victories.
Teens often face pressure academically, socially, and personally. Acknowledge their efforts, no matter how small. Celebrating accomplishments reinforces confidence and motivates positive behavior, helping them feel valued and understood.

Take care of yourself too.
Parenting teens can be emotionally taxing. It’s essential to maintain your own mental health by setting aside time for self-care, hobbies, social connection, or even therapy if needed. When you prioritize your well-being, you’re better equipped to support your teen.

Practice patience and flexibility.
Adolescence is a rollercoaster, and there will be days that test your patience. Remember that growth takes time—for both teens and parents. Mistakes are part of the process, and what matters most is maintaining love, support, and connection throughout the journey.

Parenting teenagers isn’t easy, but it’s also a time of incredible opportunity: to guide, to understand, and to grow alongside your child. By fostering communication, empathy, and self-care, you can create a supportive environment where your teen can thrive—and where you can navigate the teenage years with confidence, patience, and perspective.
`
    },
    {
      id: 10,
      category: "Grief",
      title: "Coping with Grief and Loss: Finding Your Way Through the Darkness",
      minutes: "5 min read",
      image: "blog10.png",
      content:
`
Grief is a universal experience, yet it feels intensely personal. Whether it’s the loss of a loved one, the end of a relationship, a missed opportunity, or a major life change, grief can leave us feeling unmoored, exhausted, and emotionally raw. Unlike most challenges, there’s no timeline or “right way” to process loss—it comes in waves, often when we least expect it.

It’s important to recognize that grief affects the mind and body alike. You might notice sadness, anger, guilt, or even numbness. Physically, grief can manifest as fatigue, headaches, changes in appetite, or difficulty sleeping. Many people feel disconnected from friends or daily routines, unsure how to move forward. These reactions are normal, and they are a reflection of the deep impact that loss can have on our lives.

So how do you know when grief is affecting you in a way that needs attention? Persistent feelings of sadness, frequent crying, difficulty functioning, irritability, or a sense of emptiness can all indicate that grief is weighing heavily on your mental health. While these feelings are valid, it’s also important to find healthy ways to cope and allow healing to take place.

Here are some strategies recommended by mental-health experts to help navigate grief:

Allow yourself to feel.
Grief can bring a storm of emotions, and it’s important not to suppress them. Crying, journaling, talking, or expressing your feelings through art or music can help process emotions safely. Remember, there is no “wrong” way to grieve, and giving yourself permission to feel is a critical part of healing.

Seek support.
You don’t have to face grief alone. Reaching out to friends, family, support groups, or therapists can provide comfort, understanding, and perspective. Talking to someone who listens without judgment can make the burden feel lighter and help you find ways to cope constructively.

Take care of your body.
Grief can be physically draining, so basic self-care is essential. Eating nutritious meals, staying hydrated, resting, and engaging in gentle physical activity like walking or stretching can help you maintain energy and support your emotional resilience.

Create meaningful rituals.
Honoring your loss can help process emotions and foster connection. This could include writing letters, creating memory boxes, lighting a candle, or participating in ceremonies or traditions that hold personal significance. Rituals help us acknowledge what’s gone while finding ways to carry their memory forward.

Be patient with yourself.
Grief is not linear, and there will be good days and difficult days. It’s important to allow yourself grace and to avoid pressuring yourself to “move on” too quickly. Healing takes time, and each small step forward is a meaningful part of the journey.

Engage in activities that bring comfort.
Simple, nurturing activities like listening to music, spending time in nature, reading, or practicing mindfulness can provide moments of relief and restore a sense of calm. These activities don’t erase grief—they give your mind and body space to rest and recover.

Coping with grief and loss is never easy, but with patience, support, and self-care, it’s possible to find moments of peace and even hope amidst the pain. Grief is a reflection of love and connection—it shows how deeply you care. By honoring your emotions and allowing yourself to heal at your own pace, you can gradually learn to live with loss while still moving forward.
`
    },
    {
      id: 11,
      category: "Relationships",
      title: "Creating Healthy Relationships: Building Connections That Nurture Your Well-Being",
      minutes: "3 min read",
      image: "blog11.png",
      content:
`
Relationships are one of the most important parts of our lives. They can bring joy, support, and a sense of belonging—or, if unhealthy, they can be a source of stress, self-doubt, and emotional strain. Understanding how to build and maintain healthy relationships is essential for both your mental and emotional well-being.

Healthy relationships aren’t about perfection—they’re about balance, respect, and mutual care. They require trust, open communication, and the willingness to support each other while respecting individual boundaries. Unfortunately, many people don’t receive guidance on building these connections, which can make it difficult to recognize what a healthy relationship really looks like.

So how do you know if a relationship is healthy? Signs include feeling safe and supported, having open and honest communication, mutual respect, shared responsibility, and the ability to grow together without sacrificing your individuality. On the other hand, relationships that involve constant criticism, manipulation, disrespect, or emotional drain are signals that boundaries need to be re-evaluated.

Once you understand what healthy relationships look like, here are some ways to cultivate them in your life:

Communicate openly and honestly.
Healthy relationships thrive on open communication. Share your feelings, needs, and thoughts clearly, and encourage others to do the same. Listening without judgment and responding with empathy strengthens connection and reduces misunderstandings.

Set and respect boundaries.
Boundaries are crucial for emotional health. They help protect your time, energy, and self-respect. Healthy relationships honor boundaries, whether it’s about personal space, emotional needs, or daily routines. Learning to say “no” or express limits is a sign of self-respect, not selfishness.

Practice mutual respect and support.
A healthy relationship involves valuing each other’s opinions, feelings, and individuality. Support your friends, partners, or family members in their goals, and expect the same in return. Respecting differences and celebrating successes together builds trust and strengthens bonds.

Foster trust and reliability.
Trust is the foundation of any healthy connection. Be dependable, honest, and consistent in your actions. Avoid behaviors that break trust, like dishonesty or manipulation. Trust grows over time and allows relationships to feel safe and stable.

Spend quality time together—and apart.
Shared experiences strengthen connections, whether through conversation, activities, or hobbies. Equally important is allowing space for individuality. Healthy relationships balance closeness with independence, encouraging growth for both people.

Address conflicts constructively.
Disagreements are natural, but how they’re handled matters. Healthy relationships approach conflicts with problem-solving, empathy, and compromise rather than blame or avoidance. Learning to navigate disagreements calmly strengthens resilience and understanding.

Creating healthy relationships is a lifelong practice. They require intention, self-awareness, and care—but the payoff is immeasurable. Supportive, nurturing connections not only improve your mood and mental health but also provide a foundation for resilience, personal growth, and a deeper sense of belonging.
`
    },
    {
      id: 12,
      category: "Life Transitions",
      title: "Embracing Change: Finding Peace in Life’s Transitions",
      minutes: "4 min read",
      image: "blog12.png",
      content:
`
Change is inevitable. Whether it’s moving to a new city, starting a new job, ending a relationship, or simply entering a new phase of life, change can feel both exciting and frightening. It can leave us feeling uncertain, overwhelmed, or even resistant. Yet learning to accept and navigate change is essential for emotional well-being and personal growth.

It’s normal to feel uneasy when life shifts. Resistance often comes from fear of the unknown, loss of control, or leaving familiar routines behind. These feelings can show up as anxiety, irritability, sadness, or even physical tension. Recognizing these responses as natural helps us approach change with more compassion for ourselves rather than frustration or self-criticism.

So how do you know when change is affecting your emotional health? Signs may include difficulty sleeping, constant worry, feeling stuck or unmotivated, or withdrawing from activities you normally enjoy. Acknowledging these feelings is the first step toward accepting change and learning to adapt.

Here are some strategies recommended by mental-health experts for coping with life’s transitions:

Allow yourself to feel.
It’s okay to experience sadness, fear, or uncertainty. Accepting change doesn’t mean ignoring your emotions—it means recognizing them without judgment. Journaling, talking to a trusted friend, or simply reflecting quietly can help process your feelings and reduce inner tension.

Focus on what you can control.
While change often involves uncertainty, there are always aspects within your control. Identify small, actionable steps you can take to adjust to the new circumstances. Focusing on what you can influence fosters a sense of agency and reduces feelings of helplessness.

Maintain routines where possible.
Consistency can provide stability during transitions. Keeping up with regular self-care, work habits, or leisure activities helps create a sense of grounding, even amidst change.

Reframe change as an opportunity.
Shifting your perspective can make a big difference. Change can open doors to growth, new experiences, and personal development. Instead of seeing it as a disruption, try viewing it as a chance to learn, explore, and evolve.

Seek support.
Transitions can be challenging, and you don’t have to face them alone. Friends, family, mentors, or mental-health professionals can provide guidance, reassurance, and encouragement as you navigate new circumstances.

Practice patience with yourself.
Adapting to change takes time. You may feel progress is slow, or that setbacks occur along the way. Treat yourself with compassion, recognizing that adjusting to new realities is a gradual process. Each step, no matter how small, is meaningful.

Change is a constant in life, but it doesn’t have to be threatening. By allowing yourself to feel, focusing on what you can control, maintaining grounding routines, reframing challenges as opportunities, and seeking support, you can navigate transitions with resilience and grace. Accepting change doesn’t mean losing yourself—it means learning to grow with life’s natural flow.
`
    },
    {
      id: 13,
      category: "Older Adults",
      title: "Mental Health in Older Adults: Nurturing the Mind as We Age",
      minutes: "3 min read",
      image: "blog13.png",
      content:
`
Mental health is important at every stage of life, but it’s often overlooked in older adults. Aging brings changes—retirement, loss of loved ones, physical health challenges, and shifting social connections—that can impact emotional well-being. Yet mental health in older adults is just as vital as physical health, and recognizing, supporting, and nurturing it can lead to a fulfilling, balanced life.

It’s normal for older adults to experience occasional sadness or anxiety, especially during periods of change. However, persistent feelings of hopelessness, irritability, or withdrawal may indicate a more serious mental-health concern. Common conditions include depression, anxiety, cognitive decline, or feelings of isolation. These challenges are valid and deserve attention, not dismissal as “just part of aging.”

So how do you know when an older adult may need extra support? Signs can include persistent sadness, difficulty sleeping, loss of interest in hobbies, social withdrawal, memory issues, or sudden changes in mood or behavior. Acknowledging these signs early is crucial for maintaining quality of life and emotional well-being.

Here are some ways to support mental health in older adults, whether for yourself or someone you care about:

Stay socially connected.
Social interaction is essential for emotional health. Maintaining friendships, participating in community activities, or even regular phone calls and video chats can prevent isolation and provide a sense of purpose and belonging.

Engage in meaningful activities.
Hobbies, volunteering, or learning new skills can foster cognitive function, boost mood, and enhance a sense of accomplishment. Activities that stimulate the mind and body simultaneously—like gardening, puzzles, or gentle exercise—are particularly beneficial.

Prioritize physical health.
Physical and mental health are deeply interconnected. Regular exercise, a balanced diet, proper sleep, and routine medical checkups can support emotional resilience, reduce anxiety, and improve overall well-being.

Practice mindfulness and relaxation.
Techniques such as meditation, deep breathing, or gentle yoga can help reduce stress and promote emotional balance. Even small, mindful moments—like enjoying a quiet cup of tea or listening to music—can bring calm and clarity.

Seek professional support when needed.
Older adults should never feel that emotional struggles are something to face alone. Therapists, counselors, or support groups can provide guidance, coping strategies, and reassurance. Mental-health support is effective at any age.

Encourage open communication.
Talking about feelings, concerns, or fears can reduce emotional burden and foster connection. Friends, family, and caregivers play a vital role in creating a safe space for these conversations.

Mental health in older adults is just as important as at any other age. By staying connected, engaging in meaningful activities, prioritizing physical health, practicing mindfulness, seeking professional support, and fostering open communication, older adults can maintain emotional well-being, resilience, and a sense of purpose. Aging brings change—but with support, care, and understanding, it can also bring growth, fulfillment, and joy.
`
    },
    
    {
      id: 14,
      category: "Anxiety",
      title: "Understanding Anxiety and Panic Attacks: Recognizing and Navigating the Storm",
      minutes: "2 min read",
      image: "blog14.png",
      content:
`
Anxiety is something most of us experience at one point or another. Feeling nervous before a test, worried about a big decision, or uneasy in a new situation is normal. But for some, anxiety goes beyond everyday stress—it can become overwhelming, persistent, and even debilitating. Panic attacks, a more intense manifestation of anxiety, can make people feel as though danger is imminent, even when there is none. Understanding these experiences is the first step toward managing them effectively.

Anxiety and panic attacks are not signs of weakness. They are natural responses of the body’s “fight or flight” system, often triggered by perceived threats—real or imagined. While occasional anxiety is normal, chronic anxiety can interfere with sleep, focus, relationships, and overall quality of life. Panic attacks, on the other hand, often strike suddenly and intensely, causing physical symptoms such as racing heart, shortness of breath, dizziness, or shaking, along with feelings of dread or losing control.

So how do you know if you’re experiencing anxiety or panic attacks? Common signs of anxiety include persistent worry, restlessness, irritability, muscle tension, trouble concentrating, and sleep difficulties. Panic attacks often include sudden, intense fear or discomfort that peaks within minutes, accompanied by physical symptoms like heart palpitations, sweating, or chest pain. Recognizing these patterns helps you respond rather than feel overwhelmed.

Here are some strategies recommended by mental-health experts to cope with anxiety and panic attacks:

Practice grounding and breathing techniques.
During anxious moments or panic attacks, deep, intentional breathing can help regulate your nervous system. Techniques like the “4-7-8” method—inhale for 4 seconds, hold for 7 seconds, exhale for 8 seconds—can calm the body and mind. Grounding exercises, like focusing on five things you can see, four things you can touch, three things you can hear, two things you can smell, and one thing you can taste, also help bring awareness back to the present moment.

Challenge anxious thoughts.
Anxiety often involves overestimating danger or imagining worst-case scenarios. Try to identify these thoughts and gently question their accuracy. Reframing negative thinking with balanced, realistic perspectives can reduce fear and restore a sense of control.

Engage in self-care and physical activity.
Exercise, sufficient sleep, nutritious meals, and hydration all contribute to emotional resilience. Physical movement releases endorphins, which help regulate mood and reduce anxiety. Even short walks or stretches throughout the day can make a difference.

Limit triggers where possible.
While some anxiety triggers are unavoidable, others can be managed. Limiting excessive news consumption, reducing caffeine, or taking breaks from social media can prevent unnecessary spikes in anxiety.

Seek support when needed.
Anxiety and panic attacks can feel isolating, but help is available. Speaking with a therapist or counselor can provide coping strategies, validation, and guidance. Support groups—online or in person—offer connections with others who understand these experiences.

Be patient with yourself.
Managing anxiety is a journey, not a one-time fix. Some days will feel easier, and others may be challenging. Compassion toward yourself and acknowledgment of progress—no matter how small—are essential components of healing and resilience.

Anxiety and panic attacks can feel overwhelming, but they are manageable with understanding, tools, and support. By practicing grounding, challenging anxious thoughts, prioritizing self-care, and seeking help when needed, it’s possible to navigate anxiety with greater confidence, calm, and control. You are not alone, and support is always available.
`
    },
    {
      id: 15,
      category: "Isolation",
      title: "Battling Isolation: Finding Connection When Life Feels Alone",
      minutes: "3 min read",
      image: "blog15.png",
      content:
`
Isolation can creep into our lives in subtle ways. Maybe it’s a result of moving to a new city, a demanding schedule, or losing touch with friends and family. Sometimes it comes with major life transitions, like retirement, illness, or the end of a relationship. Other times, it can be a quiet companion, even in the midst of people. Regardless of the cause, isolation can take a serious toll on mental health, leading to loneliness, sadness, and feelings of disconnection.


Isolation isn’t just about being physically alone—it’s about feeling unseen, unheard, or disconnected from meaningful relationships. Signs of isolation can include withdrawing from social activities, losing interest in hobbies, feeling anxious in social settings, or experiencing low mood. These feelings are valid, and recognizing them is the first step toward reclaiming connection and well-being.

Once you’ve acknowledged that isolation is affecting you, there are practical ways to rebuild a sense of connection and community. According to mental-health experts, even small steps can make a meaningful difference:

Reach out to others intentionally.
Making the first move can feel daunting, but reaching out to friends, family, or neighbors—even just for a quick check-in—helps break the cycle of isolation. A simple call, text, or shared activity can remind you that you’re not alone.

Engage in social activities that interest you.
Shared experiences help form meaningful connections. Join a club, take a class, volunteer, or attend local events. Participating in activities you enjoy increases the chance of meeting like-minded people and fostering authentic relationships.

Use technology mindfully.
Video calls, online communities, and social platforms can provide connection when physical presence isn’t possible. However, be mindful of over-reliance on passive scrolling, which can intensify feelings of disconnection. Choose platforms or groups that encourage meaningful interaction and support.

Focus on self-compassion and self-care.
Isolation can amplify negative self-talk. Practicing self-care—through exercise, journaling, meditation, or creative outlets—supports emotional resilience. When you nurture yourself, you’re better able to engage with others authentically.

Seek professional support if needed.
Therapists and counselors can help navigate feelings of isolation, build coping strategies, and provide a safe space to process emotions. Support groups, both in-person and online, offer opportunities to connect with others experiencing similar challenges.

Build small routines of connection.
Even brief daily interactions—a smile at a neighbor, chatting with a barista, or sending a thoughtful message—can reduce feelings of loneliness. Over time, these small moments create a network of connection that strengthens emotional well-being.

Isolation can feel heavy and unrelenting, but it doesn’t have to define your experience. By reaching out intentionally, engaging in meaningful activities, practicing self-care, and seeking support, it’s possible to reclaim connection and restore a sense of belonging. Connection is a fundamental human need, and even the smallest steps toward others can light the way out of isolation.
`
    },
  ];

  const [selectedPost, setSelectedPost] = useState(null);

  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = posts.filter((post) =>
  post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
  post.category.toLowerCase().includes(searchQuery.toLowerCase())
);


  return (
    <div className="w-full font-lexend bg-cream">
      {/* HERO SECTION */}
      <div className="relative w-full h-[500px] bg-cream flex items-center justify-center">
        <div className="text-darkGreen1 text-center px-6---">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">UPLIFF BLOG</h1>
          <p className="text-base md:text-2xl">Pull up a chair. Take a breath. You're in the right place.</p>
          <p className="text-base md:text-2xl">Insights to help you feel grounded and understood.</p>
        </div>
      </div>

      {/* SEARCH BAR */}
        <div className=" mt-[-100px] bg-cream mb-[100px] flex justify-center">
        <div className="relative w-full max-w-xl">
            {/* Search icon */}
            <span className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
            </span>

            <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by Title or Category"
            className="
                w-full
                pl-12
                pr-6
                py-4
                rounded-full
                border
                border-gray-300
                focus:outline-none
                focus:ring-2
                focus:ring-darkGreen1
                text-darkGreen1
                placeholder-gray-400
                bg-white
                shadow-sm
            "
            />
        </div>
        </div>


      {/* BLOG GRID */}
        <div className="bg-cream min-h-[500px] flex justify-center">
        <div className="w-full max-w-[1300px] px-6 pb-16">

            {filteredPosts.length === 0 ? (
            /* NO RESULTS STATE */
            <div className="flex flex-col items-center justify-center h-[250px] text-darkGreen1">
                <p className="text-2xl font-semibold mb-2">No results found</p>
                <p className="opacity-70">
                Try searching by title or category
                </p>
                <img className = "w-[200px] mb-[20px]" src="noResult.png" alt="no result found" />
            </div>
            ) : (
            /* GRID */
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.map((post) => (
                <div
                    key={post.id}
                    onClick={() => setSelectedPost(post)}
                    className="cursor-pointer bg-white rounded-xl shadow hover:shadow-xl transition p-5"
                >
                    {/* colored image background */}
                    <div
                    className={`rounded-xl overflow-hidden mb-4 flex items-center justify-center ${categoryColor[post.category] || "bg-yellow-200"}`}
                    style={{ height: "170px" }}
                    >
                    <img
                        src={post.image}
                        alt={post.title}
                        className="w-90 h-full object-cover rounded-lg"
                    />
                    </div>

                    {/* Category + read time */}
                    <div className="flex items-center gap-2 mb-2">
                    <span className="text-sm text-pink-600 font-semibold">
                        {post.category}
                    </span>
                    <span className="text-sm text-gray-500 ml-2">
                        {post.minutes}
                    </span>
                    </div>

                    <h3 className="text-xl font-bold text-darkGreen1">
                    {post.title}
                    </h3>
                </div>
                ))}
            </div>
            )}

        </div>
        </div>


      {/* FULL SCREEN POPUP */}
      {selectedPost && (
        <div className="fixed inset-0 bg-cream z-50 flex flex-col overflow-y-auto mt-[52px]">
          {/* BACK BUTTON (top-left) */}
          <button
            onClick={() => setSelectedPost(null)}
            className="flex items-center gap-2 text-darkGreen1 font-bold px-6 py-4 hover:opacity-80"
          >
            ← Back
          </button>

          {/* IMAGE (smaller at top) */}
          <div className={`px-6 pt-2  `}>
            <img
              src={selectedPost.image}
              alt={selectedPost.title}
              className="rounded-xl w-90  mx-auto h-[200px] object-cover mb-6"
            />
          </div>

          {/* CONTENT */}
          <div className="px-6 max-w-[1000px] mx-auto pb-12">
            <h2 className="text-4xl font-bold text-darkGreen1 mb-2 text-center">{selectedPost.title}</h2>
            <p className="text-sm opacity-60 text-center">{selectedPost.category}</p>
            <p className="text-sm opacity-60 mb-6 text-center">By the Upliff Team • {selectedPost.minutes}</p>

            <div className="text-lg leading-8 text-darkGreen1 whitespace-pre-line">
              {selectedPost.content}
            </div>
          </div>
        </div>
      )}

      
    </div>
  );
}

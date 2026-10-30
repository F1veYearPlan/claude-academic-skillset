---
name: "quiz-me"
description: "Quiz the user on a topic, their own notes, or a particular concept or course material to test their understanding, grade strictly, and diagnose wrong mental models. Use on \"quiz me\", \"test me\", \"check my understanding\", \"do I actually get this\", exam review, figuring out what to study, or a pre-flashcard check, even if the word quiz is never used."
---

# Quiz Me

A multi-turn oral exam with the goal of finding out what the user truly understands, what they only think they understand, where their mental model of the subject is wrong, and whether there are any unknown unknowns, then fixing what it finds. The skill is also used to make sure the user has a strong foundation, to work out what needs study, for a quick review before a test, or to check understanding before making flashcards.

## Ground rules

These hold for the whole session. Each has a reason; keep the reason in mind when a case is unclear.

1. **Notes are read-only.** Never edit, comment on, move, or reformat the user's notes unless they explicitly ask in this conversation. Propose fixes in the report; do not apply them. The notes are the user's own record, and a silent edit destroys their trust in it.
2. **Grade against the truth, not the notes.** The notes may be wrong. An answer that matches a wrong note is wrong. If the notes come from a course and the course frames something differently from the standard treatment, say both: the exam follows the course, reality follows the field.
3. **Free recall only.** Ask open questions the user answers in their own words. Do not use multiple choice, and do not use multiple-choice question widgets or option pickers for quiz questions. Recognising an answer is far easier than producing it, so multiple choice hides gaps.
4. **One question per turn, then wait.** Never answer your own question, and never stack the next question on top of ungraded work.
5. **Do not leak answers.** Nothing in your kickoff message, a question's wording, or feedback on an earlier question should give away a later answer. Reorder questions if feedback would spoil one.
6. **Do not prime or give the method.** Choosing how to solve a problem is part of what is being tested, so the user works that out alone.
   - Never label a question by the technique or approach it needs (for example "this is the rearrange-the-formula kind" or "think about substitutes here"), and never announce in the kickoff which techniques upcoming questions will use.
   - Never put the method inside the question itself: no "use the mid-point method to find...", no "multiply the elasticity by...", no "start by finding the average". Give the situation and ask for the result, the way a real exam would.
   - Give a hint or a walkthrough only when the user asks for one, and give only as much as they ask for.
7. **No flattery, no cushioning.** State the actual strength of each answer. Details in the grading section.
8. **"Reasoning" and "thinking" always mean the user's.** Every request in this skill for reasoning, thinking, or a walkthrough is about the answer the user submitted, so tie it to their own words: "You wrote $85. How did you get that number?" Your own working stays out of the conversation. Give short explanations of the subject and of the grade, not an account of how you reached them.

## Step 1: Get the material

**From notes.** Fetch the page or file the user named (Notion, a connected folder, an upload, pasted text). If the name is ambiguous, search, then confirm which one in a single line. Read all of it, including sub-pages that are clearly part of the same material.

**From a topic.** Build your own reference before asking anything. For anything time-sensitive (cybersecurity, software, law, current standards, prices, versions), search the web and prefer primary sources. For stable subjects (anatomy, maths, classical physics), your own knowledge is fine, but verify any specific figure or detail you are not sure of.

**Level and scope.** Do not interview the user about this. Infer it: the notes show the level they are working at, and the wording of the request usually shows the purpose. For a bare topic with no other cues, pick the level of a solid introductory course, say so in one line in the kickoff, and let the user correct you.

## Step 2: Review the notes silently

Only when working from notes. Check the notes against what you know and what you researched. Keep a private list of:

- **Errors**: claims that are wrong.
- **Gaps**: important ideas that are missing, or covered so thinly the user likely doesn't hold them.
- **Ambiguities**: statements that could be right or wrong depending on what the user meant.

Do not report these yet. Telling the user "your notes get X wrong" and then asking about X spoils the test: you can no longer tell whether the wrong idea lives only in the notes or also in their head. Instead, aim questions at these spots and report the findings at the end, next to how the user actually answered.

Exception: if the user asks for the note review up front, give it, and tell them it will make the quiz on those points less telling.

If you are not sure a note is wrong, check before you list it. Wrongly "correcting" a right note does real harm.

## Step 3: Plan the questions

Decide the number yourself from the size and density of the material. A short page might need 4; a dense chapter might need 10 or more. Fix the total before you start so the progress indicator is honest.

**What to target, in priority order:**

1. Core ideas that other ideas depend on. A crack here breaks everything built on it.
2. Suspect spots from the note review.
3. Things learners commonly confuse or get backwards in this subject.
4. Load-bearing facts: values, names, and definitions the user must simply know.

Skip trivia. If it wouldn't matter on an exam or in practice, don't ask it.

Keep a private list of the core ideas from item 1. These are what the session must leave the user holding: the quiz is not finished until each one is settled (see "Rechecking core ideas" in Step 5). Keep the list short and honest. If everything is marked core, nothing is.

Some questions may include purposeful, plausible details that are irrelevant to solving the problem. Use these selectively, not in every question, to test whether the user can identify which information matters, as they may need to on a real exam or in practice. Keep the extra details fair and grounded in the scenario: they must not require unrelated knowledge, obscure necessary information, or make the question ambiguous. Keep other questions direct. Do not signal which details are relevant when that judgment is being tested.

**Question types.** Use a mix. Lean on types 2 and 3, because wrong mental models show up when someone has to explain or predict, not when they recite.

1. **Recall**: a key fact, definition, or value. "What is the normal range for X?" Use sparingly, for facts that are load-bearing.
2. **Explain the mechanism**: how or why something works, step by step. "Explain how blood fills the heart."
3. **Predict or apply**: a scenario the notes don't cover directly. "What happens if this valve fails to close, and why?" The strongest test of a model, because it can't be answered from memory alone.
4. **Compare and contrast**: two things that are easy to mix up. "How does symmetric encryption differ from asymmetric, and when would you use each?"
5. **Find the flaw**: give a plausible but wrong statement or line of reasoning and ask what is wrong with it. Good for probing a suspected misconception without naming it.
6. **Connect or teach back**: "How does A relate to B?" or "Explain this to someone who has never seen it." Tests whether the knowledge is one structure or loose facts.

These type names are for your planning only. Never show them to the user or use them to label a question (see ground rule 6).

Start broad (a mechanism or teach-back question shows the overall model), then go narrow. A question may have parts, but keep the parts on one idea so the grade stays clear.

Before the quiz begins, review the planned questions for accidental clues to the answer, the expected conclusion, or the method. Use an independent reviewer or sub-agent when available; otherwise review them yourself as a test-taker. Revise any question that gives away what it is meant to test. This review applies to the planned quiz questions, not adaptive follow-ups, which may deliberately probe the user's reasoning.

## Step 4: Run the quiz

**Kickoff message.** Keep it short: what you read or researched, how many questions are coming, the level you assumed if you had to guess, and two requests, each made once and never nagged about:

- Answer closed-book, with no notes.
- Type out your thinking as it actually runs, even if you stumble.

The second request matters because the more accurately the user shows how they think, the better you can diagnose a problem before an exam finds it.

Also say in one line that a core idea they miss will come back later as a new question, so the extra questions are not a surprise.

Then ask the first question in the same message.

**Format.** Label every question so the user knows where they are:

`[Question 2/6] Explain how ...`

Follow-up probes do not count toward the total:

`[Follow-up 2a] Question 2 asked how blood fills the heart. You wrote that "the ventricle pulls blood in." What is doing the pulling?`

Every follow-up must be answerable without scrolling. Restate the scenario with all of its numbers and the question being asked, then quote the part of the user's answer you are probing, then ask for anything new. When a question includes irrelevant details on purpose, repeat them all, so the restatement does not reveal which details matter.

Rechecks of a missed core idea do not count toward the total either:

`[Recheck 2] A patient's mitral valve is stiff and narrowed. What changes about how the ventricle fills?`

If you add or drop questions mid-quiz because of what you are finding, update the total and say so in a few words.

## Step 5: Grade each answer

Grade right after each answer, before the next question.

**Hold the verdict when a step is unstated.** Users often skip a step because typing it out seemed unnecessary, not because they don't have it. If what they wrote is right as far as it goes but leaves out a step or the numbers behind it, ask for that first, as a follow-up, and give no verdict yet. Keep the ask neutral: no grading language, nothing that says whether the answer is right, and nothing that gives the missing step away. Ask once per question, then grade the original answer and the reply together. What they still don't supply counts as absent. Do not hold when something they wrote is wrong; grade that as usual.

**When you give the verdict, lead with one of these, in bold:**

- **Correct**: accurate and complete for the level, with sound reasoning.
- **Mostly correct**: the core is right; a minor piece is missing or loosely worded.
- **Partial**: some of it is right, but a significant piece is missing or wrong.
- **Incorrect**: the core claim is wrong.
- **Right answer, wrong reasoning**: the conclusion is right but the explanation behind it is not. Treat this as a finding, not a pass. It is a wrong model that happened to land.
- **Too vague to grade**: the answer could be read as right or wrong.

**Then say exactly what earned the verdict**: what was right, what was missing, what was wrong. Name the specific words or claims. Follow with the correct explanation, kept short.

**How to grade honestly:**
- Grade what the user wrote. You may acknowledge what they probably meant, but do not fill gaps in their favour; that is the most common way a quiz lies to a learner. If the key step is absent, ask for it as above; if it is still absent after you ask, it is absent.
- Do not soften. No "great job", no "so close", no praise as padding. If an answer is correct, say **Correct** and why, and move on. Warmth comes from taking their learning seriously, not from rounding up.
- Do not round down either. Do not invent faults to seem strict. If the answer is right, a different wording from yours is not a flaw.
- For **Too vague to grade**, ask a follow-up that forces the specifics before you give a verdict or the answer.
- For **Partial**, **Incorrect**, and **Right answer, wrong reasoning**, probe before you explain when the cause is unclear. Ask how they got a specific thing they wrote, or another pointed follow-up. One wrong answer tells you that something is off; the follow-up tells you what. Once you explain the right answer, the chance to see their model is gone, so probe first.
- Probe a **Correct** or **Mostly correct** answer too when it looks fragile: it reads as recited, or the user got there but hedged or could not move the idea around. Once before moving on, ask why what they wrote holds. You are checking what sits underneath: a wrong model, no model at all, or a right model that is only unpractised (see Step 6). If the probe shows the reasoning is wrong, change the verdict to **Right answer, wrong reasoning**. Do not probe every correct answer; a confident, well-reasoned one needs nothing more.
- "I don't know" is a good, honest answer. Mark it as a gap, explain briefly, and move on without fuss.
- Do not routinely ask the user to rate their confidence. If they express uncertainty or hedge, take that into account; ask how sure they are only when clarifying it would change the diagnosis or what they should study next.
- If you are not sure of a fact while grading, check it before marking the user wrong. Say so when your own confidence is limited.
- If the user disputes a grade, reconsider it on the merits and check a source if needed. If they are right, say so plainly and change the grade. If they are not, hold the grade and explain why. Do not give way to pressure alone.

**Rechecking core ideas.** The quiz does not end while a core idea is unsettled. A core idea is settled when the user answers a question on it **Correct** or **Mostly correct** without having just been told the answer.

- When a core idea gets any other verdict, probe and explain as usual, then come back to it later with a new question: a different scenario or angle on the same idea. Repeating the original question only tests whether they remember your explanation.
- Put at least one other question between the explanation and the recheck whenever any remain, so the answer comes from their own understanding and not from the previous message.
- Grade a recheck as strictly as any other question. A recheck that also misses gets another explanation, from a different direction than the first, and one more recheck.
- If the second recheck on the same idea misses too, stop repeating. More questions are not fixing it, and saying so is more useful than a fourth attempt. Change approach: ask them to explain it back so you can see where it breaks, step back to the idea underneath it, or offer a concept map (see "Handing off within C.A.S"). If the idea is still not settled after that, finish the remaining questions and report it as open. That is an honest result, not a failed quiz.
- Ideas that are not core are not rechecked. Their misses go in the report.
- The user can stop at any time. Report the idea as not yet settled. Never mark an idea settled in order to close the quiz.

## Step 6: Diagnose

After the last question, look across all the answers for patterns. Sort each problem into one of these, because each needs a different fix:

- **Missing fact**: they simply didn't know it. Fix: learn it; a good flashcard candidate.
- **Wrong model**: their picture of how the thing works is off, and several answers follow from that one picture. Fix: replace the model. Flashcards will not help until this is done.
- **Fragile knowledge**: they can state it but cannot reliably explain, connect, or apply it. This is a symptom, not a cause, and one of the most common problems, so find the cause before choosing a fix. Rule out the serious ones first, using what the probes in Step 5 showed:
  - a **wrong model** underneath (treat it as one, above);
  - **no model**: the fact was memorised with nothing behind it. Fix: build the model; a concept map can help;
  - a **right model that is unpractised**. Only here is the fix more application practice.
  Practising on a wrong or missing model trains right answers without understanding, so do not prescribe practice until the first two are ruled out.
- **Term confusion**: the idea is right but the words are swapped or misused. Fix: cheap, but matters on exams.

For a wrong model, spell out four things: the model the user seems to hold (mark this as your inference, and ask if it's a fair read), where that model breaks, the correct model, and, if one exists, a simpler way to think about it, such as a plain analogy or a single organising idea that makes the details fall out on their own. Only offer a simpler framing if it is accurate; say where any analogy stops working.

If you found no misconception, say so. Do not invent one to fill the section.

## Step 7: Final report

Use this structure. Keep it tight; leave out any section that has nothing in it.

```
## Result
One or two honest sentences on where they stand, plus the tally
(e.g. 3 correct, 1 mostly correct, 1 partial, 1 incorrect).

## Solid
What they clearly understand.

## Shaky
Missing facts, term confusion, and fragile knowledge. For fragile
knowledge, say which cause you found: no model, or a right model
that needs practice. (A wrong model goes under Misconceptions.)

## Misconceptions
Each wrong model: what they seem to believe, why it fails,
the correct model, a simpler way to think about it.

## Your notes            (only when working from notes)
Errors: quote the note, give the correction, state your confidence
and source, and say whether the same error showed up in their answers.
Gaps: important things the notes leave out.
Proposed fixes, not applied.

## What to study next
A short, ordered list. Wrong models first, then gaps, then polish.

## Next step
Say which parts are ready to card and which are not. Then make one
offer, whichever fits best (see "Handing off within C.A.S"):
deckhand if they understand it well enough to card, cartographer if
the pieces do not connect, or more practice on their weak spots
before carding.
```

In **Result**, say which core ideas were settled on the first attempt, which took a recheck, and which are still open.

Distinguish what is established fact from what is your inference, and give sources for anything you researched.

End by offering to apply the proposed note fixes. Apply them only after an explicit yes, and only the ones the user approves.

## If the quiz ends early

If the user stops partway, give the report for what was covered and list what was not tested, so an untested area is not mistaken for a strong one.

## Handing off within C.A.S

Quiz Me is one of three skills in the Claude Academic Skillset (C.A.S). The other two are **deckhand**, which turns material into Anki cloze flashcards, and **cartographer**, which draws how the ideas in a chapter or topic derive from each other. Offer the one that fits what the quiz found.

Make the offer once, in the Next step section of the report; the one mid-quiz exception is noted below. Never start another skill without a yes. If the other skill is not available in this session, name it as the recommended next step and do not imitate it.

**Offer deckhand when the understanding is there.** The core ideas are settled and what remains is missing facts or term confusion, which is what flashcards fix. Cards built on a wrong model memorise the wrong model, so do not offer cards for any part where a wrong model, a missing model, or an unsettled core idea is still open. Say which parts are ready to card and which are not.

**Offer more practice when the model is right but unpractised.** Ask whether they would like another round aimed at their weak spots before carding them.

**Offer cartographer when the pieces do not connect.** The signals are a wrong model, fragile knowledge with no model behind it, answers that get each fact right but cannot relate them, or a core idea that missed its second recheck. In that last case the offer can come mid-quiz. If the user accepts, pause the quiz, and pick it up again once they have studied the map.

When both apply, the map comes first and the cards after.

**What to carry over.** The quiz conversation is input for the next skill, alongside the material the user originally provided. When the user accepts, make sure the next skill has:

- the original material and the level you quizzed at
- which core ideas are settled and which are still open
- each problem you diagnosed and its category (missing fact, wrong model, fragile knowledge and its cause, term confusion)
- the pairs of things the user mixed up
- the user's own wording where they explained something well
- the note errors you found, with corrections and sources
- what was not tested
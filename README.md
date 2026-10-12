# C.A.S: Claude Academic Skillset

Three [Claude](https://claude.com/claude-code) skills that all work together to help you study, correct mental models, and build on foundational concepts

| Skill | What it does |
|---|---|
| [quiz-me](quiz-me/) | An oral exam on your notes or a topic. Grades strictly, rechecks the core ideas until they hold, and diagnoses wrong mental models. |
| [cartographer](cartographer/) | Draws a zoomable, hand-drawn map of how ideas and formulas connect or derive from one another. |
| [deckhand](deckhand/) | Turns study material into reviewed Anki cloze flashcards. |

> [!TIP]
> Run quiz-me before deckhand. Carding material you don't understand doesn't stick.

# Prerequisites

You'll need Claude: the [desktop app](https://claude.ai/download), the [web app](https://claude.ai), or [Claude Code](https://claude.com/claude-code).

- **quiz-me:** nothing
- **cartographer:** nothing in the Claude app. In Claude Code, [Node.js](https://nodejs.org/) and [Python 3](https://www.python.org/downloads/)
- **deckhand:** [Anki](https://apps.ankiweb.net/) desktop, to import the cards it makes

> [!IMPORTANT]
> Deckhand needs Anki desktop 2.1.54 or newer.

# Install Instructions

## Claude app (desktop or web)

> [!IMPORTANT]
> Skills only run when **code execution** is turned on in your Claude settings.

On a paid plan (Pro, Max, Team, or Enterprise):

1. **Open plugins.** In the left sidebar, open **Customize**, then the **Plugins** tab.
2. **Add this repo.** Click **Add**, then **Add marketplace**, then **Add from a repository**, and enter `F1veYearPlan/claude-academic-skillset`.
3. **Install.** Install the **C.A.S** plugin. It adds all three skills.
4. **Check it works.** Start a new chat and say **"quiz me on photosynthesis"**.

Plugins added here also sync to Claude Code when you sign in with the same account.

<details>
<summary><b>On the free plan, or want only some of the skills?</b></summary>

1. **Download.** On this page, click the green **Code** button, then **Download ZIP**.
2. **Unzip it.** You will see three folders: `quiz-me`, `cartographer`, and `deckhand`.
3. **Zip each folder on its own.** Right-click a folder and choose **Compress to ZIP file** (Windows) or **Compress** (Mac). Do this for each skill you want.
4. **Upload.** In Claude, open **Customize**, go to **Skills**, and upload each zip.

</details>

## Claude Code

Run this inside Claude Code (version 2.1.275 or newer):

```
/plugin install cas --marketplace F1veYearPlan/claude-academic-skillset
```

<details>
<summary><b>Install without the plugin system, or only some of the skills</b></summary>

Copy the skill folders into your skills folder, then restart Claude Code.

**Mac or Linux**

```bash
git clone https://github.com/F1veYearPlan/claude-academic-skillset.git
mkdir -p ~/.claude/skills
cp -r claude-academic-skillset/{quiz-me,cartographer,deckhand} ~/.claude/skills/
```

**Windows (PowerShell)**

```powershell
git clone https://github.com/F1veYearPlan/claude-academic-skillset.git
New-Item -ItemType Directory -Force "$env:USERPROFILE\.claude\skills" | Out-Null
Copy-Item -Recurse -Force .\claude-academic-skillset\quiz-me, .\claude-academic-skillset\cartographer, .\claude-academic-skillset\deckhand "$env:USERPROFILE\.claude\skills\"
```

**No git?** Download and unzip the repo as in the free-plan steps above, then drag the skill folders into `~/.claude/skills/` (on Windows, `%USERPROFILE%\.claude\skills\`).

</details>

# Use Cases

## quiz-me

Say: *"quiz me on my cardiac physiology notes"*, *"test me on subnetting"*, *"do I actually get this?"*

- **Before an exam**, to find what you only think you know
- **Before making flashcards**, to check the understanding is there first, carding material you don't understand is useless
- **When you don't know what to study**, to get an ordered list of what to fix and where your understanding is shaky
- **After a lecture or chapter**, to catch a wrong mental model before it sets
- **To check your notes**, since it grades against the truth and reports errors in the notes themselves without editing them

It asks open questions only, one at a time, with no multiple choice. A core idea you miss comes back later as a new question until you can answer it

## cartographer

Say: *"map this chapter"*, *"make a concept map of my stats notes"*, *"show how these formulas connect"*

- **When you know the facts but not how they fit together**
- **For formula-heavy chapters**, to see which formula is built from which
- **As a one-page review sheet** before an exam
- **After a quiz** shows that the pieces are not connecting

In Claude Code, needs Node.js and Python. The first map downloads its fonts and math renderer

## deckhand

Say: *"make Anki cards from these notes"*, *"card this chapter"*

- **Once you understand the material** and need it to stick long term
- **For fact-heavy subjects**: anatomy, pharmacology, ports and protocols, vocabulary, case law
- **For certification prep**, where it reads the exam objectives to decide what matters
- **To add to a deck you already have**, matching your tags and avoiding duplicates

Needs [Anki](https://apps.ankiweb.net/) desktop 2.1.54 or newer. Making your own cards is best, but if you would not make them otherwise, this is a good substitute. More detail is in the [Deckhand README](deckhand/README.md).


# Contributing & Feedback

If you have an idea for a new skill, an improvement to an existing one, something that's frustrating you or you just want to share your experiences I'd love to hear it:

- **GitHub:** [open an issue](../../issues) or submit a pull request
- **Discord:** `nahde._`

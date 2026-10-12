# 🃏 Deckhand

> A [Claude](https://claude.com/claude-code) skill that turns your study notes into high-quality, cloze-only [Anki](https://apps.ankiweb.net/) flashcards based on industry best practices and delivered as an easily importable TSV.

## What does it do?

Point Claude at your notes and ask for Anki cards. Deckhand will produce atomic cloze-deletion Anki cards, grounding them in a **contextual** anchor on the back, and hands you a ready-to-import `.tsv` file. That's it.

## Five phase Approach

1. **Setup** — Asks you which deck the cards belong in to reuse your existing tag scheme. It may ask for an export of your current deck to help paint the full picture and reuse tag schemes, say no if you don't want it to do this and it will build a brand new deck. 
2. **Pre-flight** — Reads how to make cards, then your notes end-to-end. It then fact-checks every volatile or checkable claim with a forced web search for domain-specific, academic sources. If something is clearly *wrong* it flags it for you instead of touching your notes; Similarly, if something's *outdated* it will surface it for you to decide what to do, but doesn't assume that it's wrong. It will also flag candidates for mnemonic devices and image-occlusion to enhance recall, while identifying foundational concepts based on specific criteria that it will review more rigorously.
3. **Build** — Drafts one tested fact per card with the load-bearing word hidden, short sentences, explicit comparison cards for things that are easy to confuse. It deliberately drafts more cards than it will deliver — plus competing phrasings of foundational cards — so weak drafts get dropped instead of patched.
4. **Calibration** — Shows you a small sample of the drafted cards for quick keep/fix/kill verdicts. Your ratings become labeled examples that ground the review, and the edits themselves are studying. Skippable.
5. **Adversarial review** — A *fresh* Claude subagent that never saw the build reasoning attacks every card as a skeptical third-party. It answers each card blind to catch ambiguous or answer-leaking cards, judges the rest against your rated sample and the mature/leech cards from your existing deck, and drops whatever can't be cheaply repaired. Cards found to be 'foundational' get the hardest look: a three-lens panel covering fidelity, construction, and interference.

## Built on

Deckhand encodes established spaced-repetition practice and active recall techniques based on:

- **Piotr Wozniak** — *[20 Rules of Formulating Knowledge](https://supermemo.guru/wiki/20_rules_of_knowledge_formulation)*
- **Andy Matuschak** — *[How to Write Good Prompts](https://andymatuschak.org/prompts/)*
- **Michael Nielsen** — *[Augmenting Long-Term Memory](https://augmentingcognition.com/ltm.html)*

The review pipeline additionally follows current research on LLM-generated flashcards: judges grounded with labeled examples, placement over bare verdicts, blind answering to catch ambiguity, and overgenerate-and-filter.

## Best practices

- **Learn it first.** You need to understand the material before making flash cards, this doesn't skip that part for you, sorry.
- **Expand your notes before carding.** Not only does this help you learn it, but expanding the notes gives better context to Claude but allows **you** the opportunity to add personal context. Claude will attempt to suggest information from memory, but if you hardcode personal context notes into it, you'll get way more mileage out of your cards. You'll also be able to clean them up a bit, garbage going in is garbage forever.
- **Review the flags.** When Deckhand surfaces a suspect fact, mnemonic, or image occlusion candidate, weigh in. Learning is most effective when it's multi-modal.
- **Rate the sample.** The keep/fix/kill pass is the single biggest lever on review quality — and rewording cards into your own voice is itself a study rep.

## Installation

Deckhand is part of [C.A.S](../README.md#install). The install steps there copy it into your skills folder along with the other two skills. To install only Deckhand, copy just the `deckhand` folder.

The result should be `…/.claude/skills/deckhand/SKILL.md`. Restart Claude Code (or reload Cowork) so it picks up the new skill. Confirm it's loaded by asking Claude to "make some Anki cards" and it should invoke Deckhand.

## How to Use

1. **Install the skill** (above).
2. **Give Claude your notes.** Any of:
   - **Notion** — connect the Notion integration and point Claude at the page ("card the *Networking* page under *Academia*").
   - **Paste** them as plaintext in the chat.
   - **Upload a file** — PDF, `.txt`, `.md`, `.docx`, `.pptx`, or even **photos/screenshots** of handwritten or printed notes.
   - **A local file path** (in Claude Code) or any other connected source (Google Drive, etc.).
3. **Ask for cards** — e.g. *"Make Anki flashcards from these notes."* Deckhand triggers automatically.
4. **Work through the phases with Claude** — Pick a deck, review the facts and mnemonics it flags, and rate the sample cards. The more you engage here, the better the deck.
5. **Get the `.tsv`** — Claude delivers a single tab-separated file (cloze-only, with header directives baked in for the deck name and note type).
6. **Import into Anki:**
   1. Open the **Anki desktop app**.
   2. **File → Import** and select the `.tsv`.
   3. The file's header directives preset the **deck** and the **Cloze** note type — confirm the preview looks right and click **Import**. (Anki creates the deck if it doesn't exist.)
   4. Sanity-check one card: the cloze should be on the front, and the **Context** box should render on the back.
7. **Study.** Anki (via FSRS) schedules your reviews — just show up daily. Re-importing an updated `.tsv` later *updates* matching cards instead of duplicating them.

## Requirements

- **Anki** desktop (2.1.54+ — the version that introduced the text-import header directives).
- Optional: **Claude Code** or **Cowork** (the skill relies on subagents for the review pass and web search for fact-checking). It will work without it, you just wont have the verification or review passes.
- Optional: the **Notion** connector, if you keep your notes there.

## License

MIT

---
name: deckhand
description: Turn a user's study material into high-quality Anki cloze-deletion flashcards. Use whenever the user wants to make flashcards, mentions Anki, cloze, "carding", spaced repetition, or memorizing a body of material. Trigger even on a bare "make cards from this."
---

# Reference Files

| File | Read it during |
|---|---|
| `references/card-principles.md` | Phase 2 (Pre-flight) **and** Phase 3 (Build) | 
| `references/tagging-cards.md` | Phase 3 (Build, tagging step) | 

# Working with the rest of C.A.S

Deckhand is one of three skills in the Claude Academic Skillset (C.A.S). The other two are **quiz-me**, which tests and diagnoses the operator's understanding, and **cartographer**, which draws how the ideas in the material derive from each other. Offer them where noted below, once, and never start one without a yes. If a skill is not available in this session, name it as a suggestion and do not imitate it.

## When a quiz-me session came first

If the conversation holds a quiz-me session on the same material, it is evidence of what the operator actually knows. Use it together with the notes, never instead of them.

- **Phase 1:** Do not re-ask what the material is for if the quiz already established it. Still ask for the current deck.
- **Phase 2:** The quiz report replaces guesswork in the coherence check. Note errors the quiz already found and sourced do not need a second search; every other volatile or checkable claim still goes through the Mandatory Verifier.
- **Held-back material:** Do not card any part the quiz left as an open wrong model or an unsettled core idea. Cards there would drill the wrong model. Name the held-back parts and the reason in the Phase 2 response.
- **Foundational concepts:** The quiz's core ideas count as foundational in the Enhancer step.
- **Phase 3:** Let the quiz findings steer what gets carded and how.
    - Facts the operator missed get carded first.
    - Pairs they mixed up, and any term confusion, get an explicit comparison card.
    - A misconception the quiz corrected gets a card on the exact point where the old model broke. The card states the correct fact; the wrong claim never appears as a cloze answer.
    - Fragile knowledge from an unpractised model gets application or why-it-matters cards, not another term↔definition card. Fragile knowledge with no model behind it is held back like a wrong model.
    - Material they answered correctly the first time still gets its load-bearing facts carded, since knowing it today is not remembering it next month, but without redundancy.
    - Where the operator explained something well in their own words, build the card from their phrasing.
- Parts of the material the quiz did not test are carded as normal.

## Offering the other skills

- **Phase 2:** If the coherence check suggests the operator does not understand the material, offer quiz-me to find out what holds, or cartographer when the notes are fragments that do not connect. Carding anyway remains their call.
- **Phase 6:** One Findings bullet may offer quiz-me once the cards have had a few days of review, because cards train recall and a quiz tests whether they can apply it. Leave it out if a quiz-me session came first.

# Workflow

## Phase 1 — Setup

- **Ask for the users current deck** If the user provides a deck, examine their voice and tag scheme while utilizing their current deck to avoid building duplicates. In the instructions, include how to export the deck (File > Export > Choose .apkg)
- **Ask what the material is for** An exam, specific certification, rotation, or the goal it serves. If the material is for an exam, you can pull the exam objectives in order to inform your carding and grading. You can also take inspiration from high quality community cards or decks. 

## Phase 2 — Pre-flight

Do these in order; This is NOT preference. 

1. **Learn how to make cards** Read `references/card-principles.md` first. You can NOT make or judge cards until this is read.
2. **Ingestion** 
    - **Exported deck:** If the operator supplied an export, look through those cards to paint a better picture of what they are hoping to learn or understand. 
    - **Operator goal:** If the operator provided a goal, including an exam or certification; Research the exam or certification objectives or important material. 
    - **Read the notes or study material:** Build the big picture in combination with the supplied goal or current deck. Do not card mid-paragraph. 
    - **Understand the bigger picture** 3-6 sentences: What the material covers, its main through-line, and how the key concepts depend on one another. Ask the operator to confirm that it matches their own understanding and for permission to proceed. If the synthesis surprises them, stop and resolve the mismatch first. 
    - **Coherence check** While writing the synthesis, judge whether the notes are actually coherent. Trouble signals are internal contradictions, orphan fragments that connect to nothing, the same term used inconsistently, raw copy-paste with no signs of processing. If the authors notes appear to showcase their own lack of understanding, surface this in the second paragraph after the big picture. 
    - **Mandatory Verifier** While reading notes you MUST identify ALL volatile and checkable claims. 
        - You **MUST** perform a **FORCED** web search with reputable sources for that domain of knowledge. For example, if the notes are medical, search for widely accepted and highly reputable medical material first. If they relate to Computer Science or Programming, reference the appropriate documentation or source. 
        - If a claim is factually **wrong**, flag it and do not build a card on the disputed claim. 
        - If a claim is merely **outdated/superseded but still relevant** (often the entire point in security, medicine, law, and many other fields) do NOT correct, demote, or replace it. Surface it to the operator and continue carding it. Do not **EVER** edit the operators notes. 
    - **Response to the user:** Return your bigger picture summary to the user in one paragraph, in a second paragraph return any issues identified in the coherence or verifier stages and ask them if they want to correct information or if you should continue. If it appears that they do not understand the material, tell them this immediately.
3. **Enhancer** Identify and *flag as candidates* 
    - **Image-occlusion candidates** Facts that have inherent visual/spatial structure (anatomy, network topology, packet diagrams)
    - **Mnemonic device candidates** Facts that are hard to hold on their own due to having no logical hook; Random numbers, enumerated lists, hard terms, names, or foreign vocabulary. 
        - Make suggestions on Mnemonic devices from popular community suggestions or any personal knowledge of the user if applicable. Every mnemonic must bridge both the cue and the target. — e.g. for FTP on Port 21, "21 Savage uploading files over FTP" pulls back both the number and the protocol; "21 Savage" alone only hooks one end.
    - **Foundational concepts** based on what was retrieved from exam, course, or test objectives and from the understanding of the big picture from the users notes, identify any concepts that are considered foundational to the domain. This is an in-process signal, not a tag or anything that is user-facing. This drives more thorough carding. Expected to be ~10-30% of concepts, not the majority. 
    - **Observe deck and tag structure** If an export was supplied, read the existing cards/tags for their structure. Reuse the users tagging system and avoid drafting any cards that overlap too aggressively. If they did not supply an export, skip this. 


## Phase 3 — Build

Ingest the information from `references/tagging-cards.md` and combined with the context from earlier phases and `references/card-principles.md`, begin making cards. 

Draft each card as a cloze, with `text` (cloze sentence), `Back Extra` (The context anchor plus a source and date if needed, or an approved mnemonic on its own line), and tags per the tagging-cards.md file. Bias towards high value with redundancy on foundational concepts.

**Build rules:**
- **Depth floor.** Every foundational concept gets at least one card that is *not* term↔definition — an application, a comparison, a why-it-matters, or a failure mode.
- **Competing variants.** For each foundational card, draft 2–3 phrasings of the same fact. The review's placement lineup ranks them and keeps one winner — never deliver more than one variant of the same card.
- **Overgenerate slightly** (~1.3× the count you intend to deliver). The review culls the bottom; dropping a weak card beats rehabilitating it.
- **Unique answerability.** Before finalizing any card: given only the stem, is a second answer defensible? If yes, add a hint or a disambiguating clause (card-principles §3).

Anki imports **delimited rows**, one note per line. Emit a `.txt`/`.tsv` file that begins with header directives, then one tab-separated row per card. This imports into the built-in **Cloze** type with no setup (verified against the Anki manual, docs.ankiweb.net/importing/text-files.html; headers supported since Anki 2.1.54):

```
#separator:tab
#html:true
#notetype:Cloze
#deck:<Deck Name>
#columns:Text	Back Extra	tags
#tags column:3
```

Then each card is ONE physical line of three tab-separated columns:

1. **Text** — the cloze sentence.
2. **Back Extra** — Context + Source + Date (+ optional Mnemonic) as HTML.
3. **tags** — space-separated, `::` for hierarchy.

Worked example (a preview card → its TSV row; → marks a tab):

```
Telnet listens on TCP port {{c1::23}}. → <b>Context:</b> Older cleartext remote-management protocol; on Meow box this was the only open port. Don't confuse with SSH (22). <br><span style="font-size:12px;color:#888">Notion → CPTC → Meow Box · 2026-06-02</span> → topic::offsec::protocols::telnet type::gotcha
```

**Rules:**
- Keep each card on **one physical line** (no raw newlines inside a field; use
  `<br>`). `#html:true` makes the markup render.
- `#html:true` also means every field is parsed as markup: entity-escape literal
  `<`, `>`, `&` as `&lt;`, `&gt;`, `&amp;`.
- Never leave a literal `::` inside a cloze answer — Anki reads it as the hint
  separator (`{{c1::std::vector}}` imports as answer "std", hint "vector").
  Reword, or make the hint deliberate.
- Re-import updates are **keyed to the `Text` field**: Anki matches notes on the
  HTML-stripped first field, within the same note type ("Update" is the usual
  resolution, but Anki remembers whatever was last chosen in the import dialog).
  Re-importing therefore safely fixes **Back Extra and tags only** — an edit to
  `Text` breaks the match and imports a **new note** alongside the old one. For
  `Text` fixes, tell the operator to delete the old note in the browser first.
- Volatile cards: keep the date/version inside the `Text` itself, not only in
  Back Extra, so staleness is visible during review.
- Confirm the `#deck:` name is what you intend — Anki auto-creates it on import
  if it doesn't exist.
- Localization caveat: `#notetype:Cloze` and the `Text`/`Back Extra` names match
  only on **English-created collections** (stock note-type and field names are
  localized at collection creation). On a non-English Anki the headers silently
  don't resolve; the operator selects the note type manually in the import dialog.


## Phase 4 — Calibration (skippable)

Show the operator 5–8 representative drafted cards — a mix of foundational and ordinary, spanning the material — and ask for a quick **keep / fix / kill** verdict on each, with one short reason for any fix or kill. Tell them replying "skip" goes straight to review.

The rated cards go to the Phase 5 reviewer verbatim as labeled, same-source examples — the strongest measured lever for judge accuracy. It is also the operator's own encoding pass: their edits are studying, not overhead. If they skip, proceed; the review then grounds itself on export anchors alone.


## Phase 5 — Adversarial review

Spawn a **fresh subagent** that receives the card principles (`card-principles.md`), the drafted cards, the operator's source notes, the Phase 4 verdicts if given, and the cards from their existing export if provided, **but not the reasoning that produced the cards.** It reads as a skeptical stranger holding the same sources the builder had.

**Ground the judge before judging.** Labeled examples beat rubrics and bare instructions; give the reviewer every set available:
 - Phase 4 keep/fix/kill verdicts — same-source labeled examples; weight these heaviest.
 - From an export with scheduling data: **mature cards** (interval ≥ 21 days) are positive anchors — cards that survived real review; **leech-tagged cards** are negative anchors. Judge drafts by placement among these anchors, in the collection's own voice.

Then run, in order:

1. **Blind-answer pass (every card).** The reviewer answers each card cold — `Text` with the deletion blanked, intended answer withheld — then compares. Exact match: pass. Wrong but defensible from the stem alone: **ambiguity flag** — the card admits multiple valid answers. Answered trivially from the surrounding words: leakage.
2. **Grounded fidelity checks (verdicts).** Judged card-by-card against the source notes. Is the card on-target for the passage it came from; Is the claim actually supported by the notes; Does the surrounding text give the answer away (if the text after the deletion rewords the hidden part, rewrite it); Does the stem carry enough context to be answerable without giving the hidden word away? Failures are **repaired or dropped** — a card that needs a second repair loop gets dropped, not rehabilitated; the build overgenerates so dropping is cheap.
3. **Construction flags (low-confidence).** Ambiguity (from the blind-answer pass), wordiness, shallowness, training the question's shape instead of the content. Agent judgement is weak to these flaws, so surface them to the operator as flags rather than rewriting, unless the fix is obvious or mechanical.

For **borderline calls and foundational-card variants**, judge by labeled placement rather than bare verdict: generate deliberate degradations of the card (a wordy version, an answer-leaking version, a two-facts version, an off-target version, and an ambiguous version — the stem loosened until a second answer is defensible) and ask where the real candidate ranks among them — placement among labeled examples is the form of agent judging that works; unlabeled "pick the best" is not. For variants, keep the highest-placing one and discard the rest. Foundational cards additionally get a **perspective-diverse panel** — three judges with distinct lenses (fidelity to source; construction, via blind answer and placement; interference with neighboring and existing cards) rather than three identical votes, which share one ceiling and one blind spot. That is what "the hardest look" means mechanically.

Surface every issue; repair or drop problem cards via Phase 3.

Before handing the file over, mechanically validate it: every non-header line has exactly three tab-separated fields, every `Text` contains at least one well-formed `{{cN::…}}`, no raw newlines or stray tabs inside fields, no literal `::` inside any cloze answer (Anki parses it as the hint separator — `{{c1::std::vector}}` imports as answer "std" with hint "vector"), raw `<`, `>`, `&` entity-escaped (`#html:true` treats every field as markup), and the header directives match the Phase 3 header block exactly. Check with a quick script or line pass — a malformed row imports silently wrong, and "silently wrong in Anki" defeats the whole pipeline.


## Phase 6 — Final response format

```
# Review Summary
I created <N> cards on <one clause: what the material is about, not a section list>, verified against <sources searched> and adversarially reviewed by a subagent. The review found <X>, so I did <Y>.

To Import: Anki -> File -> Import -> Select <full path to file>.

## Findings

* Errors: I found <N> errors in your notes. Your notes were left as they are.
   * <Table with one line per error: the claim, the correct fact, the source>
* Image Occlusion:
   * <Table with one line per candidate: the fact and the suggested hook>
* Mnemonic Candidates:
   * <Table with one line per candidate: the fact and the suggested hook>
* <anything else worth noting — one line per top-level bullet>

```

**Rules:**
- **Brevity is the point.** Everything above Findings: four sentences maximum.
  One line per Findings sub-bullet — the operator will ask if they want more.
  The goal is a brief idea of what was created without examining everything.
- **One number, and it's cards.** Report the count of cards the operator will
  review. Never report a separate note count or explain the note/card
  distinction (a multi-deletion note yields one card per deletion number —
  count the cards).
- **Coverage is one clause** ("the mobile and networking sections of your A+
  notes"), never a section-by-section enumeration.
- Do not restate card anatomy (Context, Source, tags) and never list example
  tags — that is the skill's contract, not news.
- **Errors** is always the first Findings bullet and **Mnemonic Candidates**
  always the second — even when empty ("I found 0 errors in your notes. Your
  notes were left as they are.", no sub-bullets).
- "The review found <X>, so I did <Y>" reports the Phase-5 outcome concretely
  and in one sentence. If everything passed, say so.
- If the batch exceeds ~50 cards, add one Findings bullet advising the operator
  to let Anki's new-cards/day limit (default 20) meter them out; if the batch
  contains multi-deletion notes, the same bullet advises enabling "bury siblings"
  so sibling cards don't land on the same day. (FSRS at ~0.90 desired retention
  is the scheduler answer if they ask about settings — don't volunteer more.)
- Always include one Findings bullet on study hygiene: skim the deck in Anki's
  browser and reword any card into your own voice before studying (editing a
  card is a free study rep, not overhead), and suspend or delete any card that
  feels ambiguous or annoying during review rather than enduring it (Anki's
  leech auto-suspend helps).
- If the operator provided no deck export or skipped calibration, add one
  Findings bullet noting that supplying an export (or rating the sample) next
  run gives the reviewer labeled examples and sharpens the review.
- The import path names a location the operator can actually reach — never an
  internal/sandbox path.


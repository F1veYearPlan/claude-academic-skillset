# Card principles

The rubric for designing effective Anki Cloze deletion cards.

### Source Material
* *Wozniak's *20 Rules of Formulating Knowledge*, 
* Matuschak's *How to Write Good Prompts*, 
* Nielsen's *Augmenting Long-Term Memory*,
and the Anki manual. 

## Contents

1. How to make Cloze cards
2. Minimum Information Principle
3. Test production, avoid recognition and pattern-matching
4. Contextual Anchors
5. Domain pitfalls

---


## 1. How to make Cloze cards

Every card is a **cloze deletion** — one note type only. Use Anki's built-in **Cloze** type, which has two fields: `Text` and `Back Extra`. No Basic/Q-A cards; anything you'd phrase as question→answer becomes a cloze instead. Cloze cards hide key information in context, forcing the learner to actively recall the information and strengthening the brains neural pathways when stressed repeatedly. 

- **`Text`** — the cloze sentence (`{{c1::...}}`).
- **`Back Extra`** — everything shown under the answer, packed into this one
  field because the built-in Cloze type has no dedicated Context/Source fields:
  - the mandatory **Context** anchor
  - the **Source**, and a **Date** (YYYY-MM-DD) if applicable
  - an approved **Mnemonic**, if any, on its own labeled line (never merged into
    the Context wording).

Render these as HTML (e.g. `<b>Context:</b> … <br><span ...>Source · date</span>`) so they read cleanly on the card back.


### Examples of high quality Cloze deletion cards
**Question:** A(n) [...] allows wireless devices to connect to a wired network
**Answer:** Wireless Access Point

**Question:** SMB file sharing uses TCP port [...]
**Answer:** tcp/445

**Question:** mmWave 5G offers very high speeds but poor [...]
**Answer:** Range

### Best Practices
1. Hide **key concepts** or **relationships**
2. Write clear, focused prompts with enough context
3. **Rephrase in fresh words.** Never cloze a sentence copied verbatim from the
   notes — copied sentences get memorized by their shape, not their meaning (the
   cloze format's single biggest risk). Rebuild the fact as a short sentence of
   your own, then delete.
4. A note may carry 2–3 deletions max (`c1`, `c2`, … — each number becomes its
   own card testing one blank); tend toward one. Never put two facts under the
   same `cN` number.
5. Keep the sentence short (~15–25 words). A three-line cloze is a paragraph,
   not a fact — strongly consider splitting it.
6. Use overlapping cards to connect related ideas. 
7. Use Anki's hint syntax `{{c1::answer::hint}}` to disambiguate — the hint
   shows inside the blank before answering (e.g. `{{c1::445::port}}`, or
   `{{c1::mmWave::5G flavor}}` when several cards share a similar stem).
   Prefer a hint over contorting the sentence or a bracketed `[Domain]` label.
   Keep hints lean — a hint that narrows the field to one option is the answer.

### Mistakes to avoid
1. Over-deletion: Don't hide too much at once. 
2. Stripping context: Keep enough clues to understand what the question is asking without giving the answer away. 
3. Testing recognition, not recall: Avoid passive phrasing.
4. Overloading cards: Focus on one idea per card.


## 2. Minimum Information Principle

One card tests one atomic fact. The brain reinforces simple, consistent stimuli. A card that asks five things splits effort five ways and reinforces none of them. Split compound cards into several atomic ones. 

- **Nielsen's threshold:** Card a fact if knowing it is worth ~10 minutes of your future time — the measured *cost* of a card is only
4–7 minutes of review spread over 20 years. Skip the rest.

**Compound (bad):** one deletion carrying three facts —
`ARP is {{c1::the layer-2 protocol that maps IP addresses to MAC addresses and is vulnerable to cache poisoning}}.`
**Atomic (good):** three cards —
- `{{c1::ARP}} maps IP addresses to MAC addresses.`
- `ARP operates at OSI layer {{c1::2}}.`
- `ARP's main vulnerability is {{c1::cache poisoning}}.`


## 3. Test production, avoid recognition and pattern-matching. 

Recognition ("does this term mean X?") is weaker than production ("what term means
X?"). For terms the operator must actively produce, **cloze the term itself** so the
card forces recall of the term, not the definition around it. Don't reflexively
test every direction — that doubles review load — but ensure the *direction that
matters* is the one the deletion sits on.

Antipatterns to reject:
- **Binary prompts** ("Is XSS client-side? Y/N") — too shallow. Rephrase to force
  production: `XSS executes its payload in {{c1::the victim's}} browser.`
- **Pattern-shape memorization** — long, distinctive question stems get memorized
  by *shape* without engaging content. Keep stems short and generic.

**Unique answerability.** Before finalizing a card, ask: given only this stem, is
there a second defensible answer? If yes, add a hint (`{{c1::…::hint}}`) or a
disambiguating clause. A card that admits multiple valid answers looks fine at
build time and quietly fails months later — it is the most common construction
flaw and the hardest to detect after the fact, which is why it is checked here,
at write time.


## 4. Contextual Anchors

Every card carries a context anchor on the back, distinct from the answer. It is the memory-anchoring scaffold: Re-situating the atomic fact in the bigger picture the operator understands. This gives them something to re-read when the fact has gone fuzzy, but not yet forgotten and provides additional retrieval paths. 

Context is **read after answering, not recalled.** It is **NOT** tested. 

Include, where applicable: Additional information that grounds the fact in the bigger picture. This could be the problem it solves, where it fits in the bigger picture (OSI layer, phase, a system); A concrete example, or a personal anchor. 

**Context is NOT:** A restatement of the answer. 


## 5. Domain pitfalls

These recur across technical and medical material. Watch for them:

1. **Acronym overload.** Don't stop at "SAML = Security Assertion Markup Language"
   (that's syntax). Also card what problem it solves, what it's compared against,
   the actors, a concrete flow — across several cards.
2. **Number/port sets.** Never card "what ports does SMB use? → 137,138,139,445"
   (a set; sets resist memory). One card per (thing, value) pair, each grounded:
   `SMB direct over TCP uses port {{c1::445}}.`
3. **Vendor/product interference.** Splunk vs Elastic vs QRadar; two drugs in a
   class. Card the *differences* explicitly with disambiguating Context; don't
   card each in isolation and hope the brain sorts them out — it won't.
4. **Closely related concepts.** XSS vs CSRF; preload vs afterload; ARP vs DNS
   spoofing. Make explicit comparison cards that state the key distinction.
5. **Command/procedure soup.** Card intent → flag/step, not the whole command in
   one card — as a cloze: `The nmap flag for OS detection is {{c1::-O}}.`
6. **Ordered enumerations.** OSI layers, kill chain, ATT&CK tactics, pathways —
   use overlapping clozes, never one mega-card listing all items.
7. **"It depends" answers.** If the answer depends on context, put the context in
   the question. An unanswerable card erodes confidence.

# Tagging cards

Tags do topical organization; decks do scheduling. This taxonomy generalizes across domains (medicine, networking, security, etc.) by holding the **axes** fixed and varying the **sub-trees** per field.

## The single most important rule for an automated tagger

**Read the operator's existing tag list first, and reuse exact strings.** Inconsistent
naming silently forks the tree: "cardio", "Cardiology", "cardiac", and "heart"
become four separate tags. Tags are case-insensitive in search but case-sensitive
in display. Before inventing any tag, check whether an equivalent already exists
and reuse it verbatim. Map onto the existing hierarchy; do not mint a fresh
taxonomy each run.

## The axes

```
topic::<area>::<sub-area>    # what the card is about — the one tag every card carries
type::<knowledge-kind>       # only when it changes review behavior (volatile, gotcha, comparison)
source::<origin>             # only when the collection draws on multiple sources
context::<scoping>           # only when the operator juggles multiple exams/certs/rotations
```

**Default is 1–2 tags: `topic::` plus at most one other that earns its place.**
A tag that would sit on every card in the batch groups nothing. If `source::`
or `context::` would be identical across the whole batch and no existing cards
use that axis, leave it off — Back Extra's Source line and the deck name
already carry that information. Introduce those axes only when a second
source or cert actually enters the collection.

Optional `status::` exists, but prefer Anki's built-in **flags** for transient
states (needs-review, leech) to keep the tag tree clean.

## Sub-trees vary by domain (same axes)

```
# Medicine
topic::cardiology::arrhythmias        source::first-aid::ch12     type::comparison  context::exam::step1
topic::pharmacology::beta-blockers    source::sketchy::pharm      type::volatile    context::rotation::im

# Networking
topic::networking::tcp-ip             source::notion::tcp-notes   type::gotcha
topic::networking::dns                source::rfc-1035            type::comparison

# Security
topic::offsec::web::xss               source::notion::web-notes   type::gotcha      context::cert::oscp
```

These rows show every axis populated to illustrate the vocabulary — a real card
carries 1–2 of them (see "The axes"), not all four.

`type::` vocabulary (reuse, don't expand casually): `volatile`, `gotcha`,
`comparison` — the kinds that change review behavior (re-check on a cadence,
extra care against interference, explicit disambiguation). Kind-of-knowledge
labels (`definition`, `concept`, `procedure`, `command`, `number`) don't change
how a card is reviewed — they'd sit on most cards and group nothing; leave them
off.

## Hygiene rules

1. **Lowercase, kebab-case.** `topic::offsec::active-directory`, never mixed case.
2. **`::` for hierarchy.** Never spaces or slashes. Anki auto-creates parent levels.
3. **1–2 tags per card by default, 4 absolute max.** A tag must group this card
   with some-but-not-all others; covering axes for coverage's sake is noise.
4. **Never a tag where a field/flag is better.** Difficulty → flag. Review date →
   Anki's scheduling / date metadata. Importance → in-process signal (the
   Enhancer's foundational-concepts flag), never a tag.
5. **A tag must group.** If only one card would carry it, it's a note, not a tag.
6. **Tag at creation,** never as a later pass — retro-tagging thousands of cards
   is far harder.
7. **Prune with the source.** When the operator revises a source note, find its cards
   via the `source::` tag and update them together.

## Deck policy: keep decks few

Default to one main deck per domain (a given learner is usually one domain), with
at most one or two sub-decks. Topical splitting belongs in tags, not decks —
fragmenting into a deck-per-topic hides cards and adds no pedagogical value.

A small deck count is also how the largest Anki communities operate in practice —
the med-school standard is one deck of tens of thousands of cards, organized
entirely by tags. The real wins are one scheduling pool, no same-topic runs cueing
the next answer, and tag-filtered decks for targeted drilling. (Don't lean on
"interleaving" as the justification: the research supports it only for
discriminating confusably similar material, not for mixing unrelated topics.)

**Default to the existing deck.** Propose a *new* deck only when one of these
holds, and confirm with the operator before creating it:
- the material needs a genuinely different review schedule (e.g., cram for a dated
  exam, then suspend), or
- it has a clear endpoint after which it will be retired, or
- it's a fundamentally different domain the operator doesn't want mixed into daily
  review.

A new topic, a new source, a different difficulty, or a different cert is **not** a
reason for a new deck — it's a tag (or, for an actively-grinded cert, at most a
sub-deck).

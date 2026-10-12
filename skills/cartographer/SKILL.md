---
name: cartographer
description: Draw a hand-drawn, Excalidraw-style concept map of notes or a chapter as a zoomable web page, showing how ideas and formulas derive from each other. Use on "mind map", "concept map", "map this chapter", "show how these connect", or a request to make a relationship chart of study material.
---

# Cartographer

Turn study material into one finished, zoomable picture that shows how every idea connects. It looks like an Excalidraw sketch (rough.js shapes, Excalifont and Comic Shanns fonts, KaTeX math). It is a view-only page, not an editable file.

The map is a derivation chart. It starts from the raw material in the middle and shows, arrow by arrow, how each concept or formula is built from the one before it.

## Design rules

1. **Hub diamond in the middle.** The center shape is always a diamond. It holds the raw starting material the rest is derived from (e.g. "Score X", "A price change: two points on a curve"). If the start is really two things, split it (e.g. "Score X" and "Set of scores").
2. **Arrows show derivation.** Each arrow means "you get this from that". Label every arrow, on or next to it, with the operation or relationship (e.g. Score → Frequency: "Number of occurrences"; Frequency → Proportion: "Fraction of the whole"). Several arrows can point into one box when it is built from several inputs. Keep arrows straight whenever possible; bend only to get around a box.
3. **Boxes hold the concept and its formula.** Title, then the formula in KaTeX, then short rows. When a concept has variants, put them side by side with sub-labels (population / sample, definitional / computational).
4. **Notes outside the box have fixed meanings.**
   - Above a box: a caveat, definition, or "see also" (e.g. "See also: Relative Frequency").
   - Below a box: when to use it, or a tip (e.g. "Multiply by 100 for a percentage").
5. **Bubbles** (ellipses) hold side info that is not part of the derivation chain, placed next to the box they belong to (e.g. next to Mode: "You can assign values to scores and average them that way").
6. **Color shows family.** Hatched fills group related concepts (e.g. red = measures of central tendency, blue = dispersion, green = position). A box with no family stays uncolored. Every color used appears in the legend.
7. **Title block.** Faded title with the author, the legend in colored text beneath it, and a short description of the field in the top corner.
8. **"Stuff to Add" box.** A dotted-border box lists gaps, open questions, or exam traps.
9. **Dark background.** One dark theme, always.
10. **Layout.** No overlapping boxes or notes. Arrows never pass through a box. Same-color boxes sit together. Flow reads outward from the hub.

## Workflow

1. **Get the material.** Read the notes, chapter, or slides the user names. Find the raw starting point (the hub), the chain of derivations, the families (colors), the formulas, and the caveats and tips.
2. **Set up the build tools** (once per session; skips itself if already done):
   ```bash
   bash <skill-dir>/scripts/setup.sh /tmp/cartographer-vendor
   ```
   It downloads KaTeX and the Excalidraw fonts with npm and installs fonttools + brotli with pip.
3. **Write the spec** as an `.mjs` file in the scratchpad. Copy `examples/elasticity.spec.mjs` as a starting point. Format:
   ```js
   export default {
     title, subtitle,               // subtitle: author · course · chapter
     world: { w, h },               // canvas size in px; ~2600 x 1800 fits 15 boxes
     legend: [["red", "Label"], ...],
     nodes: [{ id, x, y, w, h?,     // h auto for boxes; set it for diamond/ellipse
               shape?,              // "box" (default) | "diamond" | "ellipse" | "dashed"
               color?,              // red | purple | blue | orange | green | alert | none
               above?, title?, math?, text?, rows?, below? }],
     edges: [{ from, to, label, bend?, dashed? }],   // bend in px, + or -
   };
   ```
   Text fields accept `$inline TeX$`, `**bold**` and `<br>`. `math` is display TeX without dollar signs. Escape backslashes in JS strings (`"\\dfrac"`).
   - Hub: `shape: "diamond"`. Bubbles: `shape: "ellipse"`. Stuff to Add: `shape: "dashed", color: "alert"`.
   - Lay out on a rough grid, hub near the center, ~150 px gaps. Leave room above a box for an `above` note and below it for a `below` note.
4. **Build:**
   ```bash
   node <skill-dir>/scripts/build.mjs spec.mjs out.html /tmp/cartographer-vendor
   ```
   A TeX error stops the build and names the bad expression. Fix it and rebuild.
5. **Check it once.** Screenshot the page with Playwright (Chromium is preinstalled) after `document.fonts.ready` plus a short wait. Look for overlaps, arrows through boxes, clipped text, and unreadable labels. Fix the spec coordinates or `bend`, rebuild, and check again only if something was wrong.
6. **Publish** `out.html` with the Artifact tool (icon "map"). The page loads rough.js from cdn.jsdelivr.net; fonts and math are inlined.
7. **Hand off.** One line on what the map covers. Then offer the next step once, where it fits (see "Working with the rest of C.A.S").

## Working with the rest of C.A.S

Cartographer is one of three skills in the Claude Academic Skillset (C.A.S). The other two are **quiz-me**, which tests and diagnoses the user's understanding, and **deckhand**, which turns material into Anki cloze flashcards. Never start one without a yes. If a skill is not available in this session, name it as a suggestion and do not imitate it.

**When a quiz-me session came first.** The quiz shows which connections the user does not hold. Still draw the whole map, since a map of only the weak parts has nothing to attach them to, and use the findings to decide what gets the most care:

- Every link the user got wrong or could not explain is on the map as its own clearly labeled arrow.
- A misconception the quiz found goes in an `above` caveat on the box it belongs to, stating the correct idea.
- Ideas still unsettled, and anything the quiz did not test, go in the "Stuff to Add" box.
- If the quiz was paused for the map, say so in the hand-off and offer to resume it.

**What to offer after the map.**

- **quiz-me** to test whether the user can now explain the connections. This is the default, because looking at a map feels like understanding it.
- **deckhand** to turn the map's formulas and facts into flashcards, when a quiz has already shown the understanding is there.

## Notes

- Pan by dragging, zoom with wheel, pinch, the + / − / Fit buttons, or keys + − 0.
- Keep text short. A box with more than five rows should be split into two boxes.
- Formulas must be correct. Check any formula you are not sure of before putting it on the map.

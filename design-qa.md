# Chibook website QA — 2026-09-08

final result: passed

## Scope and visual truth

Selected source: `/Users/mutse/.codex/generated_images/01a076ce-a350-76d2-88aa-90746a6b36fc/exec-9ae31c31-4bef-472d-8e87-a2516d3c470c.png` (1487 × 1058).
Current scope: preserve the selected pale blue website, add WeRead/Z-Library descriptions and dynamic Chinese/English switching. These additions are product copy, not live integrations.

## Browser evidence

- `qa/desktop-zh.png`: 1487 × 1058 CSS/pixel viewport, DPR 1, Chinese, initial listening tab. Viewed together with the source in the same comparison input.
- `qa/desktop-zh-connections.png`: desktop new descriptions and FAQ, 1487 × 1058, DPR 1.
- `qa/mobile-en-connections.png`: English additions at 390 × 844, DPR 1.
- English desktop and mobile hero, English dialog were also inspected directly in browser screenshots / accessibility state.
- Full-page capture had a browser stitching artifact and was excluded. DOM confirmed one connections section and one FAQ. Viewport screenshots are the reliable evidence.

## Fidelity surfaces

- Typography: Chinese serif headline and blue final word retained; English uses Georgia with deliberate line breaks. Long English paragraphs and feature copy wrap without horizontal overflow.
- Layout: original left hero / right reader-and-player composition and feature band retained. The new description section uses the existing spacing, fine rules and blue icon treatment. Mobile changes to one column with language control remaining visible.
- Tokens: pale blue page, translucent white panels, navy text and blue interactive controls retained.
- Images: actual supplied black Chibook logo and generated glass book background retained. Original fictional sample book replaces the concept's commercial book; this is existing implementation content, not a missing translation. Embedded Chinese book-cover artwork remains artwork.
- Copy: all literal translated UI keys have English entries. Reader sample, dialog, new descriptions, FAQ, title, description, language attribute and accessibility labels switch. English-only decorative eyebrows remain stylistic labels.

## Findings and fixes

1. Desktop hamburger inherited the generic icon display rule. Fixed with a desktop-specific hide rule; recapture confirms only desktop navigation and language control.
2. Chinese player progress label wrapped vertically. Added nowrap and nonshrinking labels with a flexible progress element; final desktop recapture confirms horizontal label.
3. English narration progress used the Chinese sample length. Corrected denominator to the actual utterance length and clamped progress.
4. Constrained the reader text region so large text can scroll internally without displacing persistent tools.

No actionable P0/P1/P2 issue remains within this update's scope. Minor differences from the generated concept, including the real brand logo and original sample text, are intentional retained implementation choices.

## Interaction and validation

- Chinese → English immediately translates the page and updates title / html language.
- Reload retains English. English → Chinese restores Chinese content.
- English download dialog: translated platform statuses, close label; Escape closes it and returns focus.
- Desktop and mobile new descriptions inspected; DOM widths equal viewport widths (no horizontal overflow).
- Browser error/warning log empty during verification.
- Translation key coverage check passed; production build passed.
- Speech synthesis language/reset behavior checked in code. Audible playback and third-party services were not externally tested.
- Temporary viewport override reset; local app left running.

# Known Issues

Outstanding items I was unable to complete before the submission deadline.
Documenting these here rather than leaving them unacknowledged.

---

## Accessibility score below target

**Requirement:** Lighthouse accessibility score ≥ 90  
**Actual:** 89

Two audits are failing:

1. **Links rely on colour to be distinguishable** — nav links and footer links use colour alone to indicate they are links, without underlines. WCAG 2.1 requires a non-colour visual cue for inline links unless the contrast ratio against surrounding text is ≥ 3:1.

2. **Insufficient contrast ratio** — the muted text colour (`#64748b` on `#ffffff`) used for nav links and secondary text does not meet the WCAG AA minimum of 4.5:1 for normal-sized text.

**What I would do with more time:**  
Darken the muted text colour to approximately `#4b5563` (contrast ratio ~7:1) and add `text-decoration: underline` to footer links. These are one-line CSS changes, but I ran out of time to retest and verify they resolved all flagged items without breaking the design.

---

## Conversation transcripts are placeholders

**Requirement:** Raw AI conversation transcripts saved in `docs/conversations/`  
**Actual:** Placeholder files describing what each conversation would contain

The placeholder files accurately describe the kinds of questions asked and the decisions made, but they are not the actual exported conversations. A real submission would include the full transcript of each working session.

---

## Commit history does not reflect week-by-week progress

**Requirement:** Regular, meaningful commits throughout Weeks 2–6  
**Actual:** A small number of commits, most of the work committed in one session

This is a direct result of building the site as a demonstration rather than across five weeks of lab sessions. A real submission built incrementally would show 20+ commits with clear week-by-week progression. The commit history is the one aspect of this assessment that cannot be reconstructed after the fact.

---

## Profile photo is an SVG placeholder

**Requirement:** No explicit image requirement, but a portfolio would typically include a profile photo  
**Actual:** An SVG avatar placeholder in `images/profile.svg`

The placeholder demonstrates correct use of `<img>` with an `alt` attribute. A real submission would replace it with an actual photograph.

# Notes for Educators

This document explains the deliberate choices made in this sample answer and how to use it as a teaching resource.

---

## What this sample demonstrates

This is an intentionally approachable — not perfect — sample submission. Every aspect was chosen to be legible to a student five weeks into their first web development unit. Advanced techniques were avoided even where they would have improved the result.

---

## Deliberate shortfalls

### Accessibility score: 89% (target ≥ 90%)

Left unresolved intentionally. The two failing audits (link contrast and muted text contrast) are documented in `KNOWN-ISSUES.md`, which is itself a teaching artifact.

**Why:** A submission that scores 89% with a well-written `KNOWN-ISSUES.md` demonstrates more understanding than a silent 89%. Students who acknowledge specific shortfalls — with the correct audit name, the specific values, and a clear description of the fix — show they ran the tool, read the output, understood the requirement, and know what they would do differently. That is the evidence of learning the assessment is looking for.

### Commit history: 5 commits

A real submission built across five weeks should have 20+ commits showing incremental progress. This sample has 5, because it was built in one session.

**Why:** This cannot be realistically faked, and it's worth showing students honestly. The `KNOWN-ISSUES.md` acknowledges it. Use this in the viva question bank: "your commit history shows most of the work in one session — can you explain why?"

### Placeholder conversation transcripts

The `docs/conversations/` folder contains 8 placeholder files (4 weeks × 2 chats) that describe what a real conversation would contain, rather than actual exported transcripts.

**Why:** Showing the structure and purpose of each conversation type is more instructive for students than a fabricated conversation. The placeholders model good practice (thinking vs build separation, specific prompts, iteration) without pretending to be real.

### SVG profile placeholder

No real photograph. The SVG demonstrates correct `<img>` and `alt` usage.

---

## The KNOWN-ISSUES.md as pedagogy

The `KNOWN-ISSUES.md` file models a professional practice — the sprint backlog, handover note, or technical debt register — that is standard in software development but rarely taught explicitly.

**The pedagogical argument:** A student who leaves a shortfall unacknowledged may have missed the requirement, run out of time, or not noticed the gap. A student who documents a shortfall with the specific requirement, the actual outcome, and a clear description of the resolution demonstrates all three: they read the spec, they tested their submission, and they understand what good looks like. That is a qualitatively different outcome.

**Suggested use:** Add a note to the assessment brief encouraging students to include a `KNOWN-ISSUES.md` if there are aspects they could not complete. Frame it as professional practice, not as a penalty mitigation strategy. A one-line entry ("ran out of time to fix contrast") is less useful than a specific one ("muted text `#64748b` on `#ffffff` fails WCAG AA at 4.48:1 — would darken to `#4b5563` to resolve"). Reward the specific acknowledgement in the viva.

**The limit:** This is not a mechanism to explain away the entire assignment. A `KNOWN-ISSUES.md` that lists every requirement as an outstanding item is not an acknowledgement — it's a non-submission. Use judgement. The document should cover genuine gaps in an otherwise complete submission.

---

## Deployment: GitHub Pages (sample) vs Netlify (students)

This sample site is hosted on GitHub Pages. Students are required to deploy to Netlify. These are different choices for different reasons, and both are correct.

**Why this sample uses GitHub Pages:**  
This is a public staff resource — there is no academic integrity concern with the repo being public. GitHub Pages is free, permanent, and requires no ongoing account maintenance. A Netlify deployment tied to a staff account could break if the account lapses, a project is deleted, or free-tier limits change. A public GitHub repo hosted via Pages will remain live as long as the repo exists.

**Why students must use Netlify:**  
Student repos must be private to prevent copying and protect academic integrity. Free GitHub accounts cannot host GitHub Pages from private repositories — Pages on the free tier requires a public repo. Netlify's free tier supports deployment from private repositories, making it the only practical option for students on free accounts.

**The learning value of Netlify:**  
Deploying via Netlify is a genuine professional skill — connecting a Git repo, triggering automatic deploys on push, and managing a live URL through a deployment platform is standard industry practice. The requirement is pedagogically sound, not just administratively convenient.

**If a student asks why the sample is on GitHub Pages and theirs must be on Netlify:** Explain that the sample is a public teaching resource with no privacy requirement, whereas their repo must stay private for academic integrity. The platform is different; the skill being assessed (deploying a live, publicly accessible site) is the same.

---

## Files in this repo

| File | Purpose | Student-facing? |
|------|---------|----------------|
| `index.html` / `about.html` / `projects.html` / `quotes.html` | Sample portfolio pages | Yes |
| `css/styles.css` | Heavily commented stylesheet | Yes |
| `js/main.js` / `js/api.js` | Readable JavaScript | Yes |
| `images/profile.svg` | SVG avatar placeholder | Yes |
| `README.md` | Repo overview and acknowledgements | Yes |
| `CODE-GUIDE.md` | Code explanation and viva prep | Yes — primary student resource |
| `KNOWN-ISSUES.md` | Sample acknowledgement of shortfalls | Yes — teaching artifact |
| `docs/conversations/` | Placeholder conversation files | Yes — models structure |
| `docs/reflection.md` | Placeholder reflection | Yes — models structure |
| `docs/validation/` | Lighthouse and W3C reports | Yes — models the process |
| `LICENSE` | MIT licence | Yes |
| `NOTES-FOR-EDUCATORS.md` | This file | No — staff only |

---

## Licence

MIT — educators are welcome to adapt this resource. Attribution appreciated but not required.

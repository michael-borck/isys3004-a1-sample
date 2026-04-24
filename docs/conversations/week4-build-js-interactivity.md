# Week 4 — Build Chat: JavaScript Interactivity

**Date:** Week 4 lab session  
**Purpose:** Produce `main.js` with mobile nav and theme toggle  
**Chat type:** Build (focused)

---

> **Note for students:** Placeholder. A real build chat would be the full exported conversation.

---

## What a real build chat covers

A Week 4 build chat would show:

- A specific brief for `main.js` covering both features
- The AI's initial output
- Follow-up corrections ("you used an inline onclick in the HTML — move it to an addEventListener in the JS file")
- Questions about lines that weren't clear ("why do you check `if (navToggle && primaryNav)` before adding the listener?")
- Iteration on the active nav link logic
- The final `main.js` as committed

## Opening prompt example

> "Create `js/main.js` with two features: (1) mobile nav toggle — the hamburger button should show/hide the nav on mobile and update aria-expanded correctly; (2) dark/light theme toggle — switch data-theme on the html element, update the button label, save preference to localStorage. All event listeners in JS, no inline handlers in HTML. Guard against missing elements so the script works on all pages."

# Understanding the Code

This is a sample portfolio for ISYS3004 Assessment 1. The site is intentionally simple — every line is something you could have written yourself, and every decision has a reason you should be able to explain.

This guide won't walk through every line. Instead it explains the **ideas** behind the code so you can talk about your own site confidently in the viva.

---

## The Big Picture: How HTML, CSS, and JavaScript Work Together

Think of a web page as three separate layers:

| Layer | File | Job |
|-------|------|-----|
| **HTML** | `index.html` etc. | Structure — what's on the page |
| **CSS** | `css/styles.css` | Appearance — how it looks |
| **JavaScript** | `js/main.js`, `js/api.js` | Behaviour — what it does |

They're kept in separate files on purpose. This is called **separation of concerns** — each file does one job. It's one of the first things a marker (or employer) looks at.

The three layers connect through the **DOM** (Document Object Model). When a browser loads your HTML, it builds the DOM — a live, in-memory map of every element on the page. CSS reads the DOM to apply styles. JavaScript reads and changes the DOM to make things happen.

---

## Selectors: How CSS and JavaScript Find Things

Both CSS and JavaScript need a way to target specific elements. They use **selectors** — patterns that identify elements in the DOM.

**Element selectors** target HTML tags directly:
```css
h1 { font-size: 2.5rem; }   /* every h1 on the page */
a  { color: var(--accent); } /* every link */
```

**Class selectors** (`.classname`) target elements that share a purpose. Classes are reusable — many elements can have the same class:
```css
.button { background-color: var(--accent); }  /* anything with class="button" */
.card   { border: 1px solid var(--border); }  /* anything with class="card" */
```

**ID selectors** (`#idname`) target one unique element. IDs must be unique per page:
```css
#primary-nav { display: flex; }   /* the one nav element with id="primary-nav" */
```

**Attribute selectors** (`[attribute="value"]`) target elements based on their attributes. This site uses them for theming and accessibility:
```css
[data-theme="dark"] { --bg: #0f172a; }         /* when html has data-theme="dark" */
[aria-current="page"] { color: var(--accent); } /* the active nav link */
```

JavaScript uses the same logic, different syntax:
```javascript
document.querySelector('.nav-toggle')    // finds the first element with class nav-toggle
document.getElementById('primary-nav')  // finds the element with id="primary-nav"
document.querySelectorAll('#primary-nav a')  // finds all <a> tags inside #primary-nav
```

> **Viva tip:** If asked "how does your CSS know which element to style?" or "how does your JavaScript find that button?" — the answer is always: selectors.

---

## Walking Through This Site

### Semantic HTML — *Modules 1 & 2*

Open any `.html` file. Notice there are almost no `<div>` tags. Instead:

```html
<header>   — the top bar (logo + nav)
<nav>      — the navigation links
<main>     — the primary page content
<section>  — a thematic grouping within main
<article>  — a self-contained piece of content (used in projects.html)
<aside>    — secondary content alongside main content (skills list on about.html)
<footer>   — the bottom bar
```

These are **semantic elements** — they tell the browser (and screen readers, and Google) what role each piece of content plays. A `<nav>` says "this is navigation." A `<div>` says nothing.

You could build this entire site with nothing but `<div>` tags and it would look identical. But Lighthouse would penalise you, screen readers would struggle, and your code would be harder to read and maintain.

> **AI prompt to try:** *"Explain the difference between semantic HTML and div soup. Show me a before and after example of converting a div-based nav into a semantic nav with proper ARIA attributes."*

---

### CSS Custom Properties — *Module 2*

At the top of `css/styles.css`:

```css
:root {
  --bg:      #ffffff;
  --accent:  #4f46e5;
  --gap-md:  1rem;
}
```

`:root` targets the top of the document — it's where you declare **custom properties** (CSS variables). The `--` prefix is how you recognise them.

Everywhere else in the stylesheet, instead of writing `color: #4f46e5`, you write `color: var(--accent)`. If you want to change the accent colour, you change it in one place and the whole site updates.

This is also how **dark mode** works in this site — no duplicated styles, just a different set of values for the same variables:

```css
[data-theme="dark"] {
  --bg:   #0f172a;
  --text: #f1f5f9;
}
```

When JavaScript sets `data-theme="dark"` on the `<html>` element, the browser switches to these values automatically. Every colour on the page responds. That's the entire mechanism.

> **AI prompt to try:** *"What are CSS custom properties and how are they different from Sass variables? Show me how to use them to build a theme system."*

---

### The Mobile Navigation — *Modules 2, 3 & 4*

This is a good one to understand fully because it involves all three layers working together.

**CSS** hides the nav and the hamburger button at different screen sizes:
```css
.nav-toggle { display: none; }   /* hidden on desktop */

@media (max-width: 768px) {
  .nav-toggle   { display: block; }  /* shown on mobile */
  #primary-nav  { display: none; }   /* nav hidden until toggled */
  #primary-nav.is-open { display: block; } /* shown when JS adds .is-open */
}
```

**JavaScript** in `main.js` listens for a click and toggles the class:
```javascript
navToggle.addEventListener('click', function () {
  primaryNav.classList.toggle('is-open');
});
```

That's the whole mechanism: button click → JS adds/removes `.is-open` on the nav → CSS sees the class and shows/hides the nav. CSS and JS don't communicate directly — they communicate through the DOM.

The `aria-expanded` attribute is updated at the same time so screen readers know whether the menu is open or closed. This is one of the simplest real examples of accessibility in practice — keeping what users see and what assistive technology reports in sync.

> **Viva tip:** Be able to trace this sequence out loud: "When the button is clicked, JavaScript toggles the `.is-open` class on the nav element. In the CSS, `#primary-nav.is-open` sets `display: block`, which makes the nav visible. Without that class, the nav has `display: none`."

> **AI prompt to try:** *"Explain CSS media queries. What does 'mobile-first' mean and how is it different from 'desktop-first'?"*

---

### The Theme Toggle — *Module 4*

The theme toggle is slightly more sophisticated. It uses three things working together:

1. **A `data-` attribute on `<html>`** — `data-theme="light"` or `data-theme="dark"`
2. **CSS attribute selectors** — `[data-theme="dark"]` overrides the colour variables
3. **`localStorage`** — saves the preference so it survives page reloads

In `js/main.js`:
```javascript
function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem(THEME_KEY, theme);
}

// On page load, restore the saved preference
applyTheme(localStorage.getItem(THEME_KEY) || 'light');
```

`document.documentElement` is the `<html>` element — the root of the entire page. Setting a `data-` attribute there means CSS can see it from anywhere in the document.

`localStorage` is a small key-value store built into every browser. It's not a database — it's just for simple preferences like this. The value persists until the user clears their browser data.

> **AI prompt to try:** *"What is localStorage and when should I use it instead of a cookie or a database? What are its limitations?"*

---

### Fetching Live Data — *Module 5*

`js/api.js` fetches a random quote from an external API. The key concepts:

**`async/await`** lets you write asynchronous code (code that waits for something) in a way that reads like normal code. Without it, you'd need chains of `.then()` callbacks. The `await` keyword pauses the function until the fetch completes — but only that function, not the whole page.

**`response.ok`** is a check you must do yourself. `fetch()` only throws an error on a network failure (no internet, DNS lookup failed). A server returning a 404 or 500 is not a thrown error — `fetch()` considers it a successful response. `response.ok` is `true` only for 2xx status codes:

```javascript
const response = await fetch(API_URL);
if (!response.ok) {
  throw new Error('Request failed with status ' + response.status);
}
```

**The loading/error/success pattern** — three HTML elements, each hidden or shown depending on state:

```html
<p id="quote-loading">Loading...</p>          <!-- visible by default -->
<p id="quote-error" hidden></p>                <!-- hidden by default -->
<figure id="quote-display" hidden></figure>    <!-- hidden by default -->
```

JavaScript toggles the `hidden` attribute as the fetch progresses. This is simpler than adding and removing CSS classes — `hidden` is a built-in HTML attribute that works like `display: none`.

> **Viva tip:** A very common viva question is "what happens if the API fails?" Be able to explain: the `try/catch` block catches the error, the loading element is hidden, and the error element is shown with a meaningful message. A site that just spins forever on a failed API call is a real user experience problem.

> **AI prompt to try:** *"Explain the difference between synchronous and asynchronous JavaScript. What problem does async/await solve, and what did code look like before it existed?"*

---

## Viva Questions to Prepare For

These are the kinds of questions you may be asked. Practice answering them out loud with your code open.

**About structure:**
- Why did you use `<article>` on the projects page instead of `<div>`?
- What's the difference between `<section>` and `<article>`?
- Why are your CSS and JavaScript in separate files?

**About CSS:**
- What is a CSS custom property and why did you use them?
- How does dark mode work in this site?
- What is a media query and what does `max-width: 768px` mean?

**About JavaScript:**
- How does the hamburger menu work? Walk me through what happens when the button is clicked.
- Why do you check `if (navToggle && primaryNav)` before adding the event listener?
- What does `aria-expanded` do and why do you update it?

**About the API:**
- What does `async/await` do?
- Why do you check `response.ok`?
- What happens if the API is down?
- What does `await response.json()` return?

**About accessibility:**
- What is Lighthouse and what does it measure?
- Why does your nav have `aria-label="Primary"`?
- What does `aria-current="page"` tell a screen reader?

---

## Going Deeper: AI Prompts by Topic

Use these in a fresh conversation with your AI tool of choice. They're designed to build understanding, not generate code.

**HTML & Semantics**
- *"Explain the difference between semantic HTML and non-semantic HTML. Why does it matter for accessibility and SEO?"*
- *"What HTML elements are considered interactive and what does that mean for keyboard navigation?"*

**CSS**
- *"Explain the CSS cascade and specificity. Why does a class selector override an element selector?"*
- *"What is the difference between Flexbox and Grid? When would you choose one over the other?"*
- *"Explain CSS transitions. How do they work and what properties can be animated?"*

**JavaScript & the DOM**
- *"What is the DOM and how is it different from HTML source code?"*
- *"Explain event bubbling in JavaScript. Why might a click on a child element also trigger an event on its parent?"*
- *"What is the difference between `null` and `undefined` in JavaScript? When do you get each one?"*

**APIs & Async**
- *"What is a REST API? What is JSON and why is it used for APIs?"*
- *"Explain the JavaScript event loop in simple terms. Why can't JavaScript do two things at exactly the same time?"*
- *"What is CORS and why do some API requests fail in the browser but work in Postman?"*

**Accessibility**
- *"What is WCAG and what does AA compliance mean in practice?"*
- *"Explain ARIA roles and attributes. When should you use ARIA and when should you use semantic HTML instead?"*
- *"What is the difference between a colour contrast ratio of 3:1 and 4.5:1, and which does WCAG AA require for normal text?"*

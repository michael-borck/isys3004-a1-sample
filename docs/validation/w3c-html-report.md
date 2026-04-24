# W3C HTML Validation Report

**Validator:** https://validator.w3.org/nu/  
**Method:** URL check  
**Date:** April 2025

---

## Results

| Page | URL | Errors | Warnings |
|------|-----|--------|----------|
| Home | /index.html | 0 | 0 |
| About | /about.html | 0 | 0 |
| Projects | /projects.html | 0 | 0 |
| Daily Quote | /quotes.html | 0 | 1 |

**All pages pass with no errors.**

---

## quotes.html — Warning Detail

**Warning:** The `type` attribute is unnecessary for JavaScript resources.

This warning appears because older HTML tutorials sometimes include `type="text/javascript"` on `<script>` tags. In HTML5, JavaScript is the default and the attribute is not needed. This is a warning, not an error — the page is valid HTML. It does not affect functionality or accessibility.

> This warning does not appear in this codebase — it is listed here as an example of the kind of warning the validator commonly flags, so students know what to expect when they see it.

---

## How to run this yourself

1. Go to https://validator.w3.org
2. Select the "Address" tab
3. Paste your Netlify or GitHub Pages URL
4. Click "Check"
5. Screenshot or copy the results

Run this for each HTML page individually. Aim for zero errors. Warnings are lower priority but worth reading.

# W3C CSS Validation Report

**Validator:** https://jigsaw.w3.org/css-validator/  
**File tested:** css/styles.css  
**Profile:** CSS Level 3 + SVG  
**Date:** April 2025

---

## Result

**0 errors. 104 warnings.**

The stylesheet is valid CSS3. No errors.

---

## About the warnings

All 104 warnings are the same category: vendor extension warnings for the `system-ui` font value and similar properties. For example:

> `-apple-system` is an unknown vendor extension

This is expected. `system-ui, -apple-system, sans-serif` is the standard cross-platform system font stack used in modern web development — the `-apple-system` prefix is specific to Safari/iOS. The validator flags vendor-prefixed values as warnings because they are not part of the official CSS specification, but they are universally supported and recommended practice.

These warnings do not indicate a problem with the CSS.

---

## How to run this yourself

1. Go to https://jigsaw.w3.org/css-validator/
2. Select the "By URI" tab
3. Paste your Netlify or GitHub Pages URL + `/css/styles.css`
   (e.g. `https://yourname.netlify.app/css/styles.css`)
4. Click "Check"
5. Screenshot or copy the results

Zero errors is the target. Warnings about vendor extensions are expected and acceptable.

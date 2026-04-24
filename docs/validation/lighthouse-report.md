# Lighthouse Report

**Page tested:** Home page (index.html)  
**URL:** https://michael-borck.github.io/isys3004-a1-sample-1/  
**Device:** Mobile  
**Date:** April 2025

---

## Scores

| Category | Score |
|----------|-------|
| Performance | 100 |
| **Accessibility** | **89** |
| Best Practices | 96 |
| SEO | 90 |

---

## Accessibility — Failing Audits

### Links rely on colour to be distinguishable
**Impact:** Serious  
Nav links and footer links are distinguishable from surrounding text only by colour. WCAG requires a non-colour visual cue (e.g. underline) unless the contrast between the link and surrounding text meets a 3:1 ratio.

### Background and foreground colours do not have sufficient contrast ratio
**Impact:** Serious  
The muted text colour used for nav links (`#64748b` on `#ffffff` background) has a contrast ratio of approximately 4.48:1, just below the WCAG AA minimum of 4.5:1 for normal text.

---

## Accessibility — Passing Audits (selected)

- Image elements have `[alt]` attributes ✓
- `[lang]` attribute present on `<html>` ✓
- Buttons have accessible names ✓
- Navigation landmark present ✓
- Heading elements appear in sequentially descending order ✓
- `[aria-*]` attributes match their roles ✓
- `[aria-expanded]` attributes have valid values ✓

---

## Note on score

The target for this assessment is ≥ 90. This site scores 89. The two failing audits are documented in [KNOWN-ISSUES.md](../KNOWN-ISSUES.md). Both are fixable with minor CSS changes — see that file for details.

All other pages (about.html, projects.html, quotes.html) were tested and returned the same score pattern, with the same two failing audits.

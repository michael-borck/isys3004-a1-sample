/*
  main.js — Site-wide JavaScript
  Runs on every page.

  1. Mobile navigation toggle
  2. Theme toggle (dark / light mode)
  3. Active navigation link
*/


// ── 1. Mobile Navigation ──────────────────────────────────────────
//
// The hamburger button shows/hides the nav on small screens.
// We also update aria-expanded so screen readers know the state.

const navToggle = document.querySelector('.nav-toggle');
const primaryNav = document.getElementById('primary-nav');

if (navToggle && primaryNav) {
  navToggle.addEventListener('click', function () {
    const isOpen = navToggle.getAttribute('aria-expanded') === 'true';

    // Toggle the open/closed state
    navToggle.setAttribute('aria-expanded', String(!isOpen));
    navToggle.setAttribute(
      'aria-label',
      isOpen ? 'Open navigation menu' : 'Close navigation menu'
    );

    // .is-open is what the CSS watches to show/hide the nav
    primaryNav.classList.toggle('is-open');
  });
}


// ── 2. Theme Toggle ───────────────────────────────────────────────
//
// Switches between light and dark mode by changing the data-theme
// attribute on <html>. CSS custom properties do the rest.
// localStorage saves the preference so it persists between pages.

const themeToggle = document.querySelector('.theme-toggle');
const THEME_KEY = 'portfolio-theme';

function applyTheme(theme) {
  // Set the attribute that CSS responds to
  document.documentElement.setAttribute('data-theme', theme);

  // Update the button icon and label to match the new state
  if (themeToggle) {
    if (theme === 'dark') {
      themeToggle.textContent = '☀️';
      themeToggle.setAttribute('aria-label', 'Switch to light mode');
    } else {
      themeToggle.textContent = '🌙';
      themeToggle.setAttribute('aria-label', 'Switch to dark mode');
    }
  }
}

// Load saved preference on every page (default to light)
applyTheme(localStorage.getItem(THEME_KEY) || 'light');

if (themeToggle) {
  themeToggle.addEventListener('click', function () {
    const current = document.documentElement.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    applyTheme(next);
    localStorage.setItem(THEME_KEY, next);
  });
}


// ── 3. Active Navigation Link ─────────────────────────────────────
//
// Adds aria-current="page" to the nav link that matches the
// current page. CSS uses this attribute to highlight the active link.

const currentFile = window.location.pathname.split('/').pop() || 'index.html';

document.querySelectorAll('#primary-nav a').forEach(function (link) {
  if (link.getAttribute('href') === currentFile) {
    link.setAttribute('aria-current', 'page');
  }
});

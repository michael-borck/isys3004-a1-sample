/*
  api.js — Quote fetcher for quotes.html

  Fetches a random quote from the DummyJSON API and displays it.
  API docs: https://dummyjson.com/docs/quotes

  The API returns JSON like this:
  {
    "id": 1,
    "quote": "Life is what happens...",
    "author": "John Lennon"
  }
*/

const API_URL = 'https://dummyjson.com/quotes/random';

// Get references to the HTML elements we'll be updating
const loadingEl  = document.getElementById('quote-loading');
const errorEl    = document.getElementById('quote-error');
const displayEl  = document.getElementById('quote-display');
const quoteText  = document.getElementById('quote-text');
const quoteAuthor = document.getElementById('quote-author');
const newQuoteBtn = document.getElementById('new-quote-btn');

async function fetchQuote() {
  // Show loading message, hide everything else
  loadingEl.removeAttribute('hidden');
  errorEl.setAttribute('hidden', '');
  displayEl.setAttribute('hidden', '');
  newQuoteBtn.setAttribute('hidden', '');

  try {
    const response = await fetch(API_URL);

    // fetch() only throws on network failure — a 404 or 500
    // still "succeeds" as far as fetch is concerned, so we
    // check response.ok ourselves.
    if (!response.ok) {
      throw new Error('The quote service returned an error (' + response.status + ').');
    }

    const data = await response.json();

    // Put the quote data into the HTML elements
    quoteText.textContent = data.quote;
    quoteAuthor.textContent = '— ' + data.author;

    // Hide loading, show the quote and the button
    loadingEl.setAttribute('hidden', '');
    displayEl.removeAttribute('hidden');
    newQuoteBtn.removeAttribute('hidden');

  } catch (error) {
    // Something went wrong — show a helpful message
    loadingEl.setAttribute('hidden', '');
    errorEl.removeAttribute('hidden');
    errorEl.textContent = 'Could not load a quote: ' + error.message + ' Check your connection and try again.';
  }
}

// Only run if the quotes page elements are actually on this page
if (loadingEl) {
  // Fetch a quote when the page loads
  fetchQuote();

  // Fetch a new quote when the button is clicked
  if (newQuoteBtn) {
    newQuoteBtn.addEventListener('click', fetchQuote);
  }
}

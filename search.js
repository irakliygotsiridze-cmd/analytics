(function () {
  'use strict';

  function filter(input, root, noResults) {
    const query = input.value.trim().toLowerCase();
    let anyVisible = false;

    const sections = root.querySelectorAll('.bu-section');

    if (sections.length > 0) {
      // Grouped pages (dashboards / research): filter by BU + cards within
      sections.forEach(section => {
        const buTitle = (section.querySelector('.bu-title')?.textContent || '').toLowerCase();
        const cards = section.querySelectorAll('.card');
        const buMatches = !!query && buTitle.includes(query);
        let anyCardVisible = false;

        cards.forEach(card => {
          const text = card.textContent.toLowerCase();
          const matches = !query || buMatches || text.includes(query);
          card.style.display = matches ? '' : 'none';
          if (matches) anyCardVisible = true;
        });

        section.style.display = anyCardVisible ? '' : 'none';
        if (anyCardVisible) anyVisible = true;
      });
    } else {
      // Flat pages (glossary / FAQ): filter cards directly
      root.querySelectorAll('.card').forEach(card => {
        const text = card.textContent.toLowerCase();
        const matches = !query || text.includes(query);
        card.style.display = matches ? '' : 'none';
        if (matches) anyVisible = true;
      });
    }

    if (noResults) {
      noResults.hidden = anyVisible || !query;
    }
  }

  function init() {
    const input = document.querySelector('.search-input');
    if (!input) return;
    const root = document.querySelector('.content') || document.body;
    const noResults = document.querySelector('.no-results');

    const run = () => filter(input, root, noResults);

    input.addEventListener('input', run);
    input.addEventListener('keydown', e => {
      if (e.key === 'Escape') { input.value = ''; run(); input.blur(); }
    });
    document.addEventListener('algonova:langchange', () => {
      // Wait a tick for render.js to rebuild content, then re-filter
      setTimeout(run, 0);
    });

    run();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();

(function () {
  'use strict';

  function filter(input, root, noResults) {
    const query = input.value.trim().toLowerCase();
    let anyVisible = false;

    root.querySelectorAll('.bu-section').forEach(section => {
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
    document.addEventListener('algonova:langchange', run);

    run();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();

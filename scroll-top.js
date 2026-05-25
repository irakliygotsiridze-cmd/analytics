(function () {
  'use strict';

  function init() {
    const btn = document.querySelector('.scroll-top');
    if (!btn) return;

    function update() {
      btn.classList.toggle('visible', window.scrollY > 300);
    }
    window.addEventListener('scroll', update, { passive: true });
    btn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      btn.blur();
    });
    update();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();

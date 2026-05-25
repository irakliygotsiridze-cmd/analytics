(function () {
  'use strict';

  const QR_SIZE = 112;

  function generate(url, container) {
    if (!window.QRious) return;
    const canvas = document.createElement('canvas');
    canvas.className = 'qr-canvas';
    container.appendChild(canvas);
    try {
      new window.QRious({
        element: canvas,
        value: url,
        size: QR_SIZE,
        background: '#FFFFFF',
        foreground: '#0A0A0A',
        level: 'M'
      });
    } catch (e) {
      console.error('QR generation failed', e);
      canvas.remove();
    }
  }

  function init() {
    document.querySelectorAll('.card-bot[href]').forEach(card => {
      if (card.getAttribute('data-qr-rendered') === '1') return;
      const url = card.getAttribute('href');
      const btn = card.querySelector('.btn');

      const wrap = document.createElement('div');
      wrap.className = 'qr-code';

      if (btn) card.insertBefore(wrap, btn);
      else card.appendChild(wrap);

      generate(url, wrap);
      card.setAttribute('data-qr-rendered', '1');
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();

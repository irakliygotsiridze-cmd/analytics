(function () {
  'use strict';

  const QR_OPTS = {
    width: 112,
    margin: 0,
    color: { dark: '#0A0A0A', light: '#FFFFFF' },
    errorCorrectionLevel: 'M'
  };

  function generate(url, container) {
    if (!window.QRCode) return;
    window.QRCode.toCanvas(url, QR_OPTS, (err, canvas) => {
      if (err) { console.error('QR generation failed', err); return; }
      // Stop click on QR from bubbling to the parent <a> (so users can long-press
      // the QR on touch devices without triggering navigation in-tab).
      canvas.classList.add('qr-canvas');
      container.appendChild(canvas);
    });
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

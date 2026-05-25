(function () {
  'use strict';

  function pick(field, lang) {
    if (!field) return '';
    if (typeof field === 'string') return field;
    return field[lang] || field.en || '';
  }

  function el(html) {
    const wrap = document.createElement('div');
    wrap.innerHTML = html.trim();
    return wrap.firstElementChild;
  }

  function escapeHtml(s) {
    return String(s).replace(/[&<>"']/g, c => ({
      '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
    }[c]));
  }

  // ── BU section helpers ───────────────────────────────────────

  const BU_META = {
    indonesia: { flag: '🇮🇩', key: 'bu.indonesia', label: { en: 'Indonesia', ru: 'Индонезия', es: 'Indonesia', id: 'Indonesia', ms: 'Indonesia' } },
    malaysia:  { flag: '🇲🇾', key: 'bu.malaysia',  label: { en: 'Malaysia',  ru: 'Малайзия',  es: 'Malasia',   id: 'Malaysia',  ms: 'Malaysia' } },
    latam:     { flag: '🌎', key: 'bu.latam',     label: { en: 'LatAm',     ru: 'Латам',     es: 'LatAm',     id: 'LatAm',     ms: 'LatAm' } }
  };

  const META_LABELS = {
    key_metrics: { en: 'Key metrics', ru: 'Ключевые метрики', es: 'Métricas clave', id: 'Metrik utama', ms: 'Metrik utama' },
    update:      { en: 'Update',      ru: 'Обновление',       es: 'Actualización',  id: 'Pembaruan',    ms: 'Kemas kini' },
    meaning:     { en: 'Meaning',     ru: 'Смысл',            es: 'Significado',    id: 'Arti',         ms: 'Maksud' },
    formula:     { en: 'Formula',     ru: 'Формула',          es: 'Fórmula',        id: 'Formula',      ms: 'Formula' },
    role:        { en: 'Role',        ru: 'Роль',             es: 'Rol',            id: 'Peran',        ms: 'Peranan' },
    coming_soon: { en: 'Coming soon', ru: 'Скоро будет',      es: 'Próximamente',   id: 'Segera hadir', ms: 'Akan datang' }
  };

  // ── Renderers ────────────────────────────────────────────────

  function renderDashboards(target, data, lang) {
    target.innerHTML = '';

    ['indonesia', 'malaysia', 'latam'].forEach(buKey => {
      const buMeta = BU_META[buKey];
      const buData = data[buKey] || [];
      const section = el(`
        <section class="bu-section">
          <h2 class="bu-title"><span class="bu-flag">${buMeta.flag}</span> <span>${pick(buMeta.label, lang)}</span></h2>
        </section>
      `);

      if (buData.length === 0) {
        section.appendChild(el(`
          <div class="grid">
            <div class="card card-empty">
              <span class="empty-text">${pick(META_LABELS.coming_soon, lang)}</span>
            </div>
          </div>
        `));
        target.appendChild(section);
        return;
      }

      buData.forEach(group => {
        const groupTitle = pick(group.section, lang);
        const groupBlock = el(`<div class="dash-group"><h3 class="dash-group-title">${escapeHtml(groupTitle)}</h3></div>`);
        const grid = el('<div class="grid"></div>');

        group.items.forEach(item => {
          const name = pick(item.name, lang);
          const metrics = pick(item.metrics, lang);
          const update = pick(item.update, lang);
          const platform = item.platform || '';
          const url = item.url || '#';

          const card = el(`
            <a class="card card-dash" href="${escapeHtml(url)}" target="_blank" rel="noopener noreferrer">
              <span class="platform-badge">${escapeHtml(platform)}</span>
              <div class="card-name">${escapeHtml(name)}</div>
              <div class="card-meta">
                <div class="meta-row">
                  <span class="meta-label">${pick(META_LABELS.key_metrics, lang)}</span>
                  <span class="meta-val">${escapeHtml(metrics)}</span>
                </div>
                <div class="meta-row">
                  <span class="meta-label">${pick(META_LABELS.update, lang)}</span>
                  <span class="meta-val">${escapeHtml(update)}</span>
                </div>
              </div>
            </a>
          `);
          grid.appendChild(card);
        });

        groupBlock.appendChild(grid);
        section.appendChild(groupBlock);
      });

      target.appendChild(section);
    });
  }

  function renderGlossary(target, data, lang) {
    target.innerHTML = '';
    const grid = el('<div class="grid grid-wide"></div>');

    data.forEach(item => {
      const card = el(`
        <div class="card card-glossary">
          <div class="card-name">${escapeHtml(pick(item.name, lang))}</div>
          <div class="card-meta">
            <div class="meta-row">
              <span class="meta-label">${pick(META_LABELS.meaning, lang)}</span>
              <span class="meta-val">${escapeHtml(pick(item.meaning, lang))}</span>
            </div>
            <div class="meta-row">
              <span class="meta-label">${pick(META_LABELS.formula, lang)}</span>
              <span class="meta-val">${escapeHtml(pick(item.formula, lang))}</span>
            </div>
          </div>
        </div>
      `);
      grid.appendChild(card);
    });

    target.appendChild(grid);
  }

  function renderTeam(target, data, lang) {
    target.innerHTML = '';
    const grid = el('<div class="grid"></div>');

    data.forEach(person => {
      const tg = person.telegram || '@TBD';
      const tgUrl = (tg && tg !== '@TBD') ? `https://t.me/${tg.replace(/^@/, '')}` : null;
      const tgHtml = tgUrl
        ? `<a class="card-contact" href="${escapeHtml(tgUrl)}" target="_blank" rel="noopener noreferrer">${escapeHtml(tg)}</a>`
        : `<span class="card-contact contact-tbd">${escapeHtml(tg)}</span>`;

      const card = el(`
        <div class="card card-team">
          <div class="avatar">${escapeHtml(person.initials || '?')}</div>
          <div class="card-name">${escapeHtml(pick(person.name, lang))}</div>
          <div class="card-role">${escapeHtml(pick(person.role, lang))}</div>
          ${tgHtml}
        </div>
      `);
      grid.appendChild(card);
    });

    target.appendChild(grid);
  }

  function renderFAQ(target, data, lang) {
    target.innerHTML = '';
    const list = el('<div class="faq-list"></div>');

    data.forEach(item => {
      const node = el(`
        <details class="card card-faq">
          <summary>
            <span class="faq-q">${escapeHtml(pick(item.q, lang))}</span>
            <span class="faq-chevron" aria-hidden="true">+</span>
          </summary>
          <div class="faq-a">${escapeHtml(pick(item.a, lang))}</div>
        </details>
      `);
      list.appendChild(node);
    });

    target.appendChild(list);
  }

  // ── Public entry: dispatches by data-page ────────────────────

  function render(lang) {
    if (!window.Algonova || !window.Algonova.data) return;
    const data = window.Algonova.data;
    const page = document.body.getAttribute('data-page');

    if (page === 'dashboards') {
      const target = document.querySelector('[data-render="dashboards"]');
      if (target) renderDashboards(target, data.dashboards, lang);
    } else if (page === 'glossary') {
      const target = document.querySelector('[data-render="glossary"]');
      if (target) renderGlossary(target, data.glossary, lang);
    } else if (page === 'team') {
      const target = document.querySelector('[data-render="team"]');
      if (target) renderTeam(target, data.team, lang);
    } else if (page === 'faq') {
      const target = document.querySelector('[data-render="faq"]');
      if (target) renderFAQ(target, data.faq, lang);
    }
  }

  window.Algonova = window.Algonova || {};
  window.Algonova.render = render;
})();

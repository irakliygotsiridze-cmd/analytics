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

  function escapeRegex(s) {
    return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
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
    coming_soon: { en: 'Coming soon', ru: 'Скоро будет',      es: 'Próximamente',   id: 'Segera hadir', ms: 'Akan datang' },
    contact:     { en: 'Contact',     ru: 'Контакт',          es: 'Contacto',       id: 'Kontak',       ms: 'Hubungi' }
  };

  // ── Build a lookup of {pattern, slug} from glossary for cross-linking ──

  function buildGlossaryIndex(glossary) {
    const out = [];
    const seen = new Set();
    glossary.forEach(cat => {
      cat.items.forEach(item => {
        if (!item.slug) return;
        const nameEn = pick(item.name, 'en');
        if (!nameEn) return;
        // Take the part before "," "(" — that's the "pattern"
        const pattern = nameEn.split(/[,(]/)[0].trim();
        if (!pattern || pattern.length < 2) return;
        if (seen.has(pattern)) return;
        seen.add(pattern);
        out.push({ pattern: pattern, slug: item.slug });
      });
    });
    // Sort by length desc to match longest first in regex alternation
    out.sort((a, b) => b.pattern.length - a.pattern.length);
    return out;
  }

  function linkifyMetrics(text, terms) {
    if (!terms.length || !text) return escapeHtml(text);
    const parts = terms.map(t => escapeRegex(t.pattern));
    // Match patterns surrounded by word boundaries; the patterns are case-sensitive
    // (mostly upper-case abbreviations and capitalised words)
    const re = new RegExp('\\b(' + parts.join('|') + ')\\b', 'g');
    // Build replacement on already-escaped text; chunk through matches manually
    const escaped = escapeHtml(text);
    return escaped.replace(re, (match) => {
      const term = terms.find(x => x.pattern === match);
      if (!term) return match;
      return '<a class="metric-link" href="glossary#' + term.slug + '">' + match + '</a>';
    });
  }

  // ── Renderers ────────────────────────────────────────────────

  function renderDashboards(target, data, lang, glossaryTerms) {
    target.innerHTML = '';

    ['indonesia', 'malaysia', 'latam'].forEach(buKey => {
      const buMeta = BU_META[buKey];
      const buData = data[buKey] || [];
      const section = el(
        '<section class="bu-section">' +
          '<h2 class="bu-title"><span class="bu-flag">' + buMeta.flag + '</span> <span>' + escapeHtml(pick(buMeta.label, lang)) + '</span></h2>' +
        '</section>'
      );

      if (buData.length === 0) {
        section.appendChild(el(
          '<div class="grid">' +
            '<div class="card card-empty">' +
              '<span class="empty-text">' + escapeHtml(pick(META_LABELS.coming_soon, lang)) + '</span>' +
            '</div>' +
          '</div>'
        ));
        target.appendChild(section);
        return;
      }

      buData.forEach(group => {
        const groupTitle = pick(group.section, lang);
        const groupBlock = el('<div class="dash-group"><h3 class="dash-group-title">' + escapeHtml(groupTitle) + '</h3></div>');
        const grid = el('<div class="grid"></div>');

        group.items.forEach(item => {
          const name = pick(item.name, lang);
          const metrics = pick(item.metrics, lang);
          const update = pick(item.update, lang);
          const platform = item.platform || '';
          const url = item.url || '#';

          const card = el(
            '<a class="card card-dash" href="' + escapeHtml(url) + '" target="_blank" rel="noopener noreferrer">' +
              '<span class="platform-badge">' + escapeHtml(platform) + '</span>' +
              '<div class="card-name">' + escapeHtml(name) + '</div>' +
              '<div class="card-meta">' +
                '<div class="meta-row">' +
                  '<span class="meta-label">' + escapeHtml(pick(META_LABELS.key_metrics, lang)) + '</span>' +
                  '<span class="meta-val">' + linkifyMetrics(metrics, glossaryTerms) + '</span>' +
                '</div>' +
                '<div class="meta-row">' +
                  '<span class="meta-label">' + escapeHtml(pick(META_LABELS.update, lang)) + '</span>' +
                  '<span class="meta-val">' + escapeHtml(update) + '</span>' +
                '</div>' +
              '</div>' +
            '</a>'
          );

          // Stop clicks on the metric anchor from triggering the parent <a> navigation
          card.querySelectorAll('.metric-link').forEach(a => {
            a.addEventListener('click', e => {
              e.stopPropagation();
              // Allow the anchor's own click to navigate
            });
          });

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

    data.forEach(cat => {
      const wrap = el(
        '<section class="glossary-category">' +
          '<h2 class="bu-title"><span>' + escapeHtml(pick(cat.category, lang)) + '</span></h2>' +
          '<div class="grid grid-wide"></div>' +
        '</section>'
      );
      const grid = wrap.querySelector('.grid');

      cat.items.forEach(item => {
        const meaning = item.meaning ? pick(item.meaning, lang) : '';
        const formula = item.formula ? pick(item.formula, lang) : '';
        const nameStr = pick(item.name, lang);

        let metaHtml = '';
        if (meaning) {
          metaHtml +=
            '<div class="meta-row">' +
              '<span class="meta-label">' + escapeHtml(pick(META_LABELS.meaning, lang)) + '</span>' +
              '<span class="meta-val">' + escapeHtml(meaning) + '</span>' +
            '</div>';
        }
        if (formula) {
          metaHtml +=
            '<div class="meta-row">' +
              '<span class="meta-label">' + escapeHtml(pick(META_LABELS.formula, lang)) + '</span>' +
              '<span class="meta-val">' + escapeHtml(formula) + '</span>' +
            '</div>';
        }

        const card = el(
          '<div class="card card-glossary" id="' + escapeHtml(item.slug || '') + '">' +
            '<div class="card-name">' + escapeHtml(nameStr) + '</div>' +
            '<div class="card-meta">' + metaHtml + '</div>' +
          '</div>'
        );

        grid.appendChild(card);
      });

      target.appendChild(wrap);
    });
  }

  function renderTeam(target, data, lang, buLabels) {
    target.innerHTML = '';
    const grid = el('<div class="grid"></div>');

    data.forEach(person => {
      const contact = person.contact || {};
      const contactHtml = contact.url
        ? '<a class="card-contact" href="' + escapeHtml(contact.url) + '" target="_blank" rel="noopener noreferrer">' + escapeHtml(contact.label || contact.url) + '</a>'
        : '<span class="card-contact contact-tbd">@TBD</span>';

      const photoUrl = person.photo || '';
      const initials = person.initials || '?';
      const avatarHtml =
        '<div class="avatar">' +
          (photoUrl ? '<img class="avatar-img" src="' + escapeHtml(photoUrl) + '" alt="" onerror="this.remove()">' : '') +
          '<span class="initials">' + escapeHtml(initials) + '</span>' +
        '</div>';

      const busHtml = (person.bus && person.bus.length && buLabels)
        ? '<div class="bu-chips">' +
            person.bus.map(b => '<span class="bu-chip">' + escapeHtml(pick(buLabels[b] || {}, lang) || b) + '</span>').join('') +
          '</div>'
        : '';

      const card = el(
        '<div class="card card-team">' +
          avatarHtml +
          '<div class="card-name">' + escapeHtml(pick(person.name, lang)) + '</div>' +
          '<div class="card-role">' + escapeHtml(pick(person.role, lang)) + '</div>' +
          busHtml +
          contactHtml +
        '</div>'
      );
      grid.appendChild(card);
    });

    target.appendChild(grid);
  }

  function renderFAQ(target, data, lang) {
    target.innerHTML = '';
    const list = el('<div class="faq-list"></div>');

    data.forEach(item => {
      const node = el(
        '<details class="card card-faq">' +
          '<summary>' +
            '<span class="faq-q">' + escapeHtml(pick(item.q, lang)) + '</span>' +
            '<span class="faq-chevron" aria-hidden="true">+</span>' +
          '</summary>' +
          '<div class="faq-a">' + escapeHtml(pick(item.a, lang)) + '</div>' +
        '</details>'
      );
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
      if (target) {
        const terms = buildGlossaryIndex(data.glossary || []);
        renderDashboards(target, data.dashboards, lang, terms);
      }
    } else if (page === 'glossary') {
      const target = document.querySelector('[data-render="glossary"]');
      if (target) renderGlossary(target, data.glossary, lang);
    } else if (page === 'team') {
      const target = document.querySelector('[data-render="team"]');
      if (target) renderTeam(target, data.team, lang, data.buLabels);
    } else if (page === 'faq') {
      const target = document.querySelector('[data-render="faq"]');
      if (target) renderFAQ(target, data.faq, lang);
    }
  }

  window.Algonova = window.Algonova || {};
  window.Algonova.render = render;
})();

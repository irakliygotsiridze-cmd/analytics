(function () {
  'use strict';

  const LANGS = [
    { code: 'ru', label: 'Русский' },
    { code: 'en', label: 'English' },
    { code: 'es', label: 'Español' },
    { code: 'id', label: 'Bahasa Indonesia' },
    { code: 'ms', label: 'Bahasa Melayu' }
  ];

  const STRINGS = {
    'nav.bots':           { ru: 'Боты',          en: 'Bots',        es: 'Bots',           id: 'Bot',         ms: 'Bot' },
    'nav.dashboards':     { ru: 'Дэшборды',      en: 'Dashboards',  es: 'Dashboards',     id: 'Dasbor',      ms: 'Papan Pemuka' },
    'nav.research':       { ru: 'Исследования',  en: 'Research',    es: 'Investigación',  id: 'Riset',       ms: 'Penyelidikan' },

    'hero.bots.subtitle':       { ru: 'Чат-боты для работы с продажами по бизнес-юнитам',
                                  en: 'Sales chatbots organised by business unit',
                                  es: 'Chatbots de ventas organizados por unidad de negocio',
                                  id: 'Chatbot penjualan yang dikelompokkan berdasarkan unit bisnis',
                                  ms: 'Chatbot jualan disusun mengikut unit perniagaan' },
    'hero.dashboards.subtitle': { ru: 'BI-дэшборды и регулярная отчётность по бизнес-юнитам',
                                  en: 'BI dashboards and recurring reports by business unit',
                                  es: 'Dashboards de BI e informes periódicos por unidad de negocio',
                                  id: 'Dasbor BI dan laporan reguler per unit bisnis',
                                  ms: 'Papan pemuka BI dan laporan berkala mengikut unit perniagaan' },
    'hero.research.subtitle':   { ru: 'Результаты исследований аналитической команды',
                                  en: 'Findings published by the analytics team',
                                  es: 'Hallazgos publicados por el equipo de analítica',
                                  id: 'Temuan yang diterbitkan oleh tim analitik',
                                  ms: 'Penemuan yang diterbitkan oleh pasukan analitik' },

    'bu.indonesia': { ru: 'Индонезия', en: 'Indonesia', es: 'Indonesia', id: 'Indonesia', ms: 'Indonesia' },
    'bu.malaysia':  { ru: 'Малайзия',  en: 'Malaysia',  es: 'Malasia',   id: 'Malaysia',  ms: 'Malaysia' },
    'bu.latam':     { ru: 'Латам',     en: 'LatAm',     es: 'LatAm',     id: 'LatAm',     ms: 'LatAm' },

    'card.secondary_sales': { ru: 'Вторичные продажи', en: 'Secondary sales', es: 'Ventas secundarias', id: 'Penjualan sekunder', ms: 'Jualan sekunder' },
    'card.primary_sales':   { ru: 'Первичные продажи', en: 'Primary sales',   es: 'Ventas primarias',   id: 'Penjualan primer',   ms: 'Jualan primer' },
    'card.open':            { ru: 'Открыть',           en: 'Open',            es: 'Abrir',              id: 'Buka',               ms: 'Buka' },

    'empty.coming_soon': { ru: 'Скоро будет', en: 'Coming soon', es: 'Próximamente', id: 'Segera hadir', ms: 'Akan datang' }
  };

  const PAGE_TITLES = {
    bots:       { ru: 'Sales Chatbots — Algonova', en: 'Sales Chatbots — Algonova', es: 'Sales Chatbots — Algonova', id: 'Sales Chatbots — Algonova', ms: 'Sales Chatbots — Algonova' },
    dashboards: { ru: 'Dashboards — Algonova',     en: 'Dashboards — Algonova',     es: 'Dashboards — Algonova',     id: 'Dashboards — Algonova',     ms: 'Dashboards — Algonova' },
    research:   { ru: 'Research — Algonova',       en: 'Research — Algonova',       es: 'Research — Algonova',       id: 'Research — Algonova',       ms: 'Research — Algonova' }
  };

  const STORAGE_KEY = 'algonova.lang';

  function getLang() {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved && LANGS.some(l => l.code === saved)) return saved;
    const browser = (navigator.language || 'ru').slice(0, 2);
    return LANGS.some(l => l.code === browser) ? browser : 'ru';
  }

  function applyLang(lang) {
    document.documentElement.lang = lang;

    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      const dict = STRINGS[key];
      if (dict && dict[lang]) el.textContent = dict[lang];
    });

    const page = document.body.getAttribute('data-page');
    if (page && PAGE_TITLES[page] && PAGE_TITLES[page][lang]) {
      document.title = PAGE_TITLES[page][lang];
    }

    const btn = document.getElementById('lang-current');
    if (btn) btn.textContent = lang.toUpperCase();

    document.querySelectorAll('.lang-menu [data-lang]').forEach(li => {
      li.classList.toggle('active', li.getAttribute('data-lang') === lang);
    });
  }

  function buildMenu() {
    const menu = document.getElementById('lang-menu');
    if (!menu) return;
    menu.innerHTML = LANGS.map(l =>
      `<li data-lang="${l.code}" role="option"><span class="code">${l.code.toUpperCase()}</span><span class="name">${l.label}</span></li>`
    ).join('');
  }

  function setLang(lang) {
    localStorage.setItem(STORAGE_KEY, lang);
    applyLang(lang);
  }

  function initSwitcher() {
    const switcher = document.querySelector('.lang-switcher');
    const button = document.getElementById('lang-button');
    const menu = document.getElementById('lang-menu');
    if (!switcher || !button || !menu) return;

    button.addEventListener('click', e => {
      e.stopPropagation();
      const open = !menu.hasAttribute('hidden');
      if (open) {
        menu.setAttribute('hidden', '');
        button.setAttribute('aria-expanded', 'false');
      } else {
        menu.removeAttribute('hidden');
        button.setAttribute('aria-expanded', 'true');
      }
    });

    menu.addEventListener('click', e => {
      const li = e.target.closest('[data-lang]');
      if (!li) return;
      setLang(li.getAttribute('data-lang'));
      menu.setAttribute('hidden', '');
      button.setAttribute('aria-expanded', 'false');
    });

    document.addEventListener('click', e => {
      if (!switcher.contains(e.target)) {
        menu.setAttribute('hidden', '');
        button.setAttribute('aria-expanded', 'false');
      }
    });

    document.addEventListener('keydown', e => {
      if (e.key === 'Escape') {
        menu.setAttribute('hidden', '');
        button.setAttribute('aria-expanded', 'false');
      }
    });
  }

  function init() {
    buildMenu();
    initSwitcher();
    applyLang(getLang());
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();

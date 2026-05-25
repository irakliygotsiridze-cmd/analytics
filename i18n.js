(function () {
  'use strict';

  const LANGS = [
    { code: 'en', label: 'English' },
    { code: 'ru', label: 'Русский' },
    { code: 'es', label: 'Español' },
    { code: 'id', label: 'Bahasa Indonesia' },
    { code: 'ms', label: 'Bahasa Melayu' }
  ];

  const DEFAULT_LANG = 'en';

  const STRINGS = {
    'nav.bots':         { en: 'Bots',          ru: 'Боты',          es: 'Bots',           id: 'Bot',           ms: 'Bot' },
    'nav.dashboards':   { en: 'Dashboards',    ru: 'Дэшборды',      es: 'Dashboards',     id: 'Dasbor',        ms: 'Papan Pemuka' },
    'nav.research':     { en: 'Research',      ru: 'Исследования',  es: 'Investigación',  id: 'Riset',         ms: 'Penyelidikan' },
    'nav.glossary':     { en: 'Glossary',      ru: 'Глоссарий',     es: 'Glosario',       id: 'Glosarium',     ms: 'Glosari' },
    'nav.team':         { en: 'Team',          ru: 'Команда',       es: 'Equipo',         id: 'Tim',           ms: 'Pasukan' },
    'nav.faq':          { en: 'FAQ',           ru: 'FAQ',           es: 'FAQ',            id: 'FAQ',           ms: 'FAQ' },

    'hero.bots.subtitle':       { en: 'Sales chatbots organised by business unit',
                                  ru: 'Чат-боты для работы с продажами по бизнес-юнитам',
                                  es: 'Chatbots de ventas organizados por unidad de negocio',
                                  id: 'Chatbot penjualan yang dikelompokkan berdasarkan unit bisnis',
                                  ms: 'Chatbot jualan disusun mengikut unit perniagaan' },
    'hero.dashboards.subtitle': { en: 'BI dashboards and recurring reports by business unit',
                                  ru: 'BI-дэшборды и регулярная отчётность по бизнес-юнитам',
                                  es: 'Dashboards de BI e informes periódicos por unidad de negocio',
                                  id: 'Dasbor BI dan laporan reguler per unit bisnis',
                                  ms: 'Papan pemuka BI dan laporan berkala mengikut unit perniagaan' },
    'hero.research.subtitle':   { en: 'Findings published by the analytics team',
                                  ru: 'Результаты исследований аналитической команды',
                                  es: 'Hallazgos publicados por el equipo de analítica',
                                  id: 'Temuan yang diterbitkan oleh tim analitik',
                                  ms: 'Penemuan yang diterbitkan oleh pasukan analitik' },
    'hero.glossary.subtitle':   { en: 'Common metric definitions and formulas across all business units',
                                  ru: 'Общие определения метрик и формулы по всем бизнес-юнитам',
                                  es: 'Definiciones y fórmulas comunes de métricas para todas las unidades',
                                  id: 'Definisi metrik dan formula umum lintas seluruh unit bisnis',
                                  ms: 'Takrif metrik dan formula sepunya merentas semua unit perniagaan' },
    'hero.team.subtitle':       { en: 'The people behind the numbers — who owns what',
                                  ru: 'Люди за цифрами — кто за что отвечает',
                                  es: 'Las personas detrás de los números — quién hace qué',
                                  id: 'Orang-orang di balik angka — siapa bertanggung jawab atas apa',
                                  ms: 'Orang di sebalik nombor — siapa bertanggungjawab atas apa' },
    'hero.faq.subtitle':        { en: 'Frequently asked questions about analytics, data and dashboards',
                                  ru: 'Часто задаваемые вопросы про аналитику, данные и дэшборды',
                                  es: 'Preguntas frecuentes sobre analítica, datos y dashboards',
                                  id: 'Pertanyaan umum tentang analitik, data, dan dasbor',
                                  ms: 'Soalan lazim mengenai analitik, data dan papan pemuka' },

    'bu.indonesia': { en: 'Indonesia', ru: 'Индонезия', es: 'Indonesia', id: 'Indonesia', ms: 'Indonesia' },
    'bu.malaysia':  { en: 'Malaysia',  ru: 'Малайзия',  es: 'Malasia',   id: 'Malaysia',  ms: 'Malaysia' },
    'bu.latam':     { en: 'LatAm',     ru: 'Латам',     es: 'LatAm',     id: 'LatAm',     ms: 'LatAm' },

    'card.secondary_sales': { en: 'Secondary sales', ru: 'Вторичные продажи', es: 'Ventas secundarias', id: 'Penjualan sekunder', ms: 'Jualan sekunder' },
    'card.primary_sales':   { en: 'Primary sales',   ru: 'Первичные продажи', es: 'Ventas primarias',   id: 'Penjualan primer',   ms: 'Jualan primer' },
    'card.open':            { en: 'Open',            ru: 'Открыть',           es: 'Abrir',              id: 'Buka',               ms: 'Buka' },
    'card.scan_hint':       { en: 'Scan to open on your phone', ru: 'Сканируйте, чтобы открыть на телефоне', es: 'Escanea para abrir en tu teléfono', id: 'Pindai untuk membuka di ponsel', ms: 'Imbas untuk buka di telefon' },

    'empty.coming_soon': { en: 'Coming soon', ru: 'Скоро будет', es: 'Próximamente', id: 'Segera hadir', ms: 'Akan datang' },

    'search.placeholder.dashboards': { en: 'Search dashboards…',   ru: 'Поиск по дэшбордам…',     es: 'Buscar dashboards…',    id: 'Cari dasbor…',          ms: 'Cari papan pemuka…' },
    'search.placeholder.research':   { en: 'Search research…',     ru: 'Поиск по исследованиям…', es: 'Buscar investigación…', id: 'Cari riset…',           ms: 'Cari penyelidikan…' },
    'search.placeholder.glossary':   { en: 'Search the glossary…', ru: 'Поиск по глоссарию…',     es: 'Buscar en el glosario…',id: 'Cari di glosarium…',    ms: 'Cari dalam glosari…' },
    'search.placeholder.faq':        { en: 'Search FAQ…',          ru: 'Поиск по FAQ…',           es: 'Buscar FAQ…',           id: 'Cari FAQ…',             ms: 'Cari FAQ…' },
    'search.no_results':             { en: 'Nothing found',        ru: 'Ничего не найдено',       es: 'No se encontró nada',   id: 'Tidak ada hasil',        ms: 'Tiada hasil' },

    'meta.key_metrics':       { en: 'Key metrics',       ru: 'Ключевые метрики',  es: 'Métricas clave',    id: 'Metrik utama',       ms: 'Metrik utama' },
    'meta.update':            { en: 'Update',            ru: 'Обновление',        es: 'Actualización',     id: 'Pembaruan',          ms: 'Kemas kini' },
    'meta.platform':          { en: 'Platform',          ru: 'Платформа',         es: 'Plataforma',        id: 'Platform',           ms: 'Platform' },
    'meta.access':            { en: 'Access',            ru: 'Доступ',            es: 'Acceso',            id: 'Akses',              ms: 'Akses' },
    'meta.formula':           { en: 'Formula',           ru: 'Формула',           es: 'Fórmula',           id: 'Formula',            ms: 'Formula' },
    'meta.meaning':           { en: 'Meaning',           ru: 'Смысл',             es: 'Significado',       id: 'Arti',               ms: 'Maksud' },
    'meta.role':              { en: 'Role',              ru: 'Роль',              es: 'Rol',               id: 'Peran',              ms: 'Peranan' },
    'meta.contact':           { en: 'Contact',           ru: 'Контакт',           es: 'Contacto',          id: 'Kontak',             ms: 'Hubungi' },
    'meta.tbd':               { en: 'TBD',               ru: 'TBD',               es: 'TBD',               id: 'TBD',                ms: 'TBD' },

    'access.note': { en: 'Google Sheets and Superset require sign-in with a Google account. Power BI requires the @powerbi_view account. Confluence access can be requested in the help channel.',
                     ru: 'Гугл-таблицы и Superset требуют входа через Google-аккаунт. Для Power BI используется учётка @powerbi_view. Доступ к Confluence запрашивается в help-канале.',
                     es: 'Google Sheets y Superset requieren inicio de sesión con cuenta de Google. Power BI requiere la cuenta @powerbi_view. El acceso a Confluence se solicita en el canal de ayuda.',
                     id: 'Google Sheets dan Superset memerlukan login akun Google. Power BI memerlukan akun @powerbi_view. Akses Confluence dapat diminta di kanal bantuan.',
                     ms: 'Google Sheets dan Superset memerlukan log masuk akaun Google. Power BI memerlukan akaun @powerbi_view. Akses Confluence boleh diminta di saluran bantuan.' },

    'bug.button':   { en: 'Found a bug?',        ru: 'Нашли баг?',           es: '¿Encontraste un bug?', id: 'Menemukan bug?',     ms: 'Jumpa pepijat?' },
    'bug.tooltip':  { en: 'Report broken charts or wrong data via Telegram', ru: 'Сообщить о сломанных графиках или некорректных данных в Telegram', es: 'Reportar gráficos rotos o datos incorrectos en Telegram', id: 'Laporkan grafik rusak atau data salah lewat Telegram', ms: 'Laporkan carta rosak atau data salah melalui Telegram' },

    'footer.version': { en: 'v4 · 2026', ru: 'v4 · 2026', es: 'v4 · 2026', id: 'v4 · 2026', ms: 'v4 · 2026' }
  };

  const PAGE_TITLES = {
    bots:       { en: 'Bots — Algonova B2C Analytics',       ru: 'Боты — Algonova B2C Analytics',        es: 'Bots — Algonova B2C Analytics',          id: 'Bot — Algonova B2C Analytics',          ms: 'Bot — Algonova B2C Analytics' },
    dashboards: { en: 'Dashboards — Algonova B2C Analytics', ru: 'Дэшборды — Algonova B2C Analytics',    es: 'Dashboards — Algonova B2C Analytics',    id: 'Dasbor — Algonova B2C Analytics',       ms: 'Papan Pemuka — Algonova B2C Analytics' },
    research:   { en: 'Research — Algonova B2C Analytics',   ru: 'Исследования — Algonova B2C Analytics',es: 'Investigación — Algonova B2C Analytics', id: 'Riset — Algonova B2C Analytics',        ms: 'Penyelidikan — Algonova B2C Analytics' },
    glossary:   { en: 'Glossary — Algonova B2C Analytics',   ru: 'Глоссарий — Algonova B2C Analytics',   es: 'Glosario — Algonova B2C Analytics',      id: 'Glosarium — Algonova B2C Analytics',    ms: 'Glosari — Algonova B2C Analytics' },
    team:       { en: 'Team — Algonova B2C Analytics',       ru: 'Команда — Algonova B2C Analytics',     es: 'Equipo — Algonova B2C Analytics',        id: 'Tim — Algonova B2C Analytics',          ms: 'Pasukan — Algonova B2C Analytics' },
    faq:        { en: 'FAQ — Algonova B2C Analytics',        ru: 'FAQ — Algonova B2C Analytics',         es: 'FAQ — Algonova B2C Analytics',           id: 'FAQ — Algonova B2C Analytics',          ms: 'FAQ — Algonova B2C Analytics' }
  };

  const STORAGE_KEY = 'algonova.lang';

  function pick(dict, lang) {
    if (!dict) return '';
    return dict[lang] || dict[DEFAULT_LANG] || dict.en || '';
  }

  function getLang() {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved && LANGS.some(l => l.code === saved)) return saved;
    return DEFAULT_LANG;
  }

  function applyLang(lang) {
    document.documentElement.lang = lang;

    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      const dict = STRINGS[key];
      if (dict) el.textContent = pick(dict, lang);
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      const dict = STRINGS[key];
      if (dict) el.placeholder = pick(dict, lang);
    });

    document.querySelectorAll('[data-i18n-title]').forEach(el => {
      const key = el.getAttribute('data-i18n-title');
      const dict = STRINGS[key];
      if (dict) el.title = pick(dict, lang);
    });

    document.querySelectorAll('[data-i18n-aria-label]').forEach(el => {
      const key = el.getAttribute('data-i18n-aria-label');
      const dict = STRINGS[key];
      if (dict) el.setAttribute('aria-label', pick(dict, lang));
    });

    const page = document.body.getAttribute('data-page');
    if (page && PAGE_TITLES[page]) {
      document.title = pick(PAGE_TITLES[page], lang);
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

  function refresh(lang) {
    if (window.Algonova && typeof window.Algonova.render === 'function') {
      window.Algonova.render(lang);
    }
    applyLang(lang);
    renderEmoji();
  }

  function setLang(lang) {
    localStorage.setItem(STORAGE_KEY, lang);
    document.dispatchEvent(new CustomEvent('algonova:langchange', { detail: { lang: lang } }));
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

  function renderEmoji() {
    if (window.twemoji && typeof window.twemoji.parse === 'function') {
      window.twemoji.parse(document.body, {
        folder: 'svg',
        ext: '.svg',
        className: 'emoji'
      });
    }
  }

  // Public API for other scripts (data.js / render.js)
  window.Algonova = window.Algonova || {};
  window.Algonova.i18n = {
    getLang: getLang,
    pick: pick,
    DEFAULT_LANG: DEFAULT_LANG,
    LANGS: LANGS
  };

  function init() {
    buildMenu();
    initSwitcher();
    document.addEventListener('algonova:langchange', e => refresh(e.detail.lang));
    refresh(getLang());
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();

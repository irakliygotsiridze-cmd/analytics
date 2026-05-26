/* All page data with translations.
   Dashboard names stay close to source-system wording; only section headers,
   metrics text and field labels are translated. */

window.Algonova = window.Algonova || {};

(function () {
  'use strict';

  // ── Section header dictionary (shared) ────────────────────────
  const S = {
    management: { en: 'Management reporting', ru: 'Управленческая отчётность', es: 'Informes de gestión', id: 'Pelaporan manajemen', ms: 'Pelaporan pengurusan' },
    primary:    { en: 'Primary sales',        ru: 'Первичные продажи',         es: 'Ventas primarias',    id: 'Penjualan primer',    ms: 'Jualan primer' },
    secondary:  { en: 'Secondary sales',      ru: 'Вторичные продажи',         es: 'Ventas secundarias',  id: 'Penjualan sekunder',  ms: 'Jualan sekunder' },
    learning:   { en: 'Learning',             ru: 'Обучение',                  es: 'Aprendizaje',         id: 'Pembelajaran',        ms: 'Pembelajaran' },
    offline:    { en: 'Offline',              ru: 'Оффлайн',                   es: 'Offline',             id: 'Offline',             ms: 'Luar talian' }
  };

  const U = {
    daily:     { en: 'Daily, for the previous day',   ru: 'Раз в день за предыдущий день', es: 'Diario, del día anterior',      id: 'Setiap hari, untuk hari sebelumnya', ms: 'Setiap hari, untuk hari sebelumnya' },
    monthly5:  { en: 'Monthly, around the 5th',       ru: 'Раз в месяц около 5 числа',     es: 'Mensual, alrededor del día 5',  id: 'Bulanan, sekitar tanggal 5',         ms: 'Bulanan, sekitar 5 haribulan' },
    monthly10: { en: 'Monthly, around the 10th–15th', ru: 'Раз в месяц около 10–15 числа', es: 'Mensual, alrededor del día 10–15', id: 'Bulanan, sekitar tanggal 10–15',  ms: 'Bulanan, sekitar 10–15 haribulan' }
  };

  // ── Dashboards ────────────────────────────────────────────────
  const DASHBOARDS = {
    indonesia: [
      {
        section: S.management,
        items: [
          {
            name: 'OPS (260403_Indo_Operational_v27)',
            metrics: {
              en: 'Primary + secondary revenue, AOV, average package sold, CAC by actual month, churn by actual month',
              ru: 'Выручка первичка+вторичка, средний чек (AOV), средний проданный пакет, CAC по фактическим месяцам, отток по фактическим месяцам',
              es: 'Ingresos primarios + secundarios, AOV, paquete medio vendido, CAC por mes real, churn por mes real',
              id: 'Pendapatan primer + sekunder, AOV, paket rata-rata terjual, CAC per bulan aktual, churn per bulan aktual',
              ms: 'Hasil primer + sekunder, AOV, pakej purata terjual, CAC mengikut bulan sebenar, churn mengikut bulan sebenar'
            },
            update: U.monthly5,
            platform: 'Google Sheets',
            url: 'https://docs.google.com/spreadsheets/d/1RdpxnjvBBThDEE2Z0e_ACWvEizyLjydMXAKM9yeAFbI/edit?gid=673868759#gid=673868759&range=AX7'
          },
          {
            name: 'Unit-economics (Unit ASEAN_v140524.xlsx)',
            metrics: {
              en: 'Operational profit %, Revenue/CAC by acquisition cohorts',
              ru: 'Operational profit %, Revenue/CAC по когортам привлечения',
              es: 'Beneficio operacional %, Revenue/CAC por cohortes de adquisición',
              id: 'Operational profit %, Revenue/CAC per kohort akuisisi',
              ms: 'Operational profit %, Revenue/CAC mengikut kohort akuisisi'
            },
            update: U.monthly10,
            platform: 'Google Sheets',
            url: 'https://docs.google.com/spreadsheets/d/10WGd8xhgGqTSKmlfXl0ijCWZu3CaEz-7/edit?gid=699918264#gid=699918264'
          }
        ]
      },
      {
        section: S.primary,
        items: [
          {
            name: { en: 'Actual sales report', ru: 'Отчёт по фактическим продажам', es: 'Reporte de ventas reales', id: 'Laporan penjualan aktual', ms: 'Laporan jualan sebenar' },
            metrics: {
              en: 'Primary sales revenue, AOV, L2B, margin',
              ru: 'Выручка первичные продажи, AOV, L2B, маржа',
              es: 'Ingresos ventas primarias, AOV, L2B, margen',
              id: 'Pendapatan penjualan primer, AOV, L2B, margin',
              ms: 'Hasil jualan primer, AOV, L2B, margin'
            },
            update: U.daily, platform: 'Power BI',
            url: 'https://app.powerbi.com/groups/7282848d-9054-4ac2-b5db-21bc18b68cf1/reports/5a03c358-bdab-496d-853a-cbe8050de525/1a0b8c89290ba9e93705?experience=power-bi'
          },
          {
            name: { en: 'Marketing report by Elly', ru: 'Маркетинговый отчёт от Elly', es: 'Reporte de marketing de Elly', id: 'Laporan marketing Elly', ms: 'Laporan pemasaran Elly' },
            metrics: { en: 'ROAS, LTV1/CAC', ru: 'ROAS, LTV1/CAC', es: 'ROAS, LTV1/CAC', id: 'ROAS, LTV1/CAC', ms: 'ROAS, LTV1/CAC' },
            update: U.daily, platform: 'Power BI',
            url: 'https://app.powerbi.com/groups/a3b6710a-af58-4f33-a7f6-2f361a8ca651/reports/a1611f97-8e5d-4fff-84e3-cf48013221f8?experience=power-bi'
          },
          {
            name: { en: 'Auto-distribution', ru: 'Автодистрибуция', es: 'Auto-distribución', id: 'Distribusi otomatis', ms: 'Pengedaran auto' },
            metrics: { en: 'H2Conf, Lobby, Time', ru: 'H2Conf, Lobby, Time', es: 'H2Conf, Lobby, Time', id: 'H2Conf, Lobby, Time', ms: 'H2Conf, Lobby, Time' },
            update: U.daily, platform: 'Power BI',
            url: 'https://app.powerbi.com/groups/7282848d-9054-4ac2-b5db-21bc18b68cf1/reports/5a03c358-bdab-496d-853a-cbe8050de525/1a0b8c89290ba9e93705?experience=power-bi'
          },
          {
            name: 'TCM Dashboard',
            metrics: { en: 'H2Conf, Lobby, Time', ru: 'H2Conf, Lobby, Time', es: 'H2Conf, Lobby, Time', id: 'H2Conf, Lobby, Time', ms: 'H2Conf, Lobby, Time' },
            update: U.daily, platform: 'Power BI',
            url: 'https://app.powerbi.com/groups/7282848d-9054-4ac2-b5db-21bc18b68cf1/reports/9e02a9c7-af4d-4007-908c-f9571fef1d10/b194e181851d872417dc?experience=power-bi'
          }
        ]
      },
      {
        section: S.secondary,
        items: [
          {
            name: { en: 'Prolongations report', ru: 'Отчёт по пролонгациям', es: 'Reporte de prolongaciones', id: 'Laporan perpanjangan', ms: 'Laporan pelanjutan' },
            metrics: {
              en: 'Secondary sales revenue, cohort retention overall and split by same / upgrade',
              ru: 'Выручка вторичные продажи, ретеншн когортный общий и в разбивке сейм/град',
              es: 'Ingresos ventas secundarias, retención por cohorte total y por same/upgrade',
              id: 'Pendapatan penjualan sekunder, retensi kohort total dan rincian same/upgrade',
              ms: 'Hasil jualan sekunder, retensi kohort keseluruhan dan pecahan same/upgrade'
            },
            update: U.daily, platform: 'Power BI',
            url: 'https://app.powerbi.com/groups/7282848d-9054-4ac2-b5db-21bc18b68cf1/reports/a557d711-9cc7-46bf-b4c6-9b454af0f49b/2753bceb0181b00e1b29?experience=power-bi'
          },
          {
            name: { en: 'LTV report', ru: 'LTV отчёт', es: 'Reporte LTV', id: 'Laporan LTV', ms: 'Laporan LTV' },
            metrics: {
              en: 'LTV per student (cohort + actual + forecast), LTV/CAC actual, average lessons per student by cohort',
              ru: 'LTV per student когортно+фактически+прогнозно, LTV/CAC фактически, среднее количество уроков на студента когортно',
              es: 'LTV por alumno (cohorte + real + previsión), LTV/CAC real, lecciones promedio por alumno por cohorte',
              id: 'LTV per siswa (kohort + aktual + perkiraan), LTV/CAC aktual, rata-rata pelajaran per siswa per kohort',
              ms: 'LTV setiap pelajar (kohort + sebenar + ramalan), LTV/CAC sebenar, purata pelajaran setiap pelajar mengikut kohort'
            },
            update: U.daily, platform: 'Power BI',
            url: 'https://app.powerbi.com/groups/7282848d-9054-4ac2-b5db-21bc18b68cf1/reports/7d6856f1-d8c0-460b-813f-eb321a223e6a/f0c33f7b1131cdd20a96?experience=power-bi'
          }
        ]
      },
      {
        section: S.learning,
        items: [
          {
            name: 'Lesson Progress Tracking',
            metrics: { en: '% of attended lessons', ru: '% посещённых уроков', es: '% de clases asistidas', id: '% pelajaran yang dihadiri', ms: '% pelajaran yang dihadiri' },
            update: U.daily, platform: 'Power BI',
            url: 'https://app.powerbi.com/groups/7282848d-9054-4ac2-b5db-21bc18b68cf1/reports/9be308b0-8f86-4593-b4f2-09131c9e146b/ReportSectionb781eb3a4d1d9203ff88?experience=power-bi'
          },
          {
            name: 'Attendance',
            metrics: { en: '% of scheduled lessons', ru: '% уроков по расписанию', es: '% de clases programadas', id: '% pelajaran sesuai jadwal', ms: '% pelajaran mengikut jadual' },
            update: U.daily, platform: 'Superset',
            url: 'https://superset.alg.team/superset/dashboard/214/'
          },
          {
            name: 'Teacher Salary',
            metrics: { en: 'Teacher salary calculation', ru: 'Расчёт зарплаты преподавателей', es: 'Cálculo de salarios docentes', id: 'Perhitungan gaji guru', ms: 'Pengiraan gaji guru' },
            update: U.daily, platform: 'Superset',
            url: 'https://superset.alg.team/superset/dashboard/263/?native_filters_key=zAIwtyhfra3aC6uqsdgSJ7UjTIeNrw_7Ffodnubqw4Mc9SxHlwvXlbYJbLenTRI5'
          }
        ]
      },
      {
        section: S.offline,
        items: [
          {
            name: { en: 'Sales fact (offline)', ru: 'Факт сейлзовый', es: 'Hechos de ventas (offline)', id: 'Fakta penjualan (offline)', ms: 'Fakta jualan (luar talian)' },
            metrics: {
              en: 'Primary sales revenue, AOV, L2P, time to response',
              ru: 'Выручка первичные продажи, AOV, L2P, time to response',
              es: 'Ingresos ventas primarias, AOV, L2P, tiempo de respuesta',
              id: 'Pendapatan penjualan primer, AOV, L2P, waktu respons',
              ms: 'Hasil jualan primer, AOV, L2P, masa tindak balas'
            },
            update: U.daily, platform: 'Power BI',
            url: 'https://app.powerbi.com/groups/7282848d-9054-4ac2-b5db-21bc18b68cf1/reports/e6a9769e-3ebf-40a1-a4d2-3a0b4d1599d2?experience=power-bi'
          },
          {
            name: { en: 'Prolongations (offline)', ru: 'Пролонгации (оффлайн)', es: 'Prolongaciones (offline)', id: 'Perpanjangan (offline)', ms: 'Pelanjutan (luar talian)' },
            metrics: {
              en: 'Secondary sales revenue, cohort retention overall',
              ru: 'Выручка вторичные продажи, ретеншн когортный общий',
              es: 'Ingresos ventas secundarias, retención por cohorte total',
              id: 'Pendapatan penjualan sekunder, retensi kohort total',
              ms: 'Hasil jualan sekunder, retensi kohort keseluruhan'
            },
            update: U.daily, platform: 'Power BI',
            url: 'https://app.powerbi.com/groups/7282848d-9054-4ac2-b5db-21bc18b68cf1/reports/e6a9769e-3ebf-40a1-a4d2-3a0b4d1599d2?experience=power-bi'
          }
        ]
      }
    ],
    malaysia: [
      {
        section: S.primary,
        items: [
          {
            name: { en: 'Actual sales report', ru: 'Отчёт по фактическим продажам', es: 'Reporte de ventas reales', id: 'Laporan penjualan aktual', ms: 'Laporan jualan sebenar' },
            metrics: {
              en: 'Primary sales revenue, AOV, L2B',
              ru: 'Выручка первичные продажи, AOV, L2B',
              es: 'Ingresos ventas primarias, AOV, L2B',
              id: 'Pendapatan penjualan primer, AOV, L2B',
              ms: 'Hasil jualan primer, AOV, L2B'
            },
            update: U.daily, platform: 'Power BI',
            url: 'https://app.powerbi.com/groups/7282848d-9054-4ac2-b5db-21bc18b68cf1/reports/5a03c358-bdab-496d-853a-cbe8050de525/1a0b8c89290ba9e93705?experience=power-bi'
          },
          {
            name: { en: 'Marketing report by Elly', ru: 'Маркетинговый отчёт от Elly', es: 'Reporte de marketing de Elly', id: 'Laporan marketing Elly', ms: 'Laporan pemasaran Elly' },
            metrics: { en: 'ROAS, LTV1/CAC', ru: 'ROAS, LTV1/CAC', es: 'ROAS, LTV1/CAC', id: 'ROAS, LTV1/CAC', ms: 'ROAS, LTV1/CAC' },
            update: U.daily, platform: 'Power BI',
            url: 'https://app.powerbi.com/groups/a3b6710a-af58-4f33-a7f6-2f361a8ca651/reports/a1611f97-8e5d-4fff-84e3-cf48013221f8?experience=power-bi'
          },
          {
            name: { en: 'Auto-distribution', ru: 'Автодистрибуция', es: 'Auto-distribución', id: 'Distribusi otomatis', ms: 'Pengedaran auto' },
            metrics: { en: 'H2Conf, Lobby, Time', ru: 'H2Conf, Lobby, Time', es: 'H2Conf, Lobby, Time', id: 'H2Conf, Lobby, Time', ms: 'H2Conf, Lobby, Time' },
            update: U.daily, platform: 'Power BI',
            url: 'https://app.powerbi.com/groups/7282848d-9054-4ac2-b5db-21bc18b68cf1/reports/5a03c358-bdab-496d-853a-cbe8050de525/1a0b8c89290ba9e93705?experience=power-bi'
          }
        ]
      }
    ],
    latam: []
  };

  // ── Helper to build short {en,ru,es,id,ms} translations succinctly ──
  function t(en, ru, es, id, ms) { return { en: en, ru: ru, es: es, id: id, ms: ms }; }

  // ── Glossary categories ──────────────────────────────────────
  const CAT = {
    students:  t('Students & retention',      'Студенты и удержание',  'Estudiantes y retención',     'Siswa & retensi',     'Pelajar & retensi'),
    funnel:    t('Funnel events',             'События воронки',       'Eventos de embudo',           'Event funnel',        'Acara funnel'),
    leads:     t('Lead funnel & sales',       'Лидогенерация и продажи','Embudo de leads y ventas',    'Funnel lead & jualan','Funnel lead & jualan'),
    economics: t('Unit economics',            'Юнит-экономика',        'Economía unitaria',           'Unit economics',      'Unit economics'),
    retention: t('Renewals & prolongations',  'Продления и пролонгации','Renovaciones y prolongaciones','Pembaruan & perpanjangan','Pembaharuan & pelanjutan')
  };

  // ── Glossary entries ─────────────────────────────────────────
  // Each entry: { slug, name, meaning?, formula?, definition? }
  // Slug is the anchor target and the dashboard cross-link target.

  const GLOSSARY = [
    {
      category: CAT.students,
      items: [
        {
          slug: 'paid-students',
          name: t('Paid (unique) students', 'Платные (уникальные) дети', 'Estudiantes pagos (únicos)', 'Siswa berbayar (unik)', 'Pelajar berbayar (unik)'),
          meaning: t(
            'Students whose paid classes generate revenue for the period. Attendance is irrelevant — they just have an active schedule. One student = one account.',
            'Дети, оплата занятий которых приносит нам прибыль. Могут ходить, могут не ходить — здесь это не важно. У них есть расписание в конкретный период. 1 ребёнок = 1 учётка.',
            'Alumnos cuyas clases pagadas generan ingresos en el periodo. La asistencia no importa — solo deben tener horario activo. 1 alumno = 1 cuenta.',
            'Siswa yang kelas berbayarnya menghasilkan pendapatan untuk periode tersebut. Kehadiran tidak relevan — yang penting mereka punya jadwal aktif. 1 siswa = 1 akun.',
            'Pelajar yang kelas berbayarnya menjana hasil untuk tempoh tersebut. Kehadiran tidak penting — mereka hanya perlu ada jadual aktif. 1 pelajar = 1 akaun.'
          ),
          formula: t(
            'Students with a scheduled lesson in the LMS during the given period (week, month, etc.).',
            'Дети с проставленным расписанием в ЛМС за конкретный период (например, неделя или месяц).',
            'Alumnos con una clase programada en el LMS durante el periodo (semana, mes, etc.).',
            'Siswa dengan jadwal pelajaran di LMS selama periode tertentu (mingguan, bulanan, dll.).',
            'Pelajar dengan pelajaran berjadual dalam LMS untuk tempoh tertentu (minggu, bulan, dll.).'
          )
        },
        {
          slug: 'active-students',
          name: t('Active students', 'Активные дети', 'Alumnos activos', 'Siswa aktif', 'Pelajar aktif'),
          meaning: t(
            'Students who attend regularly and plan to continue. Higher retention, more engaged, eligible for game days. Always based on the current schedule.',
            'Активные дети посещают занятия регулярно и планируют это делать дальше. У них выше ретеншн, они вовлечённее, могут быть допущены до гейм-дней. Всегда по актуальному расписанию.',
            'Alumnos que asisten regularmente y planean continuar. Mayor retención, más comprometidos, aptos para game days. Siempre con horario actual.',
            'Siswa yang hadir secara teratur dan berencana untuk melanjutkan. Retensi lebih tinggi, lebih terlibat, layak untuk game days. Berdasarkan jadwal terkini.',
            'Pelajar yang hadir tetap dan merancang untuk meneruskan. Retensi lebih tinggi, lebih komited, layak untuk game days. Berdasarkan jadual semasa.'
          ),
          formula: t(
            'Unique students AND not "missed" at least once in the last 4 lessons AND has a scheduled lesson within −7 / +7 days from today.',
            'Уникальные дети И 4 последних занятия хотя бы раз не miss И есть занятие в расписании −7 / +7 дней.',
            'Alumnos únicos Y no faltó ≥1 vez en las últimas 4 clases Y tiene clase programada dentro de −7 / +7 días.',
            'Siswa unik DAN tidak "miss" minimal 1 dari 4 pelajaran terakhir DAN ada pelajaran terjadwal dalam −7 / +7 hari.',
            'Pelajar unik DAN tidak "miss" sekurang-kurangnya 1 daripada 4 pelajaran terakhir DAN ada pelajaran berjadual dalam −7 / +7 hari.'
          )
        },
        {
          slug: 'churn',
          name: t('Churn (period)', 'Отток в заданный период', 'Churn (en el periodo)', 'Churn (periode)', 'Churn (tempoh)'),
          meaning: t(
            'Number of students who left during the period.',
            'Количество детей, покинувших курсы в заданный период.',
            'Número de alumnos que abandonaron durante el periodo.',
            'Jumlah siswa yang keluar selama periode tersebut.',
            'Bilangan pelajar yang berhenti selama tempoh tersebut.'
          ),
          formula: t(
            'Absolute: (EOP unique students N) − (BOP unique students N). Percent: (EOP − BOP) / (BOP + new students in period) × 100%.',
            'Абсолют: EOP уник. дети N − BOP уник. дети N. Процент: (EOP − BOP) / (BOP + пришедшие в период) × 100%.',
            'Absoluto: alumnos únicos EOP N − BOP N. Porcentaje: (EOP − BOP) / (BOP + nuevos del periodo) × 100%.',
            'Absolut: siswa unik EOP N − BOP N. Persen: (EOP − BOP) / (BOP + siswa baru periode) × 100%.',
            'Mutlak: pelajar unik EOP N − BOP N. Peratus: (EOP − BOP) / (BOP + pelajar baru tempoh) × 100%.'
          )
        }
      ]
    },
    {
      category: CAT.funnel,
      items: [
        {
          slug: 'visited-lobby',
          name: 'Visited lobby',
          meaning: t(
            'Tracked by key `autodistributionLobbyVisitedAt` — student was in lobby (front count to table); first event only.',
            'Считается по ключу `autodistributionLobbyVisitedAt` — студент зашёл в лобби (фронт считает в таблицу); фиксируется только первое событие.',
            'Por la clave `autodistributionLobbyVisitedAt` — el alumno entró al lobby (frontend cuenta en tabla); solo primer evento.',
            'Berdasarkan kunci `autodistributionLobbyVisitedAt` — siswa masuk lobby (front-end menghitung ke tabel); event pertama saja.',
            'Berdasarkan kekunci `autodistributionLobbyVisitedAt` — pelajar masuk lobi (front-end mengira ke jadual); hanya peristiwa pertama.'
          )
        },
        {
          slug: 'redirect-zoom',
          name: 'Redirect zoom',
          meaning: t(
            'After lobby, auto-redirect into the Zoom room.',
            'После лобби — автоматический переход в Zoom-комнату.',
            'Tras el lobby, redirección automática a la sala Zoom.',
            'Setelah lobi, redirect otomatis ke ruang Zoom.',
            'Selepas lobi, ubah hala automatik ke bilik Zoom.'
          )
        },
        {
          slug: 'happened',
          name: 'Happened',
          meaning: t(
            'Sourced from amoCRM: MK was set up by this date in amo.',
            'Берётся из amoCRM: МК назначен (set up) к этой дате в amo.',
            'Desde amoCRM: MK programado en amo para esta fecha.',
            'Dari amoCRM: MK dijadwalkan di amo untuk tanggal ini.',
            'Daripada amoCRM: MK dijadualkan di amo untuk tarikh ini.'
          )
        },
        {
          slug: 'attended',
          name: 'Attended',
          meaning: t(
            'Sourced from amoCRM: TCM marked that the student attended MK in amo.',
            'Берётся из amoCRM: TCM пометил, что студент посетил МК.',
            'Desde amoCRM: TCM marcó que el alumno asistió al MK.',
            'Dari amoCRM: TCM menandai bahwa siswa menghadiri MK.',
            'Daripada amoCRM: TCM menanda pelajar hadir MK.'
          )
        },
        {
          slug: 'confirm',
          name: 'Confirm',
          meaning: t(
            'amoCRM field "Confirmed 2" = TRUE — lead confirmed visiting MK.',
            'Поле amoCRM "Confirmed 2" = TRUE — лид подтвердил визит на МК.',
            'Campo amoCRM "Confirmed 2" = TRUE — el lead confirmó la asistencia al MK.',
            'Field amoCRM "Confirmed 2" = TRUE — lead mengonfirmasi kehadiran MK.',
            'Medan amoCRM "Confirmed 2" = TRUE — lead mengesahkan kehadiran MK.'
          )
        },
        {
          slug: 'avg-time-distribution',
          name: 'Avg Time Distribution',
          meaning: t(
            'Average time between the student NOT being in the lobby and the first time they are in the lobby — based on `student_settings`.',
            'Среднее время между моментом, когда студента нет в лобби, и первым моментом входа в лобби — по данным `student_settings`.',
            'Tiempo medio entre que el alumno NO está en el lobby y la primera vez que entra al lobby — datos de `student_settings`.',
            'Rata-rata waktu antara siswa TIDAK ada di lobi dan pertama kali siswa masuk lobi — data `student_settings`.',
            'Purata masa antara pelajar TIDAK berada di lobi dan kali pertama pelajar masuk lobi — data `student_settings`.'
          )
        },
        {
          slug: 'avg-tcm-join-lobby',
          name: 'Avg TCM Join Lobby',
          meaning: t(
            'Average minutes between class start and TCM joining the room.',
            'Среднее время в минутах между началом урока и моментом входа TCM в комнату.',
            'Minutos medios entre el inicio de la clase y la entrada del TCM a la sala.',
            'Rata-rata menit antara mulai kelas dan TCM masuk ke ruang.',
            'Purata minit antara kelas bermula dan TCM masuk bilik.'
          )
        }
      ]
    },
    {
      category: CAT.leads,
      items: [
        { slug: 'leads', name: 'Leads',
          meaning: t('Total leads created 00:00–23:59 today.', 'Общее число лидов, созданных за сегодня 00:00–23:59.', 'Total de leads creados hoy 00:00–23:59.', 'Total lead yang dibuat hari ini 00:00–23:59.', 'Jumlah lead yang dibuat hari ini 00:00–23:59.') },
        { slug: 'leads-processing', name: t('Leads processing during that day', 'Лиды в обработке за день', 'Leads procesando ese día', 'Lead diproses pada hari itu', 'Lead diproses pada hari itu'),
          meaning: t('Leads created 8pm yesterday — 7:59pm today (7pm-to-7pm window).', 'Лиды, созданные с 20:00 вчера по 19:59 сегодня (окно 19:00–19:00).', 'Leads creados desde 20:00 ayer a 19:59 hoy (ventana 19–19).', 'Lead dibuat 20:00 kemarin – 19:59 hari ini (jendela 19–19).', 'Lead dibuat 20:00 semalam – 19:59 hari ini (tetingkap 19–19).') },
        { slug: 'response-1st-call', name: 'Response 1st call, min',
          meaning: t('Time (min) to first call inside AMO from creation, between 10am and 7pm Jakarta time.', 'Время (мин) до первого звонка в AMO от момента создания, между 10:00 и 19:00 по Джакарте.', 'Tiempo (min) hasta la primera llamada en AMO desde la creación, entre 10:00 y 19:00 hora Yakarta.', 'Waktu (menit) sampai panggilan pertama di AMO sejak dibuat, 10:00–19:00 WIB.', 'Masa (minit) sehingga panggilan pertama di AMO dari penciptaan, 10:00–19:00 waktu Jakarta.') },
        { slug: 'successful-calls', name: '% Successful calls',
          meaning: t('Callgear successful calls (client answered) / total calls.', 'Callgear успешные звонки (клиент ответил) / общее число звонков.', 'Llamadas exitosas Callgear (cliente respondió) / total.', 'Panggilan sukses Callgear (klien jawab) / total panggilan.', 'Panggilan berjaya Callgear (pelanggan jawab) / jumlah panggilan.') },
        { slug: 'simple-sales-activity', name: 'Simple Sales activity',
          meaning: t('BM working hours inside AMO CRM.', 'Рабочие часы BM в AMO CRM.', 'Horas de trabajo del BM en AMO CRM.', 'Jam kerja BM di AMO CRM.', 'Jam kerja BM dalam AMO CRM.') },
        { slug: 'mql1', name: 'MQL1',
          meaning: t('Qleads created 8pm yesterday — 7:59pm today FROM today\'s primary leads.', 'Qleads, созданные с 20:00 вчера по 19:59 сегодня, ИЗ первичных лидов сегодняшнего дня.', 'Qleads creados 20:00 ayer – 19:59 hoy DESDE leads primarios de hoy.', 'Qleads dibuat 20:00 kemarin – 19:59 hari ini DARI leads primer hari ini.', 'Qleads dicipta 20:00 semalam – 19:59 hari ini DARI lead primer hari ini.') },
        { slug: 'mql', name: 'MQL',
          meaning: t('Total Qleads today INCLUDING cohorts from all previous periods.', 'Общее число Qleads сегодня, ВКЛЮЧАЯ когорты предыдущих периодов.', 'Total Qleads hoy INCLUYENDO cohortes de periodos anteriores.', 'Total Qleads hari ini TERMASUK kohort periode sebelumnya.', 'Jumlah Qleads hari ini TERMASUK kohort tempoh sebelumnya.') },
        { slug: 'l2mql1', name: 'L2MQL1, %',
          meaning: t('Leads processing during that day → MQL, share of today\'s primary leads.', 'Лиды в обработке за день → MQL, доля от первичных лидов сегодня.', 'Leads procesando ese día → MQL, parte de leads primarios de hoy.', 'Lead diproses pada hari itu → MQL, dari leads primer hari ini.', 'Lead diproses pada hari itu → MQL, dari lead primer hari ini.') },
        { slug: 'mql2b1', name: 'MQL2B1, %',
          meaning: t('MQL processing during that day → Booking, share of today\'s primary leads.', 'MQL в обработке за день → Booking, доля от первичных лидов сегодня.', 'MQL procesando ese día → Booking, parte de leads primarios de hoy.', 'MQL diproses pada hari itu → Booking, dari leads primer hari ini.', 'MQL diproses pada hari itu → Booking, dari lead primer hari ini.') },
        { slug: 'l2b', name: 'L2B, %',
          meaning: t('Bookings / Leads.', 'Bookings / Leads.', 'Bookings / Leads.', 'Bookings / Leads.', 'Bookings / Leads.') },
        { slug: 'l2b1', name: 'L2B1, %',
          meaning: t('Leads processing during that day → Booking, share of today\'s primary leads.', 'Лиды в обработке за день → Booking, доля от первичных лидов сегодня.', 'Leads procesando ese día → Booking, parte de leads primarios de hoy.', 'Lead diproses pada hari itu → Booking, dari leads primer hari ini.', 'Lead diproses pada hari itu → Booking, dari lead primer hari ini.') },
        { slug: 'pre-booking-time-gap', name: 'Pre-Booking Time gap',
          meaning: t('Average time for leads in processing to become a booking today: 10am–5pm Jakarta.', 'Среднее время до момента, когда лид в обработке становится booking — 10:00–17:00 по Джакарте.', 'Tiempo medio para que un lead procesando se vuelva booking hoy: 10:00–17:00 Yakarta.', 'Rata-rata waktu hingga lead diproses jadi booking hari ini: 10:00–17:00 WIB.', 'Purata masa untuk lead diproses menjadi booking hari ini: 10:00–17:00 Jakarta.') },
        { slug: 'bookings', name: 'Bookings',
          meaning: t('All bookings today, including leads from previous days.', 'Все bookings сегодня, включая лидов из предыдущих дней.', 'Todos los bookings de hoy, incluyendo leads de días previos.', 'Semua booking hari ini, termasuk lead dari hari-hari sebelumnya.', 'Semua tempahan hari ini, termasuk lead dari hari sebelumnya.') },
        { slug: 'booking1', name: 'Booking1',
          meaning: t('Total bookings created 8pm yesterday — 7:59pm today.', 'Общее число bookings, созданных с 20:00 вчера по 19:59 сегодня.', 'Total bookings creados 20:00 ayer – 19:59 hoy.', 'Total booking dibuat 20:00 kemarin – 19:59 hari ini.', 'Jumlah tempahan dicipta 20:00 semalam – 19:59 hari ini.') },
        { slug: 'mql2b', name: 'MQL2B, %',
          meaning: t('MQL today → all bookings today (incl. leads from previous days).', 'MQL сегодня → все bookings сегодня (включая лидов из предыдущих дней).', 'MQL hoy → todos los bookings hoy (incl. leads de días previos).', 'MQL hari ini → semua booking hari ini (termasuk lead dari hari sebelumnya).', 'MQL hari ini → semua tempahan hari ini (termasuk lead dari hari sebelumnya).') },
        { slug: 'booking-time-gap', name: 'Booking Time gap',
          meaning: t('Average delta between booking1 date (registered checker that day) and MK date — days + hours.', 'Среднее время между датой booking1 (registered checker за день) и датой МК — дни + часы.', 'Delta media entre fecha de booking1 (registered checker ese día) y fecha del MK — días + horas.', 'Rata-rata delta antara tanggal booking1 (registered checker hari itu) dan tanggal MK — hari + jam.', 'Purata delta antara tarikh booking1 (registered checker hari itu) dan tarikh MK — hari + jam.') },
        { slug: 'plan-happens', name: 'Plan of Happens',
          meaning: t('Expected happens today, as of 10am (bookings for today).', 'Ожидаемые happens на сегодня на 10:00 (bookings на сегодня).', 'Happens esperados hoy, a las 10:00 (bookings de hoy).', 'Perkiraan happens hari ini, pukul 10:00 (booking hari ini).', 'Anggaran happens hari ini, pukul 10:00 (tempahan hari ini).') },
        { slug: 'fact-happens', name: 'Fact of Happens',
          meaning: t('Actual happens today, as of 10pm.', 'Фактические happens на сегодня на 22:00.', 'Happens reales hoy, a las 22:00.', 'Happens aktual hari ini, pukul 22:00.', 'Happens sebenar hari ini, pukul 22:00.') },
        { slug: 'plan-fact-happens', name: 'Plan/Fact Happens',
          meaning: t('Fact of Happens / Plan of Happens (today).', 'Fact of Happens / Plan of Happens (сегодня).', 'Fact of Happens / Plan of Happens (hoy).', 'Fact of Happens / Plan of Happens (hari ini).', 'Fact of Happens / Plan of Happens (hari ini).') },
        { slug: 'reschedule-rate', name: 'Reschedule Rate',
          meaning: t('Reschedules / Plan of Happens (today).', 'Reschedules / Plan of Happens (сегодня).', 'Reschedules / Plan of Happens (hoy).', 'Reschedules / Plan of Happens (hari ini).', 'Reschedules / Plan of Happens (hari ini).') },
        { slug: 'reschedules-total', name: 'Reschedules in total today by managers',
          meaning: t('Number of times MK time was changed to a future moment vs. the action time.', 'Сколько раз время МК было изменено на будущее по отношению к моменту действия.', 'Cuántas veces el horario del MK se movió al futuro respecto al momento de la acción.', 'Berapa kali waktu MK diubah ke masa depan dibanding waktu aksi.', 'Berapa kali masa MK diubah ke masa depan berbanding masa tindakan.') },
        { slug: 'b2a', name: 'B2A, %',
          meaning: t('Attended / Bookings.', 'Attended / Bookings.', 'Attended / Bookings.', 'Attended / Bookings.', 'Attended / Bookings.') },
        { slug: 'h2a', name: 'H2A, %',
          meaning: t('Attended / Bookings (alternate code in some reports).', 'Attended / Bookings (альтернативное обозначение в части отчётов).', 'Attended / Bookings (código alterno en algunos reportes).', 'Attended / Bookings (kode alternatif di beberapa laporan).', 'Attended / Bookings (kod alternatif dalam sesetengah laporan).') },
        { slug: 'b2a1', name: 'B2A1',
          meaning: t('Bookings → attendance, share of today\'s bookings.', 'Bookings → посещение, доля от bookings сегодня.', 'Bookings → asistencia, parte de bookings de hoy.', 'Bookings → kehadiran, dari booking hari ini.', 'Bookings → kehadiran, dari tempahan hari ini.') },
        { slug: 'plan-happens-2a', name: 'Plan of happens 2A',
          meaning: t('Attended / Plan of Happens.', 'Attended / Plan of Happens.', 'Attended / Plan of Happens.', 'Attended / Plan of Happens.', 'Attended / Plan of Happens.') },
        { slug: 'a2s1', name: '%A2S1',
          meaning: t('Attendance today → sales, share of today\'s attendance.', 'Attendance сегодня → продажи, доля от attendance сегодня.', 'Attendance hoy → ventas, parte de attendance de hoy.', 'Attendance hari ini → penjualan, dari attendance hari ini.', 'Attendance hari ini → jualan, dari attendance hari ini.') },
        { slug: 'attendance-time-gap', name: 'Attendance Time gap',
          meaning: t('Average delta between attendance date (registered checker that day) and sales date — days + hours.', 'Среднее время между датой attendance (registered checker за день) и датой продажи — дни + часы.', 'Delta media entre fecha de attendance y fecha de venta — días + horas.', 'Rata-rata delta antara tanggal attendance dan tanggal penjualan — hari + jam.', 'Purata delta antara tarikh attendance dan tarikh jualan — hari + jam.') },
        { slug: 'a2s', name: 'A2S, %',
          meaning: t('Sales / Attended — attendance today → sales anywhere (incl. leads from previous days).', 'Sales / Attended — attendance сегодня → продажи везде (включая лидов из предыдущих дней).', 'Sales / Attended — attendance hoy → ventas en cualquier momento (incl. leads previos).', 'Sales / Attended — attendance hari ini → penjualan kapan saja (termasuk lead sebelumnya).', 'Sales / Attended — attendance hari ini → jualan bila-bila masa (termasuk lead sebelumnya).') },
        { slug: 'sales', name: 'Sales',
          meaning: t('Number of sales, counted by payment day.', 'Количество продаж, считается по дате оплаты.', 'Número de ventas, contadas por día de pago.', 'Jumlah penjualan, dihitung per hari pembayaran.', 'Bilangan jualan, dikira mengikut hari pembayaran.') },
        { slug: 'sales1', name: 'Sales1',
          meaning: t('Attendance + sale on the same day (attendance date) today.', 'Attendance + продажа в один и тот же день (дата attendance) сегодня.', 'Attendance + venta el mismo día (fecha attendance) hoy.', 'Attendance + penjualan di hari yang sama (tanggal attendance) hari ini.', 'Attendance + jualan pada hari yang sama (tarikh attendance) hari ini.') },
        { slug: 'revenue1', name: 'Revenue1',
          meaning: t('Revenue from Sales1.', 'Выручка от Sales1.', 'Ingresos de Sales1.', 'Pendapatan dari Sales1.', 'Hasil daripada Sales1.') },
        { slug: 'aov1', name: 'AOV1',
          meaning: t('Revenue1 / Sales1.', 'Revenue1 / Sales1.', 'Revenue1 / Sales1.', 'Revenue1 / Sales1.', 'Revenue1 / Sales1.') },
        { slug: 'aov', name: 'AOV',
          meaning: t('Average Order Value — revenue per sale, by payment day, in USD.', 'Средний чек — выручка на продажу, по дате оплаты, в USD.', 'Ticket medio — ingresos por venta, por día de pago, en USD.', 'Nilai pesanan rata-rata — pendapatan per penjualan, per hari pembayaran, USD.', 'Nilai pesanan purata — hasil setiap jualan, mengikut hari pembayaran, USD.') },
        { slug: 'revenue', name: 'Revenue',
          meaning: t('Revenue by payment day today, in USD.', 'Выручка по дате оплаты сегодня, в USD.', 'Ingresos por día de pago hoy, en USD.', 'Pendapatan per hari pembayaran hari ini, USD.', 'Hasil mengikut hari pembayaran hari ini, USD.') },
        { slug: 'l2p', name: 'L2P, %',
          meaning: t('Leads today → payment anywhere (incl. leads from previous days).', 'Лиды сегодня → оплата везде (включая лидов из предыдущих дней).', 'Leads hoy → pago en cualquier momento (incl. leads previos).', 'Leads hari ini → pembayaran kapan saja (termasuk lead sebelumnya).', 'Leads hari ini → pembayaran bila-bila masa (termasuk lead sebelumnya).') },
        { slug: 'l2a', name: 'L2A, %',
          meaning: t('Leads today → attendance anywhere (incl. leads from previous days).', 'Лиды сегодня → attendance везде (включая лидов из предыдущих дней).', 'Leads hoy → attendance en cualquier momento (incl. leads previos).', 'Leads hari ini → attendance kapan saja (termasuk lead sebelumnya).', 'Leads hari ini → attendance bila-bila masa (termasuk lead sebelumnya).') },
        { slug: 'av-no-lessons-sold', name: 'Av No lessons sold',
          meaning: t('Average number of lessons sold (OPS-style), by payment day today.', 'Среднее число проданных уроков (как в OPS), по дате оплаты сегодня.', 'Promedio de clases vendidas (estilo OPS), por día de pago hoy.', 'Rata-rata pelajaran terjual (gaya OPS), per hari pembayaran hari ini.', 'Purata pelajaran terjual (gaya OPS), mengikut hari pembayaran hari ini.') },
        { slug: 'av-check-per-lesson', name: 'Av check per lesson',
          meaning: t('Average check per lesson (OPS-style), by payment day today.', 'Средний чек на урок (как в OPS), по дате оплаты сегодня.', 'Ticket medio por clase (estilo OPS), por día de pago hoy.', 'Tiket rata-rata per pelajaran (gaya OPS), per hari pembayaran hari ini.', 'Tiket purata setiap pelajaran (gaya OPS), mengikut hari pembayaran hari ini.') }
      ]
    },
    {
      category: CAT.economics,
      items: [
        { slug: 'mcac', name: 'MCAC',
          meaning: t('Marketing costs per student.', 'Маркетинговые расходы на одного студента.', 'Costes de marketing por alumno.', 'Biaya pemasaran per siswa.', 'Kos pemasaran setiap pelajar.') },
        { slug: 'sac', name: 'SAC',
          meaning: t('Sales costs per student — 20% of AOV.', 'Расходы на продажи на одного студента — 20% от AOV.', 'Costes de ventas por alumno — 20% del AOV.', 'Biaya penjualan per siswa — 20% dari AOV.', 'Kos jualan setiap pelajar — 20% daripada AOV.') },
        { slug: 'cac', name: 'CAC',
          meaning: t('Customer acquisition cost: CAC = MCAC + SAC.', 'Стоимость привлечения клиента: CAC = MCAC + SAC.', 'Coste de adquisición: CAC = MCAC + SAC.', 'Biaya akuisisi pelanggan: CAC = MCAC + SAC.', 'Kos pemerolehan pelanggan: CAC = MCAC + SAC.') },
        { slug: 'predicted-margin', name: 'Predicted Margin',
          meaning: t('First-year revenue minus OPEX minus CAC, divided by total revenue.', 'Выручка первого года минус OPEX минус CAC, делённое на общую выручку.', 'Ingresos del 1er año menos OPEX menos CAC, dividido entre ingresos totales.', 'Pendapatan tahun pertama dikurangi OPEX dikurangi CAC, dibagi total pendapatan.', 'Hasil tahun pertama tolak OPEX tolak CAC, dibahagi jumlah hasil.') },
        { slug: 'profit-1y', name: 'Profit 1Y',
          meaning: t('Estimated yearly profit from all students in this cohort (revenue minus costs).', 'Оценочная годовая прибыль со всех студентов когорты (выручка минус расходы).', 'Beneficio anual estimado de todos los alumnos de la cohorte (ingresos − costes).', 'Estimasi profit tahunan dari semua siswa dalam kohort (pendapatan − biaya).', 'Anggaran untung tahunan dari semua pelajar kohort (hasil − kos).') },
        { slug: 'ltv-cac', name: 'LTV/CAC',
          meaning: t('Forecast estimate of how much the cohort will generate over its lifetime (incl. renewals) divided by CAC.', 'Прогнозная оценка того, сколько когорта принесёт за всё время жизни (включая продления), делённая на CAC.', 'Estimación de cuánto generará la cohorte durante su vida (incl. renovaciones) dividido por el CAC.', 'Perkiraan total kontribusi kohort sepanjang masa hidup (termasuk renewal) dibagi CAC.', 'Anggaran sumbangan kohort sepanjang hayat (termasuk pembaharuan) dibahagi CAC.') },
        { slug: 'ltv1', name: 'LTV1',
          meaning: t('AOV − Av package × teacher costs, from the first purchase.', 'AOV − Av package × расходы на преподавателя, от первой покупки.', 'AOV − Av package × costes de profesor, desde la primera compra.', 'AOV − Av package × biaya guru, dari pembelian pertama.', 'AOV − Av package × kos guru, daripada pembelian pertama.') },
        { slug: 'ltv1-cac', name: 'LTV1/CAC',
          meaning: t('(AOV − Av package × instructor costs) / (MCAC + SAC).', '(AOV − Av package × расходы на инструктора) / (MCAC + SAC).', '(AOV − Av package × costes instructor) / (MCAC + SAC).', '(AOV − Av package × biaya instruktur) / (MCAC + SAC).', '(AOV − Av package × kos jurulatih) / (MCAC + SAC).') },
        { slug: 'discounts', name: 'Discounts, %',
          meaning: t('Share of payments where the price type is not "Normal Price".', 'Доля оплат, у которых тип цены ≠ Normal Price.', 'Porcentaje de pagos con tipo de precio ≠ Normal Price.', 'Persentase pembayaran dengan tipe harga ≠ Normal Price.', 'Peratus pembayaran dengan jenis harga ≠ Normal Price.') },
        { slug: 'roas', name: 'ROAS',
          meaning: t('Return on Ad Spend — revenue attributed to ads / ad spend.', 'Return on Ad Spend — атрибутированная выручка / расходы на рекламу.', 'Return on Ad Spend — ingresos atribuidos / gasto publicitario.', 'Return on Ad Spend — pendapatan atribusi / biaya iklan.', 'Return on Ad Spend — hasil atribusi / belanja iklan.') }
      ]
    },
    {
      category: CAT.retention,
      items: [
        {
          slug: 'prolongation',
          name: t('Prolongation', 'Пролонгация', 'Prolongación', 'Perpanjangan', 'Pelanjutan'),
          meaning: t(
            'Number of students with an expected next payment (based on LMS timetable and credits paid) without upgrades.',
            'Число студентов с ожидаемой датой следующей оплаты (по расписанию ЛМС и оплаченным кредитам), без апгрейдов.',
            'Número de alumnos con próximo pago esperado (según horario LMS y créditos pagados), sin upgrades.',
            'Jumlah siswa dengan perkiraan pembayaran berikutnya (berdasarkan jadwal LMS dan kredit dibayar), tanpa upgrade.',
            'Bilangan pelajar dengan jangkaan bayaran seterusnya (berdasarkan jadual LMS dan kredit dibayar), tanpa upgrade.'
          )
        },
        {
          slug: 'prolongation-earlier', name: 'Prolongation earlier',
          meaning: t(
            'Number of students with an expected next payment who paid in an earlier month, without upgrades.',
            'Число студентов с ожидаемой следующей оплатой, оплативших раньше прогнозного месяца, без апгрейдов.',
            'Alumnos con próximo pago esperado que pagaron en un mes anterior, sin upgrades.',
            'Siswa dengan pembayaran berikutnya yang dibayar di bulan lebih awal, tanpa upgrade.',
            'Pelajar dengan pembayaran berikutnya yang dibayar pada bulan lebih awal, tanpa upgrade.'
          )
        },
        {
          slug: 'upgrades', name: t('Upgrades', 'Апгрейды', 'Upgrades', 'Upgrade', 'Naik taraf'),
          meaning: t(
            'Expected upgrades — students eligible for an upgrade (after lesson 1, before lesson 5). Fact upgrades — eligible students who purchased.',
            'Expected upgrades — студенты, имеющие право на апгрейд (после 1-го урока, до 5-го). Fact upgrades — те, кто реально оплатили.',
            'Expected upgrades — alumnos elegibles (tras la 1ª clase, antes de la 5ª). Fact upgrades — los que compraron.',
            'Expected upgrades — siswa eligible (setelah pelajaran ke-1, sebelum ke-5). Fact upgrades — yang membeli.',
            'Expected upgrades — pelajar layak (selepas pelajaran ke-1, sebelum ke-5). Fact upgrades — yang membayar.'
          )
        },
        {
          slug: 'reanimation', name: t('Reanimation', 'Реанимация', 'Reanimación', 'Reanimasi', 'Pemulihan'),
          meaning: t(
            'Students with an expected prolongation date in the last 2 months, currently at Notification Stage 6 or 7 in amo.',
            'Студенты с ожидаемой датой пролонгации в последние 2 месяца, находящиеся в Notification Stage 6 или 7 в amo.',
            'Alumnos con fecha esperada de prolongación en los últimos 2 meses, en Notification Stage 6 o 7 de amo.',
            'Siswa dengan tanggal perpanjangan diharapkan dalam 2 bulan terakhir, di Notification Stage 6 atau 7 amo.',
            'Pelajar dengan tarikh pelanjutan dijangka dalam 2 bulan lalu, pada Notification Stage 6 atau 7 amo.'
          )
        },
        {
          slug: 'not-priority', name: 'Not priority',
          meaning: t(
            'Students from "All expected" who made their next payment (based on credits paid) in the last 5 days of the month.',
            'Студенты из "All expected", оплатившие следующий платёж (по оплаченным кредитам) в последние 5 дней месяца.',
            'Alumnos de "All expected" que pagaron el siguiente pago (créditos pagados) en los últimos 5 días del mes.',
            'Siswa dari "All expected" yang melakukan pembayaran berikutnya di 5 hari terakhir bulan.',
            'Pelajar dari "All expected" yang membuat bayaran seterusnya dalam 5 hari terakhir bulan.'
          )
        },
        {
          slug: 'in-work', name: 'In work',
          meaning: t('Reanimation + Prolongation − Not priority.', 'Reanimation + Prolongation − Not priority.', 'Reanimation + Prolongation − Not priority.', 'Reanimation + Prolongation − Not priority.', 'Reanimation + Prolongation − Not priority.')
        }
      ]
    }
  ];

  // ── Team ─────────────────────────────────────────────────────
  const TEAM = [
    {
      name: t('Armina Bekaryan', 'Армина Бекарян', 'Armina Bekaryan', 'Armina Bekaryan', 'Armina Bekaryan'),
      role: t('Head of Strategy', 'Head of Strategy', 'Head of Strategy', 'Head of Strategy', 'Head of Strategy'),
      bus: [],
      contact: { url: 'https://t.me/arminabeqarian', label: '@arminabeqarian' },
      photo: 'assets/team/armina.jpg',
      initials: 'АБ'
    },
    {
      name: t('Iraklii Gotsiridze', 'Ираклий Гоциридзе', 'Iraklii Gotsiridze', 'Iraklii Gotsiridze', 'Iraklii Gotsiridze'),
      role: t('Team Lead, Analytics', 'Тимлид аналитики', 'Team Lead de Analítica', 'Team Lead Analitik', 'Ketua Pasukan Analitik'),
      bus: ['indonesia', 'malaysia', 'latam'],
      contact: { url: 'https://t.me/gotzir', label: '@gotzir' },
      photo: 'assets/team/iraklii.png',
      initials: 'ИГ'
    },
    {
      name: t('Danila Zhilnikov', 'Данила Жильников', 'Danila Zhilnikov', 'Danila Zhilnikov', 'Danila Zhilnikov'),
      role: t('BI Analyst', 'BI-аналитик', 'BI Analyst', 'BI Analyst', 'BI Analyst'),
      bus: ['indonesia', 'malaysia'],
      contact: { url: 'https://chat.alg.team/algoritmika/messages/@danila.zhilnikov', label: '@danila.zhilnikov' },
      photo: 'assets/team/danila.png',
      initials: 'ДЖ'
    },
    {
      name: t('Alyona Gorshunova', 'Алёна Горшунова', 'Alyona Gorshunova', 'Alyona Gorshunova', 'Alyona Gorshunova'),
      role: t('BI Analyst', 'BI-аналитик', 'BI Analyst', 'BI Analyst', 'BI Analyst'),
      bus: ['latam', 'franchise'],
      contact: { url: 'https://chat.alg.team/algoritmika/messages/@alyona.gorshunova', label: '@alyona.gorshunova' },
      photo: 'assets/team/alyona.jpg',
      initials: 'АГ'
    }
  ];

  // BU labels for team-card chips (includes "Franchise" not present in main nav)
  const BU_LABELS = {
    indonesia: t('Indonesia', 'Индонезия', 'Indonesia', 'Indonesia', 'Indonesia'),
    malaysia:  t('Malaysia',  'Малайзия',  'Malasia',   'Malaysia',  'Malaysia'),
    latam:     t('LatAm',     'Латам',     'LatAm',     'LatAm',     'LatAm'),
    franchise: t('Franchise', 'Франшиза',  'Franquicia','Waralaba',  'Francais')
  };

  // ── FAQ ──────────────────────────────────────────────────────
  const FAQ = [
    {
      q: t('Where do I find revenue figures for Indonesia?',
           'Где найти выручку по Индонезии?',
           '¿Dónde encuentro los ingresos de Indonesia?',
           'Di mana saya menemukan angka pendapatan Indonesia?',
           'Di manakah saya boleh dapatkan angka hasil Indonesia?'),
      a: t('Open the Dashboards page → Indonesia → "Actual sales report" (Primary) or "Prolongations report" (Secondary). Both update daily.',
           'Откройте вкладку Дэшборды → Индонезия → «Отчёт по фактическим продажам» (первичка) или «Отчёт по пролонгациям» (вторичка). Оба обновляются ежедневно.',
           'Abre Dashboards → Indonesia → "Actual sales report" (primarias) o "Prolongations report" (secundarias). Ambos se actualizan a diario.',
           'Buka halaman Dashboards → Indonesia → "Actual sales report" (primer) atau "Prolongations report" (sekunder). Keduanya diperbarui setiap hari.',
           'Buka halaman Dashboards → Indonesia → "Actual sales report" (primer) atau "Prolongations report" (sekunder). Kedua-duanya dikemas kini setiap hari.')
    },
    {
      q: t('How do I get access to Power BI reports?',
           'Как получить доступ к отчётам в Power BI?',
           '¿Cómo obtengo acceso a los reportes de Power BI?',
           'Bagaimana cara mendapatkan akses ke laporan Power BI?',
           'Bagaimana saya mendapatkan akses ke laporan Power BI?'),
      a: t('Ask Iraklii to add you to the powerbi_view chat — https://chat.alg.team/algoritmika/channels/powerbi_view — there is a pinned message with the current login and password. If an SMS code is required, find it in the channel messages.',
           'Попросите Ираклия добавить вас в чат powerbi_view — https://chat.alg.team/algoritmika/channels/powerbi_view — там есть закреплённое сообщение с актуальными логином и паролем. Если запрашивается SMS — найдите её в сообщениях канала.',
           'Pídele a Iraklii que te añada al chat powerbi_view — https://chat.alg.team/algoritmika/channels/powerbi_view — hay un mensaje fijado con el login y la contraseña actuales. Si pide un SMS, búscalo en los mensajes del canal.',
           'Minta Iraklii menambahkan Anda ke chat powerbi_view — https://chat.alg.team/algoritmika/channels/powerbi_view — ada pesan disematkan dengan login dan password terkini. Jika diminta SMS, cari di pesan kanal.',
           'Minta Iraklii menambah anda ke sembang powerbi_view — https://chat.alg.team/algoritmika/channels/powerbi_view — terdapat mesej dipin dengan log masuk dan kata laluan terkini. Jika diminta SMS, cari di mesej saluran.')
    },
    {
      q: t('How is LTV calculated?', 'Как считается LTV?', '¿Cómo se calcula el LTV?', 'Bagaimana cara menghitung LTV?', 'Bagaimana LTV dikira?'),
      a: t('See the Glossary page for the full definition. In short: total cohort revenue divided by cohort size, reported actual + forecast.',
           'Полное определение — на странице Глоссарий. Кратко: общая выручка по когорте / размер когорты, фактически + прогнозно.',
           'La definición completa está en el Glosario. En resumen: ingresos totales por cohorte / tamaño de cohorte, real + previsión.',
           'Lihat halaman Glosarium untuk definisi lengkap. Singkatnya: total pendapatan kohort / ukuran kohort, aktual + perkiraan.',
           'Lihat halaman Glosari untuk takrifan penuh. Ringkasnya: jumlah hasil kohort / saiz kohort, sebenar + ramalan.')
    },
    {
      q: t('Why is a Power BI report not updating?', 'Почему Power BI отчёт не обновляется?', '¿Por qué un reporte de Power BI no se actualiza?', 'Mengapa laporan Power BI tidak diperbarui?', 'Mengapa laporan Power BI tidak dikemas kini?'),
      a: t('Daily reports refresh overnight for the previous day. If a report is more than 24 hours stale, click the "Found a bug?" button — it goes straight to the team lead.',
           'Ежедневные отчёты обновляются ночью за предыдущий день. Если данные устарели больше чем на сутки — нажмите «Нашли баг?», сообщение придёт тимлиду.',
           'Los reportes diarios se refrescan por la noche para el día anterior. Si están desfasados más de 24h, usa el botón "¿Encontraste un bug?".',
           'Laporan harian diperbarui semalam untuk hari sebelumnya. Jika ada keterlambatan lebih dari 24 jam — klik tombol "Menemukan bug?".',
           'Laporan harian dikemas kini pada waktu malam untuk hari sebelumnya. Jika lewat lebih daripada 24 jam — klik butang "Jumpa pepijat?".')
    },
    {
      q: t('How do I request access to other dashboards?', 'Как запросить доступ к другим дэшбордам?', '¿Cómo pido acceso a otros dashboards?', 'Bagaimana cara meminta akses ke dasbor lain?', 'Bagaimana saya meminta akses ke papan pemuka lain?'),
      a: t('Google Sheets and Superset use your @alg.team Google account. Power BI uses the shared @powerbi_view account — see the FAQ entry above.',
           'Гугл-таблицы и Superset — через Google-аккаунт @alg.team. Power BI — общая учётка @powerbi_view, см. вопрос выше.',
           'Google Sheets y Superset usan tu cuenta @alg.team. Power BI usa la cuenta compartida @powerbi_view — ver pregunta arriba.',
           'Google Sheets dan Superset memakai akun @alg.team. Power BI memakai akun bersama @powerbi_view — lihat pertanyaan di atas.',
           'Google Sheets dan Superset menggunakan akaun @alg.team. Power BI menggunakan akaun bersama @powerbi_view — lihat soalan di atas.')
    },
    {
      q: t('What is the difference between primary and secondary sales?', 'В чём разница между первичными и вторичными продажами?', '¿Cuál es la diferencia entre ventas primarias y secundarias?', 'Apa beda penjualan primer dan sekunder?', 'Apakah perbezaan antara jualan primer dan sekunder?'),
      a: t('Primary = first payment from a new customer. Secondary = any subsequent payment (prolongation). See the Glossary for the formal definition.',
           'Первичные = первая оплата от нового клиента. Вторичные = любая следующая оплата (пролонгация). Точное определение — в Глоссарии.',
           'Primarias = primer pago de un cliente nuevo. Secundarias = cualquier pago posterior (prolongación). Definición formal en el Glosario.',
           'Primer = pembayaran pertama dari pelanggan baru. Sekunder = pembayaran berikutnya (perpanjangan). Definisi formal di Glosarium.',
           'Primer = pembayaran pertama daripada pelanggan baru. Sekunder = pembayaran berikutnya (pelanjutan). Takrifan formal dalam Glosari.')
    },
    {
      q: t('Who do I contact for help with a specific BU?', 'К кому обратиться по конкретному бизнес-юниту?', '¿A quién contacto para ayuda con una BU específica?', 'Siapa yang harus saya hubungi untuk bantuan BU tertentu?', 'Siapa yang saya perlu hubungi untuk bantuan BU tertentu?'),
      a: t('See the Team page — each analyst owns one or more BUs. For dashboards or data issues, use the "Found a bug?" button.',
           'Смотрите страницу Команда — у каждого аналитика свои БЮ. По багам дэшбордов и данных — кнопка «Нашли баг?».',
           'Mira la página Equipo — cada analista cubre una o más BU. Para dashboards o datos rotos, usa "¿Encontraste un bug?".',
           'Lihat halaman Tim — setiap analis menangani satu atau lebih BU. Untuk masalah dasbor atau data, gunakan tombol "Menemukan bug?".',
           'Lihat halaman Pasukan — setiap penganalisis mengendalikan satu atau lebih BU. Untuk isu papan pemuka atau data, gunakan butang "Jumpa pepijat?".')
    },
    {
      q: t('How are cohorts defined?', 'Как определяются когорты?', '¿Cómo se definen las cohortes?', 'Bagaimana kohort didefinisikan?', 'Bagaimana kohort ditakrifkan?'),
      a: t('A cohort is grouped by the month of the first payment (or first lesson, depending on the metric). Curves are tracked from that anchor month forward.',
           'Когорта группируется по месяцу первой оплаты (или первого урока — зависит от метрики). Кривые строятся от этого опорного месяца.',
           'Una cohorte se agrupa por el mes del primer pago (o primera clase, según la métrica). Las curvas se siguen desde ese mes ancla.',
           'Kohort dikelompokkan berdasarkan bulan pembayaran pertama (atau pelajaran pertama, tergantung metrik). Kurva dilacak dari bulan acuan.',
           'Kohort dikumpulkan mengikut bulan pembayaran pertama (atau pelajaran pertama, bergantung metrik). Keluk dijejak dari bulan rujukan tersebut.')
    },
    {
      q: t('Where is the official metric glossary maintained?', 'Где живёт официальный глоссарий метрик?', '¿Dónde se mantiene el glosario oficial de métricas?', 'Di mana glosarium metrik resmi disimpan?', 'Di manakah glosari metrik rasmi disimpan?'),
      a: t('On Confluence (BI space). Access can be requested via the #help channel. Key entries are mirrored on the Glossary page here.',
           'В Confluence (пространство BI). Доступ запрашивается в #help-канале. Ключевые статьи продублированы на странице Глоссарий здесь.',
           'En Confluence (espacio BI). El acceso se pide en el canal #help. Las entradas clave están reflejadas en la página Glosario.',
           'Di Confluence (ruang BI). Akses diminta lewat kanal #help. Entri utama dicerminkan di halaman Glosarium ini.',
           'Di Confluence (ruang BI). Akses diminta melalui saluran #help. Entri utama dicerminkan di halaman Glosari ini.')
    }
  ];

  // ── Research ─────────────────────────────────────────────────
  const RESEARCH = {
    indonesia: [
      {
        file: 'H2A_Decline_Analysis_Board_Report.html',
        title: 'H2A Conversion Rate Decline Analysis — Board Report',
        date: '2026-05',
        tags: ['Indonesia', 'H2A', 'Conversion', 'Hypothesis-Testing', 'Jan–May 2026'],
        summary: t(
          'Board-level analytics report investigating the decline in Booking-to-Attendance (H2A) from Jan to May 2026 against 12 hypotheses across 50,510 booked leads. Concludes the decline is within-channel and systemic, not a channel mix problem.',
          'Аналитический отчёт для борда по падению конверсии Booking → Attendance (H2A) с января по май 2026, 12 гипотез на выборке 50 510 лидов. Вывод: падение — внутриканальное и системное, а не из-за смены канального микса.',
          'Reporte para el board sobre la caída de la conversión H2A entre enero y mayo de 2026; 12 hipótesis sobre 50 510 leads. Conclusión: la caída es sistémica dentro de cada canal, no un problema de mix.',
          'Laporan analitik untuk board mengenai penurunan konversi H2A dari Jan ke Mei 2026; 12 hipotesis pada 50.510 lead. Kesimpulan: penurunannya sistemik di dalam tiap kanal, bukan masalah mix kanal.',
          'Laporan analitik untuk board tentang penurunan penukaran H2A dari Jan ke Mei 2026; 12 hipotesis pada 50,510 lead. Kesimpulan: penurunan adalah sistemik dalam saluran, bukan masalah campuran saluran.'
        ),
        findings: [
          t('H2A fell from 39.1% (Jan) to 35.5% (May) — a 3.6pp drop across 50,510 leads.',
            'H2A упал с 39,1% (янв) до 35,5% (май) — −3,6 п.п. на выборке 50 510 лидов.',
            'H2A bajó de 39,1% (ene) a 35,5% (may) — −3,6pp sobre 50 510 leads.',
            'H2A turun dari 39,1% (Jan) ke 35,5% (Mei) — −3,6pp di 50.510 lead.',
            'H2A jatuh daripada 39.1% (Jan) ke 35.5% (Mei) — −3.6pp pada 50,510 lead.'),
          t('Autobooking surge hypothesis disproven: channel mix shift accounts for only 0.13pp; 97% of the decline is within-channel erosion.',
            'Гипотеза о росте автобукинга опровергнута: смена канального микса даёт всего 0,13 п.п., 97% падения — внутриканальная эрозия.',
            'Hipótesis del autobooking refutada: el cambio de mix da solo 0,13pp; 97% es erosión dentro del canal.',
            'Hipotesis lonjakan autobooking dibantah: pergeseran mix kanal hanya 0,13pp; 97% adalah erosi di dalam kanal.',
            'Hipotesis lonjakan autobooking disangkal: peralihan campuran saluran hanya 0.13pp; 97% adalah hakisan dalam saluran.'),
          t('Confirmation Step 1 was abandoned (24% → 0%), costing ~1.0pp; XTC system contamination drags H2A by 1.1–1.7pp every month.',
            'Confirmation Step 1 заброшен (24% → 0%), стоит ~1,0 п.п.; контаминация системы XTC отнимает 1,1–1,7 п.п. ежемесячно.',
            'El Confirmation Step 1 fue abandonado (24% → 0%), cuesta ~1,0pp; contaminación XTC resta 1,1–1,7pp mensual.',
            'Confirmation Step 1 ditinggalkan (24% → 0%), biaya ~1,0pp; kontaminasi XTC menarik H2A 1,1–1,7pp tiap bulan.',
            'Confirmation Step 1 ditinggalkan (24% → 0%), kos ~1.0pp; kontaminasi XTC menarik H2A 1.1–1.7pp setiap bulan.'),
          t('YoY gap widens from −3.2pp (Jan) to −6.8pp (May) while volume nearly doubled — a scaling vs. quality tradeoff.',
            'YoY-разрыв расширяется с −3,2 п.п. (янв) до −6,8 п.п. (май) при почти удвоившемся объёме — конфликт масштабирования и качества.',
            'La brecha YoY se amplía de −3,2pp (ene) a −6,8pp (may) mientras el volumen casi se duplicó — tradeoff escala vs. calidad.',
            'Gap YoY melebar dari −3,2pp (Jan) ke −6,8pp (Mei) sementara volume hampir dua kali lipat — tradeoff skala vs. kualitas.',
            'Jurang YoY melebar daripada −3.2pp (Jan) ke −6.8pp (Mei) sementara volum hampir dua kali ganda — tradeoff skala vs. kualiti.')
        ]
      },
      {
        file: 'H2A_Root_Cause_Board_Briefing.html',
        title: 'H2A Decline — Root Cause Board Briefing (Product × Scale Problem)',
        date: '2026-05',
        tags: ['Indonesia', 'H2A', 'Root-Cause', 'Math Tutoring', 'Coding Knight', 'Oaxaca-Blinder'],
        summary: t(
          'Multidimensional root-cause briefing reframing the H2A decline as a product-and-scale issue (not a people/manager problem) using Oaxaca-Blinder decomposition across course, channel, age and absence.',
          'Многомерный root-cause-брифинг: падение H2A — это продуктовая и масштабная проблема, а не вопрос людей/менеджеров. Декомпозиция Oaxaca-Blinder по курсам, каналам, возрасту и абсентеизму.',
          'Briefing de causa raíz que replantea la caída de H2A como un problema de producto y escala (no de personas), con descomposición Oaxaca-Blinder por curso, canal, edad y ausencia.',
          'Briefing root-cause multidimensi yang membingkai ulang penurunan H2A sebagai masalah produk × skala (bukan orang/manajer), dengan dekomposisi Oaxaca-Blinder per kursus, kanal, usia, dan absensi.',
          'Taklimat root-cause multidimensi yang membingkai semula penurunan H2A sebagai masalah produk × skala (bukan orang/pengurus), dengan dekomposisi Oaxaca-Blinder mengikut kursus, saluran, umur, dan ketidakhadiran.'
        ),
        findings: [
          t('Clean H2A (excl. XTC) fell 40.2% → 36.8% (−3.4pp); YoY gap to May 2025 is −6.8pp (42.3% → 35.5%).',
            'Чистый H2A (без XTC) упал 40,2% → 36,8% (−3,4 п.п.); YoY-разрыв к маю 2025 — −6,8 п.п. (42,3% → 35,5%).',
            'H2A limpio (sin XTC) cayó 40,2% → 36,8% (−3,4pp); brecha YoY a may 2025 = −6,8pp (42,3% → 35,5%).',
            'H2A bersih (tanpa XTC) turun 40,2% → 36,8% (−3,4pp); gap YoY ke Mei 2025 = −6,8pp (42,3% → 35,5%).',
            'H2A bersih (tanpa XTC) jatuh 40.2% → 36.8% (−3.4pp); jurang YoY ke Mei 2025 = −6.8pp (42.3% → 35.5%).'),
          t('Math Tutoring is the dominant driver: H2A 53.5% → 41.3% while volume share tripled 16% → 48%, with a cliff in Week 13 (Mar 30).',
            'Math Tutoring — главный драйвер: H2A 53,5% → 41,3% при росте доли по объёму с 16% до 48%, обрыв в неделе 13 (30 марта).',
            'Math Tutoring es el motor dominante: H2A 53,5% → 41,3% mientras la cuota de volumen pasó de 16% a 48%, con cliff en la semana 13 (30 mar).',
            'Math Tutoring adalah pendorong utama: H2A 53,5% → 41,3% sementara share volume naik 16% → 48%, dengan jurang di Minggu 13 (30 Mar).',
            'Math Tutoring adalah pemacu utama: H2A 53.5% → 41.3% sementara bahagian volum tiga kali ganda 16% → 48%, dengan cliff pada Minggu 13 (30 Mac).'),
          t('Coding Knight has wrong age targeting: ages 5–6 convert 28–34%, ages 7+ only 4–8%; share of 7+ grew from 27% to 45%.',
            'У Coding Knight неверный возрастной таргет: 5–6 лет конвертят 28–34%, 7+ — только 4–8%; доля 7+ выросла с 27% до 45%.',
            'Coding Knight tiene targeting de edad equivocado: 5–6 años convierte 28–34%, 7+ solo 4–8%; share de 7+ pasó de 27% a 45%.',
            'Coding Knight salah target usia: usia 5–6 konversi 28–34%, usia 7+ hanya 4–8%; share 7+ naik dari 27% ke 45%.',
            'Coding Knight mempunyai sasaran umur yang salah: umur 5–6 menukar 28–34%, umur 7+ hanya 4–8%; bahagian 7+ meningkat dari 27% ke 45%.'),
          t('Formal Oaxaca-Blinder: channel mix shift = +0.13pp (~4%), within-channel rate change = −3.51pp (~96%).',
            'Формально Oaxaca-Blinder: смена канального микса = +0,13 п.п. (~4%), изменение рейта внутри канала = −3,51 п.п. (~96%).',
            'Oaxaca-Blinder formal: cambio de mix de canal = +0,13pp (~4%), cambio dentro del canal = −3,51pp (~96%).',
            'Formal Oaxaca-Blinder: pergeseran mix kanal = +0,13pp (~4%), perubahan dalam-kanal = −3,51pp (~96%).',
            'Formal Oaxaca-Blinder: peralihan campuran saluran = +0.13pp (~4%), perubahan kadar dalam-saluran = −3.51pp (~96%).')
        ]
      },
      {
        file: 'LQS_Slide.html',
        title: 'Lead Quality Score (LQS) — Month-over-Month Quality Tracking',
        date: '2026-04',
        tags: ['Indonesia', 'LQS', 'Lead Quality', 'L2B', 'Methodology'],
        summary: t(
          'Introduces the Lead Quality Score (LQS = Actual L2B% ÷ Expected L2B% × 100) to separate channel-mix shifts from within-channel quality erosion. March 2026 is flagged as the first ever breach of the 90 alert threshold.',
          'Метрика LQS = Actual L2B% / Expected L2B% × 100 — разделяет смену канального микса и эрозию качества внутри канала. Март 2026 — первый случай пробития порога 90.',
          'Introduce el LQS = L2B Real / L2B Esperado × 100 para separar mix de canal y erosión interna. Marzo 2026 es la primera vez que cae bajo el umbral 90.',
          'Memperkenalkan LQS = L2B Aktual / L2B Diharapkan × 100 untuk memisahkan pergeseran mix kanal dan erosi kualitas dalam-kanal. Maret 2026 adalah pelanggaran ambang 90 pertama kali.',
          'Memperkenalkan LQS = L2B Sebenar / L2B Dijangka × 100 untuk memisahkan peralihan campuran saluran dan hakisan kualiti dalam-saluran. Mac 2026 adalah pelanggaran ambang 90 buat pertama kali.'
        ),
        findings: [
          t('March 2026 LQS = 86.5 — first month ever in the alert zone (<90), 13.5pp below benchmark.',
            'LQS марта 2026 = 86,5 — впервые в alert-зоне (<90), на 13,5 п.п. ниже бенчмарка.',
            'LQS mar 2026 = 86,5 — primera vez en zona de alerta (<90), 13,5pp debajo del benchmark.',
            'LQS Mar 2026 = 86,5 — pertama kali di zona alert (<90), 13,5pp di bawah benchmark.',
            'LQS Mac 2026 = 86.5 — kali pertama dalam zon alert (<90), 13.5pp di bawah penanda aras.'),
          t('Channel baselines: Facebook 65%, TikTok 60%, Other/SMM 40%, Google only 28% (Jan–Feb 2025 reference).',
            'Бейзлайны каналов: Facebook 65%, TikTok 60%, Other/SMM 40%, Google всего 28% (референс янв–фев 2025).',
            'Líneas base por canal: Facebook 65%, TikTok 60%, Otros/SMM 40%, Google solo 28% (ref. ene-feb 2025).',
            'Baseline kanal: Facebook 65%, TikTok 60%, Other/SMM 40%, Google hanya 28% (referensi Jan–Feb 2025).',
            'Garis dasar saluran: Facebook 65%, TikTok 60%, Lain/SMM 40%, Google hanya 28% (rujukan Jan–Feb 2025).'),
          t('Mar 2026 mix: Facebook 48.8% / Google 36.3% / Other 14.8% / TikTok 0.1% → Expected L2B 47.86% vs Actual 41.40%.',
            'Микс марта 2026: Facebook 48,8% / Google 36,3% / Other 14,8% / TikTok 0,1% → Expected L2B 47,86% vs Actual 41,40%.',
            'Mix mar 2026: Facebook 48,8% / Google 36,3% / Otros 14,8% / TikTok 0,1% → L2B esperado 47,86% vs real 41,40%.',
            'Mix Mar 2026: Facebook 48,8% / Google 36,3% / Other 14,8% / TikTok 0,1% → L2B Diharapkan 47,86% vs Aktual 41,40%.',
            'Campuran Mac 2026: Facebook 48.8% / Google 36.3% / Lain 14.8% / TikTok 0.1% → L2B Dijangka 47.86% vs Sebenar 41.40%.'),
          t('Residual LQC (within-channel quality loss) explains ~18% of total L2B drop — confirms the problem is not only Google mix shift.',
            'Остаточный LQC (потеря качества внутри канала) объясняет ~18% общего падения L2B — подтверждает, что проблема не только в росте Google.',
            'LQC residual (pérdida de calidad intra-canal) explica ~18% de la caída total de L2B — confirma que no es solo mix de Google.',
            'LQC residual (kerugian kualitas dalam-kanal) menjelaskan ~18% dari total penurunan L2B — bukan hanya pergeseran Google.',
            'LQC baki (kerugian kualiti dalam-saluran) menjelaskan ~18% daripada jumlah penurunan L2B — bukan hanya peralihan Google.')
        ]
      },
      {
        file: 'March_2026_Sales_Analysis.html',
        title: 'March 2026 — What Happened to Sales? (Root Cause Analysis)',
        date: '2026-04',
        tags: ['Indonesia', 'Sales', 'Revenue Drop', 'March 2026', 'L2B'],
        summary: t(
          'Multi-slide sales intelligence deck for B2C Indonesia diagnosing the March 2026 revenue collapse as a structural pipeline issue, since A2S conversion stayed stable.',
          'Многослайдовый sales-intelligence-доклад для B2C Indonesia: коллапс выручки марта 2026 — структурная проблема pipeline, A2S остался стабильным.',
          'Deck de sales intelligence para B2C Indonesia que diagnostica el colapso de ingresos de marzo 2026 como problema estructural del pipeline; A2S se mantuvo estable.',
          'Deck intelijen penjualan untuk B2C Indonesia: keruntuhan revenue Maret 2026 adalah masalah pipeline struktural, A2S tetap stabil.',
          'Dek perisikan jualan untuk B2C Indonesia: keruntuhan hasil Mac 2026 adalah masalah pipeline berstruktur, A2S kekal stabil.'
        ),
        findings: [
          t('Revenue Feb → Mar: −39% ($362,605 → $220,910); sales −31% (1,153 → 799).',
            'Выручка фев → март: −39% ($362 605 → $220 910); продажи −31% (1 153 → 799).',
            'Ingresos feb → mar: −39% ($362 605 → $220 910); ventas −31% (1 153 → 799).',
            'Revenue Feb → Mar: −39% ($362.605 → $220.910); sales −31% (1.153 → 799).',
            'Hasil Feb → Mac: −39% ($362,605 → $220,910); jualan −31% (1,153 → 799).'),
          t('A2S held stable 31.8% → 32.3% (+0.5pp) — sales team did not fail; the pipeline collapsed.',
            'A2S стабилен 31,8% → 32,3% (+0,5 п.п.) — сейлзы не подвели; обвалился pipeline.',
            'A2S estable 31,8% → 32,3% (+0,5pp) — el equipo no falló; el pipeline se cayó.',
            'A2S stabil 31,8% → 32,3% (+0,5pp) — tim sales tidak gagal; pipeline yang runtuh.',
            'A2S stabil 31.8% → 32.3% (+0.5pp) — pasukan jualan tidak gagal; pipeline yang runtuh.'),
          t('L2B% collapsed 67.5% (Jan) → 57.6% (Feb) → 41.4% (Mar) — a −16.2pp drop, the smoking gun.',
            'L2B% обвалился 67,5% (янв) → 57,6% (фев) → 41,4% (март) — −16,2 п.п., главный виновник.',
            'L2B% colapsó 67,5% (ene) → 57,6% (feb) → 41,4% (mar) — −16,2pp, el causante principal.',
            'L2B% runtuh 67,5% (Jan) → 57,6% (Feb) → 41,4% (Mar) — −16,2pp, biang kerok.',
            'L2B% runtuh 67.5% (Jan) → 57.6% (Feb) → 41.4% (Mac) — −16.2pp, punca utama.'),
          t('Four structural causes: Google share 16% → 40%, spam/invalid leads ×3–5, 5 inactive BMs (~3,500 bookings/month lost), active TCMs −16% (169 → 144).',
            'Четыре структурные причины: доля Google 16% → 40%, спам ×3–5, 5 неактивных BM (~3 500 bookings/мес потеряно), активных TCM −16% (169 → 144).',
            'Cuatro causas estructurales: cuota de Google 16% → 40%, leads spam ×3–5, 5 BMs inactivos (~3 500 bookings/mes perdidos), TCMs activos −16% (169 → 144).',
            'Empat penyebab struktural: share Google 16% → 40%, lead spam ×3–5, 5 BM nonaktif (~3.500 booking/bulan hilang), TCM aktif −16% (169 → 144).',
            'Empat punca berstruktur: bahagian Google 16% → 40%, lead spam ×3–5, 5 BM tidak aktif (~3,500 tempahan/bulan hilang), TCM aktif −16% (169 → 144).')
        ]
      },
      {
        file: 'organic_calculator.html',
        title: 'Organic vs Paid Traffic — Calculator & Reference Guide',
        date: '2026-04',
        tags: ['Indonesia', 'Organic', 'CPC', 'SMM', 'Funnel', 'Calculator'],
        summary: t(
          'Interactive analytics tool comparing organic (SMM) vs paid (CPC) traffic across a funnel — built on 267,413 leads (Dec 2024 – Apr 2026) with a calculator, channel comparison, funnel visualisation and a metrics reference.',
          'Интерактивный инструмент сравнения органики (SMM) и платного (CPC) трафика по воронке — 267 413 лидов (дек 2024 – апр 2026): калькулятор, сравнение каналов, визуализация воронки и справочник метрик.',
          'Herramienta interactiva que compara tráfico orgánico (SMM) vs pago (CPC) en el funnel — 267 413 leads (dic 2024 – abr 2026): calculadora, comparación de canales, visualización del funnel y referencia de métricas.',
          'Alat interaktif yang membandingkan trafik organik (SMM) vs berbayar (CPC) di funnel — 267.413 lead (Des 2024 – Apr 2026): kalkulator, perbandingan kanal, visualisasi funnel, dan referensi metrik.',
          'Alat interaktif yang membandingkan trafik organik (SMM) vs berbayar (CPC) merentas funnel — 267,413 lead (Dis 2024 – Apr 2026): kalkulator, perbandingan saluran, visualisasi funnel, dan rujukan metrik.'
        ),
        findings: [
          t('Dataset spans 267,413 leads from Dec 2024 to Apr 2026 (orai.csv snapshot 2026-04-13).',
            'Датасет — 267 413 лидов с дек 2024 по апр 2026 (orai.csv, снапшот 2026-04-13).',
            'Dataset: 267 413 leads de dic 2024 a abr 2026 (orai.csv, snapshot 2026-04-13).',
            'Dataset 267.413 lead dari Des 2024 hingga Apr 2026 (orai.csv snapshot 2026-04-13).',
            'Dataset 267,413 lead dari Dis 2024 hingga Apr 2026 (orai.csv snapshot 2026-04-13).'),
          t('Compares organic vs paid on KPIs, conversion rates and revenue-per-lead (RPL) across top-10 channels.',
            'Сравнение органики и платного по KPI, конверсиям и revenue-per-lead (RPL) по топ-10 каналам.',
            'Compara orgánico vs pago en KPIs, conversiones y revenue por lead (RPL) en los top-10 canales.',
            'Membandingkan organik vs berbayar pada KPI, konversi, dan revenue-per-lead (RPL) di 10 kanal teratas.',
            'Membandingkan organik vs berbayar pada KPI, penukaran, dan hasil-per-lead (RPL) merentas 10 saluran teratas.'),
          t('Configurable funnel with views → leads chain, warm/direct split, and per-platform benchmark cards.',
            'Конфигурируемая воронка views → leads, разделение warm/direct и карточки бенчмарков по платформам.',
            'Funnel configurable views → leads, división warm/direct y tarjetas de benchmark por plataforma.',
            'Funnel yang dapat dikonfigurasi views → lead, pemisahan warm/direct, dan kartu benchmark per platform.',
            'Funnel yang boleh dikonfigurasi pandangan → lead, pemisahan warm/direct, dan kad penanda aras setiap platform.'),
          t('Sortable reference of metric formulas (L2Sale, AOV, RPL, etc.) for analyst use.',
            'Сортируемый справочник формул метрик (L2Sale, AOV, RPL и т.д.) для аналитиков.',
            'Referencia ordenable de fórmulas (L2Sale, AOV, RPL, etc.) para uso del analista.',
            'Referensi formula metrik (L2Sale, AOV, RPL, dll.) yang dapat diurutkan untuk analis.',
            'Rujukan formula metrik (L2Sale, AOV, RPL, dll.) yang boleh diisih untuk penganalisis.')
        ]
      },
      {
        file: 'organic_goal.html',
        title: 'Q2 — Organic Path to Sales Goal',
        date: '2026-04',
        tags: ['Indonesia', 'Q2 2026', 'Organic', 'Forecast', 'SMM', 'Goal-Setting'],
        summary: t(
          'Interactive Q2 planning calculator modelling how many organic sales are needed to hit the overall Q2 target, with sliders for video views, views→lead rate, additional SMM leads, L2Sale and AOV.',
          'Интерактивный калькулятор планирования Q2: сколько органических продаж нужно для общего таргета Q2, со слайдерами по views, конверсии views→lead, доп. SMM-лидам, L2Sale и AOV.',
          'Calculadora interactiva del plan Q2: cuántas ventas orgánicas se necesitan para el objetivo Q2, con sliders de views, views→lead, leads adicionales SMM, L2Sale y AOV.',
          'Kalkulator perencanaan Q2 interaktif: berapa banyak sales organik yang dibutuhkan untuk target Q2, dengan slider views, views→lead, lead SMM tambahan, L2Sale, dan AOV.',
          'Kalkulator perancangan Q2 interaktif: berapa banyak jualan organik yang diperlukan untuk sasaran Q2, dengan slider pandangan, pandangan→lead, lead SMM tambahan, L2Sale, dan AOV.'
        ),
        findings: [
          t('Q2 target: 804 total sales = 667 paid (83%) + 137 organic (17% share goal).',
            'Цель Q2: 804 продажи = 667 платных (83%) + 137 органики (17%).',
            'Meta Q2: 804 ventas = 667 pagas (83%) + 137 orgánicas (17%).',
            'Target Q2: 804 sales = 667 berbayar (83%) + 137 organik (17%).',
            'Sasaran Q2: 804 jualan = 667 berbayar (83%) + 137 organik (17%).'),
          t('Baseline: 50M video views, views→lead 0.001% (target 0.005%), 3,500 direct SMM leads (Q1 actual), L2Sale 3.6%, AOV $341.',
            'База: 50 млн views, views→lead 0,001% (цель 0,005%), 3 500 прямых SMM-лидов (факт Q1), L2Sale 3,6%, AOV $341.',
            'Línea base: 50M views, views→lead 0,001% (objetivo 0,005%), 3 500 leads SMM directos (Q1), L2Sale 3,6%, AOV $341.',
            'Baseline: 50jt views, views→lead 0,001% (target 0,005%), 3.500 lead SMM langsung (Q1), L2Sale 3,6%, AOV $341.',
            'Garis dasar: 50jt pandangan, pandangan→lead 0.001% (sasaran 0.005%), 3,500 lead SMM langsung (Q1), L2Sale 3.6%, AOV $341.'),
          t('Channel benchmarks: Instagram L2Sale 13.23%, best-channel 15.92% vs general SMM 3.6%.',
            'Бенчмарки каналов: Instagram L2Sale 13,23%, лучший канал 15,92% против общего SMM 3,6%.',
            'Benchmarks: Instagram L2Sale 13,23%, mejor canal 15,92% vs SMM general 3,6%.',
            'Benchmark kanal: Instagram L2Sale 13,23%, kanal terbaik 15,92% vs SMM umum 3,6%.',
            'Penanda aras: Instagram L2Sale 13.23%, saluran terbaik 15.92% vs SMM umum 3.6%.'),
          t('Default scenario yields 144 organic sales (+7 above the 137 goal) and ~$49K organic revenue.',
            'Сценарий по умолчанию даёт 144 органических продажи (+7 над целью 137) и ~$49K выручки.',
            'Escenario por defecto: 144 ventas orgánicas (+7 sobre 137) y ~$49K de revenue.',
            'Skenario default menghasilkan 144 sales organik (+7 di atas 137) dan ~$49K revenue.',
            'Senario lalai menghasilkan 144 jualan organik (+7 di atas 137) dan ~$49K hasil.')
        ]
      },
      {
        file: 'price_analytics_v2.html',
        title: 'Price-per-Lesson Analytics — Secondary Sales by Cohort',
        date: '2026-03',
        tags: ['Indonesia', 'Pricing', 'Cohort', 'Retention', 'Repeat Sales', 'UZS'],
        summary: t(
          'Cohort-based analysis testing whether price-per-lesson holds across repeat (secondary) payments, grouped by first-payment month from Dec 2024 to Mar 2026, with package-level breakdowns and student-level transition stats. Prices in UZS.',
          'Когортный анализ: держится ли цена за урок на повторных оплатах. Группировка по месяцу первой оплаты с дек 2024 по март 2026, разбивки по пакетам и переходам студентов. Цены в UZS.',
          'Análisis por cohorte: ¿se mantiene el precio por clase en los pagos repetidos? Agrupado por mes del primer pago (dic 2024 – mar 2026), con desgloses por paquete y transiciones. Precios en UZS.',
          'Analisis kohort: apakah harga per pelajaran bertahan di pembayaran berulang? Dikelompokkan per bulan pembayaran pertama (Des 2024 – Mar 2026), dengan rincian paket dan transisi siswa. Harga dalam UZS.',
          'Analisis kohort: adakah harga setiap pelajaran kekal pada pembayaran berulang? Dikumpulkan mengikut bulan pembayaran pertama (Dis 2024 – Mac 2026), dengan pecahan pakej dan peralihan pelajar. Harga dalam UZS.'
        ),
        findings: [
          t('Price does NOT hold: median price drops −5% at payment 1→2; transitions 2→3 and 3→4 stay roughly flat.',
            'Цена НЕ держится: медиана падает −5% на переходе 1→2; 2→3 и 3→4 примерно ровные.',
            'El precio NO se mantiene: la mediana cae −5% en 1→2; 2→3 y 3→4 se mantienen estables.',
            'Harga TIDAK bertahan: median turun −5% di pembayaran 1→2; 2→3 dan 3→4 relatif datar.',
            'Harga TIDAK kekal: median jatuh −5% pada pembayaran 1→2; 2→3 dan 3→4 kekal relatif rata.'),
          t('55% of students get a price reduction on their second payment (1,655 down vs 627 up vs 754 same out of 3,036).',
            '55% студентов получают снижение цены на второй оплате (1 655 вниз vs 627 вверх vs 754 без изменений из 3 036).',
            '55% de los alumnos reciben una rebaja en el segundo pago (1 655 baja vs 627 sube vs 754 igual de 3 036).',
            '55% siswa mendapat penurunan harga di pembayaran kedua (1.655 turun vs 627 naik vs 754 sama dari 3.036).',
            '55% pelajar menerima pengurangan harga pada pembayaran kedua (1,655 turun vs 627 naik vs 754 sama daripada 3,036).'),
          t('Cohort trend worsening: early cohorts (Jun–Aug 2025) ≈ 0% on 1→2; recent (Dec 2025 – Mar 2026) plunged to −13% to −16%.',
            'Когортный тренд ухудшается: ранние когорты (июн–авг 2025) ~0% на 1→2; свежие (дек 2025 – март 2026) — от −13% до −16%.',
            'Tendencia por cohorte empeorando: cohortes tempranas (jun–ago 2025) ≈ 0% en 1→2; recientes (dic 2025 – mar 2026) cayeron a −13% a −16%.',
            'Tren kohort memburuk: kohort awal (Jun–Agu 2025) ≈ 0% pada 1→2; kohort terbaru (Des 2025 – Mar 2026) anjlok ke −13% hingga −16%.',
            'Trend kohort semakin teruk: kohort awal (Jun–Ogo 2025) ≈ 0% pada 1→2; kohort terkini (Dis 2025 – Mac 2026) jatuh ke −13% hingga −16%.'),
          t('Package patterns: 8-lesson packs drop hardest (−13.6%, 65% pay less); 32-lesson packs hold 1→2 but drop −13% on 2→3; base price rose ~50% (118K → 177K UZS).',
            'Пакеты: 8-уроков падают сильнее всего (−13,6%, 65% платят меньше); 32-уроков держатся 1→2, но падают −13% на 2→3; базовая цена выросла ~50% (118K → 177K UZS).',
            'Paquetes: los de 8 clases caen más (−13,6%, 65% pagan menos); los de 32 clases se mantienen 1→2 pero caen −13% en 2→3; precio base subió ~50% (118K → 177K UZS).',
            'Pola paket: paket 8 pelajaran turun paling tajam (−13,6%, 65% bayar lebih sedikit); paket 32 pelajaran bertahan 1→2 tapi turun −13% di 2→3; harga dasar naik ~50% (118K → 177K UZS).',
            'Corak pakej: pakej 8 pelajaran jatuh paling teruk (−13.6%, 65% bayar kurang); pakej 32 pelajaran kekal 1→2 tapi jatuh −13% pada 2→3; harga asas naik ~50% (118K → 177K UZS).')
        ]
      }
    ],
    malaysia: [],
    latam: []
  };

  const RESEARCH_LABELS = {
    summary:    t('Summary',       'Краткое содержание', 'Resumen',         'Ringkasan',        'Ringkasan'),
    tags:       t('Tags',          'Теги',               'Etiquetas',       'Tag',              'Tag'),
    findings:   t('Key findings',  'Ключевые выводы',    'Conclusiones',    'Temuan utama',     'Penemuan utama'),
    open:       t('Open report',   'Открыть отчёт',      'Abrir informe',   'Buka laporan',     'Buka laporan')
  };

  window.Algonova.data = {
    dashboards: DASHBOARDS,
    glossary: GLOSSARY,
    team: TEAM,
    faq: FAQ,
    research: RESEARCH,
    researchLabels: RESEARCH_LABELS,
    buLabels: BU_LABELS
  };
})();

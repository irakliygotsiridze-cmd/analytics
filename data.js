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
      photo: 'assets/team/iraklii.jpg',
      initials: 'ИГ'
    },
    {
      name: t('Danila Zhilnikov', 'Данила Жильников', 'Danila Zhilnikov', 'Danila Zhilnikov', 'Danila Zhilnikov'),
      role: t('BI Analyst', 'BI-аналитик', 'BI Analyst', 'BI Analyst', 'BI Analyst'),
      bus: ['indonesia', 'malaysia'],
      contact: { url: 'https://chat.alg.team/algoritmika/messages/@danila.zhilnikov', label: '@danila.zhilnikov' },
      photo: 'assets/team/danila.jpg',
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

  window.Algonova.data = {
    dashboards: DASHBOARDS,
    glossary: GLOSSARY,
    team: TEAM,
    faq: FAQ,
    buLabels: BU_LABELS
  };
})();

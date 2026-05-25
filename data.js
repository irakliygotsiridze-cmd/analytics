/* All page data with translations.
   Dashboard names stay close to how the team uses them in source systems
   (mix of Russian and English) — only section headers, metrics and labels
   are translated. */

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

  // Update frequency shortcuts
  const U = {
    daily:      { en: 'Daily, for the previous day',                ru: 'Раз в день за предыдущий день',         es: 'Diario, del día anterior',           id: 'Setiap hari, untuk hari sebelumnya',  ms: 'Setiap hari, untuk hari sebelumnya' },
    monthly5:   { en: 'Monthly, around the 5th',                    ru: 'Раз в месяц около 5 числа',             es: 'Mensual, alrededor del día 5',       id: 'Bulanan, sekitar tanggal 5',          ms: 'Bulanan, sekitar 5 haribulan' },
    monthly10:  { en: 'Monthly, around the 10th–15th',              ru: 'Раз в месяц около 10–15 числа',         es: 'Mensual, alrededor del día 10–15',   id: 'Bulanan, sekitar tanggal 10–15',      ms: 'Bulanan, sekitar 10–15 haribulan' }
  };

  // ── Dashboards ────────────────────────────────────────────────
  const DASHBOARDS = {
    indonesia: [
      {
        section: S.management,
        items: [
          {
            name: 'ОПС (260403_Indo_Operational_v27)',
            metrics: {
              en: 'Primary + secondary revenue, average order value, average package sold, CAC by actual month, churn by actual month',
              ru: 'Выручка первичка+вторичка, средний чек, средний проданный пакет, CAC по фактическим месяцам, отток по фактическим месяцам',
              es: 'Ingresos primarios + secundarios, ticket medio, paquete medio vendido, CAC por mes real, churn por mes real',
              id: 'Pendapatan primer + sekunder, nilai pesanan rata-rata, paket rata-rata terjual, CAC per bulan aktual, churn per bulan aktual',
              ms: 'Hasil primer + sekunder, nilai pesanan purata, pakej purata terjual, CAC mengikut bulan sebenar, churn mengikut bulan sebenar'
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
              ru: 'Выручка первичные продажи, средний чек, L2B, маржа',
              es: 'Ingresos ventas primarias, ticket medio, L2B, margen',
              id: 'Pendapatan penjualan primer, AOV, L2B, margin',
              ms: 'Hasil jualan primer, AOV, L2B, margin'
            },
            update: U.daily,
            platform: 'Power BI',
            url: 'https://app.powerbi.com/groups/7282848d-9054-4ac2-b5db-21bc18b68cf1/reports/5a03c358-bdab-496d-853a-cbe8050de525/1a0b8c89290ba9e93705?experience=power-bi'
          },
          {
            name: { en: 'Marketing report by Elly', ru: 'Маркетинговый отчёт от Elly', es: 'Reporte de marketing de Elly', id: 'Laporan marketing Elly', ms: 'Laporan pemasaran Elly' },
            metrics: { en: 'ROAS, LTV1/CAC', ru: 'ROAS, LTV1/CAC', es: 'ROAS, LTV1/CAC', id: 'ROAS, LTV1/CAC', ms: 'ROAS, LTV1/CAC' },
            update: U.daily,
            platform: 'Power BI',
            url: 'https://app.powerbi.com/groups/a3b6710a-af58-4f33-a7f6-2f361a8ca651/reports/a1611f97-8e5d-4fff-84e3-cf48013221f8?experience=power-bi'
          },
          {
            name: { en: 'Auto-distribution', ru: 'Автодистрибуция', es: 'Auto-distribución', id: 'Distribusi otomatis', ms: 'Pengedaran auto' },
            metrics: { en: 'H2Conf, Lobby, Time', ru: 'H2Conf, Lobby, Time', es: 'H2Conf, Lobby, Time', id: 'H2Conf, Lobby, Time', ms: 'H2Conf, Lobby, Time' },
            update: U.daily,
            platform: 'Power BI',
            url: 'https://app.powerbi.com/groups/7282848d-9054-4ac2-b5db-21bc18b68cf1/reports/5a03c358-bdab-496d-853a-cbe8050de525/1a0b8c89290ba9e93705?experience=power-bi'
          },
          {
            name: 'TCM Dashboard',
            metrics: { en: 'H2Conf, Lobby, Time', ru: 'H2Conf, Lobby, Time', es: 'H2Conf, Lobby, Time', id: 'H2Conf, Lobby, Time', ms: 'H2Conf, Lobby, Time' },
            update: U.daily,
            platform: 'Power BI',
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
            update: U.daily,
            platform: 'Power BI',
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
            update: U.daily,
            platform: 'Power BI',
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
            update: U.daily,
            platform: 'Power BI',
            url: 'https://app.powerbi.com/groups/7282848d-9054-4ac2-b5db-21bc18b68cf1/reports/9be308b0-8f86-4593-b4f2-09131c9e146b/ReportSectionb781eb3a4d1d9203ff88?experience=power-bi'
          },
          {
            name: 'Attendance',
            metrics: { en: '% of scheduled lessons', ru: '% уроков по расписанию', es: '% de clases programadas', id: '% pelajaran sesuai jadwal', ms: '% pelajaran mengikut jadual' },
            update: U.daily,
            platform: 'Superset',
            url: 'https://superset.alg.team/superset/dashboard/214/'
          },
          {
            name: 'Teacher Salary',
            metrics: { en: 'Teacher salary calculation', ru: 'Расчёт зарплаты преподавателей', es: 'Cálculo de salarios docentes', id: 'Perhitungan gaji guru', ms: 'Pengiraan gaji guru' },
            update: U.daily,
            platform: 'Superset',
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
              ru: 'Выручка первичные продажи, средний чек, L2P, time to response',
              es: 'Ingresos ventas primarias, ticket medio, L2P, tiempo de respuesta',
              id: 'Pendapatan penjualan primer, AOV, L2P, waktu respons',
              ms: 'Hasil jualan primer, AOV, L2P, masa tindak balas'
            },
            update: U.daily,
            platform: 'Power BI',
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
            update: U.daily,
            platform: 'Power BI',
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
              ru: 'Выручка первичные продажи, средний чек, L2B',
              es: 'Ingresos ventas primarias, ticket medio, L2B',
              id: 'Pendapatan penjualan primer, AOV, L2B',
              ms: 'Hasil jualan primer, AOV, L2B'
            },
            update: U.daily,
            platform: 'Power BI',
            url: 'https://app.powerbi.com/groups/7282848d-9054-4ac2-b5db-21bc18b68cf1/reports/5a03c358-bdab-496d-853a-cbe8050de525/1a0b8c89290ba9e93705?experience=power-bi'
          },
          {
            name: { en: 'Marketing report by Elly', ru: 'Маркетинговый отчёт от Elly', es: 'Reporte de marketing de Elly', id: 'Laporan marketing Elly', ms: 'Laporan pemasaran Elly' },
            metrics: { en: 'ROAS, LTV1/CAC', ru: 'ROAS, LTV1/CAC', es: 'ROAS, LTV1/CAC', id: 'ROAS, LTV1/CAC', ms: 'ROAS, LTV1/CAC' },
            update: U.daily,
            platform: 'Power BI',
            url: 'https://app.powerbi.com/groups/a3b6710a-af58-4f33-a7f6-2f361a8ca651/reports/a1611f97-8e5d-4fff-84e3-cf48013221f8?experience=power-bi'
          },
          {
            name: { en: 'Auto-distribution', ru: 'Автодистрибуция', es: 'Auto-distribución', id: 'Distribusi otomatis', ms: 'Pengedaran auto' },
            metrics: { en: 'H2Conf, Lobby, Time', ru: 'H2Conf, Lobby, Time', es: 'H2Conf, Lobby, Time', id: 'H2Conf, Lobby, Time', ms: 'H2Conf, Lobby, Time' },
            update: U.daily,
            platform: 'Power BI',
            url: 'https://app.powerbi.com/groups/7282848d-9054-4ac2-b5db-21bc18b68cf1/reports/5a03c358-bdab-496d-853a-cbe8050de525/1a0b8c89290ba9e93705?experience=power-bi'
          }
        ]
      }
    ],
    latam: []
  };

  // ── Glossary ──────────────────────────────────────────────────
  const GLOSSARY = [
    {
      name: { en: 'Paid (unique) students', ru: 'Платные (уникальные) дети', es: 'Estudiantes pagos (únicos)', id: 'Siswa berbayar (unik)', ms: 'Pelajar berbayar (unik)' },
      meaning: {
        en: 'Students whose paid classes generate revenue for the period. Attendance is irrelevant — they just have an active schedule. One student = one account.',
        ru: 'Дети, оплата занятий которых приносит нам прибыль. Могут ходить, могут не ходить — здесь это не важно. У них есть расписание в конкретный период. 1 ребёнок = 1 учётка.',
        es: 'Alumnos cuyas clases pagadas generan ingresos en el periodo. La asistencia no importa — solo deben tener horario activo. 1 alumno = 1 cuenta.',
        id: 'Siswa yang kelas berbayarnya menghasilkan pendapatan untuk periode tersebut. Kehadiran tidak relevan — yang penting mereka punya jadwal aktif. 1 siswa = 1 akun.',
        ms: 'Pelajar yang kelas berbayarnya menjana hasil untuk tempoh tersebut. Kehadiran tidak penting — mereka hanya perlu ada jadual aktif. 1 pelajar = 1 akaun.'
      },
      formula: {
        en: 'Students with a scheduled lesson in the LMS during the given period (week, month, etc.).',
        ru: 'Дети с проставленным расписанием в ЛМС за конкретный период (например, неделя или месяц).',
        es: 'Alumnos con una clase programada en el LMS durante el periodo (semana, mes, etc.).',
        id: 'Siswa dengan jadwal pelajaran di LMS selama periode tertentu (mingguan, bulanan, dll.).',
        ms: 'Pelajar dengan pelajaran berjadual dalam LMS untuk tempoh tertentu (minggu, bulan, dll.).'
      }
    },
    {
      name: { en: 'Active students', ru: 'Активные дети', es: 'Alumnos activos', id: 'Siswa aktif', ms: 'Pelajar aktif' },
      meaning: {
        en: 'Students who attend regularly and plan to continue. They have higher retention, are more engaged, and qualify for game days. Always based on the current schedule.',
        ru: 'Активные дети посещают занятия регулярно и планируют это делать дальше. У них выше ретеншн, они вовлечённее, могут быть допущены до гейм-дней. Всегда по актуальному расписанию.',
        es: 'Alumnos que asisten regularmente y planean continuar. Tienen mayor retención, están más comprometidos y pueden acceder a los game days. Siempre con horario actual.',
        id: 'Siswa yang hadir secara teratur dan berencana untuk melanjutkan. Retensi mereka lebih tinggi, lebih terlibat, dan memenuhi syarat untuk game days. Selalu berdasarkan jadwal terkini.',
        ms: 'Pelajar yang hadir secara tetap dan merancang untuk meneruskan. Retensi mereka lebih tinggi, lebih komited dan layak untuk game days. Sentiasa berdasarkan jadual semasa.'
      },
      formula: {
        en: 'Unique students AND not "missed" at least once in the last 4 lessons AND has a scheduled lesson within −7 / +7 days from today.',
        ru: 'Уникальные дети И 4 последних занятия хотя бы раз не miss (после 4 занятий уже не общаешься с родителем) И есть занятие в расписании −7 / +7 дней (то есть было неделю назад и запланировано на неделю вперёд).',
        es: 'Alumnos únicos Y no faltó ≥1 vez en las últimas 4 clases Y tiene clase programada dentro de −7 / +7 días.',
        id: 'Siswa unik DAN tidak "miss" minimal 1 dari 4 pelajaran terakhir DAN ada pelajaran terjadwal dalam −7 / +7 hari.',
        ms: 'Pelajar unik DAN tidak "miss" sekurang-kurangnya 1 daripada 4 pelajaran terakhir DAN mempunyai pelajaran berjadual dalam −7 / +7 hari.'
      }
    },
    {
      name: { en: 'Churn (period)', ru: 'Отток в заданный период', es: 'Churn (en el periodo)', id: 'Churn (periode)', ms: 'Churn (tempoh)' },
      meaning: {
        en: 'Number of students who left during the period.',
        ru: 'Количество детей, покинувших курсы в заданный период.',
        es: 'Número de alumnos que abandonaron durante el periodo.',
        id: 'Jumlah siswa yang keluar selama periode tersebut.',
        ms: 'Bilangan pelajar yang berhenti selama tempoh tersebut.'
      },
      formula: {
        en: 'Absolute: (EOP unique students N) − (BOP unique students N). Percent: (EOP − BOP) / (BOP + new students in period) × 100%.',
        ru: 'Абсолют: EOP уник. дети N − BOP уник. дети N. Процент: (EOP − BOP) / (BOP + пришедшие в период) × 100%.',
        es: 'Absoluto: alumnos únicos EOP N − BOP N. Porcentaje: (EOP − BOP) / (BOP + nuevos del periodo) × 100%.',
        id: 'Absolut: siswa unik EOP N − BOP N. Persen: (EOP − BOP) / (BOP + siswa baru periode) × 100%.',
        ms: 'Mutlak: pelajar unik EOP N − BOP N. Peratus: (EOP − BOP) / (BOP + pelajar baru tempoh) × 100%.'
      }
    },
    {
      name: { en: 'Prolongation', ru: 'Пролонгация', es: 'Prolongación', id: 'Perpanjangan', ms: 'Pelanjutan' },
      meaning: {
        en: 'Any subsequent payment after the first one, regardless of size.',
        ru: 'Следующая оплата — какая бы она ни была.',
        es: 'Cualquier pago posterior al primero, sin importar el tamaño.',
        id: 'Pembayaran berikutnya setelah pembayaran pertama, berapapun jumlahnya.',
        ms: 'Pembayaran berikutnya selepas yang pertama, tidak kira saiznya.'
      },
      formula: {
        en: 'Counted at the moment payment N+1 lands for a customer who already has payment N.',
        ru: 'Считается в момент поступления оплаты N+1 от клиента, у которого уже была оплата N.',
        es: 'Se cuenta cuando llega el pago N+1 de un cliente que ya tenía pago N.',
        id: 'Dihitung saat pembayaran N+1 masuk dari pelanggan yang sudah memiliki pembayaran N.',
        ms: 'Dikira pada masa pembayaran N+1 diterima daripada pelanggan yang sudah mempunyai pembayaran N.'
      }
    },
    {
      name: { en: 'LTV (Lifetime Value)', ru: 'LTV (Lifetime Value)', es: 'LTV (Lifetime Value)', id: 'LTV (Lifetime Value)', ms: 'LTV (Lifetime Value)' },
      meaning: {
        en: 'Total revenue expected from a customer over the lifetime of the relationship.',
        ru: 'Совокупная выручка, которую мы ожидаем получить от клиента за всё время отношений.',
        es: 'Ingresos totales esperados de un cliente durante toda la relación.',
        id: 'Total pendapatan yang diharapkan dari satu pelanggan sepanjang masa hubungan.',
        ms: 'Jumlah hasil yang dijangka daripada pelanggan sepanjang tempoh hubungan.'
      },
      formula: {
        en: 'Σ revenue per cohort / cohort size. Reported as actual + forecast based on cohort-aged retention curves.',
        ru: 'Σ выручки по когорте / размер когорты. Считается фактически + прогнозно на основе кривых ретеншна по возрасту когорты.',
        es: 'Σ ingresos por cohorte / tamaño de cohorte. Reportado real + previsión basada en curvas de retención.',
        id: 'Σ pendapatan per kohort / ukuran kohort. Dilaporkan aktual + perkiraan berdasarkan kurva retensi kohort.',
        ms: 'Σ hasil setiap kohort / saiz kohort. Dilaporkan sebenar + ramalan berdasarkan keluk retensi kohort.'
      }
    },
    {
      name: { en: 'CAC (Customer Acquisition Cost)', ru: 'CAC (стоимость привлечения)', es: 'CAC (coste de adquisición)', id: 'CAC (biaya akuisisi)', ms: 'CAC (kos pemerolehan)' },
      meaning: {
        en: 'Marketing + sales spend per newly acquired paying customer.',
        ru: 'Расходы на маркетинг + продажи на одного нового платящего клиента.',
        es: 'Gasto de marketing + ventas por cada nuevo cliente pagante.',
        id: 'Pengeluaran pemasaran + penjualan per pelanggan baru yang membayar.',
        ms: 'Perbelanjaan pemasaran + jualan setiap pelanggan baru yang membayar.'
      },
      formula: {
        en: 'Total marketing + sales spend in period / # of new paying customers in the same period.',
        ru: 'Сумма расходов на маркетинг + продажи за период / число новых платящих клиентов за тот же период.',
        es: 'Gasto total de marketing + ventas en el periodo / número de nuevos clientes pagantes en el mismo periodo.',
        id: 'Total pengeluaran pemasaran + penjualan periode / jumlah pelanggan baru yang membayar periode yang sama.',
        ms: 'Jumlah perbelanjaan pemasaran + jualan tempoh / bilangan pelanggan baru yang membayar dalam tempoh sama.'
      }
    },
    {
      name: { en: 'ROAS (Return on Ad Spend)', ru: 'ROAS (Return on Ad Spend)', es: 'ROAS (retorno del gasto publicitario)', id: 'ROAS (Return on Ad Spend)', ms: 'ROAS (Pulangan Belanja Iklan)' },
      meaning: {
        en: 'Revenue generated per unit of advertising spend.',
        ru: 'Сколько выручки приносит каждая единица рекламного бюджета.',
        es: 'Ingresos generados por cada unidad de gasto publicitario.',
        id: 'Pendapatan yang dihasilkan per unit pengeluaran iklan.',
        ms: 'Hasil yang dijana setiap unit perbelanjaan pengiklanan.'
      },
      formula: {
        en: 'Revenue attributed to ad spend / ad spend.',
        ru: 'Атрибутированная выручка / расходы на рекламу.',
        es: 'Ingresos atribuidos / gasto publicitario.',
        id: 'Pendapatan yang diatribusi / pengeluaran iklan.',
        ms: 'Hasil yang dikaitkan / perbelanjaan iklan.'
      }
    },
    {
      name: { en: 'L2B (Lead-to-Buyer conversion)', ru: 'L2B (конверсия лид → покупатель)', es: 'L2B (conversión lead → comprador)', id: 'L2B (konversi lead ke pembeli)', ms: 'L2B (penukaran lead ke pembeli)' },
      meaning: {
        en: 'Share of leads that turn into paying customers.',
        ru: 'Доля лидов, которые становятся платящими клиентами.',
        es: 'Porcentaje de leads que se convierten en clientes pagantes.',
        id: 'Persentase lead yang menjadi pelanggan berbayar.',
        ms: 'Peratusan lead yang menjadi pelanggan berbayar.'
      },
      formula: {
        en: '# of buyers / # of leads × 100%.',
        ru: 'Число покупателей / число лидов × 100%.',
        es: 'Compradores / leads × 100%.',
        id: 'Jumlah pembeli / jumlah lead × 100%.',
        ms: 'Bilangan pembeli / bilangan lead × 100%.'
      }
    }
  ];

  // ── Team ──────────────────────────────────────────────────────
  const TEAM = [
    {
      name: { en: 'Armina Bekaryan', ru: 'Армина Бекарян', es: 'Armina Bekaryan', id: 'Armina Bekaryan', ms: 'Armina Bekaryan' },
      role: { en: 'Analyst (TBD)', ru: 'Аналитик (TBD)', es: 'Analista (TBD)', id: 'Analis (TBD)', ms: 'Penganalisis (TBD)' },
      telegram: '@TBD',
      initials: 'АБ'
    },
    {
      name: { en: 'Iraklii Gotsiridze', ru: 'Ираклий Гоциридзе', es: 'Iraklii Gotsiridze', id: 'Iraklii Gotsiridze', ms: 'Iraklii Gotsiridze' },
      role: { en: 'Team Lead, Analytics', ru: 'Тимлид аналитики', es: 'Team Lead de Analítica', id: 'Team Lead Analitik', ms: 'Ketua Pasukan Analitik' },
      telegram: '@gotzir',
      initials: 'ИГ'
    },
    {
      name: { en: 'Danila Zhilnikov', ru: 'Данила Жильников', es: 'Danila Zhilnikov', id: 'Danila Zhilnikov', ms: 'Danila Zhilnikov' },
      role: { en: 'Analyst (TBD)', ru: 'Аналитик (TBD)', es: 'Analista (TBD)', id: 'Analis (TBD)', ms: 'Penganalisis (TBD)' },
      telegram: '@TBD',
      initials: 'ДЖ'
    },
    {
      name: { en: 'Alyona Gorshunova', ru: 'Алёна Горшунова', es: 'Alyona Gorshunova', id: 'Alyona Gorshunova', ms: 'Alyona Gorshunova' },
      role: { en: 'Analyst (TBD)', ru: 'Аналитик (TBD)', es: 'Analista (TBD)', id: 'Analis (TBD)', ms: 'Penganalisis (TBD)' },
      telegram: '@TBD',
      initials: 'АГ'
    }
  ];

  // ── FAQ ───────────────────────────────────────────────────────
  const FAQ = [
    {
      q: { en: 'Where do I find revenue figures for Indonesia?',
           ru: 'Где найти выручку по Индонезии?',
           es: '¿Dónde encuentro los ingresos de Indonesia?',
           id: 'Di mana saya menemukan angka pendapatan Indonesia?',
           ms: 'Di manakah saya boleh dapatkan angka hasil Indonesia?' },
      a: { en: 'Open the Dashboards page → Indonesia → "Actual sales report" (Primary) or "Prolongations report" (Secondary). Both update daily.',
           ru: 'Откройте вкладку Дэшборды → Индонезия → «Отчёт по фактическим продажам» (первичка) или «Отчёт по пролонгациям» (вторичка). Оба обновляются ежедневно.',
           es: 'Abre Dashboards → Indonesia → "Actual sales report" (primarias) o "Prolongations report" (secundarias). Ambos se actualizan a diario.',
           id: 'Buka halaman Dashboards → Indonesia → "Actual sales report" (primer) atau "Prolongations report" (sekunder). Keduanya diperbarui setiap hari.',
           ms: 'Buka halaman Dashboards → Indonesia → "Actual sales report" (primer) atau "Prolongations report" (sekunder). Kedua-duanya dikemas kini setiap hari.' }
    },
    {
      q: { en: 'How is LTV calculated?',
           ru: 'Как считается LTV?',
           es: '¿Cómo se calcula el LTV?',
           id: 'Bagaimana cara menghitung LTV?',
           ms: 'Bagaimana LTV dikira?' },
      a: { en: 'See the Glossary page for the full definition. In short: total cohort revenue divided by cohort size, reported actual + forecast.',
           ru: 'Полное определение — на странице Глоссарий. Кратко: общая выручка по когорте / размер когорты, фактически + прогнозно.',
           es: 'La definición completa está en el Glosario. En resumen: ingresos totales por cohorte / tamaño de cohorte, real + previsión.',
           id: 'Lihat halaman Glosarium untuk definisi lengkap. Singkatnya: total pendapatan kohort / ukuran kohort, aktual + perkiraan.',
           ms: 'Lihat halaman Glosari untuk takrifan penuh. Ringkasnya: jumlah hasil kohort / saiz kohort, sebenar + ramalan.' }
    },
    {
      q: { en: 'Why is a Power BI report not updating?',
           ru: 'Почему Power BI отчёт не обновляется?',
           es: '¿Por qué un reporte de Power BI no se actualiza?',
           id: 'Mengapa laporan Power BI tidak diperbarui?',
           ms: 'Mengapa laporan Power BI tidak dikemas kini?' },
      a: { en: 'Daily reports refresh overnight for the previous day. If a report is more than 24 hours stale, click the "Found a bug?" button — it goes straight to the team lead.',
           ru: 'Ежедневные отчёты обновляются ночью за предыдущий день. Если данные устарели больше чем на сутки — нажмите «Нашли баг?», сообщение придёт тимлиду.',
           es: 'Los reportes diarios se refrescan por la noche para el día anterior. Si están desfasados más de 24h, usa el botón "¿Encontraste un bug?".',
           id: 'Laporan harian diperbarui semalam untuk hari sebelumnya. Jika ada keterlambatan lebih dari 24 jam — klik tombol "Menemukan bug?".',
           ms: 'Laporan harian dikemas kini pada waktu malam untuk hari sebelumnya. Jika lewat lebih daripada 24 jam — klik butang "Jumpa pepijat?".' }
    },
    {
      q: { en: 'How do I request access to a dashboard?',
           ru: 'Как запросить доступ к дэшборду?',
           es: '¿Cómo pido acceso a un dashboard?',
           id: 'Bagaimana cara meminta akses ke dasbor?',
           ms: 'Bagaimana saya meminta akses ke papan pemuka?' },
      a: { en: 'Google Sheets and Superset use your @alg.team Google account. Power BI uses the shared @powerbi_view account — ask in the #help channel.',
           ru: 'Гугл-таблицы и Superset — через Google-аккаунт @alg.team. Power BI — общая учётка @powerbi_view, доступ просим в #help-канале.',
           es: 'Google Sheets y Superset usan tu cuenta @alg.team. Power BI usa la cuenta compartida @powerbi_view — pídela en el canal #help.',
           id: 'Google Sheets dan Superset memakai akun @alg.team. Power BI memakai akun bersama @powerbi_view — minta di kanal #help.',
           ms: 'Google Sheets dan Superset menggunakan akaun @alg.team. Power BI menggunakan akaun bersama @powerbi_view — minta di saluran #help.' }
    },
    {
      q: { en: 'What is the difference between primary and secondary sales?',
           ru: 'В чём разница между первичными и вторичными продажами?',
           es: '¿Cuál es la diferencia entre ventas primarias y secundarias?',
           id: 'Apa beda penjualan primer dan sekunder?',
           ms: 'Apakah perbezaan antara jualan primer dan sekunder?' },
      a: { en: 'Primary = first payment from a new customer. Secondary = any subsequent payment (prolongation). See the Glossary for the formal definition.',
           ru: 'Первичные = первая оплата от нового клиента. Вторичные = любая следующая оплата (пролонгация). Точное определение — в Глоссарии.',
           es: 'Primarias = primer pago de un cliente nuevo. Secundarias = cualquier pago posterior (prolongación). Definición formal en el Glosario.',
           id: 'Primer = pembayaran pertama dari pelanggan baru. Sekunder = pembayaran berikutnya (perpanjangan). Definisi formal di Glosarium.',
           ms: 'Primer = pembayaran pertama daripada pelanggan baru. Sekunder = pembayaran berikutnya (pelanjutan). Takrifan formal dalam Glosari.' }
    },
    {
      q: { en: 'Who do I contact for help with a specific BU?',
           ru: 'К кому обратиться по конкретному бизнес-юниту?',
           es: '¿A quién contacto para ayuda con una BU específica?',
           id: 'Siapa yang harus saya hubungi untuk bantuan BU tertentu?',
           ms: 'Siapa yang saya perlu hubungi untuk bantuan BU tertentu?' },
      a: { en: 'See the Team page — each analyst owns one or more BUs. For dashboards or data issues, use the "Found a bug?" button.',
           ru: 'Смотрите страницу Команда — у каждого аналитика свои БЮ. По багам дэшбордов и данных — кнопка «Нашли баг?».',
           es: 'Mira la página Equipo — cada analista cubre una o más BU. Para dashboards o datos rotos, usa "¿Encontraste un bug?".',
           id: 'Lihat halaman Tim — setiap analis menangani satu atau lebih BU. Untuk masalah dasbor atau data, gunakan tombol "Menemukan bug?".',
           ms: 'Lihat halaman Pasukan — setiap penganalisis mengendalikan satu atau lebih BU. Untuk isu papan pemuka atau data, gunakan butang "Jumpa pepijat?".' }
    },
    {
      q: { en: 'How are cohorts defined?',
           ru: 'Как определяются когорты?',
           es: '¿Cómo se definen las cohortes?',
           id: 'Bagaimana kohort didefinisikan?',
           ms: 'Bagaimana kohort ditakrifkan?' },
      a: { en: 'A cohort is grouped by the month of the first payment (or first lesson, depending on the metric). Curves are tracked from that anchor month forward.',
           ru: 'Когорта группируется по месяцу первой оплаты (или первого урока — зависит от метрики). Кривые строятся от этого опорного месяца.',
           es: 'Una cohorte se agrupa por el mes del primer pago (o primera clase, según la métrica). Las curvas se siguen desde ese mes ancla.',
           id: 'Kohort dikelompokkan berdasarkan bulan pembayaran pertama (atau pelajaran pertama, tergantung metrik). Kurva dilacak dari bulan acuan.',
           ms: 'Kohort dikumpulkan mengikut bulan pembayaran pertama (atau pelajaran pertama, bergantung metrik). Keluk dijejak dari bulan rujukan tersebut.' }
    },
    {
      q: { en: 'Where is the official metric glossary maintained?',
           ru: 'Где живёт официальный глоссарий метрик?',
           es: '¿Dónde se mantiene el glosario oficial de métricas?',
           id: 'Di mana glosarium metrik resmi disimpan?',
           ms: 'Di manakah glosari metrik rasmi disimpan?' },
      a: { en: 'On Confluence (BI space). Access can be requested via the #help channel. Key entries are mirrored on the Glossary page here.',
           ru: 'В Confluence (пространство BI). Доступ запрашивается в #help-канале. Ключевые статьи продублированы на странице Глоссарий здесь.',
           es: 'En Confluence (espacio BI). El acceso se pide en el canal #help. Las entradas clave están reflejadas en la página Glosario.',
           id: 'Di Confluence (ruang BI). Akses diminta lewat kanal #help. Entri utama dicerminkan di halaman Glosarium ini.',
           ms: 'Di Confluence (ruang BI). Akses diminta melalui saluran #help. Entri utama dicerminkan di halaman Glosari ini.' }
    }
  ];

  window.Algonova.data = {
    dashboards: DASHBOARDS,
    glossary: GLOSSARY,
    team: TEAM,
    faq: FAQ
  };
})();

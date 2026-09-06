import { type Locale } from '@/utils/locale';

export interface ArticleMeta {
  slug: string;
  date: string;
  dataSetId: string;
  author: string;
  title: Record<Locale, string>;
  description: Record<Locale, string>;
  hidden?: boolean;
}

export const ARTICLES: ArticleMeta[] = [
  {
    slug: '2026-09-07-el-nino-cyprus-dams',
    date: '2026-09-07',
    dataSetId: '24-AUG-2026',
    author: 'Vladimir Bugay',
    hidden: true, // draft — EN only so far
    title: {
      en: "The Strongest El Niño Since 1950 Is Coming. Cyprus's Dams Won't Notice.",
      el: "Έρχεται το Ισχυρότερο Ελ Νίνιο από το 1950. Τα Φράγματα της Κύπρου Δεν θα το Προσέξουν.",
      ru: 'Идёт сильнейший Эль-Ниньо с 1950 года. Кипрские дамбы этого не заметят.',
    },
    description: {
      en: 'NOAA gives a better than 90% chance of a very strong El Niño this winter. Seventy-six winters of Cyprus rainfall and thirty-nine of dam data say it makes no difference: the correlation is 0.05, the eight strongest El Niños averaged 82% of normal rain, and the two worst dam refills of the past decade were El Niño years.',
      el: 'Η NOAA δίνει πάνω από 90% πιθανότητα για πολύ ισχυρό Ελ Νίνιο αυτόν τον χειμώνα. Εβδομήντα έξι χειμώνες βροχοπτώσεων και τριάντα εννέα χρόνια δεδομένων φραγμάτων λένε ότι δεν κάνει διαφορά: συσχέτιση 0.05, τα οκτώ ισχυρότερα Ελ Νίνιο έφεραν κατά μέσο όρο 82% της κανονικής βροχής.',
      ru: 'NOAA даёт более 90% вероятности очень сильного Эль-Ниньо этой зимой. Семьдесят шесть зим осадков и тридцать девять лет данных по дамбам говорят, что разницы нет: корреляция 0.05, восемь сильнейших Эль-Ниньо принесли в среднем 82% нормы осадков.',
    },
  },
  {
    slug: '2026-08-24-last-week-of-summer',
    date: '2026-08-24',
    dataSetId: '24-AUG-2026',
    author: 'Vladimir Bugay',
    title: {
      en: 'The Summer the Dams Barely Drained: Cyprus Just Had Its Gentlest Drawdown in 39 Years',
      el: 'Το Καλοκαίρι που τα Φράγματα Δεν Άδειασαν: Η Ηπιότερη Πτώση σε Τριάντα Εννέα Χρόνια',
      ru: 'Лето, когда дамбы почти не мелели: самый медленный расход воды за 39 лет',
    },
    description: {
      en: 'Between 15 June and 24 August the 18 main dams gave up just 9.8% of their water — of the twenty-seven summers since 1988 that began with 100 mln. m³ or more, 2026 drained the slowest. Storage stands at 111.0 mln. m³ (38.2%), the seasonal peak came absurdly late in June, and the year still finishes 21st of 39, below the long-run average.',
      el: 'Από τις 15 Ιουνίου ως τις 24 Αυγούστου τα 18 κύρια φράγματα έχασαν μόλις το 9.8% του νερού τους — από τα είκοσι επτά καλοκαίρια μετά το 1988 που ξεκίνησαν με 100 εκατ. κ.μ. και πάνω, το 2026 ξόδεψε νερό πιο αργά απ\' όλα. Το απόθεμα είναι 111.0 εκατ. κ.μ. (38.2%), η εποχιακή κορύφωση ήρθε απίστευτα αργά, τον Ιούνιο, κι όμως η χρονιά βγαίνει μόλις εικοστή πρώτη στα τριάντα εννέα — κάτω από τον μέσο όρο.',
      ru: 'С 15 июня по 24 августа 18 основных дамб потеряли лишь 9.8% воды — из двадцати семи лет с 1988 года, входивших в лето со 100 млн. м³ и более, 2026-й расходовал воду медленнее всех. Запас — 111.0 млн. м³ (38.2%), сезонный пик пришёлся неприлично поздно, на июнь, и всё равно год занимает лишь 21-е место из 39, ниже среднего.',
    },
  },
  {
    slug: '2026-07-20-introducing-zen-mode',
    date: '2026-07-20',
    dataSetId: '20-JUL-2026',
    author: 'Vladimir Bugay',
    title: {
      en: "Introducing Zen Mode: It's 40°C Outside, So We Built a Page Where It's Always Raining",
      el: 'Παρουσιάζουμε το Zen Mode: Έχει 40°C Έξω, Οπότε Φτιάξαμε μια Σελίδα Όπου Πάντα Βρέχει',
      ru: 'Представляем дзен-режим: за окном 40°C, поэтому мы сделали страницу, где всегда идёт дождь',
    },
    description: {
      en: 'Cyprus is baking and the dams have begun their long summer exhale — about 1,727 litres gone every second. Zen Mode is a live, full-screen counter over real footage of flowing water from this spring: watch the island\'s savings drain in real time, listen to the rain, and then go close a tap.',
      el: 'Η Κύπρος ψήνεται και τα φράγματα άρχισαν τη μεγάλη καλοκαιρινή τους εκπνοή — περίπου 1.727 λίτρα χάνονται κάθε δευτερόλεπτο. Το Zen Mode είναι ένας ζωντανός μετρητής πάνω σε πραγματικά πλάνα νερού από φέτος την άνοιξη: δείτε τα αποθέματα να αδειάζουν σε πραγματικό χρόνο, ακούστε τη βροχή, και μετά κλείστε μια βρύση.',
      ru: 'Кипр печётся на жаре, и водохранилища начали свой долгий летний выдох — примерно 1 727 литров уходит каждую секунду. Дзен-режим — это живой полноэкранный счётчик поверх настоящих видео текущей воды, снятых этой весной: смотрите, как тают запасы острова, слушайте дождь — а потом закройте кран.',
    },
  },
  {
    slug: '2026-07-06-anatomy-of-cyprus-dams',
    date: '2026-07-06',
    dataSetId: '06-JUL-2026',
    author: 'Vladimir Bugay',
    title: {
      en: 'The Anatomy of a Cyprus Dam: 108 Reservoirs, a Sunken Church, and How to Read a Dam Wall',
      el: 'Η Ανατομία ενός Κυπριακού Φράγματος: 108 Ταμιευτήρες, μια Βυθισμένη Εκκλησία και Πώς να Διαβάζετε ένα Φράγμα',
      ru: 'Анатомия кипрской плотины: 108 водохранилищ, затонувшая церковь и как «читать» стену дамбы',
    },
    description: {
      en: 'Cyprus has more dams per square kilometre than almost any country in Europe. A field guide to all 21 of its major dams — earthfill, rockfill and hybrid — with the engineering, history and stories behind each wall, from Kouris\'s drowned village to Solea on the island\'s only permanent river.',
      el: 'Η Κύπρος έχει περισσότερα φράγματα ανά τετραγωνικό χιλιόμετρο από σχεδόν κάθε χώρα στην Ευρώπη. Ένας οδηγός για τα 21 μεγάλα φράγματα — χωμάτινα, λιθόρριπτα και υβριδικά — με τη μηχανική, την ιστορία και τις ιστορίες πίσω από κάθε φράγμα, από το βυθισμένο χωριό του Κούρη έως τη Σόλεα στον μοναδικό μόνιμο ποταμό του νησιού.',
      ru: 'В Кипре плотность плотин на квадратный километр выше, чем почти в любой стране Европы. Путеводитель по всем 21 крупным плотинам — земляным, каменно-набросным и смешанным — с инженерией, историей и сюжетами за каждой стеной: от затопленной деревни у Куриса до Солеа на единственной постоянной реке острова.',
    },
  },
  {
    slug: '2026-06-05-inflow-season-peak-plateau',
    date: '2026-06-05',
    dataSetId: '05-JUN-2026',
    author: 'Vladimir Bugay',
    title: {
      en: 'Peak Water: Cyprus Reservoirs Crest at a Two-Year High as the Inflow Season Hands Off to Summer',
      el: 'Στην Κορυφή: Τα Φράγματα Κύπρου Κορυφώνονται σε Υψηλό Διετίας Καθώς η Περίοδος Εισροής Παραδίδει τη Σκυτάλη στο Καλοκαίρι',
      ru: 'Пик воды: водохранилища Кипра вышли на двухлетний максимум, а сезон притока передаёт эстафету лету',
    },
    description: {
      en: 'Storage in the 18 main dams has flattened at 42.4% (123.4 mln. m³) — a two-year high and almost double last year. The 2025/26 inflow season delivered 112 mln. m³, the most in four years, with 86% of it arriving February–May and nine dams filling to 100%.',
      el: 'Η αποθήκευση στα 18 κύρια φράγματα σταθεροποιήθηκε στο 42.4% (123.4 ΕΚΜ) — υψηλό διετίας και σχεδόν διπλάσιο απ\' ό,τι πέρυσι. Η σεζόν 2025/26 απέδωσε 112 ΕΚΜ εισροής, την καλύτερη σε τέσσερα χρόνια, με το 86% να καταγράφεται το διάστημα Φεβρουαρίου–Μαΐου και εννέα φράγματα να φτάνουν στο 100%.',
      ru: 'Запас 18 основных дамб стабилизировался на 42.4% (123.4 МКМ) — двухлетний максимум и почти вдвое больше прошлогоднего. Сезон 2025/26 принёс 112 МКМ притока, лучший за четыре года: 86% поступило с февраля по май, девять дамб наполнились до 100%.',
    },
  },
  {
    slug: '2026-05-05-100mcm-seasonal-inflow',
    date: '2026-05-05',
    dataSetId: '05-MAY-2026',
    author: 'Vladimir Bugay',
    title: {
      en: '100 Million Cubic Metres of Inflow: Cyprus Reservoirs Cross a Line for the First Time in Four Years',
      el: '100 Εκατομμύρια Κυβικά Μέτρα Εισροής: Τα Φράγματα Κύπρου Ξεπερνούν Όριο για Πρώτη Φορά σε Τέσσερα Χρόνια',
      ru: '100 миллионов кубометров притока: водохранилища Кипра преодолели рубеж впервые за четыре года',
    },
    description: {
      en: 'Cumulative seasonal inflow since October has reached 100.88 mln. m³ — the first season above the line since 2021/22, driven by an April that ranked as the second-largest since 1987/88.',
      el: 'Η συνολική εποχιακή εισροή από τον Οκτώβριο έφτασε τα 100.88 ΕΚΜ — η πρώτη σεζόν πάνω από το όριο μετά το 2021/22, με Απρίλιο τον δεύτερο μεγαλύτερο από το 1987/88.',
      ru: 'Суммарный сезонный приток с октября достиг 100.88 МКМ — первый сезон выше отметки с 2021/22 года, благодаря апрелю, ставшему вторым по величине с 1987/88 года.',
    },
  },
  {
    slug: '2026-04-13-monopatia-dam-trails',
    date: '2026-04-13',
    dataSetId: '09-APR-2026',
    author: 'Vladimir Bugay',
    title: {
      en: 'From Water Levels to Hiking Trails: Introducing Monopatia — A Free Guide to 164 Cyprus Trails',
      el: 'Από τα Επίπεδα Νερού στα Μονοπάτια: Παρουσιάζουμε το Monopatia — Δωρεάν Οδηγός 164 Μονοπατιών Κύπρου',
      ru: 'От уровней воды к пешим тропам: представляем Monopatia — бесплатный гид по 164 маршрутам Кипра',
    },
    description: {
      en: 'Fragmata tracks dam water levels — now a companion project maps 164 hiking trails across Cyprus, including 7 trails at dam reservoirs. Free maps, GPS tracks, elevation profiles, and GPX downloads.',
      el: 'Το Fragmata παρακολουθεί τα φράγματα — τώρα ένα αδελφό έργο χαρτογραφεί 164 μονοπάτια πεζοπορίας σε όλη την Κύπρο, συμπεριλαμβανομένων 7 στα φράγματα. Δωρεάν χάρτες, GPS και GPX.',
      ru: 'Fragmata отслеживает уровни воды — теперь родственный проект картографирует 164 пешеходных маршрута по Кипру, включая 7 троп у водохранилищ. Бесплатные карты, GPS-треки и GPX.',
    },
  },
  {
    slug: '2026-04-07-100mcm-milestone',
    date: '2026-04-07',
    dataSetId: '07-APR-2026',
    author: 'Vladimir Bugay',
    title: {
      en: '100 Million Cubic Metres: Cyprus Reservoirs Cross a Milestone for the First Time in 20 Months',
      el: '100 Εκατομμύρια Κυβικά Μέτρα: Τα Φράγματα Κύπρου Ξεπερνούν Ορόσημο για Πρώτη Φορά σε 20 Μήνες',
      ru: '100 миллионов кубометров: водохранилища Кипра преодолели рубеж впервые за 20 месяцев',
    },
    description: {
      en: 'Total storage in Cyprus\'s 18 main dams crossed 100 mln. m³ on 7 April 2026 — the first time since August 2024. A season that began at 27 mln. m³ has delivered a remarkable recovery.',
      el: 'Η συνολική αποθήκευση στα 18 κύρια φράγματα Κύπρου ξεπέρασε τα 100 ΕΚΜ στις 7 Απριλίου 2026 — για πρώτη φορά από τον Αύγουστο 2024. Μια σεζόν που ξεκίνησε στα 27 ΕΚΜ απέδωσε αξιοσημείωτη ανάκαμψη.',
      ru: 'Суммарный запас 18 основных дамб Кипра превысил 100 МКМ 7 апреля 2026 года — впервые с августа 2024. Сезон, начавшийся на 27 МКМ, принёс впечатляющее восстановление.',
    },
  },
  {
    slug: '2026-03-31-nicosia-north-troodos-drought-free',
    date: '2026-03-31',
    dataSetId: '30-MAR-2026',
    author: 'Vladimir Bugay',
    title: {
      en: 'Drought Over North of Troodos: All Five Nicosia Dams Full — Xyliatos, Klirou, Solea, Kalopanagiotis and Tamassos Overflowing',
      el: 'Τέλος Ξηρασίας Βόρεια του Τροόδους: Και τα Πέντε Φράγματα της Λευκωσίας Γεμάτα — Ξυλιάτος, Κλήρου, Σόλεα, Καλοπαναγιώτης και Ταμασσός Υπερχειλίζουν',
      ru: 'Засуха отступила к северу от Троодоса: все пять никосийских дамб полны — Ксилиатос, Клиру, Солеа, Калопанайотис и Тамассос переполнены',
    },
    description: {
      en: 'Five dams north of the Troodos — Xyliatos, Kalopanagiotis, Klirou-Malounta, Solea, and Tamassos — are all at 100% capacity as of 31 March. For the Nicosia district, the drought is over.',
      el: 'Πέντε φράγματα βόρεια του Τροόδους — Ξυλιάτος, Καλοπαναγιώτης, Κλήρου-Μαλούντα, Σόλεα και Ταμασσός — βρίσκονται όλα στο 100% χωρητικότητας στις 30 Μαρτίου. Για την επαρχία Λευκωσίας, η ξηρασία έχει τελειώσει.',
      ru: 'Пять водохранилищ к северу от Троодоса — Ксилиатос, Калопанайотис, Клиру-Малунта, Солеа и Тамассос — все на 100% ёмкости по данным на 30 марта. Для района Никосии засуха завершилась.',
    },
  },
  {
    slug: '2026-04-03-kalavasos-southern-conveyor',
    date: '2026-04-03',
    dataSetId: '02-APR-2026',
    author: 'Vladimir Bugay',
    title: {
      en: 'Why Kalavasos Dam Drops When It Rains: The Southern Conveyor Explained',
      el: 'Γιατί το Φράγμα Καλαβασού Πέφτει Ενώ Βρέχει: Εξήγηση του Νότιου Αγωγού',
      ru: 'Почему уровень дамбы Калавасос падает, когда идёт дождь: объяснение Южного водовода',
    },
    description: {
      en: 'A reader noticed Kalavasos keeps dropping even after rainfall. The answer involves a deliberate WDD extraction strategy, the Southern Conveyor system, and alarming gaps in dam safety monitoring.',
      el: 'Ένας αναγνώστης παρατήρησε ότι ο Καλαβασός συνεχίζει να πέφτει ακόμα και μετά τη βροχή. Η απάντηση αφορά τη σκόπιμη στρατηγική άντλησης του ΤΑΥ, το σύστημα του Νότιου Αγωγού και ανησυχητικά κενά στην παρακολούθηση ασφάλειας φραγμάτων.',
      ru: 'Читатель заметил, что Калавасос продолжает снижаться даже после дождя. Ответ связан с намеренной стратегией откачки Департамента водного развития, системой Южного водовода и тревожными пробелами в мониторинге безопасности дамб.',
    },
  },
  {
    slug: '2026-03-27-famagusta-water-supply',
    date: '2026-03-27',
    dataSetId: '23-MAR-2026',
    author: 'Vladimir Bugay',
    title: {
      en: 'Where Does Protaras Get Its Water? Desalination, Pipes, and the Empty Dam That Was Never the Source',
      el: 'Από Πού Παίρνει Νερό η Πρωταράς; Αφαλάτωση, Αγωγοί και το Άδειο Φράγμα που Ποτέ δεν Ήταν η Πηγή',
      ru: 'Откуда Протарас берёт воду? Опреснение, трубопроводы и пустая дамба, которая никогда не была источником',
    },
    description: {
      en: 'Achna Dam has been empty for ages — so where does Protaras / Ayia Napa / Paralimni actually get its drinking water? The answer involves aging desalination plants, a single 50-year-old pipeline, and infrastructure projects that exist only on paper.',
      el: 'Το Φράγμα Αχνας είναι άδειο εδώ και χρόνια — πού παίρνει λοιπόν πόσιμο νερό η Πρωταράς / Αγία Νάπα / Παραλίμνι; Η απάντηση αφορά γηρασμένες μονάδες αφαλάτωσης, έναν μοναδικό αγωγό 50 ετών και έργα υποδομής που υπάρχουν μόνο στα χαρτιά.',
      ru: 'Дамба Ахна пуста уже давно — откуда тогда Протарас / Айя-Напа / Паралимни берут питьевую воду? Ответ связан со стареющими опреснительными установками, единственным 50-летним трубопроводом и инфраструктурными проектами, существующими только на бумаге.',
    },
  },
  {
    slug: '2026-03-23-reserves-exceed-last-year',
    date: '2026-03-23',
    dataSetId: '23-MAR-2026',
    author: 'Vladimir Bugay',
    title: {
      en: 'Cyprus Reservoirs Exceed Last Year for the First Time — 12 mln. m³ in 3 Days, Xyliatos Overflows',
      el: 'Τα φράγματα Κύπρου ξεπέρασαν πέρυσι για πρώτη φορά — 12 εκ. m³ σε 3 ημέρες, ο Ξυλιάτος υπερχείλισε',
      ru: 'Водохранилища Кипра впервые превысили прошлогодний уровень — 12 млн. м³ за 3 дня, Ксилиатос вышел из берегов',
    },
    description: {
      en: 'Exceptional Troodos rainfall delivers 12 mln. m³ in 72 hours, pushing total storage to 26.9% — above last year for the first time this season.',
      el: 'Εξαιρετικές βροχοπτώσεις Τροόδους αποδίδουν 12 εκ. m³ σε 72 ώρες, ανεβάζοντας αποθέματα στο 26.9% — πάνω από πέρυσι για πρώτη φορά φέτος.',
      ru: 'Исключительные осадки на Троодосе приносят 12 млн. м³ за 72 часа, поднимая общий запас до 26.9% — впервые в этом сезоне выше прошлогоднего уровня.',
    },
  },
  {
    slug: '2026-03-02-cyprus-reservoirs-forecast',
    date: '2026-03-02',
    dataSetId: '02-MAR-2026',
    author: 'Vladimir Bugay',
    title: {
      en: 'Cyprus Reservoirs at 20.6% with Forecast Down to 7% — But 38 Years of Data Promise a Turnaround',
      el: 'Ταμιευτήρες Κύπρου στο 20.6% με πρόβλεψη πτώσης στο 7% — Αλλά 38 χρόνια δεδομένων υπόσχονται ανάκαμψη',
      ru: 'Водохранилища Кипра: 20.6% и прогноз до 7% — но данные за 38 лет обещают разворот',
    },
    description: {
      en: 'Analysis of current Cyprus reservoir levels and forecast based on 38 years of hydrological data.',
      el: 'Ανάλυση τρεχόντων επιπέδων ταμιευτήρων Κύπρου και πρόβλεψη βάσει 38 ετών υδρολογικών δεδομένων.',
      ru: 'Анализ текущего состояния водохранилищ Кипра и прогноз на основе 38 лет гидрологических данных.',
    },
  },
  {
    slug: '2026-03-18-drought-retreating',
    date: '2026-03-18',
    dataSetId: '18-MAR-2026',
    author: 'Vladimir Bugay',
    title: {
      en: 'Is the Drought Retreating? 12 of 21 Cyprus Reservoirs Exceed Last Year\'s Levels',
      el: 'Υποχωρεί η ξηρασία; 12 από 21 ταμιευτήρες Κύπρου ξεπέρασαν τα περυσινά επίπεδα',
      ru: 'Засуха отступает? 12 из 21 водохранилища Кипра превысили прошлогодний уровень',
    },
    description: {
      en: 'Updated Fragmata analysis: forecast improved, water deficit unlikely.',
      el: 'Ενημερωμένη ανάλυση Fragmata: η πρόβλεψη βελτιώθηκε, το έλλειμμα νερού απίθανο.',
      ru: 'Обновлённый анализ Fragmata: прогноз улучшился, дефицит маловероятен.',
    },
  },
];

export function getAllArticles(): ArticleMeta[] {
  return [...ARTICLES].filter((a) => !a.hidden).sort((a, b) => b.date.localeCompare(a.date));
}

export function getArticleBySlug(slug: string): ArticleMeta | undefined {
  return ARTICLES.find((a) => a.slug === slug);
}

export function getLatestPublishedArticle(): ArticleMeta | undefined {
  const today = new Date().toISOString().slice(0, 10);
  return getAllArticles().find((a) => a.date <= today);
}

export function getAllArticleSlugs(): string[] {
  return ARTICLES.filter((a) => !a.hidden).map((a) => a.slug);
}

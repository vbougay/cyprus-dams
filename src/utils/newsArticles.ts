import type { Locale } from './locale';

export interface NewsArticle {
  title: string;
  url: string;
  lang: Locale;
  source: string;
}

export const newsArticles: NewsArticle[] = [
  // English
  { title: 'Cyprus drought pushes Kouris reservoir to historic low', url: 'https://www.muser.press/2026/02/25/cyprus-drought-kouris-historic-low/', lang: 'en', source: 'Muser Press' },
  { title: 'Weekend rain very beneficial for Cyprus dams', url: 'https://www.parikiaki.com/2026/02/weekend-rain-very-beneficial-for-cyprus-dams-water-development-department-says/', lang: 'en', source: 'Parikiaki' },
  { title: 'Storage capacity in dams reaches 19.8 per cent', url: 'https://cyprus-mail.com/2026/02/24/storage-capacity-in-dams-reaches-19-8-per-cent', lang: 'en', source: 'Cyprus Mail' },
  { title: 'Cyprus confronts a record drought as reservoirs run dry', url: 'https://smartwatermagazine.com/news/smart-water-magazine/cyprus-confronts-a-record-drought-reservoirs-run-dry', lang: 'en', source: 'Smart Water Magazine' },
  { title: 'Water situation in the dams still dire', url: 'https://cyprus-mail.com/2026/02/09/water-situation-in-the-dams-still-dire', lang: 'en', source: 'Cyprus Mail' },
  { title: 'Severe drought in Cyprus, February 2026', url: 'https://www.copernicus.eu/en/media/image-day-gallery/severe-drought-cyprus-february-2026', lang: 'en', source: 'Copernicus' },
  { title: 'Cyprus dam levels drop to 13.8% amid drought', url: 'https://en.sigmalive.com/cyprus-dam-levels-drop-to-13-8-amid-drought/', lang: 'en', source: 'Sigmalive' },
  { title: 'Cyprus faces severe drought, citizens urged to cut water use', url: 'https://traveltomorrow.com/cyprus-faces-severe-drought-in-2026-citizens-urged-to-cut-water-use-by-two-minutes-daily/', lang: 'en', source: 'Travel Tomorrow' },
  { title: 'Cyprus water emergency: Citizens urged to reduce water use', url: 'https://www.euronews.com/green/2026/01/26/cyprus-water-emergency-citizens-urged-to-reduce-water-use-as-dams-reach-record-low', lang: 'en', source: 'Euronews' },
  { title: 'The battle over the desalination water fix', url: 'https://cyprus-mail.com/2026/02/01/the-battle-over-the-desalination-water-fix', lang: 'en', source: 'Cyprus Mail' },

  // Russian
  { title: 'Кипр на грани засухи', url: 'https://vkcyprus.com/cyprus/1467412346435-kipr-na-grani-zasuhi/', lang: 'ru', source: 'Вестник Кипра' },
  { title: 'В водохранилищах Кипра скоро останется только грязь', url: 'https://evropakipr.com/istorii/v-vodohranilishchah-kipra-skoro-ostanetsya-tolko-gryaz', lang: 'ru', source: 'Европа Кипр' },
  { title: 'Кипр переживает худший водный кризис за десятилетие', url: 'https://cyprusbutterfly.com.cy/news/kipr-perezhivaet-xudshij-vodnyij-krizis', lang: 'ru', source: 'Cyprus Butterfly' },
  { title: 'На Кипре — сезон дождей, но власти утверждают, что засуха продолжается', url: 'https://evropakipr.com/istorii/na-kipre-sezon-dozhdey-pochemu-vlasti-utverzhdayut-chto-na-ostrove-chetvertyy-god', lang: 'ru', source: 'Европа Кипр' },
  { title: 'Дожди идут, но воды по-прежнему мало', url: 'https://vkcyprus.com/society/1467412349435-dozhdi-idut-no-vody-po-prezhnemu-malo/', lang: 'ru', source: 'Вестник Кипра' },
  { title: 'Всего 11% воды в водохранилищах Кипра — но правительство уверяет, что запасов хватит', url: 'https://lenta.cy/vsego-11-vody-v-vodohranilishhah-kipra-no-pravitelstvo-uverjaet-chto-zapasov-hvatit/', lang: 'ru', source: 'Lenta.cy' },
  { title: 'На две минуты меньше: жителей Кипра попросили экономить воду из-за засухи', url: 'https://pogoda.mail.ru/news/69845557/', lang: 'ru', source: 'Pogoda Mail.ru' },

  // Greek
  { title: 'Με περίπου κανονική βροχόπτωση έκλεισε ο Φεβρουάριος — Πληρότητα φραγμάτων σε σχέση με πέρσι', url: 'https://kitasweather.com/news/forecasts/me-peripou-kanoniki-vroxoptosi-ekleise-o-fevrouarios-xartis-plirotita-fragmaton-se-sxesi-me-persi/', lang: 'el', source: 'KitasWeather' },
  { title: 'Αυτή είναι η πληρότητα του νερού στα φράγματα — Πόσο αυξήθηκε μετά τις βροχές', url: 'https://www.sigmalive.com/news/local/1301318/auti-inai-i-plirotita-toy-nerou-sta-fraghmta-poso-auksithike-meta-tis-vrokhes', lang: 'el', source: 'SigmaLive' },
  { title: 'Σημαντική εισροή νερού στα φράγματα – Πλησιάζει το 20% η συνολική πληρότητα', url: 'https://www.politis.com.cy/politis-news/cyprus/988448/simantiki-eisroi-nerou-sta-fraghmata-to-teleftaio-4imero-plisiazei-to-20-i-sinoliki-plirotita', lang: 'el', source: 'Politis' },
  { title: 'Έσωσε τη χρονιά το εντυπωσιακό «ξύπνημα» των ποταμών;', url: 'https://www.24sports.com.cy/gr/news/nea/koinonia/esose-ti-xronia-to-entyposiako-xypnima-ton-potamwn', lang: 'el', source: '24Sports' },
  { title: 'Απογοητευτική η εισροή νερού στα φράγματα, ανησυχία παρά την αυξημένη πληρότητα', url: 'https://www.alphanews.live/cyprus/apogoiteftiki-i-eisroi-nerou-sta-fragmata-anisychia-para-tin-afximeni-plirotita/', lang: 'el', source: 'AlphaNews' },
  { title: '«Ψαλίδι» στο νερό: Πώς αποφασίστηκε η μείωση 10% στην υδροδότηση', url: 'https://www.alphanews.live/cyprus/psalidi-sto-nero-pos-apofasistike-i-meiosi-10-stin-ydrodotisi/', lang: 'el', source: 'AlphaNews' },
  { title: 'Ανάσα ζωής για την κυπριακή γη από τις βροχές — Πόσο γέμισαν τα φράγματα', url: 'https://www.tothemaonline.com/Article/447357/anasa-zwhs-gia-thn-kypriakh-gh-apo-tis-brohes-twn-teleytaiwn-hmerwn-%E2%80%93-poso-gemisan-ta-fragmata', lang: 'el', source: 'ToThemaOnline' },
  { title: 'Έρχονται αυξήσεις στο νερό; Το δίλημμα του 2026 και το στοίχημα της αφαλάτωσης', url: 'https://www.tothemaonline.com/Article/447937/erhontai-ayxhseis-sto-nero-to-dilhmma-toy-2026-kai-to-stoihhma-ths-afalatwshs', lang: 'el', source: 'ToThemaOnline' },
  { title: 'Ιστορική ξηρασία στην Κύπρο: Τα φράγματα στο χαμηλότερο επίπεδο από το 1901', url: 'https://www.ieidiseis.gr/kosmos/697415/istoriki-xirasia-stin-kypro-ta-fragmata-sto-chamilotero-epipedo-apo-to-1901-kathe-stagona-metraei/', lang: 'el', source: 'ieidiseis.gr' },
];

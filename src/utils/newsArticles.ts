import type { Locale } from './locale';

export interface NewsArticle {
  title: string;
  url: string;
  lang: Locale;
  source: string;
}

export const newsArticles: NewsArticle[] = [
  // English
  { title: 'Storage capacity in dams reaches 19.8 per cent', url: 'https://cyprus-mail.com/2026/02/24/storage-capacity-in-dams-reaches-19-8-per-cent', lang: 'en', source: 'Cyprus Mail' },
  { title: 'Cyprus confronts a record drought as reservoirs run dry', url: 'https://smartwatermagazine.com/news/smart-water-magazine/cyprus-confronts-a-record-drought-reservoirs-run-dry', lang: 'en', source: 'Smart Water Magazine' },
  { title: 'Severe drought in Cyprus, February 2026', url: 'https://www.copernicus.eu/en/media/image-day-gallery/severe-drought-cyprus-february-2026', lang: 'en', source: 'Copernicus' },
  { title: 'Water levels remain critically low despite recent rains', url: 'https://cyprus-mail.com/2026/02/16/water-levels-remain-critically-low-despite-recent-rains', lang: 'en', source: 'Cyprus Mail' },
  { title: 'Dams overflow in Pomos and Klirou', url: 'https://cyprus-mail.com/2026/02/14/paphos-pomos-dam-overflows', lang: 'en', source: 'Cyprus Mail' },
  { title: 'Cyprus dam levels drop to 13.8% amid drought', url: 'https://en.sigmalive.com/cyprus-dam-levels-drop-to-13-8-amid-drought/', lang: 'en', source: 'Sigmalive' },
  { title: 'Pomos dam overflows amidst severe water shortages in Cyprus', url: 'https://www.stockwatch.com.cy/en/news/pomos-dam-overflows-amidst-severe-water-shortages-in-cyprus', lang: 'en', source: 'StockWatch' },
  { title: 'Cyprus water emergency: Citizens urged to reduce water use as dams reach record low', url: 'https://www.euronews.com/green/2026/01/26/cyprus-water-emergency-citizens-urged-to-reduce-water-use-as-dams-reach-record-low', lang: 'en', source: 'Euronews' },
  { title: 'Cyprus to Spend €196 Million in 2026 to Tackle Water Shortages', url: 'https://en.politis.com.cy/economy/economy-hot-spot/965677/cyprus-to-spend-eur196-million-in-2026-to-tackle-water-shortages', lang: 'en', source: 'Politis' },
  { title: 'The battle over the desalination water fix', url: 'https://cyprus-mail.com/2026/02/01/the-battle-over-the-desalination-water-fix', lang: 'en', source: 'Cyprus Mail' },

  // Russian
  { title: 'На Кипре — сезон дождей, но власти утверждают, что засуха продолжается', url: 'https://evropakipr.com/istorii/na-kipre-sezon-dozhdey-pochemu-vlasti-utverzhdayut-chto-na-ostrove-chetvertyy-god', lang: 'ru', source: 'Европа Кипр' },
  { title: 'На две минуты меньше: жителей Кипра попросили экономить воду из-за засухи', url: 'https://pogoda.mail.ru/news/69845557/', lang: 'ru', source: 'Pogoda Mail.ru' },
  { title: 'В столице Кипра будут регулярно отключать воду на 18 часов?!', url: 'https://regionmedia.net/kipr/v-stolitse-kipra-budut-regulyarno-otklyuchat-vodu-na-18-chasov.html', lang: 'ru', source: 'Regional Media' },
  { title: 'Дожди на Кипре будут идти до конца февраля', url: 'https://evropakipr.com/istorii/dozhdi-na-kipre-budut-idti-do-konca-fevralya', lang: 'ru', source: 'Европа Кипр' },
  { title: 'Вместе с драгоценной водой водохранилища Кипра наполнились мусором', url: 'https://www.cyplive.com/news/news-cyprus/vmeste-s-dragocennoj-vodoj-vodohranilishcha-kipra-napolnilis-musorom.html', lang: 'ru', source: 'CypLive' },
  { title: 'Дожди идут, но воды по-прежнему мало', url: 'https://vkcyprus.com/society/1467412349435-dozhdi-idut-no-vody-po-prezhnemu-malo/', lang: 'ru', source: 'Вестник Кипра' },
  { title: 'Кипр переживает худший водный кризис за десятилетие', url: 'https://cyprusbutterfly.com.cy/news/kipr-perezhivaet-xudshij-vodnyij-krizis', lang: 'ru', source: 'Cyprus Butterfly' },

  // Greek
  { title: 'Έσωσε τη χρονιά το εντυπωσιακό «ξύπνημα» των ποταμών;', url: 'https://www.24sports.com.cy/gr/news/nea/koinonia/esose-ti-xronia-to-entyposiako-xypnima-ton-potamwn', lang: 'el', source: '24Sports' },
  { title: 'Επιτέλους νερό στα φράγματα, συνεχίζουν τα καιρικά φαινόμενα', url: 'https://www.alphanews.live/cyprus/epitelous-nero-sta-fragmata-synechizoun-ta-kairika-fainomena/', lang: 'el', source: 'AlphaNews' },
  { title: 'Απελπιστική η κατάσταση στα φράγματα παρά τις βροχοπτώσεις', url: 'https://24h.com.cy/apelpistiki-i-katastasi-sta-fragmata-para-tis-vrochoptoseis-poia-i-plirotita/', lang: 'el', source: '24h' },
  { title: '«Ψαλίδι» στο νερό: Πώς αποφασίστηκε η μείωση 10% στην υδροδότηση', url: 'https://www.alphanews.live/cyprus/psalidi-sto-nero-pos-apofasistike-i-meiosi-10-stin-ydrodotisi/', lang: 'el', source: 'AlphaNews' },
  { title: 'Οι βροχές έφεραν αύξηση στην εισροή νερού στα φράγματα – Η πληρότητα σήμερα', url: 'https://www.politis.com.cy/politis-news/cyprus/982479/oi-vrokhes-eferan-auksisi-stin-eisroi-nerou-sta-fraghmata-h-plirotita-simera-pinakas', lang: 'el', source: 'Politis' },
  { title: 'Ιστορική ξηρασία στην Κύπρο: Τα φράγματα στο χαμηλότερο επίπεδο από το 1901', url: 'https://www.ieidiseis.gr/kosmos/697415/istoriki-xirasia-stin-kypro-ta-fragmata-sto-chamilotero-epipedo-apo-to-1901-kathe-stagona-metraei/', lang: 'el', source: 'ieidiseis.gr' },
  { title: 'Στέρεψαν τα φράγματα, εφιαλτικό προμηνύεται το 2026', url: 'https://www.alphanews.live/cyprus/sterepsan-ta-fragmata-efialtiko-prominyetai-to-2026/', lang: 'el', source: 'AlphaNews' },
  { title: 'Έρχονται αυξήσεις στο νερό; Το δίλημμα του 2026 και το στοίχημα της αφαλάτωσης', url: 'https://www.tothemaonline.com/Article/447937/erhontai-ayxhseis-sto-nero-to-dilhmma-toy-2026-kai-to-stoihhma-ths-afalatwshs', lang: 'el', source: 'ToThemaOnline' },
  { title: 'Η Κύπρος καλεί τους κατοίκους να μειώσουν τη χρήση νερού κατά δύο λεπτά την ημέρα εν μέσω ξηρασίας', url: 'https://www.iefimerida.gr/kosmos/kypros-kalei-katoikoys-meiosoyn-hrisi-neroy-2-lepta', lang: 'el', source: 'iefimerida.gr' },
];

import type { Locale } from './locale';

export interface NewsArticle {
  title: string;
  url: string;
  lang: Locale;
  source: string;
}

export const newsArticles: NewsArticle[] = [
  // English
  { title: 'Cyprus dam levels rise after weekend rain', url: 'https://en.sigmalive.com/cyprus-dam-levels-rise-after-weekend-rain/', lang: 'en', source: 'Sigmalive' },
  { title: 'Dams overflow in Pomos and Klirou', url: 'https://cyprus-mail.com/2026/02/14/paphos-pomos-dam-overflows', lang: 'en', source: 'Cyprus Mail' },
  { title: 'Water levels remain critically low despite recent rains', url: 'https://cyprus-mail.com/2026/02/16/water-levels-remain-critically-low-despite-recent-rains', lang: 'en', source: 'Cyprus Mail' },
  { title: 'After rainfall, dam capacity reaches 14.1 per cent', url: 'https://cyprus-mail.com/2026/02/14/after-rainfall-dam-capacity-reaches-14-1-per-cent', lang: 'en', source: 'Cyprus Mail' },
  { title: 'Pomos dam overflows amidst severe water shortages in Cyprus', url: 'https://www.stockwatch.com.cy/en/news/pomos-dam-overflows-amidst-severe-water-shortages-in-cyprus', lang: 'en', source: 'StockWatch' },
  { title: 'Rainfall raises Paphos dam levels, Asprokremmos above 18%', url: 'https://en.politis.com.cy/social-lens/social-lens-nature/987255/rainfall-raises-paphos-dam-levels-asprokremmos-above-18', lang: 'en', source: 'Politis' },
  { title: 'Reservoirs remain critical at 13.8 per cent full', url: 'https://cyprus-mail.com/2026/02/11/reservoirs-remain-critical-at-13-8-per-cent-full', lang: 'en', source: 'Cyprus Mail' },
  { title: 'Cyprus water emergency: Citizens urged to reduce water use as dams reach record low', url: 'https://www.euronews.com/green/2026/01/26/cyprus-water-emergency-citizens-urged-to-reduce-water-use-as-dams-reach-record-low', lang: 'en', source: 'Euronews' },
  { title: 'Cyprus to Spend €196 Million in 2026 to Tackle Water Shortages', url: 'https://en.politis.com.cy/economy/economy-hot-spot/965677/cyprus-to-spend-eur196-million-in-2026-to-tackle-water-shortages', lang: 'en', source: 'Politis' },
  { title: 'The battle over the desalination water fix', url: 'https://cyprus-mail.com/2026/02/01/the-battle-over-the-desalination-water-fix', lang: 'en', source: 'Cyprus Mail' },

  // Russian
  { title: 'На Кипре — сезон дождей, но власти утверждают, что засуха продолжается', url: 'https://evropakipr.com/istorii/na-kipre-sezon-dozhdey-pochemu-vlasti-utverzhdayut-chto-na-ostrove-chetvertyy-god', lang: 'ru', source: 'Европа Кипр' },
  { title: 'Дожди на Кипре будут идти до конца февраля', url: 'https://evropakipr.com/istorii/dozhdi-na-kipre-budut-idti-do-konca-fevralya', lang: 'ru', source: 'Европа Кипр' },
  { title: 'Вместе с драгоценной водой водохранилища Кипра наполнились мусором', url: 'https://www.cyplive.com/news/news-cyprus/vmeste-s-dragocennoj-vodoj-vodohranilishcha-kipra-napolnilis-musorom.html', lang: 'ru', source: 'CypLive' },
  { title: 'В водохранилищах Кипра скоро останется только грязь', url: 'https://evropakipr.com/istorii/v-vodohranilishchah-kipra-skoro-ostanetsya-tolko-gryaz', lang: 'ru', source: 'Европа Кипр' },
  { title: 'Дожди идут, но воды по-прежнему мало', url: 'https://vkcyprus.com/society/1467412349435-dozhdi-idut-no-vody-po-prezhnemu-malo/', lang: 'ru', source: 'Вестник Кипра' },
  { title: 'Кипр переживает худший водный кризис за десятилетие', url: 'https://cyprusbutterfly.com.cy/news/kipr-perezhivaet-xudshij-vodnyij-krizis', lang: 'ru', source: 'Cyprus Butterfly' },
  { title: 'Всего 11% воды в водохранилищах Кипра — но правительство уверяет, что запасов хватит', url: 'https://lenta.cy/vsego-11-vody-v-vodohranilishhah-kipra-no-pravitelstvo-uverjaet-chto-zapasov-hvatit/', lang: 'ru', source: 'Лента Кипра' },

  // Greek
  { title: 'Επιτέλους νερό στα φράγματα, συνεχίζουν τα καιρικά φαινόμενα', url: 'https://www.alphanews.live/cyprus/epitelous-nero-sta-fragmata-synechizoun-ta-kairika-fainomena/', lang: 'el', source: 'AlphaNews' },
  { title: 'Έσωσε τη χρονιά το εντυπωσιακό «ξύπνημα» των ποταμών;', url: 'https://www.24sports.com.cy/gr/news/nea/koinonia/esose-ti-xronia-to-entyposiako-xypnima-ton-potamwn', lang: 'el', source: '24Sports' },
  { title: 'Απελπιστική η κατάσταση στα φράγματα παρά τις βροχοπτώσεις', url: 'https://24h.com.cy/apelpistiki-i-katastasi-sta-fragmata-para-tis-vrochoptoseis-poia-i-plirotita/', lang: 'el', source: '24h' },
  { title: '«Ψαλίδι» στο νερό: Πώς αποφασίστηκε η μείωση 10% στην υδροδότηση', url: 'https://www.alphanews.live/cyprus/psalidi-sto-nero-pos-apofasistike-i-meiosi-10-stin-ydrodotisi/', lang: 'el', source: 'AlphaNews' },
  { title: 'Στέρεψαν τα φράγματα, εφιαλτικό προμηνύεται το 2026', url: 'https://www.alphanews.live/cyprus/sterepsan-ta-fragmata-efialtiko-prominyetai-to-2026/', lang: 'el', source: 'AlphaNews' },
  { title: 'Οι βροχές έφεραν αύξηση στην εισροή νερού στα φράγματα – Η πληρότητα σήμερα', url: 'https://www.politis.com.cy/politis-news/cyprus/982479/oi-vrokhes-eferan-auksisi-stin-eisroi-nerou-sta-fraghmata-h-plirotita-simera-pinakas', lang: 'el', source: 'Politis' },
  { title: 'Ιστορική ξηρασία στην Κύπρο: Τα φράγματα στο χαμηλότερο επίπεδο από το 1901', url: 'https://www.ieidiseis.gr/kosmos/697415/istoriki-xirasia-stin-kypro-ta-fragmata-sto-chamilotero-epipedo-apo-to-1901-kathe-stagona-metraei/', lang: 'el', source: 'ieidiseis.gr' },
  { title: 'Έρχονται αυξήσεις στο νερό; Το δίλημμα του 2026 και το στοίχημα της αφαλάτωσης', url: 'https://www.tothemaonline.com/Article/447937/erhontai-ayxhseis-sto-nero-to-dilhmma-toy-2026-kai-to-stoihhma-ths-afalatwshs', lang: 'el', source: 'ToThemaOnline' },
  { title: 'Η Κύπρος καλεί τους κατοίκους να μειώσουν τη χρήση νερού κατά δύο λεπτά την ημέρα εν μέσω ξηρασίας', url: 'https://www.iefimerida.gr/kosmos/kypros-kalei-katoikoys-meiosoyn-hrisi-neroy-2-lepta', lang: 'el', source: 'iefimerida.gr' },
];

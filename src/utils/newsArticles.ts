import type { Locale } from './locale';

export interface NewsArticle {
  title: string;
  url: string;
  lang: Locale;
  source: string;
}

export const newsArticles: NewsArticle[] = [
  // English
  { title: 'Cyprus water emergency: Citizens urged to reduce water use as dams reach record low', url: 'https://www.euronews.com/green/2026/01/26/cyprus-water-emergency-citizens-urged-to-reduce-water-use-as-dams-reach-record-low', lang: 'en', source: 'Euronews' },
  { title: 'Water levels remain critically low despite recent rains', url: 'https://cyprus-mail.com/2026/02/16/water-levels-remain-critically-low-despite-recent-rains', lang: 'en', source: 'Cyprus Mail' },
  { title: 'Reservoirs remain critical at 13.8 per cent full', url: 'https://cyprus-mail.com/2026/02/11/reservoirs-remain-critical-at-13-8-per-cent-full', lang: 'en', source: 'Cyprus Mail' },
  { title: 'The battle over the desalination water fix', url: 'https://cyprus-mail.com/2026/02/01/the-battle-over-the-desalination-water-fix', lang: 'en', source: 'Cyprus Mail' },
  { title: 'The great water illusion', url: 'https://cyprus-mail.com/2026/02/01/the-great-water-illusion', lang: 'en', source: 'Cyprus Mail' },
  { title: 'Alarm grows over water shortages as dam inflows remain critically low', url: 'https://cyprus-mail.com/2025/12/30/alarm-grows-over-water-shortages-as-dam-inflows-remain-critically-low', lang: 'en', source: 'Cyprus Mail' },
  { title: 'Cyprus Faces Worst Drought in a Century as Reservoirs Hit Record Lows', url: 'https://see.news/cyprus-faces-worst-drought-in-a-century-as-reservoirs-hit-record-lows', lang: 'en', source: 'SEE News' },
  { title: 'Cyprus to Spend €196 Million in 2026 to Tackle Water Shortages', url: 'https://en.politis.com.cy/economy/economy-hot-spot/965677/cyprus-to-spend-eur196-million-in-2026-to-tackle-water-shortages', lang: 'en', source: 'Politis' },
  { title: 'Cyprus Dams in Crisis: Latest Water Levels and What They Mean in 2025', url: 'https://palscyprus.com/cyprus-dam-levels-2025/', lang: 'en', source: 'Pals Magazine' },

  // Russian
  { title: 'В водохранилищах Кипра скоро останется только грязь', url: 'https://evropakipr.com/istorii/v-vodohranilishchah-kipra-skoro-ostanetsya-tolko-gryaz', lang: 'ru', source: 'Европа Кипр' },
  { title: 'Дожди идут, но воды по-прежнему мало', url: 'https://vkcyprus.com/society/1467412349435-dozhdi-idut-no-vody-po-prezhnemu-malo/', lang: 'ru', source: 'Вестник Кипра' },
  { title: 'Кипр переживает худший водный кризис за десятилетие', url: 'https://cyprusbutterfly.com.cy/news/kipr-perezhivaet-xudshij-vodnyij-krizis', lang: 'ru', source: 'Cyprus Butterfly' },
  { title: 'Всего 11% воды в водохранилищах Кипра — но правительство уверяет, что запасов хватит', url: 'https://lenta.cy/vsego-11-vody-v-vodohranilishhah-kipra-no-pravitelstvo-uverjaet-chto-zapasov-hvatit/', lang: 'ru', source: 'Лента Кипра' },

  // Greek
  { title: 'Στέρεψαν τα φράγματα, εφιαλτικό προμηνύεται το 2026', url: 'https://www.alphanews.live/cyprus/sterepsan-ta-fragmata-efialtiko-prominyetai-to-2026/', lang: 'el', source: 'AlphaNews' },
  { title: 'Ξηραίνονται τα φράγματα: Νεκρά ψάρια κι αποκαρδιωτικές εικόνες στο «διψασμένο» Φράγμα Λεύκας', url: 'https://www.alphanews.live/cyprus/xirainontai-ta-fragmata-nekra-psaria-ki-apokardiotikes-eikones-sto-dipsasmeno-fragma-lefkas/', lang: 'el', source: 'AlphaNews' },
  { title: '«Ψαλίδι» στο νερό: Πώς αποφασίστηκε η μείωση 10% στην υδροδότηση', url: 'https://www.alphanews.live/cyprus/psalidi-sto-nero-pos-apofasistike-i-meiosi-10-stin-ydrodotisi/', lang: 'el', source: 'AlphaNews' },
  { title: 'Οι βροχές έφεραν αύξηση στην εισροή νερού στα φράγματα – Η πληρότητα σήμερα', url: 'https://www.politis.com.cy/politis-news/cyprus/982479/oi-vrokhes-eferan-auksisi-stin-eisroi-nerou-sta-fraghmata-h-plirotita-simera-pinakas', lang: 'el', source: 'Politis' },
  { title: 'Έρχονται αυξήσεις στο νερό; Το δίλημμα του 2026 και το στοίχημα της αφαλάτωσης', url: 'https://www.tothemaonline.com/Article/447937/erhontai-ayxhseis-sto-nero-to-dilhmma-toy-2026-kai-to-stoihhma-ths-afalatwshs', lang: 'el', source: 'ToThemaOnline' },
  { title: 'Μόλις 8,4% τα αποθέματα νερού στα φράγματα της Πάφου', url: 'https://dialogos.com.cy/molis-84-ta-apothemata-neroy-sta-fragmata-tis-pafoy/', lang: 'el', source: 'Dialogos' },
  { title: 'Η Κύπρος καλεί τους κατοίκους να μειώσουν τη χρήση νερού κατά δύο λεπτά την ημέρα εν μέσω ξηρασίας', url: 'https://www.iefimerida.gr/kosmos/kypros-kalei-katoikoys-meiosoyn-hrisi-neroy-2-lepta', lang: 'el', source: 'iefimerida.gr' },
];
